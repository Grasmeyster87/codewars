const simvolOne = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
}

const simvolTwo = {
  'CM': 900,
  'CD': 400,
  'XC': 90,
  'XL': 40,
  'IX': 9,
  'IV': 4,
}

class RomanNumerals {
  static toRoman(num) {
    if (num === 0) {
      return null;
    }

    const romanNumerals = [...Object.keys(simvolOne), ...Object.keys(simvolTwo)].sort((a, b) => simvolTwo[b] || simvolOne[b] - (simvolTwo[a] || simvolOne[a]));

    let result = '';
    for (const symbol of romanNumerals) {
      while (num >= (simvolTwo[symbol] || simvolOne[symbol])) {
        result += symbol;
        num -= simvolTwo[symbol] || simvolOne[symbol];
      }
    }

    return result;
  }

  static fromRoman(str) {
    if (!str) {
      return null;
    }

    let res = 0;
    for (let i = 0; i < str.length; i++) {
      const twoChars = str.substring(i, i + 2);
      const oneChar = str[i];

      if (simvolTwo[twoChars]) {
        res += simvolTwo[twoChars];
        i++; // Пропускаем следующий символ, так как он уже обработан
      } else if (simvolOne[oneChar]) {
        res += simvolOne[oneChar];
      }
    }

    return res;
  }
}

console.log(RomanNumerals.fromRoman('XXI'), ' - 21'); // 21
console.log(RomanNumerals.toRoman(1990), ' - MCMXC'); // 'MCMXC'

module.exports = RomanNumerals;
