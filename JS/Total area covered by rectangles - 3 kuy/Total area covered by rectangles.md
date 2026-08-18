<div class="markdown prose max-w-none mb-8" id="description"><p>Your task in order to complete this Kata is to write a function which calculates the area covered by a <a href="https://en.wikipedia.org/wiki/Union_(set_theory)" data-turbolinks="false" target="_blank">union</a> of rectangles.<br>
Rectangles can have <b> non-empty intersection</b>, in this way simple solution:
S<sub>all</sub> = S<sub>1</sub> + S<sub>2</sub> + ... + S<sub>n-1</sub> + S<sub>n</sub> (where n - the quantity of rectangles) <b> will not work.</b> </p>
<h3 id="preconditions">Preconditions</h3>
<ul>
<li>each rectangle is represented as: [x<sub>0</sub>, y<sub>0</sub>, x<sub>1</sub>, y<sub>1</sub>]</li>
<li>(x<sub>0</sub>, y<sub>0</sub>) - coordinates of the bottom left corner</li>
<li>(x<sub>1</sub>, y<sub>1</sub>) - coordinates of the top right corner</li>
<li>x<sub>i</sub>, y<sub>i</sub> - <code>positive integers or zeroes</code> (0, 1, 2, 3, 4..)</li>
<li>sides of rectangles are <code>parallel to coordinate axes</code></li>
<li>your input data is array of rectangles</li>
</ul>
<h3 id="requirements">Requirements</h3>
<ul>
<li>Number of rectangles in one test (not including simple tests) range from <code>3000 to 15000.</code> There are <code>10 tests</code> with such range. So, your algorithm should be optimal.</li>
<li>Sizes of the rectangles can reach values like 1e6.</li>
</ul>
<h3 id="example">Example</h3>
<div>
<img src="https://s33.postimg.cc/nf3brdckv/111.png">
</div>

<p>There are three rectangles: </p>
<ul>
<li>R1: [3,3,8,5], with area 10</li>
<li>R2: [6,3,8,9], with area 12</li>
<li>R3: [11,6,14,12], with area 18</li>
<li>R1 and R2 are overlapping (2x2), the grayed area is removed from the total area</li>
</ul>
<p>Hence the total area is <code>10 + 12 + 18 - 4 = 36</code></p>
<hr>
<p>Note: expected time complexity: something around O(N²), but with a good enough constant factor. If you think about using something better, try this kata instead: <a href="https://www.codewars.com/kata/6425a1463b7dd0001c95fad4" data-turbolinks="false" target="_blank">Total area covered by more rectangles</a></p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Ваша задача для выполнения этого задания — написать функцию, которая вычисляет площадь, покрываемую <a href="https://en.wikipedia.org/wiki/Union_(set_theory)" data-turbolinks="false" target="_blank">объединением</a> прямоугольников.<br>
Прямоугольники могут иметь <b>непустое пересечение</b>, таким образом, простое решение:
S<sub>all</sub> = S<sub>1</sub> + S<sub>2</sub> + ... + S<sub>n-1</sub> + S<sub>n</sub> (где n — количество прямоугольников) <b> не сработает.</b> </p>
<h3 id="preconditions">Предварительные условия</h3>
<ul>
<li>каждый прямоугольник представлен как: [x<sub>0</sub>, y<sub>0</sub>, x<sub>1</sub>, y<sub>1</sub>]</li>
<li>(x<sub>0</sub>, y<sub>0</sub>) - координаты нижнего левого угла</li>
<li>(x<sub>1</sub>, y<sub>1</sub>) - координаты верхнего правого угла</li>
<li>x<sub>i</sub>, y<sub>i</sub> - <code>положительные целые числа или нули</code> (0, 1, 2, 3, 4..)</li>
<li>стороны прямоугольников <code>параллельны координатным осям</code></li>
<li>ваши входные данные - массив прямоугольников</li>
</ul>
<h3 id="requirements">Требования</h3>
<ul>
<li>Число Количество прямоугольников в одном тесте (не считая простых тестов) колеблется от <code>3000 до 15000.</code> Существует <code>10 тестов</code> с таким диапазоном. Таким образом, ваш алгоритм должен быть оптимальным.</li>
<li>Размеры прямоугольников могут достигать значений, например, 1e6.</li>
</ul>
<h3 id="example">Пример</h3>
<div>
<img src="https://s33.postimg.cc/nf3brdckv/111.png">
</div>

<p>Есть три прямоугольника:</p>
<ul>
<li>R1: [3,3,8,5], площадь 10</li>
<li>R2: [6,3,8,9], площадь 12</li>
<li>R3: [11,6,14,12], площадь 18</li>
<li>R1 и R2 перекрываются (2x2), затененная область удаляется из общей площади</li>
</ul>
<p>Следовательно, общая площадь составляет <code>10 + 12</p> + 18 - 4 = 36</code></p>
<hr>
<p>Примечание: ожидаемая временная сложность: около O(N²), но с достаточно хорошим постоянным коэффициентом. Если вы думаете об использовании чего-то лучшего, попробуйте вместо этого эту задачу: <a href="https://www.codewars.com/kata/6425a1463b7dd0001c95fad4" data-turbolinks="false" target="_blank">Общая площадь, покрытая большим количеством прямоугольников</a></p>
</div>