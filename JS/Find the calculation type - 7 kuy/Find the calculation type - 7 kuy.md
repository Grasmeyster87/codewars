<div class="markdown prose max-w-none mb-8" id="description"><p>You have to create a function which receives 3 number arguments: 2 operands <code>a</code> and <code>b</code>, and the result of an unknown operation performed on them.</p>
<p>Based on those 3 values you have to return a string, that describes which operation was used to get the given result.</p>
<p>The possible return strings are:
  <code>"addition"</code>,
  <code>"subtraction"</code>,
  <code>"multiplication"</code>,
  <code>"division"</code>.</p>
<h2 id="examples">Examples:</h2>
<pre><code class="language-javascript">(<span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>, <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>, <span class="cm-variable">result</span> <span class="cm-operator">=</span> <span class="cm-number">3</span>)   <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span> <span class="cm-operator">?</span> <span class="cm-number">2</span> <span class="cm-operator">=</span> <span class="cm-number">3</span>   <span class="cm-operator">--&gt;</span> <span class="cm-string">"addition"</span>
(<span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-number">5</span>, <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>, <span class="cm-variable">result</span> <span class="cm-operator">=</span> <span class="cm-number">2.5</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">5</span> <span class="cm-operator">?</span> <span class="cm-number">2</span> <span class="cm-operator">=</span> <span class="cm-number">2.5</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"division"</span>
</code></pre>
<h2 id="notes">Notes</h2>
<ul>
<li>The <code>/</code> operator performs a plain division without rounding.</li>
<li>You can assume that there will always be a unique valid answer (no ambiguous cases like e.g. <code>1 ? 0 = 0</code> which could be either <code>-</code> or <code>+</code>, or <code>3 ? 1 = 3</code> which could be either <code>*</code> or <code>/</code>).</li>
<li>You can assume that there will be no division by <code>0</code></li>
</ul>
</div>

<div class="markdown prose max-w-none mb-8" id="description"><p>Вам нужно создать функцию, которая принимает 3 числовых аргумента: 2 операнда <code>a</code> и <code>b</code>, а также результат неизвестной операции, выполненной над ними.</p>
<p>На основе этих 3 значений вы должны вернуть строку, описывающую, какая операция была использована для получения заданного результата.</p>
<p>Возможные возвращаемые строки:

<code>"addition"</code>,

<code>"subtraction"</code>,

<code>"multiplication"</code>,

<code>"division"</code>.</p>
<h2 id="examples">Примеры:</h2>
<pre><code class="language-javascript">(<span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>, <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>, <span class="cm-variable">результат</span> <span class="cm-operator">=</span> <span class="cm-number">3</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">1</span> <span class="cm-operator">?</span> <span class="cm-number">2</span> <span class="cm-operator">=</span> <span class="cm-number">3</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"addition"</span>
(<span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-number">5</span>, <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>, <span class="cm-variable">result</span> <span class="cm-operator">=</span> <span class="cm-number">2.5</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">5</span> <span class="cm-operator">?</span> <span class="cm-number">2</span> <span class="cm-operator">=</span> <span class="cm-number">2.5</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"division"</span>
</code></pre>
<h2 id="notes">Примечания</h2>
<ul>
<li>Оператор <code>/</code> выполняет простое деление без округления.</li>
<li>Можно предположить, что всегда будет единственный допустимый ответ (нет неоднозначных случаев, таких как, например, <code>1 ? 0 = 0</code>, который может быть либо <code>-</code>, либо <code>+</code>, или <code>3 ? 1 = 3</code>, который может быть либо <code>*</code>, либо <code>/</code>).</li>
<li>Можно предположить, что деления на <code>0</code></li> не будет.
</ul>
</div>