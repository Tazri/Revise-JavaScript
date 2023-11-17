Intersection Observer
======================

> 🟢 `IntersectionObserver` class use for ovserve on html element is intersect with document or not. It receive a function if any intersect happend then what to do.

```js
const ovserver = new IntersectionObserver((listOfIntersectElment)=>{ // it's not array
    let element = listOfIntersectElment[0]; // it's IntersectionObserverEntry type
    
    // this is call back function for what to do after interect

    element.target; // html element which is intersected
    element.isIntersect; // is intersect or not
})

ovserver.observe(htmlElement); // observe the html element.
```

<hr />
<br />

[READEME](./../README.md)
