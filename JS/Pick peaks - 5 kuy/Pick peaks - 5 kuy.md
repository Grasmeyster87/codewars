<div class="markdown prose max-w-none mb-8" id="description"><p>In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.</p>
<p>For example, the array <code>arr = [0, 1, 2, 5, 1, 0]</code> has a peak at position <code>3</code> with a value of <code>5</code> (since <code>arr[3]</code> equals <code>5</code>).</p>
<p>The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be <code>{pos: [], peaks: []}</code>.</p>
<p>Example: <code>pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])</code> should return <code>{pos: [3, 7], peaks: [6, 3]}</code> (or equivalent in other languages)</p>
<p>All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.</p>
<p>The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).</p>
<p>Also, beware of plateaus !!! <code>[1, 2, 2, 2, 1]</code> has a peak while <code>[1, 2, 2, 2, 3]</code> and <code>[1, 2, 2, 2, 2]</code> do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: 
<code>pickPeaks([1, 2, 2, 2, 1])</code> returns <code>{pos: [1], peaks: [2]}</code> (or equivalent in other languages)</p>
<p>Have fun!</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>В этом задании вы напишете функцию, которая возвращает позиции и значения «пиков» (или локальных максимумов) числового массива.</p>
<p>Например, массив <code>arr = [0, 1, 2, 5, 1, 0]</code> имеет пик в позиции <code>3</code> со значением <code>5</code> (поскольку <code>arr[3]</code> равно <code>5</code>).</p>
<p>В результате будет возвращен объект с двумя свойствами: pos и peaks. Оба эти свойства должны быть массивами.</p> Если в заданном массиве нет пика, то на выходе должно быть <code>{pos: [], peaks: []}</code>.</p>
<p>Пример: <code>pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])</code> должен вернуть <code>{pos: [3, 7], peaks: [6, 3]}</code> (или эквивалент на других языках)</p>
<p>Все входные массивы будут допустимыми целочисленными массивами (хотя они могут быть и пустыми), поэтому вам не нужно проверять входные данные.</p>
<p>Первый и последний элементы массива не будут считаться пиками (в контексте математической функции мы не знаем, что находится после и перед ними, и, следовательно, мы не знаем, является ли это пиком или нет).</p>
<p>Также остерегайтесь плато!!! <code>[1, 2, 2, 2, 1]</code> имеет пик, в то время как <code>[1, 2, 2, 2, 3]</code> и <code>[1, 2, 2, 2, 2]</code> его не имеют. В случае пика плато, пожалуйста, возвращайте только позицию и значение начала плато. Например:
<code>pickPeaks([1, 2, 2, 2, 1])</code> возвращает <code>{pos: [1], peaks: [2]}</code> (или эквивалент на других языках)</p>
<p>Приятного времяпровождения!</p>
</div>