import {motion} from 'framer-motion';
import './hero.scss';

const testVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 60,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1, // Fix typo here: staggerChidren -> staggerChildren
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    }
  }
};

const sidetVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};



const Hero = () => {
  return (
    <div className='hero' >
      <div className='wrapper'>
        <motion.div className='textContainer'variants={testVariants} initial="initial" animate="animate">
          <motion.h2 variants={testVariants} >PAPE IBRAHIMA NGUER</motion.h2>
          <motion.h1 variants={testVariants} >Web developer and UI designer</motion.h1>
        <motion.div variants={testVariants}  className='buttons'>
          <motion.button variants={testVariants} >See the Later Works</motion.button>
          <motion.button variants={testVariants} >Contact Me</motion.button>
        </motion.div>
          <motion.img variants={testVariants} animate="scrollButton" src='./assets/icons8-scroll-down.gif' alt=''/>
        </motion.div>
        </div>
        <motion.div className='slidingTextContainer' variants={sidetVariants} initial="initial" animate="animate">
          SOFTWARE ENGENEER 
        </motion.div>
      <div className='imageContainer'>
        <img src='./assets/cv papa -.png' alt=''/>
      </div> 
    </div>
  );
};

export default Hero;
