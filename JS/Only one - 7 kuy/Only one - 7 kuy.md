<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Task: Write function <code>only_one</code> which return <code>True</code> if ONLY ONE of the boolean flag is <code>True</code>, otherwise return <code>False</code>. If there are no boolean flag, return <code>False</code></p>
<pre><code class="language-javascript">  <span class="cm-variable">onlyOne</span>() <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>
  <span class="cm-variable">onlyOne</span>(<span class="cm-atom">true</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">true</span>
  <span class="cm-variable">onlyOne</span>(<span class="cm-atom">true</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>, <span class="cm-atom">true</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>
  <span class="cm-variable">onlyOne</span>(<span class="cm-atom">false</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>  
</code></pre>
<pre style="display: none;"><code class="language-python">  <span class="cm-variable">only_one</span>() <span class="cm-operator">==</span> <span class="cm-keyword">False</span>
  <span class="cm-variable">only_one</span>(<span class="cm-keyword">True</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>) <span class="cm-operator">==</span> <span class="cm-keyword">True</span>
  <span class="cm-variable">only_one</span>(<span class="cm-keyword">True</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">True</span>) <span class="cm-operator">==</span> <span class="cm-keyword">False</span>
  <span class="cm-variable">only_one</span>(<span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>) <span class="cm-operator">==</span> <span class="cm-keyword">False</span>  
</code></pre>
</div>

<br><hr><br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Задача: Напишите функцию <code>only_one</code>, которая возвращает <code>True</code>, если ТОЛЬКО ОДИН из логических флагов равен <code>True</code>, в противном случае возвращает <code>False</code>. Если логический флаг отсутствует, вернуть <code>False</code></p>
<pre><code class="language-javascript"> <span class="cm-variable">onlyOne</span>() <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>
<span class="cm-variable">onlyOne</span>(<span class="cm-atom">true</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">true</span>
<span class="cm-variable">onlyOne</span>(<span class="cm-atom">true</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>, <span class="cm-atom">true</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>
<span class="cm-variable">onlyOne</span>(<span class="cm-atom">false</span>, <span class="cm-atom">false</span>, <span class="cm-atom">false</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">false</span>
</code></pre>
<pre style="display: none;"><code class="language-python"> <span class="cm-variable">only_one</span>() <span class="cm-operator">==</span> <span class="cm-keyword">False</span>
<span class="cm-variable">only_one</span>(<span class="cm-keyword">True</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>) <span class="cm-operator">==</span> <span class="cm-keyword">True</span>
<span class="cm-variable">only_one</span>(<span class="cm-keyword">True</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">True</span>) <span class="cm-operator">==</span> <span class="cm-keyword">False</span>
<span class="cm-variable">only_one</span>(<span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>, <span class="cm-keyword">False</span>) <span class="cm-operator">==</span> <span class="cm-keyword">False</span>
</code></pre>
</div>