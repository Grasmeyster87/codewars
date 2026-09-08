<div class="markdown prose max-w-none mb-8" id="description"><h3 id="task">Task</h3>
<p>Format a source in a simple HTML-dialect.  </p>
<p>A source consists of tags and text.<br>It is not necessarily valid HTML, or a complete document ( it may be a snippet ).  </p>
<h3 id="tags-and-text">Tags and text</h3>
<p>Tags are either matching opening and closing tags ( <code>&lt;tag&gt;content&lt;/tag&gt;</code> ), or self-closed ( <code>&lt;tag /&gt;</code> ).<br>All tags<sup>*</sup> need to be on their own line. There are no inline tags.<br>Content between opening and closing tags should be indented.<br>No whitespace ( other than indent/newline ) should be before or after tags.  </p>
<p>All ( consecutive ) text needs to be on its own line.<br>Text may have spurious whitespace. This needs to be collapsed to single spaces.<br>( Do <strong>not</strong> reformat whitespace inside tags. )<br>Text should not begin or end with whitespace ( other than indent/newline ).  </p>
<p><sup>*</sup> <strong>Exception</strong>: the <code>&lt;br /&gt;</code> tag, when not after a tag, should be after its text without an intervening newline.<br>It should be followed by a newline.  </p>
<h3 id="details">Details</h3>
<ul>
<li>Newlines must be <code>\n</code></li>
<li>Indents must be two spaces per level</li>
<li>Whitespace in text must be single spaces</li>
<li>Reformatted source must end with a newline</li>
<li>There will be a sanity check: repeated application should not change the output</li>
<li>All input is valid</li>
<li>There will be no whitespace in tags until after the tag ( <code>&lt;tag</code> or <code>&lt;/tag</code> ), and<br>there will be no whitespace directly before the closing <code>&gt;</code> ( <code>tag&gt;</code> or <code>/&gt;</code> )</li>
<li>There will be no angled brackets in tag attribute values ( so no <code>&lt;tag attr="&lt;tag&gt;" /&gt;</code> )</li>
</ul>
<h3 id="preloaded">Preloaded</h3>
<p>For testing and debugging, <code>escHTML</code> and <code>escWS</code> have been predefined;
they escape HTML special characters ( <code>&amp; &lt; &gt;</code> ) and whitespace ( tab, newline and space ) respectively for printing to the console. 
When using both, apply <code>escWS</code> <em>after</em> <code>escHTML</code>, or your spaces will come out as <code>&amp;amp;space;</code>.  </p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h3 id="task">Завдання</h3>
<p>Відформатуйте джерело простим HTML-діалектом. </p>
<p>Джерело складається з тегів та тексту.<br>Це не обов'язково дійсний HTML або повний документ (це може бути фрагмент). </p>
<h3 id="tags-and-text">Теги та текст</h3>
<p>Теги - це або відповідні відкриваючі та закриваючі теги ( <code>&lt;tag&gt;content&lt;/tag&gt;</code>), або самозакриваючі теги ( <code>&lt;tag /&gt;</code>).<br>Усі теги<sup>*</sup> повинні бути на окремому рядку. Вбудованих тегів немає.<br>Вміст між відкриваючим та закриваючим тегами має бути з відступом.<br>Перед або після тегів не повинно бути пробілів (окрім відступу/нового рядка).</p>
<p>Увесь (послідовний) текст має бути на окремому рядку.<br>Текст може містити зайві пробіли. Його потрібно згорнути до окремих пробілів.<br>(<strong>Не</strong> переформатуйте пробіли всередині тегів.)<br>Текст не повинен починатися або закінчуватися пробілами (окрім відступу/нового рядка).</p>
<p><sup>*</sup> <strong>Виняток</strong>: тег <code>&lt;br /&gt;</code>, якщо він не знаходиться після тегу, має бути після його тексту без проміжного нового рядка.<br>За ним має бути новий рядок. </p>
<h3 id="details">Деталі</h3>
<ul>
<li>Нові рядки мають бути <code>\n</code></li>
<li>Відступи мають бути двома пробілами на рівень</li>
<li>Пробіли в тексті мають бути одинарними пробілами</li>
<li>Переформатований вихідний код має закінчуватися новим рядком</li>
<li>Буде проведено перевірку на правильність: повторне застосування не повинно змінювати результат</li>
<li>Усі вхідні дані дійсні</li>
<li>У тегах не буде пробілів, поки не буде тег після тегу ( <code>&lt;tag</code> або <code>&lt;/tag</code>), та<br>не буде пробілів безпосередньо перед закриваючим <code>&gt;</code> ( <code>tag&gt;</code> або <code>/&gt;</code>)</li>
<li>У значеннях атрибутів тегів не буде кутових дужок (тому <code>&lt;tag attr="&lt;tag&gt;" /&gt;</code> )</li>
</ul>
<h3 id="preloaded">Попередньо завантажено</h3>
<p>Для тестування та налагодження <code>escHTML</code> та <code>escWS</code> були попередньо визначені;
вони екранують спеціальні символи HTML ( <code>&amp; &lt; &gt;</code>) та пробіли (табуляція, новий рядок та пробіл) відповідно для виводу в консоль.
Під час використання обох, застосовуйте <code>escWS</code> <em>після</em> <code>escHTML</code>, інакше ваші пробіли виглядатимуть як <code>&amp;amp;space;</code>. </p>
</div>

Ідея коротко:

Розбиваю джерело на токени: text, open, close, selfclose (regex <[^>]*> ловить теги, все інше між ними — текст).
Для тексту: схлопую пробіли/переноси в один пробіл, тримлю з країв; якщо після цього порожньо (суто форматуючий whitespace з вихідного джерела) — токен просто ігнорується.
Кожен тег — окремий рядок з відступом level*2; open збільшує рівень після виводу, close — зменшує перед виводом.
Виняток для <br />: якщо попередній виведений токен — текст, дописую тег прямо до нього без переносу перед ним (перенос ставлю тільки після); якщо попередній токен — тег (в т.ч. інший <br />), він поводиться як звичайний тег.

.test.js файл підходить без змін — я лише локально підклав заглушки escHTML/escWS (вони на Codewars вже preloaded, тому там нічого міняти не треба).