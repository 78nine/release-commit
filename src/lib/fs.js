// 3rd party modules
const {promisify} = require('util');
const fs = require('graceful-fs');

// Public
module.exports = {
  access: fs.access,
  createReadStream: fs.createReadStream,
  createWriteStream: fs.createWriteStream,
  rename: fs.rename,
  unlink: fs.unlink,
  writeFile: promisify(fs.writeFile),
};
