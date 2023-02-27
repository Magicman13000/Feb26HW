var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1/weather', function (req, res, next) {
  let weather = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0,
  };
  res.send(weather);
});

module.exports = router;
