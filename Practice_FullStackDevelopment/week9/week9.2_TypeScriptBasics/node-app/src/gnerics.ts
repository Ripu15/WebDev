//T can be any type 
//can be put at func call time

function identity<T>(arg: T): T {
    return arg;
}

let output1 = console.log(identity<string>("myString"));
let output2 = console.log(identity<number>(100));

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el1 = getFirstElement(["harkiratSingh", "ramanSingh"]);
const el2 = getFirstElement(["1", "ramanSingh"]);
console.log(el1.toLowerCase())
console.log(el2.toLowerCase())