<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Description:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Write a function called  that takes 3 values. The first and third values are numbers. The second value is a character.</p>
<ul>
<li>If the character is <code>"+"</code> , <code>"-"</code>, <code>"*"</code>, or <code>"/"</code>, the function will return the result of the corresponding mathematical function on the two numbers.</li>
<li>If the string is not one of the specified characters, the function should return null (throw an <code>ArgumentException</code> in C#).</li>
<li>Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return <code>null</code> / <code>None</code> (Python) / throw an <code>ArgumentException</code> (C#).</li>
</ul>
<pre><code class="language-javascript">(<span class="cm-number">2</span>,<span class="cm-string">"+"</span>, <span class="cm-number">4</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">6</span>
(<span class="cm-number">6</span>,<span class="cm-string">"-"</span>, <span class="cm-number">1.5</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">4.5</span>
(<span class="cm-operator">-</span><span class="cm-number">4</span>,<span class="cm-string">"*"</span>, <span class="cm-number">8</span>) <span class="cm-operator">--&gt;</span> <span class="cm-operator">-</span><span class="cm-number">32</span>
(<span class="cm-number">49</span>,<span class="cm-string">"/"</span>, <span class="cm-operator">-</span><span class="cm-number">7</span>) <span class="cm-operator">--&gt;</span> <span class="cm-operator">-</span><span class="cm-number">7</span>
(<span class="cm-number">8</span>,<span class="cm-string">"m"</span>, <span class="cm-number">2</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">null</span>
(<span class="cm-number">4</span>,<span class="cm-string">"/"</span>,<span class="cm-number">0</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">null</span>
</code></pre>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div></div></div></div>

<br> <hr> <br>

<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Описание:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Напишите функцию, которая принимает 3 значения. Первое и третье значения — числа. Второе значение — символ.</p>
<ul>
<li>Если символ — <code>"+"</code> , <code>"-"</code>, <code>"*"</code> или <code>"/"</code>, функция вернет результат соответствующей математической функции над двумя числами.</li>
<li>Если строка не является одним из указанных символов, функция должна вернуть null (в C# следует выбросить исключение <code>ArgumentException</code>).</li>
<li>Помните, что деление на ноль невозможно. Если будет предпринята попытка деления на ноль, верните <code>null</code> / <code>None</code> (Python) / выбросьте <code>ArgumentException</code> (C#).</li>
</ul>
<pre><code class="language-javascript">(<span class="cm-number">2</span>,<span class="cm-string">"+"</span>, <span class="cm-number">4</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">6</span>
(<span class="cm-number">6</span>,<span class="cm-string">"-"</span>, <span class="cm-number">1.5</span>) <span class="cm-operator">--&gt;</span> <span class="cm-number">4.5</span>
(<span class="cm-operator">-</span><span class="cm-number">4</span>,<span class="cm-string">"*"</span>, <span class="cm-number">8</span>) <span class="cm-operator">--&gt;</span> <span class="cm-operator">-</span><span class="cm-number">32</span>
(<span class="cm-number">49</span>,<span class="cm-string">"/"</span>, <span class="cm-operator">-</span><span class="cm-number">7</span>) <span class="cm-operator">--&gt;</span> <span class="cm-operator">-</span><span class="cm-number">7</span>
(<span class="cm-number">8</span>,<span class="cm-string">"m"</span>, <span class="cm-number">2</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">null</span>
(<span class="cm-number">4</span>,<span class="cm-string">"/"</span>,<span class="cm-number">0</span>) <span class="cm-operator">--&gt;</span> <span class="cm-atom">null</span>
</code></pre>
</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Основы</div></div></div></div>