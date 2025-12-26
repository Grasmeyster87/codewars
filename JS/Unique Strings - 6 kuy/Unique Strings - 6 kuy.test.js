const { assert } = require('chai');
const uniqCount = require('./Unique Strings - 6 kuy');

describe('Unique Strings', function () {
    it('result type check', function () {
        assert.strictEqual(
            typeof uniqCount(''),
            'bigint',
            `result should be a BigInt`
        );
    });
    it('example tests', function () {
        assert.strictEqual(uniqCount(''), 1n, `uniqCount("")`);
        assert.strictEqual(uniqCount('Aa'), 1n, `uniqCount("Aa")`);
        assert.strictEqual(uniqCount('ABa'), 3n, `uniqCount("ABa")`);
        assert.strictEqual(
            uniqCount('ABcDEFgHIJ'),
            3628800n,
            `uniqCount("ABcDEFgHIJ")`
        );
        assert.strictEqual(
            uniqCount('ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASH'),
            34111429518116758488933545882757275627520000000n,
            `uniqCount("ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASH")`
        );
        assert.strictEqual(
            uniqCount(
                'ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASHVVYQVWKDVDWQUV'
            ),
            176478346352319876826993574633158714419916931040323433922560000000n,
            `uniqCount("ABcDEFgHIJbaslidbailsbdilasbdkanmsdklhkbHSJKHVDASHVVYQVWKDVDWQUV")`
        );
    });
});
