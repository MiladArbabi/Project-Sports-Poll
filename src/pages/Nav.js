import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { NavLinks } from "../Elements";
import { PollContext } from '../components/PollContext';

export const Nav = ({ match: { params, url } }) => (
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
{/* <Link key={context.game.id} to={url.replace(`/${params.id}`, `/${context.game.id}`)}> */ }

export default withRouter(Nav);
