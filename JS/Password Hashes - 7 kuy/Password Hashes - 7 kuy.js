const crypto = require('crypto');
function passHash(str) {
    return crypto.createHash('md5').update(str, 'utf8').digest('hex');
}
console.log(passHash('Hello world!'));
module.exports = passHash;