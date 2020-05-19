// Modules
const {exec} = require('../lib/child-process');

// Public
module.exports = bump;

// Implementation
function bump(options) {
  return exec(`npm version ${options.version} --no-git-tag-version --force`)
    .then(() => options);
}
