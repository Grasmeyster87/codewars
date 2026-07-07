<div class="markdown prose max-w-none mb-8" id="description"><p>Write a function which partitions a list of items based on a given predicate.</p>
<p>After the partition function is run, the list should be of the form <code>[ F, F, F, T, T, T ]</code> where the <code>F</code>s (resp. <code>T</code>s) are items for which the predicate function
returned <code>false</code> (resp. <code>true</code>).</p>
<p>NOTE: the partitioning should be <strong>stable</strong>; in other words: the ordering of the <code>F</code>s (resp. <code>T</code>s) should be preserved relative to each other.</p>
<p>For convenience and utility, the partition function should return the
boundary index.  In other words: the index of the first <code>T</code> value in items.</p>
<h3 id="examples">Examples</h3>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">items</span> <span class="cm-punctuation">=</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span> <span class="cm-number">2</span><span class="cm-punctuation">,</span> <span class="cm-number">3</span><span class="cm-punctuation">,</span> <span class="cm-number">4</span><span class="cm-punctuation">,</span> <span class="cm-number">5</span><span class="cm-punctuation">,</span> <span class="cm-number">6</span><span class="cm-punctuation">]</span>
<span class="cm-variable">isEven</span> <span class="cm-punctuation">=</span> <span class="cm-punctuation">(</span><span class="cm-variable">n</span><span class="cm-punctuation">)</span> <span class="cm-operator">-&gt;</span> <span class="cm-variable">n</span> <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>
<span class="cm-variable">i</span> <span class="cm-punctuation">=</span> <span class="cm-variable">partitionOn</span> <span class="cm-variable">isEven</span><span class="cm-punctuation">,</span> <span class="cm-variable">items</span>
<span class="cm-comment"># items should now be [1, 3, 5, 2, 4, 6]</span>
<span class="cm-comment"># i     should now be 3</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">items</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>, <span class="cm-number">6</span>];
<span class="cm-keyword">function</span> <span class="cm-def">isEven</span>(<span class="cm-def">n</span>) {<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span> <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>}
<span class="cm-keyword">var</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-variable">partitionOn</span>(<span class="cm-variable">isEven</span>, <span class="cm-variable">items</span>);
<span class="cm-comment">// items should now be [1, 3, 5, 2, 4, 6]</span>
<span class="cm-comment">// i     should now be 3</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-type">bool</span> <span class="cm-def">is_even</span>(<span class="cm-keyword">const</span> <span class="cm-type">void</span> <span class="cm-type">*</span><span class="cm-variable">ptr</span>) { <span class="cm-keyword">return</span> <span class="cm-operator">*</span>((<span class="cm-keyword">const</span> <span class="cm-type">int</span> <span class="cm-type">*</span>) <span class="cm-variable">ptr</span>) <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>; } 
<span class="cm-type">int</span> <span class="cm-variable">items</span>[] <span class="cm-operator">=</span> {<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>, <span class="cm-number">6</span>};
<span class="cm-type">size_t</span> <span class="cm-variable">i</span> <span class="cm-operator">=</span> <span class="cm-variable">partition_on</span>(<span class="cm-variable">items</span>, <span class="cm-number">6</span>, <span class="cm-keyword">sizeof</span>(<span class="cm-type">int</span>), <span class="cm-variable">is_even</span>);
<span class="cm-comment">// items should now be {1, 3, 5, 2, 4, 6}</span>
<span class="cm-comment">// i     should now be 3</span>
</code></pre>
</div>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишите функцию, которая разбивает список элементов на части на основе заданного предиката.</p>
<p>После выполнения функции разбиения список должен иметь вид <code>[ F, F, F, T, T, T ]</code>, где <code>F</code> (соответственно, <code>T</code>) — это элементы, для которых функция предиката
вернула <code>false</code> (соответственно, <code>true</code>).</p>
<p>ПРИМЕЧАНИЕ: разбиение должно быть <strong>стабильным</strong>; другими словами: порядок <code>F</code> (соответственно, <code>T</code>) должен сохраняться относительно друг друга.</p>
<p>Для удобства и полезности функция разбиения должна возвращать
граничный индекс.</p> Другими словами: индекс первого значения <code>T</code> в items.</p>
<h3 id="examples">Примеры</h3>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">items</span> <span class="cm-punctuation">=</span> <span class="cm-punctuation">[</span><span class="cm-number">1</span><span class="cm-punctuation">,</span> <span class="cm-number">2</span><span class="cm-punctuation">,</span> <span class="cm-number">3</span><span class="cm-punctuation">,</span> <span class="cm-number">4</span><span class="cm-punctuation">,</span> <span class="cm-number">5</span><span class="cm-punctuation">,</span> <span class="cm-number">6</span><span class="cm-punctuation">]</span>
<span class="cm-variable">isEven</span> <span class="cm-punctuation">=</span> <span class="cm-punctuation">(</span><span class="cm-variable">n</span><span class="cm-punctuation">)</span> <span class="cm-operator">-&gt;</span> <span class="cm-variable">n</span> <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>
<span class="cm-variable">i</span> <span class="cm-punctuation">=</span> <span class="cm-variable">partitionOn</span> <span class="cm-variable">isEven</span><span class="cm-punctuation">,</span> <span class="cm-variable">items</span>
<span class="cm-comment"># items теперь должны быть [1, 3, 5, 2, 4, 6]</span>
<span class="cm-comment"># i теперь должно быть 3</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">items</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span [class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>, <span class="cm-number">6</span>];

<span class="cm-keyword">function</span> <span class="cm-def">isEven</span>(<span class="cm-def">n</span>) {<span class="cm-keyword">return</span> <span class="cm-variable-2">n</span> <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>}
<span class="cm-keyword">var</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-variable">partitionOn</span>(<span class="cm-variable">isEven</span>, <span class="cm-variable">items</span>);
<span class="cm-comment">// items теперь должны быть [1, 3, 5, 2, 4, 6]</span>
<span class="cm-comment">// i теперь должно быть 3</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-type">bool</span> <span class="cm-def">is_even</span>(<span class="cm-keyword">const</span> <span class="cm-type">void</span> <span class="cm-type">*</span><span class="cm-variable">ptr</span>) { <span class="cm-keyword">return</span> <span class="cm-operator">*</span>((<span class="cm-keyword">const</span> <span class="cm-type">int</span> <span class="cm-type">*</span>) <span class="cm-variable">ptr</span>) <span class="cm-operator">%</span> <span class="cm-number">2</span> <span class="cm-operator">==</span> <span class="cm-number">0</span>; }
<span class="cm-type">int</span> <span class="cm-variable">items</span>[] <span class="cm-operator">=</span> {<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>, <span class="cm-number">5</span>, <span class="cm-number">6</span>};

<span class="cm-type">size_t</span> <span class="cm-variable">i</span> <span class="cm-operator">=</span> <span class="cm-variable">partition_on</span>(<span class="cm-variable">items</span>, <span class="cm-number">6</span>, <span class="cm-keyword">sizeof</span>(<span class="cm-type">int</span>), <span class="cm-variable">is_even</span>);
<span class="cm-comment">// items теперь должны быть {1, 3, 5, 2, 4, 6}</span>
<span class="cm-comment">// i теперь должно быть 3</span>
</code></pre>
</div>