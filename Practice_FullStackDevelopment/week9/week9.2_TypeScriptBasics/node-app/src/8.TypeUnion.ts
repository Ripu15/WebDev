//TS brings type-script to the code, it will throw 
//error
//types can not be used to implement classes
type Usertype = {
	firstName: string;
	lastName: string;
	age: number
}
//unions, a variable can be more than one type but ORed
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202