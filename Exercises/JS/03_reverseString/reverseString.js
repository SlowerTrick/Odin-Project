/* const reverseString = function(string) {
    let result = '';
    len = string.length;
    for(let i = len - 1; i >= 0; i--)
    {
        result += string[i]
    }
    return result;
}; */

const reverseString = function (string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
