const chai = require('chai');
const { strictEqual } = chai.assert; // Правильно дістаємо strictEqual

// Словник NATO додано для того, щоб код міг працювати локально.
// На самій платформі він вже існує глобально.
const NATO = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 'E': 'Echo', 
    'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 'I': 'India', 'J': 'Juliett', 
    'K': 'Kilo', 'L': 'Lima', 'M': 'Mike', 'N': 'November', 'O': 'Oscar', 
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray', 'Y': 'Yankee', 
    'Z': 'Zulu'
};

function toNato(words) {
    return words
        .replace(/\s/g, '')
        .toUpperCase()
        .split('')
        .map(char => NATO[char] || char)
        .join(' ');
}

// Блок тестів
describe('Tests', function () {
    chai.config.truncateThreshold = 0;

    function doTest(input, expected) {
        const actual = toNato(input);
        // Використовуємо strictEqual напряму, оскільки ми його імпортували[cite: 3]
        strictEqual(actual, expected, `for string = "${input}"\n`);
    }

    it('Sample Tests', function () {
        doTest(
            'If you can read',
            'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta',
        );
        doTest(
            'Did not see that coming',
            'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf',
        );
        doTest(
            'go for it!', 
            'Golf Oscar Foxtrot Oscar Romeo India Tango !'
        );
    });
});