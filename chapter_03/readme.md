# ES6 Feature

- [`let` and `const`](#let-and-const)
- [Template Literal](#template-literal)
- [Some String Method](#some-string-method)
- [Arrow Function Syntax](#arrow-function-syntax)
- [Some Array Method](#some-array-method)
- [Spread Operator](#spread-operator)
- [Rest Operator](#rest-operator)
- [Syntax of Default Parameter](#syntax-of-default-parameter)
- [Map Data Structure](#map-data-structure)
- [class](#class)
- [Inheritance with Class Keyword](#inheritance-with-class-keywoard)

## `let` and `const`

> 🟢 `let` use for declare new variable and prevent  declare a variable again. It work on block scope.

> 🟢 `const` keyword use like `let`, but different is that, when declare variable using const, must be initilized otherwise it throgh error and it can not allow to change value in the future.


## Template Literal

> 🟢 Template literal start with (\`) and end with (\`). If any expression evulate and print with string the use this `${here_expression}`.

**Syntax of template leteral :**
```js
`this is string ${expression}`
```

## Some String Method

**startsWith :**
```js
str.startWith(character_or_string);
// return true if the string start with given sub string or 
// character otherwise return false.
```

**endsWith :**
```js
str.endsWith(character_or_subString)
// return true if the string end with given character or sub string
// otherwise return false.
```

**includes :**
```js
str.includes(characterOrSubString);
// return true if character or subString includes string
// otherwise return false
```

**repeat :**
```js
str.repeat(t);
// return string which is concate str, t times.
```

## Arrow Function Syntax

```js
let functionName = (parameter)=>{
    // statement;
}

let functionName = parameterIfOne => expressionWichIsReturn;
```

> 🟢 Arrow function dose not change the `this` value.

## Some Array Method

**Array.from :**
```js
Array.from(somethingList);
// it convert to something to array and return it.
```

**findIndex :**
```js
arr.findIndex(i=> condition);
// return index number if find otherwise return false.
```

## Spread Operator

> 🟢 Spread Operator (...) make the array into spreading.

**Here is example :**
```js
let arr = [3,4,5];
let arrTwo = [...arr];

function sum(numOne,numTwo,numThree){
    return numOne+numTwo+numThree;
}

console.log(sum(...arr));
console.log(arrTwo); // [ 3, 4, 5 ]

/*
...arr = 3,4,5
*/
```

## Rest Operator

> 🟢 Rest operator, take the all rest of arguments as array.

Here is example : 
```js
function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((prevNum,num)=>prevNum+num,0);
}

console.log(sum(4,5,6,7,8));
/*
[ 4, 5, 6, 7, 8 ]
30
*/
```

## Syntax of default parameter

```js
function functionName(parameter = defaultValue){
    // statements
}
```

## Map Data Structure

```js
// creating map
let storage = new Map();

// insert value in the map
storage.set("bottle",4);
storage.set("scarf metal",35);
storage.set("pine log",54);
storage.set("roof",33);

// check is key exist inside the map
console.log(storage.has("plank")); // false

// delete from map
storage.delete("roof");

console.log(storage); 
// Map(3) { 'bottle' => 4, 'scarf metal' => 35, 'pine log' => 54 }

// size of the map
console.log(storage.size); // 3

// using loop on map
for(let [key,value] of storage.entries()){
    console.log(`${key} : ${value}`);
}
/**
bottle : 4
scarf metal : 35
pine log : 54
*/


// clear the map
storage.clear();
console.log(storage); // Map(0) {}
```

## class

**Syntax of Class :**
```js
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
```

## Inheritance with class keywoard

```js
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
```


<br />
<hr />

## [< Back to README file](./../README.md)