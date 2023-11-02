const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function main(){
    readline.question("",input=>{
        console.log("Your input is : "+input);
        readline.close();
    });
}

main();