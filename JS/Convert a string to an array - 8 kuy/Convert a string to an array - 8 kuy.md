<p>Write a function to split a string of space-separated words and convert it into an array of words. Words in the input will be separated by exactly one space, without leading or trailing spaces. A "word" is any contiguous sequence of characters that does not contain any space.</p>
<h3 id="examples-input--output">Examples (Input ==&gt; Output):</h3>
<pre><code class="language-javascript"><span class="cm-string">""</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> []
<span class="cm-string">"string"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"string"</span>]
<span class="cm-string">"Robin Singh"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"Robin"</span>, <span class="cm-string">"Singh"</span>]
<span class="cm-string">"I love arrays they are my favorite"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"I"</span>, <span class="cm-string">"love"</span>, <span class="cm-string">"arrays"</span>, <span class="cm-string">"they"</span>, <span class="cm-string">"are"</span>, <span class="cm-string">"my"</span>, <span class="cm-string">"favorite"</span>]

<br> <hr> <br>

<p>Напишите функцию, которая разбивает строку, состоящую из слов, разделенных пробелами, и преобразует её в массив слов. Слова во входной строке разделены ровно одним пробелом; пробелы в начале и в конце строки отсутствуют. «Слово» — это любая непрерывная последовательность символов, не содержащая пробелов.</p>
<h3 id="examples-input--output">Примеры (Входные данные ==&gt; Результат):</h3>
<pre><code class="language-javascript"><span class="cm-string">""</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> []
<span class="cm-string">"string"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"string"</span>]
<span class="cm-string">"Robin Singh"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"Robin"</span>, <span class="cm-string">"Singh"</span>]
<span class="cm-string">"I love arrays they are my favorite"</span> <span class="cm-operator">==</span><span class="cm-operator">&gt;</span> [<span class="cm-string">"I"</span>, <span class="cm-string">"love"</span>, <span class="cm-string">"arrays"</span>, <span class="cm-string">"they"</span>, <span class="cm-string">"are"</span>, <span class="cm-string">"my"</span>, <span class="cm-string">"favorite"</span>]