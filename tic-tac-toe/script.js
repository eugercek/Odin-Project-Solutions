const personFactory = (name, mark) => {
  const plays = () => (this.currentMark = mark);
  return {
    name,
    mark,
    plays,
  };
};

const gameController = (function () {
  const gameBoard = (function () {
    const board = _loadCells();
    let curMark = 0;

    // Private functions
    function _loadCells() {
      return Array.from(document.getElementsByClassName("cell"));
    }

    const _fillCell = (mark, id) => (board[id].innerText = mark);

    const _setEventListeners = function () {
      for (let cell of board) {
        cell.addEventListener("click", () => {
          _fillCell(marks[curMark], cell.getAttribute("data-id"));
          curMark = curMark == 0 ? 1 : 0;
        });
      }
    };

    // Public functions
    const clear = () => {
      for (let cell of board) {
        cell.innerText = "";
      }
    };

    const setMarks = (marks) => (this.marks = marks);

    // Init
    _loadCells();
    _setEventListeners();

    return { clear, setMarks };
  })();

  // Fields
  const left = personFactory("You", "X");
  const right = personFactory("Enemy", "O");

  // Private Functions
  const setMarks = () => gameBoard.setMarks([left, right].map((p) => p.mark));

  // Public Functions
  const newGame = () => gameBoard.clear();

  // Init
  setMarks();

  return { newGame };
})();
