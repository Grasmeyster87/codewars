<div class="markdown prose max-w-none mb-8" id="description"><p>As the title suggests, this is the hard-core version of <a href="https://www.codewars.com/kata/sum-of-a-sequence" data-turbolinks="false" target="_blank">another neat kata</a>.</p>
<p>The task is simple to explain: simply sum all the numbers from the first parameter being the <code>beginning</code> to the second parameter being the upper <code>limit</code> (possibly included), going in <code>step</code>s expressed by the third parameter.</p>
<ul>
<li>If the beginning is already equal to the limit, return it, regardless of the step.</li>
<li>If it is an impossible sequence (with the beginning being larger than the limit and a positive step or the other way around), return <code>0</code>.</li>
<li><code>step</code> will never be <code>0</code></li>
</ul>
<p>Very large sequences will be tested, so brute-force will not work.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript"><span class="cm-variable">begin</span> <span class="cm-variable">end</span> <span class="cm-variable">step</span>      <span class="cm-variable">expected</span>
  <span class="cm-number">2</span>    <span class="cm-number">2</span>   <span class="cm-number">2</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">2</span>  <span class="cm-comment">// 2</span>
  <span class="cm-number">2</span>    <span class="cm-number">6</span>   <span class="cm-number">2</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span> <span class="cm-number">12</span>  <span class="cm-comment">// 2 + 4 + 6</span>
  <span class="cm-number">1</span>    <span class="cm-number">5</span>   <span class="cm-number">1</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span> <span class="cm-number">15</span>  <span class="cm-comment">// 1 + 2 + 3 + 4 + 5</span>
  <span class="cm-number">1</span>    <span class="cm-number">5</span>   <span class="cm-number">3</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">5</span>  <span class="cm-comment">// 1 + 4</span>
  <span class="cm-number">1</span>    <span class="cm-number">5</span>  <span class="cm-operator">-</span><span class="cm-number">3</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">0</span>  <span class="cm-comment">// cannot reach a positive by adding negatives</span>
 <span class="cm-operator">-</span><span class="cm-number">1</span>   <span class="cm-operator">-</span><span class="cm-number">5</span>  <span class="cm-operator">+</span><span class="cm-number">1</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">0</span>  <span class="cm-comment">// cannot reach a negative by adding positives</span>
  <span class="cm-number">2</span>    <span class="cm-number">2</span>  <span class="cm-operator">-</span><span class="cm-number">9</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">2</span>  <span class="cm-comment">// the step is never used</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Как следует из названия, это усложненная версия <a href="https://www.codewars.com/kata/sum-of-a-sequence" data-turbolinks="false" target="_blank">другой интересной задачи (ката)</a>.</p>
<p>Задача проста: нужно найти сумму всех чисел в диапазоне от первого параметра (<code>beginning</code> — начало) до второго параметра (<code>limit</code> — верхний предел, который может быть включен в сумму), двигаясь с шагом, заданным третьим параметром (<code>step</code>).</p>
<ul>
<li>Если начальное значение уже равно пределу, верните это значение, независимо от шага.</li>
<li>Если последовательность невозможна (например, начало больше предела при положительном шаге или наоборот), верните <code>0</code>.</li>
<li>Значение <code>step</code> никогда не будет равно <code>0</code>.</li>
</ul>
<p>Будут проверяться очень длинные последовательности, поэтому метод полного перебора (brute-force) не подойдет.</p>
<h2 id="examples">Примеры</h2>
<pre><code class="language-javascript"><span class="cm-variable">begin</span> <span class="cm-variable">end</span> <span class="cm-variable">step</span>      <span class="cm-variable">expected</span>
<span class="cm-number">2</span>    <span class="cm-number">2</span>   <span class="cm-number">2</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">2</span>  <span class="cm-comment">// 2</span>
<span class="cm-number">2</span>    <span class="cm-number">6</span>   <span class="cm-number">2</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span> <span class="cm-number">12</span>  <span class="cm-comment">// 2 + 4 + 6</span> 6</span>
<span class="cm-number">1</span>    <span class="cm-number">5</span>   <span class="cm-number">1</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span> <span class="cm-number">15</span>  <span class="cm-comment">// 1 + 2 + 3 + 4 + 5</span>
<span class="cm-number">1</span>    <span class="cm-number">5</span>   <span class="cm-number">3</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">5</span>  <span class="cm-comment">// 1 + 4</span>
<span class="cm-number">1</span>    <span class="cm-number">5</span>  <span class="cm-operator">-</span><span class="cm-number">3</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">0</span>  <span class="cm-comment">// невозможно получить положительное число, складывая отрицательные</span>
<span class="cm-operator">-</span><span class="cm-number">1</span>   <span class="cm-operator">-</span><span class="cm-number">5</span>  <span class="cm-operator">+</span><span class="cm-number">1</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">0</span>  <span class="cm-comment">// невозможно получить отрицательное число, складывая положительные</span>
<span class="cm-number">2</span>    <span class="cm-number">2</span>  <span class="cm-operator">-</span><span class="cm-number">9</span>   <span class="cm-operator">===</span><span class="cm-operator">&gt;</span>  <span class="cm-number">2</span>  <span class="cm-comment">// </span> шаг никогда не используется</span>

<br> <hr> <br>
Бо `(end - begin) / step` рахує кількість **кроків** між першим і останнім членом, а членів завжди на один більше, ніж кроків. Так само, як у паркані: 3 прольоти між стовпами означають 4 стовпи.

Приклад `(2, 6, 2)`: послідовність `2, 4, 6`.
- `(6 - 2) / 2 = 2`: це кроки (2→4 і 4→6)
- членів 3, тобто `2 + 1`

`+1` додає сам початковий член `begin`, який ми ще не порахували.

`Math.floor` потрібен, коли межа не потрапляє точно на крок. Для `(1, 5, 3)`: `(5 - 1) / 3 = 1.33`. Повний крок вміщається лише один (1→4), наступний (4→7) вилітає за межу. Тому `floor(1.33) = 1` крок, `+1` дає 2 члени: `1, 4`.

Для від'ємного кроку це працює так само, бо і чисельник, і знаменник від'ємні, тож частка додатна. Для `(-1, -5, -3)`: `(-5 - (-1)) / -3 = 1.33`, `floor = 1`, `n = 2`, члени `-1, -4`.