// src/components/links/Links.js
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";


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

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
};

const items = [
  { name: "HomePage", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" }
];

const Links = () => {
  return (
    <motion.div className='links' variants={variants} initial="closed" animate="open">
      {items.map(item => (
        <motion.div key={item.name} variants={itemVariants}>
          <NavLink to={item.path} activeClassName="active" className="navLink">
            {item.name}
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
