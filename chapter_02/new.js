function Person(name,age){
    this.name = name;
    this.age = age;

    this.printThis = function(){
        console.log(this);
    }
    this.printPerson = function(){
        console.log(`${this.name}(${this.age})`);
    }
}

// inside the prototype which function are not copied
Person.prototype.printHello = function(){
    console.log("Hello, World!");
}

// create object
var me = new Person("Ans Anonymo",33); // now this keyword reper 'me' object

// call method
me.printPerson();

// here inside the proto here printHello exist
console.log(me.__proto__);

console.log(me.__proto__ == Person.prototype); // true