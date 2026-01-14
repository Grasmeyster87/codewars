<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>You are given an array of non-negative integers.</p>
<p>The goal is to find all the values in the array that are within a given range of each other.</p>
<p>Return the final values in ascending order.</p>
<h2 id="for-example">For Example</h2>
<h4 id="given">Given</h4>
<pre><code class="language-ruby"><span class="cm-variable">numbers</span> <span class="cm-operator">=</span> [<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>]
<span class="cm-variable">difference</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>
</code></pre>
<p>You want to know all the values that fall within a difference of 2 of each other:</p>
<h4 id="should-return">Should Return</h4>
<pre><code class="language-ruby">[<span class="cm-number">5</span>, <span class="cm-number">5</span>, <span class="cm-number">30</span>, <span class="cm-number">31</span>, <span class="cm-number">32</span>]
</code></pre>
<p>If an empty array is given, then an empty array should be returned regardless of the difference value passed in.</p>
<p>Example solution call...</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-tag">GroupByDifference</span><span class="cm-operator">.</span><span class="cm-property">new</span>([<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>])<span class="cm-operator">.</span><span class="cm-property">find</span>(<span class="cm-number">3</span>) <span class="cm-comment"># =&gt; [5,5,8,30,31,32]</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">new</span> <span class="cm-variable">GroupByDifference</span>([<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>]).<span class="cm-property">find</span>(<span class="cm-number">3</span>) <span class="cm-comment">// =&gt; [5,5,8,30,31,32]</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Вам дан массив неотрицательных целых чисел.</p>
<p>Цель состоит в том, чтобы найти все значения в массиве, которые находятся в заданном диапазоне друг от друга.</p>
<p>Верните итоговые значения в порядке возрастания.</p>
<h2 id="for-example">Например</h2>
<h4 id="given">Дано</h4>
<pre><code class="language-ruby"><span class="cm-variable">числа</span> <span class="cm-operator">=</span> [<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>]
<span class="cm-variable">разница</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>
</code></pre>
<p>Вы хотите узнать все значения, разница между которыми не превышает 2:</p>
<h4 id="should-return">Должно возвращать</h4>
<pre><code class="language-ruby">[<span class="cm-number">5</span>, <span class="cm-number">5</span>, <span class="cm-number">30</span>, <span class="cm-number">31</span>, <span class="cm-number">32</span>]
</code></pre>
<p>Если задан пустой массив, то должен быть возвращен пустой массив независимо от переданного значения разницы.</p>
<p>Пример вызова решения...</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-tag">GroupByDifference</span><span class="cm-operator">.</span><span class="cm-property">new</span>([<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>])<span class="cm-operator">.</span><span class="cm-property">find</span>(<span class="cm-number">3</span>) <span class="cm-comment"># =&gt; [5,5,8,30,31,32]</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">new</span> <span class="cm-variable">GroupByDifference</span>([<span class="cm-number">5</span>, <span class="cm-number">32</span>, <span class="cm-number">5</span>, <span class="cm-number">1</span>, <span class="cm-number">31</span>, <span class="cm-number">70</span>, <span class="cm-number">30</span>, <span class="cm-number">8</span>]).<span class="cm-property">find</span>(<span class="cm-number">3</span>) <span class="cm-comment">// =&gt; [5,5,8,30,31,32]</span>
</code></pre>
</div>