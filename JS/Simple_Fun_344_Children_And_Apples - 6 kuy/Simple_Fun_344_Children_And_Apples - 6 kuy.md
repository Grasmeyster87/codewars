Task

Here are some children, each with a certain number of apples. Now we have to do something to make the number of apples of each child are equal.

We need to complete the redistribution step by step. With each step, we can transfer two apples from one child to another (whether or not adjacent does not matter).

Given an array apples that represents the number of apples per child. Your task is to calculate the minimum step of the transition operation. If it's impossible, return -1.
Example

For apples=[7,15,9,5], the output should be 3.

                       7 15 9 5
step 1: 15-2, 5+2 ---> 7 13 9 7
step 2: 13-2, 7+2 ---> 9 11 9 7
step 3: 11-2, 7+2 ---> 9  9 9 9

For apples=[7,7,7,7], the output should be 0.

The children's apples are equal already. No need more step.

For apples=[7,7,7,5], the output should be -1.

26 apples can't be divided equally between 4 children.

Задача

Вот несколько детей, у каждого из которых определённое количество яблок. Теперь нам нужно сделать так, чтобы количество яблок у каждого ребёнка стало одинаковым.

Нам нужно выполнить перераспределение шаг за шагом. На каждом шаге мы можем передать два яблока от одного ребёнка другому (неважно, соседние они или нет).

Дан массив apples, представляющий количество яблок у каждого ребёнка. Ваша задача — вычислить минимальный шаг операции перехода. Если это невозможно, верните -1. Пример

Для яблок = [7, 15, 9, 5] результат должен быть 3.

7 15 9 5
Шаг 1: 15 - 2, 5 + 2 ---> 7 13 9 7
Шаг 2: 13 - 2, 7 + 2 ---> 9 11 9 7
Шаг 3: 11 - 2, 7 + 2 ---> 9 9 9 9

Для яблок = [7, 7, 7] результат должен быть 0.

Яблоки у детей уже равны. Дальнейший шаг не нужен.

Для яблок = [7, 7, 7, 5] результат должен быть -1.

26 яблок невозможно разделить поровну между 4 детьми.