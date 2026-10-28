/*
function expandedForm(num) {
    if (num == 0) return null;

    let intemediaArray = num.toString().split('').reverse();
    let resultArr = [];

    for (let i = 0; i < intemediaArray.length; i++) {
        if (intemediaArray[i] == '0') {
            resultArr.push('0');
        } else {
            resultArr.push(intemediaArray[i].padEnd(i + 1, '0'));
        }
    }

    // 1. Переворачиваем массив ОДИН РАЗ перед циклом
    resultArr.reverse();

    // 2. Фильтруем нули, чтобы они не мешали
    let filteredArr = resultArr.filter(item => item !== '0');

    // 3. Соединяем элементы через " + "
    return filteredArr.join(' + ');
}*/

function expandedForm(num) {
    const str = num.toString();
    
    return str.split('')
        .map((digit, index) => {
            // Вычисляем сколько нулей нужно добавить справа
            const zeros = '0'.repeat(str.length - 1 - index);
            return digit === '0' ? '0' : digit + zeros;
        })
        .filter(val => val !== '0') // Убираем нули
        .join(' + ');              // Склеиваем через плюс
}

module.exports = expandedForm;
