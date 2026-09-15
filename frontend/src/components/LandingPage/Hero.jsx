import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../../index.css";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const updateParallax = () => {
      const rect = imageRef.current?.getBoundingClientRect();
      if (!rect) return;

      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translateY = progress * 180 - 90;
      const scale = 1.2 - Math.max(0, Math.min(1, progress)) * 0.2;

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative isolate h-[100vh] w-full overflow-hidden p-8 lg:p-16">
      <video
        ref={imageRef}
        src="/VIDEO.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{ objectPosition: "center bottom" }}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50 [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_90%)]"
      />
      <div className="flex h-full flex-col items-center lg:justify-end justify-center lg:items-start lg:m-0 my-20">
        <div className="order-2 lg:order-1">
          <Button
            asChild
            className="my-8 bg-chart-1 hover:bg-foreground hover:text-background"
          >
            <a href="/projects">
              View My Work
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <h1 className="text-[clamp(5rem,8vw,10rem)] uppercase font-bold leading-[0.8] tracking-[-0.04em] lg:text-left text-center">
            Lauren <br /> <span className="">Kimball</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
