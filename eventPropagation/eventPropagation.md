Event Propagation
==================

> 🟢 Event Propagation is how events travel through the Document Object Model(DOM) tree.

> 🟢 Commonly event are travel from child to parents. It's called event bubbling.

> 🟢 When capture the event from parent before it's child capture it, it's called event caputuring.

**How to capture event :**
```js
element.addEventListener("event",listener,{
    capture : true // true if capture the event, by default it false
});
```