<div class="markdown prose max-w-none mb-8" id="description"><h1 id="task">Task</h1>
<p>Given a string representing a simple fraction <code>x/y</code>, your function must return a string representing the corresponding <a href="http://en.wikipedia.org/wiki/Fraction_%28mathematics%29#Mixed_numbers" data-turbolinks="false" target="_blank">mixed fraction</a> in the following format:</p>
<p><code>[sign]a b/c</code></p>
<p>where <code>a</code> is integer part and <code>b/c</code> is irreducible proper fraction. There must be exactly one space between <code>a</code> and <code>b/c</code>. Provide <code>[sign]</code> only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).</p>
<p>If the <code>x/y</code> equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.</p>
<p>Division by zero should raise an error (preferably, the standard zero division error of your language).</p>
<h1 id="value-ranges">Value ranges</h1>
<ul>
<li>-10 000 000 &lt; <code>x</code> &lt; 10 000 000</li>
<li>-10 000 000 &lt; <code>y</code> &lt; 10 000 000</li>
</ul>
<h1 id="examples">Examples</h1>
<ul>
<li>Input: <code>42/9</code>, expected result: <code>4 2/3</code>.</li>
<li>Input: <code>6/3</code>, expedted result: <code>2</code>.</li>
<li>Input: <code>4/6</code>, expected result: <code>2/3</code>.</li>
<li>Input: <code>0/18891</code>, expected result: <code>0</code>.</li>
<li>Input: <code>-10/7</code>, expected result: <code>-1 3/7</code>.</li>
<li>Inputs <code>0/0</code> or <code>3/0</code> must raise a zero division error.</li>
</ul>
<h1 id="note">Note</h1>
<p>Make sure not to modify the input of your function in-place, it is a bad practice.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h1 id="task">Задача</h1>
<p>Дана строка, представляющая простую дробь <code>x/y</code>. Ваша функция должна вернуть строку, представляющую соответствующую <a href="http://en.wikipedia.org/wiki/Fraction_%28mathematics%29#Mixed_numbers" data-turbolinks="false" target="_blank">смешанную дробь</a> в следующем формате:</p>
<p><code>[sign]a b/c</code></p>
<p>где <code>a</code> — целая часть, а <code>b/c</code> — неприводимая правильная дробь. Между <code>a</code> и <code>b/c</code> должен быть ровно один пробел. Указывайте знак <code>[sign]</code> только если он отрицательный (и ненулевой) и только в начале числа (как целая, так и дробная части должны быть указаны в абсолютном виде).</p>
<p>Если <code>x/y</code> равно целой части, возвращайте только целую часть. Если целая часть равна нулю, возвращайте только неприводимую дробь. В обоих этих случаях результирующая строка не должна содержать пробелов.</p>
<p>Деление на ноль должно вызывать ошибку (предпочтительно, стандартную ошибку деления на ноль в вашем языке).</p>
<h1 id="value-ranges">Диапазоны значений</h1>
<ul>
<li>-10 000 000 <code>x</code> <10 000 000</li>
<li>-10 000 000 <code>y</code> <; 10 000 000</li>
</ul>
<h1 id="examples">Примеры</h1>
<ul>
<li>Ввод: <code>42/9</code>, ожидаемый результат: <code>4 2/3</code>.</li>
<li>Ввод: <code>6/3</code>, ожидаемый результат: <code>2</code>.</li>
<li>Ввод: <code>4/6</code>, ожидаемый результат: <code>2/3</code>.</li>
<li>Ввод: <code>0/18891</code>, ожидаемый результат: <code>0</code>.</li>
<li>Ввод: <code>-10/7</code>, ожидаемый результат: <code>-1 3/7</code>.</li>
<li>Вводы <code>0/0</code> или <code>3/0</code> должны вызывать деление на ноль ошибка.</li>
</ul>
<h1 id="note">Примечание</h1>
<p>Убедитесь, что вы не изменяете входные данные вашей функции на месте, это плохая практика.</p>
</div>