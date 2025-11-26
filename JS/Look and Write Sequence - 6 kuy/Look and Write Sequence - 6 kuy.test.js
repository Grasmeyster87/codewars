const { expect } = require('chai');
const lookAndWrite = require('./Look and Write Sequence - 6 kuy');

describe("Example tests", () => {
  it("test 0", () => { expect(lookAndWrite(0)).to.equal(2); });
  it("test 1", () => { expect(lookAndWrite(1)).to.equal(4); });
  it("test 2", () => { expect(lookAndWrite(2)).to.equal(8); });
  it("test 3", () => { expect(lookAndWrite(3)).to.equal(14); });
  it("test 4", () => { expect(lookAndWrite(4)).to.equal(22); });
});