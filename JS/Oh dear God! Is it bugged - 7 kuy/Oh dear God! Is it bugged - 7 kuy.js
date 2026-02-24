function isItBugged(code) {
    const regex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;
    return regex.test(code);
};

console.log(isItBugged("14-10-1066 12:00")); // true
module.exports = isItBugged;