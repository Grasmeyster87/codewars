Your task is to create a new implementation of modpow so that it computes (x^y)%n for large y. The problem with the current implementation is that the output of Math.pow is so large on our inputs that it won't fit in a 64-bit float.

You're also going to need to be efficient, because we'll be testing some pretty big numbers.
Random tests

150150150 random tests with 2≤x≤400002 \le x \le 400002≤x≤40000, 3000000≤y≤20000000003000000 \le y \le 20000000003000000≤y≤2000000000, 1000≤n≤100000001000 \le n \le 100000001000≤n≤10000000.

<br> <hr> <br>

Ваша задача — создать новую реализацию функции `modpow`, которая вычисляет `(x^y)%n` для больших значений `y`. Проблема текущей реализации заключается в том, что выходные данные функции `Math.pow` настолько велики для наших входных данных, что не помещаются в 64-битное число с плавающей запятой.

Вам также потребуется обеспечить эффективность, поскольку мы будем тестировать довольно большие числа.

Случайные тесты

150150150 случайных тестов с 2<x<400002 \le x \le 400002<x<40000, 3000000<y<y<20000000003000000 \le y \le 200000000003000000<y<2000000000, 1000<n<100000001000 \le n \le 100000001000<n<10000000.