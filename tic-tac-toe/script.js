const GameBoard = (function () {
  const board = Array.from(document.getElementsByClassName("cell"));
  let marks = [];

  for (cell of board) {
    cell.addEventListener("click", (e) => console.log(e));
  }

  const resetBoard = () => {
    for (cell of board) {
      board.innerText = empty;
    }
  };

  const setMarks = (arr) => marks.push(...arr);

  return { resetBoard, setMarks, marks };
})();

const personFactory = (name, mark) => {
  return {
    name,
    mark,
  };
};

const left = personFactory("You", "X");
const right = personFactory("You", "O");

GameBoard.setMarks([left.mark, right.mark]);
