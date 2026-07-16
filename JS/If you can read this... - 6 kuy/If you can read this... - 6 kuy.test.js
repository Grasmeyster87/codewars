describe('Tests', function () {
    const chai = require('chai'),
        { strictEqual } = chai.assert;
    chai.config.truncateThreshold = 0;
    const toNato = require('./Integer complexity - 5 kuy');

    function doTest(input, expected) {
        const actual = toNato(input);
        assert.strictEqual(actual, expected, `for string = "${input}"\n`);
    }

    it('Sample Tests', function () {
        doTest(
            'If you can read',
            'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta',
        );
        doTest(
            'Did not see that coming',
            'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf',
        );
        doTest('go for it!', 'Golf Oscar Foxtrot Oscar Romeo India Tango !');
    });
});
