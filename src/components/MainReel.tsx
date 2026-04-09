import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MEDIA_BASE_URL = "https://media.gregjoblove.com";

const MainReel: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="tools-page min-h-screen"
    >
      {/* Site header */}
      <div className="homepage-info" ref={headerRef}>
        <h1 className="heading">
          <Link to="/">GREG JOBLOVE</Link>
        </h1>
        <div className="subtitle-container">
          <h2 className="subtitle">vfx/graphics</h2>
          <div
            className="link-container"
            style={{ display: "flex", gap: "15px" }}
          >
            <a href="mailto:greg@joblove.com">email</a>
            <a
              href="https://www.linkedin.com/in/joblove/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://www.imdb.com/name/nm16396689/"
              target="_blank"
              rel="noopener noreferrer"
            >
              imdb
            </a>
            <a
              href="https://www.instagram.com/gregjoblove/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ig
            </a>
          </div>
        </div>
      </div>

      <div className="body" style={{ paddingTop: "80px" }}>
        {/* Main Reel */}
        <div
          style={{
            maxWidth: "80%",
            margin: "0 auto",
          }}
        >
          <div className="aspect-video w-full bg-gray-900 border-2 border-black overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
            >
              <source
                src={`${MEDIA_BASE_URL}/reels/2024_General_v7.webm`}
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="text-lg font-bold text-left ml-1 mt-1">2026 REEL</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default MainReel;
