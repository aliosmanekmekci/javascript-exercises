const repeatString = function (param, n) {
  if (n < 0) {
    return "ERROR";
  } else if (param || param === "") {
    return param.repeat(n);
  }
};

// Do not edit below this line
module.exports = repeatString;
