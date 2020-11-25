
class Games {
  constructor() {

//G1: catch
    this.x=50;
    this.y=50;
       this.size= 100;
       this.vx= 0;
       this.vy= 0;
       this.speed= 25;

}

catch() {


  let d = dist(user.x, user.y, this.x,this.y);
     if (d < this.size/2 + user.size/2) {
       score -= 1;
       user.x = 250;
       user.y = 250;

}

if (this.y > height+this.size/2) {
    this.y = 0;
    this.x = random(0,20);
}

fill(100,100,0);
   ellipse(this.x,this.y,this.size);

}

noLives(){
 if (score <= 0){
   state = "defeat";
 }
}

}
