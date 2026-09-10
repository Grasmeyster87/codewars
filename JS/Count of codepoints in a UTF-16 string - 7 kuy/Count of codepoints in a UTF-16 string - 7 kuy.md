<div class="markdown prose max-w-none mb-8" id="description"><p><a href="https://en.wikipedia.org/wiki/UTF-16" data-turbolinks="false" target="_blank">UTF-16</a> is a Unicode encoding. It is used by platforms and protocols such as the <a href="https://en.wikipedia.org/wiki/Windows_API" data-turbolinks="false" target="_blank">Windows API</a>, SMS texts, or the Qt GUI library.</p>
<p>It is also the internal encoding of strings in several programming languages: JavaScript, Dart, languages running on the <a href="https://en.wikipedia.org/wiki/Java_(software_platform)" data-turbolinks="false" target="_blank">Java platform</a> (Java, Scala, Kotlin, Clojure...), languages running on the <a href="https://en.wikipedia.org/wiki/.NET" data-turbolinks="false" target="_blank">.NET framework</a> (C#, F#, VB.NET, PowerShell...).</p>
<p>UTF-16 is a <em>variable-length</em> encoding: the representation of a <em>codepoint</em> can require either <code>1</code> or <code>2</code> 16-bit <em>code-units</em> , depending on whether the codepoint is below <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>2</mn><mn>16</mn></msup></mrow>2^{16}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.8141em;" class="strut"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">16</span></span></span></span></span></span></span></span></span></span></span></span> or not.</p>
<h2 id="the-problem">The problem</h2>
<p>In languages that use UTF-16 as their string encoding, the function/method/property to retrieve the string's <em>length</em> actually returns the number of <em>code-units</em> in the string, not the number of <em>codepoints</em>.</p>
<h2 id="for-example">For example</h2>
<p>The code point of the emoji <code>🙉</code> (<code>U+1F649</code>, <em>Hear-No-Evil Monkey</em>) is <code>0x1F649</code>.</p>
<pre><code class="language-javascript"><span class="cm-string">"🙉"</span>.<span class="cm-property">length</span> <span class="cm-comment">// 2</span>
</code></pre>
<pre style="display: none;"><code class="language-powershell"><span class="cm-string">"🙉"</span><span class="cm-punctuation">.</span><span class="cm-identifier">Length</span> <span class="cm-comment"># 2</span>
</code></pre>
<pre style="display: none;"><code class="language-vb"><span class="cm-string">"🙉"</span><span class="cm-variable">.Length</span> <span class="cm-comment">' 2</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">sizeof</span> <span class="cm-variable">u</span><span class="cm-string">"🙉"</span> <span class="cm-comment">// 6 bytes (note that it includes the nul terminator u'\0')</span>
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-variable">std::u16string</span>(<span class="cm-string">u</span><span class="cm-string">"🙉"</span>).<span class="cm-variable">length</span>() <span class="cm-comment">// 2</span>
</code></pre>
<pre style="display: none;"><code class="language-clojure"><span class="cm-keyword">count</span> <span class="cm-string">"🙉"</span> <span class="cm-comment">; 2</span>
</code></pre>
<h2 id="task">Task</h2>
<p>Write a function that returns the number of codepoints in a UTF-16 string.</p>
<pre><code class="language-java"><span class="cm-string">"abcd"</span>     <span class="cm-operator">--&gt;</span> <span class="cm-number">4</span>
<span class="cm-string">"🙉"</span>      <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span>
<span class="cm-string">"😸🦌🚀"</span> <span class="cm-operator">--&gt;</span> <span class="cm-number">3</span>
<span class="cm-string">"é"</span>       <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span> (<span class="cm-variable">actual</span> <span class="cm-variable">é</span> <span class="cm-variable">character</span>)
<span class="cm-string">"é"</span>       <span class="cm-operator">--&gt;</span> <span class="cm-number">2</span> (<span class="cm-variable">e</span> <span class="cm-operator">+</span> <span class="cm-variable">combining</span> <span class="cm-variable">acute</span> <span class="cm-variable">accent</span>)
</code></pre>
<h2 id="see-also">See also</h2>
<p><a href="https://www.codewars.com/kata/68b8e7f8ce76e77dcfb77e8a" data-turbolinks="false" target="_blank">Same task</a> but in UTF-8, also a variable-length Unicode encoding.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p><a href="https://en.wikipedia.org/wiki/UTF-16" data-turbolinks="false" target="_blank">UTF-16</a> — это кодировка стандарта Unicode. Она используется такими платформами и протоколами, как <a href="https://en.wikipedia.org/wiki/Windows_API" data-turbolinks="false" target="_blank">Windows API</a>, SMS-сообщения или библиотека графического интерфейса Qt.</p>
<p>Кроме того, она служит внутренней кодировкой строк в ряде языков программирования: JavaScript, Dart, языках, работающих на платформе <a href="https://en.wikipedia.org/wiki/Java_(software_platform)" data-turbolinks="false" target="_blank">Java</a> (Java, Scala, Kotlin, Clojure...), и языках, использующих платформу <a href="https://en.wikipedia.org/wiki/.NET" data-turbolinks="false" target="_blank">.NET</a> (C#, F#, VB.NET, PowerShell...).</p>
<p>UTF-16 — это кодировка <em>переменной длины</em>: для представления <em>кодовой точки</em> (codepoint) может потребоваться <code>1</code> или <code>2</code> 16-битных <em>кодовых элемента</em> (code units) в зависимости от того, меньше ли значение кодовой точки величины <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>2</mn><mn>16</mn></msup></mrow>2^{16}</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.8141em;" class="strut"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8141em;" class="vlist"><span style="top:-3.063em;margin-right:0.05em;"><span style="height:2.7em;" или нет.</p>
<h2 id="the-problem">Проблема</h2>
<p>В языках, использующих UTF-16 в качестве кодировки строк, функция, метод или свойство для получения <em>длины</em> строки на самом деле возвращает количество <em>кодовых единиц</em> (code units) в строке, а не количество <em>кодовых точек</em> (code points).</p>
<h2 id="for-example">Пример</h2>
<p>Кодовая точка эмодзи <code>🙉</code> (<code>U+1F649</code>, «обезьяна, закрывающая уши») — <code>0x1F649</code>.</p>
<pre><code class="language-javascript"><span class="cm-string">"🙉"</span>.<span class="cm-property">length</span> <span class="cm-comment">// 2</span>
</code></pre>
<pre style="display: none;"><code class="language-powershell"><span class="cm-string">"🙉"</span><span class="cm-punctuation">.</span><span class="cm-identifier">Length</span> <span class="cm-comment"># 2</span>
</code></pre>
<pre style="display: none;"><code class="language-vb"><span class="cm-string">"🙉"</span><span class="cm-variable">.Length</span> <span class="cm-comment">' 2</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">sizeof</span> <span class="cm-variable">u</span><span class="cm-string">"🙉"</span> <span class="cm-comment">// 6 байт (обратите внимание: учитывается нулевой терминатор u'\0')</span>
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-variable">std::u16string</span>(<span class="cm-string">u</span><span class="cm-string">"🙉"</span>).<span class="cm-variable">length</span>() <span class="cm-comment">// 2</span>
</code></pre>
<pre style="display: none;"><code class="language-clojure"><span class="cm-keyword">count</span> <span class="cm-string">"🙉"</span> <span class="cm-comment">; 2</span>
</code></pre>
<h2 id="task">Задача</h2>
<p>Напишите функцию, которая возвращает количество кодовых точек в строке UTF-16.</p>
<pre><code class="language-java"><span class="cm-string">"abcd"</span>     <span class="cm-operator">--&gt;</span> <span class="cm-number">4</span>
<span class="cm-string">"🙉"</span>      <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span>
<span class="cm-string">"😸🦌🚀"</span> <span class="cm-operator">--&gt;</span> <span class="cm-number">3</span>
<span class="cm-string">"é"</span>       <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span> (<span class="cm-variable">символ</span> <span class="cm-variable">é</span>)
<span class="cm-string">"é"</span>       <span class="cm-operator">--&gt;</span> <span class="cm-number">2</span> (<span class="cm-variable">e</span> <span class="cm-operator">+</span> <span class="cm-variable">комбинируемый</span> <span class="cm-variable">знак</span> <span class="cm-variable">ударения</span> <span class="cm-variable">acute</span>)
</code></pre>
<h2 id="see-also">См. также</h2>
<p><a href="https://www.codewars.com/kata/68b8e7f8ce76e77dcfb77e8a" data-turbolinks="false" target="_blank">Та же задача</a>, но для UTF-8 — кодировки Unicode с переменной длиной символа.</p>
</div>