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

function consoleGame() {
  for (let i = 0; i < GAME_NUMBER; i++) {
    const { result, resultString } = playRound(playerPlay(), computerPlay());
    consoleDisplay(resultString);
    scores.push(result);
  }
  consoleReport();
}