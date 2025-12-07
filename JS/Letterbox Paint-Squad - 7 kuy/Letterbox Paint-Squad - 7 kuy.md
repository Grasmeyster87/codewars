<div class="markdown prose max-w-none mb-8" id="description"><img title="source: imgur.com" src="https://i.imgur.com/ta6gv1i.png?1">

<h1 id="story">Story</h1>
<p>You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.</p>
<p>Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the <code>1</code>'s, somebody else will paint only the <code>2</code>'s and so on...</p>
<p>But at the end of the day you realise not everybody did the same amount of work.</p>
<p>To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.</p>
<h1 id="kata-task">Kata Task</h1>
<p>Given the <code>start</code> and <code>end</code> letterbox numbers, write a method to return the frequency of all 10 digits painted.</p>
<h1 id="example">Example</h1>
<p>For <code>start</code> = 125, and <code>end</code> = 132</p>
<p>The letterboxes are</p>
<ul>
<li>125 = <code>1</code>, <code>2</code>, <code>5</code></li>
<li>126 = <code>1</code>, <code>2</code>, <code>6</code></li>
<li>127 = <code>1</code>, <code>2</code>, <code>7</code></li>
<li>128 = <code>1</code>, <code>2</code>, <code>8</code></li>
<li>129 = <code>1</code>, <code>2</code>, <code>9</code></li>
<li>130 = <code>1</code>, <code>3</code>, <code>0</code></li>
<li>131 = <code>1</code>, <code>3</code>, <code>1</code></li>
<li>132 = <code>1</code>, <code>3</code>, <code>2</code></li>
</ul>
<p>The digit frequencies are:</p>
<ul>
<li><code>0</code> is painted <span style="color:red;">1</span> time</li>
<li><code>1</code> is painted <span style="color:red;">9</span> times</li>
<li><code>2</code> is painted <span style="color:red;">6</span> times</li>
<li>etc...</li>
</ul>
<p>and so the method would return <code>[1,9,6,3,0,1,1,1,1,1]</code></p>
<h1 id="notes">Notes</h1>
<ul>
<li>0 &lt; <code>start</code> &lt;= <code>end</code></li>
<li>In C and NASM, the returned value will be free'd.</li>
</ul>
</div>

<br><hr> <br>



<div class="markdown prose max-w-none mb-8" id="description"><img title="source: imgur.com" src="https://i.imgur.com/ta6gv1i.png?1">

<h1 id="story">История</h1>
<p>Вы с группой друзей зарабатываете немного денег во время школьных каникул, перекрашивая цифры на почтовых ящиках за небольшую плату.</p>
<p>Поскольку вас в группе 10 человек, каждый сосредоточен на закрашивании одной цифры! Например, кто-то закрасит только <code>1</code>, кто-то — только <code>2</code> и так далее...</p>
<p>Но в конце дня вы понимаете, что не все выполнили одинаковую работу.</p>
<p>Чтобы избежать ссор, нужно справедливо распределить деньги. Вот тут-то и пригодится Ката.</p>
<h1 id="kata-task">Задание Ката</h1>
<p>Для заданных номеров почтовых ящиков <code>start</code> и <code>end</code> напишите метод, возвращающий частоту появления всех 10 закрашенных цифр.</p>
<h1 id="example">Пример</h1>
<p>Для <code>start</code> = 125 и <code>end</code> = 132</p>
<p>Почтовые ящики:</p>
<ul>
<li>125 = <code>1</code>, <code>2</code>, <code>5</code></li>
<li>126 = <code>1</code>, <code>2</code>, <code>6</code></li>
<li>127 = <code>1</code>, <code>2</code>, <code>7</code></li>
<li>128 = <code>1</code>, <code>2</code>, <code>8</code></li>
<li>129 = <code>1</code>, <code>2</code>, <code>9</code></li>
<li>130 = <code>1</code>, <code>3</code>, <code>0</code></li>
<li>131 = <code>1</code>, <code>3</code>, <code>1</code></li>
<li>132 = <code>1</code>, <code>3</code>, <code>2</code></li>
</ul>
<p>Частоты появления цифр:</p>
<ul>
<li><code>0</code> закрашено <span style="color:red;">1</span> раз</li>
<li><code>1</code> закрашено <span style="color:red;">9</span> раз</li>
<li><code>2</code> закрашивается <span style="color:red;">6</span> раз</li>
<li>и т.д...</li>
</ul>
<p>и поэтому метод вернёт <code>[1,9,6,3,0,1,1,1,1,1]</code></p>
<h1 id="notes">Примечания</h1>
<ul>
<li>0 <code>start</code> <= <code>end</code></li>
<li>В C и NASM возвращаемое значение будет освобождено.</li>
</ul>
</div>