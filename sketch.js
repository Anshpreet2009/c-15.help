
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();
 blueB = new Group();
 greenB = new Group();
 pinkB = new Group();

 arrowGroup= new Group();

  
}

function draw() {
 background(0);
 

 
 if(gameState === PLAY)
 {
      /*Uncomment correct option 
        according to PLAY state*/  
      // moving ground
       scene.velocityX = -3 
      // //destroy bow
      // bow.destroy();
      //reset the background
       if (scene.x < 0){
           scene.x = scene.width/2;
          }
      //moving bow
       bow.y = World.mouseY      
      // //stop background movement
      // scene.velocityX = 0;

  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
 }

 
 
 
 
  

  if (gameState === END) {
    /*Uncomment correct option 
      according to END state*/  
      // // moving ground
      // scene.velocityX = -3 
      //destroy bow
      bow.destroy();
      // //reset the background
      // if (scene.x < 0){
      //     scene.x = scene.width/2;
      //    }
      // //moving bow
      // bow.y = World.mouseY      
      // //stop background movement
       scene.velocityX = 0;

  }

if (frameCount>700) {
  red.destroyEach();
  blue.destroyEach();
  green.destroyEach();
  pink.destroyEach();

  gameState=END; 
}
if(redB.collide(arrow)){
  score = score + 1
  red.destroyEach();
}

if(greenB.collide(arrow)){
  score = score + 1
  green.destroyEach();
}

if(blueB.collide(arrow)){
  score = score + 1
  blue.destroyEach();
}

 if(pinkB.collide(arrow)){
  score = score + 1
  pink.destroyEach();
 }
  
  drawSprites();
  text("Score: "+ score, 300,50);
}












function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
