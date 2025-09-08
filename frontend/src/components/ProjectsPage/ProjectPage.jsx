"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../LandingPage/Footer";
import { projects } from "../constants";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projects[id];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
      setIsScrolled(progress > 0.5);

      document.documentElement.style.setProperty("--scroll-progress", progress);
      document.documentElement.style.setProperty(
        "--scroll-bool",
        Number(!progress)
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <header className="top-0 z-50 backdrop-blur border-b">
        <div className="w-[90%] flex px-8 md:px-12 mx-auto h-32 items-center justify-between">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight ">
            {project.title}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <div className="container border-x p-8 mx-auto flex lg:flex-row flex-col lg:justify-between space-y-8 lg:space-y-0">
        {/* Sidebar info */}
        <div className="sidebar overflow-hidden transition-all duration-000 ease-out">
          <div
            className="sidebar-text flex flex-col space-y-24 transition-transform duration-700 ease-out"
            style={{
              pointerEvents: isScrolled ? "none" : "auto",
            }}
          >
            <div>
              <h2 className="text-xl md:text-2xl font-semibold  tracking-tight">
                ABOUT
              </h2>
              <p className="text-sm  font-mono whitespace-normal">
                {project.description}
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold  tracking-tight">
                Year
              </h2>
              <p className="text-sm  font-mono">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Image grid */}
        <div
          className={`image-grid grid lg:gap-4 gap-8 transition-all duration-400 ease-out`}
          style={{
            gridTemplateColumns: `repeat(${project.grid.cols}, minmax(0, 1fr))`,
          }}
        >
          {project.grid.items.map((item, index) => (
            <Dialog>
              <DialogTrigger asChild>
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl group relative ${item.className} hover:cursor-pointer`}
                >
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={`${project.title} image ${index + 1}`}
                    className={`w-full h-full object-cover object-bottom transform transition duration-500 ease-out group-hover:scale-105 ${
                      item.imgClassName || ""
                    }`}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="p-0 items-center justify-center w-auto h-auto border-none bg-transparent">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={`${project.title} image ${index + 1}`}
                  className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg`}
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
