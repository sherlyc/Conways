var test = require('tape');
var createBoard = require('../createBoard')
var populateBoard = require('../populateBoard');
var checkBound = require('../checkOutOfBounds');

test('is checkOutOfBound working' , function(t){
  var size = 4;
  var board = createBoard(size);
  var copyBoard = populateBoard(board);
  var cell = [0, 4];
  var cell2 = [0, 0];
  var cell3 = [-1, -1];
  var checkOutOfBound = checkBound(cell, size);
  var checkOutOfBound2 = checkBound(cell2, size);
  var checkOutOfBound3 = checkBound(cell3, size);


  t.equal(checkOutOfBound, true, "this cell is out of bound");
  t.equal(checkOutOfBound2, false, "this cell is not out of bound");
  t.true(checkOutOfBound3, "this cell is out of bound");
  t.end();

})
