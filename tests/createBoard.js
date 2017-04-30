var test = require('tape')
var createBoard = require('../createBoard');

test('createBoard returns board with the correct dimensions', function (t){
  var size = 5;
  var expected = [
    [ false, false, false, false, false ],
    [ false , false, false, false, false ],
    [ false , false, false, false, false ],
    [ false , false, false, false, false ],

  ]
  var board = createBoard(size);
  t.equal(board.length, size, 'dimension 1 of the array is equal to given size');
  t.equal(board[0].length, size, 'dimension 2 of the array is equal to size')
  t.end();
})
