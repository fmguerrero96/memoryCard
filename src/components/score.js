import React from "react";
import { useState, useEffect } from "react";

export default function Score({teams}) {
    const [clickedTeams, setClickedTeams] = useState([]);

    useEffect(() => {
        const updatedClickedTeams = teams.filter((team) => team.clicked === true);
        setClickedTeams(updatedClickedTeams);
      }, [teams]);

    return(
        <div className="scoreBoard">
            <div className="currentScore">{clickedTeams.length}</div>
            <div className="highScore">10</div>
        </div>
    )
}