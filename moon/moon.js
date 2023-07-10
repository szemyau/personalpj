// // function setup() {
// //     createCanvas(windowWidth, windowHeight);
// //     background(139,58,30);
// //   }
  
// //   function draw() {
// //     rect(mouseX, mouseY, 80);
// //   }

// let bg;
// let y = 15;

// function setup() {
//   // 背景图像的大小必须和 createCanvas() 函数中的参数一样。
//   // 该图像大小为 720x400 像素。
//   bg = loadImage('https://cdn.pixabay.com/photo/2019/06/16/01/45/moon-4276774_1280.jpg');
//   createCanvas(1000, 800);
// }

// function draw() {
//   background(bg);
//   rect(mouseX, mouseY, 10);
//   stroke(226, 204, 0);
//   // line(0, y, width, y);

//   // y++;
//   // if (y > height) {
//   //   y = 0;
//   // }
// }

// let img;

// function preload() {
//   img = loadImage('https://cdn.pixabay.com/photo/2019/06/16/01/45/moon-4276774_1280.jpg');
// }

// function draw() {
//   rect(mouseX, mouseY, 80); // Draw the rectangle on top of the image
// }

// function mousePressed() {
//     clear();
//     background();
//     describe(
//       'canvas is cleared, small white ellipse is drawn at mouse X and mouse Y'
//     );
//   }

let song;

function setup() {
  createCanvas(200, 200);
  background(51);
  song = loadSound("file:///Users/szeszeyau/Desktop/project/%20FlyMeToTheMoon%20Lyrics.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function loaded() {
  console.log("loaded");
}

function togglePlaying () {
  if (!song.isPlaying ()) {
    song.play();
    song.setVolume(0.3)
    button.html("pause")
  } else {
    song.pause();
    button.html("play");
  }}


// }-
// function draw() {
//   background(220); // set the background color
//   ellipse(mouseX, mouseY, 50, 50); // draw a circle at the mouse position
// }

// let ele;
// function setup() {
//   ele = createAudio('/moon/ FlyMeToTheMoon Lyrics.mp3');
//   ele.play(true);
//   // here we set the element to autoplay
//   // The element will play as soon
//   // as it is able to do so.
//   // ele.autoplay(true);
// }

let button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(0, 0);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(256);
  background(val);
}