class Rocket{
    constructor(){
    this.body=createSprite(10,100)
    this.body.addImage(rocketimg)
    this.body.scale=0.2;
    this.body.rotation=90 
   
this.body.setCollider("rectangle",0,0,200,300)
}
moveright(){
    this.body.velocityX=11
}
moveleft(){
    this.body.velocityX=-5
}
moveup(){
    this.body.velocityY=-5
}
movedown(){
    this.body.velocityY=5
}
}
