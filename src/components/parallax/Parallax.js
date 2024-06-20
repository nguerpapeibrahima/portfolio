import React, { useRef } from 'react';
import './parallax.scss';
import { useScroll, useTransform, motion } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "About me" : "What We Did"}
        
      </motion.h1>
      <motion.div className="mountains" style={{ y: yBg }}></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ y: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
