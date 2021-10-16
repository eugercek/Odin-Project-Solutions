const board = document.getElementById("board");
const button = document.getElementById("main-button");

let boardValues = {
  row: 16,
  col: 16,
};

function createPixel() {
  const pix = document.createElement("div");
  pix.className = "pixel";
  return pix;
}

function createRow() {
  const row = document.createElement("div");
  row.className = "board-row";

  for (let i = 0; i < boardValues.row; i++) {
    const pix = createPixel();
    row.appendChild(pix);
  }
  return row;
}

function renderBoard() {
  const removeChildren = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  removeChildren(board);

  for (let i = 0; i < boardValues.col; i++) {
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
}

button.addEventListener("click", () => {
  const row = prompt("Number of pixel in a row:", "16");
  boardValues.row = row;
  boardValues.col = row;
  renderBoard();
});

window.onload = () => {
  renderBoard();
};
