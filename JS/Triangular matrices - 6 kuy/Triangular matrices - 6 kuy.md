<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>A square matrix is considered upper-triangular if all the entries below the main diagonal are 0. Similarly, a square matrix is considered lower-triangular if all the entries above the main diagonal are 0.</p>
<p>Given a square matrix of size n &gt; 1, determine if it is upper triangular or lower triangular. The matrix (mat) is represented by a nested array of rows. </p>
<pre><code class="language-ruby"><span class="cm-tag">In</span> <span class="cm-tag">Ruby</span>, <span class="cm-tag">Matrix</span> <span class="cm-variable">is</span> <span class="cm-variable">disabled</span>
</code></pre>
<p>Examples</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">upper_triangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>]]) <span class="cm-comment"># =&gt; true</span>
<span class="cm-variable">upper_triangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment"># =&gt; false</span>
<span class="cm-variable">lower_triangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">1</span>]]) <span class="cm-comment"># =&gt; true</span>
<span class="cm-variable">lower_triangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment"># =&gt; false</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">upperTriangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>]]) <span class="cm-comment">// =&gt; true</span>
<span class="cm-variable">upperTriangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment">// =&gt; false</span>
<span class="cm-variable">lowerTriangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">1</span>]]) <span class="cm-comment">// =&gt; true</span>
<span class="cm-variable">lowerTriangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment">// =&gt; false</span>
</code></pre>
<p><a href="http://en.wikipedia.org/wiki/Triangular_matrix" data-turbolinks="false" target="_blank">http://en.wikipedia.org/wiki/Triangular_matrix</a></p>
</div>

<br><hr><br>


<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Квадратная матрица считается верхнетреугольной, если все элементы ниже главной диагонали равны 0. Аналогично, квадратная матрица считается нижнетреугольной, если все элементы выше главной диагонали равны 0.</p>
<p>Дана квадратная матрица размером n > 1. Определите, является ли она верхнетреугольной или нижнетреугольной. Матрица (mat) представлена ​​вложенным массивом строк.</p> </p>
<pre><code class="language-ruby"><span class="cm-tag">В</span> <span class="cm-tag">Ruby</span>, <span class="cm-tag">Matrix</span> <span class="cm-variable">is</span> <span class="cm-variable">disabled</span>
</code></pre>
<p>Примеры</p>
<pre style="display: none;"><code class="language-ruby"><span class="cm-variable">upper_triangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>]]) <span class="cm-comment"># =&gt; true</span>
<span class="cm-variable">верхний_треугольный</span>([[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment"># =&gt; false</span>
<span class="cm-variable">lower_triangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">1</span>]]) <span class="cm-comment"># =&gt; true</span>
<span class="cm-variable">lower_triangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment"># =&gt; false</span>
</code></pre>
<pre><code class="language-javascript"><span class="cm-variable">upperTriangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">1</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">1</span>]]) <span class="cm-comment">// =&gt; true</span>
<span class="cm-variable">верхний треугольник</span>([[<span class="cm-number">0</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment">// =&gt; false</span>
<span class="cm-variable">lowerTriangular</span>([[<span class="cm-number">1</span>,<span class="cm-number">0</span>],[<span class="cm-number">1</span>,<span class="cm-number">1</span>]]) <span class="cm-comment">// =&gt; true</span>
<span class="cm-variable">lowerTriangular</span>([[<span class="cm-number">0</span>,<span class="cm-number">1</span>],[<span class="cm-number">0</span>,<span class="cm-number">0</span>]]) <span class="cm-comment">// =&gt; ложь</span>
</code></pre>
<p><a href="http://en.wikipedia.org/wiki/Triangular_matrix" data-turbolinks="false" target="_blank">http://en.wikipedia.org/wiki/Triangular_matrix</a></p>
</div>