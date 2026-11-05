<div class="markdown prose max-w-none mb-8" id="description"><p>This is the code golf version of coding 3min series. If you are stuck, please complete the <a href="http://www.codewars.com/kata/56fe9a0c11086cd842000008" data-turbolinks="false" target="_blank">simple version</a></p>
<h2 id="code-limit">Code limit:</h2>
<p>At most <code>120</code> characters (counted as in a JavaScript string, i.e. in terms of UTF-16 code-units).</p>
<h2 id="task">Task:</h2>
<p>Every uppercase letter is a father, the corresponding lowercase letters are its sons.</p>
<p>Given a string:</p>
<ul>
<li>if father and son both exist, keep them both</li>
<li>if one exists but not the other, delete them</li>
<li>one father can have multiple sons. keep it if it has at least one.</li>
<li>one son can have multiple fathers. keep it if it has at least one.</li>
<li>return the filtered string.</li>
</ul>
<h2 id="examples-input----output">Examples (input --&gt; output)</h2>
<pre><code class="language-java"><span class="cm-string">"Aab"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"Aa"</span>
<span class="cm-string">"AabBc"</span> <span class="cm-operator">--&gt;</span>  <span class="cm-string">"AabB"</span>
<span class="cm-string">"AaaaAaab"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"AaaaAaa"</span>
<span class="cm-string">"aAAAaAAb"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"aAAAaAA"</span>
</code></pre>
<h2 id="series">Series</h2>
<ul>
<li><a href="http://www.codewars.com/kata/56f8a648ba792a778a0000b9" data-turbolinks="false" target="_blank">Bug in Apple</a></li>
<li><a href="http://www.codewars.com/kata/56f928b19982cc7a14000c9d" data-turbolinks="false" target="_blank">Father and Son</a></li>
<li><a href="http://www.codewars.com/kata/570bbf7b6731d44b36001fde" data-turbolinks="false" target="_blank">Jumping Dutch act</a></li>
<li><a href="http://www.codewars.com/kata/570f45fab29c705d330004e3" data-turbolinks="false" target="_blank">Planting Trees</a></li>
<li><a href="http://www.codewars.com/kata/570c560c15944a98e9000fd2" data-turbolinks="false" target="_blank">Reading a Book</a></li>
<li><a href="http://www.codewars.com/kata/570db6dade4dc8966600051c" data-turbolinks="false" target="_blank">Eat watermelon</a></li>
<li><a href="http://www.codewars.com/kata/570dff30e6e9284ba3000a8f" data-turbolinks="false" target="_blank">Special factor</a></li>
<li><a href="http://www.codewars.com/kata/57049a1946edc26dbc00074a" data-turbolinks="false" target="_blank">Symmetric Sort</a></li>
<li><a href="http://www.codewars.com/kata/5705b59f5eef1f04f1000f84" data-turbolinks="false" target="_blank">Are they symmetrical?</a></li>
<li><a href="http://www.codewars.com/kata/570e6d8576f0cde131000129" data-turbolinks="false" target="_blank">Guess the Hat</a></li>
<li><a href="http://www.codewars.com/kata/570e8d5693214b0095001b08" data-turbolinks="false" target="_blank">Find the murderer</a></li>
<li><a href="http://www.codewars.com/kata/56fa24b10ba33be7d4000315" data-turbolinks="false" target="_blank">Give me the equation</a> </li>
<li><a href="http://www.codewars.com/kata/5700c79dc155575b31000265" data-turbolinks="false" target="_blank">Balance Attraction</a></li>
<li><a href="http://www.codewars.com/kata/57075f6d4f2c293f0c0014be" data-turbolinks="false" target="_blank">Max Value</a></li>
<li><a href="http://www.codewars.com/kata/5707c6e74f2c29a750001f8b" data-turbolinks="false" target="_blank">Regular expression compression</a></li>
<li><a href="http://www.codewars.com/kata/57109bf197b4b3853a000274" data-turbolinks="false" target="_blank">Remove screws I</a></li>
<li><a href="http://www.codewars.com/kata/57104927d860a31eab000b5d" data-turbolinks="false" target="_blank">Remove screws II</a></li>
<li><a href="http://www.codewars.com/kata/56fc7a29fca8b900eb001fac" data-turbolinks="false" target="_blank">Collatz Array(Split or merge)</a></li>
<li><a href="http://www.codewars.com/kata/56fe107569510b1b1b0002a5" data-turbolinks="false" target="_blank">Trypophobia</a></li>
<li><a href="http://www.codewars.com/kata/56ffd817140fcc0c3900099b" data-turbolinks="false" target="_blank">Virus in Apple</a></li>
<li><a href="http://www.codewars.com/kata/5705da6ccb7293991300055f" data-turbolinks="false" target="_blank">Waiting for a Bus</a></li>
<li><a href="http://www.codewars.com/kata/57035af2d80ec6cdb40008ed" data-turbolinks="false" target="_blank">Tidy up the room</a></li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Это версия задачи из серии «Coding 3min» в формате «code golf» (написание кода минимального объема). Если возникли трудности, попробуйте сначала решить <a href="http://www.codewars.com/kata/56fe9a0c11086cd842000008" data-turbolinks="false" target="_blank">более простую версию</a>.</p>
<h2 id="code-limit">Ограничение на размер кода:</h2>
<p>Максимум <code>120</code> символов (подсчет ведется так же, как для строк в JavaScript, то есть в единицах кодировки UTF-16).</p>
<h2 id="task">Задача:</h2>
<p>Каждая заглавная буква — это «отец», а соответствующие ей строчные буквы — его «сыновья».</p>
<p>Дана строка:</p>
<ul>
<li>если присутствуют и отец, и сын, оставляем обоих;</li>
<li>если присутствует кто-то один (либо отец, либо сын), удаляем их;</li>
<li>у одного отца может быть несколько сыновей — оставляем отца, если у него есть хотя бы один сын;</li>
<li>у одного сына может быть несколько отцов.</li>
</ul> оставьте его, если в нем есть хотя бы один такой символ.</li>
<li>верните отфильтрованную строку.</li>
</ul>
<h2 id="examples-input----output">Примеры (входные данные --&gt; результат)</h2>
<pre><code class="language-java"><span class="cm-string">"Aab"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"Aa"</span>
<span class="cm-string">"AabBc"</span> <span class="cm-operator">--&gt;</span>  <span class="cm-string">"AabB"</span>
<span class="cm-string">"AaaaAaab"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"AaaaAaa"</span>
<span class="cm-string">"aAAAaAAb"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"aAAAaAA"</span>
</code></pre>
<h2 id="series">Серия задач</h2>
<ul>
<li><a href="http://www.codewars.com/kata/56f8a648ba792a778a0000b9" data-turbolinks="false" target="_blank">Bug in Apple</a></li>
<li><a href="http://www.codewars.com/kata/56f928b19982cc7a14000c9d" data-turbolinks="false" target="_blank">Father and Son</a></li>
<li><a href="http://www.codewars.com/kata/570bbf7b6731d44b36001fde" data-turbolinks="false" target="_blank">Jumping Dutch act</a></li>
<li><a href="http://www.codewars.com/kata/570f45fab29c705d330004e3" data-turbolinks="false" target="_blank">Посадка деревьев</a></li>
<li><a href="http://www.codewars.com/kata/570c560c15944a98e9000fd2" data-turbolinks="false" target="_blank">Чтение книги</a></li>
<li><a href="http://www.codewars.com/kata/570db6dade4dc8966600051c" data-turbolinks="false" target="_blank">Поедание арбуза</a></li>
<li><a href="http://www.codewars.com/kata/570dff30e6e9284ba3000a8f" data-turbolinks="false" target="_blank">Особый делитель</a></li>
<li><a href="http://www.codewars.com/kata/57049a1946edc26dbc00074a" data-turbolinks="false" target="_blank">Симметричная сортировка</a></li>
<li><a href="http://www.codewars.com/kata/5705b59f5eef1f04f1000f84" data-turbolinks="false" target="_blank">Симметричны ли они?</a></li>
<li><a href="http://www.codewars.com/kata/570e6d8576f0cde131000129" data-turbolinks="false" target="_blank">Угадай шляпу</a></li>
<li><a href="http://www.codewars.com/kata/570e8d5693214b0095001b08" data-turbolinks="false" target="_blank">Найди убийцу</a></li>
<li><a href="http://www.codewars.com/kata/56fa24b10ba33be7d4000315" data-turbolinks="false" target="_blank">Составь уравнение</a> </li>
<li><a href="http://www.codewars.com/kata/5700c79dc155575b31000265" data-turbolinks="false" target="_blank">Баланс притяжения</a></li>
<li><a href="http://www.codewars.com/kata/57075f6d4f2c293f0c0014be" data-turbolinks="false" target="_blank">Максимальное значение</a></li>
<li><a href="http://www.codewars.com/kata/5707c6e74f2c29a750001f8b" data-turbolinks="false" target="_blank">Сжатие регулярных выражений</a></li>
<li><a href="http://www.codewars.com/kata/57109bf197b4b3853a000274" data-turbolinks="false" target="_blank">Удаление винтов I</a></li>
<li><a href="http://www.codewars.com/kata/57104927d860a31eab000b5d" data-turbolinks="false" target="_blank">Удаление винтов II</a></li>
<li><a href="http://www.codewars.com/kata/56fc7a29fca8b900eb001fac" data-turbolinks="false" target="_blank">Массив Коллатца (разделение или объединение)</a></li>
<li><a href="http://www.codewars.com/kata/56fe107569510b1b1b0002a5" data-turbolinks="false" target="_blank">Трипофобия</a></li>
<li><a href="http://www.codewars.com/kata/56ffd817140fcc0c3900099b" data-turbolinks="false" target="_blank">Вирус в Apple</a></li>
<li><a href="http://www.codewars.com/kata/5705da6ccb7293991300055f" data-turbolinks="false" target="_blank">Ожидание автобуса</a></li>
<li><a href="http://www.codewars.com/kata/57035af2d80ec6cdb40008ed" data-turbolinks="false" target="_blank">Приведите комнату в порядок</a></li>
</ul>
</div>

Так, `filter` проходить по кожному символу рядка і для кожного ставить одне питання: «чи є в оригінальному рядку `s` його пара з іншим регістром?». Якщо так, символ лишається, якщо ні, відкидається.

## Розбір виразу по частинах

```js
s.includes( c > 'Z' ? c.toUpperCase() : c.toLowerCase() )
```

Спочатку виконується те, що всередині дужок `includes`, а потім сам `includes`.

**1. Тернарний оператор `c > 'Z' ? A : B`** обирає пару для символу `c`:
- Якщо `c` мала літера (`'a'` має код 97, а `'Z'` лише 90), то умова істинна, і беремо `c.toUpperCase()`, тобто велику пару.
- Якщо `c` велика літера (код 65–90), то умова хибна, і беремо `c.toLowerCase()`, тобто малу пару.

Він повертає не `true` чи `false`, а символ, який треба шукати.

**2. `s.includes(пара)`** перевіряє, чи є цей символ десь у рядку `s`, і повертає `true` або `false`.

**3. `filter`** отримує це `true`/`false` від колбека. Якщо `true`, елемент лишається в масиві, якщо `false`, видаляється.

## Приклад: `"Aab"`

| `c` | `c > 'Z'` | пара | `"Aab".includes(пара)` | результат |
|---|---|---|---|---|
| `A` | `false` | `a` | `true` | лишається |
| `a` | `true` | `A` | `true` | лишається |
| `b` | `true` | `B` | `false` | видаляється |

Після `.join('')` отримуємо `"Aa"`.

## Приклад: `"DONKEYmonkey"`

`D` видаляється, бо малої `d` у рядку немає, а `O`, `N`, `K`, `E`, `Y` лишаються, бо їхні малі пари є. Так само малі `o`, `n`, `k`, `e`, `y` лишаються, а `m` видаляється, бо `M` немає. У підсумку маємо `"ONKEYonkey"`.

## Чому це замінює об'єкт

Ваша ідея з об'єктом `{'A': 1, 'a': 1}` робить те саме, що `includes`: відповідає на питання «чи зустрічається такий символ у рядку». Різниця в тому, що `includes` щоразу сканує рядок заново, а об'єкт дає миттєвий пошук. Для цієї задачі рядки короткі, тому різниці не видно.

Важливо, що перевірка йде по оригінальному рядку `s`, який ми не змінюємо. Тому видалення одних символів не впливає на перевірку інших.

## Те саме розгорнуто

```js
function sc(s) {
    const result = [];
    for (const c of s) {
        const pair = c > 'Z' ? c.toUpperCase() : c.toLowerCase();
        if (s.includes(pair)) {
            result.push(c);
        }
    }
    return result.join('');
}
```

Це еквівалентно однорядковій версії, просто кожен крок виписаний окремо.