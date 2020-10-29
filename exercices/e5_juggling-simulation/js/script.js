/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let gravityForce = 0.0025;
let user;
let catcher;
let balls = [];
let numBalls = 5;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    user = new Player(50, 30);
  catcher = new Hoop(90, 40);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);


//Game States

  // if (state === `title`) {
  //       gameplay();
  //     }
  //
  //   else if (state ===`gameclear`) {
  //       gameclear();
  //     }
  //
  //     else if (state ===`gameover`) {
  //         gameover();
  //       }

  user.display();
  user.move();
  user.handleInput();

  catcher.display();


  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(user);

      ball.display();
    }
  }

  function hoopCheck() {
    let j;
    for (j = 0; j < balls.ball.length; j++) {
      let currBalls = balls.ball[i];
      let d = dist(currBalls.x, currBalls.y, catcher.x, catcher.y);
      if (d < currBalls.size / 2 + catcher.size / 2) {
        state = `scored`
      }

    }
  }
}
