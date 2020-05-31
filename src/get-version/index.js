// 3rd party modules
const explodeVersion = require('../lib/explode-version');
const getCurrentVersion = require('../lib/get-current-version');
const bump = require('./bump');

// Public
module.exports = getVersion;

// Implementation
function getVersion(options) {
  if (options.overrideVersion) {
    options.version = options.overrideVersion;

    const newVersion = explodeVersion(options.version);
    const currentVersion = getCurrentVersion(options.directory);

    options.type = ['major', 'minor', 'patch'].reverse().reduce((type, name) => {
      if (newVersion[name] !== currentVersion[name]) {
        type = name;
      }

      return type;
    });

    return Promise.resolve(options);
  }

  return new Promise((resolve, reject) => {
    bump.get(options)
      .then(version => {
        options.version = version.number;
        options.type = version.type;

        resolve(options);
      })
      .catch(error => reject(error));
  });
}
