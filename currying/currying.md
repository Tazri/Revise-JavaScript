Curring
========

> 🟢 Currying in JavaScript is transforms a function with multiple arguments into a nested series of funcitons, each taking a single arguments.

**For Example :**
```js
/**
 * sum function which take a three numbers
 * and return sume of them.
 * */

sum(1,2,3); // 6 

// if sum function is curried function
sum(1)(2)(3); // 6

// in details
let sum1 = sum(1);
let sum2 = sum1(2)
let sum3  = sum2(3);
console.log(sum3); // 6

// here is sum function with currying pattern difination
function sum(a){
    return funciton(b){
        return function(c){
            return a+b+c;
        }
    }
}
```

Function which make a function to curried function 
==================================================

**Recursive defination :**
```js
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
```



**Iterative but using clouser concept :**
```js
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
```

> 🟢 `funcitonName.length` always return total parameter numbers.

<br />
<hr />

## [< Read Me](./../README.md)