import { motion } from "framer-motion";
import "./StaticText.css"; // Import your CSS file

const StaticText = () => {
  return (
    <motion.div
      className="p-4 text-center bg-blue-700 text-white rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <motion.h2
        className="text-xl font-bold glow-effect"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Checkout the Latest Features!
      </motion.h2>
      <motion.p
        className="mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Discover new tools and enhancements designed to improve your experience.
      </motion.p>
    </motion.div>
  );
};

export default StaticText;
