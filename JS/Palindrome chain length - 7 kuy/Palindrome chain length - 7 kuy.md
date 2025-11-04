Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
Example

For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!

4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
Additional info

Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.

---------------------------------------------------------------------------------------------------------

Число является палиндромом, если оно равно числу, цифры которого расположены в обратном порядке. Например, 5, 44, 171, 4884 являются палиндромами, а 43, 194, 4773 — нет.

Напишите функцию, которая принимает положительное целое число и возвращает количество дополнительных действий, необходимых для получения палиндрома. Специальный шаг: «перевернуть цифры и сложить с исходным числом». Если полученное число не является палиндромом, повторяйте процедуру с суммой, пока не получится палиндром.

Если входное число уже является палиндромом, количество действий равно 0.

Гарантируется, что все входные данные имеют конечный палиндром, не превышающий MAX_SAFE_INTEGER. Пример

Например, начнём с 87:

87 + 78 = 165 — шаг 1, не палиндром
165 + 561 = 726 — шаг 2, не палиндром
726 + 627 = 1353 — шаг 3, не палиндром
1353 + 3531 = 4884 — шаг 4, палиндром!

4884 — палиндром, и нам потребовалось 4 шага, чтобы его получить, поэтому ответ для 87 — 4.
Дополнительная информация

Интересную информацию по этой задаче можно найти в этой статье Википедии о числах Лишрел.