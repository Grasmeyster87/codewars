Вот рабочая реализация этой задачи на JavaScript:

```javascript
function zero(op) { return op ? op(0) : 0; }
function one(op) { return op ? op(1) : 1; }
function two(op) { return op ? op(2) : 2; }
function three(op) { return op ? op(3) : 3; }
function four(op) { return op ? op(4) : 4; }
function five(op) { return op ? op(5) : 5; }
function six(op) { return op ? op(6) : 6; }
function seven(op) { return op ? op(7) : 7; }
function eight(op) { return op ? op(8) : 8; }
function nine(op) { return op ? op(9) : 9; }

function plus(right) {
  return function(left) {
    return left + right;
  };
}

function minus(right) {
  return function(left) {
    return left - right;
  };
}

function times(right) {
  return function(left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function(left) {
    return Math.floor(left / right);
  };
}
```

🎯 **Как это работает:**
- Числовые функции (zero – nine) принимают опционально операцию (функцию), которую вызывают с числом.
- Операторы (plus, minus и т.д.) возвращают функцию, которая получает левый операнд.
- Деление осуществляется целочисленно, с помощью `Math.floor`.

📌 **Пример:**
```javascript
seven(times(five()));       // ➞ 35
four(plus(nine()));         // ➞ 13
eight(minus(three()));      // ➞ 5
six(dividedBy(two()));      // ➞ 3
```

Хочешь, могу объяснить это с точки зрения функционального программирования — тут есть интересный намек на каррирование функций.


Каррирование — это техника функционального программирования, при которой функция вместо получения всех аргументов сразу принимает их по одному, возвращая каждый раз новую функцию. В твоем коде это элегантно проявляется в математических операциях.

📌 **Разберем на примере:**

```javascript
seven(times(five()))
```

- `five()` возвращает просто число `5`
- `times(5)` — это вызов функции `times`, которая **каррирует** аргумент `5`, возвращая новую функцию:
  ```javascript
  function(left) {
    return left * 5;
  }
  ```
- Эта функция передается как аргумент в `seven(...)`
- `seven(...)` проверяет: есть ли аргумент `op` — да, это функция, которую мы вызываем: `op(7)` → `7 * 5` → `35`

🔁 **Общий паттерн каррирования здесь:**

```javascript
function operation(rightOperand) {
  return function(leftOperand) {
    // выполнение операции между leftOperand и rightOperand
  }
}
```

✅ Это позволяет записывать выражения с «внешней» функцией как левым операндом, а «внутренней» — как правым, с интуитивной и читаемой структурой.

Хочешь, покажу, как можно применить такую технику каррирования в других задачах — например, для создания кастомных фильтров или конфигурируемых функций?


С удовольствием! Вот несколько примеров каррирования в JavaScript, которые показывают, насколько гибко можно строить функции 👇

---

### 💡 **1. Приветствие с каррированием**

```javascript
function greet(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = greet("Привет");
console.log(sayHello("Анна")); // Привет, Анна!
```

Здесь `greet("Привет")` возвращает новую функцию, которая уже «запомнила» приветствие.

---

### 🔍 **2. Фильтрация с каррированием**

```javascript
function isGreaterThan(min) {
  return function(value) {
    return value > min;
  };
}

const greaterThan10 = isGreaterThan(10);
const result = [5, 12, 8, 20].filter(greaterThan10);

console.log(result); // [12, 20]
```

Так можно создавать повторно используемые условия с параметрами.

---

### 🧮 **3. Сложение с предустановленным числом**

```javascript
function add(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15
```

Каррирование здесь дает нам возможность «запомнить» число, с которым всегда хотим складывать.

---

### ✨ **4. Конфигурируемый логгер**

```javascript
function logger(level) {
  return function(message) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  };
}

const errorLogger = logger("error");
errorLogger("Что-то пошло не так!"); // [ERROR] Что-то пошло не так!
```

Можно создать логгер с разными уровнями: `debugLogger`, `infoLogger`, `warnLogger`.

---

Хочешь, покажу, как это работает с библиотекой `lodash` или в функциональных фреймворках типа `Ramda`? Там такие паттерны активно используются. Или давай напишем свою каррирующую функцию! 💡
