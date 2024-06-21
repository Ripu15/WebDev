
//function sum(number1:number, number2:number):number//this is return type of function
//type inference- typescript already knows that this function will return a number
function sum(number1:number, number2:number)//
{
    return number1+number2;
}

const value = sum(5,6);
console.log(value);
