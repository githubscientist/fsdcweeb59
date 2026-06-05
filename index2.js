// ES6 -> classes and constructors
// class
class Student {
    // a special method
    // that gets called
    constructor() {
        this.name = '';
        this.age = 0;
        this.place = '';
    }

    getAge() {
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

// console.log(s1);
// console.log(s2);

s2.getAge();