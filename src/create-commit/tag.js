// Modules
const {exec} = require('../lib/child-process');
const checkTagExists = require('./check-tag-exists');

// Public
module.exports = tag;

// Implementation
function tag(options) {
  if (options.tag) {
    return checkTagExists(options)
      .then(options => exec(`git tag ${options.version}${(options.force ? ' --force' : '')}`)
        .then(() => options))
      .catch(error => error);
  }

  return Promise.resolve(options);
}
