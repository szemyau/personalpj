
let img;
function preload() {
  img = loadImage('starryNight.jpg');
}

function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
createCanvas(windowWidth, windowHeight);

}

function draw () {
  image(img, 0, 0, 1000, 1000);
}

let playButton;
let stopButton;

function setup() {
  createCanvas(100, 100);
  background(0);

  button = createButton('bye me');
  button.position(300, 100);
  button.mousePressed(changeRB);

  buttonOne = createButton('click me');
  buttonOne.position(600, 0);
  buttonOne.mousePressed(changeBG);
}

// function changeRB() {
//   let val = random(40);
//   background(val);

// // use button change background color

// let button;
// let playButton;

// function setup() {
// createCanvas(windowWidth, windowHeight);
// background(0);
//   button = createButton('click me');
//   button.position(0, 0);
//   button.mousePressed(changeBG); // change value's main step

//   playButton = createButton('refresh');
//   playButton.position(90,0)
//   playButton.mousePressed(refreshWeb);
// }

// function changeBG() {
//   let val = color(255,255,255);
//   background(val);
// }

// function refreshWeb(){
//     let val = color(0);
//     background(val);
// }
// // use button change background color

// // use slider to change color

// let colorButton;
// let slider;
// let colorFilter;

// function setup() {
//     createCanvas(windowWidth, windowHeight-100);
//     background(256);
//     colorButton = createButton("CHOOSE YOUR COLOR");
//     colorButton.position(10, windowHeight-10);
//     colorButton.mousePressed(changeColor) // i need to change color, based on the random color function

//     slider = createSlider(1, 100, 30);
//     slider.position(210, windowHeight);
//   }
  
// function changeColor() {
//     colorFilter= color(random(60));
// }

//   function draw() {
//     // console.log("slider:",slider.value());
//     noStroke();
//     if (mouseIsPressed){
//       fill(slider.value(),slider.value(),0)
//     ellipse(mouseX,mouseY,50,50)
//     } else{
//       fill(mouseX,0,0)
//       rect(mouseX,mouseY, 40, 40)
//     }}
// // use slider to change color

//     // let sliderValue = slider.value(colorButton);
//   }

// // dont know how to link with colorbutton and slider
// // changeColor = location of slider
// // slidervalue =

// //color button press slider
// //use slider to change color
// // how to put changecolor value into slider

// // u want to change the color of ellipse & rect by using slider, so their color is not number, 
// //but a slider variable
// // a slider value depends on the mouse pressed

// // let slider;
// // function setup() {
// //   background(0);
// //   slider = createSlider(10, 255, 100);
// //   slider.position(10, 10);
// //   slider.style('width', '80px');
// // }

// // function draw() {
// //   let val = slider.value(200);
// //   background(val);
// // }

// var bgcolor;
// var button;

// function setup() {
//     canvas = createCanvas(200,200);
//     bgcolor = color(200);
//     createP('');
//     button = createButton("go");
//     button.mousePressed(changeColor);

//     createSlider(10, 100, 86)
// }

// function changeColor() {
//     bgcolor = color(random(255));
// }

// function draw(){
//     background(bgcolor);
//     fill(5,0,175);
//     ellipse(100,100,slider.value(),slider.value())
// }