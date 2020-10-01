/**************************************************
Drawing Experiments
Vivian Bui
**************************************************/

// setup()
//
// Draw Examples
function setup() {
//r,g,b, transparency: between 0 and 255
//x,y,w,h

  createCanvas(500,500)

  background (250,200,0);

  point(250,250);

  rect(0,0,250,500);
  //rectangle are drawn from the top left corner
// rectMode(center): will apply on all rectangles in the document
  line(0,0,500,500);
  line(500,0,0,500);
  //corner to corner

fill(1,1,1);
stroke(250,250,250);
strokeWeight(10)
//applies color to anything UNDER vvv

  ellipse(250,250,250,250);
noStroke();
//cancels anything under vvv (noFill)

  ellipse(250,50,50,50);

  //ellipses are drawn from the center
// ellipseMode(corner): will start top left corner
}

// draw()
//
// Description of draw() goes here.
function draw() {

}
