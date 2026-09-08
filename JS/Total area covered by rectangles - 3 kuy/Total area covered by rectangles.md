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

Давай розберемо цей код крок за кроком. Він використовує комбінацію двох потужних алгоритмів: **Методу скануючої прямої (Sweep-line)** та **Дерева відрізків (Segment Tree)**.

Ось детальний розбір того, що відбувається під капотом:

### 1. Базова перевірка та підготовка даних

```javascript
if (recs.length === 0) return 0;
const events = [];
const ys = [];

```

Спочатку функція перевіряє, чи не порожній масив. Далі створюються два масиви: `events` (для зберігання вертикальних меж прямокутників) та `ys` (для зберігання всіх координат по осі Y).

### 2. Створення подій (Events)

```javascript
for (const [x1, y1, x2, y2] of recs) {
    if (x1 === x2 || y1 === y2) continue; // Ігноруємо "сплющені" прямокутники
    events.push([x1, 1, y1, y2]);  // Подія 1: Початок прямокутника
    events.push([x2, -1, y1, y2]); // Подія 2: Кінець прямокутника
    ys.push(y1, y2);
}

```

Алгоритм розбиває кожен прямокутник на дві вертикальні лінії:

* **Ліва межа (`x1`)**: маркується як `+1` (прямокутник почався, треба додати його висоту).
* **Права межа (`x2`)**: маркується як `-1` (прямокутник закінчився, треба прибрати його).
Усі координати Y просто скидаються у загальну купу для наступного кроку.



### 3. Стиснення координат (Coordinate Compression)

```javascript
ys.sort((a, b) => a - b);
const uniqueY = [];
for (const y of ys) {
    if (uniqueY.length === 0 || uniqueY[uniqueY.length - 1] !== y) {
        uniqueY.push(y);
    }
}

```

Оскільки координати можуть сягати значень 1 000 000, створювати масив такого розміру не вистачить пам'яті. Тому алгоритм сортує всі Y і залишає лише унікальні. Тепер реальні висоти прив'язані до невеликих порядкових індексів (0, 1, 2...). Це називається *стисненням координат*.

### 4. Сортування подій по осі X

```javascript
events.sort((a, b) => a[0] - b[0]);

```

Це основа **скануючої прямої**. Усі ліві та праві грані прямокутників шикуються в чергу зліва направо. Ми ніби уявляємо вертикальну лінію, яка рухається від найменшого X до найбільшого.

### 5. Налаштування Дерева Відрізків (Segment Tree)

```javascript
const segments = uniqueY.length - 1;
const coverCount = new Int32Array(segments * 4 + 4);
const coveredLength = new Float64Array(segments * 4 + 4);

```

Дерево відрізків потрібне, щоб миттєво відповідати на запитання: *"Яка сумарна довжина Y зараз зафарбована?"*

* `coverCount` рахує, скільки прямокутників зараз перекривають конкретний відрізок по висоті.


* `coveredLength` зберігає реальну фізичну довжину цього покритого відрізка.



### 6. Функція оновлення дерева (`update`)

```javascript
function update(node, left, right, ql, qr, delta) { ... }

```

Це рекурсивна функція. Коли наша скануюча пряма натрапляє на ліву чи праву межу прямокутника, ця функція:

1. Знаходить потрібний діапазон висот у дереві.
2. Додає або віднімає `delta` (`+1` або `-1`) з `coverCount`.


3. Якщо `coverCount > 0` (відрізок покритий), функція бере реальну довжину з масиву `uniqueY` і записує її в `coveredLength`. Інакше — складає довжини дочірніх вузлів.



### 7. Бінарний пошук (`getYIndex`)

```javascript
function getYIndex(y) { ... }

```

Оскільки ми "стиснули" Y координати, ця допоміжна функція дозволяє дуже швидко знаходити, якому індексу в масиві `uniqueY` відповідає реальна координата Y з нашого прямокутника.

### 8. Головний цикл обчислення площі

```javascript
let area = 0;
let previousX = events[0][0];

while (i < events.length) {
    const currentX = events[i][0];
    // Рахуємо площу між попереднім X та поточним X
    area += (currentX - previousX) * coveredLength[1];

    // Обробляємо всі події (грані), що знаходяться на поточному X
    while (i < events.length && events[i][0] === currentX) {
        const [, delta, y1, y2] = events[i];
        const left = getYIndex(y1);
        const right = getYIndex(y2);
        update(1, 0, segments, left, right, delta);
        i++;
    }
    previousX = currentX;
}
return area;

```

Тут відбувається вся магія:

1. Алгоритм бере ширину пройденого кроку: `(currentX - previousX)`.


2. Множить цю ширину на **загальну покриту висоту** в цей момент, яка завжди зберігається в корені дерева `coveredLength[1]`.


3. Додає цей шматок до загальної `area`.


4. Потім внутрішній цикл дивиться: які нові прямокутники почалися на цій лінії (додає їх висоту в дерево), або які закінчилися (видаляє їх з дерева).



**Підсумок:** Замість того, щоб шукати перетини фігур, ми просто рухаємо лінію зліва направо і на кожному кроці рахуємо площу прямокутної смужки (Ширина кроку × Зафарбована висота), акумулюючи це в загальну суму.

Чи все зрозуміло в цьому алгоритмі, або якась конкретна частина (наприклад, дерево відрізків) потребує ще більшого заглиблення?