import React from "react";

export default function Cards({teams}) {
    return(
        <div className="cardsContainer">
            <div>
                {teams.map((team) => (
                    <div key={team.id}>
                        <img src={team.badge}/>
                        <div>{team.teamName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
