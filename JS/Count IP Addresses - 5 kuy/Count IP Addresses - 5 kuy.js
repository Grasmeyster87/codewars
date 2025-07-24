/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
Examples

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246

//---------------------------------------------------

Реализуйте функцию, которая получает два IPv4-адреса и возвращает количество адресов между ними (включая первый, но не включая последний).

Все входные данные будут содержать допустимые IPv4-адреса в виде строк. Последний адрес всегда будет больше первого.

Примеры

* С входными данными "10.0.0.0", "10.0.0.50" => возврат 50
* С входными данными "10.0.0.0", "10.0.1.0" => возврат 256
* С входными данными "20.0.0.10", "20.0.1.0" => возврат 246

*/
const start = "10.0.0.0";
const end = "10.0.0.50";

function ipsBetween(start, end) {
    const toNumber = ip =>
        ip.split('.')
          .map(Number)
          .reduce((acc, octet) => acc * 256 + octet);

    return toNumber(end) - toNumber(start);
}

console.log(ipsBetween(start, end));


/*
const strictEqual = require('chai').assert.strictEqual;

function doTest (start, end, expected) {
  const actual = ipsBetween(start, end);
  strictEqual(actual, expected, `for start = ${start}, end = ${end}\n`);
}

describe("Tests", () => {
  it("sample tests", () => {
    doTest("150.0.0.0", "150.0.0.1", 1);
    doTest("10.0.0.0", "10.0.0.50", 50);
    doTest("20.0.0.10", "20.0.1.0", 246);
    doTest("10.11.12.13", "10.11.13.0", 243);
    doTest("160.0.0.0", "160.0.1.0", 256);
    doTest("170.0.0.0", "170.1.0.0", 65536);
    doTest("50.0.0.0", "50.1.1.1", 65793);
    doTest("180.0.0.0", "181.0.0.0", 16777216);
    doTest("1.2.3.4", "5.6.7.8", 67372036);
    doTest("0.0.0.0", "255.255.255.255", 2 ** 32 - 1);
  });
});

*/