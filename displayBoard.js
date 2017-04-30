var clear = require("clear")

function displayBoard(board) {
    clear();
    board.forEach (function(row) {
        row.forEach (function(cell) {
            if (cell) {
                process.stdout.write("*"); //live cell
            } else {
                process.stdout.write(" "); //dead cell
            }
        })
        process.stdout.write("\n");
    })
}
module.exports = displayBoard
