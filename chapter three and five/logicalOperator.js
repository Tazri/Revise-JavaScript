//Logical Operator
// && || !

//&&
//true && true = true;
//true && false = false;
//false && true = false;
//false && false = false;

//||
//true || true = true;
//true || false = false;
//false || true = false;
//false || false = false;

//!
//!true = false;
//!false = true

var numberOne = 34;
var numberTwo = 34;
var numberThree = 3;
var numberFour = 3444;

if(numberOne < numberTwo && numberThree < numberFour){
    console.log('This Condition is true');
}else if(numberThree < numberOne || numberOne == numberThree){
    console.log('else if This Condition is true');
}

console.log(!true);
console.log(!numberOne);
console.log(!!numberOne);
