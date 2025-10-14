/*
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.

//--------------------

Заданное количество минут переведите в удобочитаемую временную метку.

Например: 100 минут равны «1 час 40 минут». А 52874 минуты равны «1 месяц 1 неделя 1 день 17 часов 14 минут».

Учитывая, что в каждом месяце 28 дней.

Максимальное количество минут, которое вам придётся проверить, меньше года, поэтому вам придётся перевести его в месяцы, недели, дни, часы и минуты.

*/
const value = 145000;

function displayValue(value) {
    if (value <= 0) return 'value less than zero';

    const MINUTES_IN_HOUR = 60;
    const MINUTES_IN_DAY = 1440;
    const MINUTES_IN_WEEK = 10080;
    const MINUTES_IN_MONTH = 40320; // 28 days

    let result = [];

    let months = Math.floor(value / MINUTES_IN_MONTH);
    value %= MINUTES_IN_MONTH;

    let weeks = Math.floor(value / MINUTES_IN_WEEK);
    value %= MINUTES_IN_WEEK;

    let days = Math.floor(value / MINUTES_IN_DAY);
    value %= MINUTES_IN_DAY;

    let hours = Math.floor(value / MINUTES_IN_HOUR);
    let minutes = value % MINUTES_IN_HOUR;

    if (months > 0) result.push(`${months} month${months > 1 ? 's' : ''}`);
    if (weeks > 0) result.push(`${weeks} week${weeks > 1 ? 's' : ''}`);
    if (days > 0) result.push(`${days} day${days > 1 ? 's' : ''}`);
    if (hours > 0) result.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    if (minutes > 0 || result.length === 0) result.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);

    return result.join(' ');
}



let res = displayValue(value);
console.log(res);

/*test
describe("Tests", function () {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;

    it('Sample Tests', function () {
        assert.strictEqual(displayValue(1), "1 minute");
        assert.strictEqual(displayValue(100), "1 hour 40 minutes");
        assert.strictEqual(displayValue(40321), "1 month 1 minute");
        assert.strictEqual(displayValue(52874), "1 month 1 week 1 day 17 hours 14 minutes");
    });
});
*/