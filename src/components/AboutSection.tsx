import React from "react";

const AboutSection: React.FC = () => (
  <div id="about">
    <div className="flex flex-col items-center mb-8 gap-2">
      <h2 className="text-6xl font-normal">about</h2>
    </div>
    <div className="mx-auto w-full max-w-[80%] px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left image placeholder */}
        <div className="md:col-span-4">
          <div className="w-full aspect-[3/4] bg-gray-200 border-2 border-black shadow-md" />
        </div>

        {/* Main copy */}
        <div className="md:col-span-5">
          <p className="text-xl leading-8 text-left">
          I am a filmmaker and visual effects artist based in Brooklyn, NY,
          specializing in compositing, 3D animation, and motion graphics.
          With a background in cinematography, editing, and photography,
          I have honed my skills for pushing technology while leveraging
          classic theory to bring new visuals to life.
          </p>

          <div className="mt-6 text-left">
            <div className="text-4xl font-normal">greg@joblove.com</div>
            <div className="mt-2 space-x-4 text-lg">
              <a className="underline" href="mailto:greg@joblove.com">
                email
              </a>
              <a
                className="underline"
                href="https://www.linkedin.com/in/joblove/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
              <a
                className="underline"
                href="https://www.imdb.com/name/nm16396689/"
                target="_blank"
                rel="noreferrer"
              >
                imdb
              </a>
              <a
                className="underline"
                href="https://www.instagram.com/gregjoblove/"
                target="_blank"
                rel="noreferrer"
              >
                ig
              </a>
            </div>
          </div>

          <div className="mt-12 text-left">
            <div className="text-2xl font-bold mb-3">PRESS</div>
            <ul className="space-y-2">
              <li>
                <a
                  className="underline"
                  href="https://www.insta360.com/blog/creator-stories/insta360-vfx-reality-capture.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Insta360 Creator Stories Blog
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  href="https://www.wesleyan.edu/about/news/2025/02/mag-words-music-and-ai-inside-wesleyans-music-video-production-course.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wesleyan Magazine
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* What I Do box */}
        <div className="md:col-span-3">
          <div className="border-2 border-black">
            <div className="border-b-2 border-black px-4 py-2 text-xl font-bold italic">
              WHAT I DO
            </div>
            <ul className="px-6 py-4 text-left space-y-3">
              <li>- clean up + paint out</li>
              <li>- compositing</li>
              <li>- on-set supervision</li>
              <li>- CG/3D animation</li>
              <li>- motion graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="h-28" />
  </div>
);

export default AboutSection;
