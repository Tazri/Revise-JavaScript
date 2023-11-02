JavaScript DOM Manipulation
============================

- [What to do with HTML using JavaScript](#what-to-do-with-html-using-javascript)
- [Selecting Element](#selecting-element)
- [Play With Element](#play-with-element)
- [Event](#event)
- [Ajax](#ajax)

## What to do with HTML using JavaScript

- Create new element.
- Remove existing element.
- Modify existing element.
- Attribute modify, adding or removing.
- Style adding, removing or modifing.
- Create event.
- Add Event Listener.

## Selecting Element

```js
// use it for select element like css selector.
let element = document.querySelector(useCSSSelectorForSelectElement);


// use this method for select element using ID
let element = document.getElementById(idName);


// this method return nodeList
// convert it to array by this technic Array.prototype.slice.call(nodeList)
let elements = document.querySelectorAll(CSSSelector,CSSSelector,..);


// this method return html collection
// convert it to array by Array.prototype.slice.call(htmlCollection);
let elements = document.getElementByClassName(className);

// this method return html collection but 
// it select using tag name
let elements = document.getElementByTagName(tagName);

// show children
parentElement.children; // if there is no children then it gives us null

// show the childNode, in that case it shows text too
parentElement.childNodes; // give nodeList

// parent select
element.parentNode; // if there is no parent then it gives us null
```

## Play With Element

```js
// create element
document.createElement("elementName");

// accessing element content
element.textContent;

// chaning element text content
element.textContent = "your content";

// insert html inside element
element.innerHTML = "htmlAsString";

// class add or remove
element.classList.add("className"); // add class
element.classList.remove("className"); // remove class


// set element attribute
element.setAttribute("attributeName", "value");

// remove element attribute
element.removeAttribute("attributeName");

// we can access element style using :
element.style;


// we can insert adjacent element
element.insertAdjacentElement(
    "beforebgin|afterbgin|beforeend|afterend",
    anotherElement
);

// add child at last
element.appendChild(anotherElement);

// add child before another child
element.insertBefore(elementToAdded,whichElementNextTo);

// delete previous sibling
element.previousSibling.remove();

// access child Nodes
element.childNodes; // it's return NodeList

// remove spacify child 
element.removeChild(spacificChildNode);

// selected element remove
element.remove();
```

## Event

```js
// print in alert box
alert("Show the alert box");
```

**Event hadnling in html :**
```html
<element onclick="functionCalledOrExpressionToExecution()"></element>
<!--
    other event
    onfocus
    onactive
    onmouseenter
    onblur
    oncanplay
    onchange
    onmouseover
    onmouseout
    onload
    ....
    ...
-->
```

**Add event listener using js :**
```js
element.onclick = function(){

};

/**
 * same like
 * element.onchange
 * element.onmouseover
 * element.onchange
 */

// another way
element.addEventListener("eventName",eventObject=>{

});

// here event is click, mouseenter,mouseover etc

// stoping event bubbleup
element.onclick = function(event)=>{
    event.stopPropagation(); // stop event bubble up
}

// stoping form default action of event
event.preventDefault();

// accesing which key are press using event
event.key;
```

## Ajax

**Step of creating XMLHttpRequest :**
1. create instance of XMLHttpRequest.
2. Open request.
3. Send the request.
4. Handle the request.

**Simple XMLHttpRequest :**
```js
var request = new XMLHttpRequest(); // create instance of request
request.open("GET","url",true); // open request
request.send(); // send request


// handle request
request.onreadystatechange = function handleRequest(){
    console.log(request);
}

// access the ready state
request.readyState;


/**
 * all ready state meaning
 * 0 - request can not start
 * 1 - connected with server
 * 2 - request sended
 * 3 - request processing
 * 4 - request finishing and create response
 * 
 */

// accessing request status
request.status;

/**
 * pattern of status
 * 1xx : information
 * 2xx : success
 * 3xx : redirection
 * 4xx : client error
 * 5xx : server error
 * 
 */
```


<br />
<hr />

## [< Back to README file](./../README.md)