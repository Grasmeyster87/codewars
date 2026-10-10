<div class="markdown prose max-w-none mb-8" id="description"><p>Inspired from real-world <a href="http://en.wikipedia.org/wiki/Brainfuck" data-turbolinks="false" target="_blank">Brainf**k</a>, we want to create an interpreter of that language which will support the following instructions:</p>
<ul>
<li><code>&gt;</code> increment the data pointer (to point to the next cell to the right).</li>
<li><code>&lt;</code> decrement the data pointer (to point to the next cell to the left).</li>
<li><code>+</code> increment (increase by one, truncate overflow: 255 + 1 = 0) the byte at the data pointer.</li>
<li><code>-</code> decrement (decrease by one, treat as unsigned byte: 0 - 1 = 255 ) the byte at the data pointer.</li>
<li><code>.</code> output the byte at the data pointer.</li>
<li><code>,</code> accept one byte of input, storing its value in the byte at the data pointer.</li>
<li><code>[</code> if the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching <code>]</code> command.</li>
<li><code>]</code> if the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching <code>[</code> command.</li>
</ul>
<p>The function will take in input...</p>
<ul>
<li>the program code, a string with the sequence of machine instructions,</li>
<li>the program input, a string, possibly empty, that will be interpreted as an array of bytes using each character's ASCII code and will be consumed by the <code>,</code> instruction</li>
</ul>
<p>... and will return ...</p>
<ul>
<li>the output of the interpreted code (always as a string), produced by the <code>.</code> instruction.</li>
</ul>
<p>Implementation-specific details for this Kata:</p>
<ul>
<li>Your memory tape should be large enough - the original implementation had 30,000 cells but a few thousand should suffice for this Kata</li>
<li>Each cell should hold an unsigned byte with wrapping behavior (i.e. 255 + 1 = 0, 0 - 1 = 255), initialized to 0</li>
<li>The memory pointer should initially point to a cell in the tape with a sufficient number (e.g. a few thousand or more) of cells to its right. For convenience, you may want to have it point to the leftmost cell initially</li>
<li>You may assume that the <code>,</code> command will never be invoked when the input stream is exhausted</li>
<li>Error-handling, e.g. unmatched square brackets and/or memory pointer going past the leftmost cell is not required in this Kata. If you see test cases that require you to perform error-handling then please open an Issue in the Discourse for this Kata (don't forget to state which programming language you are attempting this Kata in).</li>
</ul>
</div>

<br> <hr> <br>


<div class="markdown prose max-w-none mb-8" id="description"><p>Вдохновившись реальным языком <a href="http://en.wikipedia.org/wiki/Brainfuck" data-turbolinks="false" target="_blank">Brainf**k</a>, мы хотим создать интерпретатор этого языка, поддерживающий следующие команды:</p>
<ul>
<li><code>&gt;</code> увеличить указатель данных (переместить его на следующую ячейку справа).</li>
<li><code>&lt;</code> уменьшить указатель данных (переместить его на следующую ячейку слева).</li>
<li><code>+</code> увеличить (на единицу; при переполнении значение сбрасывается: 255 + 1 = 0) байт, на который указывает указатель данных.</li>
<li><code>-</code> уменьшить (на единицу; рассматривается как байт без знака: 0 - 1 = 255) байт, на который указывает указатель данных.</li>
<li><code>.</code> вывести байт, на который указывает указатель данных.</li>
<li><code>,</code> считать один байт входных данных и сохранить его значение в ячейке, на которую указывает указатель данных.</li>
<li><code>[</code> если байт, на который указывает указатель данных, равен нулю, то вместо перехода к следующей команде переместить указатель команд вперед — к команде, следующей за соответствующей командой <code>]</code>.</li>
<li><code>]</code> если байт, на который указывает указатель данных, не равен нулю, то вместо перехода к следующей команде переместить указатель команд назад — к команде, следующей за соответствующей командой <code>[</code>.</li>
</ul>
<p>Функция будет принимать на вход...</p>
<ul>
<li>код программы — строку, содержащую последовательность машинных команд,</li>
<li>входные данные программы — строку (возможно, пустую), которая будет интерпретироваться как массив байтов (на основе ASCII-кодов символов) и считываться командой <code>,</code></li>
</ul>
<p>... и возвращать ...</p>
<ul>
<li>результат выполнения кода (всегда в виде строки), полученный с помощью команды <code>.</code> инструкция.</li>
</ul>
<p>Особенности реализации для этой задачи (ката):</p>
<ul>
<li>Лента памяти должна быть достаточно большой: в оригинальной реализации было 30 000 ячеек, но для этой задачи должно хватить и нескольких тысяч.</li>
<li>Каждая ячейка должна хранить беззнаковый байт с циклическим изменением значений (т. е. 255 + 1 = 0, 0 - 1 = 255) и быть инициализирована нулем.</li>
<li>Указатель памяти изначально должен указывать на ячейку ленты, справа от которой находится достаточное количество ячеек (например, несколько тысяч или более). Для удобства можно установить его на самую левую ячейку.</li>
<li>Можно исходить из того, что команда <code>,</code> никогда не будет вызвана, если входной поток исчерпан.</li>
<li>Обработка ошибок (например, при несоответствии квадратных скобок или выходе указателя памяти за пределы самой левой ячейки) в этой задаче не требуется. Если вы встретите тесты, требующие обработки ошибок, пожалуйста, создайте тикет (Issue) в разделе обсуждения (Discourse) для этой задачи (не забудьте указать язык программирования, который вы используете).</li>
</ul>
</div>

Опис по блоках

Попередній пошук пар дужок

jump — масив, де для кожної дужки зберігається індекс її пари. Він потрібен, щоб стрибок по [/] займав O(1), а не шукав дужку щоразу.
stack — стек відкритих [. На [ індекс кладемо в стек, на ] дістаємо останню відкриту дужку, бо вона і є парною (так працює й вкладеність).
jump[open] = i; jump[i] = open; — записуємо пару в обидва боки.

Стан інтерпретатора

tape = new Uint8Array(30000) — стрічка з 30 000 комірок, усі нулі. Це беззнаковий байт, тому 255 + 1 = 0 і 0 - 1 = 255 відбуваються автоматично, без ручного % 256.
ptr — вказівник даних, починає з крайньої лівої комірки.
inPtr — позиція в рядку input, звідки , бере наступний байт.
output — рядок результату.

Головний цикл (ip — вказівник на поточну команду)

> і < зсувають ptr.
+ і - змінюють поточну комірку.
. додає до output символ із кодом поточної комірки.
, записує в комірку код наступного вхідного символу (charCodeAt) і зсуває inPtr.
[: якщо комірка дорівнює 0, ip стає індексом парної ]. Потім ip++ у циклі переносить нас на команду після неї, як і вимагає умова.
]: якщо комірка не нуль, ip стає індексом парної [. Далі ip++ дає команду після [.
Перевірка тестів
,+[-.,+] з 'Codewars'+char(255). Читаємо байт і додаємо 1, у циклі віднімаємо 1, виводимо, читаємо наступний і додаємо 1. Для байта 255 після + отримуємо 0, цикл завершується. Результат: 'Codewars' ✓
,[.[-],] з 'Codewars'+char(0). Читаємо, виводимо, обнуляємо комірку через [-], читаємо далі. Байт 0 зупиняє цикл. Результат: 'Codewars' ✓
,>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>. з байтами 8 і 9. Програма множить числа: 8 × 9 = 72, тобто символ 'H' ✓
Проблема в тестовому файлі

