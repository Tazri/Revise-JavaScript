/**
 * 
 * @param {Function} fn 
 * @returns Function
 * 
 */
function memo(fn){
    const mem = [];

    return function(...args){
        let key = JSON.stringify(args);

        if(mem.hasOwnProperty(key)){
            return mem[key];
        }

        let result = fn(...args);
        mem[key] = result;
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
