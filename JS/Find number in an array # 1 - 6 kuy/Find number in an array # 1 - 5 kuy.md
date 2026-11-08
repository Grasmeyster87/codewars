<div class="markdown prose max-w-none mb-8" id="description"><blockquote>
<p>When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process  --myjinxin2015 said</p>
</blockquote>
<h1 id="description">Description:</h1>
<p> Given an unsorted array <code>arr</code> that contains some positive integers. It may be one of the following:</p>
<pre><code>1. There are numbers 1 to n, only one number is 
   duplicate(repeated two times), the other numbers are unique. 
   That is, there are n+1 elements in the array. 
   e.g. [1,2,3,6,5,4,1]

2. There are numbers 1 to n, only one number is 
   unique, the other numbers are repeated two times. 
   That is, there are 2*n-1 elements in the array. 
   e.g. [1,2,3,1,2,3,4]
</code></pre>
<p> Your task is to determine the type of the array, if it is the first type, to return the duplicate; if it is second type, return the unique.</p>
<h1 id="note">Note:</h1>
<ul>
<li>All numbers are positive integers that from 1 to n;</li>
<li>The length of array always more than 5;</li>
<li>Please pay attention to optimizing the code to avoid time out.</li>
</ul>
<h1 id="some-examples">Some Examples</h1>
<pre><code>input                                output
[1,2,3,6,5,4,1]                      1
[1,2,3,1,2,3,4]                      4
[3,6,9,2,5,8,1,4,8,7]                8
[9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6]  8
</code></pre>
</div>

<br> <hr> <br>

<div class="markdown prose max-w-none mb-8" id="description"><blockquote>
<p>«Когда не остается интересных задач (ката), которые можно было бы решить, я просто создаю новые — и решаю их сам, чтобы получить удовольствие от процесса», — говорит myjinxin2015.</p>
</blockquote>
<h1 id="description">Описание:</h1>
<p>Дан неупорядоченный массив <code>arr</code>, содержащий положительные целые числа. Он может соответствовать одному из следующих типов:</p>
<pre><code>1. В массиве присутствуют числа от 1 до n; одно число повторяется дважды, а остальные встречаются по одному разу. 
Иными словами, массив содержит n+1 элемент. 
Пример: [1,2,3,6,5,4,1]

2. В массиве присутствуют числа от 1 до n; одно число встречается один раз, а остальные повторяются дважды. 
Иными словами, массив содержит 2*n-1 элементов. 
Пример: [1,2,3,1,2,3,4]
</code></pre>
<p>Ваша задача — определить тип массива; если это массив первого типа, верните повторяющееся число.</p> если это второй тип, верните уникальный элемент.</p>
<h1 id="note">Примечание:</h1>
<ul>
<li>Все числа — положительные целые значения в диапазоне от 1 до n;</li>
<li>Длина массива всегда больше 5;</li>
<li>Пожалуйста, уделите внимание оптимизации кода, чтобы избежать превышения лимита времени выполнения.</li>
</ul>
<h1 id="some-examples">Примеры</h1>
<pre><code>входные данные                       результат
[1,2,3,6,5,4,1]                      1
[1,2,3,1,2,3,4]                      4
[3,6,9,2,5,8,1,4,8,7]                8
[9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6]  8
</code></pre>
</div>

Решение строится на двух идеях: **длина массива определяет тип**, а **XOR позволяет найти ответ за один проход**.

## 1. Свойства XOR

- `a ^ a = 0`: два одинаковых числа взаимно уничтожаются.
- `a ^ 0 = a`.
- Порядок не важен.

## 2. Как найти ответ в каждом типе

**Тип 2** (`2n-1` элементов): каждое число, кроме одного, встречается дважды. При XOR всех элементов пары обнуляются, и остаётся уникальное число. Ответ: `x`.

**Тип 1** (`n+1` элементов): это числа `1..n` плюс один лишний дубликат `d`. Тогда:

```
x = (1 ^ 2 ^ ... ^ n) ^ d
```

Значит, `d = (1 ^ 2 ^ ... ^ n) ^ x`.

XOR от 1 до n считать циклом не нужно, у него есть формула по остатку `n % 4`:

| n % 4 | xor(1..n) |
|-------|-----------|
| 0 | n |
| 1 | 1 |
| 2 | n + 1 |
| 3 | 0 |

Поэтому это O(1).

## 3. Как определить тип, не зная n

- **Чётная длина** → точно тип 1. У типа 2 длина `2n-1` всегда нечётная. Тогда `n = len - 1`.
- **Нечётная длина** → возможны оба типа, и здесь нужна проверка:
  - В типе 2 максимальное число равно `n = (len+1)/2`, то есть `half`. Элементов больше `half` нет.
  - В типе 1 `n = len - 1`, что больше `half` (при `len > 3`), и число `n` точно есть в массиве. Значит, найдётся элемент `> half`.
  
  Поэтому флаг `big` показывает, что это тип 1.

## 4. Почему это быстро

- Один проход по массиву, и в нём только XOR и сравнение.
- XOR работает с int32, и V8 компилирует его в самые дешёвые инструкции.
- Нет объекта, нет `Uint32Array`, нет сумм до ~5·10¹¹ (они выходят за int32, и движок переходит на `double`).
- Нет `+` для преобразования строк в числа.

Раньше вы платили за обращения в память по случайным индексам (`cnt[arr[i]]`) и за хеширование. Здесь элементы читаются строго подряд, что хорошо для кэша процессора.