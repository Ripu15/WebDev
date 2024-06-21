//function that needs to return the first element of an array.
// Array can be of type either string or integer
//REASON for GENERICS
//[] means arr is an array
function getFirstElementSimple(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElementSimple([1, 2, 3]);
console.log(el);

const el1 = getFirstElementSimple(["harkiratSingh", "ramanSingh"]);
//Issue with above code
//Typescript isn’t able to infer the right type of the return type
//console.log(el1.toLowerCase())

//GENERICS
//argument is of generics type
function identity<T>(arg: T): T {
    return arg;
}

//type is mentioned during function call
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1.toUpperCase());


function getFirstElement<T>(arr: T[]){
    return arr[0];
}
//if type not mentioned during call
//it can accept mix bag
const e1 = getFirstElement<string>(['harkiratSingh','ramSingh']);
const e2 = getFirstElement<Number>([1,2]);
console.log(e1.toLocaleUpperCase());
console.log(e2.toString());