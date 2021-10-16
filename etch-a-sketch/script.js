const board = document.getElementById('board');
const button = document.getElementById('main-button');

let boardValues = {
  row: 16,
  col: 16,
};

function createPixel() {
  const pix = document.createElement('div');
  pix.className = 'pixel';
  return pix;
}

function createRow() {
  const row = document.createElement('div');
  row.className = 'board-row';

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
}

button.addEventListener('click', renderBoard);

renderBoard();