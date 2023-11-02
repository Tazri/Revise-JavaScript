# Advance 

- [`this` keyword](#this-keyword)
- [Object in JavaScript](#object-in-javascript)
- [Wrapper](#wrapper)
- [Inheritance using function constructor](#inheritance-using-function-constructor)
- [Object.preventExtensions](#objectpreventextensions)
- [`user strict`](#user-strict)

## this Keyword

> 🟢 `this` keyword is a reserved keyword in JavaScript. This value determine in execution. 

There is a 4 rule, to determine this keyword. Here : 

<details>
<summary>Global Rules</summary>

> 🟢 In non-strict mode and out of other 3 rules, everywhere in the program where use this keyword, always refer global object. If it is browser then it refer `windows`, if it is nodejs then it refer `global` object. In the strict mode it refer "undefined".

</details>

<details>
<summary>Object Rule</summary>

> 🟢 If `this` keyword used inside the function which is inside the object then `this` keyword refer the nearest parent object.

Here is example : 
```js
var person = {
    name : "ans anonymo",
    msg : function(){
        console.log("Hello, I am ",this.name+".");
    },
    printThis : function(){
        console.log(this);
    }
}

person.msg(); // Hello, I am  ans anonymo.


person.printThis();
/*
outptu : 
{
  name: 'ans anonymo',
  msg: [Function: msg],
  printThis: [Function: printThis]
}
*/
```

</details>

<details>
<summary>Explicit Rule</summary>

> 🟢 Change the `this` value using `call`, `apply` and `bind` method called explicit way to determine the `this` value.

### call method
```js
functionName.call(objectWichItReferTo,...functionArguments); // call immediately
```

### apply
```js
functionName.apply(objectWichItReferTo,[...functionArguments]); // call immediately
```

### bind
```js
functionName.bind(objectWichItReferTo,...functionArguments); // return another function
```

</details>

<details>
<summary>`new` keyword Rule or Function Constructor</summary>

> 🟢 When call the function with `new` keyword, then `this` keyword will refer the function name. In that case think function name as a object will be ok.

Example here : 
```js
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
```
</details>

## Object in JavaScript

Here is all Non Primitive Object : 

- Array
- Function
- Object
- Date
- Number
- String
- Boolean
- Wrapper

## Wrapper

> 🟢 Wrapper function make the primitive type to object type. When try to used method on primitive data type, behind the scene JavaScript force primitive type to object using Wrapper function without chaning original value.


## Inheritance using function constructor

It posible to create inheritance in js using `call` method. Here is example : 

```js
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
```

## Object.preventExtensions

> 🟢 `Object.preventExtensions` method make the object not extensible. In `user strict` mode, if try to add property in object then it throw error.

```js
var person = {
    name : "ans anonymo",
    age : 22
};

Object.preventExtensions(person);

person.height = 33;

console.log(person); // { name: 'ans anonymo', age: 22 }
```

## user strict

> 🟢 write `"user strict"` start of the file or start of the function then JavaScript work like strict mode otherwise it work like slopy mode or non-strict mode. In strict mode, JavaScript work differently. Example, can not declare variable without let, const and var keyword. It will through error.

> 🟢 There is two type of strict mode, global strict mode if it write start of the file, and function strict mode if it write start of function.



<br />
<hr />

## [< Back to README file](./../README.md)