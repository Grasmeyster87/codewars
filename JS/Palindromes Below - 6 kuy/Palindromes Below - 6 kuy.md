<div ><p>The aim of this Kata is to modify the <strong>Ruby:</strong> <code>Integer</code> ( <strong>JS</strong>: <code>Number</code> <strong>CS</strong>: extension for <code>int</code>) class to give it the <code>palindrome_below</code> ( <strong>JS</strong>: <code>palindromeBelow</code> <strong>CS</strong>: <code>PalindromeBelow</code> ) method. This method returns all numbers from and including 1 up to but not including itself that are palindromes for a given <strong><a href="http://en.wikipedia.org/wiki/Radix" >base</a></strong>. The base values tested will be between <code>2</code> to <code>36</code>.</p>
<p>For example in base 2 (binary)</p>
<pre><code>
1 = "1"
2 = "10"
3 = "11"
4 = "100"
</code></pre>
<p>Therefore 1 and 3 are palindromes in base two and the method should return the following:</p>
<pre style="display: none;"><code class="language-ruby">    <span class="cm-number">5</span><span class="cm-operator">.</span><span class="cm-property">palindrome_below</span>(<span class="cm-number">2</span>)
    <span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
<pre><code class="language-javascript">    <span class="cm-number">5.</span>.<span class="cm-property">palindromeBelow</span>(<span class="cm-number">2</span>)
    <span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-csharp">    <span class="cm-number">5.</span><span class="cm-variable">PalindromeBelow</span>(<span class="cm-number">2</span>)
    <span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
</div>


<div class="markdown prose max-w-none mb-8" id="description"><p>The aim of this Kata is to modify the <strong>Ruby:</strong> <code>Integer</code> ( <strong>JS</strong>: <code>Number</code> <strong>CS</strong>: extension for <code>int</code>) class to give it the <code>palindrome_below</code> ( <strong>JS</strong>: <code>palindromeBelow</code> <strong>CS</strong>: <code>PalindromeBelow</code> ) method.
1 840 / 5 000
<div class="markdown prose max-w-none mb-8" id="description"><p>Цель этого Kata — изменить класс <strong>Ruby:</strong> <code>Integer</code> (<strong>JS</strong>: <code>Number</code> <strong>CS</strong>: расширение для <code>int</code>), добавив ему метод <code>palindrome_below</code> (<strong>JS</strong>: <code>palindromeBelow</code> <strong>CS</strong>: <code>PalindromeBelow</code> ). Этот метод возвращает все числа от 1 включительно до самого себя, являющиеся палиндромами для заданной <strong><a href="http://en.wikipedia.org/wiki/Radix" data-turbolinks="false" target="_blank">системы счисления</a></strong>. Проверяемые базовые значения будут находиться в диапазоне от <code>2</code> до <code>36</code>.</p>
<p>Например, в двоичной системе счисления</p>
<pre><code>1 = "1"
2 = "10"
3 = "11"
4 = "100"
</code></pre>
<p>Следовательно, 1 и 3 являются палиндромами в двоичной системе счисления, и метод должен вернуть следующее:</p>
<pre style="display: none;"><code class="language-ruby"> <span class="cm-number">5</span><span class="cm-operator">.</span><span class="cm-property">palindrome_below</span>(<span class="cm-number">2</span>)
<span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
<pre><code class="language-javascript"> <span class="cm-number">5.</span>.<span class="cm-property">ПалиндромНиже</span>(<span class="cm-number">2</span>)
<span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
<pre style="display: none;"><code class="language-csharp"> <span class="cm-number">5.</span><span class="cm-variable">ПалиндромНиже</span>(<span class="cm-number">2</span>)
<span class="cm-operator">=&gt;</span> [<span class="cm-number">1</span>, <span class="cm-number">3</span>]
</code></pre>
</div>