function *range(_start,_end,_step=1){
    if(!Number.isInteger(_start)){
        return null;
    }

    if(Number.isInteger(_start) && _end != undefined && !Number.isInteger(_end)){
        return null;
    }

    if(_end == undefined){
        _end = _start;
        _start = 0;
    }

    
    for(let i = _start;i <= _end;i++){
        yield i;
    }

    return;
}

console.log(...range(0,100,5));