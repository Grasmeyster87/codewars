<div class="markdown prose max-w-none mb-8" id="description"><p>Things like blog posts and CMS pages have titles. But they're accessed through urls. Titles can have old character in them. They can even be exactly the same as another one. So the back-end has to simplify those titles to be valid for a url at all, while still making sure they stay unique.</p>
<p>Write the function <code>simunq</code> (catchy, right?) so that it converts the given original string and returns it with all the weird, disallowed characters replaced by a "wildcard."</p>
<p>Here, the allowed characters are all english lowercase and uppercase characters, all digits, the space character, and the wildcard... the wildcard being a dash <code>-</code>.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"blah?"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-"</span>;
</code></pre>
<p>But at the same time, two urls must never overlap. So if it's the same as an already-used simunq string, tag a <code>-n</code> to the end of it, <code>n</code> being the number of identical strings that came before it, plus 1 for the current string.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"blah"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"blah"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-2"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"blah-2"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-2-2"</span>;
</code></pre>
<p>And, just so we can test a little easier, add a <code>reset</code> method to the <code>simunq</code> function. After this has been called, all the previously created simunq strings should be ignored.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string-2"</span>;
<span class="cm-variable">simunq</span>.<span class="cm-property">reset</span>();
<span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string"</span>;
</code></pre>
<p>Have fun~!</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>У таких элементов, как записи в блоге или страницы CMS, есть заголовки, однако доступ к ним осуществляется через URL-адреса. Заголовки могут содержать самые разные символы, а иногда и вовсе совпадать друг с другом. Поэтому бэкенд должен преобразовывать эти заголовки так, чтобы они были допустимы для использования в URL, сохраняя при этом их уникальность.</p>
<p>Напишите функцию <code>simunq</code> (звучит броско, не правда ли?), которая принимает исходную строку и возвращает её, заменяя все «нежелательные» (недопустимые) символы на специальный символ-заполнитель.</p>
<p>В данном случае допустимыми символами являются строчные и прописные латинские буквы, цифры, пробел и символ-заполнитель — дефис <code>-</code>.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"blah?"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-"</span>;
</code></pre>
<p>Кроме того, URL-адреса не должны дублироваться. Если полученная строка уже существует, к ней следует добавить суффикс <code>-n</code>, где <code>n</code> — это количество таких же строк, встретившихся ранее, плюс 1 для текущей строки.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"blah"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"blah"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-2"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"blah-2"</span>) <span class="cm-operator">==</span> <span class="cm-string">"blah-2-2"</span>;
</code></pre>
<p>А чтобы упростить тестирование, добавим в функцию <code>simunq</code> метод <code>reset</code>. После его вызова все ранее созданные строки <code>simunq</code> должны перестать учитываться.</p>
<pre><code class="language-javascript"><span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string"</span>;
<span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string-2"</span>;
<span class="cm-variable">simunq</span>.<span class="cm-property">reset</span>();
<span class="cm-variable">simunq</span>(<span class="cm-string">"string"</span>) <span class="cm-operator">==</span> <span class="cm-string">"string"</span>;
</code></pre>
<p>Удачи~!</p>
</div>