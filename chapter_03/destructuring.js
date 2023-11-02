let [a,,b] = [3,4,5,4];

console.log(a+b);

let obj = {
    numOne : 4,
    numTwo : 100
};

const {
    numOne,
    numTwo = 4
} = obj;

console.log(numOne + numTwo);