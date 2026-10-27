const assert = require('chai').assert;
const RomanNumerals = require('./Roman Numerals Helper - 4 kuy');

describe("toRoman", () => {
  it("toRoman(1000) should return 'M'", () => {
    assert.strictEqual(RomanNumerals.toRoman(1000), 'M');
  });

  it("toRoman(4) should return 'IV'", () => {
    assert.strictEqual(RomanNumerals.toRoman(4), 'IV');
  });

  it("toRoman(1) should return 'I'", () => {
    assert.strictEqual(RomanNumerals.toRoman(1), 'I');
  });

  it("toRoman(1990) should return 'MCMXC'", () => {
    assert.strictEqual(RomanNumerals.toRoman(1990), 'MCMXC');
  });

  it("toRoman(2008) should return 'MMVIII'", () => {
    assert.strictEqual(RomanNumerals.toRoman(2008), 'MMVIII');
  });
});

describe("fromRoman", () => {
  it("fromRoman('XXI') should return 21", () => {
    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
  });

  it("fromRoman('I') should return 1", () => {
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
  });

  it("fromRoman('IV') should return 4", () => {
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
  });

  it("fromRoman('MMVIII') should return 2008", () => {
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
  });

  it("fromRoman('MDCLXVI') should return 1666", () => {
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
  });
});
