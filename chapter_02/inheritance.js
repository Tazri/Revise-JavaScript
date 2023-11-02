function Person(name,age){
    this.name = name;
    this.age = age;
}

function Teacher(name,age,salary){
    Person.call(this,name,age);
    this.salary = salary;

    this.printTeacher = function(){
        console.log(`${name}(age : ${this.age})(salary : ${this.salary}$).`)
    }
}


var teacher = new Teacher("anonymo",22,25000);

teacher.printTeacher(); // anonymo(age : 22)(salary : 25000$).