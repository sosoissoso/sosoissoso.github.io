function setup() {

  createCanvas(600, 600);
  background(199, 232, 205);
  
}


function draw() {
  //back hair
  strokeWeight(0);
  fill(90, 0, 0);//left hair color red
  rect(135, 290, 150, 240);//left hair
  fill(80, 0, 80);// right hair color purple
  rect(235, 290, 170, 240);// right hair

//head + neck + shadow + undershirt
  strokeWeight(0);
  fill(255, 229, 204);//skin
  rect(220, 300, 100, 300);//neck
  fill(38, 19, 13);//shirt color
  rect(95, 450, 360, 450, 70);//body
  fill(255, 229, 204);//skin
  arc(270, 450, 100, 100, 0, PI + TWO_PI, OPEN);//bottom neck semi circle
  fill(236, 205, 182);//skin
  arc(270, 400, 110, 80, 0, PI + TWO_PI, OPEN);//shadow under head
  fill(255, 229, 204);//head color
  ellipse(270, 280, 270, 290);//head
  
  
  //overalls
  fill(0);
  rect(165, 450, 30, 450, 7);//left strap
  rect(345, 450, 30, 450, 7);//right strap
  rect(180, 525, 190, 525, 7);//overall
  fill(233, 217, 165);
  ellipse(185, 540, 18, 18);//left button
  ellipse(355, 540, 18, 18);//right button
  fill(54, 34, 11);//pocket color 
  rect(200, 550, 140, 550, 10);//pocket behind bear
  
  //bear
  fill(119, 102, 85);//color
  arc(270, 610, 100, 100, PI, TWO_PI);//head
  arc(305, 575, 35, 35, PI, 1.73);//right ear
  arc(235, 575, 35, 35, 1.10, 0.79);//left ear
  fill(155, 140, 127);//nose color
  arc(270, 610, 48, 35, PI, TWO_PI);//nose
  strokeWeight(5);//for eyes and nose
  line(233, 592, 243, 594);//left bear eye
  line(272, 590, 265, 590);//bear nose
  line(300, 592, 290, 594);//right bear eye
  
  //red bangs
  push();
  strokeWeight(0);
  rotate(0.55);
  fill(115, 0, 0);
  ellipse(290, 105, 120, 250);
  pop();
  
  //purple bangs
  push();
  strokeWeight(0);
  fill(105, 0, 105);
  rotate(-0.55);
  ellipse(165, 390, 120, 250);
  pop();

  
  //bucket hat
  strokeWeight(0);
  fill(47, 35, 43);
  rect(150, 110, 240, 110, 10);//top
  quad(199, 140, 340, 140, 470, 255, 75, 255)//flap
  
  
  //eyes
  fill(0);
  ellipse(215, 320, 30, 40);//left eye
  ellipse(320, 320, 30, 40);//right eye
  
  //mouth
  strokeWeight(5);
  line(235, 400, 265, 390);//left
  line(300, 400, 265, 390);//right
  

}
