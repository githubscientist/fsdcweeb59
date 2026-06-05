class Student {
    
    // declare the variables
    name: string;
    age: number;
    place: string;

    constructor() {
        this.name = '';
        this.age = 0;
        this.place = '';
    }

    getAge(): void {
        console.log('Age:', this.age);
    }
}

// create an object to the class
let s1 = new Student();

s1.name = 'krish';
s1.age = 25;
s1.place = 'chennai';

let s2 = new Student();

s2.name = 'sathish';
s2.age = 30;
s2.place = 'coimbatore';

s2.getAge();