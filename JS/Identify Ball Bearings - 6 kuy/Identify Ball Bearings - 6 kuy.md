<div class="markdown prose max-w-none mb-8" id="description"><p>Failure on the factory floor!! One box of 'deluxe' ball-bearings has been mixed in with all the boxes of 'normal' ball-bearings! We need your help to identify the right box!</p>
<h2 id="information">Information</h2>
<p>What you know about the bearings:</p>
<ul>
<li>'deluxe' ball-bearings weigh exactly <code>11 grams</code></li>
<li>'normal' ball-bearings weigh exactly <code>10 grams</code></li>
<li>Besides weight, both kinds of ball-bearings are identical</li>
<li>There are (effectively) infinite bearings in each box</li>
<li>Each box contains exclusively one type of bearing (either regular, or 'deluxe')</li>
</ul>
<p>To help you identify the right box, you also have access to a <em>Super Scale™</em> which will tell you the exact weight of anything you give it. Unfortunately, getting it ready for each measurement takes a long time, so you only have time to use it once!</p>
<h2 id="task">Task</h2>
<p>Write a function which accepts two arguments:</p>
<ul>
<li><code>bearings</code>: A list of the bearing types contained in each 'box'. (length between <code>1</code> and <code>200</code> inclusive)</li>
</ul>
<ul>
<li><code>weigh</code>: a function which accepts any number of arguments, returning the total weight of all. Can only be used once!</li>
</ul>
<p>Your function should identify and return the single 'deluxe' bearing sample from <code>bearings</code>.</p>
<h2 id="example">Example</h2>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">def</span> <span class="cm-def">identify_bb</span>(<span class="cm-variable">bearings</span>, <span class="cm-variable">weigh</span>):
    <span class="cm-variable">a</span>, <span class="cm-variable">b</span>, <span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>
    <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>, <span class="cm-variable">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span>:
        <span class="cm-comment"># bearings 'a' and 'b' must both be 10, so 'c' must be deluxe</span>
        <span class="cm-keyword">return</span> <span class="cm-variable">c</span> 
    <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span>: <span class="cm-comment"># Error: weigh has already been used!</span>
        <span class="cm-keyword">return</span> <span class="cm-variable">b</span>
    <span class="cm-keyword">return</span> <span class="cm-variable">a</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">identifyBB</span>(<span class="cm-def">bearings</span>, <span class="cm-def">weigh</span>) {
  <span class="cm-keyword">const</span> [<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">c</span>] <span class="cm-operator">=</span> <span class="cm-variable-2">bearings</span>;
  <span class="cm-keyword">if</span> ( <span class="cm-variable-2">weigh</span>(<span class="cm-variable-2">a</span>, <span class="cm-variable-2">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span> )
    <span class="cm-comment">// bearings 'a' and 'b' must both be 10, so 'c' must be deluxe</span>
    <span class="cm-keyword">return</span> <span class="cm-variable-2">c</span>;
  <span class="cm-keyword">else</span> <span class="cm-keyword">if</span> ( <span class="cm-variable-2">weigh</span>(<span class="cm-variable-2">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span> ) <span class="cm-comment">// Error: weigh has already been used!</span>
    <span class="cm-keyword">return</span> <span class="cm-variable-2">b</span>;
  <span class="cm-keyword">else</span>
    <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span>;
}
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-keyword">public</span> <span class="cm-keyword">static</span> <span class="cm-variable">Bearing</span> <span class="cm-def">IdentifyBb</span>(<span class="cm-variable">Bearing</span>[] <span class="cm-variable">bearings</span>, <span class="cm-type">Func</span><span class="cm-operator">&lt;</span><span class="cm-variable">IEnumerable</span><span class="cm-operator">&lt;</span><span class="cm-variable">Bearing</span><span class="cm-operator">&gt;</span>, <span class="cm-type">long</span><span class="cm-operator">&gt;</span> <span class="cm-variable">weigh</span>)
{
  <span class="cm-variable">Bearing</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">0</span>],
          <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">1</span>],
          <span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">2</span>];
  <span class="cm-keyword">if</span> (<span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>, <span class="cm-variable">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span>)
    <span class="cm-comment">// bearings 'a' and 'b' must both be 10, so 'c' must be deluxe</span>
    <span class="cm-keyword">return</span> <span class="cm-variable">c</span>;
  <span class="cm-keyword">if</span> (<span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span>) <span class="cm-comment">// Error: weigh has already been used!</span>
    <span class="cm-keyword">return</span> <span class="cm-variable">b</span>;
  <span class="cm-keyword">return</span> <span class="cm-variable">a</span>;
}
</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="cm-keyword">let</span> <span class="cm-variable">identify_bearing</span> (<span class="cm-variable">bearings</span><span class="cm-operator">:</span> <span class="cm-variable">bearing</span> <span class="cm-variable">list</span>) (<span class="cm-variable">weigh</span><span class="cm-operator">:</span> <span class="cm-variable">bearing</span> <span class="cm-variable">list</span> <span class="cm-operator">-</span><span class="cm-operator">&gt;</span> <span class="cm-type">int</span>)<span class="cm-operator">:</span> <span class="cm-variable">bearing</span> <span class="cm-operator">=</span> 
  <span class="cm-keyword">let</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-builtin">List</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">bearings</span> <span class="cm-number">0</span>
  <span class="cm-keyword">and</span> <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-builtin">List</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">bearings</span> <span class="cm-number">1</span>
  <span class="cm-keyword">and</span> <span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-builtin">List</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">bearings</span> <span class="cm-number">2</span>
  <span class="cm-keyword">in</span> <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>; <span class="cm-variable">b</span>] <span class="cm-operator">=</span> <span class="cm-number">20</span> <span class="cm-keyword">then</span>
    <span class="cm-comment">(* bearings 'a' and 'b' must both be 10, so 'c' must be deluxe *)</span>
    <span class="cm-variable">c</span>
  <span class="cm-keyword">else</span> <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>] <span class="cm-operator">=</span> <span class="cm-number">10</span> <span class="cm-keyword">then</span> <span class="cm-comment">(* Failure: weigh has already been used! *)</span>
    <span class="cm-variable">b</span>
  <span class="cm-keyword">else</span>
    <span class="cm-variable">a</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">identifyBB</span> <span class="cm-keyword">::</span> [<span class="cm-variable-2">Bearing</span>] <span class="cm-keyword">-&gt;</span> ([<span class="cm-variable-2">Bearing</span>] <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">IO</span> <span class="cm-builtin">Int</span>) <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">IO</span> <span class="cm-variable-2">Bearing</span>
<span class="cm-variable">identifyBB</span> <span class="cm-variable">bearings</span><span class="cm-keyword">@</span>[<span class="cm-variable">a</span>,<span class="cm-variable">b</span>,<span class="cm-variable">c</span>] <span class="cm-variable">weigh</span> <span class="cm-keyword">=</span> <span class="cm-keyword">do</span>
  <span class="cm-variable">weightAB</span> <span class="cm-keyword">&lt;-</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>,<span class="cm-variable">b</span>]
  <span class="cm-keyword">if</span> <span class="cm-variable">weightAB</span> <span class="cm-builtin">==</span> <span class="cm-number">20</span>
    <span class="cm-keyword">then</span> <span class="cm-builtin">return</span> <span class="cm-variable">c</span>
    <span class="cm-keyword">else</span> <span class="cm-keyword">do</span>
      <span class="cm-variable">weightA</span> <span class="cm-keyword">&lt;-</span> <span class="cm-variable">weight</span> [<span class="cm-variable">a</span>] <span class="cm-comment">-- Failure: weigh has already been used!</span>
      <span class="cm-keyword">if</span> <span class="cm-variable">weightA</span> <span class="cm-builtin">==</span> <span class="cm-number">10</span>
        <span class="cm-keyword">then</span> <span class="cm-builtin">return</span> <span class="cm-variable">b</span>
        <span class="cm-keyword">else</span> <span class="cm-builtin">return</span> <span class="cm-variable">a</span>
</code></pre>
<h4 id="try-some-other-riddle-kata">Try some other riddle kata:</h4>
<ul>
<li><a href="https://www.codewars.com/kata/618647c4d01859002768bc15" data-turbolinks="false" target="_blank">Hat Game</a></li>
<li><a href="https://www.codewars.com/kata/62bf879e8e54a4004b8c3a92" data-turbolinks="false" target="_blank">Extreme Hat Game</a></li>
<li><a href="https://www.codewars.com/kata/634f18946a80b8003d80e728" data-turbolinks="false" target="_blank">Hat Game 2</a></li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>ЧП на производстве!! Одна коробка с «улучшенными» (deluxe) шарикоподшипниками попала к коробкам с «обычными» шарикоподшипниками! Нам нужна ваша помощь, чтобы найти нужную коробку!</p>
<h2 id="information">Информация</h2>
<p>Что известно о подшипниках:</p>
<ul>
<li>«Улучшенные» (deluxe) шарикоподшипники весят ровно <code>11 граммов</code>.</li>
<li>«Обычные» шарикоподшипники весят ровно <code>10 граммов</code>.</li>
<li>Помимо веса, оба вида подшипников идентичны.</li>
<li>В каждой коробке находится (практически) бесконечное количество подшипников.</li>
<li>В каждой коробке содержится только один тип подшипников (либо обычные, либо «улучшенные»).</li>
</ul>
<p>Чтобы определить нужную коробку, в вашем распоряжении есть <em>Super Scale™</em> — устройство, которое показывает точный вес любого объекта. К сожалению, подготовка устройства к каждому измерению занимает много времени, поэтому воспользоваться им можно только один раз!</p>
<h2 id="task">Задача</h2>
<p>Напишите функцию, которая принимает два аргумента:</p>
<ul>
<li><code>bearings</code>: список типов подшипников, находящихся в каждой «коробке» (длина списка — от <code>1</code> до <code>200</code> включительно).</li>
</ul>
<ul>
<li><code>weigh</code>: функция, которая принимает произвольное количество аргументов и возвращает их суммарный вес.</li>
</ul> Можно использовать только один раз!</li>
</ul>
<p>Ваша функция должна определить и вернуть единственный образец подшипника категории «deluxe» из списка <code>bearings</code>.</p>
<h2 id="example">Пример</h2>
<pre style="display: none;"><code class="language-python"><span class="cm-keyword">def</span> <span class="cm-def">identify_bb</span>(<span class="cm-variable">bearings</span>, <span class="cm-variable">weigh</span>):
<span class="cm-variable">a</span>, <span class="cm-variable">b</span>, <span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>
<span class="cm-keyword">if</span> <span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>, <span class="cm-variable">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span>:
<span class="cm-comment"># подшипники 'a' и 'b' должны весить по 10, значит, 'c' — это «deluxe»</span>
<span class="cm-keyword">return</span> <span class="cm-variable">c</span>
<span class="cm-keyword">if</span> <span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span>: <span class="cm-comment"># Ошибка: функция weigh уже была использована!</span>
<span class="cm-keyword">return</span> <span class="cm-variable">b</span>
<span class="cm-keyword">return</span> <span class="cm-variable">a</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">identifyBB</span>(<span class="cm-def">bearings</span>, <span class="cm-def">weigh</span>) {
<span class="cm-keyword">const</span> [<span class="cm-def">a</span>, <span class="cm-def">b</span>, <span class="cm-def">c</span>] <span class="cm-operator">=</span> <span class="cm-variable-2">bearings</span>; 
<span class="cm-keyword">if</span> ( <span class="cm-variable-2">weigh</span>(<span class="cm-variable-2">a</span>, <span class="cm-variable-2">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span> )
<span class="cm-comment">// подшипники «a» и «b» должны весить по 10, значит, «c» — улучшенный (deluxe)</span>
<span class="cm-keyword">return</span> <span class="cm-variable-2">c</span>; 
<span class="cm-keyword">else</span> <span class="cm-keyword">if</span> ( <span class="cm-variable-2">weigh</span>(<span class="cm-variable-2">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span> ) <span class="cm-comment">// Ошибка: функция weigh уже была использована!</span>
<span class="cm-keyword">return</span> <span class="cm-variable-2">b</span>; 
<span class="cm-keyword">else</span>
<span class="cm-keyword">return</span> <span class="cm-variable-2">a</span>; }
</code></pre>
<pre style="display: none;"><code class="language-csharp"><span class="cm-keyword">public</span> <span class="cm-keyword">static</span> <span class="cm-variable">Bearing</span> <span class="cm-def">IdentifyBb</span>(<span class="cm-variable">Bearing</span>[] <span class="cm-variable">bearings</span>, <span class="cm-type">Func</span><span class="cm-operator">&lt;</span><span class="cm-variable">IEnumerable</span><span class="cm-operator">&lt;</span><span class="cm-variable">Bearing</span><span class="cm-operator">&gt;</span>, <span class="cm-type">long</span><span class="cm-operator">&gt;</span> <span class="cm-variable">weigh</span>)
{
<span class="cm-variable">Bearing</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">0</span>],
<span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">1</span>],
<span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-variable">bearings</span>[<span class="cm-number">2</span>]; 
<span class="cm-keyword">if</span> (<span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>, <span class="cm-variable">b</span>) <span class="cm-operator">==</span> <span class="cm-number">20</span>)
<span class="cm-comment">// подшипники «a» и «b» должны весить по 10, значит, «c» — это «deluxe»</span>
<span class="cm-keyword">return</span> <span class="cm-variable">c</span>; 
<span class="cm-keyword">if</span> (<span class="cm-variable">weigh</span>(<span class="cm-variable">a</span>) <span class="cm-operator">==</span> <span class="cm-number">10</span>) <span class="cm-comment">// Ошибка: функция weigh уже была использована!</span>
<span class="cm-keyword">return</span> <span class="cm-variable">b</span>; 
<span class="cm-keyword">return</span> <span class="cm-variable">a</span>; }
</code></pre>
<pre style="display: none;"><code class="language-ocaml"><span class="cm-keyword">let</span> <span class="cm-variable">identify_bearing</span> (<span class="cm-variable">bearings</span><span class="cm-operator">:</span> <span class="cm-variable">bearing</span> <span class="cm-variable">list</span>) (<span class="cm-variable">weigh</span><span class="cm-operator">:</span> <span class="cm-variable">bearing</span> <span class="cm-variable">list</span> <span class="cm-operator">-</span><span class="cm-operator">&gt;</span> <span class="cm-type">int</span>)<span class="cm-operator">:</span> <span class="cm-variable">подшипник</span> <span class="cm-operator">=</span>
<span class="cm-keyword">let</span> <span class="cm-variable">a</span> <span class="cm-operator">=</span> <span class="cm-builtin">Список</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">подшипники</span> <span class="cm-number">0</span>
<span class="cm-keyword">and</span> <span class="cm-variable">b</span> <span class="cm-operator">=</span> <span class="cm-builtin">Список</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">bearings</span> <span class="cm-number">1</span>
<span class="cm-keyword">and</span> <span class="cm-variable">c</span> <span class="cm-operator">=</span> <span class="cm-builtin">List</span><span class="cm-operator">.</span><span class="cm-variable">nth</span> <span class="cm-variable">bearings</span> <span class="cm-number">2</span>
<span class="cm-keyword">in</span> <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>; <span class="cm-variable">b</span>] <span class="cm-operator">=</span> <span class="cm-number">20</span> <span class="cm-keyword">then</span>
<span class="cm-comment">(* подшипники «a» и «b» должны оба весить 10, следовательно, «c» — это «deluxe» *)</span>
<span class="cm-variable">c</span>
<span class="cm-keyword">else</span> <span class="cm-keyword">if</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>] <span class="cm-operator">=</span> <span class="cm-number">10</span> <span class="cm-keyword">then</span> <span class="cm-comment">(* Ошибка: функция weigh уже была использована! *)</span>
<span class="cm-variable">b</span>
<span class="cm-keyword">else</span>
<span class="cm-variable">a</span>
</code></pre>
<pre style="display: none;"><code class="language-haskell"><span class="cm-variable">identifyBB</span> <span class="cm-keyword">::</span> [<span class="cm-variable-2">Bearing</span>] <span class="cm-keyword">-&gt;</span> ([<span class="cm-variable-2">Bearing</span>] <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">IO</span> <span class="cm-builtin">Int</span>) <span class="cm-keyword">-&gt;</span> <span class="cm-builtin">IO</span> <span class="cm-variable-2">Bearing</span>
<span class="cm-variable">identifyBB</span> <span class="cm-variable">bearings</span><span class="cm-keyword">@</span>[<span class="cm-variable">a</span>,<span class="cm-variable">b</span>,<span class="cm-variable">c</span>] <span class="cm-variable">weigh</span> <span class="cm-keyword">=</span> <span class="cm-keyword">do</span>
<span class="cm-variable">weightAB</span> <span class="cm-keyword">&lt;-</span> <span class="cm-variable">weigh</span> [<span class="cm-variable">a</span>,<span class="cm-variable">b</span>]
<span class="cm-keyword">if</span> <span class="cm-variable">weightAB</span> <span class="cm-builtin">==</span> <span class="cm-number">20</span>
<span class="cm-keyword">then</span> <span class="cm-builtin">return</span> <span class="cm-variable">c</span>
<span class="cm-keyword">else</span> <span class="cm-keyword">do</span>
<span class="cm-variable">weightA</span> <span class="cm-keyword">&lt;</span> <span class="cm-variable">weight</span> [<span class="cm-variable">a</span>] <span class="cm-comment">-- Ошибка: взвешивание уже было выполнено!</span>
<span class="cm-keyword">if</span> <span class="cm-variable">weightA</span> <span class="cm-builtin">==</span> <span class="cm-number">10</span>
<span class="cm-keyword">then</span> <span class="cm-builtin">return</span> <span class="cm-variable">b</span>
<span class="cm-keyword">else</span> <span class="cm-builtin">return</span> <span class="cm-variable">a</span>
</code></pre>
<h4 id="try-some-other-riddle-kata">Попробуйте другие задачи-загадки (kata):</h4>
<ul>
<li><a href="https://www.codewars.com/kata/618647c4d01859002768bc15" data-turbolinks="false" target="_blank">Hat Game</a></li>
<li><a href="https://www.codewars.com/kata/62bf879e8e54a4004b8c3a92" data-turbolinks="false" target="_blank">Extreme Hat Game</a></li>
<li><a href="https://www.codewars.com/kata/634f18946a80b8003d80e728" data-turbolinks="false" target="_blank">Hat Game 2</a></li>
</ul>
</div>

Ідея: зважування можна використати лише раз, але в одне зважування можна покласти різну кількість підшипників з різних коробок.

Алгоритм

З коробки №0 беремо 0 підшипників, з коробки №1 беремо 1, з коробки №2 беремо 2, і так далі. З коробки №i беремо i штук.
Зважуємо все разом одним викликом weigh.
Якби всі підшипники були звичайними, вага дорівнювала б 10 * кількість. Кожен «deluxe» підшипник додає зайвий 1 г.
Лишок ваги weight - 10 * кількість дорівнює кількості взятих «deluxe» підшипників. Це й є індекс потрібної коробки.

Ця схема працює, бо «deluxe» коробка рівно одна. Якщо лишок 0, це коробка №0, з якої ми нічого не брали. Якщо лишок 3, це коробка №3.