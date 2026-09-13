function evalObject(value) {
    var result = 0;
    switch (value.operation) {
        case '+':
            result = value.a + value.b;
            break;
        case '-':
            result = value.a - value.b;
            break;
        case '/':
            result = value.a / value.b;
            break;
        case '*':
            result = value.a * value.b;
            break;
        case '%':
            result = value.a % value.b;
            break;
        case '^':
            result = Math.pow(value.a, value.b);
            break;
    }
    return result;
}
console.log(evalObject({ a: 4, b: 2, operation: '%' }));
module.exports = evalObject;
