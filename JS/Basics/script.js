function FizzBuzz(num){
    if (num % 3 == 0 && num % 5 == 0)
        return 'FizzBuzz';
    else if (num % 3 == 0)
        return 'Fizz';
    else if (num % 5 == 0)
        return 'Buzz';
    else
        return String(num);
}

let num = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
let list = [];
for (let i = 1; i <= num; i++)
{
    list.push(FizzBuzz(i));
}
console.log(list)
 