<div class="markdown prose max-w-none mb-8" id="description"><h1 id="task">Task</h1>
<p> A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming <code>45 degree</code> angles with the axes.</p>
<p> How many points with integer coordinates are located inside the given rectangle (including on its sides)?</p>
<h1 id="example">Example</h1>
<p> For <code>a = 6 and b = 4</code>, the output should be <code>23</code></p>
<p> The following picture illustrates the example, and the 23 points are marked green.</p>
<p> <img alt="" src="https://files.gitter.im/myjinxin2015/raYf/blob"></p>
<h1 id="inputoutput">Input/Output</h1>
<ul>
<li><p><code>[input]</code> integer <code>a</code></p>
<p> A positive <code>even</code> integer.</p>
<p> Constraints: <code>2 ≤ a ≤ 10000</code>.</p>
</li>
<li><p><code>[input]</code> integer <code>b</code></p>
<p> A positive <code>even</code> integer.</p>
<p> Constraints: <code>2 ≤ b ≤ 10000</code>.</p>
</li>
<li><p><code>[output]</code> an integer</p>
<p> The number of inner points with integer coordinates.</p>
</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h1 id="task">Задача</h1>
<p> На декартовой плоскости нарисован прямоугольник со сторонами, равными четным целым числам a и b. Его центр (точка пересечения его диагоналей) совпадает с точкой (0, 0), но стороны прямоугольника не параллельны осям; Вместо этого они образуют углы в 45 градусов с осями.
<p> Сколько точек с целочисленными координатами находится внутри заданного прямоугольника (включая его стороны)?</p>
<h1 id="example">Пример</h1>
<p> Для <code>a = 6 и b = 4</code> результат должен быть <code>23</code></p>
<p> На следующем рисунке показан пример, и 23 точки отмечены зеленым цветом.</p>
<p> <img alt="" src="https://files.gitter.im/myjinxin2015/raYf/blob"></p>
<h1 id="inputoutput">Ввод/Вывод</h1>
<ul>
<li><p><code>[ввод]</code> целое число <code>a</code></p>
<p> Положительное <code>четное</code> целое число.</p>
<p> Ограничения: <code>2 ≤ a ≤ 10000</code>.</p>
</li>
<li><p><code>[входные данные]</code> целое число <code>b</code></p>
<p> Положительное <code>четное</code> целое число.</p>
<p> Ограничения: <code>2 ≤ b ≤ 10000</code>.</p>
</li>
<li><p><code>[выходные данные]</code> целое число</p>
<p> Количество внутренних точек с целочисленными координатами.</p>
</li>
</ul>
</div>

Класна задача — вирішується через перехід до повернутих координат (сума/різниця x+y та y−x). Зараз реалізую, протестую і поясню.Усі 4 тести пройшли. Тепер поясню логіку розв'язку.

## Ідея

Прямокутник зі сторонами `a` і `b`, повернутий на 45°, у "непровернутих" координатах виглядає як звичайний прямокутник з половинами сторін `a/2` та `b/2`:

```
|X| ≤ a/2,  |Y| ≤ b/2
```

Зв'язок між оригінальними координатами точки `(x, y)` і "непровернутими" `(X, Y)` при повороті на 45°:

```
X = (x + y) / √2
Y = (y − x) / √2
```

Підставивши в умову `|X| ≤ a/2`, отримуємо:

```
|x + y| ≤ a / √2
|y − x| ≤ b / √2
```

## Ключовий трюк

Позначимо `s = x + y` і `d = y − x`. Це **завжди цілі числа**, якщо `x, y` цілі. Але не кожна пара `(s, d)` відповідає цілим `(x, y)` — треба, щоб `x = (s−d)/2` і `y = (s+d)/2` були цілими. Це виконується тоді й лише тоді, коли `s` і `d` мають **однакову парність** (обидва парні або обидва непарні).

Тобто задача звелась до підрахунку:
- скільки цілих `s` лежить у `[-a/√2, a/√2]`
- скільки цілих `d` лежить у `[-b/√2, b/√2]`
- і скільки з цих пар `(s, d)` мають однакову парність

## Обчислення без похибок float

Оскільки `a, b` можуть бути до 10000, а `√2` — ірраціональне число, безпосереднє порівняння з плаваючою комою може дати похибку на межі діапазону. Тому межу `maxBound(n) = floor(n/√2)` шукаю через ціле порівняння:

```js
2*k*k <= n*n   // еквівалент k <= n/√2, без float-похибок
```

Спочатку беру наближення через `Math.SQRT2`, а потім підправляю на ±1, поки умова `2k² ≤ n²` не виконається точно.

## Фінальна формула

Якщо `maxS` і `maxD` — знайдені межі, а `evenCount(m)/oddCount(m)` — кількість парних/непарних чисел у `[-m, m]`, то:

```
answer = evenS·evenD + oddS·oddD
```

Перевірка на прикладі `a=6, b=4`: `maxS=4` (5 парних, 4 непарних), `maxD=2` (3 парних, 2 непарних) → `5·3 + 4·2 = 15+8 = 23` ✓