describe('Sample tests', function () {
    const chai = require('chai'),
        { strictEqual, deepEqual } = chai.assert;
    chai.config.truncateThreshold = 1;
    const {
        john,
        ann,
        sumJohn,
        sumAnn,
    } = require('./John and Ann sign up for Codewars - 5 kuy');

    function doTest(func, n, expected) {
        const actual = func(n);
        const message = `for ${func.name}(${n})\n`;
        if (func === sumAnn || func === sumJohn)
            strictEqual(actual, expected, message);
        else deepEqual(actual, expected, message);
    }

    it('john', function () {
        doTest(john, 11, [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]);
        doTest(john, 14, [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8]);
        doTest(john, 9, [0, 0, 1, 2, 2, 3, 4, 4, 5]);
        doTest(john, 5, [0, 0, 1, 2, 2]);
    });

    it('ann', function () {
        doTest(ann, 6, [1, 1, 2, 2, 3, 3]);
        doTest(ann, 15, [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 8, 9]);
        doTest(ann, 11, [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]);
        doTest(ann, 12, [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7]);
    });

    it('sumAnn', function () {
        doTest(sumAnn, 115, 4070);
        doTest(sumAnn, 150, 6930);
        doTest(sumAnn, 112, 3860);
        doTest(sumAnn, 83, 2118);
        doTest(sumAnn, 59, 1069);
    });

    it('sumJohn', function () {
        doTest(sumJohn, 75, 1720);
        doTest(sumJohn, 78, 1861);
        doTest(sumJohn, 85, 2212);
        doTest(sumJohn, 76, 1766);
        doTest(sumJohn, 99, 3005);
        doTest(sumJohn, 1000, 308819);
    });
});
