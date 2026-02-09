const { assert } = require('chai');
const solution = require('./First Fibonacci - 7 kuy');

describe('First Fibonacci', () => {
    it('example tests', () => {
        assert.deepEqual(solution(398, 644), [2, 6], `solution(398,644)`);
        assert.deepEqual(solution(15, 28), [2, 13], `solution(15,28)`);
        assert.deepEqual(solution(186, 301), [3, 7], `solution(186,301)`);
        assert.deepEqual(solution(265, 429), [1, 12], `solution(265,429)`);
        assert.deepEqual(solution(1186, 1919), [2, 7], `solution(1186,1919)`);
    });
});
