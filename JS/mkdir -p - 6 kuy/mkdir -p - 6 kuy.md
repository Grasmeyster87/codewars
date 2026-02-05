<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Write a synchronous function that makes a directory and recursively makes all of its parent directories as necessary.</p>
<p>A directory is specified via a sequence of arguments which specify the path.  For example:</p>
<pre><code class="language-javascript"><span class="cm-variable">mkdirp</span>(<span class="cm-string">'/'</span>,<span class="cm-string">'tmp'</span>,<span class="cm-string">'made'</span>,<span class="cm-string">'some'</span>,<span class="cm-string">'dir'</span>)
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">mkdirp</span> <span class="cm-string">'/'</span><span class="cm-punctuation">,</span><span class="cm-string">'tmp'</span><span class="cm-punctuation">,</span><span class="cm-string">'made'</span><span class="cm-punctuation">,</span><span class="cm-string">'some'</span><span class="cm-punctuation">,</span><span class="cm-string">'dir'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">mkdirp</span>(<span class="cm-string">'/'</span>,<span class="cm-string">'tmp'</span>,<span class="cm-string">'made'</span>,<span class="cm-string">'some'</span>,<span class="cm-string">'dir'</span>)
</code></pre>
<p>...will make the directory <code>/tmp/made/some/dir</code>.</p>
<p>Like the shell command <code>mkdir -p</code>, the function you program should be idempotent if the directory already exists.</p>
<p>HINT:</p>
<ul>
<li><p>In javascript/coffescript, you will want to <code>require('fs')</code> and use functions in that library.</p>
<ul>
<li><a href="http://nodejs.org/api/fs.html" data-turbolinks="false" target="_blank">Documentation on <tt>fs</tt></a>.</li>
</ul>
</li>
<li><p>In python, you will want to use the <code>os</code> module and <code>os.path</code></p>
<ul>
<li><a href="https://docs.python.org/3/library/os.html" data-turbolinks="false" target="_blank">Documentation on <tt>os</tt> module</a></li>
<li><a href="https://docs.python.org/3/library/os.path.html" data-turbolinks="false" target="_blank">Documentation on <tt>os.path</tt> module</a></li>
</ul>
</li>
</ul>
</div>

 <br> <hr> <br>

 <div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Напишіть синхронну функцію, яка створює каталог і рекурсивно створює всі його батьківські каталоги за потреби.</p>
<p>Каталог визначається за допомогою послідовності аргументів, що вказують шлях. Наприклад:</p>
<pre><code class="language-javascript"><span class="cm-variable">mkdirp</span>(<span class="cm-string">'/'</span>,<span class="cm-string">'tmp'</span>,<span class="cm-string">'made'</span>,<span class="cm-string">'some'</span>,<span class="cm-string">'dir'</span>)
</code></pre>
<pre style="display: none;"><code class="language-coffeescript"><span class="cm-variable">mkdirp</span> <span class="cm-string">'/'</span><span class="cm-punctuation">,</span><span class="cm-string">'tmp'</span><span class="cm-punctuation">,</span><span class="cm-string">'made'</span><span class="cm-punctuation">,</span><span class="cm-string">'some'</span><span class="cm-punctuation">,</span><span class="cm-string">'dir'</span>
</code></pre>
<pre style="display: none;"><code class="language-python"><span class="cm-variable">mkdirp</span>(<span class="cm-string">'/'</span>,<span class="cm-string">'tmp'</span>,<span class="cm-string">'made'</span>,<span class="cm-string">'some'</span>,<span class="cm-string">'dir'</span>)
</code></pre>
<p>...створить каталог <code>/tmp/made/some/dir</code>.</p>
<p>Як і команда оболонки <code>mkdir -p</code>, функція, яку ви програмуєте, має бути ідемпотентною, якщо каталог вже існує.</p>
<p>ПІДКАЗКА:</p>
<ul>
<li><p>У javascript/coffescript, ви захочеться використовувати <code>require('fs')</code> та функції в цій бібліотеці.</p>
<ul>
<li><a href="http://nodejs.org/api/fs.html" data-turbolinks="false" target="_blank">Документація щодо <tt>fs</tt></a>.</li>
</ul>
</li>
<li><p>У Python вам знадобиться модуль <code>os</code> та <code>os.path</code></p>
<ul>
<li><a href="https://docs.python.org/3/library/os.html" data-turbolinks="false" target="_blank">Документація щодо модуля <tt>os</tt></a></li>
<li><a href="https://docs.python.org/3/library/os.path.html" data-turbolinks="false" target="_blank">Документація щодо модуля <tt>os.path</tt></li>
</ul>
</li>
</ul>
</div>