describe('test suite', function () {
    const {assert, config} = require('chai');
    config.truncateThreshold = 0;
    const sc = require('./Shortest code Father and Son - 6 kuy');

    it('sample tests', function () {
        assert.strictEqual(sc("Aab"), "Aa");
        assert.strictEqual(sc("AabBc"), "AabB");
        assert.strictEqual(sc("AaaaAaab"), "AaaaAaa");
        assert.strictEqual(sc("aAAAaAAb"), "aAAAaAA");
        assert.strictEqual(sc("SONson"), "SONson");
        assert.strictEqual(sc("FfAaTtHhEeRr"), "FfAaTtHhEeRr");
        assert.strictEqual(sc("SONsonfather"), "SONson");
        assert.strictEqual(sc("sonfather"), "");
        assert.strictEqual(sc("DONKEYmonkey"), "ONKEYonkey");
        assert.strictEqual(sc("monkeyDONKEY"), "onkeyONKEY");
        assert.strictEqual(sc("BANAna"), "ANAna");
    });
});