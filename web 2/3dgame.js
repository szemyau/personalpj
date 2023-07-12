let song;
let button;
let brightButton;
let nightButton;

// music
function preload() {
    soundFormats('mp3', 'ogg');
    song = loadSound('FlyMeToTheMoon-Lyrics.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    background(255);

    // music
    button=createButton("play");
    button.mousePressed(canvasPressed);
  }
  
  function draw() {
   background(0);
    translate(width/2, height/2);
    stroke(255);
    noStroke();
    for(var o=0; o < 30; o++){
      push();
      rotate(PI/100*2*o)
      for (var i=0; i<100;i++) {
        let r = 400/pow(i,90)
        let deg = o + sin(i/30  + cos(frameCount/40)/30) +frameCount/100 + noise(frameCount/90)
        rotate(deg)
        stroke(i,50,100-o-i/10)
        line(0,0,r,0)
        noStroke()
        fill(i*3,70,100-o-i/10)
        ellipse(0, 0,log(i)*1,1*log(i))
        translate(r,3)
      }
      pop()
    }

  }
  
  // music

function canvasPressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        button.html("play");
    } else {
        song.play();
        button.html("stop");
    }
}