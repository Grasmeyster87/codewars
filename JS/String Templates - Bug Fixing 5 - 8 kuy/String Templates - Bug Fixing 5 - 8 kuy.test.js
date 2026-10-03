const assert = require('chai').assert;
const buildString = require('./String Templates - Bug Fixing 5 - 8 kuy');

describe('Fixed Tests', function () {
    it('Fixed Tests', function () {
        assert.strictEqual(
            buildString('Cheese', 'Milk', 'Chocolate'),
            'I like Cheese, Milk, Chocolate!',
            'Return the correct String',
        );
        assert.strictEqual(
            buildString('Cheese', 'Milk'),
            'I like Cheese, Milk!',
            'Return the correct String',
        );
        assert.strictEqual(
            buildString('Chocolate'),
            'I like Chocolate!',
            'Return the correct String',
        );
    });
});
