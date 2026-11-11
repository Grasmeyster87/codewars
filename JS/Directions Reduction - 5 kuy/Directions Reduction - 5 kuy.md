<div class="markdown prose max-w-none mb-8" id="description"><h4 id="once-upon-a-time-on-a-way-through-the-old-wild-mountainous-west">Once upon a time, on a way through the old wild <em>mountainous</em> west,…</h4>
<p>… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. </p>
<p>Going to one direction and coming back the opposite direction <em>right away</em> is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!</p>
<h4 id="how-i-crossed-a-mountainous-desert-the-smart-way">How I crossed a <em>mountainous</em> desert the smart way.</h4>
<p>The directions given to the man are, for example, the following (depending on the language):</p>
<pre><code>["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
</code></pre>
<p>You can immediately see that going "NORTH" and <em>immediately</em> "SOUTH" is not reasonable, better stay to the same place!
So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:</p>
<pre><code>["WEST"]
or
{ "WEST" }
or
[West]
</code></pre>
<h4 id="other-examples">Other examples:</h4>
<p>In <code>["NORTH", "SOUTH", "EAST", "WEST"]</code>, the direction <code>"NORTH" + "SOUTH"</code> is going north and coming back <em>right away</em>. </p>
<p>The path becomes <code>["EAST", "WEST"]</code>, now <code>"EAST"</code> and <code>"WEST"</code> annihilate each other, therefore, the final result is <code>[]</code> (nil in Clojure).</p>
<p>In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are <em>not</em> directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].</p>
<h4 id="task">Task</h4>
<p>Write a function <code>dirReduc</code> which will take an array of strings and returns an array of strings with the needless directions removed (W&lt;-&gt;E or S&lt;-&gt;N <em>side by side</em>).</p>
<ul>
<li>The Haskell version takes a list of directions with <code>data Direction = North | East | West | South</code>. </li>
<li>The Clojure version returns nil when the path is reduced to nothing. </li>
<li>The Rust version takes a slice of <code>enum Direction {North, East, West, South}</code>.</li>
<li>The OCaml version takes a list of <code>type direction = | North | South | East | West</code>.</li>
</ul>
<h4 id="see-more-examples-in-sample-tests">See more examples in "Sample Tests:"</h4>
<h4 id="notes">Notes</h4>
<ul>
<li>Not all paths can be made simpler. 
The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not <em>directly</em> opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].</li>
<li>if you want to translate, please ask before translating.</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h4 id="once-upon-a-time-on-a-way-through-the-old-wild-mountainous-west">Жил-был человек, который отправился в путь по дикому горному Западу…</h4>
<p>…и получил указания, как добраться из одной точки в другую. Указания состояли из направлений: «СЕВЕР», «ЮГ», «ЗАПАД», «ВОСТОК». Очевидно, что «СЕВЕР» и «ЮГ» — противоположные стороны, так же как «ЗАПАД» и «ВОСТОК».</p>
<p>Двигаться в каком-либо направлении, а затем <em>сразу же</em> возвращаться обратно — бессмысленная трата сил. А поскольку дело происходит на диком Западе, где суровые погодные условия и мало воды, важно беречь энергию — иначе можно погибнуть от жажды!</p>
<h4 id="how-i-crossed-a-mountainous-desert-the-smart-way">Как я пересек горную пустыню с умом.</h4>
<p>Допустим, человек получил такой список направлений (формат зависит от языка программирования):</p>
<pre><code>["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
или
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
или
[North, South, South, East, West, North, West]
</code></pre>
<p>Сразу видно, что идти на «СЕВЕР», а затем <em>тут же</em> на «ЮГ» — неразумно; лучше просто остаться на месте!
Задача состоит в том, чтобы предложить человеку упрощенный вариант маршрута.</p> В данном случае лучше поступить так:</p>
<pre><code>["WEST"]
или
{ "WEST" }
или
[West]
</code></pre>
<h4 id="other-examples">Другие примеры:</h4>
<p>В наборе <code>["NORTH", "SOUTH", "EAST", "WEST"]</code> последовательность <code>"NORTH" + "SOUTH"</code> означает движение на север и <em>сразу же</em> возвращение обратно.</p>
<p>Путь сокращается до <code>["EAST", "WEST"]</code>; затем <code>"EAST"</code> и <code>"WEST"</code> взаимно уничтожаются, в результате чего получается <code>[]</code> (в Clojure — <code>nil</code>).</p>
<p>В наборе <code>["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]</code> элементы <code>"NORTH"</code> и <code>"SOUTH"</code> <em>не</em> стоят рядом, но оказываются друг напротив друга после того, как сокращаются <code>"EAST"</code> и <code>"WEST"</code>. В итоге весь путь сводится к <code>["WEST", "WEST"]</code>.</p>
<h4 id="task">Задача</h4>
<p>Напишите функцию <code>dirReduc</code>, которая принимает массив строк и возвращает массив строк, из которого удалены лишние направления (пары <code>W&lt;-&gt;E</code> или <code>S&lt;-&gt;N</code>, расположенные <em>рядом друг с другом</em>).</p>
<ul>
<li>В версии на Haskell используется список направлений, заданный через <code>data Direction = North | East | West | South</code>.</li>
<li>В версии на Clojure, если путь сокращается до пустого, функция возвращает <code>nil</code>.</li>
<li>В версии на Rust используется срез (slice) перечисления <code>enum Direction {North, East, West, South}</code>.</li>
<li>В версии на OCaml используется список типа <code>type direction = | North | South | East | West</code>.</li>
</ul> West</code>.</li>
</ul>
<h4 id="see-more-examples-in-sample-tests">Дополнительные примеры см. в разделе «Примеры тестов» (Sample Tests):</h4>
<h4 id="notes">Примечания</h4>
<ul>
<li>Не все маршруты можно упростить.
Маршрут ["NORTH", "WEST", "SOUTH", "EAST"] сократить нельзя. Направления «NORTH» и «WEST», «WEST» и «SOUTH», «SOUTH» и «EAST» не являются <em>прямо</em> противоположными друг другу и не могут ими стать. Следовательно, итоговый маршрут остается прежним: ["NORTH", "WEST", "SOUTH", "EAST"].</li>
<li>Если вы хотите перевести этот материал, пожалуйста, сначала согласуйте это.</li>
</ul>
</div>