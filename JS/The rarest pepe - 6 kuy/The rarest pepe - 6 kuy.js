/*function findRarestPepe(pepes) {
    // Крок 1: Створити об'єкт для підрахунку кількості кожного "pepe".
    // Ми проходимо по всьому списку і для кожного елемента збільшуємо лічильник.
    const counts = pepes.reduce((acc, pepe) => {
        acc[pepe] = (acc[pepe] || 0) + 1;
        return acc;
    }, {});

    // Крок 2: Знайти мінімальну частоту (найменшу кількість) серед усіх "pepes".
    const minFrequency = Math.min(...Object.values(counts));

    // Крок 3: Перевірити, чи є рідкісні "pepes".
    // Якщо найменша частота 5 або більше, то рідкісних немає.
    if (minFrequency >= 5) {
        return 'No rare pepes!';
    }

    // Крок 4: Знайти всіх "pepes", які мають мінімальну частоту.
    const rarestPepes = Object.keys(counts).filter(pepe => counts[pepe] === minFrequency);

    // Крок 5: Повернути результат залежно від кількості знайдених "pepes".
    // Якщо знайдено лише одного, повертаємо його як рядок.
    if (rarestPepes.length === 1) {
        return rarestPepes[0];
    }

    // Якщо знайдено декілька, повертаємо їх як відсортований масив.
    return rarestPepes.sort();
}*/


function findRarestPepe(pepes) {
    // Створюємо об'єкт для підрахунку частоти
    var counts = {};
    for (var i = 0; i < pepes.length; i++) {
        var pepe = pepes[i];
        counts[pepe] = (counts[pepe] || 0) + 1;
    }
   
    // Знаходимо мінімальну частоту
    var minFrequency = Infinity;
    var pepeNames = Object.keys(counts);
    for (var i = 0; i < pepeNames.length; i++) {
       if (counts[pepeNames[i]] < minFrequency) {
            minFrequency = counts[pepeNames[i]];
       }
    }
  
    // Перевіряємо, чи є рідкісні пепе
    if (minFrequency >= 5) {
        return 'No rare pepes!';
    }
  
    // Знаходимо всіх пепе з мінімальною частотою
    var rarestPepes = [];
    for (var i = 0; i < pepeNames.length; i++) {
       if (counts[pepeNames[i]] === minFrequency) {
            rarestPepes.push(pepeNames[i]);
       }
    }
  
    // Повертаємо результат
    if (rarestPepes.length === 1) {
       return rarestPepes[0];
    } else {
       return rarestPepes.sort();
    }
}