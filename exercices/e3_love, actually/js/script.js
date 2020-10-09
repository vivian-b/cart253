/**************************************************
Exercise 03: Love, actually
Vivian Bui

LOVE SIMULATION
**************************************************/


let user ={
  x: 100,
  y: 300,
  size: 60,
};

let eng ={
  string:`love`,
    x:0,
    y:0
};

let fr ={
  string:`amour`,
    x:0,
    y:0
};

let spn ={
  string:`amor`,
    x:0,
    y:0
};

let kr ={
  string:`사랑`,
    x:0,
    y:0
};

let chn ={
  string:`爱`,
    x:0,
    y:0
}

let vnm ={
  string:`yêu`,
    x:0,
    y:0
}


let state = `title`

function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
background(200,100,100);
noStroke();
simulation();
noCursor();

function title(){
  push();
  textSize(64);
  fill(0);
  textAlign(CENTER,CENTER);
  text(`LOVE`,width/2, height/2);
  pop();
}

if (state === `title`) {
title();
text(`ACROSS LANGUAGES`, 250,200);
    text(`press to start`, 250,250);

}

else if (state === `simulation`){
  simulation();
}

function simulation(){
  display();
}

function translateENG() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`ENGLISH`,width/2, height/2);
  pop();
}

function translateFR() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`FRENCH`,width/2, height/2);
  pop();
}

function checkTranslation(){

if (mouseIsPressed && dist(mouseX,mouseY,eng.x,eng.y)<5) {
  state = translateENG
}

if(mouseIsPressed && dist(mouseX,mouseY,fr.x,fr.y)<5) {
  state = translateFR
}

if(mouseIsPressed && dist(mouseX,mouseY,spn.x,spn.y)<5) {
  state = translateSPN
}


}


function display (){
  ellipse(mouseX,mouseY,user.size)
}

function mousePressed(){
  if (state ===`title`) {
    state = `stimulation`
  }
}
}
