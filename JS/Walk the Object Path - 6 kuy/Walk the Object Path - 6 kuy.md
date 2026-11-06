<div class="markdown prose max-w-none mb-8" id="description"><p>Implement the method <code>find</code> which takes in an two parameters <code>object</code> and <code>path</code>. The <code>path</code> will be a period-delimited string of properties that we will use to traverse through our <code>object</code> to find our target value.</p>
<h3 id="edge-cases-and-further-consideration">Edge Cases And Further Consideration</h3>
<ul>
<li><p>Be sure to handle passing array indices.
  For example, if we have an object: <code>{ people: ['John', 'Dave', 'Lisa'] }</code> and the path is <code>'people.1'</code>, the target value is <code>'Dave'</code> which is the string at position 1 inside of the people array.</p>
</li>
<li><p>Also this method should handle invalid paths. 
  If we have an object <code>{ user: { name: 'Dan' } }</code> and the path is <code>'user.wallet.money'</code>, we should return <code>undefined</code>. Valid paths are exclusive to properties on the object which <strong>are not inherited</strong>, in other words it is specific to this object and does not need to look up the prototype chain.</p>
</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Реализуйте метод <code>find</code>, который принимает два параметра: <code>object</code> (объект) и <code>path</code> (путь). Параметр <code>path</code> представляет собой строку, в которой свойства разделены точками; этот путь используется для навигации по объекту с целью поиска целевого значения.</p>
<h3 id="edge-cases-and-further-consideration">Граничные случаи и дополнительные аспекты</h3>
<ul>
<li><p>Предусмотрите возможность обращения к элементам массива по индексу. 
Например, если у нас есть объект <code>{ people: ['John', 'Dave', 'Lisa'] }</code>, а путь задан как <code>'people.1'</code>, то целевым значением будет <code>'Dave'</code> — строка, находящаяся под индексом 1 в массиве <code>people</code>.</p>
</li>
<li><p>Метод также должен корректно обрабатывать некорректные пути. 
Если объект выглядит как <code>{ user: { name: 'Dan' } }</code>, а путь — <code>'user.wallet.money'</code>, метод должен возвращать <code>undefined</code>. Допустимыми считаются только те свойства, которые принадлежат самому объекту (<strong>не являются унаследованными</strong>); иными словами, поиск должен ограничиваться только собственными свойствами объекта, без обращения к цепочке прототипов.</p>
</li>
</ul>
</div>