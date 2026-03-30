<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>John and his wife Ann have decided to go to Codewars.  On the first day Ann will do one kata and John - he wants to know how it is working - 0 kata.</p>
<p>Let us call <code>a(n)</code> - and <code>j(n)</code> - the number of katas done by Ann - and John - at day <code>n</code>. We have <code>a(0) = 1</code> and in the same manner <code>j(0) = 0</code>.</p>
<p>They have chosen the following rules:</p>
<ul>
<li><p>On day <code>n</code> the number of katas done by Ann should be <code>n</code> minus the number of katas done by John at day <code>t</code>, <code>t</code> being equal to the number of katas done
by Ann herself at day <code>n - 1</code></p>
</li>
<li><p>On day <code>n</code> the number of katas done by John should be <code>n</code> minus the number of katas done by Ann at day <code>t</code>, <code>t</code> being equal to the number of katas done
by John himself at day <code>n - 1</code></p>
</li>
</ul>
<p>Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into!</p>
<h2 id="could-you-write">Could you write:</h2>
<ul>
<li>functions <code>ann(n)</code> and <code>john(n)</code> that return the <strong>list</strong> of the number of katas Ann/John does on the first <code>n</code> days;</li>
<li>functions <code>sum_ann(n)</code> and <code>sum_john(n)</code> that return the <strong>total</strong> number of katas done by Ann/John on the first <code>n</code> days</li>
</ul>
<h2 id="examples">Examples:</h2>
<pre><code>john(11)  --&gt;  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
ann(6)    --&gt;  [1, 1, 2, 2, 3, 3]

sum_john(75)  --&gt;  1720
sum_ann(150)  --&gt;  6930
</code></pre>
<h4 id="note">Note:</h4>
<p>Keep an eye on performance.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Джон и его жена Энн решили поехать на Codewars. В первый день Энн выполнит одну ката, а Джон — он хочет узнать, как это работает — 0 ката.</p>
<p>Назовем <code>a(n)</code> и <code>j(n)</code> — количество ката, выполненных Энн и Джоном в день <code>n</code>. У нас есть <code>a(0) = 1</code> и таким же образом <code>j(0) = 0</code>.</p>
<p>Они выбрали следующие правила:</p>
<ul>
<li><p>В день <code>n</code> количество ката, выполненных Анной, должно быть <code>n</code> минус количество ката, выполненных Джоном в день <code>t</code>, при этом <code>t</code> равно количеству ката, выполненных
самой Анной в день <code>n - 1</code>
</li>
<li><p>В день <code>n</code> количество ката, выполненных Джоном, должно быть <code>n</code> минус количество ката, выполненных Анной в день <code>t</code>, при этом <code>t</code> равно количеству ката, выполненных
самим Джоном в день <code>n - 1</code></p>
</li>
</ul>
<p>Ой! Думаю, им нужно пояснее объяснить, во что именно они ввязываются!</p>
<h2 id="could-you-write">Не могли бы вы написать:</h2>
<ul>
<li>функции <code>ann(n)</code> и <code>john(n)</code>, которые возвращают <strong>список</strong> количества ката, выполненных Энн/Джоном за первые <code>n</code> дней;</li>
<li>функции <code>sum_ann(n)</code> и <code>sum_john(n)</code>, которые возвращают <strong>общее</strong> количество ката, выполненных Энн/Джоном за первые <code>n</code> дней</li>
</ul>
<h2 id="examples">Примеры:</h2>
<pre><code>john(11) --> [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
ann(6) --> [1, 1, 2, 2, 3, 3]

sum_john(75) --> 1720
sum_ann(150) --> 6930
</code></pre>
<h4 id="note">Примечание:</h4>
<p>Следите за производительностью.</p>
</div>

Разберём логику **без кода**, но максимально точно, потому что задача неочевидная.

---

## 1. Что вообще происходит

Есть две последовательности:

* `a(n)` — сколько задач решает **Ann** в день `n`
* `j(n)` — сколько задач решает **John** в день `n`

Начальные условия:

* `a(0) = 1`
* `j(0) = 0`

Дальше — самое важное: **обе последовательности зависят друг от друга**.

---

## 2. Ключевая идея (взаимная рекурсия)

На каждом дне `n`:

### Для Ann:

* Она смотрит на свой результат **вчера** → `a(n-1)`
* Использует это как индекс `t`
* Берёт значение `j(t)` (сколько John сделал в день `t`)
* И считает:

👉 `a(n) = n - j(a(n-1))`

---

### Для John:

* Он смотрит на свой результат **вчера** → `j(n-1)`
* Использует это как индекс `t`
* Берёт значение `a(t)`
* И считает:

👉 `j(n) = n - a(j(n-1))`

---

## 3. Что здесь важно понять

### ❗ Это не обычная рекурсия

Это **взаимозависимые массивы**, которые строятся **слева направо**.

Ты не считаешь `a(n)` отдельно — ты одновременно строишь:

* массив `a`
* массив `j`

---

## 4. Как это интерпретировать интуитивно

Можно думать так:

* Ann говорит:
  *“Я сделаю `n`, но вычту сколько John сделал в день, который равен моему вчерашнему результату”*

* John делает симметрично.

---

## 5. Пошаговая логика (критично понять)

Ты идёшь по дням:

### День 0:

* `a(0) = 1`
* `j(0) = 0`

---

### День 1:

**Ann:**

* смотрит `a(0) = 1`
* берёт `j(1)`
* `a(1) = 1 - j(1)`

Но `j(1)` ещё нет → значит нужно считать John параллельно.

---

**John:**

* смотрит `j(0) = 0`
* берёт `a(0)`
* `j(1) = 1 - a(0) = 1 - 1 = 0`

Теперь можно вернуться к Ann:

* `a(1) = 1 - j(1) = 1 - 0 = 1`

---

👉 Важный вывод:
**на каждом шаге сначала считаешь John, потом Ann (или наоборот, но последовательно и аккуратно)**

---

## 6. Почему это работает

Потому что:

* `a(n-1)` всегда уже посчитано
* `j(n-1)` всегда уже посчитано
* индексы `t` всегда **меньше или равны текущему n**, значит значения уже существуют

👉 Нет выхода за границы — это гарантирует корректность.

---

## 7. Что требуется в задаче

После построения массивов:

* `ann(n)` → вернуть первые `n` значений `a`
* `john(n)` → вернуть первые `n` значений `j`
* `sum_ann(n)` → сумма `a[0..n-1]`
* `sum_john(n)` → сумма `j[0..n-1]`

---

## 8. Главная ошибка, которую делают

Если ты:

* пытаешься решить это **чистой рекурсией** → будет TLE
* не кэшируешь значения → экспоненциальная сложность

👉 Правильный подход — **итеративное построение массивов (DP)**

---

## 9. Сложность

* Время: `O(n)`
* Память: `O(n)`

---

## 10. Суть в одном предложении

Это задача на **взаимозависимые последовательности**, где каждый следующий элемент определяется через уже построенные значения другой последовательности.

---

Если хочешь, могу:

* разобрать первые 10 шагов руками (это сильно проясняет)
* или объяснить, как это аккуратно реализовать без багов (там есть типичные ловушки)
