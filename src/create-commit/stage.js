// Modules
const {exec} = require('../lib/child-process');

// Public
module.exports = stage;

// Implementation
function stage(options) {
  return exec('git add . -A').then(() => options);
}
