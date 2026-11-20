<div class="markdown prose max-w-none mb-8" id="description"><p>Let us consider this example (array written in general format):</p>
<p><code>ls = [0, 1, 3, 6, 10]</code></p>
<p>Its following parts:</p>
<pre><code>ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
</code></pre>
<p>The corresponding sums are (put together in a list):
<code>[20, 20, 19, 16, 10, 0]</code></p>
<p>The function <code>parts_sums</code> (or its variants in other languages) will take as parameter a list <code>ls</code>
and return a list of the sums of its parts as defined above.</p>
<h4 id="other-examples">Other Examples:</h4>
<pre><code>ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -&gt; [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -&gt; [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
</code></pre>
<h4 id="notes">Notes</h4>
<ul>
<li>Take a look at performance: some lists have thousands of elements.</li>
<li>Please ask before translating.</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Розгляньмо такий приклад (масив у загальному вигляді):</p>
<p><code>ls = [0, 1, 3, 6, 10]</code></p>
<p>Його складові частини:</p>
<pre><code>ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
</code></pre>
<p>Відповідні суми (зібрані у список):
<code>[20, 20, 19, 16, 10, 0]</code></p>
<p>Функція <code>parts_sums</code> (або її аналоги в інших мовах програмування) приймає як параметр список <code>ls</code>
і повертає список сум його частин, визначених вище.</p>
<h4 id="other-examples">Інші приклади:</h4>
<pre><code>ls = [1, 2, 3, 4, 5, 6]
parts_sums(ls) -&gt; [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -&gt; [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
</code></pre>
<h4 id="notes">Примітки</h4>
<ul>
<li>Зверніть увагу на продуктивність: деякі списки містять тисячі елементів.</li>
<li>Будь ласка, узгодьте переклад, перш ніж приступати до нього.</li>
</ul>
</div>