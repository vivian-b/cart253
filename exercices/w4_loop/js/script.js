/**************************************************
Conditional Experiments
Vivian Bui
**************************************************/


//* different variables with different propreties/

let caterpillar ={
  x:100,
  y: 250,
  segmentSize:50
}

// setup()
//
// Variable Testing
function setup() {
createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  noStroke();
  fill(100,200,100);


//wildloop
//keeps doing the statement until it becomes false

//  let x = caterpillar.x;

//munber of segments abt to be drawn
// let numSegments = 8;
// //amount drawn in the beggining
// let segmentsDrawn = 0;
// while (segmentsDrawn < numSegments) {
//   ellipse (x,caterpillar.y, caterpillar.segmentSize);
//   x = x + 35;
//
// // statement = statement +1
// // or statement += 1
// //or statement ++
//
//   segmentsDrawn += 1;
// }

//forloop
// similar to wildloop but based on counting (in increments of 1 / ++)

let x = caterpillar.x;
let numSegments = 10;

//starting fact (0) ; smtg to check for it to keep going, to see if the counter has reached its maximum value ; something that makes the counter change
//for(let segmentsDrawn = 0; segmentsDrawn < numSegments; segmentsDrawn++){

// things we use to count = i (segmentsDrawn)

//start at 0; count up ; by 1
for(let i = 0; i < numSegments; i++){
ellipse (x,caterpillar.y, caterpillar.segmentSize);
x = x + 40;
}

}
