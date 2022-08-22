const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((acc, c) => acc+c,0 )
};

const multiply = function(arr) {
  let one = 1
  for(let i = 0; i <= arr.length; i++){
    one *= arr[i]
  }
  return one
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  let one = 1
	if(num === 0){
    return 1
  }else {
    for (let i = 1; i <= num; i++){
      one *= i
    }
    return one
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
