const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  // Swap min and max if necessary
  [min, max] = [Math.min(min, max), Math.max(min, max)];

  // Calculate sum using the formula for sum of arithmetic series
  return ((max - min + 1) * (min + max)) / 2;
};

module.exports = sumAll;
