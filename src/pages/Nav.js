import React from 'react';
import { Link } from "react-router-dom";
import { NavLinks } from "../Elements";
import { PollContext } from '../components/PollContext';

export const Nav = () => (
  <PollContext.Consumer>
  {(context) => (
    <NavLinks>
      <Link to="/" >Home</Link>
      <Link to={`/polls/${context.game.id}`} >Polls</Link>
      <Link to="/about">About</Link>
    </NavLinks>
  )}
  </PollContext.Consumer>
)

export default Nav;
