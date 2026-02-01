import React, { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "../utils/projectParse";

interface Media {
  type: "image" | "video";
  url: string;
}

interface LightboxProps {
  project: Project;
  onClose: () => void;
  allProjects?: Project[];
  onNavigate?: (project: Project) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  project,
  onClose,
  allProjects = [],
  onNavigate,
}) => {
  const navigateToProject = (direction: "next" | "prev") => {
    if (!allProjects || allProjects.length <= 1 || !onNavigate) return;

    const currentIndex = allProjects.findIndex(
      (p) => p.shorthand === project.shorthand
    );
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allProjects.length;
    } else {
      newIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
    }

    onNavigate(allProjects[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateToProject("prev");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateToProject("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, navigateToProject, allProjects]);

  // Lock background scroll while lightbox is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Convert project.mediaPath to media array for display
  const media: Media[] = [];

  if (project.mediaPaths) {
    project.mediaPaths.forEach((path) => {
      if (path.includes("webm")) {
        media.push({
          type: "video",
          url: `https://media.gregjoblove.com/${path}`,
        });
      } else {
        media.push({
          type: "image",
          url: `https://media.gregjoblove.com/${path}`,
        });
      }
    });
  }

  // If cover is an Instagram (or other) embed, ensure embed script is loaded and processed
  const embedContainerRef = useRef<HTMLDivElement | null>(null);
  const sanitizedEmbedHtml = useMemo(() => {
    if (project.coverMedia !== "embed" || !project.coverEmbedOrImage) return "";
    // Remove any <script> tags to avoid confusion; we will load/process SDK ourselves
    const withoutScripts = project.coverEmbedOrImage.replace(
      /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
      ""
    );
    return withoutScripts.trim();
  }, [project.coverMedia, project.coverEmbedOrImage]);

  // Attempt to extract the Instagram permalink for fallback link display
  const instagramPermalink = useMemo(() => {
    if (!sanitizedEmbedHtml) return "";
    const anchorMatch = sanitizedEmbedHtml.match(/href="([^"]+)"/i);
    return anchorMatch ? anchorMatch[1] : "";
  }, [sanitizedEmbedHtml]);

  useEffect(() => {
    if (project.coverMedia !== "embed" || !sanitizedEmbedHtml) return;

    const processEmbeds = () => {
      const inst = (window as any).instgrm;
      if (inst && inst.Embeds && typeof inst.Embeds.process === "function") {
        // Scope processing to our container to be safe
        inst.Embeds.process(embedContainerRef.current || undefined);
      }
    };

    const existing = document.querySelector(
      'script[src*="instagram.com/embed.js"]'
    ) as HTMLScriptElement | null;

    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => {
        // Process embeds once SDK is ready
        processEmbeds();
        // Retry processing in case first pass occurs before layout stabilizes
        setTimeout(processEmbeds, 250);
        setTimeout(processEmbeds, 1000);
      };
      document.body.appendChild(script);
    } else {
      // If script tag exists, try processing (may already be initialized)
      setTimeout(processEmbeds, 50);
      setTimeout(processEmbeds, 250);
      setTimeout(processEmbeds, 1000);
    }
  }, [project.coverMedia, sanitizedEmbedHtml]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:p-8"
      onClick={onClose}
    >
      {/* Content Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="bg-white border-3 border-black w-[1000px] max-h-[80vh] overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation header - fixed at top */}
        <div className="bg-black text-white flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center">
            <button
              className="flex items-center text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateToProject("prev");
              }}
            >
              <span className="mr-2">←</span>
            </button>
            <span className="text-lg font-light italic">
              {project.shorthand}
            </span>
            <button
              className="flex items-center text-white hover:text-gray-300 transition-colors ml-3"
              onClick={(e) => {
                e.stopPropagation();
                navigateToProject("next");
              }}
            >
              <span>→</span>
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-white text-lg font-light hover:opacity-70 p-0.5 transition-opacity"
          >
            esc
          </button>
        </div>

        {/* Scrollable content area */}
        <div
          className="p-8 md:p-12 overflow-y-auto"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(209, 209, 209, 0.5) 10%, transparent 0%)",
            backgroundSize: "20px 20px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 items-start">
            {/* Left Column - Media */}
            <div>
              <div className="aspect-[2/3] mb-4">
                {project.coverMedia === "embed" && sanitizedEmbedHtml ? (
                  <div
                    key={project.shorthand}
                    ref={embedContainerRef}
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{
                      __html: sanitizedEmbedHtml,
                    }}
                  />
                ) : media.length > 0 ? (
                  media[0].type === "video" ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                    >
                      <source src={media[0].url} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={media[0].url}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {project.coverMedia === "embed" && instagramPermalink ? (
                      <a
                        href={instagramPermalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        View this post on Instagram
                      </a>
                    ) : (
                      "No media available"
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="flex flex-col items-start text-left w-full">
              <h2 className="text-6xl font-normal mb-1 leading-none">
                {project.name}
              </h2>
              <div
                className="flex items-center"
                style={{ width: "calc(70% + 40px)" }}
              >
                <p className="text-2xl mb-6 mt-0 leading-tight">
                  {project.year.slice(-4)}
                </p>
                <p className="text-lg font-bold italic mb-6 mt-0 leading-tight ml-auto text-end">
                  {project.role}
                </p>
              </div>

              {/* Project metadata in a bracket-like design */}
              <div className="pl-5 mb-6 relative w-[70%]">
                <div className="absolute left-0 top-0 h-5 w-5 border-l border-t border-gray-500 -mt-1"></div>
                <div className="absolute left-0 bottom-0 h-5 w-5 border-l border-b border-gray-500 -mb-1"></div>
                <div className="absolute -right-10 top-0 h-5 w-5 border-r border-t border-gray-500 -mt-1"></div>
                <div className="absolute -right-10 bottom-0 h-5 w-5 border-r border-b border-gray-500 -mb-1"></div>
                <div className="flex flex-col text-lg">
                  {project.credits.map((credit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="font-bold pr-2">{credit.credit}</div>
                      <div className="flex-grow border-t-3 border-dotted border-black translate-y-1 px-4"></div>
                      <div className="pl-2">
                        {credit.person ? (
                          credit.person.includes("[") ? (
                            <a
                              href={credit.person
                                .split("[")[1]
                                .replace("]", "")}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {credit.person.split("[")[0]}
                            </a>
                          ) : (
                            credit.person
                          )
                        ) : (
                          "—"
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills/tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags &&
                  project.tags.length > 0 &&
                  project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="border border-black bg-white px-4 py-1"
                    >
                      {tag}
                    </div>
                  ))}
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed mb-0">{project.blurb}</p>
            </div>
          </div>

          {/* Additional media section, full width, 2 columns */}
          {media.length > 1 && (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {media.slice(1).map((mediaItem, index) => (
                <div key={index} className="aspect-video w-full">
                  {mediaItem.type === "video" ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={mediaItem.url} type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={mediaItem.url}
                      alt={`${project.name} - ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
