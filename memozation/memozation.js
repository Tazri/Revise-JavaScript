function memo(fn){
    const memory = {};

    return function(...args){
        let key = JSON.stringify(args);

        if(memory.hasOwnProperty(key)){
            return memory[key];
        }

        let result = fn(...args);
        memory[key] = result;
        return result;
    }
}


// testing
function add(a,b){
    console.log("called");
    return a+b;
}

let memoAdd = memo(add);

console.log(memoAdd(3,4));
console.log(memoAdd(3,4));
console.log(memoAdd(3,4));
console.log(memoAdd(3,5));
console.log(memoAdd(3,4));
