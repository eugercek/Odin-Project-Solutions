export default function ScoreBoard({ score, maxScore }) {
  return (
    <div className="scoreboard">
      <h3>{score}</h3>
      <h5>{maxScore}</h5>
    </div>
  );
}
