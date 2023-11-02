let fire = function(status){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if(status){
                resolve("> It firing..");
            }else{
                rejects("> not firing.");
            }
        },3000);
    })
}

async function main(){
    try{
        let data = await Promise.all([fire(true),fire(true)]);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

main();

console.log("> Main thread terminate.");