'use strict'; // use javascript strict mode

//const five = require('johnny-five');
//const board = new five.Board();
const xzeresWindTurbine = require('./xzeres-wind-turbine');

// --- CONFIG ---
const TURBINE_URLS = [
  'http://81.153.53.164',
  'http://74.43.48.185',
  'http://206.212.238.180'
];

// function to call after a connection to the board is established
/*const onBoardReady = function () {

};

// kick things off!
board.on('ready', onBoardReady);*/
TURBINE_URLS.forEach(function (url) {
  xzeresWindTurbine.getData(url, function (err, data) {
    if (err) { // error handling
      console.log(err);
      return;
    }

    console.log('got data from', url, data);
    // data!!!!
  })
});
