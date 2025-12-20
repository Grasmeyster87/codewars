<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between <code>0</code> and <code>255</code>, inclusive.</p>
<h4 id="valid-inputs-examples">Valid inputs examples:</h4>
<pre><code>Examples of valid inputs:
1.2.3.4
123.45.67.89
</code></pre>
<h4 id="invalid-input-examples">Invalid input examples:</h4>
<pre><code>1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
</code></pre>
<h4 id="notes">Notes:</h4>
<ul>
<li>Leading zeros (e.g. <code>01.02.03.04</code>) are considered invalid</li>
<li>Inputs are guaranteed to be a single string</li>
</ul>
</div>

<br><hr><br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Напишите алгоритм, который будет определять действительные IPv4-адреса в десятичном формате. IP-адреса считаются действительными, если они состоят из четырех октетов со значениями от <code>0</code> до <code>255</code> включительно.</p>
<h4 id="valid-inputs-examples">Примеры действительных входных данных:</h4>
<pre><code>Примеры действительных входных данных:
1.2.3.4
123.45.67.89
</code></pre>
<h4 id="invalid-input-examples">Примеры недействительных входных данных:</h4>
<pre><code>1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
</code></pre>
<h4 id="notes">Примечания:</h4>
<ul>
<li>Начальные нули (например, <code>01.02.03.04</code>) считаются недействительными</li>
<li>Гарантируется, что введенные данные представляют собой одну строку</li>
</ul>
</div>


Чтобы проверить строку на то, что она является **корректным IPv4‑адресом** (четыре группы чисел от 0 до 255, разделённые точками), можно использовать такое регулярное выражение:

```js
const regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
```

### Разбор:
- `25[0-5]` → числа от 250 до 255  
- `2[0-4]\d` → числа от 200 до 249  
- `1\d\d` → числа от 100 до 199  
- `[1-9]?\d` → числа от 0 до 99  
- `(\. ... ){3}` → повторяем ещё три группы, разделённые точками  

### Пример использования:
```js
const regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

console.log(regex.test("192.168.0.1"));   // true
console.log(regex.test("255.255.255.255")); // true
console.log(regex.test("256.100.50.25"));   // false
console.log(regex.test("192.168.0"));       // false
```

Таким образом, это выражение гарантирует, что каждая группа чисел находится в диапазоне **0–255** и что их ровно четыре, разделённых точками.  

Хочешь, я ещё покажу вариант для проверки **IPv6**‑адресов?
