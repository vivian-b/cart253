class Bunny {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(45, 120),
      this.speed = 6;
    this.vx = random(0, this.speed);
    this.vy = random(0, this.speed);
    this.ay = 0;
    this.maxSpeed = 10;
  }

//gravity fall
  gravity(force) {
    this.ay = this.ay + force;
  }

//bunny vertical movement
  move() {
    this.y += this.vy;
    this.vy = this.vy + this.ay;
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

  }

//bunny bounce (hitting ground and bouncing back)
  bounce() {

    if (this.y + this.size / 2 > height) {
      this.vy = -this.vy;
      this.squeakSFX();
    }
  }

//bunny sound effect loop
  squeakSFX() {

    squeakSFX.rate(noise[currentNote]);
    squeakSFX.play();

    currentNote++;
    if (currentNote === noise.length) {
      currentNote = 0;

    }
  }


  display() {
    push();
    noStroke();
    noFill();
    ellipse(this.x, this.y, this.size)
    image(bunnyImg, this.x, this.y, this.size, this.size + 20);

    pop();
  }
}
