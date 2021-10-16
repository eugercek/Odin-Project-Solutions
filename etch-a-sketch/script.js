const board = document.getElementById("board");
const mainButton = document.getElementById("main-button");

const slider = document.getElementById("slider");
const pixelSize = document.getElementById("pixel-size");

const clearButton = document.getElementById("clear-button");

let boardSize = 16; 

function renderBoard() {
  const createRow = () => {
    const createPixel = () => {
      const pix = document.createElement("div");
      pix.className = "pixel";
      return pix;
    };

    const row = document.createElement("div");
    row.className = "board-row";

    for (let i = 0; i < boardSize; i++) {
      const pix = createPixel();
      row.appendChild(pix);
    }
    return row;
  };
  const removeChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  removeChildren(board);

  for (let i = 0; i < boardSize; i++) {
    const row = createRow();
    board.appendChild(row);
  }

  const pixels = board.getElementsByClassName("pixel");

  for (let pixel of pixels) {
    pixel.addEventListener("mouseover", () => fillPixel(pixel));
  }
}

function fillPixel(pixel) {
  pixel.classList.add("pixel-filled");
  pixel.style.border = "1px solid black";
}

mainButton.addEventListener("click", () => {
  boardSize = prompt("Number of pixel in a row:", "16");
  renderBoard();
});

slider.addEventListener("input", (e) => {
  boardSize = e.target.value;
  pixelSize.innerText = boardSize + "x" + boardSize;
  renderBoard();
});

clearButton.addEventListener('click', renderBoard)

window.onload = () => {
  renderBoard();
};
