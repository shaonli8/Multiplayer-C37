class Game{
  constructor(){
  }
  gameState(){
    var gameStateref = database.ref("gameState")
    gameStateref.on("value",function(data){gameState = data.val()})
 }
update(state){
  database.ref("/").update({
      gameState:state
  })
}

async start(){
  if(gameState===0){
    player =new Player()
    var playerCountRef = await database.ref("playerCount").once("value")
    if(playerCountRef.exist){
      playerCount = playerCountRef.val()
      player.getCount()
    }
    form = new Form()
    form.display()
  }

}
play(){
  form.hide()
  text("Game Started",120,120)
  player.getPlayerInfo();


  if(allPlayers !==undefined){

    var display_Position = 130

    for(var plr in allPlayers){

      if(plr==="player" + player.index)
        fill("red")
      else
          fill("black")
    }
      
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_Position)
    
  }

if(keyDown ("UP_ARROW") && player.index !==null){

  player.distance+=50
  player.update();
}


}


}