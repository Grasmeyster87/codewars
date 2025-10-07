/*

Build up a method that takes a positive integer and formats it to a 'time - like' format.

The method must raise an exception if its hour length is less than 3 digits and greater than 4.
Examples:

800   --> '8:00'
1000  --> '10:00'
1451  --> '14:51'
3351  --> '33:51'
10000 --> raise an exception

Створіть метод, який приймає додатне ціле число та форматує його у формат, подібний до часу.

Метод повинен викликати виняток, якщо його тривалість у годині менша за 3 цифри та більша за 4.
Приклади:

800 --> '8:00'
1000 --> '10:00'
1451 --> '14:51'
3351 --> '33:51'
10000 --> викликати виняток

*/
function solution(hour) {
    // Перевіряємо, що вхідне число має 3 або 4 цифри
    if (hour < 100 || hour > 9999) throw new Error();

    // Перетворюємо в рядок, щоб зручно отримати години та хвилини
    const str = String(hour);

    // Якщо 3 цифри — перша цифра це година, дві останні — хвилини
    // Якщо 4 цифри — перші дві години, останні дві хвилини
    const h = str.length === 3 ? str[0] : str.slice(0, 2);
    const m = str.slice(-2);

    return `${parseInt(h)}:${m}`;
}


/* test
describe("Tests", () => {
    const {assert} = require('chai');

    function doTest(input, expected) {
        const message = "input = " + input;
        if (expected instanceof Error) {
            assert.throws(() => solution(input), undefined, undefined, message);
        } else {
            let actual;
            assert.doesNotThrow(() => actual = solution(input),
                undefined, undefined,
                message + '; expected = "' + expected + '"\n');
            assert.strictEqual(actual, expected, message);
        }
    }

    it("sample tests", () => {
        doTest(1000, '10:00');
        doTest(1500, '15:00');
        doTest(1555, '15:55');
        doTest(800, '8:00');
        doTest(80, new Error);
        doTest(800000, new Error);
    });
});
*/