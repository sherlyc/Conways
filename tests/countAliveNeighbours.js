// var test = require('tape');
// var countAlive = require('../countAliveNeighbours')
//
//
// test('is countAliveNeighbours working - all of them dead' , function(t){
//   var size = 3;
//   var board = [
//     [false, false, false],
//     [false, false, false],
//     [false, false, false],
//   ]
//   var board2 = [
//     [false, true, false],
//     [false, false, false],
//     [false, false, false],
//   ]
//   var board3 = [
//     [false, true, false],
//     [true, false, false],
//     [false, false, true],
//   ]
//   var cell = [1,1];
//   var countAliveNeighbours = countAlive(cell, board);
//   var countAliveNeighbours2 = countAlive(cell, board2);
//   var countAliveNeighbours3 = countAlive(cell, board3);
//
//
//   t.equal(countAliveNeighbours, 0, "no alive neighbours");
//   t.equal(countAliveNeighbours2, 1, "one alive neighbour");
//   t.equal(countAliveNeighbours3, 3, "three alive neighbours");
//   t.end();
//
// })
var test = require('tape')

var countAliveNeighbours = require('../countAliveNeighbours')
var createBoard = require('../createBoard')

test('countAliveNeighbours', function (t) {
  var board = createBoard(10)
  board[0][0] = true
  board[0][1] = true
  board[0][2] = true
  board[1][0] = true
  board[2][0] = true
  board[2][1] = true
  board[2][2] = false
  board[1][2] = true
  board[1][1] = false
  t.equal(countAliveNeighbours(1, 1, board), 7)
  t.equal(countAliveNeighbours(0, 0, board), 2)
  t.end()
})
