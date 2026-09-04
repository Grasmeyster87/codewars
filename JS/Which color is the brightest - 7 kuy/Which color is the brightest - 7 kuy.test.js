const chai = require('chai');
const assert = chai.assert;
const brightest = require('./Which color is the brightest - 7 kuy');

function dotest(arr, expected) {
    const actual = brightest(arr.slice());
    assert.deepEqual(actual, expected, `Test failed with colors = ${arr}`);
}

describe('Fixed tests', function () {
    it('Basic tests', function () {
        dotest(['#001000', '#000000'], '#001000');
        dotest(['#ABCDEF', '#123456'], '#ABCDEF');
        dotest(['#00FF00', '#FFFF00'], '#00FF00');
        dotest(['#FFFFFF', '#1234FF'], '#FFFFFF');
        dotest(['#FFFFFF', '#123456', '#000000'], '#FFFFFF');
    });
});
