describe('Tests', function () {
    const { assert } = require('chai');
    const isUndefined = require('./Is Undefined - 7 kuy');

    it('Sample Tests', function () {
        assert.isTrue(isUndefined(undefined));
        assert.isFalse(isUndefined(0));
        assert.isFalse(isUndefined(null));
        assert.isFalse(isUndefined(NaN));
        assert.isFalse(isUndefined('undefined'));
        assert.isFalse(isUndefined(''));
        assert.isFalse(isUndefined({}));
        assert.isFalse(isUndefined([]));
        assert.isFalse(
            isUndefined({
                valueOf() {
                    return undefined;
                },
            }),
        );
    });
});
