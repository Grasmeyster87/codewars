<div class="markdown prose max-w-none mb-8" id="description"><h2 id="what-is-a-catalan-number">What is a Catalan number?</h2>
<p>In combinatorial mathematics, the Catalan numbers form a sequence of natural numbers that occur in various counting problems, often involving recursively-defined objects. They are named after the Belgian mathematician Eugène Charles Catalan (1814–1894).</p>
<p>Using zero-based numbering, the nth Catalan number is given directly in terms of binomial coefficients by:</p>
<img style="background: white;" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dbc424e9c15a763d9bdd8b096cec7138993dad4a">

<p>You can read more on Catalan numbers <a href="https://en.wikipedia.org/wiki/Catalan_number" data-turbolinks="false" target="_blank">Here</a>.</p>
<h2 id="task">Task:</h2>
<p>Implement a function which calculates the Nth Catalan number.</p>
<pre><code>0  =&gt;  1
3  =&gt;  5
7  =&gt;  429
9  =&gt;  4862
</code></pre>
<p><em>Hint: avoid the use of floats</em></p>
<p>Have fun :)</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h2 id="what-is-a-catalan-number">Что такое число Каталана?</h2>
<p>В комбинаторике числа Каталана — это последовательность натуральных чисел, которые встречаются в различных задачах на подсчет, часто связанных с рекурсивно определенными объектами. Они названы в честь бельгийского математика Эжена Шарля Каталана (1814–1894).</p>
<p>При нумерации, начинающейся с нуля, n-е число Каталана выражается через биномиальные коэффициенты следующим образом:</p>
<img style="background: white;" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/dbc424e9c15a763d9bdd8b096cec7138993dad4a">

<p>Подробнее о числах Каталана можно прочитать <a href="https://en.wikipedia.org/wiki/Catalan_number" data-turbolinks="false" target="_blank">здесь</a>.</p>
<h2 id="task">Задача:</h2>
<p>Реализуйте функцию, которая вычисляет n-е число Каталана.</p>
<pre><code>0  =&gt; 1
3  =&gt; 5
7  =&gt; 429
9  =&gt; 4862
</code></pre>
<p><em>Подсказка: избегайте использования чисел с плавающей точкой (типа float).</em></p>
<p>Удачи! :)</p>
</div>

Код не працює з кількох причин:

1. **Помилка в рядку з `2n/n`.** `2n` це BigInt, а `n` звичайне число, і JS не дозволяє їх змішувати. Тести очікують BigInt (`1n`, `5n`, `429n`), тож `n` треба перетворювати через `BigInt(n)`.
2. **`let res` усередині `if` створює нову змінну.** Вона затінює зовнішню `res`, тому функція завжди повертає `null`.
3. **Формула неправильна.** `(1/n+1)*(2n/n)` не дорівнює `C(2n, n)/(n+1)`: пріоритет операцій інший, а `2n/n` це не біноміальний коефіцієнт. До того ж `1/n` дає float, а в умові підказка "avoid floats".
4. **Для `n = 0` функція повертає `null`.** Має бути `1n`.

Найпростіше рахувати ітеративно через рекурентне співвідношення `C(i+1) = C(i) · 2(2i+1) / (i+2)`. Ділення тут завжди націло, тому BigInt його не спотворює:

```js
function catalan(n) {
  let res = 1n;
  for (let i = 0n; i < BigInt(n); i++) {
    res = (res * 2n * (2n * i + 1n)) / (i + 2n);
  }
  return res;
}

console.log(catalan(9)); // 4862n
module.exports = catalan;
```

Перевірка вручну: C₁ = 1, C₂ = 1·2·3/3 = 2, C₃ = 2·2·5/4 = 5, C₄ = 5·2·7/5 = 14. Це збігається з тестами (`0→1n, 1→1n, 2→2n, 3→5n, 4→14n, 7→429n, 9→4862n`).

Цей варіант не використовує float і працює для великих `n` без втрати точності, бо BigInt не має обмеження розміру.
Формула виходить із відношення двох сусідніх чисел Каталана.

**Звідки береться формула**

Базове визначення: `C(n) = (2n)! / (n! · (n+1)!)`.

Запишемо наступне число, `C(n+1) = (2n+2)! / ((n+1)! · (n+2)!)`, і поділимо його на `C(n)`:

```
C(n+1) / C(n) = (2n+2)! · n! · (n+1)!  /  ((n+1)! · (n+2)! · (2n)!)
```

Скорочуємо факторіали:
- `(2n+2)! / (2n)! = (2n+2)(2n+1)`
- `n! / (n+2)! = 1 / ((n+1)(n+2))`

Отримуємо:

```
C(n+1) / C(n) = (2n+2)(2n+1) / ((n+1)(n+2))
```

Далі `2n+2 = 2(n+1)`, тому `(n+1)` скорочується:

```
C(n+1) = C(n) · 2(2n+1) / (n+2)
```

У коді `i` відіграє роль `n`, тому `res * 2n * (2n * i + 1n) / (i + 2n)` і є цією формулою.

**Чому в циклі**

Формула не дає `C(n)` одразу, вона лише переходить від одного числа до наступного. Тому починаємо з `C(0) = 1` і застосовуємо крок `n` разів:

| i | обчислення | результат |
|---|---|---|
| 0 | 1 · 2 · 1 / 2 | C₁ = 1 |
| 1 | 1 · 2 · 3 / 3 | C₂ = 2 |
| 2 | 2 · 2 · 5 / 4 | C₃ = 5 |
| 3 | 5 · 2 · 7 / 5 | C₄ = 14 |

Після `n` ітерацій у `res` лежить `C(n)`.

**Чому множення йде перед діленням**

Ділення BigInt цілочисельне, тобто дріб відкидається. Якщо спершу поділити, можна втратити частину. Якщо спершу помножити, то `res * 2 * (2i+1)` обов'язково ділиться на `(i+2)` націло, бо результат `C(i+1)` завжди ціле число. Тому округлення ніколи не відбувається і точність не губиться.

**Чому не одна формула з факторіалами**

Можна було б написати `(2n)! / (n! · (n+1)!)` напряму, але факторіали швидко стають величезними. Цикл тримає числа меншими і робить лише `n` множень та ділень.