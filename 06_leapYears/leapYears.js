const leapYears = function (param) {
  if (typeof param === "number") {
    if (param % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else return false;
};
leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
