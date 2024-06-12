import { motion } from "framer-motion";

const ToggleButton = ({setOpen}) => {
  return (
   <button onClick={() =>setOpen((setOpen) => !setOpen) }>
    <svg viewBox='0 0 23 23' width='23' height="23">
      <motion.path stroke-width='3' stroke='black'  stroke-linecap='round'
        variants={{
          closed: {d: "M 2 2.5 L 20 2.5"},
          open:   {d: "M 3 16.5 L 17 2.5"}
        }}
      />
      <motion.path stroke-width='3' stroke='black'  stroke-linecap='round' 
        d=  "M 2 9.423 L 20 9.423"
        variants={{
          closed: {opacity: 1},
          open:   { opacity: 0},
        }}
      />
      <motion.path stroke-width='3' stroke='black'  stroke-linecap='round'
        variants={{
          closed: {d: "M 2 16.349 L 20 16.349"},
          open:   {d: "M 3 2.5 l 17 16.349"}
        }}
      />
    </svg>

   </button>
  );
}

export default ToggleButton;
