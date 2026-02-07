
function isBalanced(s, caps) {
    const stack = [];
    const openPairs = {};
    const closePairs = {};

    // Створюємо словник пар: що відкриває, а що закриває
    for (let i = 0; i < caps.length; i += 2) {
        const open = caps[i];
        const close = caps[i + 1];
        openPairs[open] = close;
        closePairs[close] = open;
    }

    for (let char of s) {
        // Випадок для однакових символів (наприклад, '')
        if (openPairs[char] && closePairs[char]) {
            if (stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } 
        // Якщо це відкриваючий символ
        else if (openPairs[char]) {
            stack.push(char);
        } 
        // Якщо це закриваючий символ
        else if (closePairs[char]) {
            // Перевіряємо, чи збігається він з останнім відкритим
            if (stack.length === 0 || openPairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    // Якщо стек порожній — все збалансовано
    return stack.length === 0;
}

let resTrue = isBalanced('(Sensei [says] yes!)', '()[]') // true
let resFalse = isBalanced('(Sensei [says) no!]', '()[]')  // false
console.log(resTrue, resFalse)

module.exports = isBalanced;