let obj = {
    a :  10
}

let arr = [3,4,5,6,7];

let newArr = arr.map(function(num){
    return this.a - num
},obj);

console.log(newArr); // [ 7, 6, 5, 4, 3 ]