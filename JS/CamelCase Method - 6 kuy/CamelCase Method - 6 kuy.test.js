const { assert } = require('chai');
require('./CamelCase Method - 6 kuy'); // подключаем расширение прототипа

describe("Sample tests", () => {

  it("Basic tests",() =>{
    assert.strictEqual("test case".camelCase(), "TestCase");
    assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
    assert.strictEqual("say hello".camelCase(), "SayHello");
    assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
    assert.strictEqual("".camelCase(), "");
  })
  
})