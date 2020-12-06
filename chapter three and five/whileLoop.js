var isRunning = true;

while(isRunning){
    var rand = Math.floor(Math.random()*100+0);
    if(rand == 4){
        console.log('>>>>Winner Winnder Chinken Dinner<<<<');
        isRunning = false;
    }else{
        console.log('>>>You Have Got '+rand);
    }
}
