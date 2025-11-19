import { motion } from "framer-motion";

interface MonogramProps {
  isVisible: boolean;
}

const Monogram: React.FC<MonogramProps> = ({ isVisible }) => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileTap={{ scale: 0.98 }}
      className="fixed top-8 left-8 z-40 text-5xl font-bold cursor-pointer select-none"
      onClick={() => scrollToTop()}
    >
      <ul>
        <motion.li variants={itemVariants}>GJ</motion.li>
      </ul>
    </motion.div>
  );
};

export default Monogram;
