<div class="markdown prose max-w-none mb-8" id="description"><p>Write a program that will calculate the number of trailing zeros in a factorial of a given number.</p>
<p><code>N! = 1 * 2 * 3 *  ... * N</code></p>
<p>Be careful <code>1000!</code> has 2568 digits...</p>
<p>For more info, see: <a href="http://mathworld.wolfram.com/Factorial.html" data-turbolinks="false" target="_blank">http://mathworld.wolfram.com/Factorial.html</a> </p>
<h2 id="examples">Examples</h2>
<table>
<thead>
<tr>
<th align="right">N</th>
<th>Product</th>
<th align="right">N factorial</th>
<th align="right">Trailing zeros</th>
</tr>
</thead>
<tbody><tr>
<td align="right"><code>6</code></td>
<td><code>1*2*3*4*5*6</code></td>
<td align="right"><code>720</code></td>
<td align="right"><code>1</code></td>
</tr>
<tr>
<td align="right"><code>12</code></td>
<td><code>1*2*3*4*5*6*7*8*9*10*11*12</code></td>
<td align="right"><code>479001600</code></td>
<td align="right"><code>2</code></td>
</tr>
</tbody></table>
<p><em>Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.</em></p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишите программу, которая вычислит количество нулей в конце факториала заданного числа.</p>
<p><code>N! = 1 * 2 * 3 * ... * N</code></p>
<p>Будьте осторожны, <code>1000!</code> имеет 2568 цифр...</p>
<p>Для получения дополнительной информации см.: <a href="http://mathworld.wolfram.com/Factorial.html" data-turbolinks="false" target="_blank">http://mathworld.wolfram.com/Factorial.html</a> </p>
<h2 id="examples">Примеры</h2>
<table>
<thead>
<tr>
<th align="right">N</th>
<th>Произведение</th>
<th align="right">N факториал</th>
<th align="right">Конечные нули</th>
</tr>
</thead>
<tbody><tr>
<td align="right"><code>6</code></td>
<td><code>1*2*3*4*5*6</code></td>
<td align="right"><code>720</code></td>
<td align="right"><code>1</code></td>
</tr>
<tr>
<td align="right"><code>12</code></td>
<td><code>1*2*3*4*5*6*7*8*9*10*11*12</code></td>
<td align="right"><code>479001600</code></td>
<td align="right"><code>2</code></td>
</tr>
</tbody></table>
<p><em>Подсказка: Вам не нужно вычислять факториал. Найдите другой способ найти количество нулей.</em></p>
</div>

Як і зазначено в підказці у файлі "Number of trailing zeros of N - 5 kuy.md", обчислювати сам факторіал не потрібно (і не варто, оскільки числа стають величезними, наприклад, $1000!$ має 2568 цифр). Кількість нулів у кінці числа визначається тим, скільки разів число 10 є множником цього факторіала.  Оскільки $10 = 2 \times 5$, а двійок у розкладі факторіала завжди набагато більше, ніж п'ятірок, нам достатньо порахувати лише кількість п'ятірок у простих множниках чисел від $1$ до $N$. Щоб знайти всі п'ятірки, ми ділимо $N$ на $5$, потім на $25$ (щоб врахувати числа, які містять дві п'ятірки, як-от 25 чи 50), потім на $125$ і так далі, поступово додаючи результати.

Цей підхід є оптимальним ($\mathcal{O}(\log_5 N)$) і успішно пройде всі перевірки з файлу "Number of trailing zeros of N - 5 kuy.test.js", включаючи базові випадки, де zeros(0) дорівнює 0, а zeros(30) дорівнює 7. 