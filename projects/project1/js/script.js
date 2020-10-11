/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

let victimImage;
function preload (){
  img = loadImage ('assets/images/victim.png')
}

let user = {
  x: 100,
  y: 250,
  size: 75,
  fill: {
    r: 166,
    g: 255,
    b: 249,},
  vx: 0,
  vy: 0,
  speed: 4
};



// setup()
//
// Description of setup() goes here.

function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  handleInput();
  move();
  display();
}

function handleInput(){
    if (keyIsDown(65)) { //left
      user.vx = -user.speed*2;
    }

    else if (keyIsDown(68)){ //right
      user.vx = user.speed*2;
    }

    else {
      user.vx = 0;
    }

    if (keyIsDown(87)) { //top
      user.vy = -user.speed;
    }


    else if (keyIsDown(83)){ //bottom
      user.vy = user.speed;
    }
    else {
      user.vy = 0;
  }
}

let s = -1.1;

function keyPressed(){
  if (keyPressed(68)){
    translate(width/2, height /2);
    scale(s);
}
}

function move(){
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

function display(){
  ellipse(user.x,user.y,user.fill,user.size);
  image(img, user.x+110, user.y-90,90,90)
}
