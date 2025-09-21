import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const animate_presence = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const removeItem = (id: any) => {
    setItems(items.filter((item) => item !== id));
  };
  return (
    <ul>
        aidf
      <AnimatePresence>
        {items.map((item) => (
          <motion.li
          key={item}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:2}}>
            Items{item}
            <button onClick={() => removeItem(item)}>remove</button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default animate_presence;
