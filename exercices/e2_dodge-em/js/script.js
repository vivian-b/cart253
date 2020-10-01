/**************************************************
Exercise 02: Dodge-Em
Vivian Bui

Create an interactive program where the the user has to avoid
certain shapes.
**************************************************/

//loadImage
let victimImage;
function preload (){
  img = loadImage ('assets/images/victim.png')
}

//background
let bg = {
  r:1,
  g:20,
  b:45,
}

//bubble (target)
let bubble ={
  x:0,
  y:250,
  size: 70,
  vx: 0,
  vy: 0,
  speed: 18,
  fill: {
    r:15,
    g:170,
    b:245
  }

};

//user (avatar)
let user ={
  x:250,
  y:250,
  size: 110,
  vx: 0,
  vy: 0,
  speed: 5,

};

//user (ball)
let ball ={

  x:0,
  y:250,
  size: 20,
  fill: {
    r:180,
    g:2,
    b:70
  }}

// setup()
// canvas size, bubble's speed and spawn point
function setup() {
  createCanvas(windowWidth, windowHeight);

  bubble.vy = bubble.speed;
  bubble.x = random(0,height);

  noStroke();
  noCursor();
}

// draw()
function draw() {

//background color (static)
  background(bg.r,bg.g,bg.b)

//bubble's movement
  bubble.x += bubble.vx
  bubble.y += bubble.vy

//bubble's spawn reset
// target comes back to the top once it reaches the bottom
  if (bubble.y > height+bubble.size/2) {
      bubble.y = 0;
      bubble.x = random(0,width);
  }


//growth of the bubble whenever it is in contact with the user
  let d = dist(user.x, user.y, bubble.x,bubble.y);
    if (d < bubble.size/2 + user.size/2) {
    bubble.size *= 1.1;
}

//cap on the size of the bubble
// "game over" when it reaches the max
if (bubble.size > 3*windowHeight){
  noLoop();
}

//bubble
fill(bubble.fill.r, bubble.fill.g, bubble.fill.b);
ellipse(bubble.x,bubble.y,bubble.size);


//user hitbox
noFill(user)
ellipse(user.x,user.y,user.size)

//user controls
// user.x = mouseX
user.y = windowHeight;

if (mouseX > user.x) {
  user.vx = user.speed;
}
else if (mouseX < user.x) {
  user.vx = -user.speed;

}

user.x = user.x + user.vx;

//user avatar
image(img, user.x-78, user.y-86, 140, 110);

fill(ball.fill.r,ball.fill.g,ball.fill.b);
ellipse(mouseX,mouseY,ball.size);

}
