/**************************************************
Conditional Experiments
Vivian Bui
**************************************************/


//* different variables with different propreties/

let backgroundshade = 0;

let displayCircle = false

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
if (mouseY < height/3){
  fill(255,0,0)
}
//if "if" is false
else if (mouseY < 2 * width/3) {
  fill(0,0,255)
}
// no condition () needed since it depends on previous statements (1/3 to 2/3 to 3/3)
else {
  fill(0,255,0)
}

//needs both statements to be true, nested statements
// or two amperstands between statements
// if(circle.x > width/3) && circle.x < 2 * width/3)

if(circle.x > width/3){
  if (circle.x < 2 * width/3){
    fill (0,0,0)
  }
}

// either of the statements are true, ||
//if(circle.x > width/3) || circle.x < 2 * width/3){

// if not, (!(...))
// negation = !, so (not(statement))
//if(!(circle.x < width/3)) {
//  fill(250,0,0)}

//true or false varriables =  (statement)
// specific responses (statement === true)
if (keyIsPressed) {
  background(255);
}

  ellipse(circle.x,circle.y,circle.size);

}

if (mouseIsPressed){
  displayCircle = true
}

if (displayCircle){
  square(250,250,100,100)
}
