import React from 'react';
import { Link } from "react-router-dom";
import { NavLinks } from "../Elements";

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

export const Nav = () => {
  return (
    <NavLinks
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}>
        <div><Link to="/" >Home</Link></div>
        <div><Link to="/polls/:id" >Polls</Link></div>
        <div><Link to="/about" >About</Link></div>
    </NavLinks>
  )
}
export default Nav;
