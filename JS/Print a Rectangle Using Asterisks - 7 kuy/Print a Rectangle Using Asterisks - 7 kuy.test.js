const { assert, config } = require('chai');
config.truncateThreshold = 0;
const getRectangleString = require('./Print a Rectangle Using Asterisks - 7 kuy');

describe('sample tests', function () {
    it('Test 1 x 1', function () {
        let expected = '*\r\n';
        assert.equal(getRectangleString(1, 1), expected);
    });

    it('Test 1 x 2', function () {
        let expected = '*\r\n' + '*\r\n';
        assert.equal(getRectangleString(1, 2), expected);
    });

    it('Test 2 x 2', function () {
        let expected = '**\r\n' + '**\r\n';
        assert.equal(getRectangleString(2, 2), expected);
    });

    it('Test 3 x 3', function () {
        let expected = '***\r\n' + '* *\r\n' + '***\r\n';
        assert.equal(getRectangleString(3, 3), expected);
    });

    it('Test 5 x 7', function () {
        let expected =
            '*****\r\n' +
            '*   *\r\n' +
            '*   *\r\n' +
            '*   *\r\n' +
            '*   *\r\n' +
            '*   *\r\n' +
            '*****\r\n';
        assert.equal(getRectangleString(5, 7), expected);
    });
});
