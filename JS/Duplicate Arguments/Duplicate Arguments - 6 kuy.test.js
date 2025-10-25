const { assert, config } = require('chai');
const solution  = require('./Duplicate Arguments - 6 kuy');
config.truncateThreshold = 0;

describe("solution", function() {
  it("Sample tests", function() {
    function tester(input, expected, duplicates) {
      const str_args = JSON.stringify(input).slice(1, -1);
      const str_dups = duplicates ? JSON.stringify(duplicates).slice(1, -1) : "no duplicates";
      assert.strictEqual(solution(...input), expected, `Failed for solution(${str_args})\nduplicates: ${str_dups}\n`);
    }

    tester([1, 2, 3], false);
    tester([1, 2, 3, 6, 5, 6], true, [6]);
    tester(['a', 'b', 'c', 'a'], true, ["a"]);
    tester([1, 2, 3, 'a', 'b'], false);
  });
});
