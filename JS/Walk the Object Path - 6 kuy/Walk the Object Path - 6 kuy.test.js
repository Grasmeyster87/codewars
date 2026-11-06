describe("sample tests", function() {
    const {assert} = require('chai');
    const find = require('./Walk the Object Path - 6 kuy')

    const object = {
          user: { 
          addresses: [
            {
              street: '23 A Street',
              city: 'New York',
              state: 'NY',
              zip: '10001'
            },
            {
              street: '27 B Street',
              city: 'Los Angeles',
              state: 'LA',
              zip: '90404'
            },
          ],
            name: { 
              first: 'John', 
              last: 'Snow' 
            }
          } 
    };

  describe('valid string paths', function() {
    it('should find the first name', function() {
        let path = 'user.name.first';
        let actual = find(object, path);
        let expected = 'John';
        assert.strictEqual(actual, expected);
    });
    it('should find the last name', function() {
        let path = 'user.name.last';
        let actual = find(object, path);
        let expected = 'Snow';
        assert.strictEqual(actual, expected);
    });
  });

  describe('invalid string paths', function() {
    it('should not find initials on the name', function() {
        let path = 'user.name.first.initial.capitalized';
        let actual = find(object, path);
        assert.isUndefined(actual);
    });
    it('should not find a toString property', function() {
        let path = 'user.name.first.toString';
        let actual = find(object, path);
        assert.isUndefined(actual,
            'Be sure check if the property belongs to the object and is not inherited!');
    });
  });

  describe('valid array paths', function() {
    it('should find the first street', function() {
        let path = 'user.addresses.0.street';
        let actual = find(object, path);
        let expected = '23 A Street';
        assert.strictEqual(actual, expected);
    });
    it('should find the second city', function() {
        let path = 'user.addresses.1.city';
        let actual = find(object, path);
        let expected = 'Los Angeles';
        assert.strictEqual(actual, expected);
    });
  });

  describe('invalid array paths', function() {
    it('should not find the first province', function() {
        let path = 'user.addresses.0.province';
        let actual = find(object, path);
        assert.isUndefined(actual);
    });
    it('should not find the fourth city', function() {
        let path = 'user.addresses.3.city';
        let actual = find(object, path);
        assert.isUndefined(actual);
    });
  });
});