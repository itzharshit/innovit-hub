import { useGSAP } from "@gsap/react";
import TestimonialCard from "./ui/TestimonialCard";
import gsap from "gsap";

function Testimonials() {
  const TESTI_DUMMY = [
    {
      reviewer: "Marcus Chen",
      review:
        "Hired The TechG to rebuild our e-commerce site—revenue jumped 140% in 3 months. Their web development team turned our 'meh' store into a sales machine.",
      occupation: "Earth Wanderer",
      profileImg: "/assets/person/person-1.webp",
    },
    {
      reviewer: "Priya Nadeem",
      review:
        "After their app redesign, our retention tripled and we hit Top 10 in our category. The TechG doesn't just 'design'—they engineer addiction. Now our biggest problem is scaling fast enough to keep up with demand",
      occupation: "CEO, FitFam",
      profileImg: "/assets/person/person-2.webp",
    },
    {
      reviewer: "Elena Rodriguez",
      review:
        "Their video editors took our boring product demos and turned them into viral content. Our last campaign generated 2M views and 10X-d our sales conversion rate. Mind. Blown.",
      occupation: "CMO, GlowCosmetics",
      profileImg: "/assets/person/person-3.webp",
    },
    {
      reviewer: "Sofia Zhang",
      review:
        "Thought automation was hype until The TechG built our customer service bots. They now handle 80% of inquiries and directly drive six figures monthly. Best ROI we've ever seen.",
      occupation: "COO, GadgetGuru",
      profileImg: "/assets/person/person-4.webp",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testi-header",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".testi-header > *", {
      x: "-50",
      opacity: 0,
      stagger: 0.3,
    });

    tl.from(".testi-grid > *", {
      opacity: 0,
      x: "-30",
      stagger: 0.4,
    });
  }, []);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-6 py-20 md:py-[120px] lg:px-20 xl:gap-16">
      <div className="testi-header flex flex-col items-center gap-4 md:gap-8">
        <h3 className="text-center text-4xl font-bold md:text-6xl 2xl:text-7xl">
          What People Say <span className="text-gradient">About Us?</span>
        </h3>
        <p className="text-center text-sm md:max-w-[700px] md:text-xl">
          Discover what our satisfied customers have to say about their
          experiences with our service.
        </p>
      </div>
      <div className="testi-grid grid w-full grid-cols-1 place-content-between gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {TESTI_DUMMY.map((testi, index) => (
          <div key={index}>
            <TestimonialCard
              reviewer={testi.reviewer}
              review={testi.review}
              occupation={testi.occupation}
              profileImg={testi.profileImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;



  
      
