// Node modules
const path = require('path');

// 3rd party modules
const pathToPackageJsonToReadme = require.resolve('package-json-to-readme');

// Modules
const childProcess = require('../lib/child-process');
const fs = require('../lib/fs');

// Public
module.exports = updateDependencyLog;

// Implementation
function updateDependencyLog(options) {
  const pkgPath = path.resolve(options.directory, 'package.json');
  const logFile = path.resolve(options.directory, 'DEPENDENCIES.md');
  return childProcess.spawn('node', [pathToPackageJsonToReadme, '--no-footer', pkgPath])
    .then(logData => {
      return fs.writeFile(logFile, logData.stdout);
    })
    .then(() => {
      return options;
    });
}
