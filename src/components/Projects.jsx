import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tabs from "./ui/Tabs";

const tabsData = [
  {
    title: "Mission CS Test Series",
    content: [
      {
        title: "Mission CS Test Series",
        img: "/assets/projects/uiux-1.webp",
        description:
          "A platform for a test series dedicated to Mission CS, including video editing.",
      },
    ],
  },
  {
    title: "Delhi Bakery School",
    content: [
      {
        title: "Delhi Bakery School",
        img: "/assets/projects/p2.webp",
        description:
          "Delhi Bakery School Website.",
      },
    ],
  },
  {
    title: "Chartered Team",
    content: [
      {
        title: "Chartered teams website",
        img: "/assets/projects/p4.webp",
        description:
          "A website For chartered Team.",
      },
    ],
  },
  {
    title: "My CS MTP",
    content: [
      {
        title: "My CS MTP",
        img: "/assets/projects/p3.webp",
        description:
          "Website, Video editing and Social media management for Mycsmtp.com",
      },
    ],
  },
];

function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-header",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".projects-header > *", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      id="projects"
      className="relative flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-20 text-white md:py-[120px] lg:px-20 xl:gap-16"
    >
      {/* Services Header */}
      <div className="projects-header flex flex-col items-center gap-4 md:gap-8">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          Projects We Have <span className="text-gradient">Done</span>
        </h3>
        <p className="text-center text-sm md:max-w-[900px] md:text-xl">
          Take a look at some of our recent projects and see how we&apos;ve
          helped other businesses elevate their brand and drive business growth.
        </p>
      </div>

      <div className="w-full">
        <Tabs tabs={tabsData} />
      </div>
    </section>
  );
}

export default Projects;
