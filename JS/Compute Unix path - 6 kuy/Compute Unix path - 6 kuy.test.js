describe('test suite', function () {
    const { assert, config } = require('chai');
    const combinePathsUri = require('./Compute Unix path - 6 kuy');
    config.truncateThreshold = 0;

    it('sample tests', function () {
        assert.strictEqual(combinePathsUri(), '/');
        assert.strictEqual(
            combinePathsUri('google', 'search', 'test'),
            '/google/search/test',
        );
        assert.strictEqual(
            combinePathsUri(
                '   /testing',
                '',
                '',
                '  \\  empty',
                '\\parts/',
                ' and ',
                '',
                'with/different\\slashes    ',
            ),
            '/testing/empty/parts/and/with/different/slashes',
        );
        assert.strictEqual(
            combinePathsUri(
                ' .. ',
                '/complex/path/with/slashes/inside/',
                ' . ',
                '\\complex\\path\\with\\back\\slashes\\inside\\',
            ),
            '/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside',
        );
    });
});
