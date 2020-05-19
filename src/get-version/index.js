// 3rd party modules
const when = require('when');
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

    return when.resolve(options);
  }

  return when.promise((resolve, reject) => {
    bump.get(options, (err, version) => {
      if (err) {
        reject(err);
      } else {
        options.version = version.number;
        options.type = version.type;

        resolve(options);
      }
    });
  });
}
