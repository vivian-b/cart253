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

// Left
let circleA = {
  x: 100,
  y: 0,
  s: 10,
  fill: 0,
  speed: 7,
  alpha: 200
};

// Center
let circleB = {
  x: 250,
  y: 0,
  s: 20,
  fill: 0,
  speed: 7,
  alpha: 200
}

// Right
let circleC = {
  x: 400,
  y: 0,
  s: 30,
  fill: 0,
  speed: 7,
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
bg.r = map(circleA.s, 50,width,0,255);

// circle A
  circleA.y += circleA.speed;
  circleA.y = constrain(circleA.y,0,width/4);

  circleA.s += .53;
  circleA.s = constrain(circleA.s,0,width/4);

    fill(mouseY,mouseX,circleA.alpha);
    ellipse(circleA.x,circleA.y,circleA.s);

  // circle B
    circleB.y += circleB.speed;
    circleB.y = constrain(circleB.y,0,width/2);

    circleB.s += .5;
    circleB.s = constrain(circleB.s,0,width/4);

      fill(mouseY,circleB.alpha);
      ellipse(circleB.x,circleB.y,circleB.s);

    // circle C

    circleC.y += circleC.speed;
    circleC.y = constrain(circleC.y,0,width*3/4);

    circleC.s += .75;
    circleC.s = constrain(circleC.s,0,width/4);

      fill(mouseX,circleC.alpha);
      ellipse(circleC.x,circleC.y,circleC.s);


}
