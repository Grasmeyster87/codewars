const { assert } = require('chai');
const simunq = require('./Simplify Unique');

describe('Simplify Unique', function () {
    it('Basic Tests', function () {
        assert.strictEqual(simunq('blah'), 'blah');
        assert.strictEqual(simunq('blah'), 'blah-2');
        assert.strictEqual(simunq('blah-2'), 'blah-2-2');
        assert.strictEqual(simunq('blah-1'), 'blah-1');
        assert.strictEqual(simunq('blah?'), 'blah-');
        assert.strictEqual(simunq('blah!'), 'blah--2');
        assert.strictEqual(simunq('blah…'), 'blah--3');
        assert.strictEqual(simunq('bléch'), 'bl-ch');
        assert.strictEqual(simunq('le bléch'), 'le bl-ch');

        simunq.reset();
        assert.strictEqual(simunq('blah'), 'blah');
    });
});
