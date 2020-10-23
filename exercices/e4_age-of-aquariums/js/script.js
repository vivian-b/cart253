/**************************************************
Exercise 04: Age of aquariums

Run away from the clowns and reach the safety zone on the other side!
**************************************************/

"use strict";

let group = {
  clowns: [],
  numClowns: 13,
};

let user = {
    x: 350,
   y: 0,
   width: 30,
   height:40,
   vx: 0,
   vy: 2,
   speed: 4,
   size:5
}

//text lines

    let state = `title`
    let intro = `Use arrow keys to run away from the clowns and reach the exit!`
    let intro2 = `click anywhere to start`
    let exit = `exit`
    let clear = `YOU RAN AWAY SUCCESSFULLY!!!`
    let retry = `tap spacebar to retry`
    let caught = `YOU GOT CAUGHT`


// Setup: Clown grouping
  function setup() {
  createCanvas(700,700);

  for (let j = 0; j < group.numClowns; j++) {
    group.numClowns = 13;
    let x = random(0,width);
    let y = random(0,height);
    let size = random(60,100);

    let clown = new Clown(x,y,size);

    group.clowns.push(clown)
  }
}

// Draw
function draw() {
  background(0, 30, 0);
  backgroundField();


  //Game States
    if (state === `title`) {
      titleScreen();
    }

   if (state ===`gameplay`) {
      gameplay();
    }

   if (state ===`gameclear`) {
      gameclear();
    }

   if (state ===`gameover`) {
      gameover();
    }
}

//game functions

    //start screen
    function titleScreen(){
      textSize(22);
      textAlign(CENTER);
        fill(0, 200, 0);
        text(intro, width/2, height/2+110);
        fill(50, 10, 0);
        text(intro2, width/2, height/2+200)
      }

      //game screen
      function gameplay(){
          simulation();
          move();
          checkForExit();
          clownCheck();
        }

        //bad end screen (gameover)
        function gameover(){
        textSize(60);
        textAlign(CENTER);
        fill(200, 0, 0);
        text(caught, width/2, 680);
        reset();
        }

      //good end screen (gameclear)
      function gameclear(){

        textSize(30);
        textAlign(CENTER);
          fill(0, 200, 0);
          text(clear, width/2, height/2+110);
          textSize(22);
          text(retry, width/2, height/2+200)

      reset();
      }

  //Game States transition
      function mousePressed(){
        if (state ===`title`)
        state = `gameplay`
  }

      function simulation(){

      textSize(100);
      textAlign(CENTER);
      fill(20, 60, 0);
      text(exit, width/2, 680);

      handleInput();
      setupSimulation();
      userDisplay();
//      clown.checkForClown();

}

function setupSimulation(){
  for (let j = 0; j < group.clowns.length; j++) {
    let clown = group.clowns[j];
  clown.display(group[j]);
  clown.move(group[j]);
  }
}

function backgroundField(){
  push();
  noStroke();
  fill(20, 100, 20);
    rectMode(CENTER);
    rect(width/2, height/2, width, height-220);
  pop();
}

function userDisplay(){
fill(200,0,0);
ellipse(user.x,user.y, user.width, user.height);

user.x = constrain (user.x, 0, width);
user.y = constrain(user.y, 0, height);
}

function handleInput(){

if (keyIsDown(LEFT_ARROW)) {
  user.vx = -user.speed*2;
}

else if (keyIsDown(RIGHT_ARROW)){
  user.vx = user.speed*2;

}

else {
  user.vx = 0;

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
}


    function checkForExit(){
      if (user.y >= height-85){
      state = `gameclear`
  }
}

    function reset(){
      if (keyIsDown(32)) {
      if ((state == `gameclear`) || (state ==`gameover`)){
      state = `gameplay`;
      user.y = 0
    }
  }
  }

function clownCheck(){
  let i;
  for(i = 0; i < group.clowns.length ; i++){
     let currClown = group.clowns[i];
    // let xDist = currClown.x - user.x
    // let yDist = currClown.y - user.y
    // let dist = Math.sqrt(xDist + yDist * yDist);
    // let valueToCmp = ((currClown.size) + user.size)
    // if (dist < valueToCmp)
    let d = dist(currClown.x, currClown.y, user.x, user.y);
     if (d < currClown.size / 2 + user.size / 2) {
   state = `gameover`
   }
 }
}
