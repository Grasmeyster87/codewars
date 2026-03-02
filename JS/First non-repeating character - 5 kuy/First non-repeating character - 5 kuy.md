<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.</p>
<p>For example, if given the input <code>"stress"</code>, the function should return <code>'t'</code>, since the letter <em>t</em> only occurs once in the string, and occurs first in the string.</p>
<p>As an added challenge, upper- and lowercase characters are considered the <strong>same character</strong>, but the function should return the correct case <strong>for the initial character</strong>.  For example, the input <code>"sTreSS"</code> should return <code>"T"</code>.</p>
<p>If a string contains <em>only repeating characters</em>, return an empty string (<code>""</code>);</p>
<p>Note: despite its name in some languages, your function should handle any Unicode codepoint:</p>
<pre><code class="language-java"><span class="cm-string">"@#@@*"</span>    <span class="cm-operator">--&gt;</span> <span class="cm-string">"#"</span>
<span class="cm-string">"かか何"</span>   <span class="cm-operator">--&gt;</span> <span class="cm-string">"何"</span>
<span class="cm-string">"🐐🦊🐐"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"🦊"</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Напишите функцию, которая принимает на вход строку и возвращает первый символ, который нигде в строке не повторяется.</p>
<p>Например, если на вход подается <code>"стресс"</code>, функция должна вернуть <code>'t'</code>, поскольку буква <em>t</em> встречается в строке только один раз и стоит первой.</p>
<p>В качестве дополнительной сложности, символы верхнего и нижнего регистра считаются <strong>одним и тем же символом</strong>, но функция должна возвращать правильный регистр <strong>начального символа</strong>. Например, входной параметр <code>"sTreSS"</code> должен возвращать <code>"T"</code>.</p>
<p>Если строка содержит <em>только повторяющиеся символы</em>, верните пустую строку (<code>""</code>);</p>
<p>Примечание: несмотря на свое название в некоторых языках, ваша функция должна обрабатывать любую кодовую точку Unicode:</p>
<pre><code class="language-java"><span class="cm-string">"@#@@*"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"#"</span>
<span class="cm-string">"かか何"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"何"</span>
<span class="cm-string">"🐐🦊🐐"</span> <span class="cm-operator">--&gt;</span> <span class="cm-string">"🦊"</span>
</code></pre>
</div>
