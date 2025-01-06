const reverseString = function (param) {
  let paramToArr = param;
  const ans = paramToArr.split("").reverse().join("");
  return ans;
};
reverseString("hey");
// Do not edit below this line
module.exports = reverseString;
