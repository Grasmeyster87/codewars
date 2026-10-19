<div class="markdown prose max-w-none mb-8" id="description"><p>Consider the number triangle below, in which each number is equal to the number above plus the number to the left. If there is no number above, assume it's a <code>0</code>.</p>
<pre><code class="language-haskell"><span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">2</span>
<span class="cm-number">1</span> <span class="cm-number">3</span> <span class="cm-number">5</span> <span class="cm-number">5</span>
<span class="cm-number">1</span> <span class="cm-number">4</span> <span class="cm-number">9</span> <span class="cm-number">14</span> <span class="cm-number">14</span>
</code></pre>
<p>The triangle has <code>5</code> rows and the sum of the last row is <code>sum([1,4,9,14,14]) = 42</code>.</p>
<p>You will be given an integer <code>n</code> and your task will be to return the sum of the last row of a triangle of <code>n</code> rows. </p>
<p>In the example above:</p>
<pre><code class="language-haskell"><span class="cm-variable">solve</span>(<span class="cm-number">5</span>) <span class="cm-keyword">=</span> <span class="cm-number">42</span>
</code></pre>
<p>More examples in test cases. Good luck!</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Розгляньте наведений нижче числовий трикутник, у якому кожне число дорівнює сумі числа, що стоїть над ним, і числа, що стоїть ліворуч від нього. Якщо над числом нічого немає, вважайте, що там стоїть <code>0</code>.</p>
<pre><code class="language-haskell"><span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">1</span>
<span class="cm-number">1</span> <span class="cm-number">2</span> <span class="cm-number">2</span>
<span class="cm-number">1</span> <span class="cm-number">3</span> <span class="cm-number">5</span> <span class="cm-number">5</span>
<span class="cm-number">1</span> <span class="cm-number">4</span> <span class="cm-number">9</span> <span class="cm-number">14</span> <span class="cm-number">14</span>
</code></pre>
<p>У цьому трикутнику <code>5</code> рядків, а сума чисел в останньому рядку становить <code>sum([1,4,9,14,14]) = 42</code>.</p>
<p>Вам дано ціле число <code>n</code>; ваше завдання — повернути суму чисел в останньому рядку трикутника, що складається з <code>n</code> рядків.</p>
<p>У наведеному вище прикладі:</p>
<pre><code class="language-haskell"><span class="cm-variable">solve</span>(<span class="cm-number">5</span>) <span class="cm-keyword">=</span> <span class="cm-number">42</span>
</code></pre>
<p>Більше прикладів — у тестових випадках. Хай щастить!</p>
</div>