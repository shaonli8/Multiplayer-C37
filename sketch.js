
var gameState = 0

var playerCount

var database

var form,player,game

var allPlayers

var distance = 0 

function setup(){
    database = firebase.database();
    
    createCanvas(500,500);

    game = new Game()
    game.gameState()
    game.start()

}

function draw(){
    
    if(playerCount===4){

        game.update(1);

      }
      if(gameState===1){

        clear()

      }

}


