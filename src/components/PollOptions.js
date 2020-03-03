import React, { useState } from 'react'
import styled from 'styled-components';

const PollOptions = ({ homeName, awayName, draw }) => {
    const [homeWin, setHomeWin] = useState('Home Win', 'hi');
    console.log("PollOptions -> homeWin", homeWin)
    const [itsDraw, setDraw] = useState('Draw', 0);
    console.log("PollOptions -> itsDraw", itsDraw)
    const [awayWin, setAwayWin] = useState('Away Win', 0);
    console.log("PollOptions -> awayWin", awayWin)

    return (
        <form className="options">
            <StyledBtn onClick={() => setHomeWin(homeWin)} value={homeWin}> {homeName} </StyledBtn>
            <StyledBtn onClick={() => setDraw(itsDraw)} value={itsDraw} > {draw} Draw </StyledBtn>
            <StyledBtn onClick={() => setAwayWin('Away Win')} value={awayWin}> {awayName} </StyledBtn>
        </form>
    )
}

export default PollOptions;

const StyledBtn = styled.button`
  position: static;
  font-size: 2.6vmin;
  cursor: pointer;
  margin: 10px;
  width: 50%;
  border: ${props =>
        props.primary ? '2px solid violet' : '2px solid palevioletred'};
  border-radius: 20%;
  background-color: #232020;
  color: white;
  border-style: dotted;
  transition: 0.2s;


  :hover {
    background-color: ${props =>
        props.primary ? 'violet' : 'palevioletred'};
    color: white; 
    width: 70%;  
    transition: 0.6s;
    } 
  }`