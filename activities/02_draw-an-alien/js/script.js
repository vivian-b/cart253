/**************************************************
Activity 2: Draw an alien
Vivian Bui

Drawing an alien on the canvas.
**************************************************/

// setup()
//
// Drawing an Alien
function setup() {
  createCanvas(640,480);
  background(60, 5, 102);
  noStroke();

  //BG decoration
  fill(128, 87, 158);
    ellipse(320,490,680,235);

  //arms
  fill(204, 242, 189);
    ellipse(265,490,100,120);
    ellipse(370,490,100,120);

  //ears
    //shading
  fill(159, 227, 157);
    ellipse(465,250,90,220);

  fill(204, 242, 189);
    ellipse(170,250,80,220);
    ellipse(470,250,80,220);

    //inside
  fill(130, 217, 139);
    ellipse(485,230,35,100);
    ellipse(155,230,35,100);


  //body
    //shading
    fill(159, 227, 157);
      ellipse(318,515,190,215);

    //main color
    fill(204, 242, 189);
      ellipse(320,515,180,215);

  //head
    //shading
    fill(159, 227, 157);
      ellipse(320,285,375,335);
      ellipse(320,375,335,120);

    //main color
    fill(204, 242, 189);
      ellipse(325,280,365,325);

    //cheeks
      ellipse(325,375,335,140);


  //eyes
  fill(0);
  strokeWeight(4);
  stroke(36, 143, 52);
    ellipse(220,290,130,160);
    ellipse(420,290,130,160);

  //eye details
  noStroke();
  fill(38, 41, 38);
    ellipse(220,325,100,75);
    ellipse(420,325,100,75);

  //mouth
  fill(0)
    triangle(340, 395, 320, 370, 300, 395);

  //antenna
    //shading
    fill(159, 227, 157);
      ellipse(318,75,40,40);
      triangle(330, 120, 320, 80, 305, 120);

  fill(204, 242, 189);
    ellipse(320,75,35,35);
    triangle(345, 170, 320, 80, 300, 170);

}

// draw()
//
// Does nothing
function draw() {

}
