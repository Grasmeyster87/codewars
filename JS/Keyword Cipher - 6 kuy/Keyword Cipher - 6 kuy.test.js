const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const keywordCipher = require('./Keyword Cipher - 6 kuy');


describe("Basic tests",() =>{
  it("Tests", () => {
    assert.strictEqual(keywordCipher("Welcome home","secret"), "wticljt dljt", "Expect 'Welcome home' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("hello","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HELLO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("HeLlO","wednesday"), "bshhk");
    assert.strictEqual(keywordCipher("WELCOME HOME", "gridlocked"), "wlfimhl kmhl", "Expect 'WELCOME HOME' to return 'wlfimhl kmhl'");
    assert.strictEqual(keywordCipher("alpha bravo charlie", "delta"), "djofd eqdvn lfdqjga", "Expect 'alpha bravo chalie' to return 'djofd eqdvn lfdqjga'");
    assert.strictEqual(keywordCipher("Home Base", "seven"), "dlja esqa", "Expect 'Home Base' to return 'dlja esqa'");
    assert.strictEqual(keywordCipher("basecamp", "covert"), "ocprvcil", "Expect 'basecamp' to return 'ocprvcil");
    assert.strictEqual(keywordCipher("one two three", "rails"), "mks twm tdpss", "Expect 'one two three' to return 'mks twm tdpss'");
    assert.strictEqual(keywordCipher("Test", "unbuntu"), "raqr", "Expect 'Test' to return 'raqr'");
  })
})