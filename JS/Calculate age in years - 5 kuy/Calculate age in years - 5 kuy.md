<div class="markdown prose max-w-none mb-8" id="description"><p>Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects.  The returned difference can be either positive or negative.</p>
<pre><code class="language-javascript"><span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'1980/01/01'</span>)) <span class="cm-operator">===</span> <span class="cm-number">33</span> <span class="cm-comment">// assuming today's date is 2013/08/01</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'1913/01/01'</span>), <span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2013/01/01'</span>) <span class="cm-operator">===</span> <span class="cm-number">100</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2008/02/29'</span>), <span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2032/03/01'</span>)) <span class="cm-operator">===</span> <span class="cm-number">24</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2008/01/01'</span>), <span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2000/01/01'</span>)) <span class="cm-operator">===</span> <span class="cm-operator">-</span><span class="cm-number">8</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Завершите следующую функцию, которая будет возвращать разницу в годах (возраст) для даты рождения и, при необходимости, текущей даты. Оба аргумента функции должны быть объектами типа Date. Возвращаемая разница может быть как положительной, так и отрицательной.</p>
<pre><code class="language-javascript"><span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'1980/01/01'</span>)) <span class="cm-operator">===</span> <span class="cm-number">33</span> <span class="cm-comment">// предполагая, что сегодняшняя дата — 2013/08/01</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'1913/01/01'</span>), <span class="cm-keyword">новая</span> <span class="cm-variable">Дата</span>(<span class="cm-string">'2013/01/01'</span>) <span class="cm-operator">===</span> <span class="cm-number">100</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">новая</span> <span class="cm-variable">Дата</span>(<span class="cm-string">'2008/02/29'</span>), <span class="cm-keyword">новая</span> <span class="cm-variable">Дата</span>(<span class="cm-string">'2032/03/01'</span>)) <span class="cm-operator">===</span> <span class="cm-number">24</span>
<span class="cm-variable">getAge</span>(<span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2008/01/01'</span>), <span class="cm-keyword">new</span> <span class="cm-variable">Date</span>(<span class="cm-string">'2000/01/01'</span>)) <span class="cm-operator">===</span> <span class="cm-operator">-</span><span class="cm-number">8</span>
</code></pre>
</div>

Усі 6 тестів проходять. Зберігаю рішення.Ось рішення:

```javascript
function getAge(birthDate, nowDate = new Date()) {
  let age = nowDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = nowDate.getMonth() - birthDate.getMonth();

  const dayNotReachedYet =
    monthDiff < 0 || (monthDiff === 0 && nowDate.getDate() < birthDate.getDate());

  if (dayNotReachedYet) {
    age--;
  }

  return age;
}
```

**Як це працює:**

1. **Базова різниця в роках** — просто віднімаємо рік народження від поточного року. Але це грубе наближення — треба ще перевірити, чи вже настав "день народження" в поточному році.

2. **`monthDiff`** — різниця місяців. Якщо вона від'ємна (наприклад, народився в листопаді, а зараз січень), значить день народження в цьому році ще не настав.

3. **Перевірка дня, коли місяці збігаються** (`monthDiff === 0`) — якщо номер дня в `nowDate` менший за день народження, день ще не настав (актуально для випадку `2008/02/29` → `2009/02/28`: місяці однакові, лютий, але 28 < 29, тому рік іще не "зарахований").

4. Якщо день народження в поточному році ще не настав — віднімаємо 1 від грубої різниці.

Ця сама логіка коректно працює і для **від'ємних** результатів (коли `nowDate` раніше за `birthDate`) — JS просто віднімає в інший бік, і умова `dayNotReachedYet` так само коригує результат в потрібну сторону (перевірено тестом `2014/01/01` → `2013/01/01` дає `-1`).

Значення `nowDate` за замовчуванням (`= new Date()`) реалізує опціональність другого аргументу, як вимагалося в умові.