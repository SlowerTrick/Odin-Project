let repeatedString = '';

const repeatString = function(string, amount) {
    if (amount < 0)
    {
        return 'ERROR'
    }
    else if (amount === 0)
    {
        return '';
    }
    for(let i = 0; i < amount; i++)
    {
        repeatedString = string.repeat(amount);
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
