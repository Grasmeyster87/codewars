describe("Tests", function() {
    const chai = require("chai"), { assert } = chai;
    chai.config.truncateThreshold = 0;
    const sortNested3 = require('./Sort only integers in Nested List - 6 kuy');

    function doTest(input, expected) {
        const message = `for input = ${JSON.stringify(input, undefined, 2)}\n\n`;
        const actual = sortNested3(input);
        assert.deepEqual(actual, expected, message);
    }

    it("Sample Tests", function() {
        doTest([[[ ]]], [[[]]]);

        doTest([[[ 3, 2, 1 ]]], [[[ 1, 2, 3 ]]]);

        doTest(
            [ [ [2, 1], [4, 3] ], [ [6, 5], [8, 7] ] ],
            [ [ [1, 2], [3, 4] ], [ [5, 6], [7, 8] ] ]
        );

        doTest([[[ 15, 30, 92 ]]],  [[[ 15, 30, 92 ]]]);

        doTest(
            [ [ [82, 87], [47, 44] ], [ [70, 94], [40, 64] ] ],
            [ [ [40, 44], [47, 64] ], [ [70, 82], [87, 94] ] ]
        );

        doTest(
            [ [ [29, 32], [82, 61], [75, 91] ], [ [69, 99], [74, 23], [70, 97] ] ],
            [ [ [23, 29], [32, 61], [69, 70] ], [ [74, 75], [82, 91], [97, 99] ] ]
        );

        doTest(
            [ [ [18, 26], [53, 92] ], [ [49, 72], [65, 88] ], [ [89, 53], [21, 96] ] ],
            [ [ [18, 21], [26, 49] ], [ [53, 53], [65, 72] ], [ [88, 89], [92, 96] ] ]
        );
    });
});