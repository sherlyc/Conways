var test = require('tape');
var createBoard = require('../createBoard')
var populateBoard = require('../populateBoard');
var checkBound = require('../checkOutOfBounds');
var countAlive = require('../countAliveNeighbours')

test('is checkOutOfBound working' , function(t){
  var size = 4;
  var board = createBoard(size);
  var copyBoard = populateBoard(board);
  var cell = [0, 4];
  var cell2 = [0, 0];
  var checkOutOfBound = checkBound(cell, size);
  var checkOutOfBound2 = checkBound(cell2, size);

  t.equal(checkOutOfBound, true, "this cell is out of bound");
  t.equal(checkOutOfBound2, false, "this cell is not out of bound");
  t.end();

})


test('is countAliveNeighbours working - all of them dead' , function(t){
  var size = 3;
  var board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]
  var board2 = [
    [false, true, false],
    [false, false, false],
    [false, false, false],
  ]
  var board3 = [
    [false, true, false],
    [false, false, false],
    [false, false, true],
  ]
  var cell = [1,1];
  var countAliveNeighbours = countAlive(cell, board);
  var countAliveNeighbours2 = countAlive(cell, board2);
  var countAliveNeighbours3 = countAlive(cell, board3);


  t.equal(countAliveNeighbours, 0, "no alive neighbours");
  t.equal(countAliveNeighbours2, 1, "one alive neighbour");
  t.equal(countAliveNeighbours3, 2, "two alive neighbours");
  t.end();

})
