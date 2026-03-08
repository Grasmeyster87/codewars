<div class="markdown prose max-w-none mb-8" id="description"><p>We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:</p>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">callbacks</span> <span class="cm-operator">=</span> <span class="cm-variable">createFunctions</span>(<span class="cm-number">5</span>); <span class="cm-comment">// create an array, containing 5 functions</span>

<span class="cm-variable">callbacks</span>[<span class="cm-number">0</span>](); <span class="cm-comment">// must return 0</span>
<span class="cm-variable">callbacks</span>[<span class="cm-number">3</span>](); <span class="cm-comment">// must return 3</span>
</code></pre>
<p>We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Мы хотим создать функцию, которая возвращает массив функций, возвращающих свои индексы в массиве. Для лучшего понимания, вот пример:</p>
<pre><code class="language-javascript"><span class="cm-keyword">var</span> <span class="cm-def">callbacks</span> <span class="cm-operator">=</span> <span class="cm-variable">createFunctions</span>(<span class="cm-number">5</span>); <span class="cm-comment">// создать массив, содержащий 5 функций</span>

<span class="cm-variable">callbacks</span>[<span class="cm-number">0</span>](); <span class="cm-comment">// должно возвращать 0</span>
<span class="cm-variable">callbacks</span>[<span class="cm-number">3</span>](); <span class="cm-comment">// должно возвращать 3</span>
</code></pre>
<p>Мы уже реализовали эту функцию, но когда мы запускаем код, результат не соответствует нашим ожиданиям. Можете ли вы определить, что с ним не так? Также доступен тестовый пример</p>
</div>

Звичайно! Ось як працює поправка за допомогою IIFE, а також пояснення логіки:

```javascript
function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    // Використання IIFE для створення нової області видимості на кожній ітерації
    (function(index) {
      callbacks.push(function() {
        return index;
      });
    })(i);
  }

  return callbacks;
}
```

### Логіка:

1. **Цикл `for`:** Ми проходимо циклом від 0 до n-1, де `n` — кількість функцій, які потрібно створити.

2. **IIFE (Immediately Invoked Function Expression):** Для кожного значення `i` в циклі ми викликаємо анонімну функцію негайно. Ця функція отримує параметр `index`, який ініціалізується поточним значенням `i`.

3. **Нова область видимості:** Оскільки кожна IIFE викликається негайно з параметром `index`, це створює нову локальну область видимості для кожного значення `i`. Це означає, що кожна функція в масиві `callbacks` збереже своє власне значення `index`, а не посилатиметься на одну і ту ж змінну `i`.

4. **Створення функцій:** У межах IIFE, створюється функція, яка повертає значення `index`. Ця функція зберігається в масиві `callbacks`.

5. **Повернення результату:** Нарешті, ми повертаємо масив `callbacks`, який складається з функцій, кожна з яких повертає свій індекс у масиві.

Таким чином, використання IIFE дозволяє нам правильно зафіксувати значення `i` для кожної функції, що розрішує проблему з областю видимості в JavaScript.