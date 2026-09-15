"use client";
import { projects } from "../constants";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Apparel Work",
    href: "/projects/apparel",
    id: "blacktop",
    imageAlign: "top",
    aos: "fade-in",
  },
  {
    title: "Product Design",
    href: "/projects/uo",
    id: "myscan",
    imageAlign: "center left",
    aos: "fade-in",
  },
  // {
  //   title: "TECHNICAL DRAWINGS",
  //   id: "drawings",
  //   imageAlign: "center",
  // },
];

const Bento = ({
  projectTitleClassName = "text-[10vw]",
  heightClassName = "",
}) => (
  <div className={`mx-auto ${heightClassName}`} id="projects">
    <h2
      className={`${projectTitleClassName} font-semibold tracking-tight`}
      data-aos="fade-in"
    >
      PROJECTS
    </h2>

    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      {columns.map((column, idx) => {
        const project = projects[column.id];

        if (!project) return null;

        return (
          <div
            key={column.title}
            className="flex flex-col gap-3"
            data-aos={column.aos}
          >
            {column.href ? (
              <a
                href={column.href}
                className="group relative block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:brightness-75"
                  style={{
                    objectPosition: column.imageAlign || "center",
                  }}
                />
                <Button
                  asChild
                  className={`pointer-events-none absolute bottom-8 left-1/2 w-[60%] -translate-x-1/2 rounded-xl bg-background/60 backdrop-blur font-medium text-foreground`}
                >
                  <span>{column.title}</span>
                </Button>
              </a>
            ) : (
              <div className="group block w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover"
                  style={{
                    objectPosition: column.imageAlign || "center",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default Bento;
