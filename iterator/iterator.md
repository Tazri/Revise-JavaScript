Iterator
========

> 🟢 If a object has `[Symbol.iterator]` method then this object can be iteratable object.


```js
// how to get iterator from a iteratable object
let iterator = iteratableObject[Symbol.iterator]();

// access iterator next value
iterator.next();
```


## How to declear cutom iterator

**Rule of a object can be iterator :**
- This object must be has `[Symbol.iterator]` function.
- `[Symbol.iterator]` function must be return a object which has `next()` method.
- `next()` method return object, pattern like : `{value : 'value', done:true/false}`
- If terator is complete then it return `{done:true, value:anything}`, otherwise `{done:false,value:'value'}`

```js
let iterableObject = {
    [Symbol.iterator] : function()=>{
        return iteratorObject;
    }
}

// iteratorObject look like : 
let iterableObject = {
    next(){
        // return pattern {done : boolean value: anything}
        // example
        return {
            done : false, // if iterating are not complete
            value : "anything"
        }
    }
}
```

## [Simple example ot create iterator.](./iterator.js)