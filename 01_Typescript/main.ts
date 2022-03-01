const className: string = 'Fresher Academy';
const age: number = 20;
// const isFresher: boolean = 'true';

enum EnumName {
    Value1, Value2, Value3
}

var enumVal: EnumName;


function add(a: number, b: number): number {
    return a + b;
}

class Person {
    private name: string
    
    constructor(name: string) {
        this.name = name;
    }

    greet = () => {
        console.log('Hello ' + this.name );
    }
}


const instance: Person = new Person('Name')
instance.greet()

class Stack<T> {
    private data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.pop();
    }
}

let stringStack = new Stack<string>();
stringStack.push('1');
stringStack.push('10');
stringStack.push('20');
console.log(stringStack.pop());
console.log(stringStack.pop());
console.log(stringStack.pop());
console.log(stringStack.pop());

let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop());
console.log(numberStack.pop());
console.log(numberStack.pop());
console.log(numberStack.pop());

let user = {
    name: 'Anh',
    age: 23,
    adddress: {
        street: 'Duy Tan'
    }
};

function checkUser(user: any) {
    user.adddress = undefined;
    return user;
}

user = checkUser(user);
console.log('street', user.adddress?.street);