const sumAll = function (param1, param2) {
  let sum = 0;
  if (param1 < param2 && param1 && param2) {
    for (let i = param1; i <= param2; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
