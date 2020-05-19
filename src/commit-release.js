// Modules
const createCommit = require('./create-commit');
const getVersion = require('./get-version');

// Public
module.exports = commitRelease;

// Implementation
function commitRelease(options) {
  return new Promise((resolve, reject) => {
    getVersion(options)
      .then(createCommit)
      .then(onSuccess)
      .catch(onError);

    function onSuccess() {
      resolve(options);
    }

    function onError(message) {
      reject(message);
    }
  });
}
