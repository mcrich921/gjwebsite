import { useEffect, useMemo, useRef } from "react";

const LOGO_FILE_NAMES: string[] = [
  "GJ_Client-Logos_Atlantic.png",
  "GJ_Client-Logos_BSF.png",
  "GJ_Client-Logos_Corduroy.png",
  "GJ_Client-Logos_Edits-etc.png",
  "GJ_Client-Logos_MAN.png",
  "GJ_Client-Logos_PO.png",
  "GJ_Client-Logos_Pretend.png",
];

const BASE_PREFIX = "/vite-react-test";

const LogosCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const speedPxPerSec = 30;

  const logoSrcs = useMemo(
    () => LOGO_FILE_NAMES.map((name) => `${BASE_PREFIX}/logos/${name}`),
    []
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
  }, []);

  const doubledLogos = useMemo(() => [...logoSrcs, ...logoSrcs], [logoSrcs]);

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
            {doubledLogos.map((src, idx) => (
              <div
                key={idx}
                className="flex-none flex items-center justify-center"
              >
                <img
                  src={src}
                  alt="Client logo"
                  className="h-10 md:h-12 object-contain grayscale"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
