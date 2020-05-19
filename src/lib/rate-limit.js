// 3rd party modules
const guard = require('when/guard');

// Public
module.exports = rateLimit;

// Implementation
const condition = guard.n(10);

function rateLimit(fn) {
  return guard(condition, fn);
}
