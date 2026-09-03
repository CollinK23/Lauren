"use client";
import { projects } from "../constants";

const columns = [
  {
    title: "APPAREL WORK",
    href: "/projects/apparel",
    id: "blacktop",
    imageAlign: "center",
  },
  {
    title: "UNIVERSITY OF OREGON PROJECTS",
    href: "/projects/uo",
    id: "auro",
    imageAlign: "center left",
  },
  // {
  //   title: "TECHNICAL DRAWINGS",
  //   id: "drawings",
  //   imageAlign: "center",
  // },
];

const Bento = () => (
  <div className="mx-auto lg:px-16 px-8" id="work">
    <div className="border-x">
      <h2
        className="text-[10vw] font-semibold tracking-tight"
        data-aos="fade-right"
      >
        SELECTED WORK
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        {columns.map((column, idx) => {
          const project = projects[column.id];

          if (!project) return null;

          return (
            <div key={column.title} className="flex flex-col gap-3">
              <div className="flex items-center px-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                <span>{column.title}</span>
              </div>

              {column.href ? (
                <a href={column.href} className="group block w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[5/4] w-full object-cover transition-[filter] duration-200 ease-out group-hover:brightness-75"
                    style={{
                      objectPosition: column.imageAlign || "center",
                    }}
                  />
                </a>
              ) : (
                <div className="group block w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[5/4] w-full object-cover opacity-90"
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
  </div>
);

export default Bento;
