
let bubbles = []; //array that holds everything

let lamb;
let flowers = []; //array that holds flower imgs

function preload() { //loads to be used later; doesn't make them appear just yet
  lamb = loadImage('images/lamb.png');
  for (let i = 0; i < 3; i++) { //repeats an action a certain amt of times
    flowers[i] = loadImage(`images/flower${i}.png`); //{i} reprsents the number; label your img correctly!
  }
}

function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  //populating the page (50 is the amt of objects on page), pushses it to the array
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 150);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  cursor(ARROW);
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    //bubbles[i].move();
    bubbles[i].show();
    bubbles[i].hover(mouseX, mouseY);
  }
}

//CLASS!!!!!
class Bubble { //group of flowers
  constructor(x, y, r, img) { //wow a skeleton blueprint <3
    this.x = x;
    this.y = y;
    this.r = r;
    this.flower = random(flowers); //randomize flower img
  }

  clicked(px, py) { //METHOD
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      //look for the area the image is considering image mode being centered
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      this.flower = lamb; //random(flowers); //change img to lamb
    }
  }

  hover(px,py){ //METHOD
    if (
      //look for the area the image is considering image mode being centered
      px > this.x-this.r/2 &&
      px < this.x + this.r/2 &&
      py > this.y-this.r/2 &&
      py < this.y + this.r/2
    ) {
      cursor('grab');
      this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
    }
  }

  move() { //METHOD
    // this.x = this.x + random(-2, 2);
    // this.y = this.y + random(-2, 2);
    // ^ shaking

    //rotate based on cursor
    // let angle = atan2(mouseY - this.y, mouseX - this.x);
    // rotate(angle);
  }

  show() { //METHOD

    image(this.flower, this.x , this.y, this.r, this.r);
    
    // push();
    // translate(this.x, this.y);
    // this.move();
    // imageMode(CENTER);
    // image(this.flower, 0 , 0, this.r, this.r);
    // pop();
  }

}



function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
  background(0)

}