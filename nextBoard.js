
var nextCellState = require('./nextCellState')
var countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {

var board = [];
var size = currentBoard.length
var neighbourCount = 0;

for ( var i = 0; i < size; i++ ) {
    for ( var j = 0; j < size; j++ ) {
        neighbourCount = countAliveNeighbours('['+i+']['+j+']', currentBoard)
        console.log("#")
        console.log(neighbourCount);
        //nextCellState(board);
        //board.push()
    }
}


//return board
}

module.exports = nextBoard
