/**************************************************
Exercise 05: Juggling simulation
Vivian Bui

Here is a description of this template p5 project.
**************************************************/

"use strict";

let basket = {
 balls: [],
 numBalls: 5,
};

let gravityForce = 0.0025;
let user;
let catcher;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600),

    user = new Player(50, 30);
  catcher = new Hoop(90, 40);

  for (let i = 0; i < basket.numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    basket.balls.push(ball);
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

let i;
  for (let i = 0; i < basket.balls.length; i++) {
    let ball = basket.balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(user);

      ball.display();
  }

  let d = dist(ball.x, ball.y, catcher.x, catcher.y);
  if (d < ball.size / 2 + catcher.width / 2) {
    background(20);
    pause();
  }

}

  // function hoopCheck() {
  //   let j;
  //   for (j = 0; j < basket.balls.length; j++) {
  //     let multipleBalls = basket.ball[i];
  //     let d = dist(multipleBalls.x, multipleBalls.y, catcher.width, catcher.width);
  //     if (d < multipleBalls.size / 2 + catcher.width / 2) {
  //       background(20);
  //     }
  //
  //   }
  // }
}
