export default function Work() {
  const experiences = [
    {
      company: "WrightClique",
      role: "Apparel Design Intern",
      period: "May 2026 - August 2026",
    },
    {
      company: "Nordstrom",
      role: "Stylist Support Specialist",
      period: "June 2025 - Present",
    },
    {
      company: "Gap",
      role: "Denim Expert",
      period: "October 2023 - January 2026",
    },
    // {
    //   company: "Nike",
    //   role: "Seasonal Retail Associate",
    //   period: "Jul 2024 - September 2024",
    // },
  ];

  return (
    <section className="lg:px-16 px-8 text-background" id="experience">
      <div className="border-x">
        <div
          className="h-full p-4 lg:p-16 mx-auto flex flex-col justify-between bg-foreground dark:bg-chart-1"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <div className="mb-12">
            <h2
              className="text-[10vw] font-semibold tracking-tight text-chart-1 dark:text-background"
              data-aos="fade-right"
            >
              EXPERIENCE <br />
              {/* <span
              className="text-5xl md:text-6xl italic text-chart-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Experience
            </span> */}
            </h2>
          </div>

          <div className="ml-auto w-[80%]">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="group"
                data-aos="fade-left"
                data-aos-delay={index * 50}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start py-8">
                  <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold">{experience.company}</h3>
                  </div>
                  <div className="text-right">
                    <div className="md:col-span-1">
                      <p className="text-lg font-semibold">{experience.role}</p>
                    </div>

                    <div className="md:col-span-1 text-right">
                      <p className="text-lg font-mono">{experience.period}</p>
                    </div>
                  </div>
                </div>

                {index < experiences.length - 1 && (
                  <div className="border-b border-muted-foreground dark:border-background"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
