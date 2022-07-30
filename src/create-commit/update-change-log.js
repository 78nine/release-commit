// Node modules
const path = require('path');

// 3rd party modules
const changelog = require('generate-changelog');

// Modules
const fs = require('../lib/fs');

// Public
module.exports = updateChangeLog;

// Implementation
function updateChangeLog(options) {
  return new Promise((resolve, reject) => {
    const config = {
      exclude: ['chore', 'style', 'other'],
      allowUnknown: false,
    };
    const readFile = path.join(options.directory, 'CHANGELOG.md');
    const writeFile = path.join(options.directory, '.CHANGELOG.md');
    const writeStream = fs.createWriteStream(writeFile);

    writeStream.on('finish', onWriteEnd);

    config[options.type || 'patch'] = true;

    changelog
      .generate(config)
      .then(writeChanges)
      .then(readRest);

    function writeChanges(chunk) {
      writeStream.write(chunk);
    }

    function readRest() {
      const rs = fs.createReadStream(readFile);

      rs.on('error', () => writeStream.end());

      rs.pipe(writeStream);
    }

    function onWriteEnd(error) {
      if (error) {
        reject(error);
      } else {
        fs.access(readFile, error => {
          if (error) {
            onUnlink();
          } else {
            fs.unlink(readFile, onUnlink);
          }
        });
      }
    }

    function onUnlink(error) {
      if (error) {
        reject(error);
      } else {
        fs.rename(writeFile, readFile, finish);
      }
    }

    function finish(error) {
      if (error) {
        reject(error);
      } else {
        resolve(options);
      }
    }
  });
}
