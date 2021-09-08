var newx=200
var gameState="play";
function preload(){
rocketimg=loadImage("rocketimg.png")
planet1img=loadImage("planet1.png")
planet2img=loadImage("planet2.png")
planet3img=loadImage("planet3.png")
planet4img=loadImage("planet4.png")
Meteorimg=loadImage("Meteor.png")
}
function setup() {
  createCanvas(1200,600);
  Rocket1=new Rocket()
  planetgroup=new Group()
 for(var i=0;i<25;i++){
   planet1=new Planet(newx)
   planetgroup.add(planet1.body)
   newx=newx+300
 }
Safe=createSprite(newx,height/2,20,600)
Safe.visible=false;

}

function draw() {
  background(0);  
  drawSprites();
  camera.position.x=Rocket1.body.x+300
 if(planetgroup.isTouching(Rocket1.body)){
  gameState="end";
 }
if(gameState==="end"){
 fill("white")
 textSize(30)
  text("GAME OVER",Rocket1.body.x,height/2)
 Rocket1.body.velocityX=0;
 Rocket1.body.velocityY=0;
}
if(frameCount%100===0){
 meteor1= new Meteor(Rocket1.body.x+2000)
 planetgroup.add(meteor1.body) 
}
if(Rocket1.body.isTouching(Safe)){
  text("you are safe ",Rocket1.body.x,200)
}
if(Rocket1.body.y<0 ||Rocket1.body.y>height){
gameState="end"
}
}

function keyPressed(){
  if(gameState==="play"){

  
  if(keyCode== RIGHT_ARROW){
    Rocket1.moveright()
  }
  if(keyCode==LEFT_ARROW){
    Rocket1.moveleft()
  }
  if(keyCode==UP_ARROW){
    Rocket1.moveup()
  }
  if(keyCode==DOWN_ARROW){
    Rocket1.movedown()
  }
  }



}