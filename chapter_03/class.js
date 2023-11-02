// make class
class Person{
    // static variable
    static totalPerson = 0;

    // static function
    static printTotalPerson(){
        console.log(`> Total Person is : ${this.totalPerson}`);
    }

    // constructor
    constructor(name = "anonymo",age = 2){
        this.name = name;
        this.age = age;
        Person.totalPerson++;;
    }

    printPerson(){
        console.log(`> ${this.name}(${this.age})`);
    }

    
}

// create object
let me = new Person();

me.printPerson(); // > anonymo(2)

console.log(me); // Person { name: 'anonymo', age: 2 }

Person.printTotalPerson(); // > Total Person is : 1