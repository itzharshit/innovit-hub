import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text > *",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
      },
    )
      .from(".hero-cta", {
        opacity: 0,
        x: "-100%",
      })
      .from(".hero-banner", {
        opacity: 0,
        y: 30,
      });

    tl.from(".hero-slider-items > *", {
      opacity: 0,
      x: "-10",
      ease: "power3.out",
      stagger: {
        amount: 0.8,
        from: "right",
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center bg-main px-6 py-10 text-white md:py-[120px] lg:px-20"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Hero Text */}
        <div className="hero-text flex flex-col items-center text-center">
          <span className="rounded-full bg-white/10 px-2 py-3 text-[10px] font-light uppercase md:px-4 md:text-sm">
            Your #1 Partner for Digital Success
          </span>
          <h2 className="mt-2 text-4xl font-bold md:mt-3 md:text-7xl/[76px]">
            <span className="text-gradient">Where Big Ideas</span>{" "}
            <span className="block">Meet Smart Technology</span>
          </h2>
          <p className="mt-[14px] text-sm md:mt-6 md:text-xl">
            We&apos;re not just an agency—we’re your team.
            <br className="hidden md:flex" />
            We mix smart strategy, clean design, and tech that works to help businesses stand out and succeed online.
          </p>
        </div>
        {/* Hero CTA */}
        <div className="hero-cta mt-10">
          <a href="https://wa.me/+919416999579">
            <button className="bg-gradient-main flex h-[56px] w-[166px] items-center justify-center gap-2 rounded-full font-semibold duration-300 hover:opacity-70 md:text-lg">
              Contact Us
              <ArrowRight size={16} />
            </button>
          </a>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="hero-banner relative mt-[56px] flex h-[360px] w-full flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: "#c508ff" }}>
        <h3 className="z-10 text-lg font-semibold max-sm:mt-6 max-sm:w-[213px] md:text-xl xl:text-3xl">
          Perks of making your business better
        </h3>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="hero-slider-items h-full w-full">
            <div className="slider-item flex flex-col items-center justify-center gap-8">
              <img
                id="maximize"
                src="/assets/icons/special-icon-maximize.svg"
                alt="Maximize"
                className="rounded-full bg-white p-4 outline outline-8 outline-offset-8"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl">
                Make More Profit
              </h3>
            </div>
            <div className="slider-item flex flex-col items-center justify-center gap-8">
              <img
                id="wallet"
                src="/assets/icons/special-icon-wallet.svg"
                alt="Wallet"
                className="rounded-full bg-white p-4 outline outline-8 outline-offset-8"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl">Outsmart Your Competition</h3>
            </div>
            <div className="slider-item flex flex-col items-center justify-center gap-8">
              <img
                id="star"
                src="/assets/icons/special-icon-star.svg"
                alt="Star"
                className="rounded-full bg-white p-4 outline outline-8 outline-offset-8"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl">
                Look More Professional
              </h3>
            </div>
            <div className="slider-item flex flex-col items-center justify-center gap-8">
              <img
                id="peoples"
                src="/assets/icons/special-icon-peoples.svg"
                alt="Peoples"
                className="rounded-full bg-white p-4 outline outline-8 outline-offset-8"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl">Turn Browsers Into Buyers</h3>
            </div>
          </div>

          <div className="hero-slider-nav">
            <a href="#maximize"></a>
            <a href="#wallet"></a>
            <a href="#star"></a>
            <a href="#peoples"></a>
          </div>
        </div>
        <div className="absolute hidden max-sm:block">
          <img
            src="/assets/hero-banner-mobile.webp"
            alt="Hero Banner Mobile"
            className="h-[380px]"
          />
        </div>
        <div className="absolute hidden w-full items-center justify-center sm:flex">
          <img
            src="/assets/hero-banner-desktop.webp"
            alt="Hero Banner Desktop"
            className="h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
