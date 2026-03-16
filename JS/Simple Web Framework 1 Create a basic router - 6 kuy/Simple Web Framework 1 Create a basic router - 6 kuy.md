<div class="markdown prose max-w-none mb-8" id="description"><p>In this Kata, you have to design a simple routing class for a web framework.</p>
<p>The router should accept bindings for a given url, http method and an action. </p>
<p>Then, when a request with a bound url and method comes in, it should return the result of the action.</p>
<p>Example usage:</p>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>, <span class="cm-keyword">lambda</span>: <span class="cm-string">'hello world'</span>)

<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>) <span class="cm-operator">/</span><span class="cm-operator">/</span> <span class="cm-variable">returns</span> <span class="cm-string">'hello world'</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>;
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>, <span class="cm-keyword">function</span>(){ <span class="cm-keyword">return</span> <span class="cm-string">'hello world'</span>; });

<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>) <span class="cm-comment">// returns 'hello world';</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">router</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>
<span class="cm-variable">router</span><span class="cm-punctuation">.</span><span class="cm-property">bind</span> <span class="cm-string">'/hello'</span><span class="cm-punctuation">,</span> <span class="cm-string">'GET'</span><span class="cm-punctuation">,</span> <span class="cm-operator">-&gt;</span> <span class="cm-string">'hello world'</span>

<span class="cm-variable">router</span><span class="cm-punctuation">.</span><span class="cm-property">runRequest</span> <span class="cm-string">'/hello'</span><span class="cm-punctuation">,</span> <span class="cm-string">'GET'</span> <span class="cm-comment"># returns 'hello world'</span>
</code></pre>
<pre style="display: none;"><code class="language-groovy"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>, { -&gt; <span class="cm-string">"hello world"</span> })
<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>)  <span class="cm-comment">// returns "hello world"</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-variable">bind</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>, () <span class="cm-operator">=&gt;</span> <span class="cm-string">"hello world"</span>)
<span class="cm-variable">router</span>.<span class="cm-variable">runRequest</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>)  <span class="cm-comment">// returns "hello world"</span>
</code></pre>
<p>When asked for a route that doesn't exist, router should return:</p>
<pre><code class="language-javascript"><span class="cm-string">'Error 404: Not Found'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-string">'Error 404: Not Found'</span>
</code></pre>
<pre style="display: none;"><code class="language-groovy"><span class="cm-string">"Error 404: Not Found"</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-string">"Error 404: Not Found"</span>
</code></pre>
<p>The router should also handle modifying existing routes. See the example tests for more details.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>В этом задании вам нужно разработать простой класс маршрутизации для веб-фреймворка.</p>
<p>Маршрутизатор должен принимать привязки для заданного URL-адреса, метода HTTP и действия.</p> </p>
<p>Затем, когда поступает запрос с привязанным URL-адресом и методом, он должен вернуть результат действия.</p>
<p>Пример использования:</p>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>, <span class="cm-keyword">lambda</span>: <span class="cm-string">'hello world'</span>)

<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>) <span class="cm-operator">/</span><span class="cm-operator">/</span> <span class="cm-variable">returns</span> <span class="cm-string">'hello world'</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>;
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>, <span class="cm-keyword">function</span>(){ <span class="cm-keyword">return</span> <span class="cm-string">'hello world'</span>; });

<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">'/hello'</span>, <span class="cm-string">'GET'</span>) <span class="cm-comment">// возвращает 'hello world';</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">router</span> <span class="cm-punctuation">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>
<span class="cm-variable">router</span><span class="cm-punctuation">.</span><span class="cm-property">bind</span> <span class="cm-string">'/hello'</span><span class="cm-punctuation">,</span> <span class="cm-string">'GET'</span><span class="cm-punctuation">,</span> <span class="cm-operator">-&gt;</span> <span class="cm-string">'hello world'</span>

<span class="cm-variable">router</span><span class="cm-punctuation">.</span><span class="cm-property">runRequest</span> <span class="cm-string">'/hello'</span><span class="cm-punctuation">,</span> <span class="cm-string">'GET'</span> <span class="cm-comment"># returns 'hello world'</span>
</code></pre>
<pre style="display: нет;"><code class="language-groovy"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-property">bind</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>, { -&gt; <span class="cm-string">"hello world"</span> })
<span class="cm-variable">router</span>.<span class="cm-property">runRequest</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>) <span class="cm-comment">// возвращает "hello world"</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-variable">router</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Router</span>()
<span class="cm-variable">router</span>.<span class="cm-variable">bind</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>, () <span class="cm-operator">=&gt;</span> <span class="cm-string">"hello" мир"</span>)
<span class="cm-variable">router</span>.<span class="cm-variable">runRequest</span>(<span class="cm-string">"/hello"</span>, <span class="cm-string">"GET"</span>) <span class="cm-comment">// возвращает "hello world"</span>
</code></pre>
<p>При запросе несуществующего маршрута маршрутизатор должен вернуть:</p>
<pre><code class="language-javascript"><span class="cm-string">'Ошибка 404: Не найдено'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-string">'Ошибка 404: Не найдено'</span>
</code></pre>
<pre style="display: none;"><code class="language-groovy"><span class="cm-string">"Ошибка 404: Не найдено"</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-string">"Ошибка 404: Не найдено"</span>
</code></pre>
<p>Маршрутизатор также должен обрабатывать изменение существующих маршрутов. Подробнее см. примеры тестов.</p>
</div>

Ось реалізація класу `Router` для простого веб-фреймворку на JavaScript, з урахуванням усіх вимог:

```javascript
// File: Simple Web Framework 1 Create a basic router - 6 kuy.js

/**
 * Клас маршрутизатора для веб-фреймворку.
 * Він дозволяє прив'язувати URL-адреси, HTTP-методи та функції-дії.
 */
let Router = function() {
    // Створюємо об'єкт для зберігання маршрутів
    this.routes = {};
};

/**
 * Прив'язує URL-адресу, HTTP-метод та функцію-дію.
 * Якщо маршрут вже існує, він буде перезаписаний.
 * 
 * @param {string} url - URL-адреса для прив'язки
 * @param {string} method - HTTP-метод (GET, POST і т.д.)
 * @param {function} action - Функція, яка виконується при запиті
 */
Router.prototype.bind = function(url, method, action) {
    // Якщо ще не існує об'єкта для цієї URL-адреси, створюємо його
    if (!this.routes[url]) {
        this.routes[url] = {};
    }
    
    // Прив'язуємо метод до функції
    this.routes[url][method] = action;
};

/**
 * Виконує запит до маршруту.
 * Якщо маршрут існує, викликається відповідна функція.
 * Якщо маршрут не знайдено, повертається повідомлення про помилку.
 * 
 * @param {string} url - URL-адреса запиту
 * @param {string} method - HTTP-метод запиту
 * @return {string|*} Результат виконання дії або повідомлення про помилку
 */
Router.prototype.runRequest = function(url, method) {
    // Перевіряємо, чи існує URL-адреса та метод
    if (this.routes[url] && this.routes[url][method]) {
        // Викликаємо функцію дії та повертаємо результат
        return this.routes[url][method]();
    }
    
    // Якщо маршрут не знайдено, повертаємо помилку
    return 'Error 404: Not Found';
};

module.exports = Router;
```

### Пояснення:

1. **Конструктор `Router()`**:
   - Створює порожній об'єкт `this.routes`, який буде зберігати всі прив'язки маршрутів.

2. **Метод `bind(url, method, action)`**:
   - Дозволяє прив'язати URL-адресу, HTTP-метод та функцію.
   - Якщо для даної URL-адреси ще немає записів, створюється новий об'єкт.
   - Зберігає функцію за відповідним методом.

3. **Метод `runRequest(url, method)`**:
   - Перевіряє, чи існує маршрут з вказаним URL та методом.
   - Якщо так — викликає функцію дії та повертає результат.
   - Якщо ні — повертає повідомлення про помилку "Error 404: Not Found".

Ця реалізація повністю відповідає тестам і може обробляти різні сценарії:
- Обробка GET/POST запитів
- Повторна прив'язка (перезапис) існуючих маршрутів
- Повернення помилки для неіснуючих маршрутів