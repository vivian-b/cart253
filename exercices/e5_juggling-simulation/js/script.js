/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Basketball with a mix of juggling where the user
can not let any of the ball drop until a ball reaches the hoop
**************************************************/

"use strict";

//Arra of the balls
let basket = {
  balls: [],
  numBalls: 2,
};

//value for gravity
let gravityForce = 0.0025;

//Player
let user;

//Hoop
let goal;

let state = 'title'

//Informative text
let intro = `Juggle the balls to the hoop!`
let intro2 = `do not let any of them fall before scoring!`
let intro3 = `(use arrow keys to move around)`
let intro4 = `click anywhere to start`
let clear = 'GG! :)'
let fail = 'GG. :('
let retry = `click anywhere to restart`


// setup()
//
//Setting up the classes: balls (array of 2), player (user), hoop (goal)
//
function setup() {
  createCanvas(600, 600),

    user = new Player(350, 30);
  goal = new Hoop(90, 20);

  for (let i = 0; i < basket.numBalls; i++) {
    let x = random(550, width - 40);
    let y = random(-400, -100);

    let ball = new Ball(x, y);

    basket.balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(84, 125, 209);

  //Game States
  if (state === `title`) {
    titlescreen();
  } else if (state === 'gameplay') {
    gameplay();

  } else if (state === `gameclear`) {
    gameclear();
  } else if (state === `gameover`) {
    gameover();

  }
}

//Starting screen (state) with informative text
function titlescreen() {
  textSize(40);
  textAlign(CENTER);

  fill(252);
  text(intro, width / 2, height / 2);

  fill(252, 169, 3);
  textSize(22);
  text(intro2, width / 2, height / 2 + 200)
  text(intro3, width / 2, height / 2 + 230)
  text(intro4, width / 2, height / 2 + 260)
}

//Gameplay screen (main state)
function gameplay() {

  simulation();
  gameDisplay();
}

//End Screen 1 (good, clear)
function gameclear() {

  textSize(50);
  textAlign(CENTER);
  fill(252, 169, 3);
  text(clear, width / 2, height / 2);

  textSize(20);
  text(retry, width / 2, height / 2 - 60);


  gameDisplay();
  reset();
}

//End Screen 2 (bad, fail)
function gameover() {

  textSize(50);
  textAlign(CENTER);
  fill(252, 169, 3);
  text(fail, width / 2, height / 2 + 50);
  textSize(20);
  text(retry, width / 2, height / 2 - 60);

  gameDisplay();
  reset();
}

//Resetting state / Starting game through first state
function mousePressed() {
  if ((state === `gameclear`) || (state === `gameover`) || (state === `title`)) {
    state = `gameplay`;
}
}

//Gameplay components
function simulation() {
  user.move();
  user.handleInput();
  ballSimulation();
  hoopCheck();
  // ballFall();
}

//Game graphics/display
function gameDisplay() {
  user.display();
  goal.display();
}

//All Ball control: movement, gameover, hoop
function ballSimulation() {
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

    if (ball.y > height) {
      state = 'gameover';
    }

    // if(ball.fall){
    //    state = 'gameover'
    // }

  }
}

//Interaction between the hoop and ball
function hoopCheck() {
  let i;
  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
    let d = dist(ball.x, ball.y, goal.x, goal.y);
    if (d < ball.size / 2 + goal.height) {
      state = 'gameclear'
    }
  }
}

function reset() {
  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
    ball.y = random(-400, -500);
    ball.x = random(550, width - 40)
    ball.vy = 0
    ball.vx = 0

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

// for (let i = 0; i < basket.balls.length; i++) {
//   let ball = basket.balls[i];{
//   if (ball.y > height) {
//     state = 'gameover';
//   }
// }
// }
