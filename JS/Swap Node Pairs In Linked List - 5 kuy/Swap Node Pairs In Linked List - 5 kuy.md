<div class="markdown prose max-w-none mb-8" id="description"><p>You are given the head node of a singly-linked list. Write a method that swaps each pair of nodes in the list, then returns the head node of the list.
You have to swap the nodes themselves, not their values.</p>
<p>Example:</p>
<p><code>(A --&gt; B --&gt; C --&gt; D) =&gt; (B --&gt; A --&gt; D --&gt; C)</code></p>
<p>The swapping should be done left to right, so if the list has an odd length, the last node stays in place:</p>
<p><code>(A --&gt; B --&gt; C) =&gt; (B --&gt; A --&gt; C)</code></p>
<hr>
<p>The list will be composed of <code>Node</code>s of the following specification:</p>
<pre style="display: none;"><code class="language-java"><span class="cm-keyword">public</span> <span class="cm-keyword">class</span> <span class="cm-def">Node</span> {
    <span class="cm-keyword">private</span> <span class="cm-type">String</span> <span class="cm-variable">value</span>;
    <span class="cm-keyword">public</span> <span class="cm-variable">Node</span> <span class="cm-variable">next</span>;

    <span class="cm-keyword">public</span> <span class="cm-variable">Node</span>(<span class="cm-type">String</span> <span class="cm-variable">value</span>) { <span class="cm-keyword">this</span>.<span class="cm-variable">value</span> <span class="cm-operator">=</span> <span class="cm-variable">value</span>; }

    <span class="cm-keyword">public</span> <span class="cm-type">String</span> <span class="cm-variable">getValue</span>() { <span class="cm-keyword">return</span> <span class="cm-variable">value</span>; }
  <span class="cm-comment">// returns a String representation of the whole list:</span>
    <span class="cm-keyword">public</span> <span class="cm-type">String</span> <span class="cm-variable">printList</span>() {}
}
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">class</span> <span class="cm-def">Node</span> {
    <span class="cm-property">constructor</span>(<span class="cm-def">value</span>, <span class="cm-def">next</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>) {
        <span class="cm-keyword">this</span>.<span class="cm-property">value</span> <span class="cm-operator">=</span> <span class="cm-variable-2">value</span>;
        <span class="cm-keyword">this</span>.<span class="cm-property">next</span> <span class="cm-operator">=</span> <span class="cm-variable-2">next</span>;
    }
}
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {
  <span class="cm-keyword">struct</span> <span class="cm-def">Node</span> <span class="cm-operator">*</span><span class="cm-variable">next</span>;
};
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">class</span> <span class="cm-def">Node</span>:
    <span class="cm-keyword">def</span> <span class="cm-def">__init__</span>(<span class="cm-variable-2">self</span>, <span class="cm-builtin">next</span><span class="cm-operator">=</span><span class="cm-keyword">None</span>):
        <span class="cm-variable-2">self</span>.<span class="cm-property">next</span> <span class="cm-operator">=</span> <span class="cm-builtin">next</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-keyword">pub</span> <span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {
    <span class="cm-keyword">pub</span> <span class="cm-variable">next</span>: <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>
}
<span class="cm-keyword">impl</span> <span class="cm-variable">Node</span> {
    <span class="cm-comment">/// Display method for &amp;Option&lt;Box&lt;Node&gt;&gt;; useful for debugging a linked list.</span>
    <span class="cm-comment">/// Format: [0xabbc --&gt; 0xbcdd --&gt; 0xabcd]</span>
    <span class="cm-keyword">pub</span> <span class="cm-keyword">fn</span> <span class="cm-def">display_option</span><span class="cm-operator">&lt;</span>'<span class="cm-variable">a</span><span class="cm-operator">&gt;</span>(<span class="cm-variable">node</span>: &amp;'<span class="cm-variable">a</span> <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>) <span class="cm-operator">-&gt;</span> <span class="cm-keyword">impl</span> <span class="cm-variable">fmt</span>::<span class="cm-variable">Display</span> <span class="cm-operator">+</span> '<span class="cm-variable">a</span> {
}

<span class="cm-comment">/// Display format: 0xabbc --&gt; 0xbcdd --&gt; 0xabcd</span>
<span class="cm-keyword">impl</span> <span class="cm-variable">fmt</span>::<span class="cm-variable">Display</span> <span class="cm-keyword">for</span> <span class="cm-variable">Node</span> { ... }
</code></pre>
</div>




<br><hr><br>


<div class="markdown prose max-w-none mb-8" id="description"><p>Вам дан головной узел односвязного списка. Напишите метод, который меняет местами каждую пару узлов в списке, а затем возвращает головной узел списка.
Вы должны поменять местами сами узлы, а не их значения.</p>
<p>Пример:</p>
<p><code>(A --> B --> C --> D) => (B --> A --> D --> C)</code></p>
<p>Перестановка должна производиться слева направо, поэтому, если список имеет нечетную длину, последний узел остается на месте:</p>
<p><code>(A --> B --> C) => (B --> A --> C)</code></p>
<hr>
<p>Список будет состоять из <code>узлов</code> со следующими характеристиками:</p>
<pre style="display: none;"><code class="language-java"><span class="cm-keyword">public</span> <span class="cm-keyword">class</span> <span class="cm-def">Node</span> {

<span class="cm-keyword">private</span> <span class="cm-type">String</span> <span class="cm-variable">value</span>;

<span class="cm-keyword">public</span> <span class="cm-variable">Node</span> <span class="cm-variable">next</span>;

<span class="cm-keyword">public</span> <span class="cm-variable">Node</span>(<span class="cm-type">String</span> <span class="cm-variable">value</span>) { <span class="cm-keyword">this</span>.<span class="cm-variable">value</span> <span class="cm-operator">=</span> <span class="cm-variable">value</span>; }

<span class="cm-keyword">public</span> <span class="cm-type">String</span> <span class="cm-variable">getValue</span>() { <span class="cm-keyword">return</span> <span class="cm-variable">value</span>; }

<span class="cm-comment">// возвращает строковое представление всего списка:</span>

<span class="cm-keyword">public</span> <span class="cm-type">String</span> <span class="cm-variable">printList</span>() {}
}
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">class</span> <span class="cm-def">Node</span> {
<span class="cm-property">constructor</span>(<span class="cm-def">value</span>, <span class="cm-def">next</span> <span class="cm-operator">=</span> <span class="cm-atom">null</span>) {
<span class="cm-keyword">this</span>.<span class="cm-property">value</span> <span class="cm-operator">=</span> <span class="cm-variable-2">value</span>;
<span class="cm-keyword">this</span>.<span class="cm-property">next</span> <span class="cm-operator">=</span> <span class="cm-variable-2">next</span>;
}
}
</code></pre>
<pre style="display: none;"><code class="language-c"><span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {

<span class="cm-keyword">struct</span> <span class="cm-def">Node</span> <span class="cm-operator">*</span><span class="cm-variable">next</span>;

};

</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">class</span> <span class="cm-def">Node</span>:

<span class="cm-keyword">def</span> <span class="cm-def">__init__</span>(<span class="cm-variable-2">self</span>, <span class="cm-builtin">next</span><span class="cm-operator">=</span><span class="cm-keyword">None</span>):

<span class="cm-variable-2">self</span>.<span class="cm-property">next</span> <span class="cm-operator">=</span> <span class="cm-builtin">next</span>
</code></pre>
<pre style="display: none;"><code class="language-rust"><span class="cm-keyword">pub</span> <span class="cm-keyword">struct</span> <span class="cm-def">Node</span> {
<span class="cm-keyword">pub</span> <span class="cm-variable">next</span>: <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>
}
<span class="cm-keyword">impl</span> <span class="cm-variable">Node</span> {

class="cm-comment">/// Метод отображения для &Option<Box<Node>; полезен для отладки связанного списка.</span>

<span class="cm-comment">/// Формат: [0xabbc --> 0xbcdd --> 0xabcd]</span>

<span class="cm-keyword">pub</span> <span class="cm-keyword">fn</span> <span class="cm-def">display_option</span><span class="cm-operator">&lt;</span>'<span class="cm-variable">a</span><span class="cm-operator">&gt;</span>(<span class="cm-variable">node</span>: &amp;'<span class="cm-variable">a</span> <span class="cm-atom">Option</span><span class="cm-operator">&lt;</span><span class="cm-variable">Box</span><span class="cm-operator">&lt;</span><span class="cm-variable">Node</span><span class="cm-operator">&gt;&gt;</span>) <span class="cm-operator">-&gt;</span> <span class="cm-keyword">impl</span> <span class="cm-variable">fmt</span>::<span class="cm-variable">Display</span> <span class="cm-operator">+</span> '<span class="cm-variable">a</span> {
}

<span class="cm-comment">/// Формат отображения: 0xabbc --&gt; 0xbcdd --&gt; 0xabcd</span>
<span class="cm-keyword">impl</span> <span class="cm-variable">fmt</span>::<span class="cm-variable">Display
</span> <span class="cm-keyword">для</span> <span class="cm-variable">Узел</span> { ... }
</code></pre>
</div>


Ось готове та оптимізоване рішення для файлу `Swap Node Pairs In Linked List - 5 kuy.js`.

Я використав **ітеративний підхід**. Це найкращий варіант для зв'язних списків, оскільки він має складність  за часом і  за пам'яттю (не викликає переповнення стеку при довгих списках, на відміну від рекурсії).

### Рішення

Вставте цей код у файл `Swap Node Pairs In Linked List - 5 kuy.js`:

```javascript
function swapPairs(head) {
    // 1. Базовий випадок: якщо список порожній або має лише один вузол,
    // міняти місцями нічого, повертаємо head як є.
    if (!head || !head.next) {
        return head;
    }

    // 2. Новою головою списку стане другий вузол, оскільки перший і другий міняються місцями.
    const newHead = head.next;

    let prev = null;       // Вказівник на останній вузол попередньої пари
    let current = head;    // Вказівник на початок поточної пари

    // 3. Проходимо циклом, поки є поточний вузол і наступний за ним (тобто є пара)
    while (current && current.next) {
        const first = current;
        const second = current.next;
        const nextPair = second.next; // Зберігаємо посилання на початок наступної пари

        // --- ЕТАП ОБМІНУ ---
        
        // Другий вузол тепер вказує на перший
        second.next = first;
        
        // Перший вузол тепер вказує на початок наступної пари (або null)
        first.next = nextPair;

        // Якщо це не перша пара, зв'язуємо хвіст попередньої пари з новою головою поточної (second)
        if (prev) {
            prev.next = second;
        }

        // --- ПІДГОТОВКА ДО НАСТУПНОЇ ІТЕРАЦІЇ ---
        
        // Тепер 'first' став другим у цій парі, тому він буде 'prev' для наступної пари
        prev = first;
        // Переходимо до наступної пари
        current = nextPair;
    }

    // Повертаємо нову голову списку
    return newHead;
}

module.exports = swapPairs;

```

---

### Пояснення логіки

Завдання вимагає змінювати саме посилання (`next`), а не значення (`value`).

1. **Ініціалізація:** Ми запам'ятовуємо `head.next` як `newHead`, тому що після обміну першої пари (A і B), B стане першим елементом всього списку.
2. **Цикл:** Ми рухаємось по списку парами. Якщо залишився 1 вузол (непарна кількість), цикл зупиняється, і останній вузол залишається на місці (як і вимагається в умові).
3. **Перестановка вказівників:**
* Було: `prev -> [First] -> [Second] -> [NextPair]`
* Стало: `prev -> [Second] -> [First] -> [NextPair]`


4. **Зв'язок між парами:** Змінна `prev` потрібна, щоб "склеїти" пари між собою. Після перестановки поточної пари ми повинні сказати попередній парі, що тепер її продовження починається з вузла `Second`.

### Перевірка (згідно з вашими тестами)

* `A -> B` перетвориться на `B -> A`.
* `A -> B -> C` перетвориться на `B -> A -> C` (C залишається, бо у нього немає пари).
* `A -> B -> C -> D` перетвориться на `B -> A -> D -> C`.