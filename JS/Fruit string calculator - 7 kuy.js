/*
You are given a string of words and numbers. Extract the expression including:

    the operator: either addition ("gains") or subtraction ("loses")
    the two numbers that we are operating on

Return the result of the calculation.

Notes:

    "loses" and "gains" are the only two words describing operators
    No fruit debts nor bitten apples = The numbers are integers and no negatives

Examples

"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40

Should be a nice little kata for you :)


//-------------------------------------

Вам задано рядок слів і чисел. Витягніть вираз, включаючи:

оператор: додавання ("gains") або віднімання ("loses")
два числа, над якими ми виконуємо операції

Поверніть результат обчислення.

Примітки:

"loses" та "gains" - єдині два слова, що описують оператори
Ніяких фруктових боргів, ні надкушених яблук = Числа є цілими числами та без від'ємних чисел

Приклади

"Панда має 48 яблук і програє 4" --> 44
"Джеррі має 34 яблука і виграє 6" --> 40

Має бути гарненьке невелике ката для вас :)
*/

function calculate(string) {
  // Extract all numbers from the string using a regular expression
  const numbers = string.match(/\d+/g).map(Number);

  // Check if "gains" is present in the string to determine the operation
  const gains = string.includes("gains");

  // Perform the appropriate calculation based on the presence of "gains"
  let result;
  if (gains) {
    result = numbers[0] + numbers[1];
  } else {
    result = numbers[0] - numbers[1];
  }

  return result;
}


/* test 
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(calculate("Panda has 48 apples and loses 4"), 44);
    assert.strictEqual(calculate("Jerry has 34 apples and gains 6"), 40);
  });
});
*/