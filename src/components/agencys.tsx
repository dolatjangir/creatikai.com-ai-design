"use client";

import Image from "next/image";
import { forwardRef } from "react";

const steps = [
  {
    id: "1",
    title: "Discovery & Strategy",
    text: "Understanding your business goals, challenges, and growth opportunities.",
  },
  {
    id: "2",
    title: "Planning & Design",
    text: "Creating user-focused experiences and scalable digital architectures.",
  },
  {
    id: "3",
    title: "Development & Integration",
    text: "Building secure, high-performance solutions using modern technologies.",
  },
  {
    id: "4",
    title: "Launch & Growth",
    text: "Continuous support, optimization, and innovation for long-term success.",
  },
];

interface AgencySectionProps {
  laptopRef?: React.RefObject<HTMLDivElement | null>;
  section4ImageRef?: React.RefObject<HTMLDivElement | null>;
}

const AgencySection = forwardRef<HTMLDivElement, AgencySectionProps>(
  ({ laptopRef, section4ImageRef }, ref) => {
    return (
      <div ref={ref} className="w-full overflow-hidden bg-[var(--color-section-alt)]">
        {/* ================================================= */}
        {/* SECTION 3 — Blue (Laptop) */}
        {/* ================================================= */}
        <section className="relative overflow-hidden bg-[var(--color-primary-dark)]">
          {/* Background Circles */}
          <div className="absolute -left-[220px] top-[-120px] h-[700px] w-[700px] rounded-full bg-[var(--color-primary)]" />
          <div className="absolute left-[-70px] top-[40px] h-[540px] w-[540px] rounded-full bg-[var(--color-bg)]" />

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
                 width={500}
                 height={500}
                  priority
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full max-w-[470px] text-[var(--text-inverse)]">
              <h1 className="text-[46px] font-bold leading-tight tracking-[-1px]">
          CreatikAI Delivers Digital Innovation
              </h1>

              <p className="mt-6 text-[15px] leading-[30px] text-[var(--text-inverse)]/70">
              We help businesses transform ideas into powerful digital experiences through modern
               web development, AI solutions, cloud technologies, and scalable 
              software products. From strategy to deployment, we build solutions that drive growth.
              </p>

              {/* Steps */}
              <div className="mt-12 space-y-7">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--text-inverse)]/20 bg-[var(--text-inverse)]/10 text-[15px] font-bold shadow-lg backdrop-blur-md">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-[var(--text-inverse)]/60">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <button className="rounded-md bg-[var(--color-bg)] px-9 py-3 text-[14px] font-semibold text-[var(--color-primary-dark)] shadow-xl transition-all duration-300 hover:-translate-y-1">
               Get a Free Consultation
                </button>
                <button className="rounded-md border border-[var(--text-inverse)]/40 px-9 py-3 text-[14px] font-semibold text-[var(--text-inverse)] transition-all duration-300 hover:bg-[var(--color-bg)] hover:text-[var(--color-primary-dark)]">
                 Explore Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* SECTION 4 — Gray (Agency Image) */}
        {/* ================================================= */}
        <section className="relative overflow-hidden bg-[var(--color-section-alt)] py-28">
          {/* Floating Dots */}
          <div className="absolute left-[40%] top-[14%] h-3 w-3 rounded-full bg-[var(--color-glow-strong)]/50" />
          <div className="absolute left-[43%] top-[19%] h-2 w-2 rounded-full bg-[var(--color-glow)]/60" />
          <div className="absolute left-[46%] top-[16%] h-4 w-4 rounded-full bg-[var(--color-glow)]/40" />
          <div className="absolute bottom-[18%] right-[9%] h-3 w-3 rounded-full bg-[var(--color-glow)]/40" />
          <div className="absolute bottom-[14%] right-[6%] h-2 w-2 rounded-full bg-[var(--color-glow)]/60" />

          {/* Main Content */}
          <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-24 px-6 lg:flex-row lg:px-20">
            
            {/* Left Text */}
            <div className="w-full max-w-[430px]">
              <h2 className="text-[44px] font-bold leading-tight tracking-[-1px] text-[var(--color-text-primary)]">
              Who We Are
              </h2>
              <p className="mt-6 text-[15px] leading-[30px] text-[var(--color-text-muted)]">
                CreatikAI is a technology-driven company focused on delivering innovative digital 
                solutions for startups, enterprises, and growing businesses worldwide.
              </p>
              <p className="mt-6 text-[15px] leading-[30px] text-[var(--color-text-muted)]">
                Our team specializes in web development, AI-powered applications, cloud solutions,
                 UI/UX design, and digital transformation. We combine creativity, 
                technology, and strategy to help organizations achieve measurable business results.
              </p>
              <button className="mt-10 rounded-md bg-[var(--color-primary)] px-10 py-3 text-[14px] font-semibold text-[var(--text-inverse)] shadow-xl transition-all duration-300 hover:-translate-y-1">
               About CreatikAI
              </button>
            </div>

            {/* Right Image (ref attached for GSAP fade-out replacement) */}
            <div 
              ref={section4ImageRef} 
              className="relative flex w-full justify-center lg:w-1/2"
            >
              {/* Background Circles */}
              {/* <div className="absolute top-[-40px] h-[420px] w-[420px] rounded-full bg-[var(--color-primary)]" /> */}
              {/* <div className="absolute top-[40px] h-[380px] w-[380px] rounded-full bg-[var(--color-section-alt)]" /> */}
              
              {/* Image */}
              <div className="relative z-10 h-[420px] w-[650px] max-w-full">
                <Image
                  src="/about-hero-img.png"
                  alt="Agency"
                  fill
                  className="object-contain  drop-shadow-[0_35px_35px_rgba(0,0,0,0.16)]"
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