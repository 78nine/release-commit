#!/usr/bin/env node

// 3rd party modules
const process = require('process');
const chalk = require('chalk');
const {program} = require('commander');

// Modules
const c = require('./src/lib/console');
const commitRelease = require('./src/commit-release');

// Implementation
program
  .version(require('./package.json').version)
  .option('-f, --force', 'overwrite tag if it exists already')
  .option('-n, --no-verify', 'skip git commit hooks')
  .option('-o, --override [version]', 'override recommended version number', '')
  .option('-p, --postfix [name]', 'a postfix such as "rc1", "canary" or "beta1"', '')
  .option('-t, --tag', 'also tag the commit')
  .option('-d, --debug', 'useful if you face any error; outputs full error stack trace')
  .parse(process.argv);

const options = {
  directory: process.cwd(),
  force: program.force,
  tag: program.tag,
  noVerify: !program.verify,
  overrideVersion: program.override,
  postfix: program.postfix,
};

commitRelease(options)
  .then(onSuccess)
  .catch(onError);

function onSuccess({version, tag}) {
  c.log(
    chalk.green(
      `Release ${version} committed${(tag ? ' and tagged' : '')}; changelog updated.`,
    ),
  );
}

function onError(error) {
  c.error(chalk.red(error.message ? error.message : error));
  if (program.debug) {
    c.error(error.stack);
  }

  process.exit(1);
}
