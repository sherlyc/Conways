var test = require('tape');
var createBoard = require('../createBoard')
var populateBoard = require('../populateBoard');

test('is the boardCopy working?' , function(t){
  var size = 4;
  var board = createBoard(size);
  var copyBoard = populateBoard(board);

  t.equal(copyBoard.length, size, 'dimension 1 of the array is equal to given size');
  t.equal(copyBoard[0].length, size, 'dimension 2 of the array is equal to size')
  t.end();
})
