import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Poll from './components/Poll';
import PollProvider from './components/PollProvider';

import { Card, Container, Header } from "./Elements";
import "./App.css";

const App = () => {
  return (
    <PollProvider>
      <Header>
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
            <Card
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
