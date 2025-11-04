var palindromeChainLength = function(n) {
  // Функция для проверки, является ли число палиндромом
    function isPalindrome(num) {
        const str = num.toString();
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }
    
    // Функция для переворачивания числа
    function reverseNumber(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    
    let steps = 0;
    let current = n;
    
    // Пока число не является палиндромом, продолжаем шаги
    while (!isPalindrome(current)) {
        const reversed = reverseNumber(current);
        current = current + reversed;
        steps++;
    }
    
    return steps;
};

/* test

const chai = require('chai');
const assert = chai.assert;

describe('Sample tests', () => {
  it('Palindromes', () => {
    assert.equal(palindromeChainLength(1),  0);
    assert.equal(palindromeChainLength(88), 0);    
  });  
  it('Not palindromes', () => {
    assert.equal(palindromeChainLength(87), 4);
    assert.equal(palindromeChainLength(89), 24);
    assert.equal(palindromeChainLength(10), 1);
  });  
});
*/