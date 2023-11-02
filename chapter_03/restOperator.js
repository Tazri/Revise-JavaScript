function sum(...numbers){
    console.log(numbers);
    return numbers.reduce((prevNum,num)=>prevNum+num,0);
}

console.log(sum(4,5,6,7,8));
/*
[ 4, 5, 6, 7, 8 ]
30
*/