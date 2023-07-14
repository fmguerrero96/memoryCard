import React from "react";

export default function Score({highScore, score}) {
   
    return(
        <div className="scoreBoard">
            <div className="currentScore">Current Score: {score}</div>
            <div className="highScore">High Score: {highScore}</div>
        </div>
    )
}