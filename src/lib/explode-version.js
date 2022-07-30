// Definitions
const levels = ['major', 'minor', 'patch', 'postfix'];

// Public
module.exports = explodeVersion;

// Implementation
function explodeVersion(string) {
  return string.split('.')
    .reduce(assignLevel, {});
}

function assignLevel(object, number, i) {
  if (i === 2) {
    number = number.split('-');
    object[levels[i + 1]] = number[1] || '';
    number = number[0];
  }

  if (i < 3) {
    object[levels[i]] = Number.parseInt(number, 10);
  }

  return object;
}
