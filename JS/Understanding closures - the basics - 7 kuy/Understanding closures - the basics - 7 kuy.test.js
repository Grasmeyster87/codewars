const { assert } = require('chai');
const buildFun = require('./Understanding closures - the basics - 7 kuy');

describe('Tests', () => {
    it('test', () => {
        for (let i = 0; i < 10; i++) {
            assert.strictEqual(buildFun(10)[i](), i);
        }
    });
});
