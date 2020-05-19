// Modules
const {exec} = require('../lib/child-process');

// Public
module.exports = checkTagExists;

// Implementation
function checkTagExists(options) {
  if (!options.tag || options.force) {
    return Promise.resolve(options);
  }

  const {version} = options;

  return exec(`git tag --list ${version}`)
    .then(({stdout}) => {
      if (stdout === version) {
        return Promise.reject(new Error(`A tag with name "${version}" already exists.`));
      }

      return options;
    });
}
