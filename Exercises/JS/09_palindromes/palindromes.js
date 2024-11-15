const palindromes = function (string) {
    let array = [];
    for(let i = 0; i < string.length; i++)
    {
        if (isCharacterALetter(string[i]))
            array.push(string[i])
    }
    invertedArray = array.slice().reverse()
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].toUpperCase() != invertedArray[i].toUpperCase())
        {
            return false;
        }
    }
    return true;
};

function isCharacterALetter(char) {
    return (/[a-zA-Z0-9]/).test(char)
}

palindromes('Racecar!')

// Do not edit below this line
module.exports = palindromes;
