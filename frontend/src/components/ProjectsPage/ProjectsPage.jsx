import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, MoveLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../constants";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import { useTheme } from "../theme-provider";
import Spacer from "../LandingPage/Spacer";
import Bento from "../LandingPage/Bento";

const apparelProjectIds = ["contour", "blacktop", "free-people", "upcycled"];
const universityProjectIds = [
  "myscan",
  "auro",
  "bottle-opener",
  "luna-light",
  "nectar",
  "glasses",
];

const ProjectsPage = () => {
  const location = useLocation();
  const { setTheme } = useTheme();
  const scrollRef = useRef(null);
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

  const scrollCarousel = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.querySelector("[data-project-card]");
    if (!firstCard) return;

    const gap = 24;
    const scrollAmount = firstCard.getBoundingClientRect().width + gap;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const renderCarousel = (projectList) => (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => scrollCarousel(-1)}
        aria-label="Previous projects"
        className="absolute left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 lg:flex lg:left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollCarousel(1)}
        aria-label="Next projects"
        className="absolute right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 lg:flex lg:right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex flex-col gap-6 overflow-x-auto lg:px-14 px-8 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-20 lg:flex-row"
      >
        {projectList.map((project) => (
          <Link
            key={project.id}
            data-project-card
            to={`/projects/${project.id}`}
            className="group relative block w-full shrink-0 overflow-hidden rounded-xl border bg-muted lg:w-[min(46vw,560px)]"
          >
            <p className="absolute right-4 top-4 z-10 rounded-lg bg-background/75 px-3 py-1 text-sm backdrop-blur-sm">
              {project.year}
            </p>
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[5/4] w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-75"
                style={{ objectPosition: project.imageAlign || "center" }}
              />
            </div>

            <div className="flex items-end justify-between gap-4 px-4 py-4">
              <div className="w-full">
                <div className="flex flex-row justify-between gap-4">
                  <span className="mt-2 block text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {project.thumbnailDescription}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div
        className={`min-h-[100vh] lg:py-24 py-20 ${!isApparelRoute && !isUORoute ? "lg:px-16 px-8" : ""}`}
      >
        {isApparelRoute || isUORoute ? (
          <header className="lg:px-16 px-8">
            <Link
              to="/projects"
              className="flex w-fit items-center gap-2 text-xs transition hover:opacity-60 text-muted-foreground"
            >
              <MoveLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            <div className="mx-auto flex items-center justify-between lg:text-[6vw] text-[10vw]">
              <h1 className="font-semibold tracking-tight ">
                {isApparelRoute ? "APPAREL WORK" : "PRODUCT DESIGN"}
              </h1>
            </div>
          </header>
        ) : null}
        <div className="mx-auto flex flex-col">
          {!isApparelRoute && !isUORoute ? (
            <Bento
              projectTitleClassName="lg:text-[6vw] text-[10vw] lg:text-left text-center"
              heightClassName="min-h-[100vh]"
            />
          ) : (
            <div className="">
              {!isUORoute && renderCarousel(apparelProjects)}
              {!isApparelRoute && renderCarousel(universityProjects)}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
