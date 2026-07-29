Consider the sequence U(n, x) = x + 2x**2 + 3x**3 + .. + nx**n where x is a real number and n a positive integer.

When n goes to infinity and x has a correct value (ie x is in its domain of convergence D), U(n, x) goes to a finite limit m depending on x.

Usually given x we try to find m. Here we will try to find x (x real, 0 < x < 1) when m is given (m real, m > 0).

Let us call solve the function solve(m) which returns x such as U(n, x) goes to m when n goes to infinity.
Examples:

solve(2.0) returns 0.5 since U(n, 0.5) goes to 2 when n goes to infinity.

solve(8.0) returns 0.7034648345913732 since U(n, 0.7034648345913732) goes to 8 when n goes to infinity.
Note:

You pass the tests if abs(actual - expected) <= 1e-12

<br> <hr> <br>

Рассмотрим последовательность U(n, x) = x + 2x**2 + 3x**3 + .. + nx**n, где x — действительное число, а n — положительное целое число.

Когда n стремится к бесконечности и x имеет правильное значение (т.е. x находится в области сходимости D), U(n, x) стремится к конечному пределу m, зависящему от x.

Обычно, имея x, мы пытаемся найти m. Здесь мы попытаемся найти x (x — действительное число, 0 < x < 1), когда m задано (m — действительное число, m > 0).

Назовем функцию solve(m), которая возвращает x таким образом, что U(n, x) стремится к m, когда n стремится к бесконечности.

Примеры:

solve(2.0) возвращает 0.5, так как U(n, 0.5) стремится к 2, когда n стремится к бесконечности.

solve(8.0) возвращает 0.7034648345913732, поскольку U(n, 0.7034648345913732) стремится к 8 при n, стремящемся к бесконечности.
Примечание:

Проверки пройдены, если abs(actual - expected) <= 1e-12