/**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
function whiteBlackAreas(cols, rows) {
    if (cols.length === 0 || rows.length === 0) {
        return [0, 0];
    }

    let whiteCols = 0;
    let blackCols = 0;

    for (let i = 0; i < cols.length; i++) {
        if (i % 2 === 0) {
            whiteCols += cols[i];
        } else {
            blackCols += cols[i];
        }
    }

    let whiteRows = 0;
    let blackRows = 0;

    for (let i = 0; i < rows.length; i++) {
        if (i % 2 === 0) {
            whiteRows += rows[i];
        } else {
            blackRows += rows[i];
        }
    }

    const whiteArea = whiteCols * whiteRows + blackCols * blackRows;

    const blackArea = whiteCols * blackRows + blackCols * whiteRows;

    return [whiteArea, blackArea];
}
console.log(whiteBlackAreas([3, 1, 2, 7, 1], [1, 8, 4, 5, 2])); // [146,134]

module.exports = whiteBlackAreas;
