function validBraces(braces) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of braces) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.pop() !== pairs[char]) {
                return false; // неправильная пара
            }
        }
    }

    return stack.length === 0; // если пусто — всё корректно
}

console.log(validBraces('(a+b)')); // true
console.log(validBraces('(a+b]')); // false
console.log(validBraces('{[()]}')); // true
console.log(validBraces('{[(])}')); // false

module.exports = validBraces;
