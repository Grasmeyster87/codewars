```html
<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Description:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><h2 id="task">Task</h2>
<p>You are given a map of a city. Obviously, just like every other city, it has buildings in it. Your task is to write a function that, based on an input of a city (see formatting below), will return the surface area of the city. Surface area is a measure of the total area, both horizontal and vertical, that the surface of the city occupies.</p>
<h2 id="input">Input</h2>
<p>Rectangular list of lists of integers.</p>
<h2 id="output">Output</h2>
<p>Integer value of the total surface area.</p>
<h2 id="input-formatting">Input formatting</h2>
<p>The measure of each element of the grid is <code>1 x 1</code>. Each cell will have an integer indicating the height in it: if it is <code>0</code>, then it's the ground; otherwise it is implying the height of a building. Note that height will always be a non-negative number. For example:</p>
<pre><code>[
    [3, 3, 0, 0, 0],
    [3, 3, 0, 2, 2],
    [0, 0, 0, 0, 2],
    [0, 0, 0, 2, 2],
    [0, 3, 3, 0, 0]
]

3D visualization, from 2 perspectives:

+-----------+                                                 +-----------+
|\           \                                               /           /|
| \           \                                             /           / |
|  \           \                                           /           /  |
|   +-----------+   +-----+-----+                         +-----------+   |   +-----+-----+
|   |           |   |\           \                        |           |   |  /           /|
+   |           |...| +-----+     \                       |           |   +.+-----+     / |..
 \  |           |...| |     |\     \                      |           |  /..|    /     /  |.
  \ |         +-----------+---+     \                     | +-----------+.+-----+     /   +
   \|         |\           \         \                    |/           /|/           /   /
    +---------| +-----------+---------+                   +-----------+ |-----------+   /
     .........| |           |         |                  .|           | |           |  /
      ........| |           |         |                 ..|           | |           | /
       .......| |           |         |                ...|           | |           |/
        ......+ |           |---------+               ....|           | +-----------+
         ......\|           |...........             .....|           |/............
          ......+-----------+............           ......+-----------+............
</code></pre>
<p>Buildings can be connected to each other, as seen in the ASCII art above. E.g. the <code>2 x 2</code> square, all having <code>3</code>, at the left-top indicates that there is a 2x2 building with height of 3, not 4 separate buildings. Same logic applies to other buildings.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-python"><span class="cm-variable">city_surface_area</span>([
    [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
    [<span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>],
    [<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
]) <span class="cm-comment"># returns 13</span>

<span class="cm-variable">city_surface_area</span>([
    [<span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>],
    [<span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>],
    [<span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>],
]) <span class="cm-comment"># returns 29</span>

<span class="cm-variable">city_surface_area</span>([
    [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>],
]) <span class="cm-comment"># returns 21</span>
</code></pre>
<p><em>This task was inspired by <a href="https://www.codewars.com/kata/5839c48f0cf94640a20001d3/python" data-turbolinks="false" target="_blank">this kata.</a></em></p>
<p>Good luck!</p>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Geometry</div></div></div></div>
```
<br><hr><br>

<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Описание:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><h2 id="task">Задание</h2>
<p>Вам дана карта города. Очевидно, что, как и в любом другом городе, в нем есть здания. Ваша задача — написать функцию, которая, основываясь на данных о городе (см. форматирование ниже), вернет площадь города. Площадь поверхности — это мера общей площади, как горизонтальной, так и вертикальной, которую занимает поверхность города.</p>
<h2 id="input">Ввод</h2>
<p>Прямоугольный список списков целых чисел.</p>
<h2 id="output">Вывод</h2>
<p>Целочисленное значение общей площади поверхности.</p>
<h2 id="input-formatting">Форматирование ввода</h2>
<p>Размер каждого элемента сетки равен <code>1 x 1</code>. Каждая ячейка будет содержать целое число, указывающее на высоту: если оно равно <code>0</code>, то это земля; в противном случае это означает высоту здания. Обратите внимание, что высота всегда будет неотрицательным числом. Например:</p>
<pre><code>[
    [3, 3, 0, 0, 0],
    [3, 3, 0, 2, 2],
    [0, 0, 0, 0, 2],
    [0, 0, 0, 2, 2],
    [0, 3, 3, 0, 0]
]

3D visualization, from 2 perspectives:

+-----------+                                                 +-----------+
|\           \                                               /           /|
| \           \                                             /           / |
|  \           \                                           /           /  |
|   +-----------+   +-----+-----+                         +-----------+   |   +-----+-----+
|   |           |   |\           \                        |           |   |  /           /|
+   |           |...| +-----+     \                       |           |   +.+-----+     / |..
 \  |           |...| |     |\     \                      |           |  /..|    /     /  |.
  \ |         +-----------+---+     \                     | +-----------+.+-----+     /   +
   \|         |\           \         \                    |/           /|/           /   /
    +---------| +-----------+---------+                   +-----------+ |-----------+   /
     .........| |           |         |                  .|           | |           |  /
      ........| |           |         |                 ..|           | |           | /
       .......| |           |         |                ...|           | |           |/
        ......+ |           |---------+               ....|           | +-----------+
         ......\|           |...........             .....|           |/............
          ......+-----------+............           ......+-----------+............
</code></pre>
<p>Здания могут быть соединены друг с другом, как показано на приведенном выше ASCII-изображении. Например, квадрат <code>2 x 2</code>, каждый из которых имеет <code>3</code>, в левом верхнем углу указывает на то, что это здание 2x2 высотой 3, а не 4 отдельных здания. Та же логика применима и к другим зданиям.</p>
<h2 id="examples">Примеры</h2>
<pre><code class="language-python"><span class="cm-variable">city_surface_area</span>([
[<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],

[<span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>],

[<span class="cm-number">0</span>, <span class="cm-number">0</span>, <span class="cm-number">0</span>],
]) <span class="cm-comment"># возвращает 13</span>

<span class="cm-variable">city_surface_area</span>([

[<span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>],

[<span class="cm-number">0</span>, <span class="cm-number">1</span>, <span class="cm-number">0</span>],

[<span class="cm-number">1</span>, <span class="cm-number">0</span>, <span class="cm-number">1</span>],
]) <span class="cm-comment"># возвращает 29</span>

<span class="cm-variable">city_surface_area</span>([

[<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>],
]) <span class="cm-comment"># возвращает 21</span>
</code></pre>
<p><em>Эта задача была вдохновлена ​​<a href="https://www.codewars.com/kata/5839c48f0cf94640a20001d3/python" data-turbolinks="false" target="_blank">этой задачей.</a></em></p>
<p>Удачи!</p>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Геометрия</div></div></div></div>

Чудово, давай розберемо приклад **"Strange building"** крок за кроком 👇  

### Вхідні дані
```js
[
  [4, 2, 0],
  [2, 1, 2],
  [0, 2, 4]
]
```

---

### Крок 1. Верхні площі
Кожна клітинка завжди має верхню площу = `1`.  
Усього клітинок = 9 → верх = **9**.

---

### Крок 2. Бокові площі
Тепер дивимось на кожну клітинку окремо:

#### Рядок 0
- (0,0) висота 4  
  - вгору немає → +4  
  - вниз сусід = 2 → +2  
  - ліворуч немає → +4  
  - праворуч сусід = 2 → +2  
  → разом = 12

- (0,1) висота 2  
  - вгору немає → +2  
  - вниз сусід = 1 → +1  
  - ліворуч = 4 → 0  
  - праворуч = 0 → +2  
  → разом = 5

- (0,2) висота 0  
  → всі боки = 0

#### Рядок 1
- (1,0) висота 2  
  - вгору = 4 → 0  
  - вниз = 0 → +2  
  - ліворуч немає → +2  
  - праворуч = 1 → +1  
  → разом = 5

- (1,1) висота 1  
  - вгору = 2 → 0  
  - вниз = 2 → 0  
  - ліворуч = 2 → 0  
  - праворуч = 2 → 0  
  → разом = 0

- (1,2) висота 2  
  - вгору = 0 → +2  
  - вниз = 4 → 0  
  - ліворуч = 1 → +1  
  - праворуч немає → +2  
  → разом = 5

#### Рядок 2
- (2,0) висота 0 → боки = 0
- (2,1) висота 2  
  - вгору = 1 → +1  
  - вниз немає → +2  
  - ліворуч = 0 → +2  
  - праворуч = 4 → 0  
  → разом = 5

- (2,2) висота 4  
  - вгору = 2 → +2  
  - вниз немає → +4  
  - ліворуч = 2 → +2  
  - праворуч немає → +4  
  → разом = 12

---

### Крок 3. Підсумок
- Верхні площі = 9  
- Бокові площі = 12 + 5 + 0 + 5 + 0 + 5 + 0 + 5 + 12 = **44**  
- Разом = 9 + 44 = **53**

---

✅ Отже, функція правильно рахує: **`citySurfaceArea(...) = 53`**.  

Хочеш, я так само розкладу приклад «A town» (де очікувано 107), щоб ти побачив, як виходить велике число?
