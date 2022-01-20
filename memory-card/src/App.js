import "./App.css";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { nanoid } from "nanoid";
import CardFactory from "./CardFactory";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [cards, setCards] = useState([
    CardFactory("A"),
    CardFactory("B"),
    CardFactory("C"),
    CardFactory("D"),
  ]);

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(
    localStorage.getItem("maxScore") || 0
  );

  function clickCard(event, id) {
    const index = cards.findIndex((c) => c.id === id);

    // Game End
    if (cards[index].clicked) {
      if (score > maxScore) {
        setMaxScore(score);
      }
      setScore(0);
      newGame();
    } else {
      setScore((p) => p + 1);
      const oldArray = [...cards];
      oldArray[index].clicked = true;
      setCards(oldArray);
      shuffleCards();
    }
  }

  useEffect(() => {
    const localMaxScore = localStorage.getItem("maxScore");
    if (localMaxScore < maxScore) {
      localStorage.setItem("maxScore", maxScore);
    }
  }, [maxScore]);

  const cardElements = cards.map((card) => (
    <Card
      content={card.content}
      key={nanoid()}
      handleClick={(event) => clickCard(event, card.id)}
    />
  ));

  // Game State Operations
  function newGame() {
    setCards((p) => p.map((e) => ({ ...e, clicked: false })));
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

export default App;
