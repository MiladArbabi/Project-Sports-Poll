import React from 'react';
import { Link, withRouter } from "react-router-dom";

import { PollContext } from '../components/PollContext';
import { MainPageLayout, StyledBtn } from "../Elements";

const Home = ({ match: { params, url } }) => (
    <PollContext.Consumer>
        {(context) => (
            <MainPageLayout>
                <h2><center>Click Below To Start The Polling Application</center></h2>
                <Link to={`/polls/${context.game.id}`}>
                    <StyledBtn
                        // Change url based on previewed card 
                        onClick={() => url.replace(`/${params.id}`, `/${context.game.id}`)}
                        whileTap={{ scale: 0.8 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        BEGIN
                    </StyledBtn>
                </Link>
            </MainPageLayout>
        )}
    </PollContext.Consumer>
)

export default withRouter(Home);