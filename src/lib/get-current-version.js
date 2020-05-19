// Modules
const explodeVersion = require('./explode-version');

// Public
module.exports = getCurrentVersion;

// Implementation
function getCurrentVersion(dir) {
  return explodeVersion(require(`${dir}/package.json`).version);
}
