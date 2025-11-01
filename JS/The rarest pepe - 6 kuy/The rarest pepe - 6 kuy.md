The pepe market is on the verge of collapse. In a last-ditch attempt to make some quick cash, you decide to sift through the thousands of pepes on the internet to identify the rarest ones, which are worth more. Since doing this by hand would be tedious, you decide to use your programming skills to streamline the process.

Your task in this kata is to implement a function that, given a non-empty list of pepes (pepes), returns the rarest pepe in the list.

    If two or more pepes are equally rare, return a sorted list of these pepes.
    If the rarest pepe (or pepes) has a frequency of 5 or more, then there are no truly rare pepes, so your function should return "No rare pepes!".

More info on rare pepes here.


Рынок Пепе находится на грани краха. В отчаянной попытке быстро заработать вы решаете перебрать тысячи Пепе в интернете, чтобы определить самые редкие, которые стоят дороже. Поскольку делать это вручную было бы утомительно, вы решаете использовать свои навыки программирования, чтобы упростить процесс.

Ваша задача в этой ката — реализовать функцию, которая по непустому списку Пепе (Пепе) возвращает самый редкий Пепе из списка.

Если два или более Пепе одинаково редки, вернуть отсортированный список этих Пепе.

Если самый редкий Пепе (или Пепе) встречается с частотой 5 или более, то по-настоящему редких Пепе нет, поэтому ваша функция должна вернуть «Нет редких Пепе!».

Подробнее о редких Пепе здесь.

counts[pepe] = (counts[pepe] || 0) + 1; як працює ця частина

✦ Ця частина коду counts[pepe] = (counts[pepe] || 0) + 1; використовується для підрахунку кількості входжень кожного "пепе" у списку. Давайте розберемо її покроково:

   1. `counts[pepe]`: Це спроба отримати поточне значення лічильника для конкретного pepe з об'єкта counts.
       * Якщо pepe вже зустрічався раніше, то counts[pepe] поверне число (наприклад, 1, 2, 3...).
       * Якщо pepe зустрічається вперше, то counts[pepe] буде undefined (невизначеним), оскільки такого ключа ще немає в об'єкті counts.

   2. `(counts[pepe] || 0)`: Це ключова частина, яка використовує логічний оператор АБО (||).
       * У JavaScript, якщо ліва частина оператора || є "істинною" (truthy), то повертається її значення. Числа, відмінні від нуля, є "істинними".
       * Якщо ліва частина є "хибною" (falsy), то повертається значення правої частини. undefined, null, 0, false, '' (порожній рядок) є "хибними" значеннями.
       * Отже, якщо counts[pepe] вже має числове значення (наприклад, 1, 2, 3), то (counts[pepe] || 0) поверне це число.
       * Якщо counts[pepe] є undefined (тобто pepe зустрічається вперше), то undefined є "хибним", і вираз (undefined || 0) поверне 0.

   3. `+ 1`: До результату попереднього кроку додається 1.
       * Якщо pepe вже зустрічався, ми беремо його поточний лічильник і додаємо 1.
       * Якщо pepe зустрічається вперше, ми беремо 0 (з || 0) і додаємо 1.

   4. `counts[pepe] = ...`: Отриманий результат (збільшений лічильник) присвоюється назад до counts[pepe].
       * Таким чином, лічильник для цього pepe оновлюється або ініціалізується значенням 1, якщо він зустрічається вперше.

  Приклад:

  Припустимо, у нас є список pepes = ['A', 'B', 'A'].

   * Перший `pepe`: 'A'
       * counts['A'] є undefined.
       * (undefined || 0) стає 0.
       * 0 + 1 стає 1.
       * counts['A'] присвоюється 1. Тепер counts виглядає як {'A': 1}.

   * Другий `pepe`: 'B'
       * counts['B'] є undefined.
       * (undefined || 0) стає 0.
       * 0 + 1 стає 1.
       * counts['B'] присвоюється 1. Тепер counts виглядає як {'A': 1, 'B': 1}.

   * Третій `pepe`: 'A'
       * counts['A'] є 1.
       * (1 || 0) стає 1.
       * 1 + 1 стає 2.
       * counts['A'] присвоюється 2. Тепер counts виглядає як {'A': 2, 'B': 1}.

  Цей шаблон є дуже поширеним і ефективним способом ініціалізації та збільшення лічильників в об'єкті JavaScript.