import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const A: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    {children}
  </a>
);

const ToolsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="tools-page min-h-screen"
    >
      {/* Site header */}
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

      <div className="body">
        {/* Nav */}
        <nav className="navbar">
          <Link to="/" className="tools-link">
            home
          </Link>
        </nav>

        {/* Welcome */}
        <div
          className="welcome-screen"
          style={{ paddingBottom: "40px", paddingTop: "80px" }}
        >
          <h1
            className="centered-heading"
            style={{ fontSize: "42px", fontWeight: 500 }}
          >
            tools
          </h1>
          <h2
            className="centered-subtitle"
            style={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            A collection of tools, websites, and insights that made my work, and
            the work of millions of other independent artists possible.
          </h2>
        </div>

        {/* Content */}
        <div className="tools-content">
          <p style={{ fontSize: "36px", marginBottom: 0 }}>software / assets</p>
          <p style={{ fontSize: "24px", fontStyle: "italic", margin: "auto" }}>
            free! ↓
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>software</p>

          <p>
            <A href="https://www.blender.org/">Blender</A> – Words cannot
            describe the importance of this 3D software. It is open source and
            it is the future.
          </p>

          <p>
            <A href="https://www.blackmagicdesign.com/products/davinciresolve/">
              DaVinci Resolve
            </A>{" "}
            – Free industry-standard color grading software. Also powerful
            timeline editor, audio mixer, and node-based compositor. Once again,
            the future.
          </p>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>nuke resources</p>
          <p>
            <A href="https://www.nukepedia.com/">Nukepedia</A> – A huge
            collection of some of the most essential plugins for Nuke. And it's
            all free.
          </p>
          <p>
            <A href="https://www.nukeisfun.com/">Nuke is Fun</A> – More really
            creative nuke scripts that would be a shame not to include.
          </p>
          <p>
            <A href="https://www.compositingacademy.com/vfxassets">
              Compositing Academy Assets
            </A>{" "}
            – A collection of free/paid nuke plugins and VFX assets. Some great
            stuff in here if you are big into Nuke.
          </p>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            after effects resources
          </p>
          <p>
            <A href="https://www.videocopilot.net/">Video Copilot</A> – A number
            of essential free plugins for After Effects. Let's be honest, half
            of us built our careers on Andrew Kramer's back.
          </p>
          <p>
            <A href="https://aescripts.com/quick-chromatic-aberration/">
              Quick Chromatic Aberration
            </A>{" "}
            – Free chromatic aberration plugin for After Effects
          </p>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>3D resources</p>
          <p>
            <A href="https://ambientcg.com/">Ambient CG</A> – High quality
            materials, models and HDRIs for renders.
          </p>
          <p>
            <A href="https://polyhaven.com/">Poly Haven</A> – High quality
            HDRIs, with textures and models as well.
          </p>
          <p>
            <A href="https://www.blendswap.com/">Blend Swap</A> – Community of
            3D Blender projects and files.
          </p>
          <p>
            <A href="https://sketchfab.com/">Sketchfab</A> – Huge collection of
            interesting, mostly free 3D models. Mixed bag, but certainly some
            buried treasure.
          </p>
          <p>
            <A href="https://quixel.com/megascans">Quixel</A> – Premium high
            resolution assets free for use in Unreal Engine. Actually an insane
            resource, though since the migration to FAB, it's become harder to
            navigate and less free.
          </p>
          <p>
            <A href="https://dimensions.com/">Dimensions</A> – Resource for
            modeling almost anything.
          </p>
          <p>
            <A href="https://www.mcmaster.com/">McMaster-Carr</A> – Free 3D
            models of random hardware, great for any sort of industrial
            modelling.
          </p>
          <p>
            <A href="https://blenderesse.gumroad.com/">Blenderesse Plugins</A> –
            An incredible collection of blender geo-node setups and assets.
          </p>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>2D resources</p>
          <p>
            <A href="https://texturelabs.org/">TextureLabs</A> – One of the most
            underrated texture sites on the internet. If you are any kind of
            artist, check this out.
          </p>
          <p>
            <A href="https://unsplash.com/">Unsplash</A> – High resolution stock
            photos.
          </p>
          <p>
            <A href="https://www.pexels.com/videos/">Pexels</A> – Free stock
            footage; I normally use as background plates for R&D
          </p>
          <p>
            <A href="https://affiliate.productioncrate.com/joblove">
              Production Crate
            </A>{" "}
            – Compositing resources and Stock Footage. They have a paid tier,
            but plenty of free stuff too. They also have a solid 3D library!
            (Affiliate Link)
          </p>
          <p>
            <A href="https://www.compositingpro.com/free-lens-kernels/">
              Compositing Pro Lens Kernels
            </A>{" "}
            – My go-to library for use with defocus plugins in Nuke or After
            Effects.
          </p>

          <p style={{ fontSize: "16px", fontWeight: "bold" }}>reference</p>
          <p>
            <A href="https://help.shotdeck.com/">Shotdeck</A> – Simply the
            largest and most complete library of film, music video, and
            commercial stills. Maybe a *touch* pricey, but with the student
            discount that remains as long as you are subscribed, well worth it.
          </p>
          <p>
            <A href="https://eyecannndy.com/">EYECANDY</A> – A free and eclectic
            library of gifs from mostly music videos and commercials. Focused
            more on specific "effect shots."
          </p>

          <br />

          <p style={{ fontSize: "24px", fontStyle: "italic" }}>not free* ↓</p>
          <p style={{ fontSize: "12px", fontStyle: "italic", margin: "auto" }}>
            *but independent artists need to get paid
          </p>

          <p>
            <A href="https://triunedigital.com/">Triune Digital</A> – Always
            high quality, a bit addicted to buying their VFX assets and SFX.
          </p>
          <p>
            <A href="https://www.videocopilot.net/">Video Copilot</A> – Their
            paid stuff is just as great as their free stuff. I own Element 3D
            and Optical Flares.
          </p>
          <p>
            <A href="https://www.bracken.design/collections/all-products">
              Bracken Design
            </A>{" "}
            – Can't get enough texture and surface imperfections.
          </p>
          <p>
            <A href="https://clintonjones.gumroad.com/">Clint Jones</A> – Love
            his surface imperfection stuff too.
          </p>
          <p>
            <A href="https://aescripts.com/authors/zaebects/">
              Zaeabects Plugins
            </A>{" "}
            – Great plugins for getting an analog, glitchy look in After
            Effects.
          </p>
          <p>
            <A href="https://kitbash3d.com/">Kitbash Assets</A> – Super nice,
            large scale environment models for use in professional projects.
          </p>
          <p>
            <A href="https://www.dehancer.com/">Dehancer Film Emulation</A> –
            I'm no colorist, and so I use this plugin to quickly make CG renders
            look more natural and polished. (Use code "JOBLOVE" for 10% off.)
          </p>

          <p style={{ fontSize: "36px", marginBottom: 0 }}>tips</p>
          <p style={{ fontSize: "24px", fontStyle: "italic", margin: "auto" }}>
            <em>student discounts ↓</em>
          </p>

          <p>
            <A href="https://www.maxon.net/en/educational-licenses">
              Maxon (Red Giant, C4D, Redshift)
            </A>{" "}
            – 95% Off ($1,265/yr → $60/yr)
          </p>
          <p>
            <A href="https://www.foundry.com/education">
              The Foundry Collective
            </A>{" "}
            – 98% Off ($8,040/yr → $99/yr)
          </p>
          <p>
            <A href="https://www.sidefx.com/buy/#houdini-education">Houdini</A>{" "}
            – 98% Off ($3,369/yr → $75/yr)
          </p>
          <p>
            <A href="https://borisfx.com/store/academic-pricing/">Boris FX</A> –
            FREE ($1,295/yr → $0/yr)
          </p>
          <p>
            <A href="https://www.bhphotovideo.com/find/eduAdvantage.jsp">
              B&H EDU
            </A>{" "}
            – It depends, but sometimes you can snag a few dollars off of camera
            equipment
          </p>
          <p>
            <A href="https://www.notion.com/product/notion-for-education">
              Notion
            </A>{" "}
            – FREE ($120/yr → $0/yr)
          </p>
          <p>
            <A href="https://www.adobe.com/creativecloud/buy/students.html">
              *Adobe Creative Suite
            </A>{" "}
            – 71% Off ($840/yr → $240/yr)
            <br />
            <span style={{ fontSize: "12px", fontStyle: "italic" }}>
              *Learn DaVinci Resolve instead, it's free, and this discount is
              heavily reduced after the first year
            </span>
          </p>
          <p>
            <A href="https://help.shotdeck.com/plans/education-offers/">
              Shotdeck
            </A>{" "}
            – 63% Off ($155/yr → $50/yr)
          </p>

          <br />

          <p style={{ fontSize: "24px", fontStyle: "italic", margin: "auto" }}>
            the sauce ↓
          </p>
          <p style={{ fontStyle: "italic" }}>
            What some of the pros use based on my few months work at a vfx
            studio. A lot of this isn't cheap, but worth knowing nonetheless.
          </p>

          <p>
            <strong>Nuke</strong> – You know it's serious when compositions are
            called "scripts" instead. You also know it's serious when it can
            cost $6,500 a year. They do have a free non-commercial license, and
            a cheaper "indie" license with some limitations. If you're serious
            about compositing, this is kinda what you need.
          </p>
          <p>
            <strong>After Effects</strong> – There is still some need for some
            classic AE once in a while. Nearly all of my motion graphic work is
            done in AE, but it comes in handy when you're dealing with a lot of
            complex animation as well.
          </p>
          <p>
            <strong>Red Giant</strong> – Style effects workhorse for After
            Effects.
          </p>
          <p>
            <strong>Mocha Pro / Syntheyes</strong> – Track literally anything
            with this. Lifesaver in so many situations. (see student discount
            above!)
          </p>
          <p>
            <strong>BorisFX Silhouette</strong> – Professional roto tool.
          </p>
          <p>
            <strong>Neat Video's Denoiser</strong> – The whole compositing
            pipeline rested on the back of this $145 plugin. Every shot was
            denoised before hand, so that comping could be done below a new
            layer of noise and everything was uniform.
          </p>
          <p>
            <strong>DasGrain</strong> – Adds the grain back on top of the
            denoised footage and your comp. Free tool from nukepedia, and the
            industry standard for matching grain.
          </p>
          <p>
            <strong>Blender</strong> – Honestly it often doesn't matter what 3D
            package you use, as long as it can export multi-layer exr sequences,
            you're golden. Though normally Maya and/or Houdini are 3D packages
            of choice.
          </p>

          <p style={{ marginTop: "60px", fontStyle: "italic" }}>
            (If there's anything else you think deserves to be on this list,{" "}
            <A href="mailto:greg@joblove.com">email me!</A>)
          </p>
          <p style={{ fontSize: "14px", fontStyle: "italic" }}>
            Last updated February, 2026
          </p>
        </div>
      </div>

      {/* Footer */}
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

export default ToolsPage;
