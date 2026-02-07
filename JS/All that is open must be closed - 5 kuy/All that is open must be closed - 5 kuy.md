<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><h3 id="background">Background</h3>
<p>We <strong>all</strong> know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.  </p>
<p>Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)</p>
<h3 id="kata">Kata</h3>
<p>Your challenge in this kata is to write a function to validate that a supplied string is balanced.</p>
<p>You must determine if all that is open is then closed, and nothing is closed which is not already open!</p>
<p>You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.</p>
<p>You may assume that the second string always has an even number of characters.</p>
<h3 id="examples">Examples</h3>
<pre><code class="language-javascript"><span class="cm-comment">// In this case '(' opens a section, and ')' closes a section</span>
(<span class="cm-string">"(Sensei says yes!)"</span>, <span class="cm-string">"()"</span>)       <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"(Sensei says no!"</span>, <span class="cm-string">"()"</span>)         <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>

<span class="cm-comment">// In this case '(' and '[' open a section, while ')' and ']' close a section</span>
(<span class="cm-string">"(Sensei [says] yes!)"</span>, <span class="cm-string">"()[]"</span>)   <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"(Sensei [says) no!]"</span>, <span class="cm-string">"()[]"</span>)    <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>

<span class="cm-comment">// In this case a single quote (') both opens and closes a section</span>
(<span class="cm-string">"Sensei says 'yes'!"</span>, <span class="cm-string">"''"</span>)       <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"Sensei say's no!"</span>, <span class="cm-string">"''"</span>)         <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><h3 id="background">Фон</h3>
<p>Мы <strong>все</strong> знаем о "балансировке скобок" (плюс скобки, фигурные скобки и шевроны) и даже о балансировке одинаковых символов. </p>
<p>Перечитайте последнее предложение еще раз: я дважды уравновесил разные символы и одинаковые символы, а вы даже не заметили... :)</p>
<h3 id="kata">Ката</h3>
<p>Ваша задача в этой ката — написать функцию для проверки того, что предоставленная строка уравновешена.</p>
<p>Вы должны определить, закрыто ли все открытое, и ничего не закрыто, если оно еще не открыто!</p>
<p>Вам будет дана строка для проверки и вторая строка, где каждая пара символов определяет открывающую и закрывающую последовательность, которую необходимо уравновесить.</p>
<p>Вы можете предположить, что вторая строка всегда содержит четное количество символов.</p>
<h3 id="examples">Примеры</h3>
<pre><code class="language-javascript"><span class="cm-comment">// В этом случае '(' открывает раздел, а ')' закрывает раздел</span>
(<span class="cm-string">"(Сэнсэй говорит да!)"</span>, <span class="cm-string">"()"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"(Сэнсэй говорит нет!"</span>, <span class="cm-string">"()"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>

<span class="cm-comment">// В этом случае '(' и '[' открывают раздел, а ')' и ']' закрывают раздел</span>
(<span class="cm-string">"(Сэнсэй [говорит] да!)"</span>, <span class="cm-string">"()[]"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"(Сенсей [говорит) нет!]"</span>, <span class="cm-string">"()[]"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>

<span class="cm-comment">// В этом случае одинарная кавычка (') одновременно открывает и закрывает раздел</span>
(<span class="cm-string">"Сенсей говорит 'да'!"</span>, <span class="cm-string">"''"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">true</span>
(<span class="cm-string">"Сенсей говорит нет!"</span>, <span class="cm-string">"''"</span>) <span class="cm-operator">=&gt;</span> <span class="cm-atom">false</span>
</code></pre>
</div>