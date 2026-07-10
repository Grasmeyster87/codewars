const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const reg = require('./Validate a key value string with RegExp - 5 kuy');

let positive = [
        'name:Tomek,age:31,skill:JavaScript',
        'age:50,name:Adam,skill:JavaScript',
        'age:30,skill:Perl,name:Konrad',
        'skill:JavaScript,age:36,name:Pawel',
        'name:Daria,skill:Perl,age:42',
        'skill:PHP,name:Jakub,age:56',
    ],
    negative = [
        'name:xyz,name:xyz,name:xyz',
        'skill:xyz,name:xyz,skill:xyz',
        'skill:xyz,name:xyz,skill:xyz,skill:xyz',
        'name:Tomek,age:30,skill:PHP,name:Kemot',
        'name:,age:20,skill:',
        'name:Adam,age:dd,skill:',
        'age:15,name:5555,skill:123',
        'example text',
        'name,age,skill',
        'name:Adam,age:60',
        'skill:PHP,name:Michal',
        'name:Tomek,age:30,skill:PHP,',
        ',name:Tomek,age:30,skill:PHP',
        'name:abc,age:123,name:xyz',
        'age:abc,age:123,name:xyz',
        'skill:abc,age:123,skill:xyz',
        'age:50name:Adamskill:JavaScript',
        'age:50,name:Adamskill:JavaScript',
    ];

describe('Fixed Tests', () => {
    it('Positive test', function () {
        for (let i = 0, max = positive.length; i < max; i++) {
            assert.match(positive[i], reg);
        }
    });
    it('Negative test', function () {
        for (let i = 0, max = negative.length; i < max; i++) {
            assert.notMatch(negative[i], reg);
        }
    });
});
