<div class="markdown prose max-w-none mb-8" id="description"><h2 id="overview">Overview</h2>
<p><a href="https://en.wikipedia.org/wiki/Bubble_sort" data-turbolinks="false" target="_blank">Bubblesort</a> is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how <em>not</em> to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.</p>
<p>At the heart of Bubblesort is what is known as a <em>pass</em>. Let's look at an example at how a pass works.</p>
<p>Consider the following list:</p>
<pre><code>9, 7, 5, 3, 1, 2, 4, 6, 8
</code></pre>
<p>We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since <code>9</code> is greater than <code>7</code> in this case, we swap them to give <code>7, 9</code>. The list then becomes:</p>
<pre><code>7, 9, 5, 3, 1, 2, 4, 6, 8
</code></pre>
<p>We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:</p>
<pre><code>7, 5, 3, 1, 2, 4, 6, 8, 9
</code></pre>
<p>Notice that the largest value <code>9</code> "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.</p>
<h2 id="task">Task</h2>
<p>Given an array of integers, your function should return a <em>new</em> array equivalent to performing exactly <strong>1 complete pass</strong> on the original array.  Your function should be pure, i.e. it should <strong>not</strong> mutate the input array.</p>
</div>


1 719 / 5 000
<div class="markdown prose max-w-none mb-8" id="description"><h2 id="overview">Обзор</h2>
<p><a href="https://en.wikipedia.org/wiki/Bubble_sort" data-turbolinks="false" target="_blank">Пузырьковая сортировка</a> — неэффективный алгоритм сортировки, который прост для понимания и поэтому часто преподаётся на вводных курсах информатики в качестве примера того, как <em>не</em> сортировать списки. Тем не менее, он корректен в том смысле, что при полном выполнении в конечном итоге даёт отсортированную версию исходного списка.</p>
<p>В основе пузырьковой сортировки лежит так называемый <em>проход</em>. Давайте рассмотрим пример работы прохода.</p>
<p>Рассмотрим следующий список:</p>
<pre><code>9, 7, 5, 3, 1, 2, 4, 6, 8
</code></pre>
<p>Мы начинаем проход, сравнивая первые два элемента списка. Первый элемент больше второго? Если да, то меняем два элемента местами. Поскольку в данном случае <code>9</code> больше <code>7</code>, мы меняем их местами, чтобы получить <code>7, 9</code>. Список примет следующий вид:</p>
<pre><code>7, 9, 5, 3, 1, 2, 4, 6, 8
</code></pre>
<p>Затем мы продолжаем процесс для второго и третьего элементов, третьего и четвёртого элементов... и так до последних двух элементов. После завершения прохода наш список примет следующий вид:</p>
<pre><code>7, 5, 3, 1, 2, 4, 6, 8, 9
</code></pre>
<p>Обратите внимание, что наибольшее значение <code>9</code> «всплыло» в конец списка. Именно отсюда и название метода пузырьковой сортировки.</p>
<h2 id="task">Задача</h2>
<p>Для массива целых чисел ваша функция должна возвращать <em>новый</em> массив, эквивалентный выполнению ровно <strong>одного полного прохода</strong> исходного массива. Ваша функция должна быть чистой, то есть она <strong>не</strong> должна изменять входной массив.</p>
</div>
