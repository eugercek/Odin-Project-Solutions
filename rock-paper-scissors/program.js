const form = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const formList = [form.ROCK, form.PAPER, form.SCISSORS];

const end = {
  WIN: "win",
  DRAW: "draw",
  LOSE: "lose",
};

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function playRound(playerSelection) {
  const getResultString = (r) => {
    if (r == end.DRAW) return "Draw!";

    return r == end.LOSE
      ? `You Lose! ${computerSelection} beats ${playerSelection}`
      : `You Win! ${playerSelection} beats ${computerSelection}`;
  };

  const computerSelection = computerPlay();

  const result = engine(playerSelection, computerSelection);

  const resultString = getResultString(result);

  if (result == end.WIN)
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  else if (result == end.LOSE)
    computerScore.textContent = parseInt(computerScore.textContent) + 1;

  roundResult.textContent = resultString;
  roundResult.setAttribute('class', result);
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
    formList.findIndex((x) => x == first) -
    formList.findIndex((x) => x == second);

  const modValue = (delta + formList.length) % formList.length;

  // TODO Find arr length -1 is scalable for other games that has even forms such as rock paper scissors lizard spock

  // Result is relative to the first!
  switch (modValue) {
    case 1:
      return end.WIN;

    case formList.length - 1:
      return end.LOSE;

    default:
      return end.DRAW;
  }
}

function computerPlay() {
  const getRandomInteger = (max) => Math.floor(Math.random() * max);

  const getFormType = (number) => {
    switch (number) {
      case 0:
        return form.ROCK;
      case 1:
        return form.PAPER;
      case 2:
        return form.SCISSORS;
    }
  };

  const index = getRandomInteger(3);

  return getFormType(index);
}

function playerPlay() {
  // return prompt().toLowerCase();
  return 10;
}

rock.addEventListener("click", () => {
  playRound(form.ROCK);
});

paper.addEventListener("click", () => {
  playRound(form.PAPER);
});

scissors.addEventListener("click", () => {
  playRound(form.SCISSORS);
});
