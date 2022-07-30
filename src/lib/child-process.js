// 3rd party modules
const execa = require('execa');

// Public
module.exports = {
  exec: execa.command,
  spawn: execa,
};
