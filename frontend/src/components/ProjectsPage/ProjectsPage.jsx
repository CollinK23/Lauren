import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { projects } from "../constants";
import Footer from "../LandingPage/Footer";
import { useTheme } from "../theme-provider";

const apparelProjectIds = [
  "contour",
  "blacktop",
  "free-people",
  "upcycled",
  "myscan",
];
const universityProjectIds = [
  "auro",
  "bottle-opener",
  "luna-light",
  "nectar",
  "glasses",
  "fleur",
];

const ProjectsPage = () => {
  const location = useLocation();
  const { setTheme } = useTheme();
  const isApparelRoute = location.pathname === "/projects/apparel";
  const isUORoute = location.pathname === "/projects/uo";

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  const apparelProjects = apparelProjectIds
    .map((id) => projects[id])
    .filter(Boolean);
  const universityProjects = universityProjectIds
    .map((id) => projects[id])
    .filter(Boolean);

  return (
    <div>
      <header className="top-0 z-50 border-b backdrop-blur">
        <div className="mx-auto flex h-32 w-[90%] items-center justify-between px-8 md:px-12">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Back to landing page"
              onClick={() => {
                window.location.href = "/#work";
              }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 transition hover:bg-foreground hover:text-background"
            >
              <MoveLeft className="h-5 w-5" />
            </button>
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              {isApparelRoute
                ? "APPAREL WORK"
                : isUORoute
                  ? "UNIVERSITY OF OREGON PROJECTS"
                  : "PROJECTS"}
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-col space-y-12 border-x p-8 lg:space-y-16">
        {!isUORoute && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {apparelProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group block overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[10/7] w-full object-cover transition duration-200 ease-out group-hover:brightness-75"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {project.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!isApparelRoute && (
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {universityProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group block overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition duration-200 ease-out group-hover:brightness-75"
                  />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                      {project.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
