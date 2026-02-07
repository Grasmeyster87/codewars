const { assert } = require('chai');
const isBalanced = require('./All that is open must be closed - 5 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(isBalanced('(Sensei says yes!)', '()'), true);
        assert.strictEqual(isBalanced('(Sensei says no!', '()'), false);

        assert.strictEqual(isBalanced('(Sensei [says] yes!)', '()[]'), true);
        assert.strictEqual(isBalanced('(Sensei [says) no!]', '()[]'), false);

        assert.strictEqual(isBalanced('Sensei says -yes-!', '--'), true);
        assert.strictEqual(isBalanced('Sensei -says no!', '--'), false);
    });
});
