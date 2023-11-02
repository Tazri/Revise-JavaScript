var person = {
    name : "ans anonymo",
    msg : function(){
        console.log("Hello, I am ",this.name+".");
    },
    printThis : function(){
        console.log(this);
    },
    friend : {
        name : "unkown",
        msg : function(){
            console.log("I am "+this.name);
        },
        printThis : function(){
            "use strict";
            console.log(this);
        }
    }
}


function another(){
    "use strict";
    console.log(this);
}

another();