/*
    Interfaces: Interfaces in typescript are used to define the structure of an object.

    - in an object oriented programming language, interfaces are used to define the structure of a class and the methods that a class should implement.

    the methods inside the interface are abstract methods, which means that they do not have a body and they must be implemented by the class that implements the interface.

    this provides data abstraction. data abstraction is the process of hiding the implementation details and showing only the functionality to the user.
*/

interface IStudent {
    name: string;
    age: number;
    place: string;

    getAge(): void;
}


class Student implements IStudent {
    
    // declare the variables
    name: string;
    age: number;
    place: string;
    designation: string;

    constructor() {
        this.name = '';
        this.age = 0;
        this.place = '';
        this.designation = '';
    }

    getAge(): void {
        console.log('Age:', this.age);
    }

    getPlace(): void {
        console.log('Place:', this.place);
    }

    getName(): void {
        console.log('Name:', this.name);
    }
}

const s1 = new Student();

s1.name = 'Sathish';
s1.age = 25;
s1.place = 'Chennai';

s1.getAge();