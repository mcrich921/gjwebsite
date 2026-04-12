import { useEffect, useMemo, useRef, useState } from "react";

const LOGO_FILE_NAMES: string[] = [
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Atlantic.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_BSF.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Corduroy.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_DOLAN.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Edits-etc.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_MAN.webp",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_PO.webp",
  // "https://media.gregjoblove.com/logos/GJ_Client-Logos_Pretend.webp",
];

const getLogoName = (url: string) =>
  url.split("GJ_Client-Logos_")[1]?.replace(".webp", "") ?? url;

// Explicit mapping for logo links (edit these to the real links)
const LOGO_LINKS: Record<string, string> = {
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Atlantic.webp":
    "https://atlanticpictures.com/atlantic-vfx",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_BSF.webp":
    "https://www.youtube.com/@BrightSunFilms",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Corduroy.webp":
    "https://corduroy.studio/",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Edits-etc.webp":
    "https://www.edits-etc.com/",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_MAN.webp":
    "https://makeartnow.com/",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_PO.webp":
    "https://www.publicopinion.nyc/",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_Pretend.webp":
    "https://pretendvfx.com/",
  "https://media.gregjoblove.com/logos/GJ_Client-Logos_DOLAN.webp":
    "https://dolanproduction.com/",
};

const LogosCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const speedPxPerSec = 30;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const logos = useMemo(
    () =>
      LOGO_FILE_NAMES.map((name) => ({
        src: name,
        url: LOGO_LINKS[name],
      })),
    [],
  );

  const sortedLogos = useMemo(
    () =>
      [...logos].sort((a, b) =>
        getLogoName(a.src).localeCompare(getLogoName(b.src)),
      ),
    [logos],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const deltaMs = ts - lastTsRef.current;
      lastTsRef.current = ts;

      const deltaPx = (speedPxPerSec * deltaMs) / 1000;
      el.scrollLeft += deltaPx;

      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    const handleResize = () => {
      const half = el.scrollWidth / 2;
      if (half > 0 && el.scrollLeft >= half) {
        el.scrollLeft = el.scrollLeft % half;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (animationFrameRef.current != null)
        cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", handleResize);
      lastTsRef.current = null;
    };
  }, [isMobile]);

  const doubledLogos = useMemo(() => [...logos, ...logos], [logos]);

  if (isMobile) {
    return (
      <section className="relative max-w-[90%] px-6 py-8 mx-auto">
        <h3 className="italic text-4xl mb-6 text-center">
          frequent collaborators
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {sortedLogos.map((logo, idx) => (
            <a
              key={idx}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Client website"
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt="Client logo"
                className="h-10 object-contain grayscale"
                loading="lazy"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative max-w-[80%] px-6 md:px-10 py-8 mx-auto">
      <h3 className="italic text-4xl mb-6 text-center">
        frequent collaborators
      </h3>
      <div className="relative">
        <div
          ref={scrollerRef}
          className="overflow-hidden"
          aria-label="Client logos carousel auto-scrolling"
        >
          <div className="flex gap-10 mx-8">
            {doubledLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-none flex items-center justify-center"
              >
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Client website"
                >
                  <img
                    src={logo.src}
                    alt="Client logo"
                    className="h-10 md:h-12 object-contain grayscale"
                    loading="lazy"
                    draggable={false}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
