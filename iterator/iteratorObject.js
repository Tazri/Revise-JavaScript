let iterable = {
    count : 0,
    [Symbol.iterator] : function(){
        
        return {
            next : ()=>{
                if(this.count < 5){
                   this.count++;
                   return {
                        value :  "value",
                        done : false
                   }; 
                }else{
                    return {
                        value : undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for(let i of iterable){
    console.log(`> i : ${i}`);
}