class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("Join")
        this.greeting=createElement("h3")


    }

 display(){
    var title = createElement("h2")
    title.html("Multiplayer Car Racing")
    title.position(100,50);
    
    this.input.position(120,150)
    
    this.button.position(200,200)
    
    this.button.mousePressed(()=>{

        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount+=1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        
        this.greeting.html("Hi "+name)
        this.greeting.position(150,150)   

    })

   
 }

hide(){

this.greeting.hide()
this.button.hide()
this.input.hide()


}

}