"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { MoveLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../LandingPage/Footer";
import { projects } from "../constants";
import { useTheme } from "../theme-provider";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Navbar from "../LandingPage/Navbar";
import Spacer from "../LandingPage/Spacer";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (project?.theme) {
      setTheme(project.theme);
    }
  }, [project, setTheme]);

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
        Number(!progress),
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

  // const imageGapClass = project.grid.gap || "gap-8 lg:gap-4";
  const imageGapClass = "gap-8 lg:gap-8";
  const projectBackground = project.backgroundColor || "hsl(var(--background))";
  const projectBorderStyle = project.borderColor
    ? { borderColor: project.borderColor }
    : undefined;
  const projectDescriptionSize = project.descriptionSize || "text-sm";
  const projectYearSize = project.yearSize || "text-sm";
  const cropPx = 8;
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);

  const selectedItem =
    selectedMediaIndex === null ? null : project.grid.items[selectedMediaIndex];
  const selectedIsVideo =
    !!selectedItem && (selectedItem.src || "").toLowerCase().endsWith(".mp4");

  const goToPreviousMedia = () => {
    setSelectedMediaIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (
        (currentIndex - 1 + project.grid.items.length) %
        project.grid.items.length
      );
    });
  };

  const goToNextMedia = () => {
    setSelectedMediaIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % project.grid.items.length;
    });
  };

  return (
    <div style={{ backgroundColor: projectBackground }}>
      <Navbar />
      {/* Header */}
      <div className="lg:py-24 py-20 lg:px-16 px-8">
        <div className="mx-auto flex min-h-24 items-center justify-between ">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>
        </div>
        {/* <Spacer /> */}
        {/* Main content */}
        <div className="mx-auto" style={projectBorderStyle}>
          <div className=" flex lg:flex-row flex-col lg:justify-between space-y-8 lg:space-y-0">
            {/* Sidebar info */}
            <div className="sidebar lg:flex-1 overflow-hidden transition-all duration-000 ease-out">
              <div
                className="sidebar-text flex flex-col space-y-8 lg:pr-8 transition-transform duration-700 ease-out"
                style={{
                  pointerEvents: isScrolled ? "none" : "auto",
                }}
              >
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  aria-label="Back to projects"
                  className="flex w-fit items-center gap-2 text-xs transition hover:opacity-60 text-muted-foreground"
                >
                  <MoveLeft className="h-4 w-4" />
                  Back
                </button>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold  tracking-tight">
                    ABOUT
                  </h2>
                  <p
                    className={`${projectDescriptionSize} whitespace-pre-line`}
                  >
                    {project.description}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold  tracking-tight">
                    Year
                  </h2>
                  <p className={`${projectYearSize}`}>{project.year}</p>
                </div>
              </div>
            </div>

            {/* Image grid */}
            <Dialog
              open={selectedMediaIndex !== null}
              onOpenChange={(open) => {
                if (!open) setSelectedMediaIndex(null);
              }}
            >
              <div
                className={`image-grid grid ${imageGapClass} transition-all duration-400 ease-out`}
                style={{
                  gridTemplateColumns: `repeat(${project.grid.cols}, minmax(0, 1fr))`,
                }}
              >
                {project.grid.items.map((item, index) => {
                  const isVideo = (item.src || "")
                    .toLowerCase()
                    .endsWith(".mp4");

                  return (
                    <DialogTrigger asChild key={index}>
                      <button
                        type="button"
                        onClick={() => setSelectedMediaIndex(index)}
                        className={`group relative overflow-hidden border-0 bg-transparent text-left ${item.className} hover:cursor-pointer`}
                      >
                        {isVideo ? (
                          <video
                            src={item.src}
                            className={`h-full w-full object-cover object-bottom transition-[filter] duration-200 ease-out ${
                              item.imgClassName || ""
                            }`}
                            // style={{ clipPath: `inset(${cropPx}px)` }}
                            muted
                            playsInline
                            loop
                            autoPlay
                          />
                        ) : (
                          <img
                            src={item.src || "/placeholder.svg"}
                            alt={`${project.title} image ${index + 1}`}
                            loading="lazy"
                            className={`h-full w-full object-cover object-bottom transition-[filter] duration-200 ease-out ${
                              item.imgClassName || ""
                            }`}
                            // style={{ clipPath: `inset(${cropPx}px)` }}
                          />
                        )}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 z-10"
                          style={{
                            borderTop: `2px solid ${projectBackground}`,
                            borderBottom: `2px solid ${projectBackground}`,
                          }}
                        />
                      </button>
                    </DialogTrigger>
                  );
                })}
              </div>

              <DialogContent
                className="p-0 items-center justify-center w-auto h-auto border-none bg-transparent"
                onOpenAutoFocus={(event) => event.preventDefault()}
                onCloseAutoFocus={(event) => event.preventDefault()}
              >
                {selectedItem && (
                  <div className="relative flex items-center justify-center">
                    <button
                      type="button"
                      onClick={goToPreviousMedia}
                      className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {selectedIsVideo ? (
                      <video
                        src={selectedItem.src}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        controls
                        autoPlay
                        loop
                        muted
                      />
                    ) : (
                      <img
                        src={selectedItem.src || "/placeholder.svg"}
                        alt={`${project.title} image ${selectedMediaIndex + 1}`}
                        loading="lazy"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                      />
                    )}

                    <button
                      type="button"
                      onClick={goToNextMedia}
                      className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <Spacer />
      <Footer />
    </div>
  );
};

export default ProjectPage;
