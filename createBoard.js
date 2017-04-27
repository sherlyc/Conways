function createBoard(size) {
  var board = []
  //make 2d array
  var my2dArray = (new Array(size)).fill(0).map(
                     function(){ return new Array(size).fill(false);}
                    );
  console.log(board=my2dArray);
  return board = my2dArray;
}

module.exports = createBoard
