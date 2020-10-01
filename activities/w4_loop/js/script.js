/**************************************************
Conditional Experiments
Vivian Bui
**************************************************/


//* different variables with different propreties/

let angle=0;
let rectScale = 0;

let caterpillar ={
  x:100,
  y: 250,
  segmentSize:50
}

let circle = {
  x:250,
  y:250,
  size:100,
  //velocity
  vx:0,
  vy:0,
  //acceleration
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 20
}

let bg = {
  r:0,
  g:0,
  b:0
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

//push&pop: makes the style an exception to the previous one, and restores it to next commands
// blue (push)red(pop) blue [previouscolor before pushpop]
  push();
  background(bg.r,bg.g,bg.b);
  noStroke();
  pop();

//translate
// adds to the previous coordinates to a set x/y
//translate(200,100)

//rotate
// angle is in radian (2*pi)
//convert to degrees by rotate(radians(45))
// rotate


//rotation animation

// rotate(angle)
// angle += 0.01;
// * must move origin with translate so it rotates on itself
    // translate (width/2,height/2)


//scale
//scale(rectscale)
//animated: rectscale += 0.01


//if mouse is to the left of circle (behind x)
if (mouseX < circle.x) {
  circle.vx = -circle.acceleration
}
//if mouse moves to the opposite, moves the same way
else{circle.vx = circle.acceleration}

//if mouse is above the circle
if (mouseY < circle.y){
  circle.vy = -circle.acceleration;
}

else {
  circle.vy = circle.acceleration
}

//set velocity via acceleration
circle.vx += circle.ax;
circle.vx = constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed);
circle.vy += circle.ay;
circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);



circle.x = circle.x + circle.vx;
circle.y = circle.y + circle.vy;

ellipse (circle.x,circle.y,circle.size);

//wildloop
//keeps doing the statement until it becomes false

//  let x = caterpillar.x;

//munber of segments abt to be drawn
// let numSegments = 8;
// //amount drawn in the beggining
// let segmentsDrawn = 0;
// while (segmentsDrawn < numSegments) {
//   ellipse (x,caterpillar.y, caterpillar.segmentSize);
//   x = x + 35;
//
// // statement = statement +1
// // or statement += 1
// //or statement ++
//
//   segmentsDrawn += 1;
// }

//forloop
// similar to wildloop but based on counting (in increments of 1 / ++)

// let x = caterpillar.x;
// let numSegments = 10;
//
// //starting fact (0) ; smtg to check for it to keep going, to see if the counter has reached its maximum value ; something that makes the counter change
// //for(let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++){
//
// // things we use to count = i (segmentsDrawn)
//
// //start at 0; count up ; by 1
// for(let i = 0; i < numSegments; i++){
// ellipse (x,caterpillar.y, caterpillar.segmentSize);
// x = x + 40;
// }
//
// ellipse(circle.x,circle.y,circle.size)

//makes the circle move to the location that was mousePressed
// function mousePressed() {
//   circle.x = mouseX;
//   circle.y = mouseY;
// }
//makes bg change color randomly after every click
// function mousePressed (){
//   bg.r = random(0,255);
//   bg.g = random(0,255);
//   bg.b = random(0,255);
// }

}
