<div class="markdown prose max-w-none mb-8" id="description"><p>Write a regexp to validate a key-value string in the format:</p>
<pre><code>name:xxx,age:111,skill:xxx
</code></pre>
<h3 id="rules">Rules</h3>
<ol>
<li><p><em>name/age/skill</em> may be in any order, example:</p>
<pre><code class="language-javascript"><span class="cm-string">'name:xxx,age:111,skill:xxx'</span>
<span class="cm-string">'skill:xxx,name:xxx,age:111'</span>
<span class="cm-string">'name:xxx,skill:xxx,age:111'</span>
</code></pre>
</li>
<li><p><em>name/skill</em> have to be made up of letters (<code>[A-Za-z]+</code>)</p>
</li>
<li><p><em>age</em> has to be a number (<code>0</code> is valid) (<code>[0-9]+</code>)</p>
</li>
<li><p>there can be no leading or trailing commas <code>,</code></p>
</li>
<li><p><em>name/age/skill</em> must be present exactly once each</p>
</li>
</ol>
<p><strong>Have fun :)</strong></p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишите регулярное выражение для проверки строки ключ-значение в формате:</p>
<pre><code>name:xxx,age:111,skill:xxx
</code></pre>
<h3 id="rules">Правила</h3>
<ol>
<li><p><em>Имя/возраст/навык</em> могут быть в любом порядке, например:</p>
<pre><code class="language-javascript"><span class="cm-string">'name:xxx,age:111,skill:xxx'</span>
<span class="cm-string">'skill:xxx,name:xxx,age:111'</span>
<span> class="cm-string">'name:xxx,skill:xxx,age:111'</span>
</code></pre>
</li>
<li><p><em>Имя/навык</em> должны состоять из букв (<code>[A-Za-z]+</code>)</p>
</li>
<li><p><em>Возраст</em> должен быть числом (<code>0</code> допустимо) (<code>[0-9]+</code>)</p>
</li>
<li><p>Не должно быть начальных или конечных запятых <code>,</code></p>
</li>
<li><p><em>Имя/возраст/навык</em> должны присутствовать ровно один раз каждое</p>
</li>
</ol>
<p><strong>Веселитесь :)</strong></p>
</div>

### Опис регулярного виразу

**Регулярний вираз**
```
^(?=.*\bname:[A-Za-z]+\b)(?=.*\bage:\d+\b)(?=.*\bskill:[A-Za-z]+\b)(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)(?:,(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)){2}$
```

#### Загальна ідея
- **Якорі `^` і `$`** гарантують, що рядок повністю відповідає шаблону (немає зайвих символів до або після).
- Три **позитивні lookahead** `(?=.*\bname:...)(?=.*\bage:...)(?=.*\bskill:...)` перевіряють наявність **кожного з ключів** `name`, `age`, `skill` десь у рядку (в будь‑якому порядку) без споживання символів.
- Після lookahead йде основна частина, яка перевіряє **формат і кількість полів** (саме три поля, розділені комами, без ведучих/кінцевих ком).

#### Розбір частин
- `(?=.*\bname:[A-Za-z]+\b)` — переконується, що є підрядок `name:` і після нього **одне або більше букв** (латиниця). `\b` забезпечує межу слова, щоб не зловити частини інших слів.
- `(?=.*\bage:\d+\b)` — переконується, що є `age:` і після нього **одна або більше цифр** (включно з `0`).
- `(?=.*\bskill:[A-Za-z]+\b)` — як для `name`, але для `skill`.
- `(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)` — одиночне поле: або `name:букви`, або `age:цифри`, або `skill:букви`.
- `(?:,(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)){2}` — ще **дві** такі ж частини, кожна починається з коми, отже загалом **три поля**, розділені **двома** комами.

#### Чому це відповідає правилам задачі
- **Будь‑який порядок** полів забезпечується поєднанням lookahead (перевірка наявності кожного ключа) і основного шаблону, який дозволяє будь‑яку послідовність з трьох допустимих полів.
- **Кожне поле присутнє рівно один раз**: lookahead вимагає наявності кожного ключа, а основна частина дозволяє тільки три поля загалом — отже повторення одного ключа замість іншого призведе до невідповідності.
- **Значення для name/skill** обмежені буквами `[A-Za-z]+`, для **age** — цифрами `\d+`.
- **Немає ведучих або кінцевих ком** — через початковий/кінцевий якорі і структуру `поле(,поле){2}`.

#### Обмеження та зауваження
- Регекс допускає тільки латинські літери для `name` і `skill`; якщо потрібні інші алфавіти або дефіси/пробіли — шаблон треба розширити.
- Lookahead шукає підрядки у всьому рядку, тому якщо значення містять підрядки, що випадково містять `name:` то це може вплинути; у типовому випадку це не проблема.