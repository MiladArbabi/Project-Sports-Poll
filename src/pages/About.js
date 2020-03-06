import React from 'react';
import { Link } from "react-router-dom";
import { MainPageLayout, StyledBtn } from "../Elements";

const About = () => (
    <MainPageLayout>
        <p><center>This is a project created for assessment of Milad React skills by Glomo</center></p>
        <Link to="/">
            <StyledBtn
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
            >
                Back to Home
            </StyledBtn>
        </Link>
    </MainPageLayout>
);

export default About;