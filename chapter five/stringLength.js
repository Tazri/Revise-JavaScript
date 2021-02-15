var stringOne = 'This is Simple String';
var name = 'Md Tazri';
function strLength(string){
    var length = 0; 
    var i = 0;
    while(string[i]){
        length++
        i++
    }
    return length;
}

console.log(strLength(stringOne));
console.log(strLength(name));

console.log(stringOne.length);
console.log(name.length);