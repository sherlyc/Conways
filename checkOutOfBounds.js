function checkBound(cell, size) {
  var x = cell[0];
  var y = cell[1];
  var length = size;

  return ( x < 0 || x >= length ) || (y < 0 || y >= length) ? true : false;
}

module.exports = checkBound
