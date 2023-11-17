Memozation
==========

> 🟢 **Memozation** is an optimization technique used primarily to speed up computer programs by storing the result of expensive function calls. Where the pure function return the cached result when the same inputs occur again.

**Implementation of memozation technique using object and clouser in JS :**
```js
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
```

**Implementation of memozation technique using associative array and clouser in JS :**
```js
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

```

<hr />
<br />

## [< README](./../README.md)