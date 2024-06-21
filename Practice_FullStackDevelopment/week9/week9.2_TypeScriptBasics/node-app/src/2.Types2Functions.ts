//How to give type to a function
//if type not specified it has 'any' type, so 
//its an error
function greet(firstName: string, lastname: string) {
    console.log("Hello " + firstName + " " + lastname + "!!!");
}

greet("ripudaman","singh");
greet("15","35");
greet('15','35');
//greet(15,35);