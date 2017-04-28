var outOfBounds = require('./checkOutOfBounds')

function countAliveNeighbours(cell, board) {
var x = cell[0];
var y = cell[1];
var countAlive = 0;

  for (var i = -1; i <= 1; i++ ){
    for (var j = -1; j <= 1; j++ ){
        if(!outOfBounds(board[ x + i ][ y + j ]) && board [ x + i ][ y + j ] == true ){
          countAlive++
        };
    }
  }
  return countAlive;
}

module.exports = countAliveNeighbours
