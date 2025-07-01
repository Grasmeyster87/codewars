/*
Connect Four

Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]

The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
//--------------------------
Connect Four

Посмотрите описание игры Connect Four на вики:

Wiki Connect Four

Сетка состоит из 6 строк и 7 столбцов, которые названы от A до G.

Вы получите список строк, показывающих порядок фигур, которые выпали в столбцах:
piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]

Список может содержать до 42 ходов и показывает порядок, в котором играют игроки.

Первый игрок, который соединит четыре элемента одного цвета, становится победителем.

Вы должны вернуть «Желтый», «Красный» или «Ничья» соответственно.
*/


function whoIsWinner(pieces) {
    const ROWS = 6, COLS = 7;
    const board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));
    const colMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };
    const heights = Array(COLS).fill(0);

    function checkWin(row, col, color) {
        const directions = [
            [0, 1], [1, 0], [1, 1], [1, -1]
        ];

        for (const [dr, dc] of directions) {
            let count = 1;
            for (let dir of [-1, 1]) {
                let r = row, c = col;
                while (true) {
                    r += dr * dir;
                    c += dc * dir;
                    if (
                        r >= 0 && r < ROWS &&
                        c >= 0 && c < COLS &&
                        board[r][c] === color
                    ) {
                        count++;
                    } else break;
                }
            }
            if (count >= 4) return true;
        }
        return false;
    }

    for (const move of pieces) {
        const [columnLetter, color] = move.split("_");
        const col = colMap[columnLetter];
        const row = heights[col]++;
        board[row][col] = color;

        if (checkWin(row, col, color)) return color;
    }

    return "Draw";
}
