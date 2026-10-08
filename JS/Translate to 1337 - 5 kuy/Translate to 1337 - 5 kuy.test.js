const { assert } = require('chai');
const {toLeet, SCROLL} = require('./Translate to 1337 - 5 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(toLeet('surprise'), '5u|Z|2|?1$3');
        assert.equal(toLeet('hello world'), '|-|3|_|_0 \\^/0|Z|_|)');
        assert.equal(toLeet('aaaa'), '4@4@');
        assert.equal(toLeet('pancakes'), '|24|\\|c@|<35');
        assert.equal(toLeet('meth'), 'm3+|-|');
        assert.equal(toLeet('no no no no no'), '|\\|0 |\\|0 |\\|0 |\\|0 |\\|0');
        assert.equal(toLeet('no'), '|\\|0');
        assert.equal(toLeet('what is this'), '\\^/|-|4+ 15 7]-[!$');
        assert.equal(toLeet('stupid'), '5+u|21|)');
        // writing your own test cases may help you.
    });
});
