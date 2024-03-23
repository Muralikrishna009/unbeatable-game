import { useEffect } from "react";
import { useState } from "react";

function App() {
  var [score, setScore] = useState(0);
  var storedValue = localStorage.getItem("maxscore");
  var initialValue = storedValue && storedValue > 0 ? parseInt(storedValue) : 0;
  var [maxScore, setMaxScore] = useState(initialValue);

  var [reset, setReset] = useState(1);

  useEffect(() => {
    localStorage.setItem("maxscore", JSON.stringify(maxScore));
  }, [maxScore]);

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  }, [score]);

  function updateScore() {
    if (Math.random() * 100 > reset) {
      setScore((s) => s + 1);
      setReset((r) => r + 1);
    } else {
      setScore(0);
      setReset(0);
    }
  }

  return (
    <>
      <h1 className="title">Unbeatable Game</h1>

      <h2 className="max">Max Score: {maxScore} </h2>

      <div>
        <button onClick={updateScore}>{score}</button>
      </div>

      <ul className="list">
        <li>The current score will be reset at any time randomly.</li>
        <li>
          Score will be increased by 1 for every time you click the button.
        </li>
        <li>For every click the reset chances will also increased by 1.</li>
      </ul>
    </>
  );
}

export default App;
