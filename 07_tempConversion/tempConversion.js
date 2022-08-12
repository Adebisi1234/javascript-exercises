const ftoc = function(num) {
// subtract 32 and multiply by . 5556
  num = (num-32)*0.5556
  return parseFloat(num.toFixed(1))
};

const ctof = function(num) {
// multiply by 1.8 (or 9/5) and add 32.
  num = (num*1.8)+32
  return parseFloat(num.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
