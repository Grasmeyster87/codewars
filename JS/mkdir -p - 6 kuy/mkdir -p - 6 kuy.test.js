describe('tests', function () {
    const fs = require('fs');
    const { expect } = require('chai');
    const mkdirp = require('./mkdir -p - 6 kuy');

    it('mkdirp("/tmp","directories","can","be","made","recursively");', function () {
        mkdirp('/tmp', 'directories', 'can', 'be', 'made', 'recursively');
        expect(
            fs.existsSync('/tmp/directories/can/be/made/recursively'),
            'directory does not exist',
        ).to.be.true;
    });

    it('Making /tmp/directories/twice should be idempotent', function () {
        mkdirp('/', 'tmp', 'directories', 'twice');
        expect(
            fs.existsSync('/tmp/directories/twice'),
            'directory does not exist',
        ).to.be.true;
        expect(
            () => mkdirp('/', 'tmp', 'directories', 'twice'),
            'your function threw an error',
        ).not.to.throw();
    });
});
