const bgButton = document.getElementById("change-color");
const calculateButton = document.getElementById("calculate");
const display = document.getElementById("display");
const body = document.querySelector("body");


// add event listener
bgButton.addEventListener("click",changeBackground);
calculateButton.addEventListener("click",calculate);


// make the worker
const worker = new Worker("./worker.js");

worker.onmessage = function(message){
    console.log("> Work status form worker : "+message.data.status);

    display.textContent = "Calculate Result is : "+message.data.result;
}

function changeBackground(){
    if(body.className == "green"){
        body.className = "blue";
    }else{
        body.className = "green";
    }
}

function calculate(){
    display.textContent = "Calculate is started...";
    
    // start the worker
    worker.postMessage("Message From Main Thread to Start the Calculate..");
}
