'use strict'; // use javascript strict mode

const five = require('johnny-five');
const board = new five.Board();

// convert degree to randians
// @see http://stackoverflow.com/a/9705160/520544
const toRadians = function (angle) {
  return angle * (Math.PI / 180);
};

// function to call after a connection to the board is established
const onBoardReady = function () {
    // use the Adafruit Motor Shield V2 config
    const configs = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V2;
    const motor1 = new five.Motor(configs.M1);

    // set up a counter and start with 0
    let counter = 0;

    setInterval(function () {
      counter++; // increment counter

      // sin wave from 255 to -255
      let speed = Math.sin(toRadians(counter % 360)) * 255;

      console.log(speed);

      // if speed is greater than 0 -> move forward
      if (speed >= 0) {
        motor1.forward(speed);
      }
      // if speed is less than 0 -> move backwards
      else {
        motor1.reverse(Math.abs(speed)); // use the absolute (positive) value
      }
    }, 100); // sets the interval to 100ms
};

// attach our onBoardReady function to the boards "ready" event
board.on('ready', onBoardReady);
