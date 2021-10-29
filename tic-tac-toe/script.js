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

    // Private functions
    function _loadCells() {
      return Array.from(document.getElementsByClassName("cell"));
    }

    const _validCell = (id) => {
      if (board[id].innerText != "") {
        return false;
      }

      return true;
    };

    const _fillCell = (mark, id) => (board[id].innerText = mark);

    const _setEventListeners = function () {
      for (let cell of board) {
        const id = cell.getAttribute("data-id");
        cell.addEventListener("click", () => {
          if (_validCell(id)) {
            _fillCell(marks[curMark], cell.getAttribute("data-id"));
            const [gameEnd, type] = isGameEnd();
            if (gameEnd) {
              endScreen(type);
            }
            nextPlayer();
          }
        });
      }
    };

    const isGameEnd = () => {
      const winnerCombinations = [
        // By Row
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // By Column
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // By Diagonal
        [0, 4, 8],
        [2, 4, 6],
      ];

      const curBoard = board.map((e) => e.innerText);

      if (curBoard.every((cell) => cell != "")) {
        return [true, "draw"];
      }

      const same = (indexes) =>
        indexes.every(
          (i) =>
            curBoard[i] == marks[curMark] && curBoard[i] == curBoard[indexes[0]]
        );

      if (winnerCombinations.some((indexes) => same(indexes))) {
        return [true, marks[curMark]];
      }

      return [(false, null)];
    };

    // Public functions
    const clear = () => {
      for (let cell of board) {
        cell.innerText = "";
      }
    };

    // Init
    _loadCells();
    _setEventListeners();

    return { clear };
  })();

  // Fields
  const left = personFactory("You", "X");
  const right = personFactory("Enemy", "O");

  const marks = [left, right].map((p) => p.mark);
  let curMark = 0;

  // Injected Functions
  const nextPlayer = () => (curMark = curMark == 0 ? 1 : 0);
  const endScreen = (type) => {
    if (type == "draw") {
      console.log("Draw");
    } else {
      console.log(`${type} has won!`);
    }
  };

  // Public Functions
  const newGame = () => gameBoard.clear();

  // Init

  return { newGame };
})();
