var test = require('tape');
var createBoard = require('../createBoard')
var populateBoard = require('../populateBoard');
var checkBound = require('../checkOutOfBounds');

test('is checkOutOfBound working' , function(t){
  var cell = [0, 4];
  var cell2 = [0, 0];
  var checkOutOfBound = checkBound(cell);
  var checkOutOfBound2 = checkBound(cell2);

  t.equal(checkOutOfBound, true, "this cell is out of bound");
  t.equal(checkOutOfBound2, false, "this cell is good");
  t.end();

})
