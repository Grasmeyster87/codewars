const assert = require('chai').assert;
const UriBuilder = require('./UriBuilder - 4 kuy');


let root = 'http://www.codewars.com';
let builder = new UriBuilder(root + '?a=1');

function testUrl(url) {
    url = root + encodeURI(url);
    assert.strictEqual(builder.build(), url, "build() with params " + JSON.stringify(builder.params));
}

describe('UriBuilder', function () {
    it('should have build method', function () {
        assert.ok(builder.build);
    });
    it('params.a = 1', function () {
        testUrl('?a=1');
    });

    it('params.a = 2', function () {
        builder.params.a = 2;
        testUrl('?a=2');
    });
});
