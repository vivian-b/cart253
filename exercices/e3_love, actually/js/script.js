/**************************************************
Exercise 03: Love, actually
Vivian Bui

LOVE SIMULATION
**************************************************/


let user ={
  x: 100,
  y: 300,
  size: 75,
};

let eng ={
  string:`love`,
    x:0,
    y:0,
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
  string:`연애`,
    x:0,
    y:0
};

let chn ={
  string:`爱`,
    x:0,
    y:0
}

let ita ={
  string:`amore`,
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
text(`Across Languages`, windowWidth/2 -50,windowHeight/2 +50);
    text(`press to enter start`, 5,windowHeight-5)}


if (keyIsDown(13)) {
      state = `stimulation`
    }

if (state === `simulation`){
  simulation();
}


function simulation(){
  display();
  setupSimulation();
  checkTranslation()
}

function checkTranslation(){

if (mouseIsPressed && dist(mouseX,mouseY,eng.x,eng.y) < 25){
      state = `translateENG`;

}

if(mouseIsPressed && dist(mouseX,mouseY,fr.x,fr.y)< 25) {
  state = `translateFR`
}

if(mouseIsPressed && dist(mouseX,mouseY,spn.x,spn.y)< 35) {
  state = `translateSPN`
}

if(mouseIsPressed && dist(mouseX,mouseY,kr.x,kr.y)< 35) {
  state = `translateKR`
}

if(mouseIsPressed && dist(mouseX,mouseY,chn.x,chn.y)< 35) {
  state = `translateCHN`
}

if(mouseIsPressed && dist(mouseX,mouseY,ita.x,ita.y)< 35) {
  state = `translateITA`
}

if(mouseIsPressed && dist(mouseX,mouseY,vnm.x,vnm.y)< 35) {
  state = `translateVNM`
}

  }

if (state === `translateENG`) {
  translateENG()}

  function translateENG() {
    fill(255)
    push();
    textSize(90);
    textAlign(CENTER,CENTER);
    text(`ENGLISH`,width/2, height/2);
    pop();
    text(`love`, width/2 -25, height/2 - 90);
    textSize(20)
  }


  if (state === `translateFR`) {
    translateFR()}

    function translateFR() {
      fill(255);
      push();
      textSize(90);
      fill(255)
      textAlign(CENTER,CENTER);
      text(`FRENCH`,width/2, height/2);
      pop();
      text(`amour`, width/2 -25, height/2 - 90);
      textSize(20)
    }

    if (state === `translateSPN`) {
      translateSPN()}

      function translateSPN() {
        fill(255);
        push();
        textSize(90);
        fill(255)
        textAlign(CENTER,CENTER);
        text(`SPANISH`,width/2, height/2);
        pop();
        text(`amor`, width/2 -20, height/2 - 90);
        textSize(20)
      }

      if (state === `translateKR`) {
        translateKR()}

        function translateKR() {
          fill(255);
          push();
          textSize(90);
          fill(255)
          textAlign(CENTER,CENTER);
          text(`KOREAN`,width/2, height/2);
          pop();
          text(`연애`, width/2 -20, height/2 - 90);
          textSize(20)
        }

        if (state === `translateCHN`) {
          translateCHN()}

          function translateCHN() {
            fill(255);
            push();
            textSize(90);
            fill(255)
            textAlign(CENTER,CENTER);
            text(`CHINESE`,width/2, height/2);
            pop();
            text(`爱`, width/2 -20, height/2 - 90);
            textSize(20)
          }

          if (state === `translateITA`) {
            translateITA()}

            function translateITA() {
              fill(255);
              push();
              textSize(90);
              fill(255)
              textAlign(CENTER,CENTER);
              text(`ITALIAN`,width/2, height/2);
              pop();
              text(`amore`, width/2 -20, height/2 - 90);
              textSize(20)
            }

            if (state === `translateVNM`) {
              translateVNM()}

              function translateVNM() {
                fill(255);
                push();
                textSize(90);
                fill(255)
                textAlign(CENTER,CENTER);
                text(`VIETNAMESE`,width/2, height/2);
                pop();
                text(`yêu`, width/2 -20, height/2 - 90);
                textSize(20)
              }



function display (){
  ellipse(mouseX,mouseY,user.size)
}

function setupSimulation(){
  push();
    textSize(35)
    fill(200,100,100)

  eng.x = random(60,windowWidth-80);
  eng.y = fr.y-80;
  text(eng.string,eng.x,eng.y);

  fr.x = random(60,windowWidth-80);
  fr.y = spn.y-80;
  text(fr.string,fr.x,fr.y);

  spn.x = random(60,windowWidth-80);
  spn.y = kr.y-80;
  text(spn.string,spn.x,spn.y);

  kr.x = random(60,windowWidth-80);
  kr.y = chn.y-80;
  text(kr.string,kr.x,kr.y);

  chn.x = random(60,windowWidth-80);
  chn.y = ita.y - 80;
  text(chn.string,chn.x,chn.y);

  ita.x = random(60,windowWidth-80);
  ita.y = vnm.y - 80;
  text(ita.string,ita.x,ita.y);

  vnm.x = random(60,windowWidth-80);
  vnm.y = windowHeight-80;
  text(vnm.string,vnm.x,vnm.y);
  pop();
}


}
