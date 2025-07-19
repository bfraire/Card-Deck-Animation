import { useState } from "react";
import { motion } from "framer-motion";

function Flashcard({ content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="p-6 bg-gray-100 rounded-lg shadow-md border border-gray-200 cursor-pointer"
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsExpanded(!isExpanded)}
      animate={{
        scale: isExpanded ? 1.2 : 1,
        zIndex: isExpanded ? 10 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <p className="text-gray-600 py-16 text-4xl font-bold">{content}</p>
    </motion.div>
  );
}

export default Flashcard;
