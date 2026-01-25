<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.</p>
<p>If your language can handle float binaries assume the array won't contain float or doubles.</p>
<pre><code class="language-javascript"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>

<span class="cm-variable">NOTE</span>: <span class="cm-atom">NaN</span> <span class="cm-variable">is</span> <span class="cm-variable">a</span> <span class="cm-variable">number</span> <span class="cm-variable">too</span> <span class="cm-keyword">in</span> <span class="cm-variable">javascript</span> <span class="cm-keyword">for</span> <span class="cm-variable">decimal</span>, <span class="cm-variable">binary</span> <span class="cm-variable">and</span> <span class="cm-variable">n</span><span class="cm-operator">-</span><span class="cm-variable">ary</span> <span class="cm-variable">base</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span><span class="cm-number">2</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span><span class="cm-number">2</span><span class="cm-punctuation">,</span><span class="cm-string">'a'</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<pre style="display: none;"><code class="language-typescript"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<p>Return <code>"NaN"</code>  if the sum of all numbers is <code>NaN</code>.</p>
<p>This is a modification on the Kata: <code>Array2Binary addition</code> hope you like it</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Дано множество, сложите все числовые элементы и верните двоичный эквивалент этой суммы; Чтобы сделать код абсолютно надежным, все, кроме числа, следует добавлять как 0, поскольку их нельзя сложить.</p>
<p>Если ваш язык может обрабатывать двоичные числа с плавающей запятой, предполагайте, что массив не будет содержать чисел с плавающей запятой или чисел с плавающей запятой двойной точности.</p>
<pre><code class="language-javascript"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>

<span class="cm-variable">ПРИМЕЧАНИЕ</span>: <span class="cm-atom">NaN</span> <span class="cm-variable">is</span> <span class="cm-variable">a</span> <span class="cm-variable">number</span> <span class="cm-variable">too</span> <span class="cm-keyword">in</span> <span class="cm-variable">javascript</span> <span class="cm-keyword">for</span> <span class="cm-variable">десятичная</span>, <span class="cm-variable">двоичная</span> <span class="cm-variable">и</span> <span class="cm-variable">n</span><span class="cm-operator">-</span><span class="cm-variable">арная</span> <span class="cm-variable">базовая</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span><span class="cm-number">2</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span><span class="cm-number">2</span><span class="cm-punctuation">,</span><span class="cm-string">'a'</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span> <span class="cm-punctuation">[</span><span class="cm-punctuation">]</span> <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<pre style="display: none;"><code class="language-typescript"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([<span class="cm-number">1</span>,<span class="cm-number">2</span>,<span class="cm-string">'a'</span>]) <span class="cm-operator">==</span> <span class="cm-string">'11'</span>
<span class="cm-variable">arr2bin</span>([]) <span class="cm-operator">==</span> <span class="cm-string">'0'</span>
</code></pre>
<p>Возвращает <code>"NaN"</code>, если сумма всех чисел равна <code>NaN</code>.</p>
<p>Это модификация задания Kata: <code>Сложение Array2Binary</code>. Надеюсь, вам понравится.</p>
</div>