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
let intro = `Bounce the ball into the hoop!`
let intro2 = `use arrow keys to move around`
let retry = `click anywhere to restart`


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    user = new Player(350, 30);
  catcher = new Hoop(90, 20);

  for (let i = 0; i < basket.numBalls; i++) {
    let x = random(500, width);
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
    gameplay();
  }

  if (state === `gameclear`) {
    gameclear();
  }

  if (state === `gameover`) {
    gameover();
  }
}

function gameplay() {

  simulation();
  gameDisplay();

}

function gameclear() {

  gameDisplay();
}

function gameover() {

  gameDisplay();
}

function mousePressed() {
  if ((state === `gameclear`) || (state === `gameover`)){
    state = `title`}
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
      state = 'gameover'
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
