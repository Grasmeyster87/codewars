<div class="markdown prose max-w-none mb-8" id="description"><p>Consider the number triangle below, in which each number is equal to the number above plus the number to the left. If there is no number above, assume it's a <code>0</code>.</p>
<pre><code class="language-haskell"><span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">2</span>
<span class="cm-number">1</span> <span class="cm-number">3</span> <span class="cm-number">5</span> <span class="cm-number">5</span>
<span class="cm-number">1</span> <span class="cm-number">4</span> <span class="cm-number">9</span> <span class="cm-number">14</span> <span class="cm-number">14</span>
</code></pre>
<p>The triangle has <code>5</code> rows and the sum of the last row is <code>sum([1,4,9,14,14]) = 42</code>.</p>
<p>You will be given an integer <code>n</code> and your task will be to return the sum of the last row of a triangle of <code>n</code> rows. </p>
<p>In the example above:</p>
<pre><code class="language-haskell"><span class="cm-variable">solve</span>(<span class="cm-number">5</span>) <span class="cm-keyword">=</span> <span class="cm-number">42</span>
</code></pre>
<p>More examples in test cases. Good luck!</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Розгляньте наведений нижче числовий трикутник, у якому кожне число дорівнює сумі числа, що стоїть над ним, і числа, що стоїть ліворуч від нього. Якщо над числом нічого немає, вважайте, що там стоїть <code>0</code>.</p>
<pre><code class="language-haskell"><span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">2</span>
<span class="cm-number">1</span> <span class="cm-number">3</span> <span class="cm-number">5</span> <span class="cm-number">5</span>
<span class="cm-number">1</span> <span class="cm-number">4</span> <span class="cm-number">9</span> <span class="cm-number">14</span> <span class="cm-number">14</span>
</code></pre>
<p>У цьому трикутнику <code>5</code> рядків, а сума чисел в останньому рядку становить <code>sum([1,4,9,14,14]) = 42</code>.</p>
<p>Вам дано ціле число <code>n</code>; ваше завдання — повернути суму чисел в останньому рядку трикутника, що складається з <code>n</code> рядків.</p>
<p>У наведеному вище прикладі:</p>
<pre><code class="language-haskell"><span class="cm-variable">solve</span>(<span class="cm-number">5</span>) <span class="cm-keyword">=</span> <span class="cm-number">42</span>
</code></pre>
<p>Більше прикладів — у тестових випадках. Хай щастить!</p>
</div>

Формула виводиться у три кроки.

## 1. Сума останнього рядка = число Каталана

Якщо виписати суми рядків, виходить `1, 2, 5, 14, 42, ...`. Це числа Каталана `C(n)`: `C(0)=1, C(1)=1, C(2)=2, C(3)=5, C(4)=14, C(5)=42`. Збіг із тестами (`132`, `429`, `1430`) підтверджує це, але є і доведення.

Останнє число кожного рядка не має числа над собою, тому воно дорівнює лише числу ліворуч, тобто передостанньому числу того ж рядка. Звідси випливає, що сума рядка `n` дорівнює останньому числу рядка `n+1`:

- Рядок 5: `1 4 9 14 14`, сума `42`.
- Рядок 6: `1 5 14 28 42 42`, останнє число `42`.

Сама ж таблиця — це «трикутник Каталана». Число в ній дорівнює кількості шляхів ґратками (кроки вправо або вгору), які не заходять за діагональ. Правило «зверху + зліва» відповідає тому, що останній крок шляху був або вгору, або вправо. Останнє число рядка — це шляхи до самої діагоналі, тобто кількість правильних дужкових послідовностей, а це і є число Каталана.

## 2. Закрита формула

Відомо, що:

```
C(n) = (2n)! / (n! · (n+1)!) = binom(2n, n) / (n+1)
```

Її можна обчислити напряму, але `(2n)!` швидко стає величезним, а BigInt-факторіали зайві.

## 3. Рекурентність (те, що в коді)

Беремо відношення сусідніх членів, і факторіали скорочуються:

```
C(k+1)     (2k+2)! · k! · (k+1)!
------  =  ---------------------------
 C(k)      (k+1)! · (k+2)! · (2k)!

        =  (2k+2)(2k+1) / ((k+1)(k+2))
        =  2(2k+1) / (k+2)
```

Тут використано `(2k+2)! = (2k+2)(2k+1)(2k)!` та `(k+2)! = (k+2)(k+1)!`, а `(2k+2) / (k+1) = 2`.

Звідси:

```
C(k+1) = C(k) · 2(2k+1) / (k+2)
```

Це рядок `c = (c * 2n * (2n * k + 1n)) / (k + 2n)`. Починаємо з `C(0) = 1` і повторюємо цей крок `n` разів.

## Чому ділення націло безпечне

Перед діленням `c` дорівнює `C(k)`. Добуток `C(k) · 2(2k+1)` дорівнює `C(k+1) · (k+2)`, а `C(k+1)` — ціле число. Тому добуток завжди ділиться на `(k+2)` без остачі, і `BigInt`-ділення не відкидає дробову частину. Саме тому множення стоїть перед діленням: так проміжні значення залишаються цілими.