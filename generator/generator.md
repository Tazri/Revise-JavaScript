Generator
=========

> 🟢 Generator is a function which return a iterator.

**Syntax of Generator :**
```js
function * generatorName(){
    yield returnAValueForOneTime;
    yield returnAnotherValueForOneTime;
    yield returnAnotherValueforOneTime;
    // more syntax

    return; // finish the iterator
}

// get iterator from generator
let iterator = generatorName();

// called iterator
iterator.next(); // access next value. value liek : {value : "value", done : boolean}
```

## [Example of Generator](./range.js)


## Async Generator

**Syntax of create async generator :**

```js
async function * generatorName(){
    // syntax
}
```