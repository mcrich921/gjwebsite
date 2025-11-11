import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Project, parseProjects } from "../utils/projectParse";

interface ProjectsSectionProps {
  variants: any;
  itemVariants: any;
  onSelectProject?: (project: Project) => void;
  projects?: Project[];
  filmProjects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  itemVariants,
  onSelectProject,
  projects: passedProjects,
  filmProjects: passedFilmProjects,
}) => {
  // track selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filmProjects, setFilmProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (passedProjects && passedProjects.length > 0) {
      setProjects(passedProjects);
      setLoading(false);
    } else {
      parseProjects("/vite-react-test/gjprojects.csv")
        .then((data) => {
          setProjects(data);
        })
        .catch((err) => {
          console.error("Error parsing projects:", err);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [passedProjects]);

  useEffect(() => {
    if (passedFilmProjects && passedFilmProjects.length > 0) {
      setFilmProjects(passedFilmProjects);
      setLoading(false);
    } else {
      parseProjects("/vite-react-test/gjfilm+tv.csv")
        .then((data) => {
          setFilmProjects(data);
        })
        .catch((err) => {
          console.error("Error parsing film+tv projects:", err);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }
  }, [passedFilmProjects]);

  const toggleCategory = (cate: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cate) ? prev.filter((c) => c !== cate) : [...prev, cate]
    );
  };

  const handleProjectClick = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  // filter list based on selected categories
  const filteredProjects =
    selectedCategories.length > 0
      ? projects.filter(
          (p) => p.category && selectedCategories.includes(p.category)
        )
      : projects;

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error loading projects: {error}</div>;

  return (
    <div id="projects">
      <div className="flex flex-col items-center mb-8 gap-2">
        <h2 className="text-6xl font-normal">work</h2>
        <a
          href="/vite-react-test/gjresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 underline italic"
        >
          resume
        </a>
      </div>

      {/* Projects list */}
      <div className="relative px-4 md:px-10 py-8 max-w-[80%] mx-auto">
        <h3 className="italic text-4xl mb-4 text-left">projects</h3>
        {/* Category filters */}
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="vfx-filter"
              checked={selectedCategories.includes("VFX")}
              onChange={() => toggleCategory("VFX")}
              className="w-4 h-4"
            />
            <label htmlFor="vfx-filter" className="text-md font-bold italic">
              VFX
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="mograph-filter"
              checked={selectedCategories.includes("MoGraph")}
              onChange={() => toggleCategory("MoGraph")}
              className="w-4 h-4"
            />
            <label
              htmlFor="mograph-filter"
              className="text-md font-bold italic"
            >
              MoGraph
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer inline-block mx-6 text-xl font-normal my-4"
              onClick={() => handleProjectClick(project)}
            >
              {project.name}
              {/* {project.credits.find((credit) => credit.credit === "Client")
                ? ` (${
                    project.credits.find((credit) => credit.credit === "Client")
                      ?.person
                  })`
                : ""} */}
              {project.subtitle ? ` (${project.subtitle})` : ""}
              <sup className="align-super text-sm ml-1">
                {project.year.slice(-4)}
              </sup>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Film + TV Projects list*/}
      <div className="relative px-4 md:px-10 py-8 max-w-[80%] mx-auto">
        <h3 className="italic text-4xl mb-4 text-left">film + tv</h3>

        <div className="flex flex-wrap justify-center">
          {filmProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ opacity: 0.7 }}
              className="cursor-pointer inline-block mx-4 text-xl font-normal my-2"
              onClick={() => handleProjectClick(project)}
            >
              {project.name}
              {/* {project.credits.find((credit) => credit.credit === "Client")
                ? ` (${
                    project.credits.find((credit) => credit.credit === "Client")
                      ?.person
                  })`
                : ""} */}
              {project.subtitle ? ` (${project.subtitle})` : ""}
              <sup className="align-super text-sm ml-1">
                {project.year.slice(-4)}
              </sup>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
