const { assert, config } = require("chai");
config.truncateThreshold = 0;
const findSpecialIdx = require('./Vending Machines - 5 kuy');


class VendingMachine {
    constructor(weight, pile) {
        this.weight = weight;
        this.pile = pile;
    }

    vend() {
        this.pile.push(this.weight);
    }
}

class VendingMachines {
    constructor(special) {
        this.pile = [];

        for (let i = 0; i < 100; i++) {
            this[i] = new VendingMachine(
                i === special ? 101 : 100,
                this.pile
            );
        }
    }

    weigh() {
        return this.pile.reduce((a, b) => a + b, 0);
    }
}

global.VendingMachines = VendingMachines;
describe("Tests", () => {
  for(let expected = 0; expected < 100; expected++) {
    it(`Testing for special machine: ${expected}`, () => {
      const vms = Object.freeze(new VendingMachines(expected));
      assert.strictEqual(findSpecialIdx(vms), expected);
    });
  }
});
 