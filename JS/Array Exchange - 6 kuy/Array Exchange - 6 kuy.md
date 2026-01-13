<div class="markdown prose max-w-none mb-8" id="description"><p>Array Exchange and Reversing</p>
<p>It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.</p>
<pre><code class="language-ruby"><span class="cm-comment"># before</span>
<span class="cm-variable">my_array</span> <span class="cm-operator">=</span> [<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'c'</span>]
<span class="cm-variable">other_array</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>]

<span class="cm-variable">exchange_arrays</span>(<span class="cm-variable">my_array</span>, <span class="cm-variable">other_array</span>)

<span class="cm-comment"># after</span>
<span class="cm-variable">my_array</span> <span class="cm-operator">==</span> [<span class="cm-number">3</span>, <span class="cm-number">2</span>, <span class="cm-number">1</span>]
<span class="cm-variable">other_array</span> <span class="cm-operator">==</span> [<span class="cm-string">'c'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'a'</span>]
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Обмен и обращение элементов массивов</p>
<p>Пришло время для обмена элементами массивов! Цель проста: поменять местами элементы двух массивов таким образом, чтобы их новое содержимое также было обращено. Массивы могут иметь неравную длину, в этом случае вам придется расширить более короткий массив на месте.</p>
<pre><code class="language-ruby"><span class="cm-comment"># before</span>
<span class="cm-variable">my_array</span> <span class="cm-operator">=</span> [<span class="cm-string">'a'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'c'</span>]
<span class="cm-variable">other_array</span> <span class="cm-operator">=</span> [<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>]

<span class="cm-variable">exchange_arrays</span>(<span class="cm-variable">my_array</span>, <span class="cm-variable">other_array</span>)

<span class="cm-comment"># after</span>
<span class="cm-variable">my_array</span> <span class="cm-operator">==</span> [<span class="cm-number">3</span>, <span class="cm-number">2</span>, <span class="cm-number">1</span>]
<span class="cm-variable">other_array</span> <span class="cm-operator">==</span> [<span class="cm-string">'c'</span>, <span class="cm-string">'b'</span>, <span class="cm-string">'a'</span>]
</code></pre>
</div>