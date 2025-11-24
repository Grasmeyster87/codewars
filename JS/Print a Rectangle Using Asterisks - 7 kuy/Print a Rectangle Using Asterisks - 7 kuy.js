function getRectangleString(width, height) {
    let result = '';

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            // Верхняя или нижняя граница
            if (row === 0 || row === height - 1) {
                result += '*';
            } else {
                // Левая или правая граница
                if (col === 0 || col === width - 1) {
                    result += '*';
                } else {
                    result += ' ';
                }
            }
        }
        result += '\r\n'; // конец строки
    }

    return result;
}

console.log(getRectangleString(3, 3));
module.exports = getRectangleString;
