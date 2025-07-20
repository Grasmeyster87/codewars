/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
Example:

"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Courtesy of rosettacode.org

//-------------------------------

811 / 5 000
Создайте функцию, которая принимает римское число в качестве аргумента и возвращает его значение в виде целого десятичного числа. Проверять форму римского числа не требуется.

Современные римские цифры записываются путём представления каждой десятичной цифры числа отдельно, начиная с крайней левой цифры и пропуская все нули. Так, 1990 записывается как «MCMXC» (1000 = M, 900 = CM, 90 = XC), а 2008 — как «MMVIII» (2000 = MM, 8 = VIII). Римская цифра 1666, «MDCLXVI», использует каждую букву в порядке убывания. Пример:

"MM" -> 2000
"MDCLXVI" -> 1666
"M" -> 1000
"CD" -> 400
"XC" -> 90
"XL" -> 40
"I" -> 1

Справка:

Символ Значение
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

Предоставлено rosettacode.org
Sozdayte funktsiyu, kotoraya prinimayet rimskoye chislo v kachestve argumenta i vozvrashchayet yego znacheniye v vide tselogo desyatichnogo chisla. Proveryat' formu rimskogo chisla ne trebuyetsya.

Sovremennyye rimskiye tsifry zapisyvayutsya putom predstavleniya kazhdoy desyatichnoy tsifry chisla otdel'no, nachinaya s krayney levoy tsifry i propuskaya vse nuli. Tak, 1990 zapisyvayetsya kak «MCMXC» (1000 = M, 900 = CM, 90 = XC), a 2008 — kak «MMVIII» (2000 = MM, 8 = VIII). Rimskaya tsifra 1666, «MDCLXVI», ispol'zuyet kazhduyu bukvu v poryadke ubyvaniya. Primer:

"MM" -> 2000
"MDCLXVI" -> 1666
"M" -> 1000
"CD" -> 400
"XC" -> 90
"XL" -> 40
"I" -> 1

Spravka:

Simvol Znacheniye
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

Predostavleno rosettacode.org
Ещё
Отправить отзыв


*/
const romanStringNUmber = "MDCLXVI";

function solution(roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let currentValue1 = 0;
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100,
        'D': 500, 'M': 1000
    };

    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanValues[roman[i]];
        const next = romanValues[roman[i + 1]];

        if (next > current) {
            total += next - current;
            i++; // skip next character
        } else {
            total += current;
        }
    }

    return total;

}

console.log(solution(romanStringNUmber));