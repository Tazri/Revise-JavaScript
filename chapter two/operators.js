//Arithmetic Operator
//+ - / * % ++ -- **

console.log(34/2);
console.log(34/5);
console.log(3.34/3);
console.log(3/4.5);
console.log(1/0);
console.log(0*0);


console.log(3%2);
console.log(10%5);
console.log(14%3);


//Increamental Operator
//++
//Pre Incremental Operator and Post Decremental Operator

var a = 10 ;
console.log(a++);//10 a = a + 1
console.log(a);//11
var b = 20;
console.log(++b);//21
console.log(b);

var number = 1;
++number;
number++;
console.log(number);//3

//** power Arithmetic Operator
console.log(2*3);
console.log(3*3);

//Pre Decremental Operator and Post Decremental Operator
--number;
number--;
console.log(number);//1


//Assignment Operator
//=
//+=
//-=
///=
//%=
//*=
//**=

var a =20;
a += 3; // a = a + 3 
console.log(a);//23
a -= 3; // a = a - 3
console.log(a);//20
a /= 2; // a = a / 2 
console.log(a);//10
a %= 3;// a = a % 3
console.log(a);//1
a *= 20;//a = a * 20
console.log(a);//20
a **= 2;// a = a**2
console.log(a);//400


//Compersion Operators
//==
//!=
//>
//<
//>=
//<=
//===
//!==
//>==
//<==

var numberOne = 20;
var numberTwo = 30;
var numberThree = 20;

console.log(numberOne == numberThree);//True
console.log(numberOne == numberTwo);//false

console.log(numberOne != numberTwo);//true
console.log(numberOne != numberThree);//false

console.log(numberOne > numberTwo);//false
console.log(numberOne < numberTwo);//true

console.log(numberOne>=numberThree);
console.log(numberOne>=numberTwo);

var strNumber = '20'

console.log(strNumber == numberOne);//true
console.log(strNumber != numberOne);//false

console.log(numberOne === strNumber);//false
console.log(numberOne !== strNumber);//true

//Logical Operator
// && 
// ||
// !

//Bitwise Operator
//&
//|
//~
//^
//>>
//<<

//Typeof Operator
//typeof

console.log(typeof 'String');
console.log(typeof true);
console.log(typeof false);
console.log(typeof 34);
console.log(typeof null);
console.log(typeof Infinity);
console.log(typeof undefined);
console.log(typeof -0);
console.log(typeof NaN);
