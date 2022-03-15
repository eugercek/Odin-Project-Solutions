import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { nanoid } from "nanoid";
import CardFactory from "./CardFactory";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [cards, setCards] = useState(() => initialCardArray());

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(
    localStorage.getItem("maxScore") || 0
  );

  function clickCard(event, id) {
    const card = cards.find((c) => c.id === id);

    // Game end
    if (card.haveClicked) {
      if (score > maxScore) {
        setMaxScore(score);
      }
      setScore(0);
      lose();
    } else {
      setScore((p) => p + 1);

      if (
        (cards.length === 3 && score === 2) ||
        score - consecutive(cards.length - 1) === cards.length - 1
      ) {
        win();
      }
      // New round with same cards
      else {
        setCards((p) =>
          p.map((o) => (o.id === id ? { ...o, haveClicked: true } : o))
        );
        shuffleCards();
      }
    }
  }

  const cardElements = cards.map((card) => (
    <Card
      content={card.content}
      key={nanoid()}
      handleClick={(event) => clickCard(event, card.id)}
    />
  ));

  // Game State Operations
  function win() {
    setCards([...cards.map((c) => CardFactory()), CardFactory()]);
  }

  function lose() {
    setCards(initialCardArray());
  }

  function shuffleCards() {
    // https://flaviocopes.com/how-to-shuffle-array-javascript/
    setCards((p) => p.sort(() => Math.random() - 0.5));
  }

  return (
    <div className="app">
      <ScoreBoard score={score} maxScore={maxScore} />
      <div className="cards">{cardElements}</div>
    </div>
  );
}

function initialCardArray() {
  return [CardFactory(), CardFactory(), CardFactory()];
}

// returns: 1 + 2 + ... + n
function consecutive(n) {
  return (n * (n + 1)) / 2;
}
export default App;
