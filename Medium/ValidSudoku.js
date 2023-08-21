/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const seen = new Map();
    // validate rows
    for (let col = 0; col < 9; col++) {
        seen.clear();
        for (let row = 0; row < 9; row++) {
            if (board[col][row] === '.') continue;
            if (seen.has(board[col][row])) return false;

            seen.set(board[col][row]);
        }
    }
    // validate cols
    for (let row = 0; row < 9; row++) {
        seen.clear();
        for (let col = 0; col < 9; col++) {
            if (board[col][row] === '.') continue;
            if (seen.has(board[col][row])) return false;

            seen.set(board[col][row]);
        }
    }
    // validate boxes
    for (let col = 0; col < 9; col += 3) {
        for (let row = 0; row < 9; row += 3) {
            // each box
            seen.clear();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (board[col + i][row + j] === '.') continue;
                    if (seen.has(board[col + i][row + j])) return false;

                    seen.set(board[col + i][row + j]);
                }
            }
        }
    }

    return true;
};

// Test
const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(board));