const removeFromArray = function(param, n) {
    const index = param.indexOf(n)
    if (n > -1) {
        param.splice(index, 1)
    }
    return param;
};

// Do not edit below this line
module.exports = removeFromArray;
