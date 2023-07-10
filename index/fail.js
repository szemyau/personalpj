const boxSize = 20; //box size
const boxColor = 40; //click-box color
const strokeColor = 226; //邊框color
let columns; /* To be determined by window width */
let rows; /* To be determined by window height */
let currentBoard;
let nextBoard;

function setup() {
    /* Set the canvas to be under the element #canvas*/
    const canvas = createCanvas(windowWidth, windowHeight - 100); //create畫布
    canvas.parent(document.querySelector("#canvas")); //將canvas 擺係top

    /*Calculate the number of columns and rows */
    columns = floor(width / boxSize);
    rows = floor(height / boxSize);

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

/**
 * Initialize/reset the board state
 */
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      currentBoard[i][j] = 0
      currentBoard[i][j] = random() > 0.8 ? 1 : 0
      nextBoard[i][j] = 0
    }
  }
}

function draw() {
    background(255); //設定顏色
    generate();
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            if (currentBoard[x][y] == 1) {
                fill(boxColor); //改變圖形顏色 if hv life
            } else {
                fill(255);
            }
            stroke(strokeColor);
            rect(x * boxSize, y * boxSize, boxSize, boxSize);
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

/**
 * When mouse is dragged
 */
function mouseDragged() {
    /**
     * If the mouse coordinate is outside the board
     */
    if (mouseX > boxSize * columns || mouseY > boxSize * rows) {
      return;
    }
    const x = Math.floor(mouseX / boxSize);
    const y = Math.floor(mouseY / boxSize);
    currentBoard[x][y] = 1;
    fill(boxColor);
    stroke(strokeColor);
    rect(x * boxSize, y * boxSize, boxSize, boxSize);
  }
  
  /**
   * When mouse is pressed
   */
  function mousePressed() {  //當下滑鼠是否有點擊事件
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
    if (mouseX > boxSize * columns || mouseY > boxSize * rows) {
      return;
    }
    const x = Math.floor(mouseX / boxSize);
    const y = Math.floor(mouseY / boxSize);
    currentBoard[x][y] = 1;
    fill(boxColor);
    stroke(strokeColor);
    rect(x * boxSize, y * boxSize, boxSize, boxSize);
  }

  document.querySelector("#reset-game").addEventListener("click", function () {
    init();
  });

// self
// function setup(){
//   frameRate(30);
// }

// 我們希望在點擊的當下，繪製出不同的形狀，只要在隨時更新的 draw() 當中加上判斷式 if(mouseIsPressed){繪製我要的圖形} 就可以了。