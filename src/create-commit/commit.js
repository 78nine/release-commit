// Modules
const childProcess = require('../lib/child-process');

// Public
module.exports = commit;

// Implementation
function commit(options) {
  const baseArgs = ['commit', '-m', 'chore(release): ' + options.version];
  const args = options.noVerify ? baseArgs.concat('--no-verify') : baseArgs;
  return childProcess.spawn('git', args).then(() => {
    return options;
  });
}
