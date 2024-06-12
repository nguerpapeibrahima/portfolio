import './services.scss';
import { motion } from 'framer-motion';
import imgCode from './code1.jpg'

const Services = () => {
  return (
    <motion.div className='services'>
    <motion.div className='textContainer'>
      <p>
        I focus on helping your brand grow
        <br/> and move forward
      </p>
      <hr/>
    </motion.div>
    <motion.div className='titleContainer'>
      <div className='title'>
        <img src={imgCode} alt=''/>
        <h1> <b>unique</b> Ideas</h1>
         </div>
         <div className='title'>
           <h1> <b> For Your</b>Business</h1>
           <button> What We Do?</button>
         </div>   
    </motion.div>
    <motion.div className='listContainer'>
    <div className='box'>
      <h2>Branding</h2>
      <p>
        As a front-end web developer, my primary responsibility
         is to create the visual and interactive aspects of websites 
         and web applications. I transform design mockups into functional
          user interfaces using a combination of HTML, CSS, and JavaScript,
          ensuring that the site is both visually appealing and user-friendly.
      </p>
      <button>Go</button>
      </div>
      <div className='box'>
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
      </div>
      <div className='box'>
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
      </div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
