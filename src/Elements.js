import styled from "styled-components";

export const Header = styled.header`
  background: var(--black);
  color: white;
  padding: 20px;
  display: flex;
  > svg {
    margin-right: 20px;
  }
  > * {
    margin: 0;
  }
  h1 {
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export const Card = styled.div`
  margin: 5% auto;
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  
  h3 {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 5%;
    font-size: 100%;
  }
  img {
    width: 100%;
  }

  :hover {
    box-shadow: 1px 1px 8px rgba(0.3, 0.3, 0.3, 0.7);
    transition: 0.3s;
  }
`;

export const StyledBtn = styled.button`
  position: relative;
  font-size: 2.5vmin;
  width: 50%;
  margin: 5% 30% 0% 25%;
  cursor: pointer;
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  border-radius: 20%;
  background-color: #232020;
  color: white;
  transition: 0.3s;


  :hover {
    background-color: ${props =>
    props.primary ? 'violet' : 'palevioletred'};
    color: white; 
    width: 53%;  
    transition: 0.4s;
    } 
  }`
