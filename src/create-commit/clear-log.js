// Node modules
const path = require('path');

// Modules
const {exec} = require('../lib/child-process');

// Public
module.exports = clearLog;

// Implementation
function clearLog(options) {
  return exec(`rm -f ${path.resolve(options.directory, 'CHANGELOG.md')}`)
    .then(() => options);
}
