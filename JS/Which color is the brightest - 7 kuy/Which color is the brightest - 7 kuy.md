<div class="markdown prose max-w-none mb-8" id="description"><p>One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.</p>
<p>One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model.  Value is defined as the largest component of a color:</p>
<pre><code>V = max(R,G,B)
</code></pre>
<p>You are given a list of colors in 6-digit <a href="https://en.wikipedia.org/wiki/Web_colors" data-turbolinks="false" target="_blank">hexidecimal notation</a> <code>#RRGGBB</code>. Return the brightest of these colors! </p>
<p>For example,</p>
<pre><code>brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
</code></pre>
<p>If there are multiple brightest colors, return the first one:</p>
<pre><code>brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
</code></pre>
<p>Note that both input and output should use upper case for characters <code>A, B, C, D, E, F</code>.</p>
</div>

<div class="markdown prose max-w-none mb-8" id="description"><p>Один из распространенных способов представления цвета — это цветовая модель RGB, в которой основные цвета света — красный, зеленый и синий — складываются различными способами для воспроизведения широкого спектра цветов.</p>
<p>Один из способов определения яркости цвета — это нахождение значения V альтернативной цветовой модели HSV (оттенок, насыщенность, яркость). Яркость определяется как наибольшая составляющая цвета:</p>
<pre><code>V = max(R,G,B)
</code></pre>
<p>Вам дан список цветов в 6-значной <a href="https://en.wikipedia.org/wiki/Web_colors" data-turbolinks="false" target="_blank">шестнадцатеричной системе счисления</a> <code>#RRGGBB</code>. Верните самый яркий из этих цветов!</p> </p>
<p>Например,</p>
<pre><code>brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
</code></pre>
<p>Если есть несколько самых ярких цветов, верните первый:</p>
<pre><code>brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
</code></pre>
<p>Обратите внимание, что как при вводе, так и при выводе символы <code>A, B, C, D, E, F</code> должны быть в верхнем регистре.</p>
</div>

value(hex) — обчислює значення V за формулою V = max(R,G,B):
hex.slice(1, 3) бере два символи після # (наприклад "FF" з 
#FFFFFF) — це R
parseInt(..., 16) переводить hex-рядок у число (16 — основа системи числення)
так само для G (slice(3, 5)) і B (slice(5, 7))
Math.max повертає найбільшу з трьох компонент
colors.reduce(...) проходить по масиву та тримає "найяскравіший на даний момент" колір (best). Порівняння строге > (а не >=), тому при рівних значеннях V залишається перший знайдений колір, як і вимагає умова задачі.
Регістр символів A–F не має значення для parseInt (він однаково розпізнає "ff" і "FF"), тому вхідні дані парсяться коректно; а оскільки функція повертає сам оригінальний рядок кольору без змін, вихід автоматично зберігає той регістр, у якому колір був переданий (у тестах — завжди верхній).