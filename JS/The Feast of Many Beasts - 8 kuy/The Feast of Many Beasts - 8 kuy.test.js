const Test = require('@codewars/test-compat');
const feast = require('./The Feast of Many Beasts - 8 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(feast('great blue heron', 'garlic naan'), true);
        assert.equal(feast('chickadee', 'chocolate cake'), true);
        assert.equal(feast('brown bear', 'bear claw'), false);
    });
});
