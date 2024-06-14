import './services.scss';
import {  motion, useInView } from 'framer-motion';
import imgCode from './code1.jpg'
import { useRef } from 'react';


const variants = {
  initial:{
    x: -500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition: {
      duration:1,
      staggerChildren:0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const inView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className='services' variants={variants} 
    initial="initial" ref={ref} animate={inView && "animate"}>
    <motion.div className='textContainer' variants={variants}>
      <p>
        I focus on helping your brand grow
          <br/> and move forward
      </p>
      <hr/>
    </motion.div>
    <motion.div className='titleContainer'variants={variants}>
      <div className='title'>
        <img src={imgCode} alt=''/>
        <h1> <motion.b whileHover={{color:"orange"}} >unique</motion.b> Ideas</h1>
         </div>
         <div className='title'>
           <h1> <motion.b whileHover={{color:"orange"}}> For Your</motion.b>Business</h1>
           <button> What We Do?</button>
         </div>   
    </motion.div>
    <motion.div className='listContainer' variants={variants}>
    <motion.div className='box' whileHover={{background:"lightgray", color:"black"}}>
      <h2>Branding</h2>
      <p>
        As a front-end web developer, my primary responsibility
         is to create the visual and interactive aspects of websites 
         and web applications. I transform design mockups into functional
          user interfaces using a combination of HTML, CSS, and JavaScript,
          ensuring that the site is both visually appealing and user-friendly.
      </p>
      <button>Go</button>
      </motion.div>
      <motion.div className='box' whileHover={{background:"lightgray", color:"black"}} variants={variants}>
      <h2>Branding</h2>
      <p>
          I work closely with designers to bring their creative visions to life
          , ensuring that the final product is responsive and performs well on 
          various devices and browsers. My job also involves optimizing web pages
          for speed and efficiency, improving site usability, and implementing best
          practices for accessibility to make sure the content is accessible to all 
          users. 
      </p>
      <button>Go</button>
      </motion.div>
      <motion.div className='box' whileHover={{background:"lightgray", color:"black"}}>
      <h2>Branding</h2>
      <p>
      Additionally, I integrate APIs and other back-end services to ensure
           seamless data flow and interaction within the application. Constantly 
          staying updated with the latest web technologies and trends is crucial in
          my role to deliver cutting-edge solutions. By focusing on the
         user experience and leveraging my technical skills, I contribute to building
        engaging and functional digital experiences.
      </p>
      <button>Go</button>
      </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
