import React from "react";

export default function Cards({teams}) {
    return(
        <div className="cardsContainer">
            {teams.map((team) => (
                <div key={team.id}>{team.teamName}</div>
            ))}
        </div>
    )
}
