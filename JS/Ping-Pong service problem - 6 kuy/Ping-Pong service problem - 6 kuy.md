<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Playing ping-pong can be <strong>really fun</strong>!</p>
<p>Unfortunately, after a long and exciting play, you can forget whose service turn it is. Let's do something about that!</p>
<p>Write a function that takes as its parameter the <strong>current score</strong> as a string separated by <code>:</code>, and returns <code>"first"</code> or <code>"second"</code> depending on whose service turn it is.</p>
<p>We're playing old-school, so the rule is that players take turns after every five services. That is until the score is <code>20:20</code> - from that moment each player serves twice, in turn.</p>
<p>Examples:</p>
<pre><code>at score  "0:0",  player to serve is "first"
at score  "3:2",  player to serve is "second"
at score "21:20", player to serve is "first"
at score "21:22", player to serve is "second"
</code></pre>
<p>There's no need to check if the passed parameter is valid - the score will be always provided in correct syntax and you don't need to check if one of the players has already won - that won't be the case.</p>
<p>The game ends when one of the players reaches <code>21</code> points with a minimum <code>2</code> point lead.<br>After a score of <code>20:20</code>, the winner will be the first player to reach a <code>2</code> point lead.</p>
</div>

<br><hr><br>


<div class="markdown prose max-w-5xl mx-auto overflow-x-auto break-words" id="description"><p>Гра в пінг-понг може бути <strong>дуже веселою</strong>!</p>
<p>На жаль, після довгої та захопливої ​​гри ви можете забути, чий хід подачі. Давайте щось із цим зробимо!</p>
<p>Напишіть функцію, яка приймає як параметр <strong>поточний рахунок</strong> у вигляді рядка, розділеного <code>:</code>, та повертає <code>"first"</code> або <code>"second"</code> залежно від того, чий хід подачі.</p>
<p>Ми граємо по-старому, тому правило полягає в тому, що гравці ходять по черзі після кожних п'яти подач. Тобто до рахунку <code>20:20</code> - з цього моменту кожен гравець подає двічі по черзі.</p>
<p>Приклади:</p>
<pre><code>при рахунку "0:0", гравець, який подає, "перший"
при рахунку "3:2", гравець, який подає, "другий"
при рахунку "21:20", гравець, який подає, "перший"
при рахунку "21:22", гравець, який подає, "другий"
</code></pre>
<p>Немає потреби перевіряти, чи переданий параметр є дійсним - рахунок завжди буде надано з правильним синтаксисом, і вам не потрібно перевіряти, чи один з гравців вже виграв - цього не буде.</p>
<p>Гра закінчується, коли один з гравців досягає <code>21</code> очка з мінімальною перевагою <code>2</code> очка.<br>Після рахунку <code>20:20</code> переможцем буде перший гравець, який досягне <code>2</code> точкове відведення.</p>
</div>