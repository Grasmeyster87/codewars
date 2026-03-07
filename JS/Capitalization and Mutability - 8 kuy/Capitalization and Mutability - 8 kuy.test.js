const { assert } = require('chai');
const capitalizeWord = require('./Capitalization and Mutability - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(capitalizeWord('word'), 'Word');
        assert.strictEqual(capitalizeWord('i'), 'I');
        assert.strictEqual(capitalizeWord('glasswear'), 'Glasswear');
    });
});