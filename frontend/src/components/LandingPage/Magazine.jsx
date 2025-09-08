"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "DENIM TOTE",
    description:
      "Designed and constructed lined denim tote bags using old and thrifted jeans, focusing on sustainability and reducing textile waste.",
    image: "/purse1.jpg",
    tags: ["Design", "Creative", "Digital"],
  },
  {
    id: 2,
    title: "Doity",
    description:
      "An innovative productivity platform that reimagines how we approach task management and team collaboration.",
    image: "/purse2.jpg",
    tags: ["Product", "UX/UI", "Platform"],
  },
  {
    id: 3,
    title: "PWC Spaces",
    description:
      "Architectural visualization and spatial design concepts that blend physical and digital environments.",
    image: "/top1.jpg",
    tags: ["Architecture", "3D", "Visualization"],
  },
  {
    id: 4,
    title: "New Aesthetic",
    description:
      "Exploring contemporary visual language through experimental typography and bold color palettes.",
    image: "/top2.jpg",
    tags: ["Typography", "Branding", "Visual"],
  },
  {
    id: 5,
    title: "27b Logo",
    description:
      "Brand identity development focusing on minimalist design principles and memorable visual impact.",
    image: "/top3.jpg",
    tags: ["Branding", "Identity", "Logo"],
  },
];

export default function ProjectSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = 0;
      const scrollEnd = -rect.height + windowHeight;
      const scrollRange = scrollStart - scrollEnd;
      const currentScroll = rect.top;

      let progress = 0;
      if (currentScroll <= 0) {
        progress = Math.max(
          0,
          Math.min(1, (scrollStart - currentScroll) / scrollRange)
        );
      }

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[1000vh]">
      <div className="sticky top-0 h-screen flex overflow-hidden">
        <div
          className="relative w-1/2 h-full overflow-hidden bg-chart-1"
          data-aos="fade-right"
        >
          {projects.map((project, index) => {
            const slotSize = 1 / projects.length;
            const start = index * slotSize;
            const end = (index + 1) * slotSize;

            let localProgress = (scrollProgress - start) / (end - start);
            localProgress = Math.max(0, Math.min(1, localProgress));

            // Start fully visible, only exit toward the end
            let pageProgress = 1;
            if (localProgress >= 0.7) {
              pageProgress = 1 - (localProgress - 0.7) / 0.3; // exit 1 → 0
            }

            return (
              <div
                key={project.id}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: projects.length - index }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out pr-8 pt-8"
                  style={{
                    transform: `translateX(-${(1 - pageProgress) * 100}%)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="w-1/2 h-full text-white flex flex-col justify-between p-16">
          <div>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight "
              data-aos="fade-left"
            >
              Selected <br />
              <span className="text-chart-1">Projects</span>
            </h1>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            {projects.map((project, index) => {
              const delayedProgress = Math.max(0, scrollProgress - 0.2) / 0.8;
              let isActive = false;

              if (index === projects.length - 1) {
                isActive = delayedProgress >= 0.8;
              } else {
                const pageStart = index / projects.length;
                const pageEnd = (index + 1) / projects.length;
                isActive =
                  delayedProgress >= pageStart && delayedProgress < pageEnd;
              }

              return (
                <div
                  key={project.id}
                  className={`flex gap-8 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <span className="text-2xl font-bold text-gray-400 w-12">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold ">{project.title}</h3>
                    {isActive && (
                      <p className="text-md text-muted-foreground mt-2 font-mono">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 text-white/50 text-sm">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </div>
  );
}
