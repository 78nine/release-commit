// 3rd party modules
const fs = require('graceful-fs');
const whenNode = require('when/node');

// Modules
const rateLimit = require('./rate-limit');

// Public
module.exports = {
  createReadStream: fs.createReadStream,
  createWriteStream: fs.createWriteStream,
  rename: fs.rename,
  unlink: fs.unlink,
  writeFile: wrap(fs.writeFile)
};

function wrap(fn) {
  return rateLimit(whenNode.lift(fn));
}
