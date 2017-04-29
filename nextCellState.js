var underPopulated = require('./underPopulated');
var overPopulated = require('./overPopulated');
var resurrectable = require('./resurrectable');

function nextCellState(alive, neighbourCount){

    if (alive) {//living cell check for underpopulated or overpopulated
        return (underPopulated(neighbourCount) || overPopulated(neighbourCount)) ? false : true;
    } else {
        return (resurrectable(neighbourCount)) ? true : false;
    }
}

module.exports = nextCellState
