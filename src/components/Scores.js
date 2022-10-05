import React from "react";
import "../styles/scores.css";

function Scores(props) {
  const { currentScore, highestScore } = props;

  return (
    <div className="scorebar">
      <div className="current-score">
        <h3>CURRENT</h3>
        <p>{currentScore}</p>
      </div>
      <div className="highest-score">
        <h3>HIGHEST</h3>
        <p>{highestScore}</p>
      </div>
    </div>
  );
}

export default Scores;
