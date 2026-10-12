<div class="markdown prose max-w-none mb-8" id="description"><p>An orderly trail of ants is marching across the park picnic area.</p>
<p>It looks something like this:</p>
<pre style="background:black;margin-bottom:20px">..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
</pre>

<p>But suddenly there is a rumour that a dropped chicken sandwich has been spotted on the ground ahead. The ants surge forward! <em>Oh No, it's an ant stampede!!</em></p>
<p>Some of the slower ants are trampled, and their poor little ant bodies are broken up into scattered bits.</p>
<p>The resulting carnage looks like this:</p>
<pre style="background:black;margin-bottom:20px">...ant...ant..<span style="color:red">nat</span>.ant.<span style="color:red">t</span>..ant...ant..ant..ant.<span style="color:red">an</span>ant..<span style="color:red">t</span>
</pre>

<p>Can you find how many ants have died?</p>
<hr>

<h2 id="notes">Notes</h2>
<ul>
<li>When in doubt, assume that the scattered bits are from the same ant. e.g. 2 heads and 1 body = 2 dead ants, not 3</li>
</ul>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Впорядкована колона мурах крокує через зону для пікніка в парку.</p>
<p>Це виглядає приблизно так:</p>
<pre style="background:black;margin-bottom:20px">..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
</pre>

<p>Але раптом поширюється чутка, що попереду на землі помітили впущений сендвіч із куркою. Мурахи кидаються вперед! <em>О ні, це мурашина тиснява!!</em></p>
<p>Деяких повільніших мурах затоптують, і їхні бідолашні тільця розриваються на розрізнені шматочки.</p>
<p>Результат цієї хаотичної тисняви ​​виглядає так:</p>
<pre style="background:black;margin-bottom:20px">...ant...ant..<span style="color:red">nat</span>.ant.<span style="color:red">t</span>..ant...ant..ant..ant.<span style="color:red">an</span>ant..<span style="color:red">t</span>
</pre>

<p>Чи зможете ви визначити, скільки мурах загинуло?</p>
<hr>

<h2 id="notes">Примітки</h2>
<ul>
<li>У сумнівних випадках вважайте, що розрізнені шматочки належать одній мурасі. Наприклад: 2 голови й 1 тулуб = 2 загиблі мурахи, а не 3.</li>
</ul>
</div>


Так, у коді два окремі кроки.

**1. Видалення `ant`**

```js
const rest = ants.replace(/ant/g, '');
```

`/ant/g` шукає всі (`g` означає "global") цілі слова `ant` і замінює їх на порожній рядок. У `rest` лишаються тільки шматки загиблих мурах, а також пробіли й крапки.

**2. Підрахунок літер**

```js
const countOf = (ch) => rest.split(ch).length - 1;
```

`countOf` це маленька допоміжна функція, а `ch` лише назва параметра (скорочення від *character*, "символ"). Це літера, яку ми рахуємо: `'a'`, `'n'` або `'t'`. До останнього символа вона не має стосунку.

`.length - 1` теж не про останній символ. Тут працює такий трюк: `split(ch)` розрізає рядок у масив на кожній літері `ch`, а кількість шматків завжди на 1 більша за кількість розрізів.

Приклад для `rest = "  .... a nt"` і `countOf('a')`:

```js
"  .... a nt".split('a')   // ["  .... ", " nt"]
```

Літера `a` зустрілася один раз, шматків вийшло 2, тож `2 - 1 = 1`.

(Останній символ рядка беруть інакше: `str[str.length - 1]`. Мабуть, вам знайомий саме цей запис.)

Наприкінці `Math.max(countOf('a'), countOf('n'), countOf('t'))` бере найбільшу з трьох кількостей, бо шматки однієї мурахи можуть бути розкидані, а кількість мурах не менша за кількість найчастішої літери.

Якщо `split` здається незручним, є рівнозначний запис:

```js
const countOf = (ch) => (rest.match(new RegExp(ch, 'g')) || []).length;
```

Але `split(...).length - 1` коротший і вважається звичним прийомом.