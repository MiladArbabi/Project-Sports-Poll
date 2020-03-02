import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = ({ title, body, }) => {
    const [isToggled, setToggle] = useState(0);
    return (
        <article>
            <h2 role="button" onClick={() => setToggle(prevState => !prevState)}>
                The Heading
            </h2>
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        style={{overflow: 'hidden'}}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                    <p>
                        Some
                    </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

export default Accordion;
