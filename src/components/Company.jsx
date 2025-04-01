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
  );
}

export default Company;
