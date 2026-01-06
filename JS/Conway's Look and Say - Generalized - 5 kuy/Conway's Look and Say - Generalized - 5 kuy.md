<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Your task is to create a function that will take an integer and return the result of the look-and-say function on that integer. This should be a general function that takes as input any positive integer, and returns an integer; inputs are not limited to the sequence which starts with "1".</p>
<p>Conway's Look-and-say sequence goes like this:</p>
<ul>
<li>Start with a number.</li>
<li><em>Look</em> at the number, and group consecutive digits together.</li>
<li>For each digit group, <em>say</em> the number of digits, then the digit itself.</li>
</ul>
<p>This can be repeated on its result to generate the sequence.</p>
<p>For example:</p>
<ul>
<li>Start with <code>1</code>.</li>
<li>There is one <code>1</code> --&gt; <code>11</code></li>
<li>Start with <code>11</code>. There are two <code>1</code> digits --&gt; <code>21</code></li>
<li>Start with <code>21</code>. There is one <code>2</code> and one <code>1</code> --&gt; <code>1211</code></li>
<li>Start with <code>1211</code>. There is one <code>1</code>, one <code>2</code>, and two <code>1</code>s --&gt; <code>111221</code></li>
</ul>
<p>Sample inputs and outputs::</p>
<ul>
<li><code>0</code> --&gt; <code>10</code></li>
<li><code>2014</code> --&gt; <code>12101114</code></li>
<li><code>9000</code> --&gt; <code>1930</code></li>
<li><code>22322</code> --&gt; <code>221322</code></li>
<li><code>222222222222</code> --&gt; <code>122</code></li>
</ul>
</div>

<br><hr><br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Ваша задача — создать функцию, которая будет принимать целое число и возвращать результат функции «посмотри и скажи» для этого целого числа. Это должна быть универсальная функция, которая принимает на вход любое положительное целое число и возвращает целое число; Входные данные не ограничиваются последовательностью, начинающейся с "1".</p>
<p>Последовательность «Посмотри и скажи» Конвея выглядит следующим образом:</p>
<ul>
<li>Начните с числа.</li>
<li><em>Посмотрите</em> на число и сгруппируйте последовательные цифры вместе.</li>
<li>Для каждой группы цифр <em>скажите</em> количество цифр, а затем саму цифру.</li>
</ul>
<p>Это можно повторить с результатом, чтобы сгенерировать последовательность.</p>
<p>Например:</p>
<ul>
<li>Начните с <code>1</code>.</li>
<li>Есть одна <code>1</code> --> <code>11</code></li>
<li>Начните с <code>11</code>. Есть две цифры <code>1</code> --> <code>21</code></li>
<li>Начните с <code>21</code>. Есть один <code>2</code> и один <code>1</code> --> <code>1211</code></li>
<li>Начните с <code>1211</code>. Есть один <code>1</code>, один <code>2</code> и два <code>1</code> --> <code>111221</code></li>
</ul>
<p>Примеры входных и выходных данных::</p>
<ul>
<li><code>0</code> --> <code>10</code></li>
<li><code>2014</code> --> <code>12101114</code></li>
<li><code>9000</code> --> <code>1930</code></li>
<li><code>22322</code> --> <code>221322</code></li>
<li><code>222222222222</code> --> <code>122</code></li>
</ul>
</div>