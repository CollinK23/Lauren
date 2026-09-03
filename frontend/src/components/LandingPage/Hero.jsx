import React, { useEffect, useRef } from "react";
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
    <section className="w-full px-8 lg:px-16 mx-auto h-[100vh]">
      <div className="w-full h-full border-x flex items-end justify-between">
        <div className="w-full">
          <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-stretch items-center lg:items-end pt-8 pr-8 md:pb-0">
            <h1
              className="text-[clamp(5rem,8vw,10rem)] leading-[1] tracking-[-0.09em] lg:text-left text-center"
              style={{ fontFamily: "PPEditorialNew-UltralightItalic" }}
            >
              LAUREN <br /> KIMBALL
            </h1>
            <p className="text-muted-foreground font-mono font-medium lg:text-right text-center lg:w-[30%] lg:mb-5 text-center lg:self-end">
              PRODUCT & APPAREL DESIGNER
            </p>
          </div>

          <div className="h-[45vh] overflow-hidden">
            <img
              ref={imageRef}
              src="/jeans1.jpg"
              alt="Jean design"
              className="h-full w-full object-cover object-center grayscale-[0.8] brightness-[0.7] contrast-[1.08] saturate-[0.25] transition-transform duration-200 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
