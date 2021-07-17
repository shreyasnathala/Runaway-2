var Bob,Bobimg
var bgimg
var life, lifeImg
var l=3
function preload() {
  bgimg=loadImage("images/Game Background.jpg")
  Bobimg=loadImage("images/Bob.png")
  lifeImg=loadImage("images/Live.png")
}

function setup(){
createCanvas(1000,800)

bg=createSprite(500,400,1200,800);
bg.addImage("bg",bgimg)
bg.scale=3.5
bg.velocityX=-3
Bob=createSprite(100,700,10,10);
Bob.addImage("Bob",Bobimg)

ground=createSprite(500,780,1000,3);
ground.visible=false;

lifeGroup=new Group();
}

function draw() {
  background(bgimg)

  if(bg.x<0) {
  bg.x=bg.width/6
  }
  
  if(keyDown("space")) {
    Bob.velocityY=-10
  }
  Bob.velocityY+=0.5

  if(Bob.isTouching(lifeGroup)) {
    l+=1;
    lifeGroup.destroyEach();
  }

  spawnlife()
Bob.collide(ground)
  drawSprites();
  textSize(40);
  stroke("white");
  fill("black");
  text("LIFE: "+l,70,100)
}

function spawnlife() {
  if (frameCount%180===0){
    life=createSprite(900,random(100,500),10,10);
    life.addImage("life",lifeImg);
    life.velocityX=-3
    lifeGroup.add(life)
    life.scale=0.2
  }
}