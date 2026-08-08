function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}

module.exports = validPhoneNumber;

const phone_1 = '(123) 456-7890';
const phone_2 = '(1111)555 2345';

console.log(validPhoneNumber(phone_1));
console.log(validPhoneNumber(phone_2));
