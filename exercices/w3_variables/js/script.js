/**************************************************
Variable Experiments
Vivian Bui
**************************************************/

//variable names: (declares/set variables, nicknames, references)
//element that uses it has the determined number
// = assignment operator + value
//variables > numbers (better usage)

let bgShade = 0;
let circleSize = 500;
let circleX = 250;
let circleY = 250;
let circleSpeed = 1;
backgroundShade = 0;
let circleAcceleration = 0.25;

// setup()
//
// Variable Testing
function setup() {
createCanvas(windowWidth,windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
//changing background color depending on mouse location
//moving the square with the mouse position

rectMode(CENTER)
rect(mouseX,mouseY/2,mouseY,mouseX);

//moving the square's dimension depending one the mouse location//
rectMode(CENTER)
fill(mouseX,mouseY/2,0)



//following the variable
//circle(circleX,circleY,mouseX/10,mouseY/2);

//unfollowing/cancelling the variable
// variable+maths makes it animate since it loops every fame
//changes relatively to itself
backgroundShade = backgroundShade + 2;
circleSize = circleSize+circleSpeed;

//position being controlled by several X/Y,
//speed being controlled by velocity (# moves each timestep/frame)

// A = A-B ->> A += -B  (-= subtract the value, /= divide, *= multiply)
//circleX = circleX - circleAcceleration;
circleX *= circleAcceleration;
circle(circleX,circleY,circleSize);


}
