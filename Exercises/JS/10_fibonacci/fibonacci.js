const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0)
        return 'OOPS';
    if(num === 0 || num === 1)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
