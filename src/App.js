import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Poll from './components/Poll';
import PollProvider from './components/PollProvider';

import Nav from './Utilities/Nav';
import Accordion from './Utilities/Accordion';
import Menu from './Utilities/Menu';

import { Card, Container, Header } from "./Elements";
import "./App.css";

const App = () => {
  const [isToggled, setToggle] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <PollProvider>
      <Header>
        <Menu onClick={() => setNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        Glomo - Sport Polling Application
      </Header>
      <Container>
        <AnimatePresence>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
          <button onClick={() => setToggle(prevValue => !prevValue)}>
            Toggle
        </button>
          <Card
            whileHover={{ scale: 1.02}}
            style={{ background: "var(--purp)" }}
          >
            <Poll />
          </Card>
            </motion.div>
        </AnimatePresence>
      </Container>
    </PollProvider>
  );
}

export default App;
