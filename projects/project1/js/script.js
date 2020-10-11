/**************************************************
Project 1: SIMULATION
Vivian Bui

(description)
**************************************************/

let user = {
  x: 100,
  y: 250,
  size: 75,
  fill: 100,
  vx: 0,
  vy: 0,
  speed: 4
};

  let daggerV ={
    x:0,
    y:250,
    height: 50,
    width: 20,
    vx: 2,
    vy: 2,
    speed: 7,
    fill: 100,
    totalSegments: 10,
    segmentSize: 50,
    segmentSpacing:40,
}

let daggerHL ={
  x:0,
  y:250,
  height: 20,
  width: 50,
  vx: 0,
  vy: 0,
  speed: 7,
  fill: 100,
  totalSegments: 10,
  segmentSize: 50,
  segmentSpacing:40,
}

let daggerHR ={
  x:0,
  y:250,
  height: 20,
  width: 50,
  vx: 0,
  vy: 0,
  speed: 7,
  fill: 200,
  totalSegments: 10,
  segmentSize: 50,
  segmentSpacing:40,
}

let carrot ={
  x:0,
  y:250,
  height: 50,
  width: 20,
  vx: 0,
  vy: 0,
  speed: 4,
  fill: 300
}


// setup()
//
// Description of setup() goes here.

function setup() {
  createCanvas(500,500);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  push();
  background(0);
  simulation();
  display();
  pop();
  objectMove();
}

function simulation(){
  handleInput();
  move();
  setupSimulation();
}

function setupSimulation(){
  fill(daggerV.fill)
  ellipse(daggerV.x,daggerV.y,daggerV.width,daggerV.height)

  fill(daggerHL.fill)
  ellipse(daggerHL.x,daggerHL.y,daggerHL.width,daggerHL.height)

  fill(daggerHR.fill)
  ellipse(daggerHR.x,daggerHR.y,daggerHR.width,daggerHR.height)

  fill(carrot.fill)
  ellipse(carrot.x,carrot.y,carrot.width,carrot.height)

  user.x = constrain (user.x,100,350)
  user.y = constrain (user.y,100,350)

}
function objectMove(){

//daggerV's movement (vertical drop)
daggerV.y += daggerV.vy + daggerV.speed
daggerV.x = daggerV.x

//daggerV's spawn reset (comes back to the top once it reaches the bottom)
  if (daggerV.y > height) {
      daggerV.y = 0;
      daggerV.x = random(0,width);
    }

  //daggerHL's movement (vertical drop)
  daggerHL.x += daggerHL.vx + daggerHL.speed
  daggerHL.y = daggerHL.y


  //daggerHL's spawn reset (comes back to the top once it reaches the bottom)
    if (daggerHL.x > width) {
        daggerHL.x = 0;
        daggerHL.y = random(0,height);
      }

      daggerHR.x -= daggerHR.vx + daggerHR.speed
      daggerHR.y = daggerHR.y


      //daggerHL's spawn reset (comes back to the top once it reaches the bottom)
        if (daggerHR.x < 0) {
            daggerHR.x = width;
            daggerHR.y = random(0,height);
          }

  //daggerV's movement (vertical drop)
  carrot.y += carrot.vy + carrot.speed
  carrot.x = carrot.x

  //daggerV's spawn reset (comes back to the top once it reaches the bottom)
    if (carrot.y > height) {
        carrot.y = 0;
        carrot.x = random(0,width);
      }
}

function move(){
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;
}

function display(){
  ellipse(user.x,user.y,user.size);
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
