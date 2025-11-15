// Don't use console.log, because your algorithm is to slow then...
const crypto = require('crypto');

function crack(hash) {
    for (let i = 0; i <= 99999; i++) {
        const pin = i.toString().padStart(5, '0'); // Преобразуем число в строку длиной 5 символов
        const hashed = crypto.createHash('md5').update(pin).digest('hex');
        if (hashed === hash) {
            return pin;
        }
    }
    return null; // Если не нашли
}

module.exports = crack;