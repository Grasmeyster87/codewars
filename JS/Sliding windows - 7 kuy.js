/*
Task

Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

The windows may overlap each other, or skip certain elements. All windows should be of the given length; if insufficient elements remain after a certain offset, end the list of lists. It is possible to take 0 elements from an empty list, so take care to handle window(0,offset,list) correctly.

The length will always be non-negative; the offset will always be strictly positive.
Examples

for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]


//---------------------------------------------------------------------------------------

Задача

Дав длину, смещение и список, сдвиньте окно этой длины, перемещаясь на это смещение каждый шаг, по списку, возвращая список списков.

Окна могут перекрывать друг друга или пропускать определенные элементы. 
Все окна должны быть указанной длины; если после определенного смещения остается недостаточно элементов, 
завершите список списков. Из пустого списка можно взять 0 элементов, поэтому позаботьтесь о том, чтобы правильно обрабатывать window(0,offset,list).

Длина всегда будет неотрицательной; смещение всегда будет строго положительным.
Примеры

для 2, 1, [0,1,2,3,4] вернуть [ [0,1], [1,2], [2,3], [3,4] ]
для 2, 2, [0,1,2,3,4] вернуть [ [0,1], [2,3] ]
для 2, 3, [0,1,2,3,4] вернуть [ [0,1], [3,4] ]
*/

function window(length, offset, list) {
    const result = [];

    // Якщо довжина вікна — 0, повертаємо пусті масиви на кожному кроці
    if (length === 0) {
        for (let i = 0; i <= list.length; i += offset) {
            result.push([]);
        }
        return result;
    }

    // Пересуваємо вікно з кроком offset і додаємо підмасиви в результат
    for (let i = 0; i + length <= list.length; i += offset) {
        result.push(list.slice(i, i + length));
    }
    return result;

}