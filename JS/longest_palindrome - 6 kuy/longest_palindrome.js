function longestPalindrome(s){
      // Якщо рядок порожній, повертаємо 0
    if (s.length === 0) return 0;

    let maxLength = 1; // Мінімальна довжина паліндрома — 1

    // Функція для перевірки, чи є підстрока паліндромом
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    // Перебираємо всі можливі підстроки
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if (isPalindrome(substring)) {
                maxLength = Math.max(maxLength, substring.length);
            }
        }
    }

    return maxLength;
}
module.exports = longestPalindrome;