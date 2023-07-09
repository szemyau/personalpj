function setup() {
    // Setup logic here
}

function draw() {
    // draw logic here
}

const unitLength = 20;
const boxColor = 150;
const strokeColor = 50;
let columns; /* To be determined by window width */
let rows; /* To be determined by window height */
let currentBoard;
let nextBoard;

function setup() {
    /* Set the canvas to be under the element #canvas*/
    const canvas = createCanvas(windowWidth, windowHeight - 100);
    canvas.parent(document.querySelector("#canvas"));

    /*Calculate the number of columns and rows */
    columns = floor(width / unitLength);
    rows = floor(height / unitLength);

    /*Making both currentBoard and nextBoard 2-dimensional matrix that has (columns * rows) boxes. */
    currentBoard = [];
    nextBoard = [];
    for (let i = 0; i < columns; i++) {
        currentBoard[i] = [];
        nextBoard[i] = [];
    }
    // Now both currentBoard and nextBoard are array of array of undefined values.
    init(); // Set the initial values of the currentBoard and nextBoard
}

const canvas = createCanvas(windowWidth, windowHeight - 100);
canvas.parent(document.querySelector("#canvas"));

/*Calculate the number of columns and rows */
columns = floor(width / unitLength);
rows = floor(height / unitLength);

currentBoard = [];
nextBoard = [];
for (let i = 0; i < columns; i++) {
  currentBoard[i] = [];
  nextBoard[i] = [];
}
// Now both currentBoard and nextBoard are array of array of undefined values.
init(); // Set the initial values of the currentBoard and nextBoard


/**
 * Initialize/reset the board state
 */
function init() {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        currentBoard[i][j] = 0;
        nextBoard[i][j] = 0;
      }
    }
}

// let someVariables = <condictions> : <when_true> : <when_false>;
currentBoard[i][j] = random() > 0.8 ? 1 : 0; // one line if
nextBoard[i][j] = 0;

function draw() {
    background(255);
    generate();
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (currentBoard[i][j] == 1) {
          fill(boxColor);
        } else {
          fill(255);
        }
        stroke(strokeColor);
        rect(i * unitLength, j * unitLength, unitLength, unitLength);
      }
    }
  }

  background(255);
  generate();

  function generate() {
    //Loop over every single box on the board
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        // Count all living members in the Moore neighborhood(8 boxes surrounding)
        let neighbors = 0;
        for (let i of [-1, 0, 1]) {
          for (let j of [-1, 0, 1]) {
            if (i == 0 && j == 0) {
              // the cell itself is not its own neighbor
              continue;
            }
            // The modulo operator is crucial for wrapping on the edge
            neighbors +=
              currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
          }
        }
  
        // Rules of Life
        if (currentBoard[x][y] == 1 && neighbors < 2) {
          // Die of Loneliness
          nextBoard[x][y] = 0;
        } else if (currentBoard[x][y] == 1 && neighbors > 3) {
          // Die of Overpopulation
          nextBoard[x][y] = 0;
        } else if (currentBoard[x][y] == 0 && neighbors == 3) {
          // New life due to Reproduction
          nextBoard[x][y] = 1;
        } else {
          // Stasis
          nextBoard[x][y] = currentBoard[x][y];
        }
      }
    }
  
    // Swap the nextBoard to be the current Board
    [currentBoard, nextBoard] = [nextBoard, currentBoard];
  }

  // Count all living members in the Moore neighborhood(8 boxes surrounding)
let neighbors = 0;
for (let i of [-1, 0, 1]) {
  for (let j of [-1, 0, 1]) {
    if (i == 0 && j == 0) {
      // the cell itself is not its own neighbor
      continue;
    }
    // The modulo operator is crucial for wrapping on the edge
    neighbors +=
      currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
  }
}

for (let i of [-1, 0, 1]) {
    for (let j of [-1, 0, 1]) {
      if (i == 0 && j == 0) {
        // the cell itself is not its own neighbor
        continue;
      }
      // rest of the code.
    }
  }

  // Rules of Life
if (currentBoard[x][y] == 1 && neighbors < 2) {
    // Die of Loneliness
    nextBoard[x][y] = 0;
  } else if (currentBoard[x][y] == 1 && neighbors > 3) {
    // Die of Overpopulation
    nextBoard[x][y] = 0;
  } else if (currentBoard[x][y] == 0 && neighbors == 3) {
    // New life due to Reproduction
    nextBoard[x][y] = 1;
  } else {
    // Stasis
    nextBoard[x][y] = currentBoard[x][y];
  }

  // Swap the nextBoard to be the current Board
[currentBoard, nextBoard] = [nextBoard, currentBoard];

/**
 * When mouse is dragged
 */
function mouseDragged() {
    /**
     * If the mouse coordinate is outside the board
     */
    if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
      return;
    }
    const x = Math.floor(mouseX / unitLength);
    const y = Math.floor(mouseY / unitLength);
    currentBoard[x][y] = 1;
    fill(boxColor);
    stroke(strokeColor);
    rect(x * unitLength, y * unitLength, unitLength, unitLength);
  }
  
  /**
   * When mouse is pressed
   */
  function mousePressed() {
    noLoop();
    mouseDragged();
  }
  
  /**
   * When mouse is released
   */
  function mouseReleased() {
    loop();
  }


function mouseDragged() {
  /**
   * If the mouse coordinate is outside the board
   */
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  const x = Math.floor(mouseX / unitLength);
  const y = Math.floor(mouseY / unitLength);
  currentBoard[x][y] = 1;
  fill(boxColor);
  stroke(strokeColor);
  rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

document.querySelector("#reset-game").addEventListener("click", function () {
    init();
  });


// trytrytry

var stop = false;
var frameCount = 0;
var $results = $("#results");
var fps, fpsInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    animate();
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved

function animate() {

    // request another frame

    requestAnimationFrame(animate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here

    }
}

startAnimating(20);
