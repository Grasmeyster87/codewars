<div class="markdown prose max-w-none mb-8" id="description"><p>An angry wizard cast a spell on your friend. Your buddeh can now only speak in gibberish. However, after tracking down the wizard, you've found his translation scroll below.</p>
<hr>
<h3 id="there-are-four-conditions"><span style="color:red">There are four conditions</span>:</h3>
<ul>
<li><ol>
<li>You must not repeat the same key consecutively if there are more than one(the order of keys in the scroll is important!).</li>
</ol>
<ul>
<li>Ex: <code>to_leet('aaaa') # =&gt; '4@4@'</code></li>
</ul>
</li>
<li><ol start="2">
<li>The input will consist only of lowercase alphabetical characters(a-z) and single spaces.</li>
</ol>
<ul>
<li>Ex: <code>to_leet('a a a a a a a') # =&gt; '4 @ 4 @ 4 @ 4'</code></li>
</ul>
</li>
<li><ol start="3">
<li>If a key does not exist for a character, keep the character as is(<em>'m' is one such character without a key</em>)</li>
</ol>
<ul>
<li>Ex: <code>to_leet('mama') # =&gt; 'm4m@'</code></li>
</ul>
</li>
<li><ol start="4">
<li>The strings must represent the key(s) on the scroll, meaning that certain characters might have to be escaped.</li>
</ol>
</li>
</ul>
<hr>
<h3 id="the-scroll">The Scroll</h3>
<pre><code>  a = ['4', '@']
  b = ['|3', '8']
  d = ['|)', 'o|']
  e = ['3']
  f = ['|=']
  g = ['9', '6']
  h = ['|-|', ']-[', '}-{', '(-)', ')-(', '#']
  i = ['1', '!', '][']
  j = ['_|']
  k = ['|&lt;', '|{']
  l = ['|_']
  n = ['|\|']
  o = ['0']
  p = ['|2', '|D']
  q = ['(,)']
  r = ['|Z', '|?']
  s = ['5', '$']
  t = ['+', '7']
  v = ['|/', '\/']
  w = ['\^/', '//']
  x = ['&gt;&lt;', '}{']
  y = ['`/']
  z = ['(\)']
</code></pre>

</div>


<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Розлючений чарівник наклав закляття на вашого друга. Тепер ваш товариш говорить лише незрозумілою абракадаброю. Однак, розшукавши чарівника, ви знайшли його сувій із правилами перекладу (наведено нижче).</p>
<hr>
<h3 id="there-are-four-conditions"><span style="color:red">Є чотири умови</span>:</h3>
<ul>
<li><ol>
<li>Не можна повторювати той самий символ заміни (ключ) поспіль, якщо їх передбачено більше одного (порядок символів у сувої важливий!).</li>
</ol>
<ul>
<li>Приклад: <code>to_leet('aaaa') # =&gt; '4@4@'</code></li>
</ul>
</li>
<li><ol start="2">
<li>Вхідний рядок складатиметься лише з малих літер (a-z) та одинарних пробілів.</li>
</ol>
<ul>
<li>Приклад: <code>to_leet('a a a a a a a') # =&gt; '4 @ 4 @ 4 @ 4'</code></li>
</ul>
</li>
<li><ol start="3">
<li>Якщо для символу немає відповідного ключа, залиште символ без змін (<em>наприклад, для літери «m» ключа не передбачено</em>).</li>
</ol>
<ul>
<li>Приклад: <code>to_leet('mama') # =&gt; 'm4m@'</code></li>
</ul>
</li>
<li><ol start="4">
<li>Рядки повинні відповідати ключу (або ключам) у «сувої»; це означає, що деякі символи, можливо, доведеться екранувати.</li>
</ol>
</li>
</ul>
<hr>
<h3 id="the-scroll">Сувій</h3>
<pre><code>  a = ['4', '@']
b = ['|3', '8']
d = ['|)', 'o|']
e = ['3']
f = ['|=']
g = ['9', '6']
h = ['|-|', ']-[', '}-{', '(-)', ')-(', '#']
i = ['1', '!', '][']
j = ['_|']
k = ['|&lt;', '|{']
l = ['|_']
n = ['|\|']
o = ['0']
p = ['|2', '|D']
q = ['(,)']
r = ['|Z', '|?']
s = ['5', '$']
t = ['+', '7']
v = ['|/', '\/']
w = ['\^/', '//']
x = ['&gt;&lt;', '}{']
y = ['`/']
z = ['(\)']
</code></pre>

</div>

Розберемо по рядках, на прикладі toLeet('aaaa').

const keys = SCROLL[ch];
Для поточного символу ch беремо з таблиці масив його замін. Для 'a' це ['4', '@']. Для символу, якого в таблиці немає ('m', пробіл), SCROLL[ch] дає undefined.

if (!keys) { result += ch; continue; }
Це умова №3 із завдання. Якщо замін немає (keys це undefined, тобто «хибне» значення), символ додаємо до результату як є, а continue одразу переходить до наступного символу циклу. Решта коду для нього не виконується.

const n = counters[ch] || 0;
counters це лічильник: скільки разів ми вже зустріли конкретну літеру. Зберігається окремо для кожної літери: {a: 2, h: 1, ...}. Коли літеру бачимо вперше, counters[ch] дорівнює undefined, і || 0 підставляє 0.

result += keys[n % keys.length];
Вибираємо, яку саме заміну взяти. Оператор % (залишок від ділення) дає циклічний перебіг по масиву:

зустріч a	n	n % 2	результат
1-ша	0	0	4
2-га	1	1	@
3-тя	2	0	4
4-та	3	1	@

Звідси 'aaaa' → '4@4@'. Для e, де є лише одна заміна (keys.length = 1), n % 1 завжди 0, тож завжди '3'.

counters[ch] = n + 1;
Збільшуємо лічильник цієї літери, щоб наступного разу взяти наступну заміну.

Чому лічильник спільний для всього рядка, а не для кожного слова? Подивіться на тест 'no no no no no': там n завжди дає '|\\|', бо в неї одна заміна, тому це не видно. А ось у 'what is this' літера h зустрічається двічі, і перша дає |-|, а друга ]-[. Лічильник не скидається на пробілах, тому ротація йде крізь увесь рядок, і саме це очікують тести.