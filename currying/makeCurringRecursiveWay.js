function makeCurried(fn){

    return function curried(...left){
        if(left.length == fn.length){
            return fn(...left);
        }

        return function(...right){
            return curried(...left,...right);
        };
    }
}

let add = (a,b,c) => a+b+c;

let curriedAdd = makeCurried(add);

console.log(`> curriedAdd(4,5,6) : ${curriedAdd(4,5,6)}`);
console.log(`> curriedAdd(4)(5,6) : ${curriedAdd(4)(5,6)}`);
console.log(`> curriedAdd(4)(5)(6) : ${curriedAdd(4)(5)(6)}`);