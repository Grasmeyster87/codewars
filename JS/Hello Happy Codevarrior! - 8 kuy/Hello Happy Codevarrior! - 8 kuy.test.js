const { assert } = require('chai');
const Warrior = require('./Hello Happy Codevarrior! - 8 kuy');

describe("Tests", () => {
    it("test", () => {
        let albert = new Warrior("Albert");
        let boris = new Warrior("Boris");

        assert.strictEqual(albert.toString(), "Hi! my name's Albert");
        assert.strictEqual(albert.name(), "Albert");
        assert.strictEqual(boris.name(), "Boris");

        boris.name("Bobo");
        assert.strictEqual(boris.name(), "Bobo");
    });
});