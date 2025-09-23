function sumRange(num)
{
    if(num == 0)
        return 0;
    return num + sumRange(num - 1);
}

function powerFunc(base, power)
{
    if(power == 0)
        return 1;
    return base * powerFunc(base, power - 1);
}

function factorial(num)
{
    if(num == 0 || num == 1)
        return 1;
    return num * factorial(num - 1);
}

console.log(sumRange(4));
console.log(powerFunc(2, 4));
console.log(factorial(10));
