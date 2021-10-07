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

const GAME_NUMBER = 5;

let scores = [];

function game() {
  for (let i = 0; i < GAME_NUMBER; i++) {
    const { result, resultString } = playRound(playerPlay(), computerPlay());
    consoleDisplay(resultString);
    scores.push(result);
  }
  consoleReport();
}

function playRound(playerSelection, computerSelection) {
  const getResultString = (r) => {
    if (r == end.DRAW) return "Draw!";

    return r == end.LOSE
      ? `You Lose! ${computerSelection} beats ${playerSelection}`
      : `You Win! ${playerSelection} beats ${computerSelection}`;
  };

  const result = engine(playerSelection, computerSelection);
  const resultString = getResultString(result);

  return { result, resultString };
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
      return end.win;

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
  return prompt().toLowerCase();
}

function reportScores() {
  const win = scores.filter((x) => x == end.win);
  const lose = scores.filter((x) => x == end.lose);
  const draw = scores.filter((x) => x == end.draw);

  return { win: win, lost: lose, draw: draw };
}

function consoleDisplay(resultString) {
  if (resultString.startsWith("Draw!"))
    console.log(
      "%c" + resultString,
      "padding: 5px; background-color: #9DB4C0 ; color: white;font-size: 2em;"
    );
  else if (resultString.startsWith("You Lose"))
    console.log(
      "%c" + resultString,
      "padding: 5px; background-color: #F15156; color: white;font-size: 2em;"
    );
  else
    console.log(
      "%c" + resultString,
      "padding: 5px; background-color: #7CAE7A; color: white;font-size: 2em;"
    );
}

function consoleReport(obj) {
  console.table(reportScores());
}

game();
