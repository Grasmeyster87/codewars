const { expect } = require('chai');
const deleteValues = require('./Deletion in an array - 7 kuy');

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 === 1;
}

describe('Deletion in an array', function () {
    it('should delete even elements', function () {
        var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
        expect(deleteValues(arr, isEven)).to.deep.equal([1, 3, 5, 7, 9]);
    });
    it('should delete odd elements', function () {
        var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
        expect(deleteValues(arr, isOdd)).to.deep.equal([2, 4, 6, 8, 10]);
    });
    it('should delete everything', function () {
        var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
        expect(deleteValues(deleteValues(arr, isOdd), isEven)).to.be.empty;
    });
    it('should modify the input array', function () {
        var arr = [1, 3, 2, 4, 5, 7, 6, 8, 10, 9];
        deleteValues(arr, isEven);
        expect(arr).to.deep.equal([1, 3, 5, 7, 9]);
    });
});
