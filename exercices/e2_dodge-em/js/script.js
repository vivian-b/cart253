/**************************************************
Exercise 02: Dodge-Em
Vivian Bui

Create an interactive program where the the user has to avoid
certain shapes.
**************************************************/

// object to dodge
function preload (){
  img = loadImage ('assets/images/poison.orb.gif')
}

let backgroundShade = 0

let poison ={
  x:0,
  y:250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 25,
  fill: {
    r:60,
    g:200,
    b:50
  }
};

let user ={
  x:250,
  y:250,
  size: 80,
  fill: 255,
  ax: 0,
  ay: 0,
  acceleration: 0.9,
  maxSpeed: 20,
};

// setup()
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  poison.y = random(0,height);
  poison.vx = poison.speed;

  noCursor();

  loadImage('assets/images/poison.orb.gif', img => {
      image(img, 0, 0);
    })

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  poison.x += poison.vx
  poison.y += poison.vy

  if (poison.x > width) {
    poison.x = 0;
    poison.y = random(0,height);
  }

user.x = mouseX
user.y = mouseY

//growth of the poison whenever it is in contact with the user
let d = dist(user.x, user.y, poison.x,poison.y);
if (d < poison.size/2 + user.size/2) {
poison.size *= 1.1
}

//cap on the size of the poison to signal it is game over
if (poison.size > 3*windowHeight){
  noLoop();
}

if (poison.size >= windowHeight/2){
  user.size = 40;
}


//adjust the poison's speed so it follows the size change
poison.speed *= poison.size *1.1

//poison
fill(poison.fill.r, poison.fill.g, poison.fill.b);
ellipse(poison.x,poison.y,poison.size);

//user
fill(user.fill)
ellipse(user.x,user.y,user.size)

}
