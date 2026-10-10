const { assert } = require('chai');
const brainLuck = require('./My smallest code interpreter (aka Brainfk)');

describe('Tests', () => {
    it('test', () => {
        // Echo until byte(255) encountred
        assert.strictEqual(
            brainLuck(',+[-.,+]', 'Codewars' + String.fromCharCode(255)),
            'Codewars',
        );

        // Echo until byte(0) encountred
        assert.strictEqual(
            brainLuck(',[.[-],]', 'Codewars' + String.fromCharCode(0)),
            'Codewars',
        );

        // Two numbers multiplier
        assert.strictEqual(
            brainLuck(
                ',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.',
                String.fromCharCode(8, 9),
            ),
            String.fromCharCode(72),
        );
    });
});