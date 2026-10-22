<div class="markdown prose max-w-none mb-8" id="description"><p>Given an array of integers of any length, return an array that has 1 added to the value represented by the array.</p>
<p>If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return <code>nil</code> (or your language's equivalent).</p>
<h3 id="examples">Examples</h3>
<p><strong>Valid arrays</strong></p>
<ul>
<li><code>[4, 3, 2, 5]</code> would return <code>[4, 3, 2, 6]</code>  (4325 + 1 = 4326)</li>
<li><code>[1, 2, 3, 9]</code> would return <code>[1, 2, 4, 0]</code>   (1239 + 1 = 1240)</li>
<li><code>[9, 9, 9, 9]</code> would return <code>[1, 0, 0, 0, 0]</code>  (9999 + 1 = 10000)</li>
<li><code>[0, 1, 3, 7]</code> would return <code>[0, 1, 3, 8]</code> (0137 + 1 = 0138)</li>
</ul>
<p><strong>Invalid arrays</strong></p>
<ul>
<li><code>[]</code> is invalid because it is empty</li>
<li><code>[1, -9]</code> is invalid because <code>-9</code> is <strong>not a non-negative integer</strong></li>
<li><code>[1, 2, 33]</code> is invalid because <code>33</code> is <strong>not a single-digit integer</strong></li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Дан массив целых чисел произвольной длины. Необходимо вернуть массив, соответствующий результату прибавления единицы к числу, представленному исходным массивом.</p>
<p>Если массив является некорректным (пустой, содержит отрицательные числа или числа, состоящие более чем из одной цифры), следует вернуть <code>nil</code> (или соответствующий аналог в используемом вами языке программирования).</p>
<h3 id="examples">Примеры</h3>
<p><strong>Корректные массивы</strong></p>
<ul>
<li><code>[4, 3, 2, 5]</code> → <code>[4, 3, 2, 6]</code> (4325 + 1 = 4326)</li>
<li><code>[1, 2, 3, 9]</code> → <code>[1, 2, 4, 0]</code> (1239 + 1 = 1240)</li>
<li><code>[9, 9, 9, 9]</code> → <code>[1, 0, 0, 0, 0]</code> (9999 + 1 = 10000)</li>
<li><code>[0, 1, 3, 7]</code> → <code>[0, 1, 3, 8]</code> (0137 + 1 = 0138)</li>
</ul>
<p><strong>Некорректные массивы</strong></p>
<ul>
<li><code>[]</code> — некорректен, так как массив пуст</li>
<li><code>[1, -9]</code> — некорректен, так как <code>-9</code> — <strong>отрицательное число</strong></li>
<li><code>[1, 2, 33]</code> — некорректен, так как <code>33</code> — <strong>число, состоящее более чем из одной цифры</strong></li>
</ul>
</div>