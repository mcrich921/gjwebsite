import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface NavbarProps {
  isVisible: boolean;
  isEnabled: boolean;
  onMenuOpenChange?: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isVisible,
  isEnabled,
  onMenuOpenChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenu = (open: boolean) => {
    setMenuOpen(open);
    onMenuOpenChange?.(open);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenu(false);
  }, [isMobile]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
      setMenu(false);
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

  const navItems = [
    { id: "projects", label: "projects", type: "scroll" as const },
    { id: "reels", label: "reels", type: "scroll" as const },
    { id: "about", label: "about", type: "scroll" as const },
    { id: "tools", label: "tools", type: "link" as const },
  ];

  return (
    <>
      {/* Hamburger button — mobile only, always on top */}
      {isMobile && (
        <motion.div
          variants={navVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="fixed top-[8px] right-[12px] z-50"
        >
          <button
            onClick={() => setMenu(!menuOpen)}
            className="flex items-center justify-center p-5 -m-5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col items-center justify-center gap-[8px]">
              <span
                className={`w-1 h-1 rounded-full block transition-colors duration-200 ${menuOpen ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`w-1 h-1 rounded-full block transition-colors duration-200 ${menuOpen ? "bg-white" : "bg-black"}`}
              />
              <span
                className={`w-1 h-1 rounded-full block transition-colors duration-200 ${menuOpen ? "bg-white" : "bg-black"}`}
              />
            </span>
          </button>
        </motion.div>
      )}

      {/* Fullscreen overlay menu — mobile only */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(40, 40, 40, 0.6)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
            onClick={() => setMenu(false)}
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07 } },
              }}
              className="flex flex-col items-center space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { y: 16, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.35 },
                    },
                  }}
                >
                  {isEnabled ? (
                    item.type === "link" ? (
                      <Link
                        to="/tools"
                        onClick={() => setMenu(false)}
                        className="text-3xl text-white hover:underline transition-colors tools-link"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={`#${item.id}`}
                        onClick={handleScroll(item.id)}
                        className="text-3xl text-white hover:underline transition-colors"
                      >
                        {item.label}
                      </a>
                    )
                  ) : (
                    <div className="text-3xl text-white cursor-default">
                      {item.label}
                    </div>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop nav — unchanged */}
      {!isMobile && (
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="fixed top-10 right-16 z-40"
        >
          <ul className="flex flex-col space-y-3 text-left">
            {navItems.map((item) => (
              <motion.li key={item.id} variants={itemVariants}>
                {isEnabled ? (
                  item.type === "link" ? (
                    <Link
                      to="/tools"
                      className="text-lg hover:underline transition-colors tools-link"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.id}`}
                      onClick={handleScroll(item.id)}
                      className="text-lg hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  )
                ) : (
                  <div className="text-lg cursor-default">{item.label}</div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
