<div class="markdown prose max-w-none mb-8" id="description"><p>A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.</p>
<p>E.g.</p>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">abc1</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>;
<span class="cm-keyword">var</span> <span class="cm-def">abc2</span> <span class="cm-operator">=</span> <span class="cm-string">"etaoinshrdlucmfwypvbgkjqxz"</span>;
   
<span class="cm-keyword">var</span> <span class="cm-def">sub</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">SubstitutionCipher</span>(<span class="cm-variable">abc1</span>, <span class="cm-variable">abc2</span>);
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"abc"</span>) <span class="cm-comment">// =&gt; "eta"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"xyz"</span>) <span class="cm-comment">// =&gt; "qxz"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"aeiou"</span>) <span class="cm-comment">// =&gt; "eirfg"</span>
   
<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eta"</span>) <span class="cm-comment">// =&gt; "abc"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"qxz"</span>) <span class="cm-comment">// =&gt; "xyz"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eirfg"</span>) <span class="cm-comment">// =&gt; "aeiou"</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">map1</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>;
<span class="cm-variable">map2</span> <span class="cm-operator">=</span> <span class="cm-string">"etaoinshrdlucmfwypvbgkjqxz"</span>;
   
<span class="cm-variable">cipher</span> <span class="cm-operator">=</span> <span class="cm-variable">Cipher</span>(<span class="cm-variable">map1</span>, <span class="cm-variable">map2</span>);
<span class="cm-variable">cipher</span>.<span class="cm-property">encode</span>(<span class="cm-string">"abc"</span>) <span class="cm-comment"># =&gt; "eta"</span>
<span class="cm-variable">cipher</span>.<span class="cm-property">encode</span>(<span class="cm-string">"xyz"</span>) <span class="cm-comment"># =&gt; "qxz"</span>
<span class="cm-variable">cipher</span>.<span class="cm-property">encode</span>(<span class="cm-string">"aeiou"</span>) <span class="cm-comment"># =&gt; "eirfg"</span>
   
<span class="cm-variable">cipher</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eta"</span>) <span class="cm-comment"># =&gt; "abc"</span>
<span class="cm-variable">cipher</span>.<span class="cm-property">decode</span>(<span class="cm-string">"qxz"</span>) <span class="cm-comment"># =&gt; "xyz"</span>
<span class="cm-variable">cipher</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eirfg"</span>) <span class="cm-comment"># =&gt; "aeiou"</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-keyword">let</span> <span class="cm-def">map1</span> <span class="cm-operator">=</span> <span class="cm-string">"</span><span class="cm-string">abcdefghijklmnopqrstuvwxyz</span><span class="cm-string">"</span>;
<span class="cm-keyword">let</span> <span class="cm-def">map2</span> <span class="cm-operator">=</span> <span class="cm-string">"</span><span class="cm-string">etaoinshrdlucmfwypvbgkjqxz</span><span class="cm-string">"</span>;
   
<span class="cm-keyword">let</span> <span class="cm-def">cipher</span> <span class="cm-operator">=</span> <span class="cm-variable">Cipher</span>::<span class="cm-variable">new</span>(<span class="cm-variable">map1</span>, <span class="cm-variable">map2</span>);
<span class="cm-variable">cipher</span>.<span class="cm-variable">encode</span>(<span class="cm-string">"</span><span class="cm-string">abc</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "eta"</span>
<span class="cm-variable">cipher</span>.<span class="cm-variable">encode</span>(<span class="cm-string">"</span><span class="cm-string">xyz</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "qxz"</span>
<span class="cm-variable">cipher</span>.<span class="cm-variable">encode</span>(<span class="cm-string">"</span><span class="cm-string">aeiou</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "eirfg"</span>
   
<span class="cm-variable">cipher</span>.<span class="cm-variable">decode</span>(<span class="cm-string">"</span><span class="cm-string">eta</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "abc"</span>
<span class="cm-variable">cipher</span>.<span class="cm-variable">decode</span>(<span class="cm-string">"</span><span class="cm-string">qxz</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "xyz"</span>
<span class="cm-variable">cipher</span>.<span class="cm-variable">decode</span>(<span class="cm-string">"</span><span class="cm-string">eirfg</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "aeiou"</span>
</code></pre>
<p>If a character provided is not in the opposing alphabet, simply leave it as be.</p>
</div>

<div class="markdown prose max-w-none mb-8" id="description"><p>Простой шифр замены заменяет один символ из алфавита символом из альтернативного алфавита, при этом позиция каждого символа в алфавите сопоставляется с альтернативным алфавитом для кодирования или декодирования.</p>
<p>Например</p>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">abc1</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>;

<span class="cm-keyword">var</span> <span class="cm-def">abc2</span> <span class="cm-operator">=</span> <span class="cm-string">"etaoinshrdlucmfwypvbgkjqxz"</span>;

<span class="cm-keyword">var</span> <span class="cm-def">sub</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">SubstitutionCipher</span>(<span class="cm-variable">abc1</span>, <span class="cm-variable">abc2</span>);
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"abc"</span>) <span class="cm-comment">// =&gt; "eta"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"xyz"</span>) <span class="cm-comment">// =&gt; "qxz"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">encode</span>(<span class="cm-string">"aeiou"</span>) <span class="cm-comment">// =&gt; "eirfg"</span>

<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eta"</span>) <span class="cm-comment">// =&gt; "abc"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"qxz"</span>) <span class="cm-comment">// =&gt; "xyz"</span>
<span class="cm-variable">sub</span>.<span class="cm-property">decode</span>(<span class="cm-string">"eirfg"</span>) <span class="cm-comment">// =&gt; "aeiou"</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">map1</span> <span class="cm-operator">=</span> <span class="cm-string">"abcdefghijklmnopqrstuvwxyz"</span>;

<span class="cm-variable">map2</span> <span class="cm-operator">=</span> <span class="cm-string">"etaoinshrdlucmfwypvbgkjqxz"</span>;

<span class="cm-variable">шифр</span> <span class="cm-operator">=</span> <span class="cm-variable">шифр</span>(<span class="cm-variable">map1</span>, <span class="cm-variable">map2</span>);
<span class="cm-variable">шифр</span>.<span class="cm-property">кодирование</span>(<span class="cm-string">"abc"</span>) <span class="cm-comment"># =&gt; "eta"</span>
<span class="cm-variable">шифр</span>.<span class="cm-property">кодирование</span>(<span class="cm-string">"xyz"</span>) <span class="cm-comment"># =&gt; "qxz"</span>
<span class="cm-variable">шифр</span>.<span class="cm-property">кодировать</span>(<span class="cm-string">"aeiou"</span>) <span class="cm-comment"># =&gt; "eirfg"</span>

<span class="cm-variable">шифр</span>.<span class="cm-property">декодировать</span>(<span class="cm-string">"eta"</span>) <span class="cm-comment"># =&gt; "abc"</span>
<span class="cm-variable">шифр</span>.<span class="cm-property">декодировать</span>(<span class="cm-string">"qxz"</span>) <span class="cm-comment"># =&gt; "xyz"</span>
<span class="cm-variable">шифр</span>.<span class="cm-property">декодировать</span>(<span class="cm-string">"eirfg"</span>) <span class="cm-comment"># =&gt; "aeiou"</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-keyword">let</span> <span class="cm-def">map1</span> <span class="cm-operator">=</span> <span class="cm-string">"</span><span class="cm-string">abcdefghijklmnopqrstuvwxyz</span><span class="cm-string">"</span>;

<span class="cm-keyword">let</span> <span class="cm-def">map2</span> <span class="cm-operator">=</span> <span class="cm-string">"</span><span class="cm-string">etaoinshrdlucmfwypvbgkjqxz</span><span class="cm-string">"</span>;

<span class="cm-keyword">let</span> <span class="cm-def">cipher</span> <span class="cm-operator">=</span> <span class="cm-variable">Cipher</span>::<span class="cm-variable">new</span>(<span class="cm-variable">map1</span>, <span class="cm-variable">map2</span>);
<span class="cm-variable">шифр</span>.<span class="cm-variable">кодировать</span>(<span class="cm-string">"</span><span class="cm-string">abc</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "eta"</span>
<span class="cm-variable">шифр</span>.<span class="cm-variable">кодировать</span>(<span class="cm-string">"</span><span class="cm-string">xyz</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "qxz"</span>
<span class="cm-variable">шифр</span>.<span class="cm-variable">кодировать</span>(<span class="cm-string">"</span><span class="cm-string">aeiou</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "eirfg"</span>

<span class="cm-variable">шифр</span>.<span class="cm-переменная">декодировать</span>(<span class="cm-string">"</span><span class="cm-string">эта</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "abc"</span>
<span class="cm-variable">шифр</span>.<span class="cm-variable">декодировать</span>(<span class="cm-string">"</span><span class="cm-string">qxz</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "xyz"</span>
<span class="cm-variable">шифр</span>.<span class="cm-variable">декодировать</span>(<span class="cm-string">"</span><span> class="cm-string">eirfg</span><span class="cm-string">"</span>) <span class="cm-comment">// =&gt; "aeiou"</span>
</code></pre>
<p>Если указанный символ отсутствует в противоположном алфавите, просто оставьте его как есть.</p>
</div>