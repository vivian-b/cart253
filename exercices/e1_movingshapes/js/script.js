/**************************************************
Exercise 01: I like to move it move it!
vivian bui

Create a program full of shapes that move, change s and color,
and anything else you want to experiment with.
**************************************************/

// setup()
//

//bacground
  let bg = 0

// Left
  let circleA = {
    x: 100,
    y: 0,
    s: 5,
    fill: 0,
    speed: 2,
    alpha: 125
};

// Center
let circleB = {
  x: 250,
  y: 0,
  s: 20,
  fill: 0,
  speed: 4,
  alpha: 200
}

// Right
let circleC = {
  x: 400,
  y: 0,
  s: 30,
  fill: 0,
  speed: 8,
  alpha: 300
}

// Canvas Size
function setup() {
  createCanvas(500,500);
  noStroke();

}


// Three circles (#1) dropping down at different speed (#2) and enlarges (#3)
// lined up diagonally (#5.2) in different colors depending on the cursor(#4 & #6)
// with a grey background that darkens/lightens depending on the cursor (#5.1)

function draw() {

//background (map)

  background(bg)
  bg = map(mouseX,0,width,100,180)

// circle A: left

  //vertical movement
    circleA.y += circleA.speed;
    circleA.y = constrain(circleA.y,0,width/4);
    
  //size change
    circleA.s += .53;
    circleA.s = constrain(circleA.s,0,width/4);

      fill(mouseY/3,mouseX,circleA.alpha);
      ellipse(circleA.x,circleA.y,circleA.s);

// circle B: center

  //vertical movement
    circleB.y += circleB.speed;
    circleB.y = constrain(circleB.y,0,width/2);

  //size change
    circleB.s += .5;
    circleB.s = constrain(circleB.s,0,width/4);

      fill(mouseY,mouseX,circleB.alpha);
      ellipse(circleB.x-(mouseX/25),circleB.y-(mouseY/25),circleB.s);

// circle C: right

  //vertical movement
    circleC.y += circleC.speed;
    circleC.y = constrain(circleC.y,0,width*3/4);

  //size change
    circleC.s += .75;
    circleC.s = constrain(circleC.s,0,width/4);

      fill(mouseY,mouseX/3,circleC.alpha);
      ellipse(circleC.x,circleC.y,circleC.s);

}
