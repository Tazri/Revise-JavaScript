const range = (_start,_end,_step=1)=>{
    if(!Number.isInteger(_start)){
        return null;
    }

    if(Number.isInteger(_start) && _end != undefined && !Number.isInteger(_end)){
        return null;
    }

    if(_end == undefined){
        let temp = _start;
        _start = 0;
        _end = temp;
    }

    let currentState = _start;
    return {
        [Symbol.iterator] : ()=>{
            return {
                next(){
                    if(currentState <= _end){
                        let result = {
                            done : false,
                            value : currentState
                        };

                        currentState += _step;
                        return result;
                    }

                    return {
                        done : true,
                        value : undefined
                    }
                }
            };
        }
    }
}

console.log("> Program Start.");
for(let i of range(10,20,2)){
    console.log(`> i : ${i}`);
}