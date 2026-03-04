describe("Tests", () => {
    const { assert, config } = require('chai');
    config.truncateThreshold = 0;
    const VigenèreCipher = require('./Vigenère Cipher Helper - 4 kuy');

    it("test", () => {
        var abc, key;
        abc = "abcdefghijklmnopqrstuvwxyz";
        key = "password";
        c = new VigenèreCipher(key, abc);

        assert.strictEqual(c.encode('codewars'), 'rovwsoiv');
        assert.strictEqual(c.decode('rovwsoiv'), 'codewars');

        assert.strictEqual(c.encode('waffles'), 'laxxhsj');
        assert.strictEqual(c.decode('laxxhsj'), 'waffles');

        assert.strictEqual(c.encode('CODEWARS'), 'CODEWARS');
        assert.strictEqual(c.decode('CODEWARS'), 'CODEWARS');

    });
});