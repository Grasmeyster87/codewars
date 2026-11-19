<div class="markdown prose max-w-none mb-8" id="description"><h3 id="story">Story</h3>
<p>You are a h4ck3r n00b: you "acquired" a bunch of password hashes, and you want to decypher them. Based on the length, you already guessed that they must be SHA-1 hashes. You also know that these are weak passwords: maximum 5 characters long and use only lowercase letters (<code>a-z</code>), no other characters.</p>
<p>Happy hacking!</p>
<p><strong>Notes:</strong></p>
<ul>
<li>pre-generating the full hash table is not advised, due to the time-limit on the CW platform</li>
<li>there will be only a few tests for 5-letter words <em>(hint: start from the beginning of the alphabet)</em></li>
<li>if your solution times out, try running it again - the CW runner is sometimes a bit slow(er)</li>
</ul>
<hr>
<h3 id="my-other-katas">My other katas</h3>
<p>If you enjoyed this kata then please try <a href="https://www.codewars.com/users/anter69/authored" data-turbolinks="false" target="_blank">my other katas</a>! :-)</p>
<h4 id="translations-are-welcome"><em>Translations are welcome!</em></h4>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h3 id="story">Історія</h3>
<p>Ви — хакер-початківець: вам вдалося «роздобути» купу хешів паролів, і тепер ви хочете їх розшифрувати. Судячи з довжини, ви вже здогадалися, що це, ймовірно, хеші SHA-1. Також відомо, що це слабкі паролі: їхня максимальна довжина — 5 символів, і вони складаються лише з малих літер (<code>a-z</code>), без жодних інших знаків.</p>
<p>Вдалого зламу!</p>
<p><strong>Примітки:</strong></p>
<ul>
<li>Не рекомендується попередньо генерувати повну таблицю хешів, оскільки на платформі CW діє обмеження за часом виконання.</li>
<li>Буде лише кілька тестів для 5-літерних слів <em>(підказка: починайте з початку алфавіту)</em>.</li>
<li>Якщо виконання вашого рішення переривається через перевищення ліміту часу, спробуйте запустити його ще раз — середовище виконання на CW іноді працює дещо повільніше.</li>
</ul>
<hr>
<h3 id="my-other-katas">Інші мої ката</h3>
<p>Якщо вам сподобалася ця задача (ката), спробуйте також <a href="https://www.codewars.com/users/anter69/authored" data-turbolinks="false" target="_blank">інші мої ката</a>! :-)</p>
<h4 id="translations-are-welcome"><em>Переклади вітаються!</em></h4>
</div>


Ось построковий розбір коду:

```javascript
const crypto = require('crypto');
```
Підключаємо вбудований Node.js модуль `crypto` — він дає функції для хешування (SHA-1, MD5 тощо).

```javascript
function passwordCracker(hash) {
```
Оголошуємо функцію, яка приймає рядок `hash` — той SHA-1 хеш, пароль від якого треба знайти.

```javascript
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
```
Рядок з усіх 26 малих літер латиниці — наш "алфавіт", з якого будуть складатися кандидати-паролі.

```javascript
  for (let len = 1; len <= 5; len++) {
```
Зовнішній цикл: перебираємо довжину пароля від 1 до 5 символів — спочатку шукаємо серед найкоротших варіантів, бо вони перевіряються найшвидше.

```javascript
    const idx = new Array(len).fill(0);
```
Створюємо масив індексів довжиною `len`, заповнений нулями. Це "лічильник", де кожна позиція — індекс літери в `alphabet` (0 = 'a', 1 = 'b', ..., 25 = 'z'). Наприклад, для `len = 3` початковий стан `[0, 0, 0]` відповідає рядку `"aaa"`.

```javascript
    while (true) {
```
Внутрішній цикл: перебираємо всі можливі комбінації літер заданої довжини `len`.

```javascript
      let candidate = '';
      for (let i = 0; i < len; i++) candidate += alphabet[idx[i]];
```
Будуємо рядок-кандидат: беремо кожен індекс з масиву `idx` і перетворюємо його на відповідну літеру з `alphabet`, склеюючи у рядок. Наприклад, `idx = [0, 2, 1]` → `candidate = "acb"`.

```javascript
      if (crypto.createHash('sha1').update(candidate).digest('hex') === hash) {
        return candidate;
      }
```
Рахуємо SHA-1 хеш кандидата (`createHash('sha1')` — створює об'єкт хешування, `.update(candidate)` — передає дані, `.digest('hex')` — повертає результат у вигляді hex-рядка). Якщо він співпав із заданим `hash` — ми знайшли пароль, одразу повертаємо його і завершуємо функцію.

```javascript
      let pos = len - 1;
      while (pos >= 0) {
        idx[pos]++;
        if (idx[pos] < 26) break;
        idx[pos] = 0;
        pos--;
      }
```
Це "інкремент лічильника" — логіка переходу до наступної комбінації, схожа на те, як рахує одометр або число в 26-ковій системі числення:
- `pos = len - 1` — починаємо з останньої (найправішої) позиції.
- `idx[pos]++` — збільшуємо її на 1.
- Якщо значення все ще менше 26 (тобто це дійсна літера) — виходимо з циклу (`break`), комбінація готова.
- Якщо значення досягло 26 (вийшли за межі алфавіту) — скидаємо цю позицію в 0 і переходимо до попередньої позиції (`pos--`), щоб збільшити вже її (як "перенесення розряду").

Приклад для `len = 2`: `"az"` (`[0,25]`) → збільшуємо останню позицію, вона стає 26 → скидаємо в 0, переходимо до попередньої → вона стає 1 → результат `[1, 0]` = `"ba"`.

```javascript
      if (pos < 0) break;
```
Якщо `pos` стало від'ємним — це значить, що перенесення "вийшло" за межі всього масиву, тобто ми перебрали вже всі можливі комбінації цієї довжини (наприклад, після `"zzz"` для `len = 3`). У такому разі виходимо з внутрішнього циклу `while (true)` і переходимо до наступної довжини в зовнішньому циклі.

```javascript
  }

  return "";
}
```
Якщо жодна довжина від 1 до 5 не дала збігу — повертаємо порожній рядок (хоча за умовою задачі такого не має статися, бо пароль гарантовано існує).

```javascript
module.exports = passwordCracker;
```
Експортуємо функцію, щоб її міг використати тестовий файл (`require(...)`) через `assert.strictEqual(passwordCracker(...), ...)`.