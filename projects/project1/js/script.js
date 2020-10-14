/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

var score = 0;
let bg = (137, 237, 119);

let user = {
  x: 350,
  y: 280,
  size: 40,
  vx: 0,
  vy: 0,
  speed: 4,
};

  let daggerTop ={
    x:900,
    y:0,
    height: 40,
    width: 18,
    vx: 2,
    vy: 2,
    speed: 8,
}

let daggerLeft ={
  x:0,
  y:900,
  height: 24,
  width: 40,
  vx: 2,
  vy: 0,
  speed: 6,
}

let daggerRight ={
  x:700,
  y:900,
  height: 24,
  width: 35,
  vx: 3,
  vy: 0,
  speed: 7,
}

let carrot ={
  x:900,
  y:-100,
  height: 50,
  width: 20,
  vx: 0,
  vy: 4,
  speed: 5,
}

let shadow ={
  x:0,
  y:250,
  height: 20,
  width: 45,
}

let state = `title`
let intro = `press anywhere to start`

function preload(){

myFont = loadFont ("assets/fonts/Brandon_reg.otf")

//Bunny Idle
  img_idle = loadImage("assets/images/bun_iddle.png")
  img_idlehit = loadImage("assets/images/bun_hit.png")
  img_dead = loadImage("assets/images/bun_dead.png")

//Bunny Left
  img_left = loadImage("assets/images/bun_LDash.png")
  img_lefthit = loadImage("assets/images/bun_LDashHit.png")

//Bunny Right
  img_right = loadImage("assets/images/bun_RDash.png")
  img_righthit = loadImage("assets/images/bun_RDashHit.png")

//Game Elements
  img_carrot = loadImage("assets/images/carrot.png")
  img_dagger = loadImage("assets/images/dagger.png")

//Graphic Screen Elements
  img_title = loadImage("assets/images/title.png")
  img_carrotbun = loadImage("assets/images/instruction_carrot.png")
  img_daggerbun = loadImage("assets/images/instruction_run.png")
}

///////////////////////////

function setup() {
  createCanvas(710,500);
  noStroke();
  imageMode(CENTER);
  background(112, 234, 255);
}

function draw() {
angleMode(DEGREES)

//Game States
if (state === `title`) {
titleScreen();
}

else if (state ===`gameplay`){
gameplay();
}

else if (state ===`gamestrike`){
gamestrike();
}

else if (state ===`gameover`){
gameover();
}


function titleScreen(){
image(img_title, width/2, height/2,480,140);
image(img_carrotbun, width/2-150, height/3 ,100,100);
image(img_daggerbun, width/2, height/3 ,130,100);

fill(66, 152, 245);
textFont(myFont);
textSize(22);
text(intro, width/2-90, height/2+130);
}

function gameplay(){
background(137, 219, 110);
backgroundField();
//functions
simulation();
move();
}

function gamestrike(){
background(137, 219, 110);
backgroundField();
//functions
simulation2();
move();
}

function gameover(){
background(137, 219, 110);
backgroundField();
image(img_dead, user.x, user.y,50,70);

//functions
setupSimulation();
  fill(55, 163, 41)
  text ("score = "+score,25,height-30);
}
}

//Game States transition
function mousePressed(){
  if (state ===`title`)
    state = `gameplay`

  // if (state ===`gameover`)
  // state = `title`
}

//2 lives
function simulation(){
  handleInput();
  setupSimulation();
  checkForCarrot();
  checkForDagger();

  fill(55, 163, 41)
  text ("score = "+score,25,height-25);
}

//1 life left
function simulation2(){
  handleInput();
  setupSimulation();
  checkForDagger2();
  checkForCarrot();

  fill(55, 163, 41)
  text ("score = "+score,20,height-25);
}

function setupSimulation(){

//Element Hitboxes

noFill();
  ellipse(daggerTop.x,daggerTop.y+10,daggerTop.width,daggerTop.height)
  ellipse(daggerLeft.x+10,daggerLeft.y,daggerLeft.width,daggerLeft.height)
  ellipse(daggerRight.x-10,daggerRight.y,daggerRight.width,daggerRight.height)

  ellipse(carrot.x,carrot.y,carrot.width,carrot.height)

  ellipse(user.x,user.y+15, user.size+5, user.size-6);

//Element Graphics
  push();
  translate(daggerRight.x, daggerRight.y);
  rotate(90);
  image(img_dagger, 0, 0,25,60);
  pop();

  push();
  translate(daggerLeft.x, daggerLeft.y);
  rotate(-90);
  image(img_dagger, 0, 0,25,60);
    pop();

  image(img_dagger, daggerTop.x, daggerTop.y,25,65);

  image(img_carrot, carrot.x, carrot.y,25,60);

//Field Limits
  user.x = constrain (user.x,85,width-85)
  user.y = constrain (user.y,75,height-95)
}

//User Controls
function handleInput(){

  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed*2;

    if (state === `gameplay`){
    image(img_left, user.x, user.y,60,70);
  }
    else if (state ===`gamestrike`){
    image(img_lefthit, user.x, user.y,60,70);
    }
}

  else if (keyIsDown(RIGHT_ARROW)){
    user.vx = user.speed*2;

  if (state === `gameplay`){
    image(img_right, user.x, user.y,60,70);
  }
    else if (state ===`gamestrike`){
    image(img_righthit, user.x, user.y,60,70);
    }
}

  else {
    user.vx = 0;

    if (state === `gameplay`){
    image(img_idle, user.x, user.y,50,70);
}
    else if (state ===`gamestrike`){
    image(img_idlehit, user.x, user.y,50,70);
    }
  }

  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  }

  else if (keyIsDown(DOWN_ARROW)){
    user.vy = user.speed;
  }

  else {
    user.vy = 0;
  }
}


function move(){

//user movements
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

//daggerTop's movement (vertical drop)
daggerTop.y += daggerTop.vy + daggerTop.speed;
daggerTop.x = daggerTop.x

//daggerTop's spawn reset (comes back to the top once it reaches the bottom)
  if (daggerTop.y > height) {
      daggerTop.y = 0;
      daggerTop.x = random(0,width-30);
    }

//daggerLeft's movement (horizontal: left to right )
  daggerLeft.x += daggerLeft.vx + daggerLeft.speed

//daggerLeft's spawn reset (respawns on the left-hand side)
    if (daggerLeft.x > width) {
        daggerLeft.x = 0;
        daggerLeft.y = random(30,height-30);
      }

//daggerRight's movement (horizontal: right to left )
  daggerRight.x -= daggerRight.vx + daggerRight.speed

    //daggerRight's spawn reset (respawns on the right-hand side)
        if (daggerRight.x < 0) {
            daggerRight.x = width;
            daggerRight.y = random(30,height-30);
          }

  //Carrot's movement (vertical drop)
  carrot.y += carrot.vy + carrot.speed
  carrot.x = carrot.x

  //Carrot's spawn reset (comes back to the top once it reaches the bottom)
    if (carrot.y > height) {
        carrot.y = 0;
        carrot.x = random(40,width-40);
      }
}

// User Contact with any DAGGERS (Part 1): -1 life, Dagger Respawns
function checkForDagger(){

  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <20) {
  state =  `gamestrike`;
  daggerTop.x = random(30,450)
  daggerTop.y = 0
}

 if (dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <20) {
  state =  `gamestrike`
  daggerLeft.x = random(30,450)
  daggerLeft.y = 0
}

 if (dist(user.x,user.y,daggerRight.x,daggerRight.y) <20) {
  state =  `gamestrike`
  daggerRight.x = random(30,450)
  daggerRight.y = 0
}
}

// User Contact with any DAGGERS (Part 2): Game Over
function checkForDagger2(){

  if (dist(user.x,user.y,daggerTop.x,daggerTop.y) <20 ||
  dist(user.x,user.y,daggerLeft.x,daggerLeft.y) <28 ||
  dist(user.x,user.y,daggerRight.x,daggerRight.y) <28){

  state =  `gameover`;
  }
}

//User Contact with CARROT: Scoring System
function checkForCarrot(){
if (dist(user.x,user.y,carrot.x,carrot.y) <22) {
  score+= 1
  carrot.y = 0
  carrot.x = random(200,width-50)
  }
}

//Decoration
function backgroundField(){
  push();
  fill(255, 228, 191);
  strokeWeight(7);
  stroke(255, 212, 148);
  rectMode(CENTER);
    rect(width/2, height/2, 560, 350, 20);
  pop();

  if (user.y > 400){
    noStroke();
    fill(117, 201, 89);

    ellipse(user.x,user.y+30,shadow.width,shadow.height)
  }

  else if (user.y < 400){
    fill(235, 189, 152);
  ellipse(user.x,user.y+30,shadow.width,shadow.height)
}
}
