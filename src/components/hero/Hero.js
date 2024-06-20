import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import scrollImg from './icons8-scroll-down.gif';
import papa from './cv papa -.png';
import './hero.scss';
import Contact from '../conatct/Contact'; // Ensure the correct import path
import Parallax from '../parallax/Parallax';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';

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
      staggerChildren: 1,
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
    <div>
      <div className='hero'>
        <div className='wrapper'>
          <motion.div className='textContainer' variants={testVariants} initial="initial" animate="animate">
            <motion.h2 variants={testVariants}>PAPE IBRAHIMA NGUER</motion.h2>
            <motion.h1 variants={testVariants}>Web developer and UI designer</motion.h1>
            <motion.div variants={testVariants} className='buttons'>
              <motion.button variants={testVariants}>See the Later Works</motion.button>
              <Link to='/contact'>
                <motion.button variants={testVariants}>Contact Me</motion.button>
              </Link>
            </motion.div>
            <motion.img variants={testVariants} animate="scrollButton" src={scrollImg} alt='' />
          </motion.div>
        </div>
        <motion.div className='slidingTextContainer' variants={sidetVariants} initial="initial" animate="animate">
          SOFTWARE ENGINEER
        </motion.div>
        <div className='imageContainer'>
          <img src={papa} alt='' />
        </div>
      </div>
      <section id='About'><Parallax type="services" /></section>
      <About />
      <section id='Portfolio'><Parallax type='portfolio' /></section>
      <section id='Services'><Services /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
    </div>
  );
};

export default Hero;
