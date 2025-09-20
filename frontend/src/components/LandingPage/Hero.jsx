import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import "../../index.css";
import ProjectCarousel from "./Project";

const Hero = (scrollToSection) => {
  return (
    <section className="relative border h-[70vh]">
      <div className="container h-full px-8 md:px-12 mx-auto flex flex-col justify-center items-center py-12 border-x">
        {/* Top section with name and dot */}
        <h1
          className="text-8xl xl:text-9xl font-bold leading-none tracking-tight text-center"
          style={{ fontFamily: "PPEditorialNew-UltralightItalic" }}
          data-aos="fade-up"
        >
          Lauren Kimball
        </h1>

        <div
          className="text-center max-w-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-md font-mono text-muted-foreground">
            Product Design major, with a focus on fashion, and a minor in
            Business Administration at the University of Oregon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
