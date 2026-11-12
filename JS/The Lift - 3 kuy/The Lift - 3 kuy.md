<div class="markdown prose max-w-none mb-8" id="description"><p><img title="weekly coding challenge" src="https://i.imgur.com/ta6gv1i.png?1"> x 3</p>
<p><em>I bet you won't ever catch a Lift (a.k.a. elevator) again without thinking of this Kata !</em></p>
<hr>

<h1 id="synopsis">Synopsis</h1>
<p>A multi-floor building has a Lift in it.</p>
<p>People are queued on different floors waiting for the Lift.</p>
<p>Some people want to go up. Some people want to go down. </p>
<p>The floor they want to go to is represented by a number (i.e. when they enter the Lift this is the button they will press)</p>
<pre><code>BEFORE (people waiting in queues)               AFTER (people at their destinations)
                   +--+                                          +--+ 
  /----------------|  |----------------\        /----------------|  |----------------\
10|                |  | 1,4,3,2        |      10|             10 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 9|                |  | 1,10,2         |       9|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 8|                |  |                |       8|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 7|                |  | 3,6,4,5,6      |       7|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 6|                |  |                |       6|          6,6,6 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 5|                |  |                |       5|            5,5 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 4|                |  | 0,0,0          |       4|          4,4,4 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 3|                |  |                |       3|            3,3 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 2|                |  | 4              |       2|          2,2,2 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 1|                |  | 6,5,2          |       1|            1,1 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 G|                |  |                |       G|          0,0,0 |  |                |
  |====================================|        |====================================|
</code></pre>
<hr>

<h1 id="rules">Rules</h1>
<h4 id="lift-rules">Lift Rules</h4>
<ul>
<li>The Lift only goes up or down!</li>
<li>Each floor has both UP and DOWN Lift-call buttons (except top and ground floors which have only DOWN and UP respectively)</li>
<li>The Lift never changes direction until there are no more people wanting to get on/off in the direction it is already travelling</li>
<li>When empty the Lift tries to be smart. For example,<ul>
<li>If it was going up then it will continue up to collect the highest floor person wanting to go down</li>
<li>If it was going down then it will continue down to collect the lowest floor person wanting to go up</li>
</ul>
</li>
<li>The Lift has a maximum capacity of people </li>
<li>When called, the Lift will stop at a floor <strong>even if it is full</strong>, although unless somebody gets off nobody else can get on!</li>
<li>If the lift is empty, and no people are waiting, then it will return to the ground floor</li>
</ul>
<h4 id="people-rules">People Rules</h4>
<ul>
<li>People are in <strong>"queues"</strong> that represent their order of arrival to wait for the Lift</li>
<li>All people can press the UP/DOWN Lift-call buttons</li>
<li>Only people going the <strong>same direction</strong> as the Lift may enter it</li>
<li>Entry is according to the <strong>"queue" order</strong>, but those unable to enter do not block those behind them that can</li>
<li>If a person is unable to enter a full Lift, they will press the UP/DOWN Lift-call button again after it has departed without them</li>
</ul>
<hr> 

<h1 id="kata-task">Kata Task</h1>
<ul>
<li>Get all the people to the floors they want to go to while obeying the <strong>Lift rules</strong> and the <strong>People rules</strong></li>
<li>Return a list of all floors that the Lift stopped at (in the order visited!)</li>
</ul>
<p>NOTE: The Lift always starts on the ground floor (and people waiting on the ground floor may enter immediately)</p>
<hr>

<h1 id="io">I/O</h1>
<h4 id="input">Input</h4>
<ul>
<li><code>queues</code> a list of queues of people for all floors of the building. <ul>
<li>The height of the building varies</li>
<li>0 = the ground floor</li>
<li>Not all floors have queues</li>
<li>Queue index [0] is the "head" of the queue</li>
<li>Numbers indicate which floor the person wants go to</li>
</ul>
</li>
<li><code>capacity</code> maximum number of people allowed in the lift</li>
</ul>
<p><em>Parameter validation</em> - All input parameters can be assumed OK. No need to check for things like:</p>
<ul>
<li>People wanting to go to floors that do not exist</li>
<li>People wanting to take the Lift to the floor they are already on</li>
<li>Buildings with &lt; 2 floors</li>
<li>Basements</li>
</ul>
<h4 id="output">Output</h4>
<ul>
<li>A list of all floors that the Lift stopped at (in the order visited!)</li>
</ul>
<hr>

<h1 id="example">Example</h1>
<p>Refer to the example test cases.</p>
<hr>

<h1 id="language-notes">Language Notes</h1>
<ul>
<li>Python : The object will be initialized for you in the tests</li>
</ul>
<hr>
<span style="color:red">
Good Luck -

<p>DM</p>
</span>





</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p><img title="щотижневий челендж із програмування" src="https://i.imgur.com/ta6gv1i.png?1"> x 3</p>
<p><em>Б’юсь об заклад, що відтепер, користуючись ліфтом, ви щоразу згадуватимете цю задачу (ката)!</em></p>
<hr>

<h1 id="synopsis">Опис</h1>
<p>У багатоповерховій будівлі є ліфт.</p>
<p>На різних поверхах у чергах стоять люди, які чекають на ліфт.</p>
<p>Дехто хоче піднятися вгору, а дехто — спуститися вниз.</p>
<p>Поверх, на який вони хочуть потрапити, позначається числом (тобто, зайшовши в ліфт, вони натиснуть кнопку з цим номером).</p>
<pre><code>ДО (люди чекають у чергах)                     ПІСЛЯ (люди дісталися пунктів призначення)
+--+                                          +--+
/----------------| |----------------\        /----------------| |----------------\
10| | | 1,4,3,2        | 10| 10 | | | 
|----------------| |----------------| |----------------| |----------------| 
9| | | 1,10,2         | 9| | | | 
|----------------| |----------------| |----------------| |----------------| 
8| | | | 8| | | | 
|----------------| |----------------| |----------------| |----------------| 
7| | | 3,6,4,5,6      | 7| | | | 
|----------------| |----------------| |----------------| |----------------| 
6| | | | 6| 6,6,6 | | | 
|----------------| |----------------| |----------------| |----------------| 
5| | | | 5| 5,5 | | | 
|----------------| |----------------| |----------------| |----------------| 
4| | | 0,0,0          | 4| 4,4,4 | | | 
|----------------| |----------------| |----------------| |----------------| 
3| | | | 3| 3,3 | | | 
|----------------| |----------------| |----------------| |----------------| 
2| | | 4              | 2| 2,2,2 | | | 
|----------------| |----------------| |----------------| |----------------| 
1| | | 6,5,2          | 1| 1,1 | | | 
|----------------| |----------------| |----------------| |----------------| 
G| | | | G| 0,0,0 | | | 
|====================================| |====================================|
</code></pre>
<hr>

<h1 id="rules">Правила</h1>
<h4 id="lift-rules">Правила роботи ліфта</h4>
<ul>
<li>Ліфт рухається лише вгору або вниз!</li>
<li>На кожному поверсі є кнопки виклику ліфта «ВГОРУ» та «ВНИЗ» (за винятком верхнього та першого поверхів, де є лише кнопки «ВНИЗ» та «ВГОРУ» відповідно).</li>
<li>Ліфт не змінює напрямок руху, доки залишаються люди, яким потрібно сісти або вийти в тому напрямку, в якому він уже рухається.</li>
<li>Коли ліфт порожній, він діє «розумно».</li>
</ul> Наприклад:<ul>
<li>Якщо ліфт рухався вгору, він продовжить підніматися, щоб забрати людину на найвищому поверсі, яка хоче спуститися вниз.</li>
<li>Якщо ліфт рухався вниз, він продовжить опускатися, щоб забрати людину на найнижчому поверсі, яка хоче піднятися вгору.</li>
</ul>
</li>
<li>Ліфт має обмежену місткість (максимальну кількість людей, яких він може вмістити).</li>
<li>Коли ліфт викликають, він зупиняється на поверсі, <strong>навіть якщо він уже повний</strong>; однак, доки хтось не вийде, ніхто інший увійти не зможе!</li>
<li>Якщо ліфт порожній і ніхто його не чекає, він повертається на перший (нульовий) поверх.</li>
</ul>
<h4 id="people-rules">Правила для людей</h4>
<ul>
<li>Люди стоять у <strong>«чергах»</strong>, що відповідають порядку їхнього прибуття в очікуванні ліфта.</li>
<li>Будь-яка людина може натиснути кнопку виклику ліфта (ВГОРУ або ВНИЗ).</li>
<li>У ліфт можуть увійти лише ті люди, яким потрібно рухатися в <strong>тому ж напрямку</strong>, що й ліфт.</li>
<li>Посадка здійснюється відповідно до <strong>черговості</strong>, але ті, хто не може увійти (наприклад, через брак місця), не перегороджують шлях тим, хто стоїть за ними і може увійти.</li>
<li>Якщо людина не може потрапити в переповнений ліфт, вона натискає кнопку виклику (ВГОРУ або ВНИЗ) знову після того, як ліфт поїде без неї.</li>
</ul>
<hr>

<h1 id="kata-task">Завдання (Kata)</h1>
<ul>
<li>Доставте всіх людей на потрібні їм поверхи, дотримуючись <strong>правил для ліфта</strong> та <strong>правил для людей</strong>.</li>
<li>Поверніть список усіх поверхів, на яких зупинявся ліфт (у порядку відвідування!).</li>
</ul>
<p>ПРИМІТКА: Ліфт завжди починає рух із першого (нульового) поверху (люди, які чекають на цьому поверсі, можуть увійти одразу).</p>
<hr>

<h1 id="io">Вхідні та вихідні дані</h1>
<h4 id="input">Вхідні дані</h4>
<ul>
<li><code>queues</code> — список черг людей для кожного поверху будівлі. <ul>
<li>Висота будівлі (кількість поверхів) може бути різною.</li>
<li>0 — це перший (нульовий) поверх.</li>
<li>Не на всіх поверхах є люди, що чекають.</li>
</ul>
</li>
</ul>
<li>Елемент з індексом `[0]` — це «голова» черги</li>
<li>Числа вказують, на який поверх хоче потрапити людина</li>
</ul>
</li>
<li>`capacity` — максимальна кількість людей, які можуть перебувати в ліфті</li>
</ul>
<p><em>Перевірка параметрів</em> — можна вважати, що всі вхідні параметри коректні. Не потрібно перевіряти такі випадки, як:</p>
<ul>
<li>Бажання людей потрапити на поверхи, яких не існує</li>
<li>Бажання людей скористатися ліфтом, щоб дістатися на поверх, на якому вони вже знаходяться</li>
<li>Будівлі, що мають менше 2 поверхів</li>
<li>Підвальні приміщення</li>
</ul>
<h4 id="output">Результат</h4>
<ul>
<li>Список усіх поверхів, на яких зупинявся ліфт (у порядку відвідування!)</li>
</ul>
<hr>

<h1 id="example">Приклад</h1>
<p>Дивіться приклади тестових випадків.</p>
<hr>

<h1 id="language-notes">Примітки щодо мови програмування</h1>
<ul>
<li>Python: об'єкт буде ініціалізовано автоматично в тестах</li>
</ul>
<hr>
<span style="color:red">
Успіхів! —

<p>DM</p>
</span>





</div>

Як це працює: ліфт рухається проходами. Спочатку вгору від 0 до верхнього поверху, потім вниз, і так по колу, доки є люди в черзі або в кабіні. На кожному поверсі:

    Пасажири з потрібним поверхом виходять.
    Ліфт зупиняється, якщо хтось чекає на нього в напрямку руху, навіть коли кабіна повна.
    Люди заходять за чергою, поки є місце. Хто не поміщається, лишається в черзі й не блокує тих, хто стоїть за ним.

Порожній ліфт сам їде до найвищого поверху з «вниз» або найнижчого з «вгору», бо проходи нічого не зупиняють на порожніх поверхах. Підряд однакові зупинки склеюються. У кінці додається повернення на 0.

Я перевірив ще випадок із повним ліфтом: 6 людей з 2-го на 5-й поверх при capacity = 2 дають [0,2,5,2,5,2,5,0], що відповідає правилам.

У The Lift - 3 kuy.test.js використано assert.strictEqual для масивів. Він порівнює за посиланням, тому ці тести падатимуть для будь-якого коректного рішення. Замініть на assert.deepStrictEqual.
The lift 3 kuy
JS
