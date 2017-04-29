var test = require('tape');
var countAlive = require('../countAliveNeighbours')


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
    [true, false, false],
    [false, false, true],
  ]
  var cell = [1,1];
  var countAliveNeighbours = countAlive(cell, board);
  var countAliveNeighbours2 = countAlive(cell, board2);
  var countAliveNeighbours3 = countAlive(cell, board3);


  t.equal(countAliveNeighbours, 0, "no alive neighbours");
  t.equal(countAliveNeighbours2, 1, "one alive neighbour");
  t.equal(countAliveNeighbours3, 3, "three alive neighbours");
  t.end();

})
