function populateBoard(board) {
  var boardCopy = [...board]
  var size = boardCopy.length;
  var randomRate = 0.6;

  //fill board cells with trues or falses
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      var randomBoolean = Math.random() >= randomRate;
      boardCopy[i][j]=randomBoolean;
    }
  }
  return boardCopy
}

module.exports = populateBoard
