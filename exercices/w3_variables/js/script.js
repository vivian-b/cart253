/**************************************************
Variable Experiments
Vivian Bui
**************************************************/

//variable names: (declares variables, nicknames, references)
//element that uses it has the determined number
// = assignment operator + value

let bgShade = 0;
let circleSize = 300;
let circleX = 250;
let circleY = 250;

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

background(bgShade)

//moving the square with the mouse position

rectMode(CENTER)
rect(0,mouseY/2,mouseY,mouseX);

//moving the square's dimension depending one the mouse location//
rectMode(CENTER)
fill(mouseX,mouseY/2,0)
circle(circleX,circleY,mouseX/10,mouseY/2);

}
