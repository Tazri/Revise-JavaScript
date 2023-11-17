Event Delegation
================

> 🟢 Event Delegation is a event handling pattern that allows to handle events at a higher level in the DOM tree other the level where event is first receive.

**Benifit of event delegation :**
- Create fewer event listeners.
- Handle all events using on event listeners by parent element.

**Example :**
```html
<ul>
    <li onclick="handleEvent(e)">Item</li>
    <li onclick="handleEvent(e)">Item</li>
    <li onclick="handleEvent(e)">Item</li>
    <li onclick="handleEvent(e)">Item</li>
</ul>
```

Above the code need event handler for each `li` item. But it possible to do it just handle `ul` event. Here example :

```html
<ul onclick="handleEvent(e)">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>

<script>
    function handleEvent(e){
        if(e.target.matches("li")){
            // handle li event here.
        }
    }
</script>
```

<br />
<hr />

## [< README](./../README.md)
