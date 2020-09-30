/**************************************************
Activity 4: Dodging COVID-19
Vivian Bui

Display the COVID-19 circle and move it across the screen, starting at a random y
Make the COVID-19 circle move back to the left if it goes off the right side
Display the user circle at the mouse location
Check if the two circles overlap and, if they do, stop the program
Display random static in the background for a visual flourish
Hide the mouse cursor

**************************************************/

let covid19 ={
  x:0,
  y:250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 10,
  fill: {
    r:255,
    g:0,
    b:0
  }
};

let user ={
  x:250,
  y:250,
  size: 100,
  fill: 255,
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

  noCursor();

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

//display static
for (let i = 0; i < 100; i++) {
let x = random (0,width);
let y = random(0,height);
stroke (255);
point(x,y);
}

  covid19.x += covid19.vx
  covid19.y += covid19.vy

  if (covid19.x >width) {
    covid19.x = 0;
    covid19.y = random(0,height);

  }

user.x = mouseX
user.y = mouseY

//check for catching
let d = dist(user.x, user.y, covid19.x,covid19.y);
if (d< covid19.size/2 + user.size/2) {
  noLoop();
}

//covid
fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
ellipse(covid19.x,covid19.y,covid19.size);


//user
fill(user.fill)
ellipse(user.x,user.y,user.size)

}
