<div class="markdown prose max-w-none mb-8" id="description"><h2 id="square-every-digit"><a href="https://www.codewars.com/kata/square-every-digit" data-turbolinks="false" target="_blank">Square</a> <a href="https://www.codewars.com/kata/square-every-digit" data-turbolinks="false" target="_blank">Every</a> <a href="https://www.codewars.com/kata/square-every-digit" data-turbolinks="false" target="_blank">Digit</a></h2>
<p>Welcome. In this kata, you are asked to square every digit of a number and concatenate them.</p>
<p>For example, if we run 9119 through the function, 811181 will come out, because 9<sup>2</sup> is 81 and 1<sup>2</sup> is 1. (81-1-1-81)</p>
<p>Example #2: An input of 765 will/should return 493625 because 7<sup>2</sup> is 49, 6<sup>2</sup> is 36, and 5<sup>2</sup> is 25. (49-36-25)</p>
<p><strong>Note:</strong> The function accepts a non-negative integer and returns an integer.</p>
<hr>
<h2 id="we-now-interrupt-your-regularly-scheduled-programming"><span style="color:magenta">We now interrupt your regularly scheduled programming</span></h2>
<p>Given the result, return the number!</p>
<ul>
<li>if there is more than one possibility, return the <em>smallest</em></li>
<li>if there are <em>no</em> possibilities, return <code>Nothing</code> or a similar empty value</li>
</ul>
<hr>
<p>Happy Coding!</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h2 id="square-every-digit"><a href="https://www.codewars.com/kata/square-every-digit" data-turbolinks="false" target="_blank">Возведение каждой цифры в квадрат</a></h2>
<p>Добро пожаловать! В этой задаче вам нужно возвести каждую цифру числа в квадрат, а затем объединить полученные результаты в одно число.</p>
<p>Например, если передать функции число 9119, на выходе получится 811181, так как 9<sup>2</sup> = 81, а 1<sup>2</sup> = 1. (81-1-1-81)</p>
<p>Пример №2: для входного числа 765 результатом должно быть 493625, поскольку 7<sup>2</sup> = 49, 6<sup>2</sup> = 36, а 5<sup>2</sup> = 25. (49-36-25)</p>
<p><strong>Примечание:</strong> функция принимает неотрицательное целое число и возвращает целое число.</p>
<hr>
<h2 id="we-now-interrupt-your-regularly-scheduled-programming"><span style="color:magenta">Прерываем вашу обычную программу</span></h2>
<p>Имея на руках результат, восстановите исходное число!</p>
<ul>
<li>если существует несколько вариантов, верните <em>наименьший</em> из них;</li>
<li>если подходящих вариантов <em>нет</em>, верните <code>Nothing</code> (или аналогичное пустое значение).</li>
</ul>
<hr>
<p>Удачного кодинга!</p>
</div>

Як це працює

Рядок n потрібно розбити на «квадрати цифр» (0, 1, 4, 9, 16, 25, 36, 49, 64, 81). Неоднозначність виникає, бо, наприклад, 16 — це або 4², або 1 і 6 (але 6 не квадрат), а 49 — це 7² або 4, 9 → 23.
Динамічне програмування з кінця: best[i] — найменше початкове число для суфікса, що починається з позиції i.
«Найменше» означає: спочатку менша довжина (менше цифр), потім лексикографічно. Тому 49 → 7, а не 23; 164 → 18, а не 42.
Початкове число не може починатися з 0 (крім самого 0n), тому такі розбиття відкидаються.
Якщо розбиття неможливе (наприклад, 5n), повертається null.

Складність — O(L), де L — кількість цифр у вхідному числі, тож великі BigInt-значення теж обробляються швидко.