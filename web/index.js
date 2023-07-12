const unitLength = 70;
const boxColor = 150;
const strokeColor = 50;
let columns; /* To be determined by window width */
let rows; /* To be determined by window height */
let currentBoard;
let nextBoard;
let imgCorgi;
let imgHeart;
let slider;
// let bgColor =(255, 210, 169);
let bgImage;// TODO 3 change background image, image will disappear once clicked

// music
function preload() {
    soundFormats('mp3', 'ogg');
    song = loadSound('FlyMeToTheMoon-Lyrics.mp3');
}

function setup() {

    /* Set the canvas to be under the element #canvas*/
    const canvas = createCanvas(windowWidth, windowHeight - 100);
    // canvas.parent(document.querySelector("#canvas"));
    // background(bgImage);
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

    // frame rate
    slider = createSlider(1, 40, 24);
    slider.position(windowWidth - 500, 100);
    // slider.style('width', '80px');

    // music
    button = createButton("Play Music 🎤");
    button.mousePressed(canvasPressed);

    //image
    imgCorgi = loadImage('corgi.jpg');

    //bgImage
    bgImage = loadImage("game.jpg");

}


/**
 * Initialize/reset the board state
 */

document.querySelector("#random").addEventListener("click", function () {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = random() > 0.8 ? 1 : 0;
            nextBoard[i][j] = 0;
        }
    }
})


function init() {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            currentBoard[i][j] = 0;
            nextBoard[i][j] = 0;
        }
    }
}
// music

function canvasPressed() {
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        button.html("Play Music 🎤");
    } else {
        song.play();
        button.html("Music Stop ▷||");
    }
}


function draw() {

    background(bgImage);
    generate();
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            if (currentBoard[i][j] == 1) {
                stroke(strokeColor);
                fill(255)
                rect(i * unitLength, j * unitLength, unitLength, unitLength);
                image(imgCorgi, i * unitLength, j * unitLength, unitLength, unitLength, 0, 0) ////TODO 2 image - failed to upload image in the box
            } else {
                stroke(strokeColor);
                fill(255)
                rect(i * unitLength, j * unitLength, unitLength, unitLength);
            }
        }
    }
    let frSpeed = slider.value();
    frameRate(frSpeed);
}


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
 * When mouse is pressed reminder //stop //TODO 1 failed to activate the button of stop, resume, reset-game
 */
document.querySelector("#stop").addEventListener("click", function () {
    noLoop();
})

/**
 * When mouse is released //resume
 */
document.querySelector("#resume").addEventListener("click", function () {
    loop();
}
)

//reset;
document.querySelector("#reset-game").addEventListener("click", function () {
    init();
});