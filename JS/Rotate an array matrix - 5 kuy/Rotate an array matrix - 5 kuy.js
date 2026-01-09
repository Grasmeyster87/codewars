function rotate(matrix, direction) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (direction === 'clockwise') {
        // Clockwise: нова матриця має розмір cols x rows
        return Array.from({ length: cols }, (_, i) =>
            Array.from({ length: rows }, (_, j) => matrix[rows - 1 - j][i])
        );
    } else if (direction === 'counter-clockwise') {
        // Counter-clockwise: нова матриця має розмір cols x rows
        return Array.from({ length: cols }, (_, i) =>
            Array.from({ length: rows }, (_, j) => matrix[j][cols - 1 - i])
        );
    } else {
        throw new Error('Invalid direction: use "clockwise" or "counter-clockwise"');
    }
}

module.exports = rotate;
