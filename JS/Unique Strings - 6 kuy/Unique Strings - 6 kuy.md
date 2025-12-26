<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Description:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Given a string that contains only letters, you have to find out the number of <strong>unique</strong> strings (including the string itself) that can be produced by re-arranging the letters of the string. Strings are case <strong>insensitive</strong>.</p>
<p>HINT: Generating all the unique strings and calling <code>length</code> on that isn't a great solution for this problem. It can be done a lot faster...</p>
<h2 id="examples">Examples</h2>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">uniqcount</span>(<span class="cm-string">"AB"</span>) <span class="cm-operator">=</span> <span class="cm-number">2</span>      <span class="cm-comment"># "AB", "BA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABC"</span>) <span class="cm-operator">=</span> <span class="cm-number">6</span>     <span class="cm-comment"># "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABA"</span>) <span class="cm-operator">=</span> <span class="cm-number">3</span>     <span class="cm-comment"># "AAB", "ABA", "BAA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABBb"</span>) <span class="cm-operator">=</span> <span class="cm-number">4</span>    <span class="cm-comment"># "ABBB", "BABB", "BBAB", "BBBA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"AbcD"</span>) <span class="cm-operator">=</span> <span class="cm-number">24</span>   <span class="cm-comment"># "ABCD", etc.</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">uniqCount</span>(<span class="cm-string">"AB"</span>) <span class="cm-operator">=</span> <span class="cm-number">2n</span>      <span class="cm-comment">// "AB", "BA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABC"</span>) <span class="cm-operator">=</span> <span class="cm-number">6n</span>     <span class="cm-comment">// "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABA"</span>) <span class="cm-operator">=</span> <span class="cm-number">3n</span>     <span class="cm-comment">// "AAB", "ABA", "BAA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABBb"</span>) <span class="cm-operator">=</span> <span class="cm-number">4n</span>    <span class="cm-comment">// "ABBB", "BABB", "BBAB", "BBBA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"AbcD"</span>) <span class="cm-operator">=</span> <span class="cm-number">24n</span>   <span class="cm-comment">// "ABCD", etc.</span>

<span class="cm-comment">// Note that you should return a BigInt, not a Number</span>
</code></pre>

</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Algorithms</div></div></div></div>

<br><hr><br>

<div class="w-full panel bg-ui-section"><h3 class="wf-title-alt">Опис:</h3><div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Враховуючи рядок, який містить лише літери, вам потрібно з'ясувати кількість <strong>унікальних</strong> рядків (включаючи сам рядок), які можна отримати шляхом перестановки літер у рядку. Рядки <strong>нечутливі</strong> до регістру.</p>
<p>ПІДКАЗКА: Генерація всіх унікальних рядків та виклик <code>length</code> для цього не є найкращим рішенням цієї проблеми. Це можна зробити набагато швидше...</p>
<h2 id="examples">Приклади</h2>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">uniqcount</span>(<span class="cm-string">"AB"</span>) <span class="cm-operator">=</span> <span class="cm-number">2</span> <span class="cm-comment"># "AB", "BA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABC"</span>) <span class="cm-operator">=</span> <span class="cm-number">6</span> <span class="cm-comment"># "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABA"</span>) <span class="cm-operator">=</span> <span class="cm-number">3</span> <span class="cm-comment"># "AAB", "ABA", "BAA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"ABBb"</span>) <span class="cm-operator">=</span> <span class="cm-number">4</span> <span class="cm-comment"># "ABBB", "BABB", "BBAB", "BBBA"</span>
<span class="cm-variable">uniqcount</span>(<span class="cm-string">"AbcD"</span>) <span class="cm-operator">=</span> <span class="cm-number">24</span> <span class="cm-comment"># "ABCD" тощо.</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">uniqCount</span>(<span class="cm-string">"AB"</span>) <span class="cm-operator">=</span> <span class="cm-number">2n</span> <span class="cm-comment">// "AB", "BA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABC"</span>) <span class="cm-operator">=</span> <span class="cm-number">6n</span> <span class="cm-comment">// "ABC", "ACB", "BAC", "BCA", "CAB", "CBA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABA"</span>) <span class="cm-operator">=</span> <span class="cm-number">3n</span> <span class="cm-comment">// "AAB", "ABA", "BAA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"ABBb"</span>) <span class="cm-operator">=</span> <span class="cm-number">4n</span> <span class="cm-comment">// "ABBB", "BABB", "BBAB", "BBBA"</span>
<span class="cm-variable">uniqCount</span>(<span class="cm-string">"AbcD"</span>) <span class="cm-operator">=</span> <span class="cm-number">24n</span> <span class="cm-comment">// "ABCD" тощо.</span>

<span class="cm-comment">// Зверніть увагу, що ви повинні повертати BigInt, а не Number</span>
</code></pre>

</div><div class="pt-4 max-w-5xl mx-auto"><div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Алгоритми</div></div></div></div></div>

Добре, давай розберемо задачу крок за кроком.

### 🔑 Ідея рішення

Ми маємо знайти кількість **унікальних перестановок** рядка, враховуючи, що:

-   Рядок складається лише з літер.
-   Регістр не має значення (тобто `"A"` і `"a"` вважаються однаковими).
-   Результат має бути типу **BigInt**.

Формула для кількості унікальних перестановок:
\[
\text{Permutations} = \frac{n!}{c_1! \cdot c_2! \cdot \dots \cdot c_k!}
\]
де:

-   \(n\) — довжина рядка,
-   \(c_i\) — кількість повторів кожної літери.

### 🛠️ Алгоритм

1. Перевести рядок у нижній регістр (щоб ігнорувати регістр).
2. Порахувати кількість кожної літери.
3. Обчислити факторіал довжини рядка.
4. Поділити на добуток факторіалів кількостей кожної літери.
5. Повернути результат як **BigInt**.

### 📦 Реалізація (JavaScript)

```javascript
function uniqCount(xs) {
    // Переводимо у нижній регістр
    xs = xs.toLowerCase();

    // Якщо рядок порожній — є лише одна перестановка (порожній рядок)
    if (xs.length === 0) return 1n;

    // Підрахунок частот літер
    const freq = {};
    for (let ch of xs) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Функція факторіалу з BigInt
    function factorial(n) {
        let res = 1n;
        for (let i = 2n; i <= n; i++) {
            res *= i;
        }
        return res;
    }

    // Загальний факторіал довжини рядка
    let total = factorial(BigInt(xs.length));

    // Ділимо на факторіали частот
    for (let count of Object.values(freq)) {
        total /= factorial(BigInt(count));
    }

    return total;
}

module.exports = uniqCount;
```

### ✅ Перевірка на прикладах

-   `uniqCount("AB") = 2n`
-   `uniqCount("ABC") = 6n`
-   `uniqCount("ABA") = 3n`
-   `uniqCount("ABBb") = 4n`
-   `uniqCount("AbcD") = 24n`
-   `uniqCount("") = 1n`
-   `uniqCount("Aa") = 1n`

Цей код пройде всі наведені тести.

Хочеш, я ще поясню оптимізацію для великих рядків (щоб не рахувати факторіали заново кожного разу)?
