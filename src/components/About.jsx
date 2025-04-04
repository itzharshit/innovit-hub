import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-grid",
        toggleActions: "play none none none",
      },
    });

    tl.from(".about-text", {
      y: 20,
      opacity: 0,
      stagger: 0.3,
    });

    tl.from(".about-grid", {
      x: "-50",
      opacity: 0,
    });

    tl.from(".grid-number", {
      textContent: 0,
      duration: 0.8,
      ease: "power1.easeIn",
      snap: { textContent: 1 },
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-20 md:py-[120px] lg:px-20 xl:gap-16"
    >
      <div className="about-text">
        <p className="text-2xl md:max-w-[800px] md:text-center">
          At The TechG, we’re more than an agency—we’re your strategic allies. Combining precision strategy, polished design, and cutting-edge development, we empower brands to captivate audiences and secure market leadership.  
        </p>
      </div>
      {/* About Grid */}
      <div className="about-grid grid w-full grid-cols-1 place-content-between place-items-center gap-6 rounded-2xl bg-gradient-to-br from-[#ff08d6] to-[#c508ff] p-6 text-white md:grid-cols-4 md:px-20 md:py-8">
        <div className="space-y-3 text-center">
          <div className="flex items-center  justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">3</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Years of Experience</p>
        </div>
        <div className="space-y-3 text-center">
          <div className="flex items-center  justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">20</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Projects Completed</p>
        </div>
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center text-5xl font-bold md:text-6xl lg:text-7xl">
            <h3 className="grid-number">50</h3>
            <span>+</span>
          </div>
          <p className="text-xs md:text-xl lg:text-2xl">Satisfied Client</p>
        </div>
      </div>

      <div className="absolute hidden h-full w-full max-sm:block">
        <img
          src="/assets/about-bg-mobile.webp"
          alt="About BG Mobile"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute hidden h-full w-full items-center justify-center sm:flex">
        <img
          src="/assets/about-bg-desktop.webp"
          alt="About BG Desktop"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default About;
