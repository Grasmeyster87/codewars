// files are created in the root of the disk 

const fs = require('fs');
const path = require('path');

function mkdirp(...segments) {
  const dirPath = path.join(...segments);
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (err) {
    if (err && err.code !== 'EEXIST') throw err;
  }
}

module.exports = mkdirp;

// Приклад використання:
mkdirp('/', 'tmp', 'made', 'some', 'dir');