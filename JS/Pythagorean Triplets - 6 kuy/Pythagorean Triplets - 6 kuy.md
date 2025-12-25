<div class="markdown prose max-w-none mb-8" id="description"><h1 id="pythagorean-triples">Pythagorean Triples</h1>
<p>A Pythagorean triplet is a set of three numbers a, b, and c where <code>a^2 + b^2 = c^2</code>. In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to <code>n</code>, the given argument to the function <code>pythagorean_triplet</code>.</p>
<h2 id="your-task">Your task</h2>
<p>In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to <code>n</code>, the given argument to the function, where <code>0 &lt; n &lt; 10000000</code></p>
<h2 id="examples">Examples</h2>
<p>One such triple is <code>3, 4, 5</code>. For this challenge, you would be given the value <code>60</code> as the argument to your function, and then it would return the Pythagorean triplet in an array <code>[3, 4, 5]</code> which is returned in increasing order. <code>3^2 + 4^2 = 5^2</code> since <code>9 + 16 = 25</code> and then their product (<code>3 * 4 * 5</code>) is <code>60</code>.</p>
<p>More examples:</p>
<table>
<thead>
<tr>
<th><strong>argument</strong></th>
<th><strong>returns</strong></th>
</tr>
</thead>
<tbody><tr>
<td>60</td>
<td>[3, 4, 5]</td>
</tr>
<tr>
<td>780</td>
<td>[5, 12, 13]</td>
</tr>
<tr>
<td>2040</td>
<td>[8, 15, 17]</td>
</tr>
</tbody></table>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><h1 id="pythagorean-triples">Пифагоровы тройки</h1>
<p>Пифагорейская тройка — это набор из трех чисел a, b и c, где <code>a^2 + b^2 = c^2</code>. В этом задании вам нужно будет найти пифагоровы тройки, произведение которых равно <code>n</code>, заданному аргументу функции <code>pythagorean_triplet</code>.</p>
<h2 id="your-task">Ваше задание</h2>
<p>В этом задании вам нужно будет найти пифагоровы тройки, произведение которых равно <code>n</code>, заданному аргументу функции, где <code>0 < n < 10000000</code></p>
<h2 id="examples">Примеры</h2>
<p>Одна из таких троек — <code>3, 4, 5</code>. Для этого задания вам будет передано значение <code>60</code> в качестве аргумента вашей функции, и она вернет пифагорейскую тройку в виде массива <code>[3, 4, 5]</code>, который возвращается в порядке возрастания. <code>3^2 + 4^2 = 5^2</code>, так как <code>9 + 16 = 25</code>, и тогда их произведение (<code>3 * 4 * 5</code>) равно <code>60</code>.</p>
<p>Больше примеров:</p>
<table>
<thead>
<tr>
<th><strong>аргумент</strong></th>
<th><strong>возвращает</strong></th>
</tr>
</thead>
<tbody><tr>
<td>60</td>
<td>[3, 4, 5]</td>
</tr>
<tr>
<td>780</td>
<td>[5, 12, 13]</td>
</tr>
<tr>
<td>2040</td>
<td>[8, 15, 17]</td>
</tr>
</tbody></table>
</div>

## Пояснення роботи функції построково

```js
function pythagoreanTriplet(n) {
    // Перевірка досконалого куба
    const isPerfectCube = (x) => {
        const t = Math.round(Math.cbrt(x));
        return t * t * t === x ? t : null;
    };

    // НСД
    const gcd = (a, b) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };

    // межа для m: достатньо до sqrt(n), цього вистачає для n < 1e7
    const limit = Math.floor(Math.sqrt(n));

    for (let m = 2; m <= limit; m++) {
        for (let r = 1; r < m; r++) {
            // умови примітивності
            if (((m - r) & 1) === 0) continue; // різниця має бути непарною
            if (gcd(m, r) !== 1) continue; // взаємно прості

            const a = m * m - r * r;
            const b = 2 * m * r;
            const c = m * m + r * r;

            const P0 = a * b * c;
            if (P0 > n) continue;

            if (n % P0 === 0) {
                const q = n / P0;
                const t = isPerfectCube(q);
                if (t) {
                    return [t * a, t * b, t * c].sort((x, y) => x - y);
                }
            }
        }
    }

    return null;
}

module.exports = pythagoreanTriplet;
```

---

### Загальна ідея алгоритму

-   **Мета:** знайти трійку \((a, b, c)\), де \(a^2 + b^2 = c^2\) і \(a \cdot b \cdot c = n\).
-   **Підхід:** генеруємо примітивні Піфагорові трійки формулою Евкліда, потім перевіряємо, чи можна їх масштабувати на ціле число \(t\), щоб добуток став \(n\). Оскільки масштабування сторін на \(t\) множить добуток на \(t^3\), необхідно, щоб \(\frac{n}{P_0}\) було досконалим кубом.

---

### Розбір коду по частинах

#### Функція перевірки досконалого куба

-   **Що робить:** визначає, чи є число \(x\) досконалим кубом, і повертає кубічний корінь \(t\), якщо так, або `null`, якщо ні.
-   **Кроки:**
    -   **Обчислення:** `Math.cbrt(x)` дає кубічний корінь; `Math.round` округляє його до найближчого цілого.
    -   **Перевірка:** якщо `t * t * t === x`, значить \(x = t^3\).

#### Функція НСД (gcd)

-   **Що робить:** знаходить найбільший спільний дільник двох чисел за алгоритмом Евкліда.
-   **Як працює:**
    -   **Цикл:** поки друге число не нуль, замінюємо пару на `(b, a % b)`.
    -   **Вихід:** коли `b` стане 0, `a` — це НСД.

#### Межа перебору m

-   **Рядок:** `const limit = Math.floor(Math.sqrt(n));`
-   **Навіщо:** обмежуємо \(m\), щоб не перебирати зайві значення (продукт трійки росте швидко; для \(n < 10^7\) цього вистачає на практиці).

#### Подвійний цикл за параметрами Евкліда

-   **Цикли:** `for (let m = 2; m <= limit; m++)` і внутрішній `for (let r = 1; r < m; r++)`.
-   **Сенс:** генерувати всі можливі пари \((m, r)\), де \(m > r > 0\).

#### Умови примітивності трійки

-   **Непарна різниця:** `if (((m - r) & 1) === 0) continue;`
    -   **Чому:** одна з \(m, r\) має бути парною, друга непарною, щоб трійка була примітивною.
-   **Взаємна простота:** `if (gcd(m, r) !== 1) continue;`
    -   **Чому:** якщо \(\gcd(m, r) \neq 1\), трійка не буде примітивною.

#### Генерація трійки за формулою Евкліда

-   **Формули:**
    -   \(a = m^2 - r^2\)
    -   \(b = 2mr\)
    -   \(c = m^2 + r^2\)
-   **Гарантія:** ці значення завжди дають Піфагорову трійку: \(a^2 + b^2 = c^2\).

#### Обчислення добутку примітивної трійки

-   **Рядок:** `const P0 = a * b * c;`
-   **Фільтр:** `if (P0 > n) continue;`
    -   **Логіка:** якщо добуток уже більший за цільовий \(n\), масштабування не зменшує добуток, тож ця трійка не підходить.

#### Перевірка можливості масштабування до n

-   **Дільність:** `if (n % P0 === 0)` — \(P_0\) має ділити \(n\).
-   **Кубовий множник:** `const q = n / P0; const t = isPerfectCube(q);`
    -   **Математика:** якщо \(q = t^3\), тоді масштабування сторін на \(t\) дасть добуток \(t^3 \cdot P_0 = n\).

#### Повернення результату

-   **Рядок:** `return [t * a, t * b, t * c].sort((x, y) => x - y);`
-   **Навіщо:** масштабуємо трійку на \(t\) і сортуємо за зростанням, як вимагає задача.

#### Якщо нічого не знайшли

-   **Рядок:** `return null;`
-   **Сенс:** немає жодної трійки, що дає добуток \(n\).

---

### Чому потрібен саме кубовий множник

-   **Масштабування трійки:** якщо взяти примітивну трійку \((a, b, c)\) і помножити кожну сторону на \(t\), отримаємо \((ta, tb, tc)\), що теж є трійкою.
-   **Добуток:**
    \[
    (ta) \cdot (tb) \cdot (tc) = t^3 \cdot (a \cdot b \cdot c)
    \]
-   **Висновок:** для збігу з \(n\) потрібно, щоб \(\frac{n}{P_0}\) було рівно \(t^3\), а не просто будь-яким дільником.

---

### Нюанси продуктивності

-   **Обрізання перебору:** умова `if (P0 > n) continue;` швидко відкидає великі трійки.
-   **Менші цикли:** обмеження `limit = floor(sqrt(n))` зменшує верхню межу для \(m\).
-   **Ранній вихід:** як тільки знаходиться трійка, функція завершується — це економить час.

Якщо хочеш, можу запропонувати кілька покращень продуктивності: жорсткіша верхня межа для `m`, припинення внутрішнього циклу при зростанні `P0`, або перебір тільки `r` одного паритету щодо `m`.
