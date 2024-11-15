const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(array) {
    if (array.length == 0)
        return 0;
	return array.reduce((acc, curr) => acc + curr);
};

const multiply = function(array) {
    return array.reduce((acc, curr) => acc * curr);
};

const power = function(num1, num2) {
    return num1 ** num2;
};

const factorial = function(num) {
	let total = 1;
    while(num > 0)
    {
        total *= num;
        num--;
    }
    return total;
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
