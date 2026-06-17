"use client";

import React, { useState, useEffect, JSX } from "react";
import {
  Search,
  ChevronDown,
  ArrowRight,
  Star,
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  Wrench,
  FileCheck,
  GraduationCap,
  Shield,
  Headphones,
  Compass,
  RefreshCcw,
  Bot,
  Brain,
  Zap,
  MessageSquare,
  BarChart3,
  Menu,
  X,
  Sparkles,
  Check,
} from "lucide-react";
import Image from "next/image";
import AgencySection from "@/components/agencys";
import Link from "next/link";




export default function HomePage(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", hasDropdown: true },
    { label: "AI Solutions", hasDropdown: true },
    { label: "Industries", hasDropdown: false },
    { label: "Case Studies", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
      title: "AI-Powered Websites",
      desc: "We build intelligent, self-optimizing websites that adapt to your users and drive real business results.",
    },
    {
      icon: <Wrench className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
      title: "n8n Automation Workflows",
      desc: "Eliminate repetitive tasks with custom n8n automations that connect your tools and run 24/7 without human intervention.",
    },
    {
      icon: <FileCheck className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
      title: "AI Agents & Chatbots",
      desc: "Deploy smart conversational agents that handle customer support, lead qualification, and sales around the clock.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" style={{ color: "var(--color-primary)" }} />,
      title: "Expert IT & SEO Teams",
      desc: "Our humble, flexible professionals bring deep expertise in development, search optimization, and AI integration.",
    },
  ];
  const featuresForImageSection = [
    "Client-Centric Approach",
    "Agile & Scalable Soluvery",
    "Secure & Reliable Delivery",
    "Innovation at the Core",
  ];
 
  const footerFeatures = [
    {
      icon: <RefreshCcw className="w-5 h-5" style={{ color: "var(--color-primary)" }} />,
      title: "Flexible Timelines",
      desc: "Work at your pace",
    },
    {
      icon: <Headphones className="w-5 h-5" style={{ color: "var(--color-primary)" }} />,
      title: "24/7 Support",
      desc: "Always here to help",
    },
    {
      icon: <Compass className="w-5 h-5" style={{ color: "var(--color-primary)" }} />,
      title: "Humble Professionals",
      desc: "No ego, just results",
    },
    {
      icon: <Shield className="w-5 h-5" style={{ color: "var(--color-primary)" }} />,
      title: "Work-Life Balance",
      desc: "Flexible schedules always",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)] text-[var(--color-text-primary)]">
     

      {/* Hero Section */}
      <section className="pt-[var(--hero-pt)] pb-[var(--hero-pb)] relative overflow-hidden">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6"
                style={{
                  backgroundColor: "var(--color-badge-bg)",
                  borderColor: "var(--color-badge-border)",
                  color: "var(--color-badge-text)",
                }}
              >
                <Zap className="w-3.5 h-3.5" />
                AI Automation & Digital Transformation
              </div>

              <h1
                className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6"
                style={{ color: "var(--color-text-primary)" }}
              >
                Work Smarter.
                <br />
                Automate Everything.
                <br />
                <span className="gradient-text">Let AI Handle the Hard Work.</span>
              </h1>

              <p
                className="text-base lg:text-lg leading-relaxed mb-8"
                style={{ color: "var(--color-text-muted)" }}
              >
                CreatiKai builds AI-powered websites, intelligent chatbots, and n8n automation workflows that eliminate busywork. Our humble, flexible team of IT, SEO, and AI professionals delivers solutions where technology works for you — not the other way around.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <Link href="/resourses/about-us"> <button
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl transition-all text-sm"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    boxShadow: "var(--shadow-btn-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
                    e.currentTarget.style.boxShadow = "var(--shadow-btn-primary-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-primary)";
                    e.currentTarget.style.boxShadow = "var(--shadow-btn-primary)";
                  }}
                >
                  Explore Us
                  <ArrowRight className="w-4 h-4" />
                </button></Link>
                {/* <button
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl border transition-all text-sm"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text-secondary)",
                    borderColor: "var(--color-border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-bg-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-bg)";
                  }}
                >
                  View Case Studies
                  <Award className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
                </button> */}
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 overflow-hidden"
                      style={{
                        borderColor: "var(--color-bg)",
                        backgroundColor: "var(--color-avatar-bg)",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5"
                        style={{ fill: "var(--color-star)", color: "var(--color-star)" }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
                    Trusted by <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>500+</span> businesses
                    <br className="sm:hidden" /> worldwide for AI automation
                  </p>
                </div>
              </div> */}
            </div>

            {/* Right Visual */}
            <div className="relative flex items-center  justify-end lg:justify-end">
              <div className="relative w-full max-w-md  sm:ml-10 lg:ml-16 lg:max-w-xl">
           

                <img  src="https://res.cloudinary.com/djipgt6vc/image/upload/v1781672201/new12_dpfrvo.png"/>
            
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section
        className="py-10 border-y"
        style={{
          backgroundColor: "var(--color-section-alt)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <p
            className="text-center text-[11px] font-bold tracking-widest uppercase mb-6"
            style={{ color: "var(--color-primary-dark)" }}
          >
            Trusted by innovative companies worldwide
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 lg:gap-x-16 transition-all duration-500"
          
          >
            {["https://res.cloudinary.com/djipgt6vc/image/upload/v1781672196/jaipur-rental_ae6egq.png",
             "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672157/jaipur-plots_ham4dt.png",
              "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672201/makemylead-logo_dpdbpt.png",
               "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672190/estateai_b6njch.png",
                "ibigdata.in"].map((brand,index) => (
              <span
                key={index}
                className="text-lg lg:text-xl font-bold  tracking-tight"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {brand === "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672196/jaipur-rental_ae6egq.png" && (
                  <span className="flex items-center gap-1">
                  
                    <img className="w-48" src={brand}  alt="jaipurrental-logo"/>
                  </span>
                )}
                {brand === "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672157/jaipur-plots_ham4dt.png" && (
                  <span className="flex items-center gap-1">
                    <img className="w-48" src={brand} alt="jaipur-plots-logo" />
                  </span>
                )}
                {brand === "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672201/makemylead-logo_dpdbpt.png" && (
                  <span className="flex items-center gap-1">
                   <img className="w-48" src={brand} alt="makemylead-logo"/>
                  </span>
                )}
                {brand === "https://res.cloudinary.com/djipgt6vc/image/upload/v1781672190/estateai_b6njch.png" && (
                  <span className="font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                    <img className="w-48" src={brand} alt="estateai-logo"/></span>
                )}
                {brand === "ibigdata.in" && (
                  <span className="flex items-center gap-1">
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: "var(--color-text-secondary)" }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-text-secondary)" }} />
                    </div> {brand}
                  </span>
                )}
               
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
   
<section className="py-[var(--section-py)] relative overflow-hidden">

  
  

  <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-5 border"
        style={{ 
          backgroundColor: "var(--color-badge-bg)", 
          color: "var(--color-badge-text)",
          borderColor: "var(--color-badge-border)",
        }}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Why Choose CreatiKai?
      </span>
      <h2
        className="text-4xl font-extrabold tracking-tight mb-4"
        style={{ color: "var(--color-primary-dark)" }}
      >
        AI-Powered Solutions for Modern Businesses
      </h2>
      <p 
        className="text-base max-w-2xl mx-auto leading-relaxed"
        style={{ color: "var(--color-text-muted)" }}
      >
        We combine cutting-edge AI technology with humble expertise to deliver automation that transforms how you work.
      </p>
    </div>

    {/* Feature Cards Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
      {features.map((feature, idx) => (
        
        <div
          key={idx}
          className="group relative rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-2"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderColor: "var(--color-border-light)",
            boxShadow: "var(--shadow-sm)",
            backdropFilter: "blur(12px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(37, 99, 235, 0.15), var(--shadow-lg)";
            e.currentTarget.style.borderColor = "var(--color-primary)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            e.currentTarget.style.borderColor = "var(--color-border-light)";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          }}
        >
          
          {/* Subtle gradient glow on hover */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.06), transparent 40%)`,
            }}
          />
          
          {/* Icon Container */}
          <div
            className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            style={{ 
              backgroundColor: "var(--color-icon-bg-1)",
              boxShadow: "0 0 0 0 rgba(37, 99, 235, 0)",
            }}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div>
            {/* Icon glow */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
              style={{ backgroundColor: "var(--color-primary)", opacity: 0 }}
            />
          </div>
          
          {/* Content */}
          <h3 className="relative text-base font-bold mb-3 tracking-tight" style={{ color: "var(--color-text-primary)" }}>
            {feature.title}
          </h3>
          <p className="relative text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {feature.desc}
          </p>

          {/* Bottom accent line */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-1/2 transition-all duration-500"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
        </div>
      ))}
    </div>

    {/* Bottom CTA Row */}
    <div className="mt-16 text-center">
      <p className="text-sm mb-5" style={{ color: "var(--color-text-muted)" }}>
        Ready to eliminate manual work and let AI handle the heavy lifting?
      </p>
      <Link href="/training/ai-courses/ai-training"><button
        className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl transition-all text-sm"
        style={{
          backgroundColor: "var(--color-primary)",
          boxShadow: "var(--shadow-btn-primary)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-primary-hover)";
          e.currentTarget.style.boxShadow = "var(--shadow-btn-primary-hover)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "var(--color-primary)";
          e.currentTarget.style.boxShadow = "var(--shadow-btn-primary)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Start Your Automation Journey
        <ArrowRight className="w-4 h-4" />
      </button></Link>
    </div>
  </div>
</section>

{/* creatikai image section */}
 <section className="min-h-screen bg-[var(--color-bg)]">
      {/* About Us Section */}
      <div className="py-[var(--section-py)] px-[var(--container-padding)]">
        <div className="max-w-[var(--container-max)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <span className="text-[var(--color-primary)] text-sm font-semibold tracking-wider uppercase mb-4 block">
                Company
              </span>

              <h2 className="text-3xl text-[var(--section-title-size)] font-bold leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="gradient-text">Digital Transformation</span>
              </h2>

              <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-8 max-w-lg">
                Creatik IT Solution is a forward-thinking IT services and consulting
                company. We combine innovation, expertise, and technology to
                deliver solutions that accelerate business growth.
              </p>

              <ul className="space-y-4 mb-10">
                {featuresForImageSection.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-icon-bg-1)] text-[var(--color-primary)]">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="text-[var(--color-text-primary)] text-sm font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

             <Link href="/training/digital-marketing/digital-marketing-training-in-jaipur"> <button className="group inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-[var(--transition-base)] shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)]">
                Know More About Us
                <ArrowRight className="w-4 h-4 transition-transform duration-[var(--transition-base)] group-hover:translate-x-1" />
              </button></Link>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                <Image
                  src="https://res.cloudinary.com/djipgt6vc/image/upload/v1781672187/company_ejur2t.png"
                  alt="Creatik IT Solution Office Building"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-[var(--shadow-lg)] p-5 border border-[var(--color-border)] max-w-[180px]">
                <p className="text-[var(--color-primary)] text-2xl font-bold mb-1">
                  10+ Years
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm leading-snug">
                  of Experience in IT Industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </section>
   
<AgencySection/>
  
    </div>
  );
}
