// 3rd party modules
const execa = require('execa');

// Modules
const rateLimit = require('./rate-limit');

// Public
module.exports = {
  exec: rateLimit(execa.command),
  spawn: execa
};
