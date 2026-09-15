import { aboutImages } from "./aboutImages";

const tileClasses = [
  "col-span-2 row-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-1",
  "col-span-1 row-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2",
  "col-span-1 row-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-1",
  "col-span-2 row-span-1 lg:col-span-1 lg:col-start-5 lg:row-start-2",
  "col-span-1 row-span-2 lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-1",
  "col-span-1 row-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-2",
  "col-span-1 row-span-1 lg:col-span-1 lg:col-start-1 lg:row-start-2",
  "col-span-2 row-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:row-span-1",
  "col-span-2 row-span-1 lg:col-span-1 lg:col-start-6 lg:row-start-1 lg:row-span-2",
];

const About = () => (
  <section className="mx-auto lg:p-16 p-8" id="about">
    <div
      className="flex lg:flex-row flex-col items-center gap-8"
      data-aos="fade-in"
    >
      <img
        src="/Lauren.jpg"
        alt="Lauren Kimball"
        loading="lazy"
        className="h-full w-40 rounded-full object-cover"
      />
      <h1 className="text-[10vw] uppercase font-semibold tracking-tight">
        About Me
      </h1>
    </div>

    <div className="flex flex-col gap-4 pb-8" data-aos="fade-in">
      <p>
        Hi! I'm Lauren Kimball, a Product Design student at the University of
        Oregon focusing on apparel design with a minor in entrepreneurship. My
        interest in apparel started with my own experience after seven years of
        running track and constantly struggling to find clothes that fit my
        athletic body the way I wanted them to. That frustration made me curious
        about how apparel could better respond to the people wearing it,
        sparking my interest in both inclusive and innovative design.
      </p>
      <p>
        I'm interested in designing for people whose needs are often overlooked,
        whether because of their body, ability, lifestyle, personal expression,
        or level of performance. I approach design by getting close to the
        people I'm designing for, questioning the way things are currently done,
        and exploring how fit, construction, materials, and new technologies can
        create something better. I want my work to be thoughtful and functional
        without losing the style and personality that make people want to wear
        it in the first place.
      </p>
      <p>
        As I grow as a designer, I want to be part of a team that is just as
        dedicated to innovation and inclusion. I'm inspired by designers who
        challenge what already exists, break boundaries, and question every
        detail instead of accepting that something has to be done a certain way.
        Being around that kind of thinking pushes me to become a better
        designer, and I'm looking for opportunities where I can learn how to
        challenge those boundaries myself, contribute my own perspective, and
        keep developing the way I think and create.
      </p>
      <p>
        Outside of design, I love styling outfits and could spend way too long
        putting together a look or doing my makeup. I also love (using that word
        loosely) working out, going shopping, traveling, experiencing new
        cultures, and trying new food. I tend to find inspiration everywhere,
        whether it's someone's style, an interesting material, architecture, or
        a random everyday annoyance that gets me thinking.
      </p>
    </div>
    <div className="grid grid-flow-dense auto-rows-[12rem] grid-cols-2 gap-3 sm:auto-rows-[16rem] lg:gap-4 gap-4 lg:grid-flow-row lg:auto-rows-[16rem] lg:grid-cols-6">
      {aboutImages.map((image, index) => (
        <div
          key={image.src}
          className={`group relative min-h-0 min-w-0 overflow-hidden rounded-xl transform-gpu transition-transform duration-500 ease-out hover:scale-[1.08] hover:-rotate-2 ${tileClasses[index]}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default About;
