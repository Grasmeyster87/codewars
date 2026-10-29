<div class="markdown prose max-w-none mb-8" id="description"><p>Additive number is a string whose digits can form an additive sequence.</p>
<p>Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.</p>
<p>For example:<br>
<code>"112358"</code> is an additive number because the digits can form an additive sequence: <code>1, 1, 2, 3, 5, 8</code></p>
<p><code>1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8</code></p>
<p>Write</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">findAdditiveNumbers</span>(<span class="cm-def">num</span>)
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">def</span> <span class="cm-def">find_additive_numbers</span>(<span class="cm-variable">num</span>)
</code></pre>
<p>that will take in a string and return all the numbers that make up the sequence. <br>
<br></p>
<pre><code class="language-javascript"><span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'112358'</span>) <span class="cm-operator">===</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'1'</span>,<span class="cm-string">'2'</span>,<span class="cm-string">'3'</span>,<span class="cm-string">'5'</span>,<span class="cm-string">'8'</span>]
<span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'199100199'</span>) <span class="cm-operator">===</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'99'</span>,<span class="cm-string">'100'</span>,<span class="cm-string">'199'</span>]
<span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'1023'</span>) <span class="cm-operator">===</span> []
<span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'112356'</span>) <span class="cm-operator">===</span> [] <span class="cm-comment">// 6 != 5+3</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'112358'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'1'</span>,<span class="cm-string">'2'</span>,<span class="cm-string">'3'</span>,<span class="cm-string">'5'</span>,<span class="cm-string">'8'</span>]
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'199100199'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'99'</span>,<span class="cm-string">'100'</span>,<span class="cm-string">'199'</span>]
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'1023'</span>) <span class="cm-operator">==</span> []
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'112356'</span>) <span class="cm-operator">==</span> [] <span class="cm-comment"># 6 != 5+3</span>
</code></pre>
<p><b>Note: Numbers in the additive sequence cannot have leading zeros, so sequence <code>1, 2, 03</code> or <code>1, 02, 3</code> is invalid</b></p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Аддитивное число — это строка, цифры которой могут образовывать аддитивную последовательность.</p>
<p>Начиная с третьего элемента, каждое последующее число в такой последовательности должно быть равно сумме двух предыдущих.</p>
<p>Например:<br>
<code>"112358"</code> — это аддитивное число, так как его цифры образуют последовательность: <code>1, 1, 2, 3, 5, 8</code></p>
<p><code>1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8</code></p>
<p>Напишите функцию</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">findAdditiveNumbers</span>(<span class="cm-def">num</span>)
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">def</span> <span class="cm-def">find_additive_numbers</span>(<span class="cm-variable">num</span>)
</code></pre>
<p>которая принимает строку и возвращает все числа, составляющие эту последовательность.</p> <br>
<br></p>
<pre><code class="language-javascript"><span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'112358'</span>) <span class="cm-operator">===</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'1'</span>,<span class="cm-string">'2'</span>,<span class="cm-string">'3'</span>,<span class="cm-string">'5'</span>,<span class="cm-string">'8'</span>]
<span class="cm-variable">findAdditiveNumbers</span>(<span class="cm-string">'199100199'</span>) [['1'], '99'], '100', '199']
[findAdditiveNumbers('1023')] []
[] 5+3</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'112358'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'1'</span>,<span class="cm-string">'2'</span>,<span class="cm-string">'3'</span>,<span class="cm-string">'5'</span>,<span class="cm-string">'8'</span>]
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'199100199'</span>) <span class="cm-operator">==</span> [<span class="cm-string">'1'</span>,<span class="cm-string">'99'</span>,<span class="cm-string">'100'</span>,<span class="cm-string">'199'</span>]
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'1023'</span>) <span class="cm-operator">==</span> []
<span class="cm-variable">find_additive_numbers</span>(<span class="cm-string">'112356'</span>) <span class="cm-operator">==</span> [] <span class="cm-comment"># 6 != 5+3</span>
</code></pre>
<p><b>Примечание: числа в аддитивной последовательности не могут содержать ведущие нули, поэтому последовательности вида <code>1, 2, 03</code> или <code>1, 02, 3</code> являются недопустимыми.</b></p>
</div>