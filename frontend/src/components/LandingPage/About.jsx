import React, { useEffect, useRef } from "react";

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const updateParallax = () => {
      const image = imageRef.current;
      const rect = image?.getBoundingClientRect();
      if (!image || !rect) return;

      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const translateY = progress * 240 - 120;

      image.style.transform = `translateY(${translateY}px) scale(1.2)`;
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
    <div className="mx-auto lg:px-16 px-8 space-y-6 text-gray-700 dark:text-gray-300">
      <div className="border-x" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(18rem,0.85fr)_1.15fr]">
          <div className="overflow-hidden lg:h-full">
            <img
              ref={imageRef}
              src="/Lauren.jpg"
              alt="Lauren"
              className="h-full w-full object-cover object-top transition-transform duration-200 ease-out"
            />
          </div>
          <div className="flex flex-col justify-between gap-16 px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                About the designer
              </p>
              <h2
                className="max-w-3xl font-semibold leading-[0.88] text-[clamp(2rem,4vw,3rem)]"
                data-aos="fade-left"
              >
                <span className="block">GET TO KNOW</span>
                <span
                  className="block text-chart-1"
                  // style={{ fontFamily: "PPEditorialNew-UltralightItalic" }}
                >
                  LAUREN
                </span>
              </h2>
            </div>

            <div className="max-w-2xl space-y-7 text-base leading-relaxed lg:pl-[12%]">
              <p data-aos="fade-left" data-aos-delay="0">
                Hi! I'm Lauren Kimball — a Product Design student at the
                University of Oregon with a focus on apparel design and a minor
                in entrepreneurship. I'm passionate about creating intentional,
                inclusive work that blends aesthetics, function, and real-world
                application.
              </p>
              <p data-aos="fade-left" data-aos-delay="150">
                With over four years of experience in apparel design through
                academic work and personal projects, I explore how fit,
                material, and construction shape the way people interact with
                what they wear. My goal is to design for diverse bodies and
                lifestyles in a way that supports comfort and confidence, while
                continuing to build my skills through exposure to different
                design processes and techniques.
              </p>
              <p data-aos="fade-left" data-aos-delay="300">
                My design process is rooted in purpose — developing solutions
                that respond to real needs while maintaining a strong sense of
                style. I aim to create work that feels thoughtful, wearable, and
                empowering in everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
