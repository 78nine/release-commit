// Modules
const {spawn} = require('../lib/child-process');

// Public
module.exports = commit;

// Implementation
function commit(options) {
  const baseArgs = ['commit', '-m', `chore(release): ${options.version}`];
  const args = options.noVerify ? baseArgs.concat('--no-verify') : baseArgs;
  return spawn('git', args).then(() => options);
}
