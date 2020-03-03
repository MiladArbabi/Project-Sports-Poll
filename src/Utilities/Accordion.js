import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    open: { opacity: 1, height: "auto"},
    closed: { opacity: 0, height: 0}
}

const Accordion = ({ children }) => {
    const [isToggled, setToggle] = useState(0);
    return (
        <article>
            <h2 role="button" onClick={() => setToggle(prevState => !prevState)}>
                What Will be The Result
            </h2>
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        variants={variants}
                        style={{overflow: 'hidden'}}
                        initial= "closed"
                        animate= "open"
                        exit= "closed"
                    >
                    <p>
                        {children}
                    </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

export default Accordion;
