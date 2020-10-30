/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let basket = {
  balls: [],
  numBalls: 2,
};

let gravityForce = 0.0025;
let user;
let catcher;

let state = 'title'
let intro = `Juggle the balls to the hoop!`
let intro2 = `do not let any of them fall before scoring`
let intro3 = `(use arrow keys to move around)`
let clear = 'GG! :)'
let fail = 'GG. :('
let retry = `click anywhere to restart`


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    user = new Player(350, 30);
  catcher = new Hoop(90, 20);

  for (let i = 0; i < basket.numBalls; i++) {
    let x = random(550, width-40);
    let y = random(-400, -100);

    let ball = new Ball(x, y);

    basket.balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(40);

  //Game States
  if (state === `title`) {
    titlescreen();
  }

  else if (state === 'gameplay'){
    gameplay();

  }

else  if (state === `gameclear`) {
    gameclear();
  }

else  if (state === `gameover`) {
    gameover();

  }
}

function titlescreen(){
  textSize(30);
        textAlign(CENTER);
        fill(252, 169, 3);
          text(intro, width/2, height/2+110);
          textSize(22);
          text(intro2, width/2, height/2+200)
          text(intro3, width/2, height/2+250)
}

function gameplay() {

  simulation();
  gameDisplay();
}

function gameclear() {

  textSize(50);
        textAlign(CENTER);
          fill(252, 169, 3);
          text(clear, width/2, height/2);


  gameDisplay();
  reset();

}

function gameover() {

  textSize(50);
        textAlign(CENTER);
        fill(252, 169, 3);
          text(fail, width/2, height/2+50);

  gameDisplay();
  reset();
}

function mousePressed() {
  if ((state === `gameclear`) || (state === `gameover`)){
    state = `title`;

    }

    else if  (state === `title`){
      state = `gameplay`
    }
}

function simulation() {
  user.move();
  user.handleInput();
  ballSimulation();
  // ballFall();
}

function gameDisplay(){
    user.display();
    catcher.display();
}

function ballSimulation(){
  let i;

  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(user);
      ball.display();
      // ball.fallen();
    }

    if (ball.y > height){
      state = 'gameover';
      }

    // if(ball.fall){
    //    state = 'gameover'
    // }

    let d = dist(ball.x, ball.y, catcher.x, catcher.y);
    if (d < ball.size / 2 + catcher.height) {
  state = 'gameclear'
    }
  }
}

function reset(){
  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
  ball.y = random(-400, -500);

}
}
  // I could not figure out how to make it so it only ends after every balls have fallen instead of a single one

// function ballFall(){
//   if (basket.balls.y > height){
//     state = 'gameover'
// }
// }

// function ballFall(){
// let i;
//
// for (let i = 0; i < basket.balls.y; i++) {
//   let ball = basket.balls[i];
//   if (basket.balls.y > height){
//     state = 'gameover'
// }
// }
//  }
