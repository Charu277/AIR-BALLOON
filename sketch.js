var database,height
function preload(){
  backgroundImg=loadImage("images/cityImage.png")
  air_balloonImg=loadImage("images/HotAirBallon-01.png");
  balloonImg2=loadAnimation("images/HotAirBallon-01.png","images/HotAirBallon-02.png","images/HotAirBallon-03.png")
}

function setup() {
  createCanvas(1500,700);
  database=firebase.database();
 //createSprite(400, 200, 50, 50);
  //background.addImage(backgroundImg)
  air_balloon=createSprite(300,570,20,20);
air_balloon.addImage(air_balloonImg)
air_balloon.scale=0.6
  air_balloonposition= database.ref(air_balloon.height)
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}
function updateHeight(x,y) {
  database.ref(air_balloon/height).set({
   x:height.x+x,
  });
  
}
function readHeight(data) {
  height=data.val();
  air_balloon.x=height.x
  air_balloon.y=height.y
}
function showError() {
  console.log("ERROR IN WRITING TO THE DATABASE")
  
}
function keyPressed() {
  if(keyCode===UP_ARROW){
    air_balloon.y=air_balloon.y-10
    air_balloon. addAnimation(balloonImg2)
    air_balloon.scale=0.7
    
   
  }
  if(keyCode===DOWN_ARROW){
    air_balloon.y=air_balloon.y+10
    air_balloon.addAnimation(balloonImg2)
    air_balloon.scale=0.6
  }
  if(keyCode===RIGHT_ARROW){
    air_balloon.x=air_balloon.x+10
    air_balloon.addAnimation(balloonImg2)
  }
  if(keyCode===LEFT_ARROW){
    air_balloon.x=air_balloon.x-10
    air_balloon.addAnimation(balloonImg2)
  }
}
