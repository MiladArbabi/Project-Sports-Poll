import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import Poll from './components/Poll';

import PollProvider from './components/PollProvider';

import { Card, Container } from "./Elements";
import "./App.css";

const App = () => (
  <Router>
    <PollProvider>
      <Layout>
        <Container>
          <AnimatePresence>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ y: 200, opacity: 0 }}
            >
              <Card style={{ background: "var(--purp)" }} >
                <Switch>
                  <Route exact path={'/'} component={Home} />
                  <Route path={'/polls/:id'} component={Poll} />
                  <Route path={'/about'} component={About} />
                </Switch>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Layout>
    </PollProvider>
  </Router>
);

export default App;