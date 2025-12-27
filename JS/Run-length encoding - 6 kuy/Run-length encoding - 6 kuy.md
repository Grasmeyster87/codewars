<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><blockquote>
<p><a href="https://en.wikipedia.org/w/index.php?title=Run-length_encoding" data-turbolinks="false" target="_blank">Run-length encoding</a> (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. <cite>Wikipedia</cite></p>
</blockquote>
<h2 id="task">Task</h2>
<p>Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) 
[
 (i<sub>1</sub>, s<sub>1</sub>),
 (i<sub>2</sub>, s<sub>2</sub>),
 …,
 (i<sub>n</sub>, s<sub>n</sub>)
], such that one can reconstruct the original string by replicating the character s<sub>x</sub> i<sub>x</sub> times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values s<sub>i</sub> and s<sub>i+1</sub> should differ.</p>
<h2 id="examples">Examples</h2>
<p>As the article states, RLE is a <em>very</em> simple form of data compression. It's only suitable for runs of data, as one can see in the following example:</p>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"hello world!"</span> 
        `<span class="cm-variable">shouldBe</span>` [(<span class="cm-number">1</span>,<span class="cm-string">'h'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'e'</span>), (<span class="cm-number">2</span>,<span class="cm-string">'l'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'o'</span>), (<span class="cm-number">1</span>,<span class="cm-string">' '</span>), (<span class="cm-number">1</span>,<span class="cm-string">'w'</span>),(<span class="cm-number">1</span>,<span class="cm-string">'o'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'r'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'l'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'d'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'!'</span>)]
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"hello world!"</span>
<span class="cm-indent"> </span><span class="cm-comment"># =&gt;      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">runLengthEncoding</span>(<span class="cm-string">"hello world!"</span>)
 <span class="cm-comment">//=&gt;      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"hello world!"</span>)
 <span class="cm-operator">/</span><span class="cm-operator">/=</span><span class="cm-operator">&gt;</span>      [[<span class="cm-number">1</span>,<span class="cm-string">'h'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'e'</span>], [<span class="cm-number">2</span>,<span class="cm-string">'l'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'o'</span>], [<span class="cm-number">1</span>,<span class="cm-string">' '</span>], [<span class="cm-number">1</span>,<span class="cm-string">'w'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'o'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'r'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'l'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'d'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'!'</span>]]
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">rle</span>(<span class="cm-string">"hello world!"</span>)
 <span class="cm-comment"># =&gt; [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"hello world!"</span>)
<span class="cm-comment"># =&gt; [[1,"h"], [1,"e"], [2,"l"], [1,"o"], [1," "], [1,"w"], [1,"o"], [1,"r"], [1,"l"], [1,"d"], [1,"!"]]</span>
</code></pre>
<p>It's very effective if the same data value occurs in many consecutive data elements:</p>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span> 
        `<span class="cm-variable">shouldBe</span>` [(<span class="cm-number">34</span>,<span class="cm-string">'a'</span>), (<span class="cm-number">3</span>,<span class="cm-string">'b'</span>)]
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span> 
<span class="cm-indent"> </span><span class="cm-comment">#  =&gt; [[34,'a'], [3,'b']]</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">runLengthEncoding</span>(<span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span>)
 <span class="cm-comment">// =&gt; [[34,'a'], [3,'b']]</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span>)
<span class="cm-comment"># =&gt; [[34,'a'], [3,'b']]</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">rle</span>(<span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span>)
<span class="cm-comment"># =&gt; [[34,'a'], [3,'b']]</span>
</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span>)
<span class="cm-comment"># =&gt; [[34,"a"], [3,"b"]]</span>
</code></pre>
</div>

<br><hr><br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><blockquote>
<p><a href="https://en.wikipedia.org/w/index.php?title=Run-length_encoding" data-turbolinks="false" target="_blank">Кодування довжини ряду</a> (RLE) – це дуже проста форма стиснення даних, в якій ряди даних (тобто послідовності, в яких одне й те саме значення даних зустрічається в багатьох послідовних елементах даних) зберігаються як одне значення даних і кількість, а не як оригінальний ряд. <cite>Вікіпедія</cite></p>
</blockquote>
<h2 id="task">Завдання</h2>
<p>Ваше завдання – написати таке кодування довжини ряду. Для заданого рядка поверніть список (або масив) пар (або масивів)
[
(i<sub>1</sub>, s<sub>1</sub>),
(i<sub>2</sub>, s<sub>2</sub>),
…,
(i<sub>n</sub>, s<sub>n</sub>)
], таким чином, щоб можна було реконструювати оригінальний рядок, повторивши символ s<sub>x</sub> i<sub>x</sub> разів та об'єднавши всі ці рядки. Ваше кодування довжини рядка має бути мінімальним, тобто для всіх i значення s<sub>i</sub> та s<sub>i+1</sub> повинні відрізнятися.</p>
<h2 id="examples">Приклади</h2>
<p>Як зазначено у статті, RLE — це <em>дуже</em> проста форма стиснення даних. Це підходить лише для циклів даних, як видно з наступного прикладу:</p>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"привіт, світе!"</span>
`<span class="cm-variable">shouldBe</span>` [(<span class="cm-number">1</span>,<span class="cm-string">'h'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'e'</span>), (<span class="cm-number">2</span>,<span class="cm-string">'l'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'o'</span>), (<span class="cm-number">1</span>,<span class="cm-string">' '</span>), (<span class="cm-number">1</span>,<span class="cm-string">'w'</span>),(<span class="cm-number">1</span>,<span class="cm-string">'o'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'r'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'l'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'d'</span>), (<span class="cm-number">1</span>,<span class="cm-string">'!'</span>)]
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"привіт, світе!"</span>
<span class="cm-indent"> </span><span class="cm-comment"># => [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">runLengthEncoding</span>(<span class="cm-string">"привіт, світе!"</span>)
<span class="cm-comment">//=> [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"привіт, світе!"</span>)
<span class="cm-operator">/</span><span class="cm-operator">/=</span><span class="cm-operator">&gt;</span> [[<span class="cm-number">1</span>,<span class="cm-string">'h'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'e'</span>], [<span class="cm-number">2</span>,<span class="cm-string">'l'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'o'</span>], [<span class="cm-number">1</span>,<span class="cm-string">' '</span>], [<span class="cm-number">1</span>,<span class="cm-string">'w'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'o'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'r'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'l'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'1</span> class="cm-string">'d'</span>], [<span class="cm-number">1</span>,<span class="cm-string">'!'</span>]]
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">rle</span>(<span class="cm-string">"привіт, світе!"</span>)
<span class="cm-comment"># =&gt; [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]</span>
</code></pre>
<pre style="display: none;"><code class="language-elixir"><span class="cm-variable">run_length_encoding</span>(<span class="cm-string">"привіт, світе!"</span>)
<span class="cm-comment"># =&gt; [[1, "h"], [1, "e"], [2, "l"], [1, "o"], [1, ""], [1, "w"], [1, "o"], [1, "r"], [1, "l"], [1, "d"], [1, "!"]]</span>
</code></pre>
<p>Це дуже ефективно, якщо одне й те саме значення даних зустрічається в багатьох послідовних елементах даних:</p>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">runLengthEncoding</span> <span class="cm-string">"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"</span>
`<span class="cm-variable">shouldBe</span>` [(<span class="cm-number">34</span>,<span class="cm-string">'a'</span>), (<span class="cm-number">3</span>

