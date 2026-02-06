<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>As a part of this Kata, you need to write a function to <em>dismember functions</em>. You need to extract the names of all formal arguments of the function from its definition as an array.</p>
<p>For example, given is a function as shown below:</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">add</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
    <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>;
}
</code></pre>
<p>Running <code>dismember</code> on the function would provide:</p>
<pre><code class="language-javascript"><span class="cm-variable">dismember</span>(<span class="cm-variable">add</span>) <span class="cm-operator">=&gt;</span> [<span class="cm-string">"a"</span>, <span class="cm-string">"b"</span>]
</code></pre>
<p>There could be functions that are declared without any explicitly named variables, for example:</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">average</span> () {
    <span class="cm-keyword">return</span> <span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">apply</span>(<span class="cm-variable-2">arguments</span>).<span class="cm-property">reduce</span>(<span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">c</span>) {
        <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">c</span>;
    }, <span class="cm-number">0</span>) <span class="cm-operator">/</span> <span class="cm-variable-2">arguments</span>.<span class="cm-property">length</span>;
}
</code></pre>
<p>I'm sure the above function implementation is not the best, it's not even great and would run into issues when no arguments are passed. For such functions, return an empty array.</p>
<pre><code class="language-javascript"><span class="cm-variable">dismember</span>(<span class="cm-variable">average</span>) <span class="cm-operator">=&gt;</span> []
</code></pre>
<p>Please note: The internal implementation of the function holds no importance in this Kata, one just needs to <em>dismember</em> the arguments and return them in the sequence in which they are named.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>В рамках этого задания вам необходимо написать функцию для <em>разделения функций</em>. Необходимо извлечь имена всех формальных аргументов функции из её определения в виде массива.</p>
<p>Например, дана функция, как показано ниже:</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">add</span> (<span class="cm-def">a</span>, <span class="cm-def">b</span>) {
<span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">b</span>;

}
</code></pre>

<p>Выполнение команды <code>dismember</code> для функции даст следующий результат:</p>
<pre><code class="language-javascript"><span class="cm-variable">dismember</span>(<span class="cm-variable">add</span>) <span class="cm-operator">=&gt;</span> [<span class="cm-string">"a"</span>, <span class="cm-string">"b"</span>]
</code></pre>
<p>Могут существовать функции, объявленные без явно именованных переменных, например:</p>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">average</span> () {
<span class="cm-keyword">return</span> <span class="cm-variable">Array</span>.<span class="cm-property">prototype</span>.<span class="cm-property">slice</span>.<span class="cm-property">apply</span>(<span class="cm-variable-2">arguments</span>).<span class="cm-property">reduce</span>(<span class="cm-keyword">function</span> (<span class="cm-def">a</span>, <span class="cm-def">c</span>) {
<span class="cm-keyword">return</span> <span class="cm-variable-2">a</span> <span class="cm-operator">+</span> <span class="cm-variable-2">c</span>;

}, <span class="cm-number">0</span>) <span class="cm-operator">/</span> <span class="cm-variable-2">arguments</span>.<span class="cm-property">length</span>;

}
</code></pre>

<p>Я уверен, что приведенная выше реализация функции не самая лучшая, она даже не идеальна и может вызвать проблемы, если аргументы не передаются. Для таких функций возвращайте пустой массив.</p>
<pre><code class="language-javascript"><span class="cm-variable">dismember</span>(<span class="cm-variable">average</span>) <span class="cm-operator">=&gt;</span> []
</code></pre>
<p>Обратите внимание: внутренняя реализация функции не имеет значения в этом задании, нужно просто <em>расчленить</em> аргументы и вернуть их в той последовательности, в которой они названы.</p>
</div>
