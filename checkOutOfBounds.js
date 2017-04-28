function checkBound(cell, boardCopy) {
  var x = cell[0];
  var y = cell[1];
  var length = boardCopy.length;

  return ( x < 0 || x >= length ) || (y < 0 || y >= length);
}

module.exports = checkBound
