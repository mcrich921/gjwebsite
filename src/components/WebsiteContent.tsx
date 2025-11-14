import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import Navbar from "./Navbar";
import ProjectsSection from "./ProjectsSection";
import { Project, parseProjects } from "../utils/projectParse";
import Hero from "./Hero";
import LogosCarousel from "./LogosCarousel";
import Reels from "./Reels";
import AboutSection from "./AboutSection";
import HorizontalLightbox from "./HorizontalLightbox";
interface WebsiteContentProps {
  isVisible: boolean;
}

const WebsiteContent: React.FC<WebsiteContentProps> = ({ isVisible }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filmProjects, setFilmProjects] = useState<Project[]>([]);
  const [hideHero, setHideHero] = useState<boolean>(false);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  // Fetch all projects on component mount
  useEffect(() => {
    parseProjects("/vite-react-test/gjprojects.csv")
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error("Error parsing projects:", err);
      });
  }, []);
  useEffect(() => {
    parseProjects("/vite-react-test/gjfilm+tv.csv")
      .then((data) => {
        setFilmProjects(data);
      })
      .catch((err) => {
        console.error("Error parsing projects:", err);
      });
  }, []);

  // Detect when the content title container aligns with the hero title container top
  useEffect(() => {
    const handle = () => {
      const contentEl = titleContainerRef.current;
      const heroEl = document.querySelector(
        ".hero-title-container"
      ) as HTMLElement | null;
      if (!contentEl) return;
      const contentTop = contentEl.getBoundingClientRect().top;
      const heroTop = heroEl ? heroEl.getBoundingClientRect().top : 0; // fallback
      // Hide when content title container's top reaches or crosses hero title container's top
      setHideHero(contentTop <= heroTop);
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle as EventListener);
      window.removeEventListener("resize", handle as EventListener);
    };
  }, []);

  // Animation variants for the content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  return (
    <div className="relative">
      {/* Navbar appears after hero transitions out */}
      {hideHero && <Navbar isVisible={hideHero} isEnabled={!selectedProject} />}

      {/* Hero Section */}
      <Hero shouldHide={hideHero} />

      <div className="h-120" />
      {/* Main content container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-0 w-screen pt-2 px-0 py-12"
      >
        <div
          className="title-container"
          ref={titleContainerRef}
          style={{
            visibility: hideHero ? "visible" : "hidden",
            pointerEvents: hideHero ? "auto" : "none",
            transition: "none",
          }}
          aria-hidden={!hideHero}
        >
          <h1 className="title" style={{ transform: "scale(0.7)" }}>
            GREG JOBLOVE
          </h1>
          <h2
            className="subtitle"
            style={{ transform: "translateY(-40px) scale(0.7)" }}
          >
            vfx/graphics
          </h2>
          <h2
            className="social-links"
            style={{ transform: "translateY(-25px) scale(0.7)" }}
          >
            <a href="mailto:greg@joblove.com">email</a>
            <a href="https://www.linkedin.com/in/joblove/">linkedin</a>
            <a href="https://www.imdb.com/name/nm16396689/">imdb</a>
            <a href="https://www.instagram.com/gregjoblove/">ig</a>
          </h2>
          {/* Main Video Reel */}
          <motion.section
            variants={itemVariants}
            id="reel"
            className="mb-20 w-[50%] mx-auto"
          >
            <div className="relative aspect-video w-full bg-gray-900 border-3 overflow-hidden mx-auto">
              <video className="w-full h-full object-cover" controls muted>
                <source
                  src="/vite-react-test/videos/2024_General_v7.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="text-lg font-bold text-left ml-2">2025 REEL</h2>
          </motion.section>
        </div>

        {/* Projects Section */}
        <ProjectsSection
          variants={itemVariants}
          itemVariants={itemVariants}
          onSelectProject={setSelectedProject}
          projects={projects}
          filmProjects={filmProjects}
        />

        {/* Client Logos Carousel */}
        <LogosCarousel />

        <div className="h-20" />

        {/* Reels Section */}
        <Reels />

        <AboutSection />

        {/* Lightbox */}
        {selectedProject && (
          <Lightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            allProjects={
              selectedProject &&
              projects.some((p) => p.shorthand === selectedProject.shorthand)
                ? projects
                : filmProjects
            }
            onNavigate={setSelectedProject}
          />
        )}
      </motion.div>
    </div>
  );
};

export default WebsiteContent;
