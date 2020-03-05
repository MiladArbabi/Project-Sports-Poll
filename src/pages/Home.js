import React from 'react';
import { StyledBtn } from "../Elements";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div>
            <h1><center>Click Below To Start The Polling Application</center></h1>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Link to="/polls/:id">
                    <StyledBtn>VoteEm</StyledBtn>
                </Link>
            </motion.div>

        </div>
    )
};

export default Home;