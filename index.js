const five = require('johnny-five');
const board = new five.Board();

// function to call after a connection to the board is established
const onBoardReady = function () {
  const led = new five.Led(13); // LED on pin 13

  led.blink(500); // blinks every 500ms
};

// attach our onBoardReady function to the boards "ready" event
board.on('ready', onBoardReady);
