const sumAll = function(start, end) {
    let total = 0;
    if(typeof(start) != "number" || typeof(end) != "number" || start < 0 || end < 0)
        return 'ERROR';
    else if (!Number.isInteger(start) || !Number.isInteger(end))
        return 'ERROR';

    if (start > end)
    {
        tmp = start;
        start = end;
        end = tmp;
    }
    for (let i = start; i <= end; i++)
    {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
