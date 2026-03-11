function calculate(a, operator, b) {
    // Проверка на числа
    if (isNaN(a) || isNaN(b)) {
        return null;
    }

    // Проверка деления на ноль
    if (operator === "/" && b === 0) {
        return null;
    }

    // Проверка допустимого оператора
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        return null;
    }

    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
    }
}

/*
function calculate(num1, operation, num2) {
  var ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };
  return (ops[operation] || function() { return null; })(num1, num2);
}
*/
console.log (calculate(3.2, '+', 8))
module.exports = calculate;
