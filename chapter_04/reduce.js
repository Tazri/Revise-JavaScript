let arr = [2,3];

let b = arr.reduce(function(prevState,item,index,arr){
    console.log(`> prevState : ${prevState}`);
    console.log(`> item : ${item}`);
    console.log(`> index : ${index}`);
    console.log(`> arr : ${arr}`);
    console.log(`> this :`);

    console.log("----------x-----------")

    // update state
    return prevState + item;
},0);

console.log(`> b : ${b}`);