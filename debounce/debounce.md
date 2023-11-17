Debounce
========

> 🟢 **Debouncing** is a process to filters out the function from user multiple input or multiple event before triggering the action.

**Here simple prevent function debouncing technic which prevent any function debouncing based on time. :**

```js
function debounce(fn,delay=100){
    let timeOutId;

    return function(...args){
        // if the function is already trigered then clear it
        if(timeOutId){
            clearTimeout(timeOutId);
        }

        timeOutId = setTimeout(()=>{
            fn(...args);
        },delay);
    }
}
```

<br />
<hr />

##[< Read Me](./../README.md)