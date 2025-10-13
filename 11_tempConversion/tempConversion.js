const convertToCelsius = function(fahrenheit) {
  let convertFormula = (fahrenheit - 32) * 5/9;
  const roundToOneDecimalPlaces = Math.round(convertFormula * 10) / 10;
  return roundToOneDecimalPlaces;
};

console.log(convertToCelsius(-100));





const convertToFahrenheit = function(celsius) {
  let toFahrenheit = (celsius * 9) / 5 + 32;
  const roundToOneDecimalPlaces = Math.round(toFahrenheit * 10) / 10;
  return roundToOneDecimalPlaces
};

console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
