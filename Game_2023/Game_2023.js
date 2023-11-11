var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img, img2, img3, img4, img5;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://sosoissoso.github.io/images/scene1.jpg');
  img2 = loadImage('https://sosoissoso.github.io/images/sky.jpg');
  img3 = loadImage('https://sosoissoso.github.io/images/almost.jpg');
  img4 = loadImage('https://sosoissoso.github.io/images/flowers.jpg');
  img5 = loadImage('https://sosoissoso.github.io/images/home.jpg');
}


function setup() {

  createCanvas(1000,600);
  textAlign(CENTER);
  textSize(20);
 
}// end of setup


function draw() {
  background(220);
  if (gameState == "L1"){
    levelOne();
  }
  if (gameState == "L2"){
     levelTwo();
  }
  if (gameState == "L3"){
    levelThree();
  }
  if (gameState == "L4"){
    levelFour();
  }
  if (gameState == "end"){
    end();
  }
  
  //text(("Score: " + score), width/2, 40);
  
}//end of draw

function levelOne()
  {
    image(img, 0, 0, 1000, 600);
    fill('white');
    text('Wake up Little One', width/2, height - 550);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
    
      ballx = random(width);
      bally = random(height);
      score = score + 1;
    }
   
    
    if(score >= 10){
        gameState = "L2";
    }
    
    //line(ballx, bally, mouseX, mouseY);
    ellipse(ballx, bally, ballSize, ballSize);
    
  }//end of lvl 1

function levelTwo()
  {
    //background(200, 100, 0);
    fill('white');
    image(img2, 0, 0, 1000, 600);

    text("It's cold isn't it? Let's go somewhere else", width/2, height - 550);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
    
      ballx = random(width);
      bally = random(height);
      score = score + 1;
    }
    
    if(score >= 20){
     gameState = "L3";
    }
    
    //line(ballx, bally, mouseX, mouseY)
    
    ellipse(ballx, bally, ballSize, ballSize);
    
    
  }//end of lvl 2

function levelThree()
  {
    background(0, 100, 200);
    fill('white');
    image(img3, 0, 0, 1000, 600);
    text("Isn't this better? It also seems familiar...", width/2, height - 20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
    
      ballx = random(width);
      bally = random(height);
      score = score + 1;
      ballSize = ballSize - 3;
    }
    
    if(score >= 30){
     gameState = "L4";
    }
    
    //line(ballx, bally, mouseX, mouseY);
    ellipse(ballx, bally, ballSize, ballSize);
    
    
  }//end of lvl 3
  
function levelFour()
  {
    background(100, 0, 200);
    fill('white');
    image(img4, 0, 0, 1000, 600);
    text("This path...You know where it leads", width/2, height - 20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
    
      ballx = random(width);
      bally = random(height);
      score = score + 1;
      ballSize = ballSize + 0.5;
    }
    
    if(score >= 40){
      gameState = "end";
    }
    
    //line(ballx, bally, mouseX, mouseY);
    ellipse(ballx, bally, ballSize, ballSize);
    
    
  }//end of lvl 4
  
function end()
  {
    background(100, 100, 200);
    fill('white');
    image(img5, 0, 0, 1000, 600);
    text("The End", width/2, height - 20);
    
    if(score >= 40){
      gameState = "end";
      fill('white');
      text(("You're home"), width/2, height - 500);
    }
    
    //line(ballx, bally, mouseX, mouseY);
    //ellipse(ballx, bally, ballSize, ballSize);
    
    
  }//end
  
  
  
  
  
  
  
  
  
  
