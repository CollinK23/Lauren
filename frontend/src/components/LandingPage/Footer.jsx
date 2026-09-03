import React from "react";

const Footer = () => {
  return (
    <footer
      className="min-h-[50vh] relative bg-foreground dark:bg-chart-1 overflow-hidden w-full pt-16"
      id="contact"
    >
      <div className="absolute bottom-0 text-chart-1 text-[10vw] leading-[0.7] font-semibold dark:text-background">
        LAUREN KIMBALL
      </div>
      <div className="container mx-auto flex md:justify-end justify-start px-8">
        <div className="flex flex-row md:gap-24 gap-16">
          {/* Contact */}
          <li className="list-none text-left flex flex-col gap-2">
            <div className="font-semibold text-background text-md">CONTACT</div>
            <a
              href="mailto:Kimball.a.lauren@gmail.com"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/lauren-kimball-b221ba352/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/onegeans/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              Instagram
            </a>
          </li>

          {/* Navigation */}
          <li className="list-none text-left flex flex-col gap-2">
            <div className="font-semibold text-background text-md">WEBSITE</div>
            <a
              href="#experience"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              Experience
            </a>
            <a
              href="#work"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              Work
            </a>
            <a
              href="#skills"
              className="font-mono text-md text-muted-foreground hover:underline dark:text-background"
            >
              Skills
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
