import React from "react";
import { useState, useEffect } from "react";

export default function Score({teams}) {
    const [clickedTeams, setClickedTeams] = useState([]);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const updatedClickedTeams = teams.filter((team) => team.clicked === true);
        setClickedTeams(updatedClickedTeams);

        if (updatedClickedTeams.length > highScore) {
            setHighScore(updatedClickedTeams.length);
          }
      }, [teams, highScore]);

    return(
        <div className="scoreBoard">
            <div className="currentScore">{clickedTeams.length}</div>
            <div className="highScore">{highScore}</div>
        </div>
    )
}