const { assert } = require('chai');
const isItBugged = require('./Oh dear God! Is it bugged - 7 kuy');

describe("Tests", () => {
    it("test", () => {
        assert.equal(isItBugged("01_09_2016 01:20"), false);
        assert.equal(isItBugged("14-10-1066 12:00"), true);
        assert.equal(isItBugged("Tenth of January"), false);
    });
});