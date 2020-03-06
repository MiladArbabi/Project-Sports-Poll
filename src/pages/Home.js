import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import { PollContext } from '../components/PollContext';
import { MainPageLayout, StyledBtn } from "../Elements";

const Home = ({ match: { params, url } }) => (
    <PollContext.Consumer>
        {(context) => (
            <MainPageLayout>
                <h2><center>Click Below To Start The Polling Application</center></h2>
                <Link to={`/polls/${context.game.id}`}>
                    <StyledBtn
                        onClick={() => url.replace(`/${params.id}`, `/${context.game.id}`)}
                        whileTap={{ scale: 0.8 }}
                    >
                        BEGIN
                    </StyledBtn>
                </Link>
            </MainPageLayout>
        )}
    </PollContext.Consumer>
)

export default withRouter(Home);