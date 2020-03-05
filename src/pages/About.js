import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div>
            <h1><center>This is a project created for assessment of Milad React skills by Glomo</center></h1>
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Link to="/">
                    <a>Back to Home</a>
                </Link>
            </motion.div>

        </div>
    )
};

export default About;