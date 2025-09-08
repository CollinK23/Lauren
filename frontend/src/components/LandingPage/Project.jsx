"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { projects } from "../constants";
import { useMemo } from "react";

// helper: pick random image if grid.items exists
function getRandomImage(project) {
  if (project.grid?.items && project.grid.items.length > 0) {
    const randomIndex = Math.floor(Math.random() * project.grid.items.length);
    return project.grid.items[randomIndex].src;
  }
  return project.image || "/placeholder.svg";
}

function ProjectCard({ project, onHover, onLeave }) {
  const imageSrc = useMemo(() => getRandomImage(project), [project.id]);

  return (
    <a
      href={`/projects/${project.id}`}
      className="flex-shrink-0 md:w-[40vw] md:h-[60vh] aspect-[5/4] h-[300px] mx-4 cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card className="w-full h-full transition-all duration-300 rounded-2xl hover:scale-105 relative overflow-hidden border-none">
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover absolute"
        />
      </Card>
    </a>
  );
}

export default function ProjectCarousel() {
  const [paused, setPaused] = useState(false);

  // convert projects object -> array
  const projectList = Object.values(projects);

  return (
    <div className="w-full overflow-hidden py-8 border-b">
      <div
        className="flex w-max animate-marquee"
        style={{
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Render two copies for seamless looping */}
        {[...Array(2)].map((_, copyIndex) => (
          <div className="flex" key={copyIndex}>
            {projectList.map((project, index) => (
              <ProjectCard
                key={`copy${copyIndex}-${project.id}-${index}`}
                project={project}
              />
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}
