import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const useLocalState = localStorageKey => {
  const [value, setValue] = useState(localStorage.getItem(localStorageKey));

  const setLoc = (newItem) => {
    localStorage.setItem(localStorageKey, newItem);
    setValue(newItem);
  };
  return [value, setLoc];
};

const PollOptions = ({ homeName, awayName, draw }) => {
  const [homeWin, setHomeWin] = useLocalState('Home Win' || 0);
  const [itsDraw, setDraw] = useLocalState('Draw');
  const [awayWin, setAwayWin] = useLocalState('Away Win');

  const increment = (currentValue) => parseInt(currentValue);
  
  return (
    <form className="options">
      <StyledBtn onClick={() => setHomeWin(increment(homeWin))} > {homeName} </StyledBtn>
      <StyledBtn onClick={() => setDraw(1)} value={itsDraw} > {draw} Draw </StyledBtn>
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