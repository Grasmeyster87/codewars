const { assert } = require('chai');
const oneDown = require('./One down - 6 kuy');

describe('Tests', () => {
    it('test', () => {
        assert.equal(oneDown('Ifmmp'), 'Hello');
        assert.equal(
            oneDown('Uif usjdl up uijt lbub jt tjnqmf'),
            'The trick to this kata is simple',
        );
        assert.equal(oneDown(45), 'Input is not a string');
    });
});
