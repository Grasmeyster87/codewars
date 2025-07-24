/*
Your task is to write a function that accepts string parameter time (Example: "22:17") and returns angle between minute and hour hands on round clock at that time.

The angle measured is the smaller of two angles the two hands may form.

If hours or minutes out of their range return or input is "Invalid input".

For example:

getAngle("15:15"); // 7.5
getAngle("s5:15"); // "Invalid input"
getAngle("error"); // "Invalid input"

//-----------------------------------------

Ваша задача — написать функцию, которая принимает строковый параметр времени (например, "22:17") 
и возвращает угол между минутной и часовой стрелками на круглых часах в это время.

Измеряемый угол — это меньший из двух углов, которые могут образовать две стрелки.

Если часы или минуты выходят за пределы допустимого диапазона, возвращается или вводится значение "Недопустимый ввод".

Например:

getAngle("15:15"); // 7.5
getAngle("s5:15"); // "Недопустимый ввод"
getAngle("error"); // "Недопустимый ввод"
*/

function getAngle(t) {
  const parts = t.split(':');

  if (parts.length !== 2) return "Invalid input";

  const [hStr, mStr] = parts;
  if (isNaN(hStr) || isNaN(mStr)) return "Invalid input";

  const hours = Number(hStr);
  const minutes = Number(mStr);

  // Проверка диапазонов: допустим 0–23 часов и 0–59 минут
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return "Invalid input";
  }

  // Преобразуем в 12-часовой формат для расчёта угла
  const hr = hours % 12;

  // Расчёт угла
  const hourAngle = hr * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const diff = Math.abs(hourAngle - minuteAngle);

  return Math.min(diff, 360 - diff); // минимальный угол
}


console.log(getAngle("15:15")); // 7.5
//console.log(getAngle("s5:15")); // "Недопустимый ввод"
//console.log(getAngle("error")); // "Недопустимый ввод"