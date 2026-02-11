function score(dice) {
    let totalScore = 0;
    // Створюємо об'єкт або массив для підрахунку кількості кожної цифри (від 1 до 6)
    const counts = {};

    // Рахуємо входження кожної грані
    dice.forEach((die) => {
        counts[die] = (counts[die] || 0) + 1;
    });

    // Проходження по кожному можливому значенню кубика
    for (let num = 1; num <= 6; num++) {
        let count = counts[num] || 0;

        // Перевіряємо наявність трійки
        if (count >= 3) {
            if (num === 1) {
                totalScore += 1000;
            } else {
                totalScore += num * 100;
            }
            // Віднімаємо 3 куба які уже враховані в трійку
            count -= 3;
        }

        // Додаємо бали за залишки одиниць та п'ятірок
        if (num === 1) {
            totalScore += count * 100;
        } else if (num === 5) {
            totalScore += count * 50;
        }
    }

    return totalScore;
}

module.exports = score;

/*
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}
*/
