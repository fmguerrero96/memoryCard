import React, { useState } from "react";
import uniqid from 'uniqid'
import _ from 'lodash'
import Cards from "./components/cards";
import real from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/realMadrid.png"
import milan from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/milan.png"
import liverpool from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/liverpool.png"
import bayern from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/bayern.png"
import barcelona from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/barcelona.png"
import ajax from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/ajax.png"
import manUnited from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/manUnited.png"
import inter from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/inter.png"
import chelsea from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/chelsea.png"
import juventus from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/juventus.png"
import porto from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/porto.png"
import dortmund from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/dortmund.png"
import feyenoord from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/feyenoord.png"
import benfica from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/benfica.png"
import psv from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/psv.png"
import celtic from "/Users/misaelguerrero/Desktop/odinRepos/memory-card/src/badges/celtic.png" 

function App() {

  const [teams, setTeams] = useState([
    {teamName: 'Real Madrid', clicked: false, id: uniqid(), badge: real}, 
    {teamName: 'Milan', clicked: false, id: uniqid(), badge: milan},
    {teamName: 'Liverpool', clicked: false, id: uniqid(), badge: liverpool},
    {teamName: 'Bayern', clicked: false, id: uniqid(), badge: bayern},
    {teamName: 'Barcelona', clicked: false, id: uniqid(), badge: barcelona},
    {teamName: 'Ajax', clicked: false, id: uniqid(), badge: ajax},
    {teamName: 'Manchester United', clicked: false, id: uniqid(), badge: manUnited},
    {teamName: 'Inter', clicked: false, id: uniqid(), badge: inter},
    {teamName: 'Chelsea', clicked: false, id: uniqid(), badge: chelsea},
    {teamName: 'Juventus', clicked: false, id: uniqid(), badge: juventus},
    {teamName: 'Porto', clicked: false, id: uniqid(), badge: porto},
    {teamName: 'Dortmund', clicked: false, id: uniqid(), badge: dortmund},
    {teamName: 'Feyenoord', clicked: false, id: uniqid(), badge: feyenoord},
    {teamName: 'Benfica', clicked: false, id: uniqid(), badge: benfica},
    {teamName: 'PSV', clicked: false, id: uniqid(), badge: psv},
    {teamName: 'Celtic', clicked: false, id: uniqid(), badge: celtic},
  ])

  function handleShuffle() {
    let newTeams = [...teams]
    let shuffledTeams = _.shuffle(newTeams)
    setTeams(shuffledTeams)
  }

  return (
    <div>
      <button onClick={handleShuffle}>shuffle</button>
      <Cards teams={teams}/>
    </div>
  );
}

export default App;
