<div class="markdown prose max-w-none mb-8" id="description"><p>Some languages like Chinese, Japanese, and Thai do not have spaces between words. However, most natural languages processing tasks like part-of-speech tagging require texts that have segmented words. A simple and reasonably effective algorithm to segment a sentence into its component words is called "MaxMatch".</p>
<h2 id="maxmatch">MaxMatch</h2>
<p>MaxMatch starts at the first character of a sentence and tries to find the longest valid word starting from that character. If no word is found, the first character is deemed the longest "word", regardless of its validity. In order to find the rest of the words, MaxMatch is then recursively invoked on all of the remaining characters until no characters remain. A list of all of the words that were found is returned.</p>
<p>So for the string <code>"happyday"</code>, <code>"happy"</code> is found because <code>"happyday"</code> is not a valid word, nor is <code>"happyda"</code>, nor <code>"happyd"</code>. Then, MaxMatch is called on <code>"day"</code>, and <code>"day"</code> is found. The output is the list <code>["happy", "day"]</code> in that order.</p>
<h2 id="the-challenge">The Challenge</h2>
<p>Write <code>maxMatch</code>, which takes an alphanumeric, spaceless, lowercased <code>String</code> as input and returns an <code>Array</code> of all the words found, in the order they were found.
<strong>All valid words are in the</strong> <code>Set</code> <code>VALID_WORDS</code>, which only contains around 500 English words.</p>
<p><strong>Note:</strong> This algorithm is simple and operates better on Chinese text, so accept the fact that some words will be segmented wrongly.</p>
<p>Happy coding :)</p>
</div>

<br><hr><br>

<div class="markdown prose max-w-none mb-8" id="description"><p>В некоторых языках, таких как китайский, японский и тайский, нет пробелов между словами. Однако большинство задач обработки естественного языка, таких как определение частей речи, требуют текстов, содержащих сегментированные слова. Простой и достаточно эффективный алгоритм для сегментации предложения на составляющие его слова называется "MaxMatch".</p>
<h2 id="maxmatch">MaxMatch</h2>
<p>MaxMatch начинается с первого символа предложения и пытается найти самое длинное допустимое слово, начиная с этого символа. Если слово не найдено, первый символ считается самым длинным "словом", независимо от его допустимости. Чтобы найти остальные слова, MaxMatch затем рекурсивно вызывается для всех оставшихся символов, пока не останется ни одного символа. Возвращается список всех найденных слов.</p>
<p>Таким образом, для строки <code>"happyday"</code> найдено слово <code>"happy"</code>, потому что <code>"happyday"</code> не является допустимым словом, как и <code>"happyda"</code>, и <code>"happyd"</code>. Затем вызывается функция MaxMatch для <code>"day"</code>, и найдено слово <code>"day"</code>. Результатом является список <code>["happy", "day"]</code> в указанном порядке.</p>
<h2 id="the-challenge">Задача</h2>
<p>Напишите функцию <code>maxMatch</code>, которая принимает на вход буквенно-цифровую строку без пробелов, в нижнем регистре, и возвращает массив всех найденных слов в порядке их нахождения.

<strong>Все допустимые слова находятся в</strong> <code>наборе</code> <code>VALID_WORDS</code>, который содержит всего около 500 английских слов.</p>
<p><strong>Примечание:</strong> Этот алгоритм прост и лучше работает с китайским текстом, поэтому примите во внимание, что некоторые слова будут сегментированы неправильно.</p>
<p>Удачного кодирования :)</p>
</div>