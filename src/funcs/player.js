const gameBoard = require("./gameboard.js");
const player = {
    board: gameBoard(10),
    hi: function() {console.log('HI');},
};

module.exports = player;