import React from 'react';
import { Header } from "../Elements";
import Nav from './Nav';

const Layout = ({ children }) => (
  <div>
    <Header>
      <Nav />
      <title>Home</title>
    </Header>
    <body>
      <main> {children} </main>
    </body>
  </div>
);

export default Layout;