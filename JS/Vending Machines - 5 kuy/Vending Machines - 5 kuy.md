

    You are in a room with 100 vending machines, each one numbered 0 to 99. Each vending machine has 100 candy bars inside. For 99 of the vending machines, all of their candy bars weigh 100 grams, but one special machine has candy bars that weigh 101 grams.

    Candy bars you vend are put into a pile, but you can only weigh the pile at most 10 times.

    Determine the number of the machine with the heavy candy bars.

In this kata, you must solve this puzzle by coding the solution in the function findSpecialIdx.

The function takes a VendingMachines object; call it vms.

    To make the ith machine vend, run vms[i].vend(); i can range from 0 to 99
    To weigh the pile, run vms.weigh()

The index of the special machine is random, and different for each VendingMachines object. The function must return the index of the machine with the heavy candy bars.

Вы находитесь в комнате со 100 торговыми автоматами, каждый из которых пронумерован от 0 до 99. В каждом автомате находится 100 шоколадных батончиков. 99 автоматов весят по 100 граммов, но в одном специальном автомате находятся батончики весом 101 грамм.

Продаваемые вами батончики складываются в кучу, но вы можете взвесить эту кучу не более 10 раз.

Определите номер автомата с самыми тяжелыми батончиками.

В этом задании вам нужно решить эту головоломку, написав решение в функции findSpecialIdx.

Функция принимает объект VendingMachines; назовем его vms.

Чтобы i-й автомат совершил продажу, выполните vms[i].vend(); i может принимать значения от 0 до 99.
Чтобы взвесить кучу, выполните vms.weigh().

Индекс специального автомата является случайным и различен для каждого объекта VendingMachines. Функция должна возвращать индекс автомата с тяжелыми шоколадными батончиками.