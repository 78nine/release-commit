// 3rd party modules
const fs = require('graceful-fs');
const {promisify} = require('util');

// Public
module.exports = {
  createReadStream: fs.createReadStream,
  createWriteStream: fs.createWriteStream,
  rename: fs.rename,
  unlink: fs.unlink,
  writeFile: wrap(fs.writeFile)
};

function wrap(fn) {
  return promisify(fn);
}
