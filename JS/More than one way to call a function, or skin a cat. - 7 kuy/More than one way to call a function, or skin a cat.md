<div class="markdown prose max-w-none mb-8" id="description"><p>Write a single function that can be invoked by either </p>
<pre><code class="language-javascript"><span class="cm-variable">sum</span>(<span class="cm-number">2</span>,<span class="cm-number">3</span>); <span class="cm-comment">// 5</span>
<span class="cm-comment">// or</span>
<span class="cm-variable">sum</span>(<span class="cm-number">2</span>)(<span class="cm-number">3</span>); <span class="cm-comment">// 5</span>
</code></pre>
<pre style="display: none;"><code class="language-clojure"><span class="cm-bracket">(</span><span class="cm-builtin">sum</span> <span class="cm-number">2</span> <span class="cm-number">3</span><span class="cm-bracket">)</span> <span class="cm-comment">;; 5</span>
<span class="cm-comment">;; or</span>
<span class="cm-bracket">(</span><span class="cm-bracket">(</span><span class="cm-builtin">sum</span> <span class="cm-number">2</span><span class="cm-bracket">)</span> <span class="cm-number">3</span><span class="cm-bracket">)</span> <span class="cm-comment">;; 5</span>
</code></pre>
<p>Both of these examples should return the sum of the 2 numbers. </p>
</div>