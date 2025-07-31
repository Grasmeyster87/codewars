/*
Sir Bobsworth is a custodian at a local data center. As he suspected, Bobsworth recently found out he is to be fired on his birthday after years of pouring his soul into maintaining the facility.

Bobsworth, however, has other plans.

Bobsworth knows there are 1 to n switches in the breaker box of the data center. Moving from switch 1 to n, Bob first flips every switch off. Beginning from the first switch again, Bob then flips every 2nd switch. Once again starting from the first switch, Bob then flips every 3rd switch. Bob continues this pattern until he flips every nth switch & makes n passes.

At the end of Bobsworth's mayhem, how many switches are turned off?
Specifications

Create the function off, that receives the nth switch as argument n. The function should return an ascending array containing all of the switch numbers that remain off after Bob completes his revenge.
Example: (Input --> Output)

1 --> [1]
2 --> [1]
4 --> [1, 4]

The parameter n will always be a number >= 1.

//----------------------------------------------
Сэр Бобсворт работает уборщиком в местном центре обработки данных. 
Как он и подозревал, Бобсворт недавно узнал, что его уволят в день рождения после многих лет работы в центре.

Однако у Бобсворта другие планы.

Бобсворт знает, что в распределительном щите центра обработки данных есть от 1 до n переключателей. 
Двигаясь от переключателя 1 к n, Боб сначала выключает все переключатели. Начиная с первого переключателя, Боб затем выключает каждый второй. 
И снова, начиная с первого переключателя, Боб выключает каждый третий. Боб продолжает так, пока не выключит каждый n-й переключатель и не сделает n проходов.

Сколько переключателей будет выключено в конце хаоса Бобсворта?
Характеристики

Создайте функцию off, которая принимает n-й переключатель в качестве аргумента n. 
Функция должна возвращать возрастающий массив, содержащий все номера переключателей, 
оставшихся выключенными после того, как Боб завершит свою месть. Пример: (Вход --> Выход)

1 --> [1]
2 --> [1]
4 --> [1, 4]

Параметр n всегда будет числом >= 1.

*/

function off(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        // Проверяем: если количество делителей чётное → выключен
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count % 2 === 0) result.push(i);
    }
    return result;
}


console.log(off(1));  // [1]
console.log(off(2));  // [1]
console.log(off(4));  // [1, 4]
console.log(off(9));  // [1, 4, 9]