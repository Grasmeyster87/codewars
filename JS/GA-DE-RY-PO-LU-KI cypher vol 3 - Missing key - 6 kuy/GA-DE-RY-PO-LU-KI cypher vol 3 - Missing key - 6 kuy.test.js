const { assert } = require('chai');
const findTheKey = require('./GA-DE-RY-PO-LU-KI cypher vol 3 - Missing key - 6 kuy');

describe('Scouts are waiting!', function () {
    it('Basic Tests', function () {
        var messages = ['dance on the table', 'hide my beers', 'scouts rocks'];
        var secrets = ['egncd pn thd tgbud', 'hked mr bddys', 'scplts ypcis'];

        assert.equal(findTheKey(messages, secrets), 'agdeikluopry');
    });
});
