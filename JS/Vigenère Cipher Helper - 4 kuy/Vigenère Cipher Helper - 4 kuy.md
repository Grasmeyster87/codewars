<div class="markdown prose max-w-none mb-8" id="description"><p>In this kata, you will implement cipher functions using utf-8 strings.</p>
<p>The <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" data-turbolinks="false" target="_blank">Vigenère cipher</a> is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname <em>"le chiffre indéchiffrable"</em>  (<em>"the unbreakable cipher"</em>)</p>
<blockquote>
<p>The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.</p>
<p>In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift <code>3</code>, <code>A</code> would become <code>D</code>, <code>B</code> would become <code>E</code>, <code>Y</code> would become <code>B</code> and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.</p>
</blockquote>
<p>Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- <strong>this is not the case here.</strong></p>
<p>The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.</p>
<p>Visual representation:</p>
<pre><code class="language-javascript"><span class="cm-string">"my secret code i want to secure"</span>  <span class="cm-comment">// message</span>
<span class="cm-string">"passwordpasswordpasswordpasswor"</span>  <span class="cm-comment">// key</span>
</code></pre>
<p>Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-javascript"><span class="cm-variable">alphabet</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>
<span class="cm-variable">key</span>      <span class="cm-operator">=</span> <span class="cm-string">"password"</span>

<span class="cm-string">"codewars"</span> <span class="cm-operator">--&gt;</span> <span class="cm-variable">encode</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"rovwsoiv"</span>
<span class="cm-string">"laxxhsj"</span> <span class="cm-operator">--&gt;</span> <span class="cm-variable">decode</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"waffles"</span>
</code></pre>

<p><strong>Note</strong>: any character not in the alphabet must be left alone. For example in the above case:</p>
<pre><code class="language-javascript"><span class="cm-string">"CODEWARS"</span>  <span class="cm-operator">--&gt;</span> <span class="cm-variable">encode</span> <span class="cm-operator">--&gt;</span>  <span class="cm-string">"CODEWARS"</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>В этом задании вы реализуете функции шифрования, используя строки в кодировке UTF-8.</p>
<p>Шифр Виженера</a> — это классический шифр, первоначально разработанный итальянским криптографом Джован Баттистой Белласо и опубликованный в 1553 году. Он назван в честь более позднего французского криптографа Блеза де Виженера, который разработал более сильный автоключевой шифр (шифр, который включает в ключ текстовое сообщение). Шифр прост для понимания и применения, но выдержал три столетия попыток взлома, заслужив прозвище «нерушимый шифр» (le chiffre indéchiffrable).
Шифр Виженера — это метод шифрования алфавитного текста с использованием ряда различных шифров Цезаря, основанных на буквах ключевого слова. Это простая форма полиалфавитной замены.
В шифре Цезаря каждая буква алфавита сдвигается на определенное количество позиций; например, в шифре Цезаря со сдвигом <code>3</code>, <code>A</code> станет <code>D</code>, <code>B</code> станет <code>E</code>, <code>Y</code> станет <code>B</code> и так далее. Шифр Виженера состоит из нескольких последовательно повторяющихся шифров Цезаря с различными значениями сдвига.</p>
</blockquote>
<p>Предположим, что ключ повторяется по всей длине текста, символ за символом.</p> Обратите внимание, что в некоторых реализациях ключ повторяется над символами только в том случае, если они являются частью алфавита — <strong>здесь это не так.</strong></p>
<p>Сдвиг получается путем применения сдвига Цезаря к символу с соответствующим индексом ключа в алфавите.</p>
<p>Визуальное представление:</p>
<pre><code class="language-javascript"><span class="cm-string">"мой секретный код, который я хочу защитить"</span> <span class="cm-comment">// сообщение</span>
<span class="cm-string">"passwordpasswordpasswordpasswor"</span> <span class="cm-comment">// ключ</span>
</code></pre>
<p>Напишите класс, который, получив ключ и алфавит, может использоваться для кодирования и декодирования шифра.</p>
<h2 id="examples">Примеры</h2>
<pre><code class="language-javascript"><span class="cm-variable">alphabet</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>
<span class="cm-variable">key</span> <span class="cm-operator">=</span> <span class="cm-string">"password"</span>

<span class="cm-string">"codewars"</span> <span class="cm-operator">--&gt;</span> <span class="cm-variable">encode</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"rovwsoiv"</span>
<span class="cm-string">"laxxhsj"</span> <span class="cm-operator">--&gt;</span> <span class="cm-variable">decode</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"waffles"</span>
</code></pre>

<p><strong>Примечание</strong>: любой символ, не входящий в алфавит, должен оставаться неизменным. Например, в приведенном выше случае:</p>
<pre><code class="language-javascript"><span class="cm-string">"CODEWARS"</span> <span class="cm-operator">--&gt;</span> <span class="cm-variable">encode</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"CODEWARS"</span>
</code></pre>
</div>

Як це працює

    Повторення ключа: Ми використовуємо оператор остачі від ділення % (i % this.key.length), щоб циклічно перебирати символи ключа для кожного індексу вхідного повідомлення.

    Обробка символів:

        Якщо символ повідомлення присутній в алфавіті, ми обчислюємо його нову позицію шляхом зсуву на індекс відповідного символу ключа.

        Математично це виглядає так:

            Кодування: indexnew​=(indexmsg​+indexkey​)(modL)

            Декодування: indexnew​=(indexmsg​−indexkey​+L)(modL)
            (де L — довжина алфавіту).

    Ігнорування невідомих символів: Якщо indexOf повертає -1 (символу немає в заданому алфавіті), ми просто додаємо цей символ до результату в оригінальному вигляді.



Так, ви абсолютно праві. У контексті цього завдання ці два параметри є фундаментом для роботи шифру:

* **`abc` (Алфавіт)**: Це рядок, який визначає послідовність символів та їхні числові значення (індекси). Наприклад, якщо `abc = "abcdef..."`, то `a` має індекс 0, `b` — 1 і так далі.
* **`key` (Ключ)**: Це слово, кожен символ якого вказує, на скільки позицій в алфавіті потрібно зсунути символ повідомлення.

### Як вони взаємодіють у коді

Ось детальніший розбір того, як працює логіка з використанням цих параметрів:

1. **Визначення зсуву**: Для кожного символу повідомлення ми беремо відповідний символ з `key`. Зсув — це порядковий номер (індекс) цього символу в рядку `abc`.
2. **Циклічність ключа**: Оскільки ключ зазвичай коротший за повідомлення, він повторюється. Ми використовуємо залишок від ділення (`i % key.length`), щоб завжди знати, який символ ключа зараз активний.
3. **Робота з алфавітом**:
* Якщо ми шифруємо символ `c`, ми шукаємо його індекс у `abc`.
* Додаємо до нього індекс відповідного символу ключа з `abc`.
* Якщо результат виходить за межі довжини `abc`, ми повертаємося на початок (операція `% abc.length`).


4. **Спеціальна умова**: Якщо символу повідомлення немає в рядку `abc`, він залишається незмінним, але важливо, що ключ все одно продовжує свій цикл для цієї позиції.

---

**Приклад для наочності:**

> **Алфавіт (`abc`)**: `abcdefghijklmnopqrstuvwxyz`
> **Ключ (`key`)**: `password`
> Слово `"codewars"`:
> 1. Перша буква `'c'` має індекс **2**.
> 2. Перша буква ключа `'p'` має індекс **15**.
> 3. Новий індекс: $2 + 15 = 17$. В алфавіті це буква `'r'`.
> 
> 

Чи хочете ви, щоб я пояснив, як реалізувати обробку символів, які не входять до алфавіту (наприклад, пробіли чи цифри), більш детально?

Декодування в шифрі Віженера — це процес, зворотний до шифрування. Якщо при шифруванні ми «додавали» ключ до повідомлення, то при декодуванні ми його «віднімаємо».

Ось детальний покроковий алгоритм того, як працює метод `decode` у наведеному рішенні:

### 1. Математична формула

Для кожного символу використовується формула:


$$Індекс_{оригіналу} = (Індекс_{шифру} - Індекс_{ключа} + L) \pmod{L}$$


Де $L$ — це довжина алфавіту (`abc.length`). Додавання $L$ перед взяттям залишку від ділення потрібне для того, щоб результат не став від’ємним, якщо індекс ключа більший за індекс символу.

### 2. Покроковий процес у коді

1. **Цикл по рядку**: Ми розбиваємо зашифрований рядок на окремі символи за допомогою `.split('')` і проходимо по кожному з них.
2. **Пошук символу в алфавіті**: Перевіряємо, чи є поточний символ у нашому алфавіті `abc`:
* Якщо символу **немає** (наприклад, це велика літера, цифра або пробіл, яких немає в `abc`), ми повертаємо його без змін.
* Якщо символ **є**, запам'ятовуємо його позицію (індекс).


3. **Визначення символу ключа**: Ми беремо символ із ключа, який відповідає поточному індексу повідомлення. Оскільки ключ зазвичай коротший за текст, ми використовуємо оператор `%` (залишок від ділення), щоб ключ повторювався циклічно: `key[i % key.length]`.
4. **Розрахунок зсуву**: Знаходимо індекс обраного символу ключа в алфавіті `abc`.
5. **Обчислення нового індексу**:
* Віднімаємо індекс ключа від індексу зашифрованого символу.
* Додаємо довжину алфавіту (щоб уникнути від'ємних чисел).
* Застосовуємо оператор `%`, щоб результат точно вписувався в межі алфавіту.


6. **Отримання літери**: Беремо символ з алфавіту за отриманим новим індексом.

---

### Приклад (на основі тестів)

**Дано:**

* Алфавіт (`abc`): `abcdefghijklmnopqrstuvwxyz`
* Ключ (`key`): `password`
* Зашифроване слово: `rovwsoiv`

**Розберемо першу літеру `r`:**

1. Індекс літери `r` в алфавіті — **17**.
2. Індекс першої літери ключа `p` в алфавіті — **15**.
3. Обчислення: $(17 - 15 + 26) \pmod{26} = 2 \pmod{26} = 2$.
4. Символ під індексом **2** в алфавіті — це **`c`**.

**Розберемо другу літеру `o`:**

1. Індекс літери `o` в алфавіті — **14**.
2. Індекс другої літери ключа `a` в алфавіті — **0**.
3. Обчислення: $(14 - 0 + 26) \pmod{26} = 14 \pmod{26} = 14$.
4. Символ під індексом **14** — це **`o`**.

Таким чином, слово `rovwsoiv` поступово перетворюється назад у `codewars`.