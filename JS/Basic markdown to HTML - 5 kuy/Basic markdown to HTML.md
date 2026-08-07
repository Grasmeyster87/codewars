<div class="markdown prose max-w-none mb-8" id="description"><p>You've been given some texts for your website which you need to turn into HTML. Unfortunately for you, the texts also contain markdown, which you need to take account of too.</p>
<p>In this Kata you'll write a function "format()" which can transform 3 elements of standard markdown language to HTML:</p>
<ul>
<li>Bullet points</li>
<li>Headers (levels 1 through 6)</li>
<li>Bold emphasis</li>
</ul>
<p>You can find the full specs of markdown language here <a href="http://daringfireball.net/projects/markdown/syntax" data-turbolinks="false" target="_blank">http://daringfireball.net/projects/markdown/syntax</a></p>
<h2 id="basic-instructions">Basic instructions</h2>
<p>You will only have to handle a single line of Markdown, the input will not contain newlines.</p>
<h3 id="strong-emphasis">Strong emphasis</h3>
<p>Non-empty text surrounded by double asterisks should be wrapped in strong tags. Compared to actual Markdown which takes the biggest match (greedy), we'll instead take the smallest possible matches.</p>
<p>For example:</p>
<p><code>**I'm a string with strong emphasis**</code></p>
<p>...should be converted to:</p>
<p><code>&lt; strong&gt;I'm a string with strong emphasis&lt; /strong&gt;</code></p>
<p>and</p>
<p><code>******</code></p>
<p>...should be converted to:</p>
<p><code>&lt; p&gt;&lt; strong&gt;*&lt; /strong&gt;*&lt; /p&gt;</code></p>
<h3 id="headers">Headers</h3>
<p>Hashtags at the beginning of a string denote headers. The number of hashtags translates to the level of the header. They're <strong>always</strong> followed by a space.</p>
<p>You may be presented with headers level 1 through 6. If you see 7 or more hashtags at the beginning of a string, disregard all hashtags beyond the sixth one.</p>
<p><code># this is a level one header - wrap me in &lt; h1&gt;&lt;  /h1&gt;</code></p>
<p><code>## this is a level two header - wrap me in &lt; h2&gt;&lt; /h2&gt;</code></p>
<p><code>### this is a level three header - wrap me in &lt; h3&gt;&lt; /h3&gt;</code></p>
<p>and so on.</p>
<p>###List items</p>
<p>List items are marked with an asterisk in the front and <strong>always</strong> followed by a space:</p>
<p><code>* this is a list item, wrap me in &lt; li&gt;&lt; /li&gt;</code></p>
<p>###Paragraphs</p>
<p>If the string is neither a header nor a list item, wrap it in "p" tags </p>
<p><code>&lt; p&gt;I am a regular paragraph&lt; /p&gt;</code></p>
<h3 id="remove-extra-spaces">Remove extra spaces</h3>
<p>Finally, the formatted string should be returned with no spaces between the outside opening and closing HTML tags and the start and end of the rest of your string.</p>
<h3 id="note-about-html-tags">Note about HTML tags</h3>
<p>I've found that Codewars reacts unpredictably to HTML within strings in Kata, and the tests don't always come out as expected. For this reason, I've added an extra space inside all HTML tags - as you can see both in the text cases and in the examples above.</p>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><p>Вам предоставлены тексты для вашего веб-сайта, которые необходимо преобразовать в HTML. К сожалению, тексты также содержат разметку Markdown, которую вам тоже нужно учитывать.</p>
<p>В этом задании вы напишете функцию "format()", которая может преобразовывать 3 элемента стандартного языка Markdown в HTML:</p>
<ul>
<li>Маркеры</li>
<li>Заголовки (уровни 1–6)</li>
<li>Выделение жирным шрифтом</li>
</ul>
<p>Полную спецификацию языка Markdown можно найти здесь: <a href="http://daringfireball.net/projects/markdown/syntax" data-turbolinks="false" target="_blank">http://daringfireball.net/projects/markdown/syntax</a></p>
<h2 id="basic-instructions">Основные инструкции</h2>
<p>Вам нужно будет обработать только одну строку Markdown, входные данные не будут содержать переносов строк.</p>
<h3 id="strong-emphasis">Сильный акцент</h3>
<p>Непустой текст, заключенный в двойные звездочки, следует заключать в теги <strong>. В отличие от реального Markdown, который выбирает наибольшее совпадение (жадный подход), мы будем выбирать наименьшее возможное совпадение.</p>
<p>Например:</p>
<p><code>**Я строка с сильным акцентом**</code></p>
<p>...должно быть преобразовано в:</p>
<p><code>&lt; strong&gt;I'm a string with strong emphasis&lt; /strong&gt;</code></p>
<p>и</p>
<p><code>******</code></p>
<p>...должно быть преобразовано в:</p>
<p><code>&lt; p&gt;&lt; strong&gt;*&lt; /strong&gt;*&lt; <p></code></p>
<h3 id="headers">Заголовки</h3>
<p>Хештеги в начале строки обозначают заголовки. Количество хештегов соответствует уровню заголовка. Они <strong>всегда</strong> сопровождаются пробелом.</p>
<p>Вам могут быть представлены заголовки уровней от 1 до 6. Если вы видите 7 или более хештегов в начале строки, игнорируйте все хештеги после шестого.</p>
<p><code># это заголовок первого уровня - оберните меня в <h1>&lt; /h1></code></p>
<p><code>## это заголовок второго уровня - оберните меня в <h2>&lt; /h2></code></p>
<p><code>### это заголовок третьего уровня - оберните меня в < h3>&lt; /h3&gt;</code></p>
<p>и так далее.</p>
<p>###Элементы списка</p>
<p>Элементы списка помечаются звездочкой в ​​начале и <strong>всегда</strong> с последующим пробелом:</p>
<p><code>* это элемент списка, заключите меня в &lt; li&gt;&lt; /li&gt;</code></p>
<p>###Абзацы</p>
<p>Если строка не является ни заголовком, ни элементом списка, заключите ее в теги "p"</p>
<p><code>&lt; p&gt;Я обычный абзац&lt; <p></code></p>
<h3 id="remove-extra-spaces">Удалить лишние пробелы</h3>
<p>Наконец, отформатированная строка должна быть возвращена без пробелов между внешними открывающими и закрывающими HTML-тегами и началом и концом остальной части вашей строки.</p>
<h3 id="note-about-html-tags">Примечание о HTML-тегах</h3>
<p>Я обнаружил, что Codewars непредсказуемо реагирует на HTML внутри строк в Kata, и тесты не всегда дают ожидаемый результат. По этой причине я добавил дополнительный пробел внутри всех HTML-тегов — как вы можете видеть как в текстовых случаях, так и в примерах выше.</p>
</div>

Тест пройшов ✅. Копіюю фінальну версію у outputs.Ось рішення:

```js
function format(string) {
    let tag = 'p';
    let content = string;

    const headerMatch = string.match(/^(#+)\s(.*)$/);
    const listMatch = string.match(/^\*\s(.*)$/);

    if (headerMatch) {
        const level = Math.min(headerMatch[1].length, 6);
        tag = 'h' + level;
        content = headerMatch[2];
    } else if (listMatch) {
        tag = 'li';
        content = listMatch[1];
    }

    content = content.replace(/\*\*(.+?)\*\*/g, '< strong>$1< /strong>');

    return `< ${tag}>${content}< /${tag}>`;
}

module.exports = format;
```

Всі тести проходять. Розберемо логіку по кроках:

**1. Визначення типу блока (заголовок / список / абзац)**

- `/^(#+)\s(.*)$/` — ловить будь-яку кількість `#` на початку рядка, за якими йде пробіл. `headerMatch[1].length` — кількість решіток, `Math.min(..., 6)` обрізає рівень до h6, якщо решіток 7+. `headerMatch[2]` — решта рядка після `# `.
- `/^\*\s(.*)$/` — рівно один `*` на початку, за яким пробіл. Це не плутається з `**` (жирний текст), бо regex вимагає саме пробіл одразу після одинарної зірочки — а `**pellentesque**` не матиме пробілу на другій позиції.
- Якщо жоден з двох не спрацював — це `<p>`, і весь рядок іде в контент як є.

**2. Жирний текст — найцікавіша частина**

`content.replace(/\*\*(.+?)\*\*/g, '< strong>$1< /strong>')`

Ключове тут — `.+?` (лінивий квантифікатор) замість `.+`. Це змушує движок regex шукати **найменший можливий** збіг, а не найбільший:

- `.+` (жадібний) на рядку `**a** **b**` захопив би `a** **b` (від першого `**` до останнього) — це неправильно.
- `.+?` (лінивий) зупиняється на першому ж `**`, тобто дає `a` і `b` окремо — саме те, що вимагає кейс.

Це саме пояснює й "дивні" тести з ланцюжками зірочок (`****`, `*****`, `* ** *** **** *****`) — глобальний `/g` regex просто послідовно шукає найближчу пару `**...**` зліва направо, не перетинаючись з уже використаними символами, залишаючи "зайві" зірочки як є. Я вручну симулював роботу движка на цих кейсах і вона точно збігається з очікуваним виводом — тому додаткова спецлогіка не знадобилась, звичайний `String.replace` з лінивим regex все робить сам.

**3. Обгортка**

Шаблонний рядок `< ${tag}>${content}< /${tag}>` — зверніть увагу на пробіл після `<` в обох тегах (відкриваючому і закриваючому) — це не помилка, а вимога кейти (щоб уникнути проблем з HTML-рендерингом на Codewars).