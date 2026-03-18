<div class="markdown prose max-w-none mb-8" id="description"><p>Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return <code>true</code> if the string is valid, and <code>false</code> if it's invalid.</p>
<p>This Kata is similar to the <a href="https://www.codewars.com/kata/valid-parentheses-1" data-turbolinks="false" target="_blank">Valid Parentheses</a> Kata, but introduces new characters: brackets <code>[]</code>, and curly braces <code>{}</code>. Thanks to <code>@arnedag</code> for the idea!</p>
<p>All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: <code>()[]{}</code>. </p>
<h3 id="what-is-considered-valid">What is considered Valid?</h3>
<p>A string of braces is considered valid if all braces are matched with the correct brace.</p>
<h2 id="examples">Examples</h2>
<pre><code>"(){}[]"   =&gt;  True
"([{}])"   =&gt;  True
"(}"       =&gt;  False
"[(])"     =&gt;  False
"[({})](]" =&gt;  False
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Напишите функцию, которая принимает строку из фигурных скобок и определяет, является ли порядок скобок допустимым. Она должна возвращать <code>true</code>, если строка допустима, и <code>false</code>, если она недопустима.</p>
<p>Эта задача похожа на задачу <a href="https://www.codewars.com/kata/valid-parentheses-1" data-turbolinks="false" target="_blank">Допустимые скобки</a>, но вводит новые символы: квадратные скобки <code>[]</code> и фигурные скобки <code>{}</code>. Спасибо <code>@arnedag</code> за идею!</p>
<p>Все входные строки будут непустыми и будут состоять только из круглых скобок, квадратных скобок и фигурных скобок: <code>()[]{}</code>. </p>
<h3 id="what-is-considered-valid">Что считается допустимым?</h3>
<p>Строка из фигурных скобок считается допустимой, если все скобки соответствуют правильной скобке.</p>
<h2 id="examples">Примеры</h2>
<pre><code>"(){}[]" =&gt; True
"([{}])" =&gt; True
"(}" =&gt; False
"[(])" =&gt; False
"[({})](]" =&gt; False
</code></pre>
</div>