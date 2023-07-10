import React from "react";

export default function Cards({teams}) {
    return(
        <div className="cardsContainer">
            {teams.map((team) => (
                <div className="card" key={team.id}>
                    <img className="badge" src={team.badge}/>
                    <div className="teamName">{team.teamName}</div>
                </div>
            ))}
        </div>
    )
}
