<div class="markdown prose max-w-none mb-8" id="description"><p>Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.</p>
<h2 id="examples">Examples</h2>
<pre><code class="language-python"><span class="cm-variable">last</span>(<span class="cm-number">5</span>)                 <span class="cm-operator">=&gt;</span>  <span class="cm-number">5</span>
<span class="cm-variable">last</span>([<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>])      <span class="cm-operator">=&gt;</span>  <span class="cm-number">4</span>
<span class="cm-variable">last</span>(<span class="cm-string">"xyz"</span>)             <span class="cm-operator">=&gt;</span> <span class="cm-string">"z"</span>
<span class="cm-variable">last</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>)        <span class="cm-operator">=&gt;</span>  <span class="cm-number">4</span>
<span class="cm-variable">last</span>([<span class="cm-number">1</span>, <span class="cm-number">2</span>], [<span class="cm-number">3</span>, <span class="cm-number">4</span>])    <span class="cm-operator">=&gt;</span>  [<span class="cm-number">3</span>, <span class="cm-number">4</span>]
<span class="cm-variable">last</span>([[<span class="cm-number">1</span>, <span class="cm-number">2</span>], [<span class="cm-number">3</span>, <span class="cm-number">4</span>]])  <span class="cm-operator">=&gt;</span>  [<span class="cm-number">3</span>, <span class="cm-number">4</span>]
</code></pre>
<p>(courtesy of <a href="http://www.haskell.org/haskellwiki/99_questions/1_to_10" data-turbolinks="false" target="_blank">haskell.org</a>)</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Найдите последний элемент заданного(ых) аргумента(ов). Если передан единственный аргумент, являющийся списком/массивом или строкой, верните его последний элемент. Гарантируется, что будет как минимум один аргумент и что массивы/списки/строки с одним аргументом не будут пустыми.</p>
<h2 id="examples">Примеры</h2>
<pre><code class="language-python"><span class="cm-variable">last</span>(<span class="cm-number">5</span>) <span class="cm-operator">=&gt;</span> <span class="cm-number">5</span>
<span class="cm-variable">last</span>([<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>]) <span class="cm-operator">=&gt;</span> <span class="cm-number">4</span>
<span class="cm-variable">last</span>(<span class="cm-string">"xyz"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-string">"z"</span>
<span class="cm-variable">last</span>(<span class="cm-number">1</span>, <span class="cm-number">2</span>, <span class="cm-number">3</span>, <span class="cm-number">4</span>) <span class="cm-operator">=&gt;</span> <span class="cm-number">4</span>
<span class="cm-variable">last</span>([<span class="cm-number">1</span>, <span class="cm-number">2</span>], [<span class="cm-number">3</span>, <span class="cm-number">4</span>]) <span class="cm-operator">=&gt;</span> [<span class="cm-number">3</span>, <span class="cm-number">4</span>]
<span class="cm-variable">last</span>([[<span class="cm-number">1</span>, <span class="cm-number">2</span>], [<span class="cm-number">3</span>, <span class="cm-number">4</span>]]) <span class="cm-operator">=&gt;</span> [<span class="cm-number">3</span>, <span class="cm-number">4</span>]
</code></pre>
<p>(предоставлено <a href="http://www.haskell.org/haskellwiki/99_questions/1_to_10" data-turbolinks="false" target="_blank">haskell.org</a>)</p>
</div>