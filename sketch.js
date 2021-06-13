var shipImg,ship,seaImage,sea;
function preload() {
  
 shipImg=loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png") 
 seaImage=loadImage("sea.png") 

}
function setup() {
  createCanvas(600,300);
  createEdgeSprites() ;

  if (sea.x < 0){
    sea.x = sea.width/2;
  }
  

  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
ship.scale=0.2
sea=createSprite(10,200,600,10);
sea.x=sea.width/2
sea.velocityX=-2;
sea.visible=false
}
function draw() {
  
  background(seaImage)
  
  
 if(keyDown("right"))
{ 
  ship.velocityX=4;
  ship.velocityY=0;
  
}
if (sea.x < 0){
  sea.x = sea.width/2;
}



ship.collide(sea);
drawSprites() 
  
}  