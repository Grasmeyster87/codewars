var Vector = function (components) {
    // Зберігаємо компоненти. 
    // Ми не розбиваємо їх на окремі змінні, а зберігаємо як масив.
    this.components = components;
};

// --- Методи додаємо через prototype (це стандарт для такого стилю) ---

Vector.prototype.add = function (b) {
    // Перевірка довжини
    if (this.components.length !== b.components.length) {
        throw new Error("Lengths do not match");
    }
    
    // Створюємо новий масив компонентів
    var newComponents = this.components.map(function (val, i) {
        return val + b.components[i];
    });
    
    // Повертаємо НОВИЙ вектор
    return new Vector(newComponents);
};

Vector.prototype.subtract = function (b) {
    if (this.components.length !== b.components.length) {
        throw new Error("Lengths do not match");
    }
    
    var newComponents = this.components.map(function (val, i) {
        return val - b.components[i];
    });
    
    return new Vector(newComponents);
};

Vector.prototype.dot = function (b) {
    if (this.components.length !== b.components.length) {
        throw new Error("Lengths do not match");
    }
    
    // reduce підсумовує добутки елементів
    return this.components.reduce(function (acc, val, i) {
        return acc + (val * b.components[i]);
    }, 0);
};

Vector.prototype.norm = function () {
    var sumSquares = this.components.reduce(function (acc, val) {
        return acc + (val * val);
    }, 0);
    
    return Math.sqrt(sumSquares);
};

Vector.prototype.toString = function () {
    // Формуємо рядок вигляду (1,2,3)
    return '(' + this.components.join(',') + ')';
};

Vector.prototype.equals = function (b) {
    // Перевіряємо чи існують компоненти і чи збігається довжина
    if (!b || !b.components || this.components.length !== b.components.length) {
        return false;
    }
    
    // Перевіряємо кожен елемент на рівність
    return this.components.every(function (val, i) {
        return val === b.components[i];
    });
};


/* var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

console.log(a.add(b)); // должен вернуть новый Vector([4, 6, 8])
console.log(a.subtract(b)); // должен вернуть новый Vector([-2, -2, -2])
console.log(a.dot(b)); // должен вернуть 1*3 + 2*4 + 3*5 = 26
console.log(a.norm()); // должен вернуть sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.add(c)); // выдаёт ошибку */

module.exports = Vector;
