<div class="markdown prose max-w-none mb-8" id="description"><p>Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the <code>launchAll</code> function does not work as expected. It should launch 5 missiles each  1 second apart. The current code tries to launch the missile #5 five times...</p>
<p>Can you fix this for us? You know, it's pretty critical code...</p>
<p><strong>Note</strong>: There are 5 missiles labeled <code>i</code> which is a number in {0, 1, 2, 3,  4}. The missile <code>i</code> should be launched after <code>i</code> seconds.</p>
</div>


<div class="markdown prose max-w-none mb-8" id="description"><p>Наша система управления ядерными ракетами написана на Node.js. Сейчас мы проводим её тестирование, и, похоже, функция <code>launchAll</code> работает не так, как ожидалось. Она должна запускать 5 ракет с интервалом в 1 секунду между запусками. В текущем же виде код пытается пять раз запустить ракету № 5...</p>
<p>Можете ли вы это исправить? Понимаете, это довольно критически важный код...</p>
<p><strong>Примечание</strong>: Всего имеется 5 ракет, обозначенных индексом <code>i</code>, где <code>i</code> — число из множества {0, 1, 2, 3, 4}. Ракета с индексом <code>i</code> должна быть запущена через <code>i</code> секунд.</p>
</div>
Не зовсім: `var` не глобальна. Різниця в тому, **яку область вона займає**.

- **`var`** видна у всій **функції**, де її оголошено. Фігурні дужки `{}` циклу чи `if` для неї нічого не значать.
- **`let`** видна лише в **блоці** `{}`, де її оголошено.

```js
function test() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // 1, var "вийшла" за межі if
  console.log(b); // ReferenceError, let існує тільки в {}
}
```

## Чому це ламає ваш цикл

З `var` змінна `i` **одна на всю функцію**. Цикл просто змінює її значення: 0, 1, 2, 3, 4, а потім 5, коли умова `i < 5` стає хибною. Усі п'ять колбеків дивляться на **ту саму** змінну, а виконуються вони пізніше, коли цикл давно закінчився. Тому в усіх `i === 5`.

```
var:  [ i ] ← єдина коробка
       ↑ ↑ ↑ ↑ ↑
       колбеки 1-5 дивляться в одну коробку, там 5
```

З `let` на **кожній ітерації циклу створюється нова змінна `i`** зі своїм значенням. Кожен колбек запам'ятовує свою:

```
let:  [0] [1] [2] [3] [4] ← п'ять окремих коробок
       ↑   ↑   ↑   ↑   ↑
      кожен колбек дивиться у свою
```

Тому `launchMissile(0)`, `launchMissile(1)` і так далі працюють правильно.

Можна перевірити самому:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0); // 0, 1, 2
}
```

Глобальною `var` стає лише тоді, коли її оголошено поза будь-якою функцією. Але це окремий випадок, а не суть її поведінки.