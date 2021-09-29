class Carracing {
    constructor() {
        
     
        
    }

    display(){
    
    line1=createSprite(windowWidth/2+243,windowHeight/2,10,windowHeight)
    line2=createSprite(windowWidth/2-243,windowHeight/2,10,windowHeight)

    road1=createSprite(windowWidth/2,windowHeight/2,40,60)
    road1.addImage("road1",roadi)    
    road1.scale=1.3
   

    car=createSprite(windowWidth/2,windowHeight/2+240,40,60)
    car.addImage("car",cari)
    car.scale=0.2

    

    car.collide(line1)
    car.collide(line2)


    drawSprites();
    
    }

}