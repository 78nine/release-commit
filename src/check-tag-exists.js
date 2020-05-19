// 3rd party modules
const when = require('when');

// Modules
const childProcess = require('./lib/child-process');

// Public
module.exports = checkTagExists;

// Implementation
function checkTagExists(options) {
  if (options.noTag || options.force) {
    return when.resolve(options);
  }

  return childProcess.exec('git tag --list ' + options.version)
    .then(output => {
      if (output.stdout === options.version) {
        return when.reject('A tag with name "' + options.version + '" already exists.');
      }

      return options;
    });
}
