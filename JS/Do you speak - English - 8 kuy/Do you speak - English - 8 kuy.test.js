const { assert } = require('chai');
const spEng = require('./Do you speak - English - 8 kuy');

describe('Tests', () => {
    it('should test example cases', () => {
        assert.strictEqual(spEng('english'), true);
        assert.strictEqual(spEng('egnlish'), false);
    });
});
