class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(45, 110),
    this.speed = 6;
    this.vx = random(0, this.speed);
    this.vy = random(0, this.speed);
    this.ay = 0;
    this.maxSpeed = 10;



    // this.oscillator = new p5.Oscillator();
    // this.nearFreq = 220;
    // this.farFreq = 440;
    // this.oscillator.amp(0.015);
    // this.oscillator.start();

    this.synth = new p5.PolySynth();
  }

  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    // this.x += this.vx;
    this.y += this.vy;
    this.vy = this.vy + this.ay;
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);




    // //frequency change
    // let d = dist(this.x, this.y, width / 2, height / 2);
    // let maxDist = dist(0, 0, width / 2, height / 2);
    // let newFreq = map(d, 0, maxDist, this.nearFreq, this.farFreq);
    // this.oscillator.freq(newFreq);

  }

  bounce() {

    if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > height) {
      this.vy = -this.vy;
      this.squeakSFX();
    }
  }

 squeakSFX(){

    squeakSFX.rate(noise[currentNote]);
    squeakSFX.play();

    currentNote ++;
  if(currentNote === noise.length){
    currentNote = 0;

  }}


  display() {
    push();
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.size)
    image(bunnyImg, this.x, this.y,this.size, this.size+20);

    pop();
  }
}
