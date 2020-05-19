// Node modules
const path = require('path');

// Public
module.exports = checkVersion;

// Implementation
function checkVersion(options) {
  return new Promise((resolve, reject) => {
    const pkgPath = path.resolve(options.directory, 'package.json');
    const pkg = require(pkgPath);

    if (options.version === pkg.version) {
      reject(new Error(`Current version is already ${options.version}`));
    } else {
      resolve(options);
    }
  });
}
