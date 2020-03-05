import styled from "styled-components";
import { motion } from 'framer-motion'

export const Header = styled.header`
  background: var(--black);
  color: white;
  padding: 20px;
  display: flex;
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

export const MainPageLayout = styled.div`
  color: white;
  padding: 20px;
  display: relative;
`;

export const NavLinks = styled(motion.nav)`
    display: flex;
    justify-content: center;
    align-items: center;

  & a {
    font-size: 1rem;
    line-height: 2;
    color: #dfe6e9;
    padding: 1rem 5rem 1rem 3rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
    }
  }
`;

export const Card = styled(motion.div)`
  margin: 5% auto;
  border-radius: 15px;
  padding: 20px;
  width: 75%;
  color: white;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  
  h3 {
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    margin: 5%;
    font-size: 100%;
  }

  :hover {
    box-shadow: 1px 1px 8px rgba(0.3, 0.3, 0.3, 0.7);
    transition: 0.3s;
  }
`;

export const StyledBtn = styled(motion.button)`
  position: relative;
  font-size: 2vmin;
  width: 60%;
  height: 70px;
  margin: 5% 30% 0% 20%;
  cursor: pointer;
  border: ${props =>
    props.primary ? 'var(--purple)' : 'var(--blue)'};
  border-radius: 20%;
  background-color: #232020;
  color: white;
  transition: 0.3s;

  :hover {
    background-color: ${props =>
    props.primary ? 'var(--purple)' : 'var(--blue)'};
    width: 62%;  
    transition: 0.4s;
    } 
  }`
