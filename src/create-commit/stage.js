// Modules
const childProcess = require('../lib/child-process');

// Public
module.exports = stage;

// Implementation
function stage(options) {
  return childProcess.exec('git add . -A').then(() => {
    return options;
  });
}
