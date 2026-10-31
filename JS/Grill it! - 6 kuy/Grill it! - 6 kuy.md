<div class="markdown prose max-w-none mb-8" id="description"><h1 id="introduction">Introduction</h1>
<p>A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers. 
<a href="https://en.wikipedia.org/wiki/Grille_(cryptography)" data-turbolinks="false" target="_blank">Wikipedia Link</a> </p>
<p><img alt="Tangiers1" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Tangiers1.png">
<img alt="Tangiers2" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Tangiers2.png"></p>
<h1 id="task">Task</h1>
<p>Write a function that accepts two inputs: <code>message</code> and <code>code</code> and returns hidden message decrypted from <code>message</code> using the <code>code</code>.<br>The <code>code</code> is a nonnegative integer and it decrypts in binary the <code>message</code>. </p>
<pre><code class="language-txt">message : abcdef
code    : 000101
----------------
result  : df
</code></pre>
</div>

<br> <hr> <br>
<div class="markdown prose max-w-none mb-8" id="description"><h1 id="introduction">Введение</h1>
<p>Шифр «решётка» — это метод шифрования открытого текста, при котором он записывается на лист бумаги через специальный трафарет (из бумаги, картона или другого материала) с прорезями. Самое раннее известное описание этого метода принадлежит эрудиту Джироламо Кардано и датируется 1550 годом. Он предложил использовать прямоугольный трафарет, через отверстия в котором можно было записывать (а впоследствии — считывать) отдельные буквы, слоги или слова. Записанные фрагменты исходного текста можно было дополнительно замаскировать, заполнив промежутки между ними нейтральными словами или буквами. Этот вариант, как и многие другие виды шифров-решёток, является примером стеганографии.
<a href="https://en.wikipedia.org/wiki/Grille_(cryptography)" data-turbolinks="false" target="_blank">Ссылка на Википедию</a> </p>
<p><img alt="Tangiers1" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Tangiers1.png">
<img alt="Tangiers2" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Tangiers2.png"></p>
<h1 id="task">Задача</h1>
<p>Напишите функцию, которая принимает два аргумента: <code>message</code> (сообщение) и <code>code</code> (код), и возвращает скрытое сообщение, извлечённое из <code>message</code> с помощью <code>code</code>.<br>Аргумент <code>code</code> представляет собой неотрицательное целое число, которое определяет процесс расшифровки сообщения в двоичном формате.</p>
<pre><code class="language-txt">message : abcdef
code    : 000101
----------------
result  : df
</code></pre>
</div>

Як це працює

Код перетворюється на двійковий рядок, який вирівнюється по правому краю повідомлення. Приклад: 5 → 101 → 000101 для abcdef.
Якщо бітів менше, ніж символів, зліва додаються нулі (padStart).
Якщо бітів більше, ніж символів (як у grille("ab", 256): 100000000), беруться лише останні n бітів (slice(-n)). Тоді виходить 00 і результат порожній, як і очікують тести.
Символи, що стоять на позиціях з 1, збираються у результат.

Перевірка за тестами

grille("abcdef", 5): біти 000101 дають df.
grille("", 5): порожнє повідомлення дає "" (перевірка n === 0 потрібна, бо slice(-0) повернув би весь рядок).
grille("abc", 1): біти 001 дають c.
grille("tcddoadepwweasresd", 77098): біти 010010110100101010 залишають c o d e w a r s, тобто codewars.
grille("ab", 255): останні два біти 11 дають ab.
grille("ab", 256): останні два біти 00 дають "".
grille("abcde", 32): біти 00000 дають "".

Пропуск if (n === 0) зламав би другий тест, тому цей рядок варто залишити.

## Ідея: решітка як маска

У шифрі-решітці є аркуш з прорізами. Його накладають на текст, і видно лише літери в прорізах. Тут роль решітки грає двійкове число `code`:

- біт `1` означає проріз, тобто символ видно і він потрапляє в результат;
- біт `0` означає суцільний папір, тобто символ ховається.

Довжина решітки дорівнює довжині повідомлення, тому кожному символу відповідає рівно один біт.

## Крок 1. Число в двійковий запис

Комп'ютер зберігає `5` як число, але для маски потрібен його двійковий запис:

```js
(5).toString(2)  // "101"
```

Тут є проблема. Для `abcdef` потрібно 6 бітів, а вийшло 3. Старші нулі в числі не зберігаються: `000101` і `101` це те саме число, але `toString(2)` повертає запис без них.

## Крок 2. Вирівнювання по правому краю

Приклад із завдання показує, що нулі треба додавати зліва:

```
message : a b c d e f
code    : 0 0 0 1 0 1
                  ↑   ↑
                  d   f
```

Молодший біт числа (крайній правий) відповідає останньому символу. Тому `padStart(n, "0")` додає нулі зліва, поки довжина не стане рівною `n`:

```js
"101".padStart(6, "0")  // "000101"
```

## Крок 3. Збирання результату

Далі проходимо по рядку і по масці одночасно:

| індекс | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| символ | a | b | c | d | e | f |
| біт | 0 | 0 | 0 | 1 | 0 | 1 |
| береться? | ні | ні | ні | **так** | ні | **так** |

Результат: `df`.

## Крок 4. Коли число занадто велике

Це випадок `grille("ab", 256)`. Число 256 у двійковому вигляді має 9 бітів (`100000000`), а повідомлення має 2 символи.

За умовою тесту результат має бути порожнім. Значить, значущими вважаються лише останні `n` бітів, а старші відкидаються. Це робить `slice(-n)`:

```js
"100000000".slice(-2)  // "00"  → нічого не вибрано → ""
```

Так само працює `255` для `"ab"`:

```js
(255).toString(2)        // "11111111"
"11111111".slice(-2)     // "11" → обидва символи → "ab"
```

## Повний розбір складного тесту

`grille("tcddoadepwweasresd", 77098)`:

- `77098` у двійковому записі дає `10010110100101010` (17 бітів);
- повідомлення має 18 символів, тому додаємо один нуль зліва: `010010110100101010`.

| i | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| символ | t | c | d | d | o | a | d | e | p | w | w | e | a | s | r | e | s | d |
| біт | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |

Символи з одиничними бітами (`c`, `o`, `d`, `e`, `w`, `a`, `r`, `s`) складають слово `codewars`. Решту символів додано як шум, і саме це робить шифр стеганографічним: справжнє повідомлення сховане серед зайвих літер.

## Чому потрібна перевірка `n === 0`

Для порожнього рядка `padStart(0, "0")` залишає запис `"101"` без змін. Далі `"101".slice(-0)` еквівалентний `slice(0)` і повертає весь рядок. Цикл би не виконався, бо `n = 0`, але якби ми не вийшли раніше, логіка спиралася б на некоректну довжину маски. Рання перевірка прибирає цей крайній випадок.

## Можливий варіант без рядків

Те саме можна зробити бітовими операціями, але лише якщо `code` менший за 2³¹ (обмеження 32-бітних операцій JavaScript):

```js
function grille(message, code) {
  const n = message.length;
  let result = "";
  for (let i = 0; i < n; i++) {
    if ((code >> (n - 1 - i)) & 1) result += message[i];
  }
  return result;
}
```

Для символу з індексом `i` потрібен біт на позиції `n - 1 - i` (рахуючи справа), тому число зсувається вправо на цю величину. Потім `& 1` залишає молодший біт. Варіант з рядками надійніший для великих чисел.