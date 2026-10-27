<div class="markdown prose max-w-none mb-8" id="description"><p>Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.</p>
<p>Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:</p>
<ul>
<li><code>1990</code> is rendered: <code>1000</code>=<code>M</code>, <code>900</code>=<code>CM</code>, <code>90</code>=<code>XC</code>; resulting in <code>MCMXC</code></li>
<li><code>2008</code> is written as <code>2000</code>=<code>MM</code>, <code>8</code>=<code>VIII</code>; or <code>MMVIII</code></li>
<li><code>1666</code> uses each Roman symbol in descending order: <code>MDCLXVI</code>.</li>
</ul>
<p>Input range : <code>1 &lt;= n &lt; 4000</code></p>
<p>In this kata <code>4</code> should be represented as <code>IV</code>, NOT as <code>IIII</code> (the "watchmaker's four").</p>
<h3 id="examples">Examples</h3>
<pre><code>to roman:
2000 -&gt; "MM"
1666 -&gt; "MDCLXVI"
  86 -&gt; "LXXXVI"
   1 -&gt; "I"

from roman:
"MM"      -&gt; 2000
"MDCLXVI" -&gt; 1666
"LXXXVI"  -&gt;   86
"I"       -&gt;    1
</code></pre>
<h3 id="help">Help</h3>
<pre><code>+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишіть дві функції: одна перетворює ціле число на римське, а інша — римське число на ціле. Для кожної функції буде виконано перевірку на кількох різних значеннях.</p>
<p>Сучасні римські числа записуються шляхом відображення кожного розряду окремо, починаючи з найстаршого (лівого), причому розряди зі значенням нуль пропускаються. Приклади запису римськими цифрами:</p>
<ul>
<li><code>1990</code>: <code>1000</code> = <code>M</code>, <code>900</code> = <code>CM</code>, <code>90</code> = <code>XC</code>; разом — <code>MCMXC</code></li>
<li><code>2008</code>: <code>2000</code> = <code>MM</code>, <code>8</code> = <code>VIII</code>; разом — <code>MMVIII</code></li>
<li><code>1666</code>: використовуються всі римські символи в порядку спадання — <code>MDCLXVI</code>.</li>
</ul>
<p>Діапазон вхідних даних: <code>1 &lt;= n &lt; 4000</code></p>
<p>У цій задачі число <code>4</code> має записуватися як <code>IV</code>, а НЕ як <code>IIII</code> (так звана «годинникова четвірка»).</p>
<h3 id="examples">Приклади</h3>
<pre><code>у римські:
2000 -&gt; "MM"
1666 -&gt; "MDCLXVI"
86 -&gt; "LXXXVI"
1 -&gt; "I"

з римських:
"MM"      -&gt; 2000
"MDCLXVI" -&gt; 1666
"LXXXVI"  -&gt; 86
"I"       -&gt; 1
</code></pre>
<h3 id="help">Довідка</h3>
<pre><code>+--------+-------+
| Символ | Значення |
+--------+-------+
| M   | 1000 |
| CM   | 900 |
| D   | 500 |
| CD | 400 |
| C | 100 |
| XC | 90 |
| L | 50 |
| XL | 40 |
| X | 10 |
| IX | 9 |
| V | 5 |
| IV | 4 |
| I | 1 |
+--------+-------+
</code></pre>
</div>