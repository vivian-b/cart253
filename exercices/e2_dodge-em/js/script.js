/**************************************************
Exercise 02: Dodge-Em
Vivian Bui

Create an interactive program where the the avatar has to avoid/catch a target.
**************************************************/

//avatar (image)
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

//rain (target)
  let rain ={
    x:0,
    y:250,
    size: 65,
    vx: 0,
    vy: 0,
    speed: 25,
    fill: {
      r:15,
      g:170,
      b:245
  }
};

// avatar (hitbox)
  let avatar ={
    x:250,
    y:250,
    size: 135,
    vx: 0,
    vy: 0,
    speed: 5,
};

//ball (user control)
  let ball ={
    x:0,
    y:250,
    size: 25,
    fill: {
      r:180,
      g:2,
      b:70
  }
}

// setup()
// canvas size, rain's drop speed and spawn point
function setup() {
  createCanvas(windowWidth, windowHeight);

  rain.vy = rain.speed;
  rain.x = random(0,height);

  noStroke();
  noCursor();
}

// draw()
function draw() {

//background color (static)
  background(bg.r,bg.g,bg.b)

//ball's drawing
  fill(ball.fill.r,ball.fill.g,ball.fill.b);
  ellipse(mouseX,mouseY,ball.size);


////// RAIN ////////////
// Object that falls from top to bottom. When it touches <avatar>, it grows.
// the program stops when the <rain> expands to a certain size.

  //rain's movement (vertical drop)
  rain.x += rain.vx
  rain.y += rain.vy

  //rain's spawn reset (comes back to the top once it reaches the bottom)
    if (rain.y > height+rain.size/2) {
        rain.y = 0;
        rain.x = random(0,width);
}

  //rain expands whenever it's in contact with the avatar's hitbox
    let d = dist(avatar.x, avatar.y, rain.x,rain.y);
      if (d < rain.size/2 + avatar.size/2) {
        rain.size *= 1.05;
}

  //cap on the size of the rain -> game ends when it reaches the max size
    if (rain.size > 4*windowWidth){
      noLoop();
      ball.fill = 0
}

  //rain's drawing
    fill(rain.fill.r, rain.fill.g, rain.fill.b);
    ellipse(rain.x,rain.y,rain.size);

////// AVATAR ////////////
// The <avatar> is the image that follows the movement of the <ball> which is controlled by the user.
// only the <avatar> has a hitbox, meaning that the <ball> has no effect from touching the <rain>

//avatar hitbox
  noFill(avatar)
  ellipse(avatar.x,avatar.y,avatar.size)

//avatar's controls

//avatar's movement delay (follows the cursor/ball)
//*** QUESTION: is there a way to make the image flip so it "faces" the cursor?***

  if (mouseX > avatar.x) {
    avatar.vx = avatar.speed;
}

  else if (mouseX < avatar.x) {
    avatar.vx = -avatar.speed;
}
//anchored to the bottom of the viewport
avatar.y = windowHeight;
avatar.x = avatar.x + avatar.vx;

//avatar's image
image(img, avatar.x-78, avatar.y-86, 140, 110);

}
