var fixedrect
var movingrect




function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(300, 200, 70, 50);
 fixedrect.shapeColor="yellow"
 
 movingrect= createSprite(300, 500, 70, 100);
 movingrect.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
      movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.shapeColor="purple"
      fixedrect.shapeColor="purple"
    }else{
      fixedrect.shapeColor="yellow"
      movingrect.shapeColor="yellow"
    }
    
  drawSprites();
}