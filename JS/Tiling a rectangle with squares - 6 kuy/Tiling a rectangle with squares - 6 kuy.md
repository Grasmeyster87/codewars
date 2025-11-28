<div>
<p>You have to cover a rectangular area (measuring n x m where n and m are positive integers) with square tiles. 
You have an unlimited supply of square tiles, but the lengths of the sides are all powers of 2 (1 x 1, 2 x 2, 4 x 4, 8 x 8, etc.).
<br>You must use the minimum number of tiles which will exactly cover the area.</p>
<p>For example, given an area measuring 13 x 11:</p>
<pre><code>
___________________________
|               |  4x4  |_|
|               |       |_|
|               |       |_|
|               |_______|_|
|    8x8        |  4x4  |_|
|               |       |_|
|               |       |_|
|_______________|_______|_|
|2x2|2x2|2x2|2x2|2x2|2x2|_|
|___|___|___|___|___|___|_|
|_|_|_|_|_|_|_|_|_|_|_|_|_|
</code></pre>
<p>We can exactly cover the required area with 32 tiles.</p>
<p>Write a function which takes as its inputs the length and width of the rectangular area to be tiled, 
and returns the minimum number of tiles required to exactly fill the area.</p>
<p>Be aware that some very large areas will be tested.</p>
</div>

<div>
<p>Вам необходимо покрыть прямоугольную область (размером n x m, где n и m — положительные целые числа) квадратными плитками.

У вас неограниченный запас квадратных плиток, но длины сторон всех плиток являются степенями двойки (1 x 1, 2 x 2, 4 x 4, 8 x 8 и т. д.).
<br>Необходимо использовать минимальное количество плиток, которое полностью покроет всю область.</p>
<p>Например, дана область размером 13 x 11:</p>
<pre><code>
___________________________
|               |  4x4  |_|
|               |       |_|
|               |       |_|
|               |_______|_|
|    8x8        |  4x4  |_|
|               |       |_|
|               |       |_|
|_______________|_______|_|
|2x2|2x2|2x2|2x2|2x2|2x2|_|
|___|___|___|___|___|___|_|
|_|_|_|_|_|_|_|_|_|_|_|_|_|
</code></pre>
<p>Мы можем точно покрыть требуемую область 32 плитками.</p>
<p>Напишите функцию, которая принимает в качестве входных данных длину и ширину прямоугольной области, которую нужно замостить,
и возвращает минимальное количество плиток, необходимое для полного заполнения области.</p>
<p>Обратите внимание, что будут проверяться некоторые очень большие области.</p>
</div>