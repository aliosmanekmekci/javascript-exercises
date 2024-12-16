const convertToCelsius = function (param) {
  return ((param - 32) * 5) / 9;
};

const convertToFahrenheit = function (param) {
  return (param * 9) / 5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
