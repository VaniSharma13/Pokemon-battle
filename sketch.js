var bgImage,map,mapImage
var ash,ashImage,ashImage2,misti,mistiImage,mistiImage2;
var gameState=0;
var ash1,misti1
var ground1Img

function preload(){
  bgImage=loadImage("bg.jpg");
  mapImage=loadImage("map.jpg")
  ashImage=loadImage("ash.png");
  mistiImage=loadImage("misti.png")
  ashImage2=loadImage("ash_face.png");
  mistiImage2=loadImage("misti_face.png");
  ground1Img=loadImage("ground1.jpg")

}
function setup() {
  createCanvas(1366,657);


 
}

function draw() {
  
  if(gameState===0){ 
    background(bgImage);
    textSize(60);
    stroke("white");
    strokeWeight(10);
    fill("black");
    textFont("timesNewRoman")
    text("POKEMON BATTLE",400,100);  
    textSize(50);
    text("Select Your Player",500,350);
  
    ash=createSprite(300,400,50,50);
    ash.addImage(ashImage); 
    ash.scale=0.6;
    misti=createSprite(1000,400,50,50);
    misti.addImage("state0",mistiImage);
    misti.scale=0.7;
    misti.visible=true;
    ash.visible=true;
    if(mousePressedOver(ash)){
      gameState=1;

    }
    if(mousePressedOver(misti)){
      gameState=2;
    }
    
  }
  if(gameState===1){
   One();
   
     
    }
    if(gameState===2){
     Two();
      }
  drawSprites();
}
function One(){
  background(mapImage);
 ash.visible=false;
 ash.destroy();
 ash1=createSprite(300,400,50,50);
 ash1.addImage(ashImage2);
 ash1.scale=0.5;

 if(mousePressedOver(ash1)){
   Three();
 }

}
function Two(){
  background(mapImage);
  misti.visible=false;
 misti.destroy();
 misti1=createSprite(300,400,50,50);
 misti1.addImage(mistiImage2);
 misti1.scale=0.5;

 if(mousePressedOver(misti1)){
  Three();
}
 
}
function Three(){
  background(ground1Img);
}