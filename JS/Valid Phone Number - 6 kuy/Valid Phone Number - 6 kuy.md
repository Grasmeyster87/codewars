<div class="markdown prose max-w-none mb-8" id="description"><p>Write a function that accepts a string, and returns true if it is in the form of a phone number. <br>Assume that any integer from 0-9 in any of the spots will produce a valid phone number.<br></p>
<p>Only worry about the following format:<br>
(123) 456-7890   (don't forget the space after the close parentheses) <br> <br>
Examples:</p>
<pre><code>"(123) 456-7890"  =&gt; true
"(1111)555 2345"  =&gt; false
"(098) 123 4567"  =&gt; false
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишите функцию, которая принимает строку и возвращает true, если она имеет вид номера телефона. <br>Предположим, что любое целое число от 0 до 9 в любом из этих мест будет являться допустимым номером телефона.<br></p>
<p>Обратите внимание только на следующий формат:<br>
(123) 456-7890 (не забудьте пробел после закрывающей скобки) <br> <br>
Примеры:</p>
<pre><code>"(123) 456-7890" => true
"(1111)555 2345" => false
"(098) 123 4567" => false
</code></pre>
</div>

function validPhoneNumber(phoneNumber) {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}

module.exports = validPhoneNumber;

Пояснення регулярки:

^ — початок рядка
\( — літерна дужка ( (екрановано, бо ( — спецсимвол regex)
\d{3} — рівно 3 цифри
\) — літерна дужка )
  — літерально пробіл (той самий, про який попереджає умова)
\d{3} — ще 3 цифри
- — літерний дефіс
\d{4} — 4 цифри
$ — кінець рядка (щоб не пропустити зайві символи в кінці)

Перевіримо на прикладах:

"(123) 456-7890" → повністю відповідає шаблону → true ✅
"(1111)555 2345" → 4 цифри в дужках, немає пробілу/тире у потрібних місцях → false ✅
"(098) 123 4567" → пробіл замість тире → false ✅
"(123)456-7890" → немає пробілу після дужки → false ✅