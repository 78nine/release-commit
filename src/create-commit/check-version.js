// Node modules
const path = require('path');

// 3rd party modules
const when = require('when');

// Public
module.exports = checkVersion;

// Implementation
function checkVersion(options) {
  return when.promise((resolve, reject) => {
    const pkgPath = path.resolve(options.directory, 'package.json');
    const pkg = require(pkgPath);

    if (options.version === pkg.version) {
      const err = new Error('Current version is already ' + options.version);
      reject(err);
    } else {
      resolve(options);
    }
  });
}
