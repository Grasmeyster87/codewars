<div class="markdown prose max-w-none mb-8" id="description"><p>Create a basic UriBuilder object that will be used specifically to build query params on an existing URI. It should support a params property and a build method. It will handle the URL having pre-existing params that need to be managed. The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")</p>
<p>Examples of how the builder will be used:</p>
<pre><code class="language-javascript">
<span class="cm-keyword">var</span> <span class="cm-def">builder</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span>(<span class="cm-string">'http://www.codewars.com'</span>)
<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>
<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">language</span> <span class="cm-operator">=</span> <span class="cm-string">'javascript'</span>

<span class="cm-comment">// new builder instance to demonstrate pre-existing params.</span>
<span class="cm-variable">builder</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span>(<span class="cm-string">'http://www.codewars.com?page=1'</span>)

<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>
<span class="cm-comment">// should return 'http://www.codewars.com?page=2'</span>
<span class="cm-variable">builder</span>.<span class="cm-property">build</span>()

<span class="cm-comment">// if you delete params then they will disappear from the url string</span>
<span class="cm-keyword">delete</span> <span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span>

<span class="cm-comment">// should return 'http://www.codewars.com'</span>
<span class="cm-variable">builder</span>.<span class="cm-property">build</span>()
</code></pre>

<pre style="display: none;"><code class="language-coffeescript">
<span class="cm-variable">builder</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span><span class="cm-punctuation">(</span><span class="cm-string">'http://www.codewars.com'</span><span class="cm-punctuation">)</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span> <span class="cm-punctuation">=</span> <span class="cm-number">1</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">language</span> <span class="cm-punctuation">=</span> <span class="cm-string">'javascript'</span>

<span class="cm-comment"># should return 'http://www.codewars.com?page=1&amp;language=javascript'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span> 

<span class="cm-comment"># new builder instance to demonstrate pre-existing params.</span>
<span class="cm-variable">builder</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span><span class="cm-punctuation">(</span><span class="cm-string">'http://www.codewars.com?page=1'</span><span class="cm-punctuation">)</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span> <span class="cm-punctuation">=</span> <span class="cm-number">2</span>

<span class="cm-comment"># should return 'http://www.codewars.com?page=2'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span>

<span class="cm-comment"># if you delete params then they will disappear from the url string</span>
<span class="cm-keyword">delete</span> <span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span>

<span class="cm-comment"># should return 'http://www.codewars.com'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span>
</code></pre>
<p><strong>Note:</strong> For extra style points you can have your solution handle array values as query parameters, however there are no tests that explicitly test for them. </p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Создайте базовый объект UriBuilder, который будет использоваться специально для формирования параметров запроса для существующего URI. Он должен поддерживать свойство params и метод build. Он будет обрабатывать URL-адреса с уже существующими параметрами, которые необходимо управлять. URL должен быть правильно закодирован (т.е. "a b" следует закодировать как "a%20b")</p>
<p>Примеры использования построителя:</p>
<pre><code class="language-javascript">
<span class="cm-keyword">var</span> <span class="cm-def">builder</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span>(<span class="cm-string">'http://www.codewars.com'</span>)
<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span> <span class="cm-operator">=</span> <span class="cm-number">1</span>
<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">language</span> <span class="cm-operator">=</span> <span class="cm-string">'javascript'</span>

<span class="cm-comment">// новый экземпляр builder для демонстрации существующих параметров.</span>
<span class="cm-variable">builder</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span>(<span class="cm-string">'http://www.codewars.com?page=1'</span>)

<span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span> <span class="cm-operator">=</span> <span class="cm-number">2</span>
<span class="cm-comment">// должен возвращать 'http://www.codewars.com?page=2'</span>
<span class="cm-variable">builder</span>.<span class="cm-property">build</span>()

<span class="cm-comment">// если вы удалите параметры, они исчезнут из строки URL</span>
<span class="cm-keyword">delete</span> <span class="cm-variable">builder</span>.<span class="cm-property">params</span>.<span class="cm-property">page</span>

<span class="cm-comment">// должен возвращать 'http://www.codewars.com'</span>
<span class="cm-variable">builder</span>.<span class="cm-property">build</span>()
</code></pre>

<pre style="display: none;"><code class="language-coffeescript">
<span class="cm-variable">builder</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span><span class="cm-punctuation">(</span><span class="cm-string">'http://www.codewars.com'</span><span class="cm-punctuation">)</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span> <span class="cm-punctuation">=</span> <span class="cm-number">1</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">language</span> <span class="cm-punctuation">=</span> <span class="cm-string">'javascript'</span>

<span class="cm-comment"># should return 'http://www.codewars.com?page=1&amp;language=javascript'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span>

<span class="cm-comment"># новый экземпляр builder для демонстрации существующих параметров.</span>
<span class="cm-variable">builder</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">UriBuilder</span><span class="cm-punctuation">(</span><span class="cm-string">'http://www.codewars.com?page=1'</span><span class="cm-punctuation">)</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span> <span class="cm-punctuation">=</span> <span class="cm-number">2</span>

<span class="cm-comment"># should return 'http://www.codewars.com?page=2'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span>

<span class="cm-comment"># если вы удалите параметры, они исчезнут из строки URL</span>
<span class="cm-keyword">удалить</span> <span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">params</span><span class="cm-punctuation">.</span><span class="cm-property">page</span>

<span class="cm-comment"># должен возвращать 'http://www.codewars.com'</span>
<span class="cm-variable">builder</span><span class="cm-punctuation">.</span><span class="cm-property">build</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span>
</code></pre>
<p><strong>Примечание:</strong> Для дополнительных стильных баллов вы можете сделать ваше решение h В качестве параметров запроса можно использовать значения массивов, однако нет тестов, которые бы явно проверяли их наличие.
</p>
</div>



Так, саме так — **`encodeURIComponent`** і **`decodeURIComponent`** це вбудовані функції JavaScript для роботи з рядками у URL.

🔹 **`encodeURIComponent(str)`**  
Перетворює рядок у безпечний формат для використання в URL. Вона замінює пробіли, спеціальні символи (`?`, `&`, `=`, `#` тощо) на їх закодовані значення.  
Наприклад:
```js
encodeURIComponent("a b")   // "a%20b"
encodeURIComponent("x=y&z") // "x%3Dy%26z"
```

🔹 **`decodeURIComponent(str)`**  
Робить зворотне — бере закодований рядок і повертає його у нормальний вигляд.  
Наприклад:
```js
decodeURIComponent("a%20b")   // "a b"
decodeURIComponent("x%3Dy%26z") // "x=y&z"
```

### Чому вони потрібні?
У URL параметри можуть містити пробіли чи спецсимволи, які не можна залишати «як є».  
Наприклад, якщо ти хочеш передати параметр `language = "java script"`, то без кодування вийде:
```
http://site.com?language=java script
```
А це некоректний URL.  
Завдяки `encodeURIComponent` він стане:
```
http://site.com?language=java%20script
```

А коли ти читаєш параметри назад, щоб отримати їх у нормальному вигляді, використовуєш `decodeURIComponent`.

---

Хочеш, я покажу маленький приклад, як саме ці функції працюють у твоєму класі `UriBuilder` на конкретному кейсі з пробілами?
