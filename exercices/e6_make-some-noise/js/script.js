/**************************************************
Exercise 6
Vivian Bui

**************************************************/


//balls
let balls = [];

//
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

// setup()
//

// Description of setup() goes here.
function setup() {

createCanvas(600,600);

userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);

for (let i = 0; i<balls.length; i++) {
  let ball = balls[i];
  ball.move();
  ball.bounce();
  ball.display();
}

}

function mousePressed(){
  createBall(mouseX,mouseY);
}

function createBall(x,y){
let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);

}
