function printThis(a,b){
    console.log(`${a} + ${b} = ${a+b}`);
    console.log(this);
}

var person = {
    name : "anonymo"
}

printThis.bind(person,2)(3);