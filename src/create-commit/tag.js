// 3rd party modules
const when = require('when');

// Modules
const childProcess = require('../lib/child-process');
const checkTagExists = require('./check-tag-exists');

// Public
module.exports = tag;

// Implementation
function tag(options) {
  if (options.tag) {
    return checkTagExists(options)
      .then(
        options => {
          return childProcess
            .exec('git tag ' + options.version + (options.force ? ' --force' : ''))
            .then(() => {
              return options;
            });
        }
      )
      .catch(
        error => {
          return error;
        }
      );
  }

  return when.resolve(options);
}
