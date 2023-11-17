Web Worker API
===============

> 🟢 **Web worker** api used in browser for using multithreading programming feature in javascript.

**Syntax of create web worker api :**
```js
const worker = new Worker("./javascriptWorkerFile.js");

worker.postMessage("message for worker"); // worker start the work

worker.onmessage = (message)=>{
    // after worker finished the work
    // what to do here

    // message is object which is send from worker.
}
```

**Inside the worker file:**
```js
self.onmessage = (messageFromMainThread)=>{
    // here worker start the worker after received the message
    // from main thread

    // here does not access the dom element or html global element.

    postMessage(sendTheMessageToMainThreadAfterFinishedTheWork);
}

/**
 * onmessage and self.message same. here self is global object.
 */
```

<hr />
<br />

[README](./../README.md)