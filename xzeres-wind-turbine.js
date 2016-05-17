'use strict';

// get request module
const request = require('request');

const formData = {
  object: 'Turbine',
  depth: '1',
  context: 'PRIMARY'
};

// gets json from the turbine at the given url
const getTurbineData = function (baseUrl, callback) {
  console.log('getting json from', baseUrl);

  // returns a key from the first item of the given array and falls back to the default value
  const getValueFromArrayIfKeyExists = function (arr, key, defaultValue) {
    return Array.isArray(arr) && arr.length ? arr.shift()[key] : defaultValue;
  };

  // see https://www.npmjs.com/package/request
  request.post({ url: baseUrl + '/export.pl', form: formData }, function (err, res, data) {
    if (err) {
      return callback(err, null);
    }

    // response status code isn't ok
    if (res.statusCode !== 200) {
      return callback(new Error(`${res.statusCode} returned.`), null);
    }

    // it's not a json document
    if (res.headers['content-type'].indexOf('json') === -1) {
      return callback(new Error('no json document provided,'), null);
    }

    // parse response to json
    const json = JSON.parse(data);

    // exctracting values json from response and falling back to the defaults
    const hours = json.TURBINE_HOURS || -1;
    const rpm = json.TURBINE_RPM || -1;
    const totalExpEnergy = json.TOTAL_EXP_ENERGY || -1;
    const inverterPower = json.INVERTER_POWER || -1;
    const turbineState = json.TURBINE_STATE.replace(/(<([^>]+)>)/ig, '').toUpperCase() || 'OFFLINE';

    const windSpeed = getValueFromArrayIfKeyExists(json.anemometers, 'WIND_SPEED', -1);
    const windDirection = getValueFromArrayIfKeyExists(json.windvanes, 'WIND_DIRECTION', -1);
    const uptime = json.controller ? json.controller.CONTROLLER_HOURS : -1;

    // calls the callback without an error and the dataset
    return callback(null, {
      hours,
      rpm,
      totalExpEnergy,
      inverterPower,
      turbineState,
      windSpeed,
      windDirection,
      uptime
    });
  });
};

module.exports = {
  getData: getTurbineData
};
