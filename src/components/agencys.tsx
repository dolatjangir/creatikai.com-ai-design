"use client";

import Image from "next/image";
import { forwardRef } from "react";

const steps = [
  {
    id: "1",
    title: "Contact us",
    text: "Nullam ac urna eu felis dapibus",
  },
  {
    id: "2",
    title: "Consult",
    text: "Nullam ac urna eu felis dapibus",
  },
  {
    id: "3",
    title: "Place order",
    text: "Duis sed odio sit amet nibh vulputate cursus",
  },
  {
    id: "4",
    title: "Payment",
    text: "Duis sed odio sit amet nibh vulputate cursus",
  },
];

interface AgencySectionProps {
  laptopRef?: React.RefObject<HTMLDivElement | null>;
  section4ImageRef?: React.RefObject<HTMLDivElement | null>;
}

const AgencySection = forwardRef<HTMLDivElement, AgencySectionProps>(
  ({ laptopRef, section4ImageRef }, ref) => {
    return (
      <div ref={ref} className="w-full overflow-hidden bg-[#f7f7f9]">
        {/* ================================================= */}
        {/* SECTION 3 — Blue (Laptop) */}
        {/* ================================================= */}
        <section className="relative overflow-hidden bg-[#313FA8]">
          {/* Background Circles */}
          <div className="absolute -left-[220px] top-[-120px] h-[700px] w-[700px] rounded-full bg-[#4452C4]" />
          <div className="absolute left-[-70px] top-[40px] h-[540px] w-[540px] rounded-full bg-[#F4F4F6]" />

          {/* Main Content */}
          <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1400px] flex-col items-center justify-between gap-20 px-6 py-24 lg:flex-row lg:px-20">
            
            {/* Left Image — Laptop (ref attached for GSAP slide-down) */}
            <div 
              ref={laptopRef} 
              className="flex w-full justify-center lg:w-1/2 lg:justify-start"
            >
              <div className="relative h-[500px] w-[500px]">
                <Image
                  src="/laptop.png"
                  alt="Laptop"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full max-w-[470px] text-white">
              <h1 className="text-[46px] font-bold leading-tight tracking-[-1px]">
                Simple Solutions!
              </h1>

              <p className="mt-6 text-[15px] leading-[30px] text-white/70">
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Sed non mauris
                vitae erat.
              </p>

              {/* Steps */}
              <div className="mt-12 space-y-7">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[15px] font-bold shadow-lg backdrop-blur-md">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-white/60">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <button className="rounded-md bg-white px-9 py-3 text-[14px] font-semibold text-[#313FA8] shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get Started
                </button>
                <button className="rounded-md border border-white/40 px-9 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#313FA8]">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* SECTION 4 — Gray (Agency Image) */}
        {/* ================================================= */}
        <section className="relative overflow-hidden bg-[#f7f7f9] py-28">
          {/* Floating Dots */}
          <div className="absolute left-[40%] top-[14%] h-3 w-3 rounded-full bg-[#B6BCFF]/50" />
          <div className="absolute left-[43%] top-[19%] h-2 w-2 rounded-full bg-[#CDD1FF]/60" />
          <div className="absolute left-[46%] top-[16%] h-4 w-4 rounded-full bg-[#D9DCFF]/40" />
          <div className="absolute bottom-[18%] right-[9%] h-3 w-3 rounded-full bg-[#C8CCFF]/40" />
          <div className="absolute bottom-[14%] right-[6%] h-2 w-2 rounded-full bg-[#D9DCFF]/60" />

          {/* Main Content */}
          <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-24 px-6 lg:flex-row lg:px-20">
            
            {/* Left Text */}
            <div className="w-full max-w-[430px]">
              <h2 className="text-[44px] font-bold leading-tight tracking-[-1px] text-[#222]">
                Our Agency
              </h2>
              <p className="mt-6 text-[15px] leading-[30px] text-[#8A8A8A]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="mt-6 text-[15px] leading-[30px] text-[#8A8A8A]">
                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
                sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.
                Proin condimentum fermentum nunc.
              </p>
              <button className="mt-10 rounded-md bg-[#4B5AE8] px-10 py-3 text-[14px] font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1">
                Read more
              </button>
            </div>

            {/* Right Image (ref attached for GSAP fade-out replacement) */}
            <div 
              ref={section4ImageRef} 
              className="relative flex w-full justify-center lg:w-1/2"
            >
              {/* Background Circles */}
              <div className="absolute top-[-40px] h-[420px] w-[420px] rounded-full bg-[#4A59E6]" />
              <div className="absolute top-[40px] h-[380px] w-[380px] rounded-full bg-[#ECECFA]" />
              
              {/* Image */}
              <div className="relative z-10 h-[420px] w-[650px] max-w-full">
                <Image
                  src="/about-hero-img.png"
                  alt="Agency"
                  fill
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.16)]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

AgencySection.displayName = "AgencySection";
export default AgencySection;