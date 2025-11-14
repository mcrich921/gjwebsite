import { motion } from "framer-motion";

interface NavbarProps {
  isVisible: boolean;
  isEnabled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible, isEnabled }) => {
  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const handleScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="fixed top-10 right-16 z-40"
    >
      <ul className="flex flex-col space-y-3 text-left">
        <motion.li variants={itemVariants}>
          {isEnabled ? (
            <a
              href="#projects"
              onClick={handleScroll("projects")}
              className="text-lg hover:text-blue-500 transition-colors"
            >
              projects
            </a>
          ) : (
            <div className="text-lg cursor-default">projects</div>
          )}
        </motion.li>
        <motion.li variants={itemVariants}>
          {isEnabled ? (
            <a
              href="#reel"
              onClick={handleScroll("reel")}
              className="text-lg hover:text-blue-500 transition-colors"
            >
              reels
            </a>
          ) : (
            <div className="text-lg cursor-default">reels</div>
          )}
        </motion.li>
        <motion.li variants={itemVariants}>
          {isEnabled ? (
            <a
              href="#about"
              onClick={handleScroll("about")}
              className="text-lg hover:text-blue-500 transition-colors"
            >
              about
            </a>
          ) : (
            <div className="text-lg cursor-default">about</div>
          )}
        </motion.li>
        <motion.li variants={itemVariants}>
          {isEnabled ? (
            <a
              href="#contact"
              onClick={handleScroll("contact")}
              className="text-lg hover:text-blue-500 transition-colors"
            >
              contact
            </a>
          ) : (
            <div className="text-lg cursor-default">contact</div>
          )}
        </motion.li>
        <motion.li variants={itemVariants}>
          {isEnabled ? (
            <a
              target="_blank"
              href="google.com"
              className="text-lg hover:text-blue-500 transition-colors"
            >
              tools
            </a>
          ) : (
            <div className="text-lg cursor-default">tools</div>
          )}
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
