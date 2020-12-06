while(true){
    var rand = Math.floor(Math.random()*50+1);
    if(rand == 4){
        console.log('Winner Wnner Chinken Dinner');
        break;
    }else{
        console.log('You have got '+rand);
    }
}

for(var i = 0; i < 100 ; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}