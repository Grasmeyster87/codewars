<div class="markdown prose max-w-none mb-8" id="description"><p>The <code>fix</code> function can ( with lazy evaluation and a recursive <code>let</code> ) be defined as:</p>
<pre><code class="language-javascript"><span class="cm-keyword">let</span> <span class="cm-def">fix</span> <span class="cm-operator">=</span> <span class="cm-def">f</span> <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">f</span> (<span class="cm-variable">fix</span> (<span class="cm-variable-2">f</span>))
</code></pre>
<p>If we regard <code>fix</code> as a language primitive, any recursive function can be written without using recursion. For a more detailed explanation of <code>fix</code>, see <a href="http://en.wikipedia.org/wiki/Fixed-point_combinator" data-turbolinks="false" target="_blank">Wikipedia</a>.</p>
<p>Unfortunately, your language has strict evaluation and no recursive <code>let</code> ( also called <code>let rec</code> ).</p>
<h1 id="why">Why?</h1>
<ul>
<li>Some languages simply do not support direct recursion - a function is only available <em>after</em> it is defined. With <code>fix</code>, recursion can be attained without language support.</li>
<li>By composing memoisation with the function and <em>then</em> <code>fix</code>ing it, a memoised recursive function may be obtained, without <em>any</em> demands on the base function. ( This will be shown in the tests with <code>fibonacci</code>. )</li>
</ul>
<h1 id="task">Task</h1>
<ul>
<li>Refactor <code>fix</code> for use with strict evaluation.</li>
<li>Refactor <code>factorial</code> and <code>fibonacci</code> as non-recursive functions that can be "fixed" to give recursive ones. ( No optimisations necessary, just the trivial implementations ).</li>
<li>Refactor <code>foldr</code> as a non-recursive, <code>fix</code>able function. This will need to support laziness in the second argument of the folding function. It will also need to accept a <code>Generator Object</code> instead of an <code>Array</code> to work on, so infinite lists can be encoded. See <code>Specifications</code>.</li>
</ul>
<h1 id="specifications">Specifications</h1>
<p><code>fix</code> accepts a non-recursive function and returns its recursive equivalent. It will be tested for functionality, and then used to <code>fix</code> your own solution functions. There are various possible definitions; you can base it on <code>fix</code> as above or on any variant of the <code>Y</code>-combinator.</p>
<p><code>factorial</code> accepts a <code>BigInt</code> and returns its factorial as a <code>BigInt</code>.</p>
<p><code>fibonacci</code> accepts a non-negative <code>Number</code> and returns the corresponding ( <code>0,1-</code> ) Fibonacci number as a <code>BigInt</code>.</p>
<p><code>foldr</code> ( sometimes known in other languages as <code>reduceRight</code> ) accepts a folding function, an initial value ( non-optional in this kata ), and a list, and returns the list folded to a single value, right-associatively.</p>
<ul>
<li><code>folding function : element -&gt; accumulator -&gt; accumulator</code>, where the second argument is a thunk<sup><a href="https://en.wikipedia.org/wiki/Thunk" data-turbolinks="false" target="_blank">wiki</a></sup> for laziness, to facilitate handling infinite lists by short-circuiting. Passed functions will evaluate their second argument when necessary.</li>
<li><code>initial value : a valid start value for the accumulator</code>; in practice, the ( right ) identity for the associative operation that is the folding function.</li>
<li>a <code>list</code>, encoded as a single-use <code>Generator Object</code><sup><a href="http://mdn.io/Generator" data-turbolinks="false" target="_blank">MDN</a></sup>. The list may be infinite, in which case the folding function will at some point have to short-circuit if it is to deliver a value in finite time. This <em>will</em> be tested.</li>
</ul>
<h1 id="notes">Notes</h1>
<ul>
<li>All functions in this kata are <em>curried<a href="https://en.wikipedia.org/wiki/Currying" data-turbolinks="false" target="_blank"><sup>wiki</sup></a>.</em></li>
<li>Type signatures:<ul>
<li><code>fix : (x -&gt; x) -&gt; x</code></li>
<li><code>factorial : BigInt -&gt; BigInt</code></li>
<li><code>fibonacci : Number -&gt; BigInt</code></li>
<li><code>foldr : (x -&gt; (() -&gt; z) -&gt; z) -&gt; z -&gt; [x] -&gt; z</code></li>
</ul>
</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Функция <code>fix</code> может быть определена (с ленивой оценкой и рекурсивным <code>let</code>) следующим образом:</p>
<pre><code class="language-javascript"><span class="cm-keyword">let</span> <span class="cm-def">fix</span> <span class="cm-operator">=</span> <span class="cm-def">f</span> <span class="cm-operator">=&gt;</span> <span class="cm-variable-2">f</span> (<span class="cm-variable">fix</span> (<span class="cm-variable-2">f</span>))
</code></pre>
<p>Если рассматривать <code>fix</code> как языковой примитив, любую рекурсивную функцию можно написать без с использованием рекурсии. Более подробное объяснение <code>fix</code> см. в <a href="http://en.wikipedia.org/wiki/Fixed-point_combinator" data-turbolinks="false" target="_blank">Википедии</a>.</p>
<p>К сожалению, в вашем языке используется строгая оценка и отсутствует рекурсивная функция <code>let</code> (также называемая <code>let rec</code>).</p>
<h1 id="why">Почему?</h1>
<ul>
<li>Некоторые языки просто не поддерживают прямую рекурсию — функция становится доступна только <em>после</em> ее определения. С помощью <code>fix</code> рекурсию можно получить без поддержки языка.</li>
<li>Составляя мемоизацию с функцией и <em>затем</em> <code>fix</code>ее, можно получить мемоизированную рекурсивную функцию без <em>каких-либо</em> требований к базовой функции. (Это будет показано в тестах с <code>fibonacci</code>.)</li>
</ul>
<h1 id="task">Задача</h1>
<ul>
<li>Рефакторизуйте <code>fix</code> для использования со строгой оценкой.</li>
<li>Рефакторизуйте <code>factorial</code> и <code>fibonacci</code> как нерекурсивные функции, которые можно «исправить», чтобы получить рекурсивные.</li> (Оптимизация не требуется, только тривиальные реализации).</li>
<li>Рефакторизуйте <code>foldr</code> как нерекурсивную, <code>fix</code>функцию. Она должна поддерживать ленивую обработку во втором аргументе функции свертывания. Она также должна принимать <code>Generator Object</code> вместо <code>Array</code> для работы, чтобы можно было кодировать бесконечные списки. См. <code>Specifications</code>.</li>
</ul>
<h1 id="specifications">Specifications</h1>
<p><code>fix</code> принимает нерекурсивную функцию и возвращает ее рекурсивный эквивалент. Она будет протестирована на функциональность, а затем использована для <code>fix</code> ваших собственных функций решения. Существуют различные возможные определения; Вы можете использовать <code>fix</code>, как указано выше, или любой вариант <code>Y</code>-комбинатора.</p>
<p><code>factorial</code> принимает <code>BigInt</code> и возвращает его факториал в виде <code>BigInt</code>.</p>
<p><code>fibonacci</code> принимает неотрицательное <code>Number</code> и возвращает соответствующее число Фибоначчи (<code>0,1-</code>) в виде <code>BigInt</code>.</p>
<p><code>foldr</code> (иногда известное в других языках как <code>reduceRight</code>) принимает функцию свертывания, начальное значение (необязательное в этом задании) и список, и возвращает список, свернутый в одно значение, ассоциативно справа.</p>
<ul>
<li><code>folding function : element -&gt; аккумулятор -> аккумулятор</code>, где второй аргумент — это thunk<sup><a href="https://en.wikipedia.org/wiki/Thunk" data-turbolinks="false" target="_blank">wiki</a></sup> для ленивой обработки, чтобы упростить обработку бесконечных списков путем короткого замыкания. Переданные функции будут вычислять свой второй аргумент при необходимости.</li>
<li><code>начальное значение: допустимое начальное значение для аккумулятора</code>; на практике — (правильное) тождество для ассоциативной операции, которая является функцией свертывания.</li>
<li>список</code>, закодированный как одноразовый объект генератора</code><sup><a href="http://mdn.io/Generator" data-turbolinks="false" target="_blank">MDN</a></sup>. Список может быть бесконечным, в этом случае функция свертывания в какой-то момент должна будет выполнить короткое замыкание, чтобы получить значение за конечное время. Это будет проверено.


<h1 id="notes">Примечания</h1>
<ul>
<li>Все функции в этом задании являются каррированными<a href="https://en.wikipedia.org/wiki/Currying" data-turbolinks="false" target="_blank"><sup>wiki</sup></a>.</em></li>
<li>Сигнатуры типов:<ul>
<li><code>fix : (x -&gt; x) -&gt; x</code></li>
<li><code>factorial : BigInt -&gt; BigInt</code></li>
<li><code>fibonacci : Number -&gt; BigInt</code></li>
<li><code>foldr : (x -&gt; (() -&gt; z) -&gt; z -&gt; [x] -&gt; z</code></li>
</ul>
</li>
</ul>
</div>

Всі 4 тести пройшли. Ось виправлений файл:

```javascript
// Strict-evaluation fix (Z-combinator): the recursive call is wrapped in a
// lambda so it is NOT evaluated until it's actually invoked.
export const fix = f => (x => f(y => x(x)(y)))(x => f(y => x(x)(y))) ;

// Non-recursive: takes "self" (the fixed function) as first argument instead
// of calling itself by name.
export const factorial = self => n => n ? n * self(n-1n) : 1n ;

export const fibonacci = self => i =>
  i===0 ? 0n :
  i===1 ? 1n :
          self(i-1) + self(i-2) ;

// self : fn -> z -> xs -> result (same shape as fixed foldr itself)
export const foldr = self => fn => z => xs => {
  const {value, done} = xs.next() ;
  return done ? z : fn (value) (() => self (fn) (z) (xs)) ;
} ;
```

**Що було не так:**

1. `fix = fn => fn(fix(fn))` — JS має строгу (eager) оцінку аргументів, тому `fix(fn)` обчислюється *до* виклику `fn`, і це викликає нескінченну рекурсію ще до того, як `fn` взагалі щось поверне (stack overflow).

2. `factorial` і `fibonacci` викликали самі себе по імені (пряма рекурсія) — це суперечить умові задачі: вони мають бути нерекурсивними функціями, які отримують «self» ззовні і потім `fix`-уються.

3. `foldr` так само рекурсивно викликав сам себе замість прийому `self`, і працював з масивом (`xs.slice(1)`), а не з `Generator Object`, як вимагає специфікація (потрібно для нескінченних списків).

Хочеш розбір по рядках — чому саме `x => f(y => x(x)(y))` двічі застосований до себе не зациклюється, і як саме `self(fn)(z)(xs)` резолвиться у `foldr`?