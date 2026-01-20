<div class="description-content p-4">
                <div class="markdown prose max-w-none mb-8" id="description"><h2 id="introduction">Introduction</h2>
<p>The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.</p>
<p>The most frequently used key is "GA-DE-RY-PO-LU-KI".</p>
<pre><code> g =&gt; a
 a =&gt; g
 d =&gt; e
 e =&gt; d
  etc.
</code></pre>
<p>The letters, which are not on the list of substitutes, stay in the encrypted text without changes.</p>
<p>Other keys often used by Scouts:</p>
<pre><code>PO-LI-TY-KA-RE-NU
KA-CE-MI-NU-TO-WY
KO-NI-EC-MA-TU-RY
ZA-RE-WY-BU-HO-KI
BA-WO-LE-TY-KI-JU
RE-GU-LA-MI-NO-WY
</code></pre>
<h2 id="task">Task</h2>
<p>Our scouts had a party yesterday, and they had too much milk and cookies. As a result, all of them forgot the key. Your task is to help scouts to find the key that they used for encryption. Fortunately, they have some messages that are already encoded. </p>
<h2 id="input">Input</h2>
<p>The function accepts two arrays.</p>
<p>The <code>messages</code> string array consists of lowercase characters and whitespace characters. The strings on the <code>messages</code> array are scout's messages before encryption.</p>
<p>The <code>secrets</code> string array consists of lowercase characters and whitespace characters.</p>
<p>The strings on the <code>secrets</code> array are scout's messages after encryption. </p>
<h2 id="output">Output</h2>
<p>The returned string should consist of lowercase characters only. The pairs of substitutions should be ordered by the first letter of substitution. The letters in each pair should be in alphabetical order.</p>
<pre><code>ga =&gt; incorrect output (error: g is after a )
ag =&gt; correct output  
deag =&gt; incorrect output  (error: de is after ag)
agde =&gt; correct output  
</code></pre>
<h2 id="example">Example</h2>
<pre style="display: none;"><code class="language-csharp"><span class="cm-type">string</span>[] <span class="cm-variable">messages</span> <span class="cm-operator">=</span> { <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> };
<span class="cm-type">string</span>[] <span class="cm-variable">secretes</span> <span class="cm-operator">=</span> { <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> };
<span class="cm-variable">FindTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secretes</span>);   <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<pre><code class="language-javascript"> <span class="cm-keyword">var</span> <span class="cm-def">messages</span> <span class="cm-operator">=</span> [ <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> ];
 <span class="cm-keyword">var</span> <span class="cm-def">secrets</span> <span class="cm-operator">=</span>  [ <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> ];
 <span class="cm-variable">findTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secrets</span>);   <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"> <span class="cm-variable">messages</span> <span class="cm-operator">=</span> [ <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> ]
 <span class="cm-variable">secrets</span> <span class="cm-operator">=</span>  [ <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> ]
 <span class="cm-variable">find_the_key</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secrets</span>)    <span class="cm-comment">#=&gt; agdeikluopry</span>
</code></pre>
<pre style="display: none;"><code class="language-go"><span class="cm-keyword">var</span> <span class="cm-variable">messages</span> <span class="cm-operator">=</span> []<span class="cm-keyword">string</span>{<span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span>}
<span class="cm-keyword">var</span> <span class="cm-variable">secrets</span> <span class="cm-operator">=</span> []<span class="cm-keyword">string</span>{<span class="cm-string">"egncd pn thd tgbud"</span>, <span class="cm-string">"hked mr bddys"</span>, <span class="cm-string">"scplts ypcis"</span>}
<span class="cm-variable">FindTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secrets</span>)   <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<h1 id="gaderypoluki-collection">GADERYPOLUKI collection</h1>
<table cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<td><a href="https://www.codewars.com/kata/592a6ad46d6c5a62b600003f" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 1</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592b7b16281da94068000107" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 2</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592bdf59912f2209710000e9" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 3 - Missing Key</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592ceef6af58a64c7f00003c" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 4 - Missing key madness</a></td>
</tr>
</tbody></table>
</div>
                  <hr>
                  <div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Fundamentals</div><div class="keyword-tag">Ciphers</div><div class="keyword-tag">Cryptography</div></div>
              </div>

<br> <hr>  <br>

<div class="description-content p-4">

<div class="markdown prose max-w-none mb-8" id="description"><h2 id="introduction">Введение</h2>
<p>Шифр GADERYPOLUKI — это простой шифр замены, используемый в разведке для шифрования сообщений. Шифрование основано на коротком, легко запоминающемся ключе. Ключ записывается в виде пар букв, которые входят в состав простого шифра замены.</p>
<p>Наиболее часто используемый ключ — "GA-DE-RY-PO-LU-KI".</p>
<pre><code> g =&gt; a
a =&gt; g
d =&gt; e
e =&gt; д
и т. д.
</code></pre>
<p>Буквы, которых нет в списке замен, остаются в зашифрованном тексте без изменений.</p>
<p>Другие ключи, часто используемые скаутами:</p>
<pre><code>PO-LI-TY-KA-RE-NU
KA-CE-MI-NU-TO-WY
KO-NI-EC-MA-TU-RY
ZA-RE-WY-BU-HO-KI
BA-WO-LE-TY-KI-JU
RE-GU-LA-MI-NO-WY
</code></pre>
<h2 id="task">Задание</h2>
<p>Вчера у наших скаутов была вечеринка, и они съели слишком много молока и печенья. В результате все они забыли ключ. Ваша задача — помочь скаутам найти ключ, который они использовали для шифрования. К счастью, у них есть несколько уже закодированных сообщений. </p>
<h2 id="input">Входные данные</h2>
<p>Функция принимает два массива.</p>
<p>Строковый массив <code>messages</code> состоит из строчных букв и пробелов. Строки в массиве <code>messages</code> — это сообщения разведчика до шифрования.</p>
<p>Строковый массив <code>secrets</code> состоит из строчных букв и пробелов.</p>
<p>Строки в массиве <code>secrets</code> — это сообщения разведчика после шифрования.</p>
<h2 id="output">Выходные данные</h2>
<p>Возвращаемая строка должна состоять только из строчных букв. Пары замен должны быть упорядочены по первой букве замены. Буквы в каждой паре должны быть в алфавитном порядке.</p>
<pre><code>ga =&gt; неверный вывод (ошибка: g находится после a )
ag =&gt; правильный вывод
deag => неправильный вывод (ошибка: de после ag)
agde => правильный вывод
</code></pre>
<h2 id="example">Пример</h2>
<pre style="display: none;"><code class="language-csharp"><span class="cm-type">string</span>[] <span class="cm-variable">messages</span> <span class="cm-operator">=</span> { <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> };

<span class="cm-type">string</span>[] <span class="cm-variable">secretes</span> <span class="cm-operator">=</span> { <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> };
<span class="cm-variable">FindTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secretes</span>); <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<pre><code class="language-javascript"> <span class="cm-keyword">var</span> <span class="cm-def">messages</span> <span class="cm-operator">=</span> [ <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> ];
<span class="cm-keyword">var</span> <span class="cm-def">secrets</span> <span class="cm-operator">=</span> [ <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> ];
<span class="cm-variable">findTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secrets</span>); <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<pre style="display: none;"><code class="language-ruby"> <span class="cm-variable">messages</span> <span class="cm-operator">=</span> [ <span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span> ]
<span class="cm-variable">secrets</span> <span class="cm-operator">=</span> [ <span class="cm-string">"egncd pn thd tgbud"</span> ,<span class="cm-string">"hked mr bddys"</span> ,<span class="cm-string">"scplts ypcis"</span> ]
<span class="cm-variable">find_the_key</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">secrets</span>) <span class="cm-comment">#=&gt; agdeikluopry</span>
</code></pre>
<pre style="display: none;"><code class="language-go"><span class="cm-keyword">var</span> <span class="cm-variable">messages</span> <span class="cm-operator">=</span> []<span class="cm-keyword">string</span>{<span class="cm-string">"dance on the table"</span>, <span class="cm-string">"hide my beers"</span>, <span class="cm-string">"scouts rocks"</span>}
<span class="cm-keyword">var</span> <span class="cm-variable">secrets</span> <span class="cm-operator">=</span> []<span class="cm-keyword">string</span>{<span class="cm-string">"egncd pn thd tgbud"</span>, <span class="cm-string">"hked mr bddys"</span>, <span class="cm-string">"scplts ypcis"</span>}
<span class="cm-variable">FindTheKey</span>(<span class="cm-variable">messages</span>, <span class="cm-variable">секреты</span>) <span class="cm-comment">//=&gt; agdeikluopry</span>
</code></pre>
<h1 id="gaderypoluki-collection">GADERYPOLUKI collection</h1>
<table cellspacing="0" cellpadding="0" border="0">
<tbody><tr>
<td><a href="https://www.codewars.com/kata/592a6ad46d6c5a62b600003f" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 1</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592b7b16281da94068000107" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 2</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592bdf59912f2209710000e9" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 3 - Missing Key</a></td>
</tr>
<tr>
<td><a href="https://www.codewars.com/kata/592ceef6af58a64c7f00003c" data-turbolinks="false" target="_blank">GADERYPOLUKI cypher vol 4 - Missing key madness</a></td>
</tr>
</tbody></table>
</div>

<hr>

<div class="mt-4"><span><i class="icon-moon-tag "></i></span><div class="keyword-tag">Основы</div><div class="keyword-tag">Шифры</div><div class="keyword-tag">Криптография</div></div>

</div>

🔑 Логіка задачі
1. 	Маємо два масиви:
• 	 — оригінальні повідомлення.
• 	 — ті самі повідомлення після шифрування.
2. 	Шифр — це пари літер, які міняються місцями:
• 	Наприклад, якщо є пара , то кожна  в повідомленні стає , а кожна  стає .
3. 	Завдання: знайти всі такі пари, які використовувалися для шифрування.
4. 	Вивести ключ:
• 	Літери в парі мають бути в алфавітному порядку (наприклад, , а не ).
• 	Пари мають бути відсортовані за першою літерою.

🛠️ Алгоритм
1. 	Пройти по кожному повідомленню і відповідному зашифрованому рядку.
2. 	Для кожної позиції символів:
• 	Якщо символи різні → це означає, що вони утворюють пару.
• 	Додати пару у словник (щоб уникнути дублювання).
3. 	Після збору всіх пар:
• 	Відсортувати літери всередині кожної пари.
• 	Відсортувати всі пари за першою літерою.
• 	Об’єднати їх у один рядок.