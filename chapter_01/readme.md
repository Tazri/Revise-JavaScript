# Basic

- [Most used three technology in web](#most-used-three-technology-in-web-is)
- [Two way to used JavaScript in Web](#there-is-two-way-to-used-javascript-in-web)
- [Rules of naming variable in JavaScript](#rules-of-naming-variable-in-javascript)
- [DataType](#data-type)
- [Primitive Data Type](#primitive-data-type)
- [Non-primitive Data Type](#non-primitive-data-type)
- [typeof operator](#typeof-operator)
- [Concatenation](#concatenation)
- [Comment](#comment)
- [Operator](#operator)
- [Arithmetic Operator](#arithmetic-operator)
- [Comparison Operator](#comparison-operator)
- [Logical Operator](#logical-operator)
- [Assignment Operator](#assignment-operator)
- [Conditional Operator](#conditional-operator)
- [More About typeof Operator](#more-about-type-of-operator)
- [Conditional Statement](#conditinal-statement)
- [Switch Statement](#switch-statement)
- [Loop in JS](#loop-in-js)
- [For Statement Syntax](#for-statement-syntax)
- [Do while loop syntax](#do-while-syntax)
- [While loop Syntax](#while-syntax)
- [break and continue](#break-and-continue)
- [Array](#array)
- [object](#object)
- [Function](#function)


### Most used three technology in web is : 

- HTML (Hyper Text Markup Language)
- CSS
- JavaScript

### There is two way to used JavaScript in web : 
- Client Side : (Only browser can run)
- Server Side : (Run on Server)

### Rules of naming variable in JavaScript

- Can not allow used reversed keyword as a variable name.
- Variable name can start only letter, dollar sign($) or underscore(_).
- Can not allow space in variable name.

Here exampel : 
```js
var variableName; // here it store default value undefined.

// it can be change leter
variableName = "value";
```

### Data Type
There is a two type of data type in JavaScript. Here : 

- Primitive Data Type.
- Non-Primitive Data Type.

### Primitive Data Type 
Primitive datatype are store directly. Here is some primitive datatype : 

- Number
- String
- Boolean (`true` or `false`)
- undefined
- null

### Non Primitive Data Type
Non-primite datatype are not store directly. It save the reference where it is. Here non-primitive datatype : 

- Array
- Object
- Function

### typeof operator

> 🟢 `typeof` operator used to check data type. It return string.


Here example : 

```js
> typeof(0)
'number'
> typeof 8
'number'
> typeof 34
'number'
> typeof "Anonymo"
'string'
> typeof [3,4,5]
'object'
> typeof function anonymous(){console.log("hello world");}
'function'
> 
```

### Concatenation

> 🟢 `+` operator used to concate string with another string or number with string.

> 🟢 `+` JavaScript follow BODMAS rule. Also it operate left to right.

Here is example : 

```js
> "ans " + "anonymo"
'ans anonymo'
> 3 + "3"
'33'
> 3 + 3 + "3"
'63' 
```

### Comment
```js
// this is single line commment

/* this is multiline comment */
```

### Operator
There is a 5 type of operator in JavaScript.

- Arithmatic
- Comparison
- Logical
- Assignment
- Conditional
- Bitwise

### Arithmetic Operator

| Operator | name | example |
|----------|------|---------|
|+|Addition|10+10|
|-|Subtraction | 10-10|
| *| Multiplication | 2*2 |
| / | division | 4/2|
| % | Mudulus | 10%2|
| ++ | increment | a++ or ++a |
| -- | decrement | a-- or --a|


### Comparison Operator 

> 🟢 Comparison operator return boolean data type.

| Operator | name | example |
|----------|------|---------|
| == | equal | a == b|
| != | not equal | a != b |
| > | greater than | a > b |
| < | less than | a < b |
| >= | greater than or equal | a >= b|
| <= | less than or equal | a <= b |

> 🟢 When compare the two operand then auto type conversion convert the operand data type to equal them. In that case, use extra = for check data type too.

**Example :**
| Operator | Name | example |
| ===  | equal | a === b |
| !== | not equal | a !== b |




### Logical Operator

> 🟢 Logical Operator also return boolean type.

| Operator | Name | Example | 
|-|-|-|
| \|\| | or | a \|\| b |
| && | and | a && b |
| ! | not | !a |


### Assignment Operator

> 🟢 Assignment Operator used to assign value into variable.

| Operator | Example | Meaning |
|-|-|-|
|=| a = 10 | a = 10 |
| += | a += 10 | a = a + 10 |
| -= | a -= 10 | a = a - 10 |
| *= | a *= 10 | a = a * 10 |
| /= | a /= 10 | a = a / 10 |
| %= | a %= 10 | a = a % 10 |


### Conditional Operator

Here is the syntax of conditional operator : 

```js
condition ? expression_if_true : expression_if_false;
```

### More About Type of Operator

type of operator return value table : 

| Type | typeof return |
|-| -|
| Number | 'number' |
| String | 'string' |
| Boolean | 'boolean'|
| Object | 'object' |
| Function | 'function' |
| Undefined | 'undefined' |
| Null | 'object' |


### Conditinal Statement

Syntax of conditional statement in js : 

```js
if(condition){
    // blcok
}else if(condition){
    // block
}else{
    // default block
}

// also only used if
if(condition){

}

// also only used if and else if
if(condition){

}else if(condition){

}
```

### Switch Statement

Syntax of switch statement : 

```js
switch(value){
    case expression_1 : 
        // code block
        break;
    case expression_2 : 
        // code block
        break;
    /*...*/
    default : 
        // code block
}
```

### Loop in JS

All Loop statement in js : 

1. for statement
2. do while statement
3. while statement
4. break statement
5. continue statment

### For Statement Syntax

```js
for(initialization;condition;step){
    // block
}
```

### Do while Syntax

```js
do{

}while(condition)
```

### while syntax

```js
while(condition){
    // code block
}
```

### break and continue

> 🟢 `break` stop the loop and `continue` skip the iteration.

### Array

Syntax of declaration of array : 
```js
var arrayName = new Array(value,value,value);


// another way to declare
var arrName = [value,value,value];

// another way to declare array
var arrname = new Array(size); // here stores only undefined


// accesing array
arrname[index]; // index are start from 0

// get arr size
arrname.length; // get arr size
```

#### Some array method

```js
arrName.push(item); // add item at last and return new length

arrName.pop(); // remove the item from array at last and return the item

// remove the item at first
arrName.shift(); // return removed item

// add item at first index and return new index
arrName.unshift(value);

// using for know about item index from starting
arrName.indexOf(item); // return -1 if not found

// using for removed item from array
arrName.splice(index,how_many_item_will_removed); // return removed items as array

// index number for remoed at all item
arrName.splice(index_hereToStartRemoved);
```

### Object

```js
// declaration of object
var objectName = {
    key : value,
    key : value,
    key : value
}

// another way is 
var objectName = new Object();

// accessing object value
// using dot notation
objectName.keyName;

// using brakets notation
objectName['keyName'];
```

### Function

```js
// declare function in js
function functionName(parameters){
    // statement
    return value;
    // by defualt function return undefined
}
```

<br />
<hr />

## [< Back to README file](./../README.md)