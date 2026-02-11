<div class="markdown prose max-w-none mb-8" id="description"><p>Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.</p>
<pre><code> Three 1's =&gt; 1000 points
 Three 6's =&gt;  600 points
 Three 5's =&gt;  500 points
 Three 4's =&gt;  400 points
 Three 3's =&gt;  300 points
 Three 2's =&gt;  200 points
 One   1   =&gt;  100 points
 One   5   =&gt;   50 point
</code></pre>
<p>Each of 5 dice can only be counted once in each roll. For example, a given "5" can only count as part of a 
triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.</p>
<p>Example scoring</p>
<pre><code> Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
</code></pre>
<p>Note: your solution must not modify the input array.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Жадібність — це гра в кості, в яку грають п'ятьма шестигранними кубиками. Ваша місія, якщо ви вирішите її прийняти, — набрати очки за цими правилами. Вам завжди буде надано масив із п'ятьма значеннями шестигранних кубиків.</p>
<pre><code> Три 1 => 1000 очок Три 6 => 600 очок Три 5 => 500 очок Три 4 => 400 очок Три 3 => 300 очок Три 2 => 200 очок Одна 1 => 100 очок Одна 5 => 50 очок
</code></pre>
<p>Кожен з 5 кубиків можна враховувати лише один раз у кожному кидку. Наприклад, задана «5» може враховуватися лише як частина
трійки (що сприяє 500 очкам) або як окремі 50 очок, але не обидва в одному кидку.</p>
<p>Приклад підрахунку очок</p>
<pre><code> Оцінка кидка
--------- ------------------
5 1 3 4 1 250: 50 (для 5) + 2 * 100 (для 1)
1 1 1 3 1 1100: 1000 (для трьох 1) + 100 (для інших 1)
2 4 4 5 4 450: 400 (для трьох 4) + 50 (для 5)
</code></pre>
<p>Примітка: ваше рішення не повинно змінювати вхідний масив.</p>
</div>

Як це працює:

    Підрахунок (counts): Ми створюємо карту частот. Наприклад, якщо dice — це [1, 1, 1, 3, 1], то counts буде {1: 4, 3: 1}.

    Обробка трійок: Цикл перевіряє кожне число від 1 до 6. Якщо число зустрічається 3 або більше разів, ми нараховуємо "великий бонус" (1000 для одиниць або n×100 для інших).

    Залишки: Оскільки кожен кубик можна використати лише раз, ми зменшуємо лічильник на 3 після врахування трійки. Потім ми просто множимо кількість одиниць, що залишилися, на 100, а п'ятірок — на 50.

    Безпека даних: Ми використовуємо forEach та окремий об'єкт, тому оригінальний масив dice залишається незмінним, як того вимагає умова.