<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><h2 id="acknowledgments">Acknowledgments:</h2>
<p>I thank <a href="https://www.codewars.com/users/yvonne-liu" data-turbolinks="false" target="_blank">yvonne-liu</a> for the idea and for the example tests :)</p>
<h2 id="description">Description:</h2>
<p>Encrypt this!</p>
<p>You want to create secret messages which can be deciphered by the <a href="https://www.codewars.com/kata/decipher-this" data-turbolinks="false" target="_blank">Decipher this!</a> kata. Here are the conditions:</p>
<ol>
<li>Your message is a string containing space separated words.</li>
<li>You need to encrypt each word in the message using the following rules:<ul>
<li>The first letter must be converted to its ASCII code.</li>
<li>The second letter must be switched with the last letter</li>
</ul>
</li>
<li>Keepin' it simple: There are no special characters in the input.</li>
</ol>
<h2 id="examples">Examples:</h2>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">encryptThis</span> <span class="cm-string">"Hello"</span> <span class="cm-builtin">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encryptThis</span> <span class="cm-string">"good"</span> <span class="cm-builtin">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encryptThis</span> <span class="cm-string">"hello world"</span> <span class="cm-builtin">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">encrypt_this</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">encrypt_this</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-groovy"><span class="cm-variable">Kata</span>.<span class="cm-property">encryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">Kata</span>.<span class="cm-property">encryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">Kata</span>.<span class="cm-property">encryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-scala"><span class="cm-variable">Encrypt</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">Encrypt</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">Encrypt</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-java"><span class="cm-variable">Kata</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">encryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">encryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">===</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">===</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">===</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">encryptThis</span><span class="cm-punctuation">(</span><span class="cm-string">"Hello"</span><span class="cm-punctuation">)</span> <span class="cm-operator">==</span><span class="cm-punctuation">=</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encryptThis</span><span class="cm-punctuation">(</span><span class="cm-string">"good"</span><span class="cm-punctuation">)</span> <span class="cm-operator">==</span><span class="cm-punctuation">=</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encryptThis</span><span class="cm-punctuation">(</span><span class="cm-string">"hello world"</span><span class="cm-punctuation">)</span> <span class="cm-operator">==</span><span class="cm-punctuation">=</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-variable">encrypt_this</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-cpp"><span class="cm-variable">encrypt_this</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-go"><span class="cm-variable">EncryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">EncryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">EncryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-variable">Kata</span>.<span class="cm-variable">EncryptThis</span>(<span class="cm-string">"Hello"</span>) <span class="cm-operator">==</span> <span class="cm-string">"72olle"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">EncryptThis</span>(<span class="cm-string">"good"</span>) <span class="cm-operator">==</span> <span class="cm-string">"103doo"</span>
<span class="cm-variable">Kata</span>.<span class="cm-variable">EncryptThis</span>(<span class="cm-string">"hello world"</span>) <span class="cm-operator">==</span> <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-vb"><span class="cm-variable">Kata</span><span class="cm-variable">.EncryptThis</span>(<span class="cm-string">"Hello"</span>) = <span class="cm-string">"72olle"</span>
<span class="cm-variable">Kata</span><span class="cm-variable">.EncryptThis</span>(<span class="cm-string">"good"</span>) = <span class="cm-string">"103doo"</span>
<span class="cm-variable">Kata</span><span class="cm-variable">.EncryptThis</span>(<span class="cm-string">"hello world"</span>) = <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-clojure"><span class="cm-bracket">(</span><span class="cm-keyword">=</span> <span class="cm-bracket">(</span><span class="cm-builtin">encrypt-this</span> <span class="cm-string">"Hello"</span><span class="cm-bracket">)</span> <span class="cm-string">"72olle"</span><span class="cm-bracket">)</span>
<span class="cm-bracket">(</span><span class="cm-keyword">=</span> <span class="cm-bracket">(</span><span class="cm-builtin">encrypt-this</span> <span class="cm-string">"good"</span> <span class="cm-bracket">)</span> <span class="cm-string">"103doo"</span><span class="cm-bracket">)</span>
<span class="cm-bracket">(</span><span class="cm-keyword">=</span> <span class="cm-bracket">(</span><span class="cm-builtin">encrypt-this</span> <span class="cm-string">"hello world"</span><span class="cm-bracket">)</span> <span class="cm-string">"104olle 119drlo"</span><span class="cm-bracket">)</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-variable">encrypt_this</span>(<span class="cm-string">"</span><span class="cm-string">Hello</span><span class="cm-string">"</span>) <span class="cm-operator">==</span> <span class="cm-string">"</span><span class="cm-string">72olle</span><span class="cm-string">"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"</span><span class="cm-string">good</span><span class="cm-string">"</span>) <span class="cm-operator">==</span> <span class="cm-string">"</span><span class="cm-string">103doo</span><span class="cm-string">"</span>
<span class="cm-variable">encrypt_this</span>(<span class="cm-string">"</span><span class="cm-string">hello world</span><span class="cm-string">"</span>) <span class="cm-operator">==</span> <span class="cm-string">"</span><span class="cm-string">104olle 119drlo</span><span class="cm-string">"</span>
</code></pre>
<pre style="display: none;"><code class="language-lua"><span class="cm-variable">solution.encrypt_this</span>(<span class="cm-string">"Hello"</span>) == <span class="cm-string">"72olle"</span>
<span class="cm-variable">solution.encrypt_this</span>(<span class="cm-string">"good"</span>) == <span class="cm-string">"103doo"</span>
<span class="cm-variable">solution.encrypt_this</span>(<span class="cm-string">"hello world"</span>) == <span class="cm-string">"104olle 119drlo"</span>
</code></pre>
<pre style="display: none;"><code class="language-php"><span class="cm-variable">encryptThis</span>(<span class="cm-string">"</span><span class="cm-string">Hello"</span>) <span class="cm-operator">===</span> <span class="cm-string">"</span><span class="cm-string">72olle"</span>
<span class="cm-variable">encryptThis</span>(<span class="cm-string">"</span><span class="cm-string">good"</span>) <span class="cm-operator">===</span> <span class="cm-string">"</span><span class="cm-string">103doo"</span>
<span class="cm-variable">encryptThis</span>(<span class="cm-string">"</span><span class="cm-string">hello world"</span>) <span class="cm-operator">===</span> <span class="cm-string">"</span><span class="cm-string">104olle 119drlo"</span>
</code></pre>
</div>

### Огляд функції

Функція **`encryptThis`** приймає рядок `text`, шифрує кожне слово за правилами задачі і повертає новий рядок зі зашифрованими словами, розділеними пробілами. Основні правила шифрування: **перша літера слова замінюється на її ASCII-код**, а **друга літера міняється місцями з останньою**. Функція також коректно обробляє слова різної довжини (1, 2, ≥3) і порожній вхід.

---

### Покрокова логіка виконання

1. **Перевірка порожнього рядка**  
   Якщо `text === ''`, функція негайно повертає порожній рядок. Це запобігає зайвим операціям і гарантує правильний результат для пустого вводу.

2. **Розбиття на слова**  
   Використовується `text.split(' ')` для отримання масиву слів, де роздільник — пробіл. Кожне слово обробляється окремо методом `map`.

3. **Обробка кожного слова**  
   Для кожного слова виконуються такі кроки:
   - **Отримати ASCII першої літери** через `word.charCodeAt(0)` і зберегти як рядок.
   - **В залежності від довжини слова**:
     - **Довжина 0**: повернути `''` (захисний випадок, рідко трапляється).
     - **Довжина 1**: повернути тільки ASCII-код (наприклад, `'A'` → `'65'`).
     - **Довжина 2**: повернути ASCII + друга літера (наприклад, `'Hi'` → `'72i'`).
     - **Довжина ≥ 3**: побудувати рядок у форматі:  
       **ASCII + остання літера + середина (з 3-го по передостанній) + друга літера**.  
       Тобто переставляємо другу і останню літери, середину залишаємо в тому ж порядку.

4. **Збирання результату**  
   Після обробки всіх слів масив знову з'єднується в рядок через `' '` і повертається.

---

### Обробка за довжиною слова

- **1 символ**  
  **Результат:** `ASCII`  
  **Приклад:** `'A'` → `'65'`.

- **2 символи**  
  **Результат:** `ASCII + secondChar`  
  **Приклад:** `'to'` → `'116o'`.

- **3 і більше символів**  
  **Результат:** `ASCII + lastChar + middleSubstring + secondChar`  
  **Приклад:** `'hello'` → `'104olle'`  
  (тут `104` — ASCII `'h'`, потім `'o'` (останній), `'ll'` (середина), `'e'` (друга)).

---

### Приклади

- Вхід: `'Hello'` → Кроки: `H` → `72`, остання `o`, середина `ll`, друга `e` → Вихід: **`72olle`**.  
- Вхід: `'good'` → `g` → `103`, остання `d`, середина `oo`, друга `o` → **`103doo`**.  
- Вхід: `'hello world'` → `'104olle 119drlo'`.

---

### Крайові випадки і зауваження

- **Порожній рядок** повертається як `''`.  
- **Множинні пробіли**: поточна реалізація `split(' ')` створить пусті елементи для послідовних пробілів; код обробляє пусті слова, повертаючи `''` для них, і при `join(' ')` зберігає ті самі позиції пробілів. Якщо потрібно ігнорувати зайві пробіли, слід використовувати `split(/\s+/)` або попередньо `trim()` і фільтрацію порожніх елементів.  
- **Спеціальні символи**: умова задачі каже, що їх немає, але реалізація працюватиме з будь-якими символами — `charCodeAt` поверне код символу, а перестановки застосуються до символів як до символів.  
- **Unicode і сурогатні пари**: `charCodeAt(0)` повертає код одиночного 16‑бітного елемента; для символів поза BMP (emoji) може знадобитися додаткова обробка (наприклад, використання `Array.from`), але для латиниці/кирилиці це не проблема.

---

### Складність алгоритму

- **Часова складність:** \(O(n)\), де \(n\) — загальна кількість символів у вхідному рядку. Кожен символ обробляється константну кількість разів при побудові результату.  
- **Пам’ять:** \(O(n)\) додаткової пам’яті для збереження масиву слів і результатного рядка.

---

### Повернення і експорт

Функція повертає один рядок — зашифровану версію вхідного тексту. В кінці файлу вона експортується через `module.exports = encryptThis;`, тому її можна підключити в тестах або інших модулях Node.js.

---

Якщо потрібно, можу показати варіант, який ігнорує зайві пробіли або підтримує коректну обробку Unicode символів поза BMP.
