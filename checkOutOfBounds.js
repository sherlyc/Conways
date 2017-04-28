function checkBound(cell) {
  var x = cell[0];
  var y = cell[1];
  var length = 4;

  return ( x < 0 || x >= length ) || (y < 0 || y >= length);
}

module.exports = checkBound
