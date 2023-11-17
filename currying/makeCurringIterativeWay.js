/**
 * 
 * @param {Function} fn 
 * @returns Function
 */

function curry(fn){
    let prevousArugments = [];
    
    function curried(...arguments){
        prevousArugments.push(...arguments);

        
        if(prevousArugments.length == fn.length){
            let arr = [...prevousArugments]; // copy previous arguments

            prevousArugments = []; // clear the previous arugments

            return fn(...arr);
        }

        // return the same function
        return curried;
    }

    return curried;
}

let add = (a,b,c) => a+b+c;

let curriedAdd = curry(add);

console.log(`> curriedAdd(4,5,6) : ${curriedAdd(4,5,6)}`);
console.log(`> curriedAdd(4)(5,6) : ${curriedAdd(4)(5,6)}`);
console.log(`> curriedAdd(4)(5)(6) : ${curriedAdd(4)(5)(6)}`);