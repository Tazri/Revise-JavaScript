/**
 * 
 * @param {string} message 
 */

self.onmessage = (message)=>{
    console.log(`> Received Message from parent is : ${message.data}`);

    // do the work
    let result = expensiveWork(1000000000);

    self.postMessage({status : "work is finished", result});
}

// onmessage and self.onmessage are same.
// here self is global



function expensiveWork(cost){
    let sum = 0;
    for(let i = 0;i <=cost;i++){
        sum+=i;
    }


    return sum;
}