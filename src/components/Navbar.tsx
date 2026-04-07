import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface NavbarProps {
  isVisible: boolean;
  isEnabled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible, isEnabled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
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
      setMenuOpen(false);
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
    { id: "contact", label: "contact", type: "scroll" as const },
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
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-4 h-10"
            aria-label="Toggle menu"
          >
            <span className="flex flex-col items-center justify-center gap-[8px]">
              <span className="w-1 h-1 bg-black block" />
              <span className="w-1 h-1 bg-black block" />
              <span className="w-1 h-1 bg-black block" />
            </span>
          </button>
        </motion.div>
      )}

      {/* Slide-out drawer + overlay — mobile only */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-1/3 min-w-[200px] bg-white z-45 shadow-xl flex flex-col justify-start items-start px-8 pt-[64px]"
              style={{ zIndex: 45 }}
            >
              <ul className="flex flex-col space-y-6 text-left">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {isEnabled ? (
                      item.type === "link" ? (
                        <Link
                          to="/tools"
                          onClick={() => setMenuOpen(false)}
                          className="text-2xl hover:underline transition-colors tools-link"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={`#${item.id}`}
                          onClick={handleScroll(item.id)}
                          className="text-2xl hover:underline transition-colors"
                        >
                          {item.label}
                        </a>
                      )
                    ) : (
                      <div className="text-2xl cursor-default">
                        {item.label}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
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
