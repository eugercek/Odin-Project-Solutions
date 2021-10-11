import { FORM, FORM_LIST, END } from "./constants.js";

const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const roundResultElem = document.getElementById("round-result");

const rockElem = document.getElementById("rock");
const paperElem = document.getElementById("paper");
const scissorsElem = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const getResultString = (r) => {
    if (r == END.DRAW) return "Draw!";

    return r == END.win
      ? `You Win! ${playerSelection} beats ${computerSelection}`
      : `You Lose! ${computerSelection} beats ${playerSelection}`;
  };

  const computerSelection = computerPlay();

  const result = engine(playerSelection, computerSelection);

  const resultString = getResultString(result);

  if (result == END.WIN) playerScore++;
  else if (result == END.LOSE) computerScore++;

  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;

  roundResultElem.textContent = resultString;
  roundResultElem.setAttribute("class", result);
}

function engine(first, second) {
  /*
   * ROCK PAPER SCISSORS
   * 0    1     2
   *
   * Every form is inferior to its left and superior to its right.
   *
   * Lose scenarios
   * They are 2(mod 3)
   * r - p = -1
   * p - s = -1
   * s - r = 2
   *
   *
   * Win scenarios
   * They are 1 (mod3)
   * p - r = 1
   * s - p = 1
   * r -s = -2
   */

  const delta =
    FORM_LIST.findIndex((x) => x == first) -
    FORM_LIST.findIndex((x) => x == second);

  const modValue = (delta + FORM_LIST.length) % FORM_LIST.length;

  // TODO Find arr length -1 is scalable for other games that has even forms such as rock paper scissors lizard spock

  // Result is relative to the first!
  switch (modValue) {
    case 1:
      return END.WIN;

    case FORM_LIST.length - 1:
      return END.LOSE;

    default:
      return END.DRAW;
  }
}

function computerPlay() {
  const getRandomInteger = (max) => Math.floor(Math.random() * max);

  const getFormType = (number) => {
    switch (number) {
      case 0:
        return FORM.ROCK;
      case 1:
        return FORM.PAPER;
      case 2:
        return FORM.SCISSORS;
    }
  };

  const index = getRandomInteger(FORM_LIST.length);

  return getFormType(index);
}

function game() {
  function gameSetup() {
    rockElem.addEventListener("click", () => playRound(FORM.ROCK));
    paperElem.addEventListener("click", () => playRound(FORM.PAPER));
    scissorsElem.addEventListener("click", () => playRound(FORM.SCISSORS));
  }

  gameSetup();
}

game();