import React, { useState } from "react";
import uniqid from 'uniqid'
import Cards from "./components/cards";

function App() {

  const [teams, setTeams] = useState([
    {teamName: 'Real Madrid', clicked: false, id: uniqid(),}, 
    {teamName: 'Milan', clicked: false, id: uniqid(),},
    {teamName: 'Liverpool', clicked: false, id: uniqid(),},
    {teamName: 'Bayern', clicked: false, id: uniqid(),},
    {teamName: 'Barcelona', clicked: false, id: uniqid(),},
    {teamName: 'Ajax', clicked: false,},
    {teamName: 'Manchester United', clicked: false, id: uniqid(),},
    {teamName: 'Inter', clicked: false, id: uniqid(),},
    {teamName: 'Chelsea', clicked: false, id: uniqid(),},
    {teamName: 'Juventus', clicked: false, id: uniqid(),},
    {teamName: 'Porto', clicked: false,},
    {teamName: 'Manchester City', clicked: false, id: uniqid(),},
    {teamName: 'Dortmund', clicked: false, id: uniqid(),},
    {teamName: 'Feyenoord', clicked: false, id: uniqid(),},
    {teamName: 'Benfica', clicked: false, id: uniqid(),},
    {teamName: 'Aston Villa', clicked: false, id: uniqid(),},
    {teamName: 'Crvena Zvezda', clicked: false, id: uniqid(),},
    {teamName: 'PSV', clicked: false, id: uniqid(),},
    {teamName: 'Celtic', clicked: false, id: uniqid(),},
  ])

  return (
    <div>
      <Cards teams={teams}/>
    </div>
  );
}

export default App;
