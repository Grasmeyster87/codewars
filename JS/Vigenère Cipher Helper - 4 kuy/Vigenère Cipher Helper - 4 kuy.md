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

Чи хотіли б ви, щоб я написав додаткові тести для перевірки роботи з UTF-8 символами або іншими мовами?
