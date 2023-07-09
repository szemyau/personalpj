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

let img;

function preload() {
  img = loadImage('https://cdn.pixabay.com/photo/2019/06/16/01/45/moon-4276774_1280.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0); // Display the image on the canvas
  background(139, 58, 30);
}

function draw() {
  rect(mouseX, mouseY, 80); // Draw the rectangle on top of the image
}