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