<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Description:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Create a method named "rotate" that returns a given array with the elements inside the array rotated <code>n</code> spaces.</p>
<p>If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left.
If n is 0, then it should return the array unchanged.</p>
<p>Example:</p>
<pre><code>with array [1, 2, 3, 4, 5]

n = 1      =&gt;    [5, 1, 2, 3, 4]
n = 2      =&gt;    [4, 5, 1, 2, 3]
n = 3      =&gt;    [3, 4, 5, 1, 2]
n = 4      =&gt;    [2, 3, 4, 5, 1]
n = 5      =&gt;    [1, 2, 3, 4, 5]
n = 0      =&gt;    [1, 2, 3, 4, 5]
n = -1     =&gt;    [2, 3, 4, 5, 1]
n = -2     =&gt;    [3, 4, 5, 1, 2]
n = -3     =&gt;    [4, 5, 1, 2, 3]
n = -4     =&gt;    [5, 1, 2, 3, 4]
n = -5     =&gt;    [1, 2, 3, 4, 5]
</code></pre>
<p>The rotation shouldn't be limited by the indices available in the array. Meaning that if we exceed the indices of the array it keeps rotating.</p>
<p>Example:</p>
<pre><code>with array [1, 2, 3, 4, 5]

n = 7        =&gt;    [4, 5, 1, 2, 3]
n = 11       =&gt;    [5, 1, 2, 3, 4]
n = 12478    =&gt;    [3, 4, 5, 1, 2]
</code></pre>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Arrays</div><div class="keyword-tag">Algorithms</div></div></div></div>

<br> <hr> <br>

<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Описание:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Создайте метод с именем "rotate", который возвращает заданный массив с элементами, повернутыми на <code>n</code> пробелов.</p>
<p>Если n больше 0, он должен повернуть массив вправо. Если n меньше 0, он должен повернуть массив влево.

Если n равно 0, то он должен вернуть массив без изменений.</p>
<p>Пример:</p>
<pre><code>с массивом [1, 2, 3, 4, 5]

n = 1 => [5, 1, 2, 3, 4]
n = 2 => [4, 5, 1, 2, 3]
n = 3 > [3, 4, 5, 1, 2]
n = 4 > [2, 3, 4, 5, 1]
n = 5 > [1, 2, 3, 4, 5]
n = 0 > [1, 2, 3, 4, 5]
n = -1 > [2, 3, 4, 5, 1]
n = -2 > [3, 4, 5, 1, 2]
n = -3 > [4, 5, 1, 2, 3]
n = -4 > [5, 1, 2, 3, 4]
n = -5 > [1, 2, 3, 4, 5]
</code></pre>
<p>Вращение не должно ограничиваться индексами, доступными в массиве. Это означает, что если мы превысим индексы массива, вращение продолжится.</p>
<p>Пример:</p>
<pre><code>с массивом [1, 2, 3, 4, 5]

n = 7 => [4, 5, 1, 2, 3]
n = 11 => [5, 1, 2, 3, 4]
n = 12478 => [3, 4, 5, 1, 2]
</code></pre>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Массивы</div><div class="keyword-tag">Алгоритмы</div></div></div></div>