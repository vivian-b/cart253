/**************************************************
Exercise 01: I like to move it move it!
vivian bui

Create a program full of shapes that move, change s and color,
and anything else you want to experiment with.
**************************************************/

// setup()
//

let bg = {
  r: 0,
  g: 0,
  b: 0,
};

let circle = {
  x: 0,
  y: 250,
  s: 50,
  fill: 255,
  speed: 5,
  alpha: 200
};

let square = {
  x: 500,
  y:250,
  s: 180,
  fill: 255,
  speed: 4,
  alpha: 255
}

let triangle = {
  x: 500,
  y:250,
  s: 75,
  fill: 255,
  speed: 4,
  alpha: 200
}


// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();

}

// draw()
//
// Description of draw() goes here.
function draw() {

//background
background(bg.r,bg.g,bg.b);
bg.r,bg.g,bg.b += 1;
bg.r = map(circle.s, 50,width,0,255);

// circle A
  circle.x += circle.speed;
  circle.x = constrain(circle.x,0,width/3);
  circle.s += 0.25;
  circle.s = constrain(circle.s,0,width/6);

    fill(circle.fill,circle.alpha);
    ellipse(circle.x,circle.y,circle.s);
  


}
