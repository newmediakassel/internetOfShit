'use strict'; // use javascript strict mode

const five = require('johnny-five');
const board = new five.Board();

// function to call after a connection to the board is established
const onBoardReady = function () {
};

board.on('ready', onBoardReady);
