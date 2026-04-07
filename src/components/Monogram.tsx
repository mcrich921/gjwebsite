import { motion } from "framer-motion";

interface MonogramProps {
  isVisible: boolean;
  isEnabled: boolean;
  onClick?: () => void;
  menuOpen?: boolean;
}

const Monogram: React.FC<MonogramProps> = ({
  isVisible,
  isEnabled,
  onClick,
  menuOpen = false,
}) => {
  const fadeVariants = {
    hidden: { opacity: 0, transition: { duration: 0 } },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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
      className={`fixed top-8 left-8 max-[768px]:top-[8px] max-[768px]:left-[8px] z-50 text-5xl font-bold cursor-pointer select-none transition-colors duration-200 ${menuOpen ? "text-white" : "text-black"}`}
    >
      <ul>
        {isEnabled ? (
          <motion.li variants={itemVariants} onClick={onClick ?? scrollToTop}>
            GJ
          </motion.li>
        ) : (
          <motion.li variants={itemVariants} className="cursor-default">
            GJ
          </motion.li>
        )}
      </ul>
    </motion.div>
  );
};

export default Monogram;
