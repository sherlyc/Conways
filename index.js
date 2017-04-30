var conways = require('./conway');
var display = require('./displayBoard');
var size = 50;

var board = conways.createBoard(size)
board = conways.populateBoard(board)

setInterval(tick, 200)

function tick() {
  display(board);
  board = conways.nextBoard(board);
}
