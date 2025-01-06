const palindromes = function (str) {
  let trimmedStr = str.toLowerCase().replace(/[\W_]/g, "");
  let rev = trimmedStr.toLowerCase().split("").reverse().join("");

  if (rev === trimmedStr) {
    return true;
  }
  return false;
};

module.exports = palindromes;
