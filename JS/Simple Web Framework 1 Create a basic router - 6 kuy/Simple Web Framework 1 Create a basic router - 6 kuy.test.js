const assert = require('chai').assert;
const Router = require('./Simple Web Framework 1 Create a basic router');

describe('Example tests', function () {
    it('Should handle GET routes', function () {
        let router = new Router();

        router.bind('/hello', 'GET', function () {
            return 'hello world';
        });
        router.bind('/login', 'GET', function () {
            return 'Please log-in.';
        });

        assert.strictEqual(router.runRequest('/hello', 'GET'), 'hello world');
        assert.strictEqual(
            router.runRequest('/login', 'GET'),
            'Please log-in.',
        );
    });

    it('Should handle POST routes', function () {
        let router = new Router();

        router.bind('/vote', 'POST', function () {
            return 'Voted.';
        });
        router.bind('/comment', 'POST', function () {
            return 'Comment sent.';
        });

        assert.strictEqual(router.runRequest('/vote', 'POST'), 'Voted.');
        assert.strictEqual(
            router.runRequest('/comment', 'POST'),
            'Comment sent.',
        );
    });

    it('Should handle mixed routes.', function () {
        let router = new Router();

        router.bind('/login', 'GET', function () {
            return 'Please log-in.';
        });
        router.bind('/login', 'POST', function () {
            return 'Logging-in.';
        });

        assert.strictEqual(
            router.runRequest('/login', 'GET'),
            'Please log-in.',
        );
        assert.strictEqual(router.runRequest('/login', 'POST'), 'Logging-in.');
    });

    it('Should return 404 for non-existing routes.', function () {
        let router = new Router();

        assert.strictEqual(
            router.runRequest('/this-url-does-not-exist', 'GET'),
            'Error 404: Not Found',
        );
    });

    it('Should modify existing routes', function () {
        let router = new Router();

        router.bind('/page', 'GET', function () {
            return 'First binding.';
        });
        router.bind('/page', 'GET', function () {
            return 'Modified binding.';
        });

        assert.strictEqual(
            router.runRequest('/page', 'GET'),
            'Modified binding.',
        );
    });
});
