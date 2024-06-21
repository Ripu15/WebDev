//interfaces can be implemented as classes
//and 'types' can not be
interface Person {
    name: string;
    age: number;
    //function 'greet' with arg as string and return
    //type as void
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("Ripudaman", 25);
console.log(e.name);