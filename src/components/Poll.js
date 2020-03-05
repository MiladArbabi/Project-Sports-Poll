/* eslint-disable no-undef */
import React from 'react';
import { PollContext } from './PollContext';
import propTypes from 'prop-types';
import { StyledBtn } from "../Elements";
import useLocalState from '../hooks/useLocalState';

const Poll = () => {
    const [homeWin, setHomeWin] = useLocalState('Home Win', 0);
    const [itsDraw, setDraw] = useLocalState('Draw', 0);
    const [awayWin, setAwayWin] = useLocalState('Away Win', 0);

    return (
        <PollContext.Consumer>
            {(context) => (
                <div>
                    {/* Catch error */}
                    <h3>{context.game.country}</h3>
                    <h3>{context.game.sport}</h3>
                    <h3>{context.game.name}</h3>
                    <h3>{context.game.state}</h3>

                    <form className="options">
                        <StyledBtn onClick={() => setHomeWin(homeWin)}>{context.game.homeName}</StyledBtn>
                        <StyledBtn onClick={() => setDraw(itsDraw)} >Draw</StyledBtn>
                        <StyledBtn onClick={() => setAwayWin(awayWin)} >{context.game.awayName}</StyledBtn>
                    </form>
                </div>
            )}
        </PollContext.Consumer>
    )
};

export default Poll;

Poll.propTypes = ({
    name: propTypes.string,
    country: propTypes.string,
    state: propTypes.string,
    sport: propTypes.string,
    homeName: propTypes.string,
    awayName: propTypes.string,
}).isRequired
