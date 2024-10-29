import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Company() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#company",
        toggleActions: "play none none none",
        start: "top 85%",
      },
    });

    tl.from(".company-grid  > *", {
      opacity: 0,
      x: "-50",
      stagger: 0.3,
    });
  }, []);
  return (
    <section
      id="company"
      className="flex h-full w-full flex-col items-center justify-center gap-8 bg-main px-6 py-8 text-white lg:px-20 xl:gap-16"
    >
      <div className="company-grid grid w-full grid-cols-2 place-content-between place-items-center gap-12 md:grid-cols-3 md:gap-16 lg:grid-cols-6">
        <div>
          <img src="/assets/brands/slack.webp" alt="Slack" />
        </div>
        <div>
          <img src="/assets/brands/google.webp" alt="Google" />
        </div>
        <div>
          <img src="/assets/brands/netflix.webp" alt="Netflix" />
        </div>
        <div>
          <img src="/assets/brands/airbnb.webp" alt="AirBNB" />
        </div>
        <div>
          <img src="/assets/brands/adobe.webp" alt="Adobe" />
        </div>
        <div>
          <img src="/assets/brands/microsoft.webp" alt="Microsoft" />
        </div>
      </div>
    </section>
  );
}

export default Company;
