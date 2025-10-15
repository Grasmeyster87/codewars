/*
Write a function that accepts a string, and returns the same string with all 
even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"

//---------------------------------------
Напишите функцию, которая принимает строку и возвращает ту же строку, 
в которой все чётные символы в каждом слове заглавные, а все нечётные символы в каждом слове — строчные. 
Только что описанная индексация начинается с нуля, поэтому индекс, начиная с нулевого, чётный, 
поэтому этот символ должен быть заглавным, и вам нужно начинать заново для каждого слова.

Переданная строка будет состоять только из букв алфавита и пробелов (' '). 
Пробелы будут присутствовать только в случае нескольких слов. Слова будут разделены одним пробелом (' ').

Примеры:

"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

let string1 = 'UPPER CASE';

function toWeirdCase(string) {
    return string
        .split(' ')
        .map(word =>
            word
                .split('')
                .map((char, index) =>
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                )
                .join('')
        )
        .join(' ');
}

let res = toWeirdCase(string1);
console.log(res);

/*test
describe('Tests', function() {

    const { assert } = require('chai');

    function doTest(input, expected) {
        const actual = toWeirdCase(input);
        const message = `for ${JSON.stringify(input)}\n`;
        assert.strictEqual(actual, expected, message);
    }

    it('Sample Tests', function() {
        doTest('This is a test', 'ThIs Is A TeSt');
        doTest('', '');
        doTest('unique', 'UnIqUe');
        doTest('UPPER CASE', 'UpPeR CaSe');
        doTest('lower case', 'LoWeR CaSe');
    });
});
*/