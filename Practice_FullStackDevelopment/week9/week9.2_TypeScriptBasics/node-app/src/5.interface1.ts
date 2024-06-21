//interface is used to give type to objects
//below type 'User' is defined

interface User {
	firstName: string;
	lastName: string;
	 email?: string;//optional
	age: number;
   
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

isLegal({
    //no error on NOT passing 'email'
    //as its an optional arg
    firstName: "Ripudaman",
    lastName: "Singh",
    age: 20
})
console.log("DONE");
