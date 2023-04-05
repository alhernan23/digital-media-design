//GLOBAL VARIABLES HERE AT THE TOP
let input, button, result, question, submit, answer;

// let c;

let Answer1;

let colorInput = document.getElementById('color-input');

let yesNo = document.getElementById('yes-no');

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');


    //TYPE A COLOR RESPONSE
    result = createElement('p', 'type "blue"');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    //putting it in the div "color-input"
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    //CREATING THE INPUT
    input = createInput('');
    input.id('question');

    //putting it in the div "color-input"
    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    //putting it in the div "color-input"
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  

  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function output() {
  //const is like a substitute for let
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  //putting it in the div "color-input"
  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  Answer1.innerHTML = answers;

  if (answers == "blue"){ //can change it to accomodate with case sensitivity 
    background(0,0,255);
    Answer1.innerHTML = "very good. you are blue, and only blue";
    //a link will appear for the next page
    let a = createA('page2.html', 'next');
    a.id('next');
    colorInput.appendChild(next);
    // c = color(230, 66, 245);
    // circles();
  // } else if (answers == "red"){
  //   background(255,0,0);
  //   Answer1.innerHTML = answers;
  // } else if (answers == "green"){
  //   background(0,255,0);
  //   // c = color(255, 220, 66);
  //   // circles();
  //   Answer1.innerHTML = answers;
  // } else if (answers == "magenta"){
  //   background(255,0,255);
  //   Answer1.innerHTML == answers;
  } else {
    background(255,0,0);
    Answer1.innerHTML = "HOW DARE YOU. TYPE IN ONLY THE COLOR BLUE, NO OTHER COLOR";
  }
}

// function circles(){
//   fill(c);
//   ellipse(200,200,200,200);
// }
