<div class="markdown prose max-w-none mb-8" id="description"><p>Find the longest substring within a string that contains at most 2 unique characters.</p>
<pre><code class="language-java"><span class="cm-string">"a"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"a"</span>
<span class="cm-string">"aaa"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"aaa"</span>
<span class="cm-string">"abacd"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"aba"</span>
<span class="cm-string">"abacddcd"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"cddcd"</span>
<span class="cm-string">"cefageaacceaccacca"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"accacca"</span>
</code></pre>
<p>This function will take alphanumeric characters as input.</p>
<p>In cases where there could be more than one correct answer, the first string occurrence should be used. For example, <code>'abc'</code> should return <code>'ab'</code> instead of <code>'bc'</code>.</p>
<p>Although there are O(N^2) solutions to this problem, you should try to solve this problem in O(N) time. Tests may pass for O(N^2) solutions but, this is not guaranteed.</p>
<p>This question is much harder than some of the other substring questions. It's easy to think that you have a solution and then get hung up on the implementation.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Знайдіть найдовший підрядок у заданому рядку, що містить щонайбільше 2 унікальні символи.</p>
<pre><code class="language-java"><span class="cm-string">"a"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"a"</span>
<span class="cm-string">"aaa"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"aaa"</span>
<span class="cm-string">"abacd"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"aba"</span>
<span class="cm-string">"abacddcd"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"cddcd"</span>
<span class="cm-string">"cefageaacceaccacca"</span> <span class="cm-operator">=&gt;</span> <span class="cm-string">"accacca"</span>
</code></pre>
<p>Функція приймає на вхід буквено-цифрові символи.</p>
<p>Якщо існує кілька правильних відповідей, слід повернути той підрядок, що зустрічається першим. Наприклад, для рядка <code>'abc'</code> результатом має бути <code>'ab'</code>, а не <code>'bc'</code>.</p>
<p>Хоча для цієї задачі існують рішення з часовою складністю O(N^2), варто спробувати реалізувати рішення з часовою складністю O(N). Рішення з O(N^2) можуть пройти тести, але це не гарантується.</p>
<p>Це завдання значно складніше за деякі інші задачі на пошук підрядків. Легко подумати, що ви знайшли рішення, а потім зіткнутися з труднощами під час його реалізації.</p>
</div>

Ось розбір по рядках (нумерація умовна, рахуючи від `function`):

```js
function substring(str) {
```
**1.** Оголошуємо функцію, яка приймає рядок `str`.

```js
    const counts = new Map();
```
**2.** `counts` зберігає, скільки разів кожен символ зустрічається в поточному вікні. Ключі цієї мапи — це і є унікальні символи вікна, тому `counts.size` показує їх кількість.

```js
    let left = 0;
```
**3.** Лівий край вікна.

```js
    let bestStart = 0;
    let bestLen = 0;
```
**4–5.** Початок і довжина найкращого знайденого підрядка. Самі підрядки не зберігаємо, лише два числа, тому це швидко.

```js
    for (let right = 0; right < str.length; right++) {
```
**6.** Правий край вікна проходить рядок зліва направо один раз.

```js
        const ch = str[right];
        counts.set(ch, (counts.get(ch) || 0) + 1);
```
**7–8.** Беремо новий символ і додаємо його у вікно: збільшуємо лічильник (якщо символу ще не було, `get` поверне `undefined`, тому `|| 0` дає 0).

```js
        while (counts.size > 2) {
```
**9.** Якщо у вікні вже понад 2 унікальні символи, вікно недопустиме, і треба звужувати його зліва, поки знову не буде не більше 2.

```js
            const l = str[left];
            const c = counts.get(l) - 1;
```
**10–11.** Беремо символ на лівому краю й зменшуємо його лічильник (це значення, яке він матиме після виходу з вікна).

```js
            if (c === 0) counts.delete(l);
            else counts.set(l, c);
```
**12–13.** Якщо символу у вікні більше не лишилось, видаляємо його з мапи (саме так зменшується `size`). Інакше просто записуємо менший лічильник.

```js
            left++;
        }
```
**14–15.** Зсуваємо лівий край вправо. Цикл `while` повторюється, поки унікальних символів не стане 2 або менше.

```js
        if (right - left + 1 > bestLen) {
            bestLen = right - left + 1;
            bestStart = left;
        }
```
**16–19.** Тепер вікно допустиме. Його довжина дорівнює `right - left + 1`. Якщо вона більша за найкращу, запам'ятовуємо її та початок. Знак `>` суворий, тому за однакової довжини залишається перше входження (`'abc'` → `'ab'`).

```js
    }
    return str.slice(bestStart, bestStart + bestLen);
}
```
**20–21.** Після проходу повертаємо підрядок за збереженими `bestStart` і `bestLen`. Для порожнього рядка `bestLen = 0`, тому результат `''`.

```js
module.exports = substring;
```
**22.** Експортуємо функцію, щоб її підхопив тестовий файл.

**Складність:** кожен індекс один раз додається у вікно (`right`) і щонайбільше один раз з нього виходить (`left`), тож загалом O(N) часу та O(1) пам'яті, бо в мапі не більше 3 ключів.

**Приклад** на `'abcba'`: вікно росте до `ab`, на `c` стає `abc` (3 символи), тож `left` зсувається до `bc`. Далі `b` дає `bcb` (довжина 3, найкраще), а `a` додає третій символ, і вікно звужується до `ba`. Відповідь `'bcb'`.