class Quiz{
    constructor(){} 

    getState(){
        var gameStateref= database.ref("gameState");
        gameStateref.on("value", function(data){
            gameState=data.val();
        })
    }
   
    update(state){
        database.ref('/').update({
            gameState: state
          });
     }
    async start(){
        if (gameState===0){
            player= new Player
            var playerCountRef = await database.ref('playerCount').once("value");
        }
        if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
        }
        
        question= new Question
        question.display()
    }
}