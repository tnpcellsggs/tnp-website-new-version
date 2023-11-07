import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
// function returning function
const SectionWrapper = (Component, idName) =>
    function HOC() {
        const style = {
            maxWidth: '85rem'
        }
        return (
            <>
                <motion.section
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`mx-auto relative z-0  py-2 my-2 w-[95%]`}
                    // style={style}
                >
                    <Component />
                </motion.section>
            </>
        )
    }

export default SectionWrapper;