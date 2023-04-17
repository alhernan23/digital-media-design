let days = [];

// let weather, mood, desire;
let wake, food, activity;

let enter, entered;

let body = document.getElementById('html-body');

let spacex = 0;
let spacey = 0;

function setup() {
  // make the div called "mySketch" a p5.js canvas element
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('mySketch');

  enter = createButton('enter');
  enter.id('enter')
  entered = document.getElementById('enter');
  body.appendChild(entered);
  enter.mousePressed(add);

  background(0);





}

function draw() {

  // weather = document.getElementById('weather').value;
  // mood = document.getElementById('mood').value;
  // desire = document.getElementById('desire').value;

  wake = document.getElementById('wake').value;
  food = document.getElementById('food').value;
  activity = document.getElementById('activity').value;

}

function windowResized() {
  // resize the canvas when the screen is resized.
  resizeCanvas(windowWidth, windowHeight);
}

function glyph(){
  //WEATHER
  // if (weather == "sunny"){
  //   fill(235, 219, 52)
  // } else if ( weather == "gloomy"){
  //   fill(64, 59, 156)
  // }
  // noStroke();
  // rect(350+spacex, 400+spacey, 100, 100)

  if (wake == "late"){
    fill(235, 219, 52)
  } else if ( wake == "early"){
    fill(64, 59, 156)
  }else if (wake == "on time"){
    fill(64, 50, 16)
  }
  noStroke();
  rect(350+spacex, 400+spacey, 100, 100)

  //MOOD
  // if (mood == 'happy'){
  //   fill(255, 0, 247)
  // } else if (mood == 'sad'){
  //   fill(31, 96, 181)
  // }
  // noStroke();
  // ellipse(300+spacex, 400+spacey, 100, 100)

  if (food == 'breakfast'){
    fill(255, 0, 247)
  } else if (food == 'lunch'){
    fill(31, 96, 181)
  } else if (food == 'dinner'){
    fill(14, 39, 103)
  }
  noStroke();
  ellipse(300+spacex, 400+spacey, 100, 100)

  //DESIRE
  // if(desire == "hug"){
  //   stroke(87, 112, 250)
  // }else if (desire == "sleep"){
  //   stroke(17, 6, 145)
  // } else if(desire =="nature"){
  //   stroke(25, 97, 17)
  // }
  // strokeWeight(10);
  // line(250+spacex, 300+spacey, 450+spacex, 500+spacey)

  if(activity == "exercise"){
    stroke(87, 112, 250)
  }else if (activity == "sleep"){
    stroke(17, 6, 145)
  } else if(activity =="do work"){
    stroke(25, 97, 17)
  }
  strokeWeight(10);
  line(250+spacex, 300+spacey, 450+spacex, 500+spacey)
  
  spacex += 200;
  if(spacex > 1000){
    spacex = 0;
    spacey += 200;
  }



}

function add() {
  days.push({
    date: Date(),
    // weather: weather,
    // mood: mood,
    // desire: desire
    wake: wake,
    food: food,
    activity: activity
  })
  console.log(days);
  console.log("day submitted")

  glyph();
}