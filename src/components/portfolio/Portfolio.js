import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import img1 from './pexels-hiteshchoudhary-879109.jpg';
import img2 from './pexels-kindelmedia-6994321.jpg';
import img3 from './pexels-realtoughcandy-11035363.jpg';
import img4 from './pexels-weavehall-collective-746895245-18617923.jpg';

const items = [
  {
    id: 1,
    title: "Amazon Ecommerce",
    image: img1,
    desc: "Building an eCommerce website involves creating a user-friendly platform where customers can browse and purchase products seamlessly.",
  },
  {
    id: 2,
    title: "Reactjs",
    image: img2,
    desc: "Building an eCommerce website involves creating a user-friendly platform where customers can browse and purchase products seamlessly.",
  },
  {
    id: 3,
    title: "Javascript",
    image: img3,
    desc: "Building an eCommerce website involves creating a user-friendly platform where customers can browse and purchase products seamlessly.",
  },
  {
    id: 4,
    title: "HTML",
    image: img4,
    desc: "Building an eCommerce website involves creating a user-friendly platform where customers can browse and purchase products seamlessly.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <motion.img src={item.image} alt={item.title} style={{ y }} />
          </div>
          <div className='textContainer'>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div className='progressBar' style={{ scaleX }} />
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
