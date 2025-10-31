We want to create an object with methods for various HTML elements: div, p, span and h1 for the sake of this Kata.

These methods will wrap the passed-in string in the tag associated with each.

Format.div("foo"); // returns "<div>foo</div>"
Format.p("bar"); // returns "<p>bar</p>"
Format.span("fiz"); // returns "<span>fiz</span>"
Format.h1("buz"); // returns "<h1>buz</h1>"

We also want to be able to add additional formatting by chaining our methods together.

Format.div.h1("FooBar");
// "<div><h1>FooBar</h1><div>"

Format.div.p.span("FizBuz");
// "<div><p><span>FizBuz</span></p></div>"

and so on, as deep as we care to use.

Multiple arguments should be concatenated and wrapped in the correct HTML formatting.

Format.div.h1("Foo", "Bar");
// "<div><h1>FooBar</h1></div>"

We should be able to store the created methods and reuse them.

var wrapInDiv = Format.div;
wrapInDiv("Foo");   // "<div>Foo</div>"
wrapInDiv.p("Bar"); // "<div><p>Bar</p></div>"

var wrapInDivH1 = Format.div.h1;
wrapInDivH1("Far"); // "<div><h1>Far</h1></div>"
wrapInDivH1.span("Bar"); // "<div><h1><span>Bar</span></h1></div>"

And finally, we should be able to nest calls.

Format.div(
  Format.h1("Title"), 
  Format.p(`Paragraph with a ${ Format.span('span') }.`)
)
// returns "<div><h1>Title</h1><p>Paragraph with a <span>span</span>.</p></div>"

//---------------------------------------------
Мы хотим создать объект с методами для различных HTML-элементов: div, p, span и h1, для этой темы.

Эти методы будут заключать переданную строку в тег, связанный с каждым из них.


Звісно\! Цей код використовує один з найпотужніших прийомів у JavaScript: **функції є об'єктами**, і ми можемо динамічно створювати їх за допомогою **рекурсії** та **замикань**.

Давайте розберемо його покроково.

-----

## 🧠 1. Головна ідея: "Функція-Об'єкт"

Найскладніша вимога задачі — це ланцюжок: `Format.div.h1("Foo")`.

  * `Format.div` має бути **функцією**, щоб ми могли викликати її: `Format.div("Foo")`.
  * `Format.div` водночас має бути **об'єктом**, щоб у нього була властивість `.h1`: `(Format.div).h1`.

На щастя, в JavaScript функції *вже є* об'єктами. Ми можемо створити функцію, а потім додати до неї властивості:

```javascript
function myFunc() { console.log("Я функція!"); }
myFunc.myProp = "Я властивість!";

myFunc(); // Виведе: "Я функція!"
console.log(myFunc.myProp); // Виведе: "Я властивість!"
```

Наш код використовує цей принцип. Кожен метод (`div`, `p`, `h1`...) — це функція, до якої *одночасно* прикріплені інші функції-методи (`.div`, `.p`, `.h1`...).

-----

## 🏗️ 2. "Фабрика" — функція `createFormatter`

Оскільки всі наші методи (`div`, `div.h1`, `div.h1.p`...) поводяться однаково, ми створюємо "фабрику" — функцію, яка генерує їх. Це і є `createFormatter`.

Її єдине завдання — **створити та повернути нову "функцію-об'єкт"**.

Найважливіший її аргумент — `tagChain = []`. Це "пам'ять" ланцюжка.

  * Коли ми створюємо `Format.div`, ми викличемо фабрику з `tagChain = ['div']`.
  * Коли ми створюємо `Format.div.h1`, ми викличемо фабрику з `tagChain = ['div', 'h1']`.
  * Коли ми створюємо `Format.div.h1.p`, ми викличемо фабрику з `tagChain = ['div', 'h1', 'p']`.

-----

## ⚙️ 3. Що відбувається всередині `createFormatter`

Коли ми викликаємо `createFormatter(['div', 'h1'])`, всередині відбуваються дві речі:

### Крок 1. Створення "Callable" частини (самої функції)

Створюється внутрішня функція `formatter`, яка очікує на аргументи (`...content`).

```javascript
const formatter = function(...content) {
    // ...
};
```

Це та частина, яка виконається, коли ми *нарешті викличемо* метод: `Format.div.h1("Foo", "Bar")`.

1.  **`...content`**: Це "rest parameter", який збирає всі аргументи (`"Foo"`, `"Bar"`) в один масив: `['Foo', 'Bar']`.
2.  **`content.join('')`**: Це склеює масив у один рядок: `"FooBar"`. Це вирішує вимогу про "множинні аргументи".
3.  **`tagChain.reduceRight(...)`**: Це серце логіки обгортання.
      * Наш `tagChain` — `['div', 'h1']`.
      * `reduceRight` означає "пройти по масиву справа наліво".
      * **Ітерація 1:**
          * `tag` = `'h1'` (останній елемент)
          * `acc` (акумулятор) = `"FooBar"` (початкове значення `innerContent`)
          * Повертає: `<h1_>FooBar</h1_>`.
      * **Ітерація 2:**
          * `tag` = `'div'` (перший елемент)
          * `acc` = `"<h1>FooBar</h1>"` (результат минулої ітерації)
          * Повертає: `<div_><h1>FooBar</h1></div_>`.

Результат `reduceRight` — `"<div><h1>FooBar</h1></div>"` — повертається з функції `formatter`.

### Крок 2. Створення "Chainable" частини (властивостей)

Одразу після створення функції `formatter`, *але до її повернення*, ми додаємо до неї властивості.

```javascript
TAGS.forEach(tag => {
    formatter[tag] = createFormatter([...tagChain, tag]);
});
```

Це **рекурсивна** частина. Ми кажемо: "Для кожного тегу (`div`, `h1`, `p`, `span`)...
...створи на об'єкті `formatter` властивість з цим ім'ям (`tag`).
...значенням цієї властивості буде **результат виклику нової фабрики**".

**Приклад:**
Ми все ще всередині `createFormatter(['div', 'h1'])`.

  * Коли `tag` = `'p'`, код виконає:
    `formatter['p'] = createFormatter(['div', 'h1', 'p']);`
  * Тепер наша функція `formatter` (яка відповідає за `Format.div.h1`) має нову властивість `.p`.
  * Ця властивість `.p` — це *нова* функція-об'єкт, яка "пам'ятає" свій ланцюжок: `['div', 'h1', 'p']`.

Наприкінці `createFormatter` повертає готову "функцію-об'єкт" `formatter`.

-----

## 🚀 4. Ініціалізація: Як все починається

Код не буде працювати, доки ми не запустимо фабрику вперше. Це роблять останні рядки:

```javascript
// TAGS = ['div', 'h1', 'p', 'span']
TAGS.forEach(tag => {
    Format[tag] = createFormatter([tag]);
});
```

Цей цикл запускає фабрику для кожного тегу з *початковим* ланцюжком:

1.  `Format['div'] = createFormatter(['div']);`
      * Це створює `Format.div`.
      * Всередині цього виклику рекурсія *автоматично* створює `Format.div.h1`, `Format.div.p` і т.д.
2.  `Format['h1'] = createFormatter(['h1']);`
      * Це створює `Format.h1`.
      * Рекурсія створює `Format.h1.h1`, `Format.h1.p` і т.д.
3.  ... і так далі для `p` та `span`.

-----

## 🧩 5. Як працюють вкладені виклики

Розглянемо останню вимогу: `Format.div(Format.h1("Title"))`

Тут ланцюжки не використовуються. Це звичайний порядок виконання JavaScript: **спочатку обчислюються аргументи, потім викликається функція.**

1.  **Крок 1 (Аргумент):** Виконується `Format.h1("Title")`.

      * Викликається фабрика `createFormatter(['h1'])`.
      * Її `formatter` виконується з `content = ["Title"]`.
      * `reduceRight` обгортає `"Title"` в `<h1>`.
      * Результат: рядок `"<h1>Title</h1>"`.

2.  **Крок 2 (Зовнішня функція):** Тепер викликається `Format.div(...)`.

      * Викликається фабрика `createFormatter(['div'])`.
      * Її `formatter` виконується з `content = ["<h1>Title</h1>"]`.
      * `reduceRight` обгортає `"<h1>Title</h1>"` в `<div>`.
      * Фінальний результат: `"<div><h1>Title</h1></div>"`.

Це працює, оскільки `...content` і `content.join('')` коректно обробляють і звичайні рядки, і рядки, що вже містять HTML.