/**************************************************
Conditional Experiments
Vivian Bui
**************************************************/


//* different variables with different propreties/

let backgroundshade = 0;

let circle = {
  x:0,
  y:250,
  size: 100,
  speed: 10
}

// setup()
//
// Variable Testing
function setup() {
createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundshade);

  circle.x = circle.x + circle.speed;
//condition = ( )
//if the circle go higher than the width... if its true the thing written in {} happens
//so the circle goes the opposite of the command= -command
// >= and <= and === and !== (does not equal)

if (circle.x > width) {
circle.speed = -circle.speed
}

//when the circle goes past left side (0)
if (circle.x <0){
  circle.speed = -circle.speed;
}

//above halfway makes it change color
if (mouseY < height/2){
  fill(255,0,0)
}

if (mouseY > height/2){
  fill(0,250,0)
}

  ellipse(circle.x,circle.y,circle.size);

}
