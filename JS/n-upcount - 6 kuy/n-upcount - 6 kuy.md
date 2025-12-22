<div class="description-content p-4">
                <div class="markdown prose max-w-none mb-8" id="description"><p>efine the <code>n-upcount</code> of an array to be the number of times the <code>partial sum goes from less than or equal to n to greater than n</code> during the calculation of the sum of the elements of the array.Assume the initial value of the sum
is <code>0</code>.</p>
<pre><code>eg.1 if n=6, the 6 upcount of the array [6,3,1] is 1.

index    array[index]    partial sum    upcount    comment
0            6            6                1        0 to 6
1            3            9
2            1            10

eg.2 the 20-upcount of the array [1,12,-1] is 0. Because the maximum value of the partial sum is 13 and it never gets bigger than 20.

index    array[index]    partial sum    upcount    comment
0            1            1
1            12           13
2            -1           12
</code></pre>
</div>
                  <hr>
                  <div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div></div>
              </div>

<br><hr><br>

<div class="description-content p-4">

<div class="markdown prose max-w-none mb-8" id="description"><p>Определим <code>n-upcount</code> массива как количество раз, когда <code>частичная сумма переходит из состояния меньше или равного n в состояние больше n</code> во время вычисления суммы элементов массива. Предположим, что начальное значение суммы равно <code>0</code>.</p>
<pre><code>Например, если n=6, то 6-upcount массива [6,3,1] равен 1.

index array[index] partial sum upcount comment
0 6 6 1 0 to 6
1 3 9
2 1 10

Например, если 20-upcount массива [1,12,-1] равен 0. Потому что максимальное значение частичной суммы равно 13, и оно никогда не становится больше n</code>. 20.

index array[index] partial sum upcount comment
0 1 1
1 12 13
2 -1 12
</code></pre>
</div>

<hr>

<div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Основы</div></div>

</div>