let arr = [2,2];

console.log(
    arr.some(function(item,index,arr){
        return item & 1;
    })
)