import React, { useState } from "react";
import uniqid from 'uniqid'
import Cards from "./components/cards";
//import real from '/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/realMadrid.png'

function App() {

  const [teams, setTeams] = useState([
    {teamName: 'Real Madrid', clicked: false, id: uniqid(), badge: real}, 
    {teamName: 'Milan', clicked: false, id: uniqid(), badge: './badges/milan.png'},
    {teamName: 'Liverpool', clicked: false, id: uniqid(), badge: './badges/liverpool.png'},
    {teamName: 'Bayern', clicked: false, id: uniqid(), badge: './badges/bayern.png'},
    {teamName: 'Barcelona', clicked: false, id: uniqid(), badge: './badges/barcelona.png'},
    {teamName: 'Ajax', clicked: false, id: uniqid(), badge: '/badges/ajax'},
    {teamName: 'Manchester United', clicked: false, id: uniqid(), badge: './badges/manUnited.png'},
    {teamName: 'Inter', clicked: false, id: uniqid(), badge: './badges/inter.png'},
    {teamName: 'Chelsea', clicked: false, id: uniqid(), badge: './badges/chelsea.png'},
    {teamName: 'Juventus', clicked: false, id: uniqid(), badge: './badges/juventus.png'},
    {teamName: 'Porto', clicked: false, id: uniqid(), badge: './badges/porto.png'},
    {teamName: 'Manchester City', clicked: false, id: uniqid(), badge: './badges/manCity.png'},
    {teamName: 'Dortmund', clicked: false, id: uniqid(), badge: './badges/dortmund.png'},
    {teamName: 'Feyenoord', clicked: false, id: uniqid(), badge: './badges/feyenoord.png'},
    {teamName: 'Benfica', clicked: false, id: uniqid(), badge: './badges/benfica.png'},
    {teamName: 'Aston Villa', clicked: false, id: uniqid(), badge: './badges/astonVilla.png'},
    {teamName: 'Crvena Zvezda', clicked: false, id: uniqid(), badge: './badges/crvena.png'},
    {teamName: 'PSV', clicked: false, id: uniqid(), badge: './badges/psv.png'},
    {teamName: 'Celtic', clicked: false, id: uniqid(), badge: './badges/celtic.png'},
  ])

  return (
    <div>
      <Cards teams={teams}/>
    </div>
  );
}

export default App;
