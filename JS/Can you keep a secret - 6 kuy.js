/*
There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) 
which accepts any value as secret and returns an object with ONLY two methods (and no additional properties)

    getSecret() which returns the secret
    setSecret() which sets the secret

obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
//--------------------------------------

У объекта CoffeeScript нет приватных свойств! Но, может быть, они есть?

Реализуйте функцию createSecretHolder(secret), 
которая принимает любое значение как секрет и возвращает объект ТОЛЬКО с двумя методами (без дополнительных свойств).

getSecret() возвращает секрет.

setSecret() устанавливает секрет.

obj = createSecretHolder(5)
obj.getSecret() # возвращает 5
obj.setSecret(2)
obj.getSecret() # возвращает 2

*/

function createSecretHolder(secret) {
  let secretValue = secret;
  
  return {
    getSecret: function() {
      return secretValue;
    },
    setSecret: function(newSecret) {
      secretValue = newSecret;
    }
  };
}


/*test
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;

describe("Solution", function() {
  it("should test for something", function() {
    // Test.assertEquals(1 + 1, 2);
    // assert.strictEqual(1 + 1, 2);
  });
});
*/