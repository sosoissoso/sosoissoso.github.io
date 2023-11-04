var img, img2, img3; //image var
var initials ='sn'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 210; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
 // img = loadImage('https://dma-git.github.io/images/74.png');
  img2 = loadImage('https://sosoissoso.github.io/images/extra.png');
  img3 = loadImage('https://sosoissoso.github.io/images/fox.gif');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg, 180, 140);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function drawTree(x,y){
      //tree
    strokeWeight(0);
    fill(139, 69, 19);
    rect(pmouseX-9, pmouseY+35, 15, 50);
    fill(85, 107, 47);
    ellipse(pmouseX, pmouseY, 70, 95);
    //triangle(30, 75, 58, 20, 86, 75);
    
    //rect(51, 75, 15, 20);
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  //clouds
 
    strokeWeight(0);
    fill(255, 250, 250);
    rect(pmouseX, pmouseY, 50, 20, 5);
    
  } else if (toolChoice == '2') { // trees

   drawTree(true,true)
    
  } else if (toolChoice == '3') { //tree with berries

    strokeWeight(0);
    fill(139, 69, 19);
    rect(pmouseX-9, pmouseY+35, 15, 50);
    fill(85, 107, 47);
    ellipse(pmouseX, pmouseY, 70, 95);
    fill(230, 126, 34);
    ellipse(pmouseX-20, pmouseY+10, 20, 20);
    ellipse(pmouseX+15, pmouseY+25, 20, 20);
    ellipse(pmouseX+16, pmouseY-20, 20, 20);
    
  } else if (toolChoice == '4') { //bush

    strokeWeight(0);
    fill(107, 142, 35);
    ellipse(pmouseX, pmouseY, 25, 25);
    ellipse(pmouseX+15, pmouseY-10, 25, 25);
    rect(pmouseX, pmouseY, 25, 12.5, 5 );
    ellipse(pmouseX+25, pmouseY-1.1, 26.5, 26.5);

  } else if (key == '5') { //berry bush
    
    strokeWeight(0);
    fill(107, 142, 35);
    ellipse(pmouseX, pmouseY, 25, 25);
    ellipse(pmouseX+15, pmouseY-10, 25, 25);
    rect(pmouseX, pmouseY, 25, 12.5, 5 );
    ellipse(pmouseX+25, pmouseY-1.1, 26.5, 26.5);
    fill(33, 97, 140);
    ellipse(pmouseX, pmouseY-4, 6, 6);
    ellipse(pmouseX+25, pmouseY+2, 6, 6);
    ellipse(pmouseX+17, pmouseY-13, 6, 6);

  } else if (toolChoice == '6') { //mushroom

    strokeWeight(0);
    fill(139, 0, 0);
    arc(pmouseX, pmouseY, 25, 25, PI, TWO_PI);
    fill(255, 250, 240);
    rect(pmouseX-3, pmouseY, 5, 13, 5);
    
  } else if (toolChoice == '7') { //pond
  
    strokeWeight(0);
    fill(135, 206, 250);
    ellipse(pmouseX, pmouseY, 80, 25);
    
  } else if (toolChoice == '8') { //wheat

    strokeWeight(0);
      fill(240, 230, 140);
      ellipse(pmouseX, pmouseY, 15, 35);
      fill(221, 212, 128);
      rect(mouseX-2, mouseY+4, 4, 26);

  } else if (toolChoice == '9') { //crops

    strokeWeight(0);
    fill(255, 228, 196);
    rect(mouseX, mouseY, 8, 30);
    rect(mouseX+13, mouseY, 8, 30);
    rect(mouseX+26, mouseY+5, 30, 8);
    rect(mouseX+26, mouseY+18, 30, 8);
    rect(mouseX-4, mouseY+35, 30, 8);
    rect(mouseX-4, mouseY+48, 30, 8);
    rect(mouseX+30, mouseY+30, 8, 30);
    rect(mouseX+43, mouseY+30, 8, 30);

  } else if (toolChoice == '0') { //erase
    
    strokeWeight(10);
    stroke(screenbg, 180, 140);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
 //   rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img2, mouseX-25, mouseY-25, 50, 50);
    
  }
  
    else if (toolChoice == 'f' || toolChoice == 'F') { // f places the image we pre-loaded
    image(img3, mouseX-25, mouseY-25, 50, 50);
    
  }
  
}
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// s calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg, 180, 140); // set the screen back to the background color
  } else if (key == 's' || key == 's') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
