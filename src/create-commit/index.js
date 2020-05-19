// Modules
const bump = require('./bump');
const checkVersion = require('./check-version');
const commit = require('./commit');
const stage = require('./stage');
const tag = require('./tag');
const updateChangeLog = require('./update-change-log');
const updateDependencyLog = require('./update-dependency-log');

// Public
module.exports = createCommit;

// Implementation
function createCommit(options) {
  return checkVersion(options)
    .then(bump)
    .then(updateChangeLog)
    .then(updateDependencyLog)
    .then(stage)
    .then(commit)
    .then(tag);
}
