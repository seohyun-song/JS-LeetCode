/**
 * 2469. Convert the Temperature
 * You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

    You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

    Return the array ans. Answers within 10-5 of the actual answer will be accepted.
 * Note that:

    ● Kelvin = Celsius + 273.15
    ● Fahrenheit = Celsius * 1.80 + 32.00

 * numObj.toFixed([digit]) : 고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼값. ex) (32.50).toFixed(3) // 32.500
 */
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  let kelvin = (celsius + 273.15).toFixed(5);
  let fahrenheit = (celsius * 1.8 + 32.0).toFixed(5);
  return [kelvin, fahrenheit];
};
