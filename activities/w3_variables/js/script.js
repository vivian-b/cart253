/**************************************************
Variable Experiments
Vivian Bui
**************************************************/


//** different variables with different propreties

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
//let circleAcceleration = 0.25;


//** one variable(object) with different propreties, single entity

//javascript object
// between curly brackets {}
// prepreties name x/y/size/speed
let circle = {
  x: 0,
  y: 250,
  size: 200,
  speed: 2,
  fill: 0,
}

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

//random number with a range between (#x,#y)
//circle.fill = random(40,55)

//convert range (value you want to convert, convert, converted, converted)
circle.fill = map(mouseX, 0,width, 0, 1000)

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
//circleX *= circleAcceleration;
circle.x += circle.speed;
ellipse(circleX, circleY, circleSize);
//circle(circle.x, circle.y, circle.size);
//changed the nameing to NAME.PROPRETY

//stops proprety/animation at instruction
//circle.x = constraint(circle.x,0,width)

//console.log (`circleX: ${circleX})
// string concatenation: joining character strings end-to-end.
//chat info: understand whats going on (prints out the numbers/variable thats going on)

//let randomNumber = random();
//console.log (randomNumber)
}
