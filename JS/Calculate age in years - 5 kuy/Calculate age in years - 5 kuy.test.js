const { assert, config } = require('chai');
config.truncateThreshold = 0;
const getAge = require('./Calculate age in years - 5 kuy'); // импорт должен быть до использования

describe('Fixed Tests', () => {
    const cases = [
        ['1976/11/19', '2013/01/01', 36],
        ['2013/01/01', '2014/01/01', 1],
        ['2014/01/01', '2013/01/01', -1],
        ['2013/01/01', '2013/01/01', 0],
        ['2008/02/29', '2032/03/01', 24],
        ['2008/02/29', '2009/02/28', 0],
    ];
    for (const [birthDate, nowDate, expected] of cases) {
        it(`birthDate ${birthDate}, now ${nowDate}`, () => {
            assert.strictEqual(
                getAge(new Date(birthDate), new Date(nowDate)),
                expected,
            );
        });
    }
});
