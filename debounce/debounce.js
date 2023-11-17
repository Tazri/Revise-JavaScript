function debounce(fn,delay=100){
    let timeOutId;

    return function(...args){
        if(timeOutId){
            clearTimeout(timeOutId);
        }

        timeOutId = setTimeout(()=>{
            fn(...args);
        },delay);
    }
}


let sum = (...args)=>{
    let result = args.reduce((a,b)=>a+b,0);
    console.log(result);
}

let debouncedSum = debounce(sum,200);


debouncedSum(4,5,6);
debouncedSum(4,5,6);
debouncedSum(4,5,6);

debouncedSum(4,5,6);
debouncedSum(4,5,6);
debouncedSum(4,5,6);
debouncedSum(4,5,6);
debouncedSum(4,5,6);
debouncedSum(4,5,6);


(()=>{
    setTimeout(()=>{
        debouncedSum(4,5,6);
    },206);
})()