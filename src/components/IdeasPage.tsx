import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Monogram from "./Monogram";

const IdeasPage: React.FC = () => {
  const [monogramVisible, setMonogramVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setMonogramVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {isMobile && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full md:hidden pointer-events-none z-30"
          style={{
            height: "80px",
            background:
              "linear-gradient(to bottom, white 40%, transparent 100%)",
          }}
        />
      )}

      <Monogram
        isVisible={isMobile || monogramVisible}
        isEnabled={true}
        menuOpen={false}
      />

      <div
        className="homepage-info"
        ref={headerRef}
        style={isMobile ? { display: "none" } : undefined}
      >
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

      <nav
        className="navbar ideas-navbar"
        style={isMobile ? { display: "none" } : undefined}
      >

      </nav>

      <div className="portfolio-body">
        <div className="portfolio-title-section">
          <h1 className="portfolio-main-title" >IDEAS portfolio</h1>
        </div>

        <div className="course-entry" style={{ maxWidth: "700px", margin: "0 auto", paddingBottom: "80px"}}>
            <h3 className="entry-header">IDEAS @ Wesleyan</h3>
            <p className="entry-body">
             The IDEAS (Integrated Design, Engineering, Arts & Society) minor is an interdisciplinary program at Wesleyan University within the College of Design and Engineering Studies (CoDES). It builds a foundation in design and engineering fundamentals and allows for a study concentration in a specific area of interest. My concentration was in computer science, where I explored the use of computer programming and complex software for the purpose of creating art. See some selections of my work in various classes below. And learn more about IDEAS at Wes <a href="https://www.wesleyan.edu/academics/departments/college-design-engineering-studies/programs-of-study/ideas-major.html" target="_blank" style={{ textDecoration: "underline" }}>here</a>.
            </p>
           
            
          </div>

        <div className="toc-section">
          <h2 className="toc-heading">table of contents</h2>
          <nav className="toc-list">
            <a
              className="toc-entry"
              href="#idea170"
              onClick={(e) => handleTocClick(e, "#idea170")}
            >
              <span className="toc-course">IDEA170</span>
              <span className="toc-dots-fill"></span>
              <span className="toc-desc">
                Introduction to Mechanical Design and Engineering
              </span>
            </a>
            <a
              className="toc-entry"
              href="#idea185"
              onClick={(e) => handleTocClick(e, "#idea185")}
            >
              <span className="toc-course">IDEA185</span>
              <span className="toc-dots-fill"></span>
              <span className="toc-desc">Creative Coding</span>
            </a>
            <a
              className="toc-entry"
              href="#idea350"
              onClick={(e) => handleTocClick(e, "#idea350")}
            >
              <span className="toc-course">IDEA350</span>
              <span className="toc-dots-fill"></span>
              <span className="toc-desc">
                Computational Media: Videogame Development
              </span>
            </a>
            <a
              className="toc-entry"
              href="#idea387"
              onClick={(e) => handleTocClick(e, "#idea387")}
            >
              <span className="toc-course">IDEA387</span>
              <span className="toc-dots-fill"></span>
              <span className="toc-desc">
                Virtual Production: The Music Video
              </span>
            </a>
          </nav>
        </div>

        {/* ===== IDEA170 ===== */}
        <div className="course-section" id="idea170">
          <div className="course-title-block">
            <h2 className="course-title">IDEA170</h2>
            <p className="course-subtitle">
              Introduction to Mechanical Design and Engineering
            </p>
          </div>
          <div className="project-header">
            <h2 className="project-title">creating a hopping robot</h2>
            <p className="project-meta">midterm assignment &bull; 2023</p>
          </div>

          <div className="course-content">
            <div className="course-text-col">
              <div className="course-entry">
                <h3 className="entry-header">the goal.</h3>
                <p className="entry-body">
                  Create as streamlined and compact a hopper as possible. My
                  goal for this project remained fairly consistent throughout; I
                  was aiming to create a device that was as small and
                  space-efficient as possible. I had figured from the beginning
                  that the simpler I keep things, the easier I would have moving
                  forward. I also had a drive to keep things aesthetically clean
                  and simple.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the challenges.</h3>
                <p className="entry-body">
                  Creating a compact system led to challenges later in the
                  process, especially when integrating the hopping and timing. A
                  specific example was aligning the rocket igniter with the
                  fishing line at such a small scale. The cost of the small size
                  was the ease of repairability.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the materials.</h3>
                <p className="entry-body">
                  I knew from the start that I could use laser-cut pieces to
                  assemble it, but the functionality of the hopper and timer
                  pieces would be reliant on creative uses of the other
                  materials. I thought about state changes, and about how fast
                  certain objects release stored energy. Springs tend to release
                  this energy quickly. I realized that something like an earplug
                  would release this energy more slowly, in a way that might
                  work for a timer.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the build.</h3>
                <p className="entry-body">
                  I began concepting my entire hopper with cardboard, instead of
                  drawing. <i>(fig.1)</i> Being able to quickly cut up, tape,
                  and assemble was key for me. This strategy also gave me a
                  better sense of geometry and 3D space as opposed to just
                  drawing. I decided on using an earplug for my timer and
                  torsion springs for my hopper early on, so the main goal for
                  me from the start of prototyping was understanding how these
                  components would interact and fit together.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">hopper mechanism.</h3>
                <p className="entry-body">
                  The hopping mechanism relied on the potential energy of just
                  two torsion springs.<i>(fig.2)</i> At first I used hot glue to
                  secure the torsion springs in the laser cut enclosures I
                  created, but this proved to be way too malleable even when
                  dry. My next iteration used epoxy which worked flawlessly. In
                  order to achieve more potential energy, I deformed the springs
                  in such a way that their resting positions were more obtuse
                  than 90 degrees. This way, there is more compression energy
                  stored when they are closed. A fishing line ran through the
                  center of the two torsion springs and held them compressed.
                  <i>(fig.2)</i> This fishing line would then be cut by a rocket
                  igniter. A potential concern I had was that the rotational
                  force into the ground by the torsion springs would lead to
                  inefficiencies, so I left my designs modular to allow for a
                  replacement with a compression spring mechanism down the line.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">timing mechanism.</h3>
                <p className="entry-body">
                  My timer was almost just as simple, being an earplug that
                  would slowly decompress and close a rocket igniter circuit.{" "}
                  <i>(fig.3)</i> I was slightly worried that this mechanism
                  would be too slow for the solid contact that a rocket igniter
                  circuit needs to work effectively, but I decided to test
                  first.
                </p>
              </div>
            </div>

            <div className="course-image-col">
              <h3 className="entry-header">gallery</h3>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/IDEA170_01.webp"
                alt="Cardboard prototype"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>fig.1</strong> - Cardboard prototype structure and
                  pieces.
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/IDEA170_02.webp"
                alt="Hopper and Timer"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>fig.2</strong> - Hopping mechanism made of torsion
                  springs epoxyed in laser cut enclosure.
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/IDEA170_03.webp"
                alt="SolidWorks model"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>fig.3</strong> - Timer mechanism made out of an
                  earplug under a pin (left) that pushes two metal contacts
                  together at the top (right,) closing the circuit on the rocket
                  igniter.
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/IDEA170_04.webp"
                alt="SolidWorks model"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  The final build in CAD, along with the laser cut patterns and
                  an image of the hopper opened up.
                </span>
              </div>
            </div>
          </div>

          <div className="course-entry">
            <h3 className="entry-header">the hop.</h3>
            <p className="entry-body">
              I built my hopper to be as streamlined as possible, and part of
              that is being as reliable as possible. I did my best not to over
              engineer anything, so there were fewer parts that could fail. On
              the day, my hopper hopped 110.8cm. As I set up, I was mindful
              about how much I compressed the earplug, and the temperature of
              the earplug. In my testing, I found these to be the most
              determining factors in how long it takes for the earplug to
              decompress. Having the pin allowed me to know exactly when the
              timer started. From my recollection, it took about 20-30 seconds
              for the timer to go off.
            </p>
          </div>
        </div>

        <div className="spacer"></div>

        {/* ===== IDEA185 ===== */}
        <div className="course-section" id="idea185">
          <div className="course-title-block">
            <h2 className="course-title">IDEA185</h2>
            <p className="course-subtitle">Creative Coding</p>
          </div>
          <div className="course-entry">
            <h3 className="entry-header">projects.</h3>
            <p className="entry-body">
              The syllabus for this course describes it as "a practice-driven
              introduction to design and expression with code." Throughout the
              course I created a number of digital works using the software{" "}
              <a
                href="https://processing.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Processing
              </a>
              , some of which are below.
            </p>
          </div>
          <div className="course-content">
            <div className="course-text-col">
              <h3 className="entry-header">gallery</h3>

              <div className="course-entry">
                <img
                  src="https://media.gregjoblove.com/ideas-portfolio/185_RecognizableImage_a.webp"
                  className="proto-img"
                  alt="Recognizable Image"
                />
                <div className="proto-label-row">
                  <span className="proto-label">
                    <strong>Recognizable Image:</strong> Created an image in
                    code from procedural shapes.
                  </span>
                </div>
                <video
                  autoPlay
                  muted
                  loop
                  className="proto-img"
                  src="https://media.gregjoblove.com/ideas-portfolio/185_BadVolume_a.webm"
                ></video>
                <div className="proto-label-row">
                  <span className="proto-label">
                    <strong>Bad Volume Control:</strong> Assignment was to
                    create an awfully inconvenient way to change volume. My
                    submission involves catching drops corresponding to volume
                    percentage points.
                  </span>
                </div>
                <video
                  autoPlay
                  muted
                  loop
                  className="proto-img"
                  src="https://media.gregjoblove.com/ideas-portfolio/185_FinalGame_a.webm"
                ></video>
                <div className="proto-label-row">
                  <span className="proto-label">
                    <strong>Final Project:</strong> My group and I created a
                    simple video game involving a hungry yet picky shark. I
                    implemented most of the art dynamics and UI.
                  </span>
                </div>
                <video
                  autoPlay
                  muted
                  loop
                  className="proto-img"
                  src="https://media.gregjoblove.com/ideas-portfolio/185_Instrument_a.webm"
                ></video>
                <div className="proto-label-row">
                  <span className="proto-label">
                    <strong>Musical Instrument:</strong> Assignment was to
                    create a unique instrument. My group decided to use the
                    keyboard as the main input device, and the words that it can
                    create as each sounds. Words generate different chords based
                    on length, letters, and other properties.
                  </span>
                </div>
              </div>
            </div>

            <div className="course-image-col">
              <h3 className="entry-header" style={{ visibility: "hidden" }}>
                gallery
              </h3>

              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/185_AudioVisualization_short_a.webm"
              ></video>
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>Audio Visualizer:</strong> A program that accepts an
                  audio file, and creates realtime waveform art.
                </span>
              </div>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/185_Timer_a.webm"
              ></video>
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>Timer:</strong> A simple timer program that accepts an
                  input in seconds and sports an easy to understand visual
                  representation of time remaining.
                </span>
              </div>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/185_SnoopyAnimation.webm"
              ></video>
              <div className="proto-label-row">
                <span className="proto-label">
                  <strong>Growing Garden:</strong> Simple animation of the Great
                  Pumpkin (who is very real.)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        {/* ===== IDEA350 ===== */}
        <div className="course-section" id="idea350">
          <div className="course-title-block">
            <h2 className="course-title">IDEA350</h2>
            <p className="course-subtitle">
              Computational Media: Videogame Development
            </p>
          </div>
          <div className="project-header">
            <h2 className="project-title">
              weekend hackathon game: <i>Burny &amp; Bernie</i>
            </h2>
            <p className="project-meta">
              extracurricular assignment &bull; 2024
            </p>
          </div>
          <a
            href="https://html-classic.itch.zone/html/12776742/Burny%20And%20Bernie/index.html"
            className="site-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Burny and Bernie
          </a>

          <div className="course-content">
            <div className="course-text-col">
              <div className="course-entry">
                <h3 className="entry-header">the game.</h3>
                <p className="entry-body">
                  Burny and Bernie was a game created in a weekend-long
                  hackathon that took place in the early weeks of the class. It
                  was designed to allow us to figure out how to best work
                  together and to get to know each other in a broader sense. We
                  felt that our final product was really solid given the time in
                  which we produced it. My role was as an artist, and I got
                  familiar with the pixel art style and drawing sprite sheets. I
                  created the ice melting animation, and the opening and winning
                  full-screen animations. My role also involved acting as a
                  communicating bridge between the coders and the artists thanks
                  to my background in a more technical side of art.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">credits.</h3>
                <p className="entry-body">
                  Nishant Aggarwal .... Coder
                  <br />
                  Chi Phan...................Coder
                  <br />
                  Cole Bodeman..........Coder
                  <br />
                  Katia Michals............Artist
                  <br />
                  Nagena Latifi............Artist
                  <br />
                  Greg Joblove............Artist
                </p>
              </div>
            </div>

            <div className="course-image-col">
              <h3 className="entry-header">gallery</h3>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/BnB_OpeningAnimation.webm"
              ></video>
              <div className="proto-label-row"></div>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/BnB_Platforms.webm"
              ></video>
              <div className="proto-label-row"></div>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/BnB_Burnie_Wins.webm"
              ></video>
              <div className="proto-label-row"></div>
            </div>
          </div>

          <div className="spacer"></div>

          <div className="project-header">
            <h2 className="project-title">
              final class project: <i>Harmonia</i>
            </h2>
            <p className="project-meta">final assignment &bull; 2024</p>
          </div>
          <a
            href="https://play.unity.com/en/games/d00302a3-caa1-4717-8894-be2044d106ae/build-2"
            className="site-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Harmonia
          </a>

          <div className="course-content">
            <div className="course-text-col">
              <div className="course-entry">
                <h3 className="entry-header">the game.</h3>
                <p className="entry-body">
                  Harmonia was our main project for IDEA350. Working in a team
                  of six, we developed, iterated, and released Harmonia.
                  Harmonia is an educational science game that provides children
                  grades 2-5 intuition about how renewable energy technologies
                  work. In Harmonia, players explore the world around them and
                  play solar and wind power themed games, with the ultimate goal
                  of sustainably improving the world around them. There is a
                  central world that is improved as players complete minigames.
                  Players can choose whether to engage with the Solar Center or
                  the Wind Center first, emphasizing their ability to naturally
                  navigate gameplay through exploration.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the result.</h3>
                <p className="entry-body">
                  As it stands, Harmonia is really more of a central hub world
                  with just two minigames. But, we've built a system here that
                  allows for growth. As more minigames are added, the hub world
                  will grow into a full town, with corners waiting to be
                  explored, and even higher stakes. Minigames can be developed
                  independently and then integrated into the main game world. We
                  put our game to the test at a carnival at McDonough Elementary
                  School. After students played the game, we asked them a few
                  short questions to understand what they had learned and how
                  they felt about the experience. We also had teachers try out
                  the game and participate in brief interviews.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">credits.</h3>
                <p className="entry-body">
                  Nishant Aggarwal .... Coder
                  <br />
                  Chi Phan...................Coder
                  <br />
                  Cole Bodeman..........Coder
                  <br />
                  Katia Michals............Artist
                  <br />
                  Nagena Latifi............Artist
                  <br />
                  Greg Joblove............Artist
                </p>
              </div>

              <img
                src="https://media.gregjoblove.com/ideas-portfolio/Har_Img01a.webp"
                alt="Harmonia screenshot"
                className="proto-img"
              />
              <div className="proto-label-row"></div>
            </div>

            <div className="course-image-col">
              <h3 className="entry-header">gallery</h3>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/ideas-portfolio/Har_Trailer.webm"
              ></video>
              <div className="proto-label-row">
                <span className="proto-label">
                  Game trailer I made, played on a projector at McDonough
                  Elementary School fair.
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/Har_Img02.webp"
                alt="Wind energy minigame screenshot"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  Screenshot from wind energy collection minigame
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/Har_Img04.webp"
                alt="Solar energy minigame screenshot"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  Screenshot from solar energy collection minigame
                </span>
              </div>
              <img
                src="https://media.gregjoblove.com/ideas-portfolio/Har_Img03.webp"
                alt="Player with crown cosmetic"
                className="proto-img"
              />
              <div className="proto-label-row">
                <span className="proto-label">
                  Image of player with crown cosmetic which is gained when games
                  completed.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        {/* ===== IDEA387 ===== */}
        <div className="course-section" id="idea387">
          <div className="course-title-block">
            <h2 className="course-title">IDEA387</h2>
            <p className="course-subtitle">
              Virtual Production: The Music Video
            </p>
          </div>

          <div className="project-header">
            <h2 className="project-title">Wires &amp; Trees music video</h2>
            <p className="project-meta">midterm assignment &bull; 2024</p>
          </div>
          <div style={{ width: "70%", margin: "0 auto" }}>
            <video
              controls
              className="proto-img"
              src="https://media.gregjoblove.com/projects/WiresAndTrees.webm"
            ></video>
          </div>

          <div className="course-content">
            <div className="course-text-col">
              <div className="course-entry">
                <h3 className="entry-header">the premise.</h3>
                <p className="entry-body">
                  When I first heard Brooks' Wires &amp; Trees piece, the
                  narrative hit me pretty quickly. The conversation between
                  nature and technology was apparent and I loved the way in
                  which they each seemed to fight for dominance in the track.
                  The idea of a through-the-vent shot was also an early idea I
                  wanted to incorporate, and ended up building the piece around
                  it.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the tools.</h3>
                <p className="entry-body">
                  The software I used were Blender, Nuke, and Davinci Resolve. I
                  used my Sony A7IV for live action shots on a DJI RS2 loaned
                  from the Wesleyan DDC. I also programmed the DDC's MoCap
                  Studio's lights using ETCnomad software. All the 3D work was
                  done in Blender, and I did a lot of compositing work in Nuke.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the process.</h3>
                <p className="entry-body">
                  Creating this video started with filming the live-action
                  plates first. The live action plates were mostly filmed on
                  Jackson Field with Brooks and his equipment. The "breakdown"
                  shot, where his simulated world cascades, was shot in the
                  MoCap studio at the DDC. I programmed the lights in ETCnomad
                  to mimic the cascading effect I envisioned adding later, so
                  there was practical light on Brooks himself. I also got a 360°
                  HDRI image on Jackson Field, which I then composited in behind
                  him for the first part of the shot.
                  <br />
                  <br />
                  The fully CG scenes I slowly built throughout the course of
                  the process. Many of the assets I got from free online
                  libraries. And the color grading was done in DaVinci Resolve
                  using the film emulation plugin, Dehancer.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the result.</h3>
                <p className="entry-body">
                  Ultimately I was pretty happy with how the final piece turned
                  out. There are some minor technical errors which I didn't end
                  up having time to solve (i.e. a light and c-stand is visible
                  in the first reveal of Brooks.) Furthermore, from a
                  storytelling perspective I think the plot could have been
                  communicated a little more effectively. However, the
                  aesthetics were nearly exactly what I was hoping for. The
                  through-the-vent shot especially turned out how I was hoping
                  it would.
                </p>
              </div>
            </div>

            <div className="course-image-col">
              <h3 className="entry-header">gallery</h3>
              <img
                src="https://media.gregjoblove.com/projects/WT_Still01.webp"
                className="proto-img"
                alt="CG server farm in Blender"
              />
              <p className="proto-caption">
                A fully CG server farm created in Blender.
              </p>
              <video
                autoPlay
                muted
                loop
                className="proto-img"
                src="https://media.gregjoblove.com/projects/WT_Wipe.webm"
              ></video>
              <p className="proto-caption">A before and after wipe.</p>
            </div>
          </div>

          <div className="spacer"></div>

          <div className="project-header">
            <h2 className="project-title">If Only music video</h2>
            <p className="project-meta">final assignment &bull; 2024</p>
          </div>
          <div style={{ width: "70%", margin: "0 auto" }}>
            <video
              controls
              className="proto-img"
              src="https://media.gregjoblove.com/projects/387_Joblove_MusicVideoFinal_a.webm"
            ></video>
          </div>

          <div className="course-content">
            <div className="course-text-col">
              <div className="course-entry">
                <h3 className="entry-header">the premise.</h3>
                <p className="entry-body">
                  The Marias' track reeked of lonesome melancholy and failed
                  ambition. I wanted to run with this idea, focusing on a story
                  that maximized both of these characteristics. An astronaut
                  facing his final moments and reflecting on his legacy. I opted
                  to create nearly all of the video in Blender, incorporating
                  only very few live-action plates. I was hoping to create a
                  video that would punch well above its weight in scale and
                  production quality.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the tools.</h3>
                <p className="entry-body">
                  All 3D work was done inside of Blender with a variety of
                  software plugins. I then rendered these scenes out and did
                  compositing inside of Nuke. Finally, the color process all
                  took place inside of DaVinci Resolve.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the process.</h3>
                <p className="entry-body">
                  I certainly felt like I bit off more than I could chew given
                  the time frame. I found myself struggling to achieve the
                  quality I hoped to in the few weeks we were given. This
                  project was relatively eye-opening to me in terms of how much
                  time a fully 3D video can take when each shot needs to be
                  blocked, animated, lit, rendered, composited, and colored.
                  Furthermore, there were very few cases I reused an environment
                  from one shot to the next, so each shot needed its own
                  environment to be built from scratch.
                  <br />
                  <br />
                  Another major technical challenge was incorporating a
                  photorealistic digital double of myself. My first thought was
                  to somehow project a video of my face onto a 3d scan of my
                  face. That way I would have the photorealism baked in.
                  However, getting the mocap to line up with the recorded
                  footage proved much more difficult than I originally expected.
                  Things like the accuracy of the OptiTrak system in the mocap
                  studio and accounting for lens distortion and perspective
                  shift made it a much more exacting process than I had time
                  for. Ultimately I went down the path of using two techniques:
                  animating a static 3D photogrammetry scan of my face and
                  compositing practically filmed 2D plates into CG shots. The
                  result wasn't perfect but it was better than I would have been
                  able to push the original method in the same time frame.
                </p>
              </div>

              <div className="course-entry">
                <h3 className="entry-header">the result.</h3>
                <p className="entry-body">
                  Despite being such a heavy lift, I am quite happy with the
                  general flow of the piece. I think the slower, more poetic
                  pace works well with the subject matter and the soundtrack.
                </p>
              </div>
            </div>

            <div className="course-image-col"></div>
          </div>
        </div>
      </div>
      {/* end portfolio-body */}

      <div className="footer">
        <p>&copy; 2026 Greg Joblove. All rights reserved.</p>
        <p style={{ fontStyle: "italic" }}>
          Site designed by Greg Joblove, built by{" "}
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/in/matthewrichc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matthew Rich
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default IdeasPage;
