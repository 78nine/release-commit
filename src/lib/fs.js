// 3rd party modules
const fs = require('graceful-fs');
const {promisify} = require('util');

// Public
module.exports = {
  access: fs.access,
  createReadStream: fs.createReadStream,
  createWriteStream: fs.createWriteStream,
  rename: fs.rename,
  unlink: fs.unlink,
  writeFile: promisify(fs.writeFile)
};
