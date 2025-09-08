"use client";
import { projects } from "../constants";

const GRID_CONFIG = {
  totalHeight: 1200, // Total height in pixels for column alignment
  gap: 24, // Gap between cards in pixels (gap-6 = 1.5rem = 24px)
};

const calculateCardHeights = () => {
  const { totalHeight, gap } = GRID_CONFIG;

  // Left/Right columns: 2 cards + 1 gap
  const sideColumnHeight = (totalHeight - gap) / 2;

  // Middle column: 3 cards + 2 gaps
  const middleColumnHeight = (totalHeight - 2 * gap) / 3;

  return {
    sideColumn: sideColumnHeight,
    middleColumn: middleColumnHeight,
  };
};

const cardHeights = calculateCardHeights();

const Bento = () => {
  const projectsArray = Object.values(projects);

  // Split projects into columns
  const leftCol = projectsArray.slice(0, 2);
  const middleCol = projectsArray.slice(2, 5);
  const rightCol = projectsArray.slice(5, 7);

  // Reusable card component
  const ProjectCard = ({ project, height }) => (
    <div
      className="flex flex-col bg-foreground px-2 pt-2 rounded-2xl dark:bg-background border"
      style={{ height: `${height}px` }}
    >
      <a
        className="w-full flex-1 overflow-hidden rounded-lg transition-all duration-500"
        href={`/projects/${project?.id}`}
      >
        <img
          src={project?.image || "/placeholder.svg"}
          alt={project?.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </a>
      <div className="w-full flex items-center py-4">
        <div className="flex items-center gap-4 text-xl font-bold text-background dark:text-foreground">
          <h2 className="leading-none">{project?.title}</h2>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto p-8" id="work">
      <h2
        className="text-[10vw] font-bold tracking-tight"
        data-aos="fade-right"
      >
        SELECTED WORK
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 mx-auto py-8 gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {leftCol.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              height={cardHeights.sideColumn}
            />
          ))}
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {middleCol.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              height={cardHeights.middleColumn}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
          {rightCol.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              height={cardHeights.sideColumn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bento;
