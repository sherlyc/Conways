
var nextCellState = require('./nextCellState')
var countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {

var size = currentBoard.length
var neighbourCount = 0;
var board = [];

for ( var i = 0; i < size; i++ ) {
    board[i] = [];
    for ( var j = 0; j < size; j++ ) {
        neighbourCount = countAliveNeighbours(i, j, currentBoard);
        board[i].push(nextCellState(currentBoard[i][j], neighbourCount));
    }
}
return board
}

module.exports = nextBoard
