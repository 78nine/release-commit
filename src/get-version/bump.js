// Modules
const bump = require('conventional-recommended-bump');
const getCurrentVersion = require('../lib/get-current-version');

// Public
module.exports = {
  get
};

// Implementation
function get(options) {
  return new Promise((resolve, reject) => {
    const currentVersion = getCurrentVersion(options.directory);
    const postfix = getPostfix(options);

    checkBump()
      .then(bumpVersion)
      .then(onSuccess)
      .catch(onError);

    function onSuccess(version) {
      resolve(version);
    }

    function onError(message) {
      reject(message);
    }

    function bumpVersion(result) {
      const v = {major: 0, minor: 0, patch: 0};

      switch (result.releaseType) {
        case 'major':
          v.major = currentVersion.major + 1;
          break;
        case 'minor':
          v.major = currentVersion.major;
          v.minor = currentVersion.minor + 1;
          break;
        case 'patch':
        default:
          v.major = currentVersion.major;
          v.minor = currentVersion.minor;
          v.patch = currentVersion.patch + 1;
      }

      return {
        number: [v.major, v.minor, v.patch].join('.') + postfix,
        type: result.releaseType
      };
    }
  });
}

function checkBump() {
  return new Promise((resolve, reject) => {
    bump({
      preset: 'angular'
    }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getPostfix({postfix}) {
  return postfix ? `-${postfix}` : '';
}
