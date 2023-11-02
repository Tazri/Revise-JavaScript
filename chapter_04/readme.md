# Everyday JavaScript

- [map,filter and reduce method](#mapfilter-and-reduce-method)
- [some and every method](#some-and-every-method)
- [Loop on Object](#loop-on-object)
- [keys and values method](#keys-and-values)
- [Math Object](#math)
- [Falsy Value](#falsy-value)
- [Shorthand of `&&` and `||`](#shorthand-of--and)
- [Regular Expression](#regular-expression)
- [Error Handling](#error-handling)
- [Error Object](#error-object)
- [Developer Console](#developer-console)
- [Promise](#promise)
- [Promise.all Method](#promiseall-method)
- [async await](#async-await)


## map,filter and reduce method

### map function
**Syntax :**
```js
// this method return new array
arrName.map(function(arrItem,itemIndex,arrName){
    // statement
    return value; // this value will added with new returned array
},thisObject)
```

### filter
```js
// this method return new array
arrName.filter(function(arrItem,itemIndex,arrName){
    // statement
    return booleanValue; 
    // return false if don't allow the item to new array.
    // return true if allow the item to new array.
})
```

### reduce
```js
// this method return a reduced value
let reducedValue = arrName.reduce(function(prevState,arrItem,itemIndex,arr){
    // statement
    return updateState;
    // return update state. 
},initialState);

// reducedValue is a final updatedState
```

## some and every method

### some
```js
// return boolean value
// return false if none of item matched the pattern
// return true if any item matched the pattern
arrName.some(function(arrItem,itemIndex,arrName){
    return booleanValue;
    // return true if match the pattern with arrItem
    // return false if dose't match the pattern with arrItem
},thisObject);
```

### every
```js
// return boolean value
// return false if any item dose't matched the pattern
// return true if every item matched the pattern
arrName.every(function(arrItem,itemIndex,arrName){
    return booleanValue;
    // return true if match the pattern with arrItem
    // return false if dose't match the pattern with arrItem
}, thisObejct);
```

## Loop on Object

```js
for(value of objectName){
    // here value is key value of objectName
}
```

## keys and values

```js
Object.keys(objectName); // return array of object keys of objectName.
Object.values(objectName); // return array of object values of objectName.
```

## Math

**All necessary math properties :**

| Property | Description  |
|----------|--------------|
| Math.E   | For Euler constant, value 2.718(almost)|
| Math.LN2 | natural logarithm value of 2, value 0.693(almost)|
| Math.LN10| natural logaritm value of 10, value 2.303(almost) |
| Math.LOG2E| value of E base 2 logarithm, value 1.443(almost)|
| Math.PI | value of pi, value is 3.14159 (almost) |
| Math.SQRT1_2 | value of sqrt of 1/2 , value is 0.707(almost)|
| Math.SQRT2| value of sqrt of 2, value is 1.414(almost)|


**Necessary math method :**

| Method          | Description                                            |
|-----------------|--------------------------------------------------------|
| Math.abs(x)     | return absolute number of x |
| Math.ceil(x)    | return ceiling number |
| Math.floor(x)   | return floored number |
| Math.max(a,b,..)| return biggest argument |
| Math.min(...)   | return smallest argument|
| Math.pow(x,y)   | return x to the power of y |
| Math.random()   | return random number between 0 and 1 |
| Math.round(x)   | return rounded number |
| Math.sign(x)    | return 1 if number is positive, return 0 if number is 0 otherwise return -1 |

## Falsy Value
**Here all falsy value :**

- false
- null
- NaN
- 0
- "", '', ``
- undefined

## Shorthand of `&&` and `||`

```js
expression_or_condition || expression_or_condition;

expressionOrCondition && expressionOrCondition;
```

## Regular Expression

### Creating regular expression
```js
// using regular expression literal
/expression/modifier

// example
const regex = /ab+c/i

// create regular expression using RegExp constructor
const regexCons = new RegExp("ab+c",i);
```

### use case of regular expression

```js
// string replace method get regular expression to replace the sub string
const newText = aText.replace(regexToMatch,"replacedWord");

// string match method get regular expression
// if matched then return array otherwise return null
let s = "hello";
s.match(/h/);
// [ 'h', index: 0, input: 'hello', groups: undefined ]


// test method of regular expression return true if
// pattern match with string otherwise return false
let st = "hello"
/l+/.test(st); // true

// search string method can get regex
// it return index number where it found
// otherwise return - 1
let str = "hello"
str.search(/lo/); // 3

// split string method also split the 
let str = "abcdbddb"
str.split(/b/); // [ 'a', 'cd', 'dd', '' ]
```

## Error Handling

**Syntax of try catch :**
```js
try{

}catch(error){

}
finally{
    // finally is not required block
    // it run anyway.
}
```

**throw syntax :**
```js
// throw keyword use for throw error
throw "error message";
```

## Error Object

> 🟢 JavaScript has a `Error` object. We can create create error object using `Error` Constructor and throw it.

**Example :**
```js
throw new Error("Error message");
```

## Developer console

```js
// console.assert() print warning message if expression is
// false otherwise not.
console.assert(expression,"message");

// console.clear() just clear the console.
console.clear();

// console.count() return how many time it called
console.count(thingWichIsCountingBe);

// console.dir() represent the object in details
console.dir(anyObject);

// console.error() just print the error
console.error("> Error Message");

// console.group() and console.groupEnd() just grouping the console.
console.group("> Write somthing for group.");
/**some console */
console.groupEnd(); // close the group

// console.info() just print info type message
console.info("> Information message.");
```

**Here some console technic which is not support in nodejs :**
```js
console.log("%c anytext after \%c.","css style which will apply on text");

// example
console.log("%cAns Anonymo","font-size : 50px;background-color:black;color:white;");

// show arr or object in table
console.table(objectOrArray);

// start time with .time method and end with .timeEnd();
console.time(); // start the timer
/** some statement */
console.timeEnd(); // end the time

// console.warn() just print the warning message
console.warn("> This is warning message.");

// $_ just return what last expression return. Also work only chrome console.

```


## Promise

**Syntax of create promise :**
```js
let promiseObject = new Promise((resolve,reject)=>{
    // called resolve if solve the problem
    resolve(data);

    // called reject if throw a error
    reject(new Error("error message"));
})

// handle promise
promiseObject.
then((data)=>{
    // do anything with data
})
.catch((err)=>{
    // do anything with error
})
```

## Promise.all method

```js
Promise.all(arrayOfPromiseObject)
.then((arrayOfPromisesData)=>{

})
.catch((error)=>{
    // if any error occur
})
```

## async await

> 🟢 `async` keyword used for handle the asynchronous function in synchronous way.

**Example :**
```js
async function functionName(){
    let variableNam = await asynchronousTask();
}
```



<br />
<hr />

## [< Back to README file](./../README.md)