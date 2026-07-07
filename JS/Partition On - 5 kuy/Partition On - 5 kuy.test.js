const { assert } = require('chai');
const partitionOn = require('./Partition On - 5 kuy');

describe('Tests', () => {
    it('test', () => {
        let items = [1, 2, 3, 4, 5, 6];
        function isEven(n) {
            return n % 2 == 0;
        }
        let i = partitionOn(isEven, items);
        assert.strictEqual(i, 3, 'partioned at 3');
        assert.deepEqual(items.slice(0, i), [1, 3, 5]);
        assert.deepEqual(items.slice(i), [2, 4, 6]);
    });
});
