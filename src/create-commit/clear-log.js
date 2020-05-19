// Node modules
const path = require('path');

// Modules
const childProcess = require('../lib/child-process');

// Public
module.exports = clearLog;

// Implementation
function clearLog(options) {
  return childProcess.exec('rm -f ' + path.resolve(options.directory, 'CHANGELOG.md'))
    .then(() => {
      return options;
    });
}
