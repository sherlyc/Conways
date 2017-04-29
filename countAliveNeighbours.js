var outOfBounds = require('./checkOutOfBounds')

function countAliveNeighbours(cellRow, cellCol, board) {
var x = cellRow;
var y = cellCol;
var size = board.length;
var countAlive = 0;

  for (var i = -1; i <= 1; i++ ){
    for (var j = -1; j <= 1; j++ ){


        if(!outOfBounds([ x + i , y + i ] , size ) && board [ x + i ][ y + j ] == true ){
            countAlive++
        };
    }
  }
  return countAlive;
}

module.exports = countAliveNeighbours
