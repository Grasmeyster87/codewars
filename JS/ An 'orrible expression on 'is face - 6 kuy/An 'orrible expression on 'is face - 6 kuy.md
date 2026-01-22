<div class="markdown prose max-w-none mb-8" id="description"><p>This regular expression is supposed to create an 'orrifically inaccurate Cockney translation of any given string. However, there's something wrong with it.</p>
<p>For example, given the string</p>
<pre><code class="language-javascript"><span class="cm-variable">hello</span> <span class="cm-variable">there</span>
</code></pre>
<p>it should return the value</p>
<pre><code>`ello there
</code></pre>
<p>but instead it's returning</p>
<pre><code>Hello t`ere
</code></pre>
<p>Can you fix it?</p>
</div>