John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:

With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
Examples:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
Notes:

    try not to modify the input list of distances ls
    in some languages this "list" is in fact a string (see the Sample Tests).


<br> <hr> <br>

Джон и Мэри планируют поездку по нескольким городам (A, B, C...). У Мэри есть список расстояний между этими городами: `ls = [50, 55, 57, 58, 60]`. Джон устал быть за рулем; он говорит Мэри, что не хочет проехать в общей сложности более `t = 174` миль и готов посетить только 3 города.

Какие расстояния (а значит, и какие города) им следует выбрать, чтобы сумма расстояний была максимально возможной — так, чтобы это устроило и Мэри, и Джона?
Пример:

Имея список `ls` и задачу посетить 3 города, они могут выбрать один из следующих вариантов: `[50, 55, 57]`, `[50, 55, 58]`, `[50, 55, 60]`, `[50, 57, 58]`, `[50, 57, 60]`, `[50, 58, 60]`, `[55, 57, 58]`, `[55, 57, 60]`, `[55, 58, 60]`, `[57, 58, 60]`.

Суммы расстояний в этих случаях составляют: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

Максимально возможная сумма, не превышающая лимит в 174 мили, — это 173, а соответствующие ей расстояния между тремя городами — `[55, 58, 60]`.

Функция `chooseBestSum` (название может варьироваться в зависимости от языка программирования) принимает следующие параметры: `t` (максимально допустимая сумма расстояний, целое число ≥ 0), `k` (количество городов для посещения, `k ≥ 1`) и `ls` (список расстояний; все значения — неотрицательные целые числа, список содержит как минимум один элемент). Функция возвращает «наилучшую» сумму — максимально возможную сумму $k$ расстояний, которая не превышает заданный предел $t$. Если такая сумма существует, функция возвращает её; в противном случае она возвращает `nil`, `null`, `None`, `Nothing` (в зависимости от языка программирования). В частности, для языков C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell и Swift следует возвращать -1.
Примеры:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (или null, или -1 — для C++, C, D, Rust, Swift, Go и т. д.)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
Примечания:

Старайтесь не изменять исходный список расстояний `ls`.
В некоторых языках этот «список» на самом деле представлен в виде строки (см. примеры тестов).

Як це працює: рекурсивно перебираємо всі комбінації з k відстаней (кожна — починаючи з індексу після попередньої, тому без повторів). Якщо поточна сума вже перевищує t, гілку відсікаємо. Оскільки відстані невід'ємні, сума лише зростає, тож таке відсікання коректне. Після вибору k елементів оновлюємо максимум. Якщо жодна комбінація не вписалась у ліміт (або k > ls.length) — повертається null. Вхідний масив не змінюється.

Я не запускав тести, але за прикладами з умови: (163, 3, [50,55,56,57,58]) → 163, (163, 3, [50]) → null, (230, 3, [91,74,73,85,73,81,87]) → 228.