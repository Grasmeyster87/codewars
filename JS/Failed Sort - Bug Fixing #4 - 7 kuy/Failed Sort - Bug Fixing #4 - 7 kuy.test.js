const { assert } = require('chai');
const sortArray = require('./Failed Sort - Bug Fixing #4 - 7 kuy');


describe('Fixed tests', () => {
    it("sortArray('12345')", () => {
        assert.strictEqual(sortArray('12345'), '12345');
    });

    it("sortArray('54321')", () => {
        assert.strictEqual(sortArray('54321'), '12345');
    });

    it("sortArray('34251')", () => {
        assert.strictEqual(sortArray('34251'), '12345');
    });
});