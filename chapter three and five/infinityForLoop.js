for(;;){
    var rand = Math.floor(Math.random()*50+1);
    if(rand == 4){
        console.log('Winner Winner Chiken Dinner');
        break;
    }
    console.log('You Have Got '+ rand);
}