import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="min-h-screen">
    {/* Site header — same as ToolsPage */}
    <div className="homepage-info">
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

    {/* 404 content */}
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "100vh", marginTop: "-4rem" }}
    >
      <div className="relative flex items-center justify-center">
        <span
          className="select-none font-thin"
          style={{
            fontSize: "10vw",
            color: "rgba(0,0,0,0.07)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          404
        </span>
        <p className="absolute text-sm font-bold tracking-widest uppercase whitespace-nowrap">
          That page or project doesn&apos;t exist!
        </p>
      </div>
      <Link to="/" className="mt-6 text-sm">
        home
      </Link>
    </div>
  </div>
);

export default NotFound;
