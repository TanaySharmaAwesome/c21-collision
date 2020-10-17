var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,400,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(100,50,50,50);
  rect1.shapeColor = "green";

  rect2 = createSprite(200,50,50,50);
  rect2.shapeColor = "green";

  rect3 = createSprite(300,50,50,50);
  rect3.shapeColor = "green";

  rect4 = createSprite(400,50,50,50);
  rect4.shapeColor = "green";
}

function draw() {
  background("red");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect, rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }else{

    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  drawSprites();
}




  
  
