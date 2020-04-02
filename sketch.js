var fixedRect, movingRect;
var gamwObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  gameObject2 = createSprite(100,100,50,50);
  gameObject2.shapeColor = "green";
  gamwObject1 = createSprite(200,100,50,50);
  gamwObject1.shapeColor = "green";

}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,gamwObject1)){
    gamwObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gamwObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}



