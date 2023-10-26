function setup() {

  createCanvas(600,600);
  
}


function draw() {
  background(204,229,255);
  
  fill(255,255,255);//cloud
  rect(50,20,205,40,20);//cloud
  rect(180,65,205,40,80);
  rect(450,100,205,54,180);

  fill(163, 31, 52);
  ellipse(350, 620, 250, 450);//body
  fill(255,229,204);//skin
  ellipse(300, 320, 300, 350);//head
  
  
  fill(51,25,0);//
  ellipse(230, 350, 50, 50);//eye
  ellipse(370, 350, 50, 50);
  fill(255, 255, 255);//right pupil color
  ellipse(365, 360, 20, 20);//right pupil
  ellipse(225, 360, 20, 20);//left pupil
  strokeWeight(3);
  line(300,430,330,445);//right mouth line
  line(300,430,300,445);//left mouth line
  
  


  
}
