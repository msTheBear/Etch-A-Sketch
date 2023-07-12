function setCurrentColor(newColor) {
    currentColor = newColor;
}

function slider(value) {
    document.getElementById("sliderNumber").innerHTML = value;
}

const colorPicker = document.getElementById("colorPicker");
colorPicker.oninput = (e) => setCurrentColor(e.target.value)

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function generateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let amount = size * size;
    for (let i = 0; i < amount; i++) {

        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.addEventListener('mousedown', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        generateBoard(input);
    }
}

function colorSquare() {
    if (mouseDown) {
        this.style.backgroundColor = colorPicker.value;
    }
}

function changeColor(choice) {
    color = choice;
}

function reset() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

generateBoard(16);