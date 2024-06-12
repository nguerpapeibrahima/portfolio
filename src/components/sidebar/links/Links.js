import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed:{
    y: 50,
    opacity: 0,
  }
}
  const items = 
    ["HomePage",
    "Services",
    "Portfolio",
    "About",
    "Contact"]
  

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
    {items.map(item => (
      <motion.a href={`#${item}`} key={item}  itemsVariants={itemsVariants} >{item}</motion.a>
    )
    )}   
    </motion.div>
  );
}

export default Links;
