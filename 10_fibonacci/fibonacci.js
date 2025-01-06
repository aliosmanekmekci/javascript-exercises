const fibonacci = function (num) {
  let num1 = 0;
  let num2 = 1;
  if (num === num1) {
    return num1;
  } else if (num === num2) {
    return num2;
  } else {
    for (let i = 3; i <= num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
};

// Do not edit below this line
console.log(fibonacci(10));
module.exports = fibonacci;
