#!/usr/bin/env node

// 3rd party modules
const chalk = require('chalk');
const { program } = require('commander');

// Data
const package = require('./package.json');

// Modules
const commitRelease = require('./src/commit-release');

// Implementation
program
  .version(package.version)
  .option('-f, --force', 'overwrite tag if it exists already')
  .option('-n, --no-verify', 'skip git commit hooks')
  .option('-o, --override [version]', 'override recommended version number', '')
  .option('-p, --postfix [name]', 'a postfix such as "rc1", "canary" or "beta1"', '')
  .option('-t, --tag', 'also tag the commit')
  .parse(process.argv);

commitRelease({
  directory: process.cwd(),
  force: program.force,
  tag: program.tag,
  noVerify: !program.verify,
  overrideVersion: program.override,
  postfix: program.postfix
}, onComplete);

function onComplete(err, options) {
  if (err) {
    console.error(chalk.red(err.message ? err.message : err));
    process.exit(1);
  }
  console.log(chalk.green(
    'Release ' + options.version + ' committed' +
    (options.tag ? ' and tagged' : '') +
    ', changelog updated.'));
}
