import Accordion from "../components/ui/Accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ACCORDION_DATA = [
  {
    number: 1,
    name: "Web Development",
    description:
      "Websites That Outperform, Outlast, Outsell Design sites so sharp, they convert strangers into buyers before the page fully loads.",
    image: "/assets/service-img-1.webp",
  },
  {
    number: 2,
    name: "App Development",
    description:
      "Build Apps Users Can not Quit - Code fast, addictive experiences that hook users and keep them hitting refresh for more.",
    image: "/assets/service-img-2.webp",
  },
  {
    number: 3,
    name: "Social Media Management",
    description:
      "Own the Feed, Own the Market - Post, engage, and dominate—we turn your social channels into a lead-generating powerhouse.",
    image: "/assets/service-img-3.webp",
  },
  {
    number: 4,
    name: "Video Editing",
    description:
      "Turn Scrollers Into Superfans - Cut, polish, and launch videos that grab eyeballs, break algorithms, and make your brand unforgettable.",
    image: "/assets/service-img-4.webp",
  },
  {
    number: 5,
    name: "Bots Development",
    description:
      "Crush Repetitive Tasks 24/7 - Automate workflows, slash costs, and let bots handle the boring stuff—free your team for game-changing moves.",
    image: "/assets/service-img-4.webp",
  },
];

gsap.registerPlugin(ScrollTrigger);

function Services() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordion",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".services-header", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });

    tl.from(".accordion > *", {
      opacity: 0,
      x: -10,
      ease: "power3.out",
      stagger: {
        amount: 0.8,
        from: "right",
      },
    });
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-8 px-6 py-20 md:gap-16 md:py-[120px] lg:px-20"
    >
      {/* Services Header */}
      <div className="services-header">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          The Services We Offer <span className="text-gradient">For You</span>
        </h3>
      </div>
      <div className="accordion flex w-full flex-col gap-4 md:gap-6">
        {ACCORDION_DATA.map((acc) => (
          <div key={acc.name}>
            <Accordion
              number={acc.number}
              name={acc.name}
              description={acc.description}
              image={acc.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
