<div class="markdown prose max-w-none mb-8" id="description"><p>The objective of <a href="https://en.wikipedia.org/wiki/Duck,_duck,_goose" data-turbolinks="false" target="_blank">Duck, duck, goose</a> is to <em>walk in a circle</em>, tapping on each player's head until one is chosen.</p>
<hr>
<p>Task:</p>
<p>Given an array of Player objects and a position (first position is 1), return the <code>name</code> of the chosen Player.<br><code>name</code> is a property of <code>Player</code> objects, e.g <code>Player.name</code></p>
<hr>
<p>Example:</p>
<pre><code>duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
</code></pre>
<hr>
<p>Random input limits:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mo>≤</mo><mtext>Players</mtext><mo>≤</mo><mn>50</mn></mrow>6 \le \text{Players} \le 50</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.7804em;vertical-align:-0.136em;" class="strut"></span><span class="mord">6</span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.8889em;vertical-align:-0.1944em;" class="strut"></span><span class="mord text"><span class="mord">Players</span></span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.6444em;" class="strut"></span><span class="mord">50</span></span></span></span></li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5000</mn><mo>≤</mo><mtext>Position</mtext><mo>≤</mo><mn>50000</mn></mrow>5000 \le \text{Position} \le 50000</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.7804em;vertical-align:-0.136em;" class="strut"></span><span class="mord">5000</span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.8193em;vertical-align:-0.136em;" class="strut"></span><span class="mord text"><span class="mord">Position</span></span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.6444em;" class="strut"></span><span class="mord">50000</span>﷯</span></span></span></li>
</ul>
</div>

<br><hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Цель игры <a href="https://en.wikipedia.org/wiki/Duck,_duck,_goose" data-turbolinks="false" target="_blank">Утка, утка, гусь</a> — <em>ходить по кругу</em>, постукивая по голове каждого игрока, пока не будет выбран один из них.</p>
<hr>
<p>Задача:</p>
<p>Дано множество объектов Player и позиция (первая позиция — 1). Верните <code>имя</code> выбранного игрока.<br><code>имя</code> — свойство объектов <code>Player</code>, например, <code>Player.name</code></p>
<hr>
<p>Пример:</p>
<pre><code>duck_duck_goose([a, b, c, d], 1) должно возвращать a.name
duck_duck_goose([a, b, c, d], 5) должно возвращать a.name
duck_duck_goose([a, b, c, d], 4) должно возвращать d.name
</code></pre>
<hr>
<p>Ограничения на случайный ввод:</p>
<ul>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mo>≤</mo><mtext>Игроки</mtext><mo>≤</mo><mn>50</mn></mrow>6 \le \text{Игроки} \le 50</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.7804em;vertical-align:-0.136em;" class="strut"></span><span class="mord">6</span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.8889em;vertical-align:-0.1944em;" class="strut"></span><span class="mord text"><span class="mord">Players</span></span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.6444em;" class="strut"></span><span class="mord">50</span></span></span></span></li>
<li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5000</mn><mo>≤</mo><mtext>Position</mtext><mo>≤</mo><mn>50000</mn></mrow>5000 \le \text{Position} \le 50000</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:0.7804em;vertical-align:-0.136em;" class="strut"></span><span class="mord">5000</span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.8193em;vertical-align:-0.136em;" class="strut"></span><span class="mord text"><span class="mord">Position</span></span><span style="margin-right:0.2778em;" class="mspace"></span><span class="mrel">≤</span><span style="margin-right:0.2778em;" class="mspace"></span></span><span class="base"><span style="height:0.6444em;" class="strut"></span><span class="mord">50000</span>﷯</span></span></span></li>
</ul>
</div>