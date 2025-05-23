import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative flex h-full w-full flex-col items-center justify-center gap-8 rounded-t-[48px] px-6 py-10 text-white md:py-[40px] lg:px-20 xl:gap-16">
      {/* Footer Header */}
      <div className="flex w-full flex-col items-center gap-6 border-b-2 border-b-gray-700 pb-8 md:flex-row md:justify-between md:pb-10">
        <h3 className="max-w-[280px] text-center text-2xl font-semibold md:max-w-[500px] md:text-start md:text-4xl">
          Let&apos;s discuss and bring your vision to life.
        </h3>
        <button className="bg-gradient-main flex items-center rounded-full px-6 py-4 text-white md:px-8 md:py-5">
          Let&apos;s talk
          <ArrowRight />
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex w-full flex-col justify-between border-b-2 border-b-gray-700 pb-8 md:pb-10 xl:flex-row">
        <div className="max-md:mb-10">
          <div>
            <a href="/" className="flex items-center gap-2 md:gap-3">
              <img src="/assets/logo.png" alt="InnovIT Hub Logo" className="w-9" />
              <p className="text-xl font-bold italic md:text-2xl">The TechG</p>
            </a>
          </div>
          <p className="mb-8 mt-4 md:mb-10 md:mt-6 md:max-w-[410px]">
            We&apos;re not just an agency—we’re your team. We mix smart strategy, clean design, and tech that works to help businesses stand out and succeed online.  
          </p>
          <p>thetechg@outlook.in</p>
          <p>+91-9416999579</p>
        </div>

        <div className="grid grid-cols-2 gap-y-6 md:grid-cols-3 md:gap-[120px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="font-semibold">Menu</h4>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="#hero">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About Us</a>
              <a href="#projects">Project</a>
              <a href="wa.me/+919416999579">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="font-semibold">Support</h4>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="font-semibold">Social Media</h4>
            <div className="flex flex-col gap-3 text-[#B6B8BC] md:gap-4">
              <a href="https://linkedin.com/thetechg">LinkedIn</a>
              <a href="https://bsky.app/@h-s.site">BlueSky</a>
              <a href="https://instagram.com/techg_solution">Instagram</a>
              <a href="https://wa.me/+919416999579">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="space-y-3">
        <span className="flex items-center justify-center text-center text-[#B6B8BC]">
          Copyright © 2025 by The TechG. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
