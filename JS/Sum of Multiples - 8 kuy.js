/*
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
//-------------------------------------
Ваше завдання

Знайдіть суму всіх кратних n нижче m
Пам'ятайте

n та m – натуральні числа (додатні цілі числа)
m виключено з кратних

Приклади

sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7) ==> "НЕДІЙСНИЙ"
*/

function sumMul(n, m) {
    if (n <= 0 || m <= 0) { return "INVALID"; }
    let res = [];
    for (let i = n; n < m; n += i) {
        res.push(n);
    }
    console.log(res);
    return res.reduce((acum, ival) => acum + ival, 0);
}

/*
function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}


function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  const count = Math.floor((m - 1) / n);
  return (count * (count + 1) / 2) * n;
}

*/

console.log(sumMul(4, 123)); //1860

console.log(sumMul(4, -7));  // "INVALID"

/* ---------------- test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should test", () => {
    assert.strictEqual(sumMul(0,0),"INVALID");
    assert.strictEqual(sumMul(2,9),20);
    assert.strictEqual(sumMul(4,-7),"INVALID");
  });
});

*/