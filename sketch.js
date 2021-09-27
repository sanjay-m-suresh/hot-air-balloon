var balloon, balloonImage1,balloonImage2;
var database;
var height;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png", "hotairballoon1.png");
   balloonImage2 = loadImage("hotairballoon1.png", "hotairballoon2.png", "hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
 // database=firebase.database();
  createCanvas(1500,700);
  //console.log(database);

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("balloon",balloonImage1);
  balloon.scale=0.5;

  //var balloonPosition = database.ref('balloon/height');
  //balloonPosition.on("value", readPosition, showError);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
   balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

//function updateHeight(x,y){
  //database.ref('balloon/height').set({
  //  'x': height.x + x,
  //  'y': height.y + y
  //})
//}

//function readHeight(data){
  //height = data.val();
 // balloon.x = height.x;
 // balloon.y = height.y;
//}

//function showError(){
  //console.log("Error in writing to the database");
//}

