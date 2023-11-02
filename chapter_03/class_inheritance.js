// create class with class expression
const Person = class{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printPerson(){
        console.log(`> ${this.name}(${this.age})`);
    }
}

// inheritance here
class Student extends Person{
    constructor(name,age,classNo){
        // call parent constructor
        super(name,age);
        this.classNo = classNo;
    }

    printPerson(){
        console.log(`> ${this.name}(${this.age}) -> class : ${this.classNo}`);
    }
}

let me = new Student("ans anoymo",34,4);
me.printPerson(); // > ans anoymo(34) -> class : 4