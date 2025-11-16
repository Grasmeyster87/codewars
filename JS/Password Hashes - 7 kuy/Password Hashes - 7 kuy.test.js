const chai = require("chai");
const assert = chai.assert;
const passHash = require('./Password Hashes - 7 kuy');
chai.config.truncateThreshold = 0;

describe("Tests", () => {
    it("test", () => {
        var tests = [
            ['password', '5f4dcc3b5aa765d61d8327deb882cf99'],
            ['abc123', 'e99a18c428cb38d5f260853678922e03']
        ];

        for (var i = 0; i < tests.length; i++) {
            assert.equal(passHash(tests[i][0]), tests[i][1]);
        }
    });
});
