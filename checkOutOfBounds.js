function checkBound(cell, boardSize) {
  var x = cell[0];
  var y = cell[1];
  var length = boardSize;

  return ( x < 0 || x >= length ) || (y < 0 || y >= length);
}

module.exports = checkBound
