<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:</p>
<pre><code>003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
</code></pre>
<p>Such tickets were either eaten after being used or collected for bragging rights.</p>
<p>Your task is to write a funtion <code>luck_check(str)</code>, which returns <code>true/True</code> if argument is string decimal representation of a lucky ticket number, or <code>false/False</code> for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>В некоторых странах бывшего Советского Союза существовало поверье о счастливых билетах. Считалось, что любой транспортный билет приносит удачу, если сумма цифр в левой половине числа равна сумме цифр в правой половине. Вот примеры таких чисел:</p>
<pre><code>003111 # 3 = 1 + 1 + 1
813372 # 8 + 1 + 3 = 3 + 7 + 2
17935 # 1 + 7 = 3 + 5 // если длина нечетная, следует игнорировать среднее число при сложении половин.

56328116 # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
</code></pre>
<p>Такие билеты либо съедали после использования, либо собирали для хвастовства.</p>
<p>Ваша задача — написать функцию <code>luck_check(str)</code>, которая возвращает <code>true/True</code>, если аргумент является строковым десятичным представлением номера счастливого билета, или <code>false/False</code> для всех остальных чисел. Она должна выдавать ошибки для пустых строк или строк, которые не представляют десятичное число.</p>
</div>