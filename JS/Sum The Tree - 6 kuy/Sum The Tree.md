<div class="markdown prose max-w-none mb-8" id="description"><p>Given a node object representing a binary tree:</p>
<pre><code class="language-javascript"><span class="cm-comment">// example of a node object:</span>
<span class="cm-keyword">const</span> <span class="cm-def">node</span> <span class="cm-operator">=</span> {
   <span class="cm-property">value</span>: <span class="cm-number">1</span>,
   <span class="cm-property">left</span>: {<span class="cm-property">value</span>: <span class="cm-number">2</span>, <span class="cm-property">right</span>: <span class="cm-atom">null</span>, <span class="cm-property">left</span>: <span class="cm-atom">null</span>},
   <span class="cm-property">right</span>: <span class="cm-atom">null</span>
};
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">struct</span> <span class="cm-def">node</span>
{
    <span class="cm-type">int</span> <span class="cm-variable">value</span>;
    <span class="cm-keyword">struct</span> <span class="cm-def">node</span><span class="cm-operator">*</span> <span class="cm-variable">left</span>;
    <span class="cm-keyword">struct</span> <span class="cm-def">node</span><span class="cm-operator">*</span> <span class="cm-variable">right</span>;
};
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-keyword">struct</span> <span class="cm-def">node</span>
{
  <span class="cm-type">int</span> <span class="cm-variable">value</span>;
  <span class="cm-variable">node</span><span class="cm-operator">*</span> <span class="cm-variable">left</span>;
  <span class="cm-variable">node</span><span class="cm-operator">*</span> <span class="cm-variable">right</span>;
}
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-keyword">public</span> <span class="cm-keyword">class</span> <span class="cm-def">Node</span>
{  
    <span class="cm-keyword">public</span> <span class="cm-type">int</span> <span class="cm-variable">Value</span>;  
    <span class="cm-keyword">public</span> <span class="cm-variable">Node</span> <span class="cm-variable">Left</span>;  
    <span class="cm-keyword">public</span> <span class="cm-variable">Node</span> <span class="cm-variable">Right</span>;
    
    <span class="cm-keyword">public</span> <span class="cm-variable">Node</span>(<span class="cm-type">int</span> <span class="cm-keyword">value</span>, <span class="cm-variable">Node</span> <span class="cm-variable">left</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>, <span class="cm-variable">Node</span> <span class="cm-variable">right</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>)
    {
      <span class="cm-variable">Value</span> <span class="cm-operator">=</span> <span class="cm-keyword">value</span>;
      <span class="cm-variable">Left</span> <span class="cm-operator">=</span> <span class="cm-variable">left</span>;
      <span class="cm-variable">Right</span> <span class="cm-operator">=</span> <span class="cm-variable">right</span>;
    }
}  
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-meta">#[derive(Debug)]</span>
<span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {
    <span class="cm-keyword">pub</span> <span class="cm-variable">value</span>: <span class="cm-atom">i32</span>,
    <span class="cm-keyword">pub</span> <span class="cm-variable">left</span>: <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>,
    <span class="cm-keyword">pub</span> <span class="cm-variable">right</span>: <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>,
}
</code></pre>
<p>write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a <code>null</code> value.</p>
<p>Examples:</p>
<pre><code>10
| \
1  2
=&gt; 13

1
| \
0  0
    \
     2
=&gt; 3
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Дано объект узла, представляющий бинарное дерево:</p>
<pre><code class="language-javascript"><span class="cm-comment">// пример объекта узла:</span>
<span class="cm-keyword">const</span> <span class="cm-def">node</span> <span class="cm-operator">=</span> {
<span class="cm-property">value</span>: <span class="cm-number">1</span>,

<span class="cm-property">left</span>: {<span class="cm-property">value</span>: <span class="cm-number">2</span>, <span class="cm-property">right</span>: <span class="cm-atom">null</span>, <span class="cm-property">left</span>: <span class="cm-atom">null</span>},

<span class="cm-property">right</span>: <span class="cm-atom">null</span>
};

</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">struct</span> <span class="cm-def">node</span>
{
<span class="cm-type">int</span> <span class="cm-variable">value</span>;

<span class="cm-keyword">struct</span> <span class="cm-def">node</span><span class="cm-operator">*</span> <span class="cm-variable">left</span>;

<span class="cm-keyword">struct</span> <span class="cm-def">node</span><span class="cm-operator">*</span> <span class="cm-variable">right</span>;

};

</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-keyword">struct</span> <span class="cm-def">node</span>
{

<span class="cm-type">int</span> <span class="cm-variable">value</span>;

<span class="cm-variable">node</span><span class="cm-operator">*</span> <span class="cm-variable">left</span>;

<span class="cm-variable">узел</span><span class="cm-operator">*</span> <span class="cm-variable">правый</span>;

}
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-keyword">public</span> <span class="cm-keyword">класс</span> <span class="cm-def">узел</span>
{
<span class="cm-keyword">public</span> <span class="cm-type">int</span> <span class="cm-variable">значение</span>;
<span class="cm-keyword">public</span> <span class="cm-variable">узел</span> <span class="cm-variable">левый</span>;
<span class="cm-keyword">public</span> <span class="cm-variable">Node</span> <span class="cm-variable">Right</span>;

<span class="cm-keyword">public</span> <span class="cm-variable">Node</span>(<span class="cm-type">int</span> <span class="cm-keyword">value</span>, <span class="cm-variable">Node</span> <span class="cm-variable">left</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>, <span class="cm-variable">Node</span> <span class="cm-variable">right</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>)

{
<span class="cm-variable">Value</span> <span class="cm-operator">=</span> <span class="cm-keyword">value</span>;

<span class="cm-variable">Левая</span> <span class="cm-operator">=</span> <span class="cm-variable">левая</span>;
<span class="cm-variable">Правая</span> <span class="cm-operator">=</span> <span class="cm-variable">правая</span>;

}
}
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-meta">#[derive(Debug)]</span>
<span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {
<span class="cm-keyword">pub</span> <span class="cm-variable">value</span>: <span class="cm-atom">i32</span>,

<span class="cm-keyword">pub</span> <span class="cm-variable">left</span>: <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Узел</span><span class="cm-operator">>&gt;&gt;</span>,

<span class="cm-keyword">pub</span> <span class="cm-variable">right</span>: <span class="cm-atom">Вариант</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Узел</span><span class="cm-operator">&gt;&gt;</span>,
}
</code></pre>
<p>Напишите функцию, которая возвращает сумму всех значений, включая корень. Отсутствие узла будет обозначено значением <code>null</code>.</p>
<p>Примеры:</p>
<pre><code>10
| \
1 2
=&gt; 13

1
| \
0 0
\
2
=&gt; 3
</code></pre>
</div>