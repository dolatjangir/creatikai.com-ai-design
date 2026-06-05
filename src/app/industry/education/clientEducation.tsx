"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  School,
  Award,
  Calendar,
  Clock,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
  Play,
  BarChart3,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  Infinity,
  Rocket,
  MessageCircle,
  Lock,
  Mail,
  Phone,
  MapPin,
  Quote,
  Layers,
} from "lucide-react";

/* ───────────────────────────────────────────────
   EDUCATION CRM / TRAINING — INDUSTRY SUBMENU PAGE
   CreatiKai Design System — Next.js + Tailwind v4
   No Framer Motion — Pure CSS animations + transitions
   ─────────────────────────────────────────────── */

/* ─── Animation Keyframes (inline style tag for page-level animations) ─── */
const PageStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-15px) translateX(8px); }
      66% { transform: translateY(8px) translateX(-8px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
      to { transform: rotate(-360deg) translateX(120px) rotate(360deg); }
    }
    @keyframes wave {
      0%, 100% { d: path("M0,50 Q25,30 50,50 T100,50"); }
      50% { d: path("M0,50 Q25,70 50,50 T100,50"); }
    }
    .anim-fade-up {
      animation: fadeInUp 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-left {
      animation: slideInLeft 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-right {
      animation: slideInRight 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-scale-in {
      animation: scaleIn 0.5s ease-out forwards;
      opacity: 0;
    }
    .anim-float {
      animation: float 4s ease-in-out infinite;
    }
    .anim-float-slow {
      animation: floatSlow 8s ease-in-out infinite;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-600 { animation-delay: 0.6s; }
    .delay-700 { animation-delay: 0.7s; }
    .delay-800 { animation-delay: 0.8s; }
    .delay-900 { animation-delay: 0.9s; }
    .delay-1000 { animation-delay: 1.0s; }
    .stagger-children > *:nth-child(1) { animation-delay: 0.05s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.1s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.15s; }
    .stagger-children > *:nth-child(4) { animation-delay: 0.2s; }
    .stagger-children > *:nth-child(5) { animation-delay: 0.25s; }
    .stagger-children > *:nth-child(6) { animation-delay: 0.3s; }
    .stagger-children > *:nth-child(7) { animation-delay: 0.35s; }
    .stagger-children > *:nth-child(8) { animation-delay: 0.4s; }
    .stagger-children > *:nth-child(9) { animation-delay: 0.45s; }
    .stagger-children > *:nth-child(10) { animation-delay: 0.5s; }
    .stagger-children > *:nth-child(11) { animation-delay: 0.55s; }
    .stagger-children > *:nth-child(12) { animation-delay: 0.6s; }
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .hover-lift:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px -12px rgba(37, 99, 235, 0.15);
    }
    .hover-scale {
      transition: transform 0.3s ease;
    }
    .hover-scale:hover {
      transform: scale(1.05);
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-out, opacity 0.3s ease-out, padding 0.3s ease;
      opacity: 0;
    }
    .accordion-content.open {
      max-height: 800px;
      opacity: 1;
    }
    .icon-spin-hover:hover .icon-target {
      transform: rotate(15deg) scale(1.1);
    }
    .icon-target {
      transition: transform 0.3s ease;
    }
    .gradient-shimmer {
      background: linear-gradient(90deg, #2563eb 0%, #60a5fa 50%, #2563eb 100%);
      background-size: 200% 100%;
      animation: shimmer 3s ease-in-out infinite;
    }
    .hero-glow-1 {
      animation: floatSlow 10s ease-in-out infinite;
    }
    .hero-glow-2 {
      animation: floatSlow 14s ease-in-out infinite reverse;
    }
    .hero-glow-3 {
      animation: floatSlow 12s ease-in-out infinite 2s;
    }
    .orbit-element-1 {
      animation: orbit 20s linear infinite;
    }
    .orbit-element-2 {
      animation: orbitReverse 25s linear infinite;
    }
    .orbit-element-3 {
      animation: orbit 18s linear infinite reverse;
    }
    .scroll-reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .scroll-reveal.revealed {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>
);

/* ─── Data ─── */
const stats = [
  { icon: Users, value: "15,200+", label: "Students Enrolled" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Clock, value: "36 Hours", label: "Course Content" },
  { icon: Award, value: "Certificate", label: "Industry-Recognized" },
];

const modules = [
  {
    id: 1,
    title: "Education Marketing Fundamentals",
    duration: "5h 45m",
    lessons: 16,
    desc: "Build a rock-solid foundation for education marketing. Understand student personas, enrollment funnels, and the unique psychology of education buyers.",
    topics: [
      "Student Persona Development",
      "Enrollment Funnel Design",
      "Education Buyer Psychology",
      "Seasonal Campaign Planning",
      "Competitor Benchmarking",
    ],
    icon: GraduationCap,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
  },
  {
    id: 2,
    title: "Lead Generation for Schools & Colleges",
    duration: "7h 20m",
    lessons: 21,
    desc: "Master high-intent lead capture for educational institutions. From inquiry forms to campus visit bookings — convert interest into enrollment.",
    topics: [
      "High-Converting Inquiry Forms",
      "Campus Tour Booking Systems",
      "Open Day Campaign Strategy",
      "Parent Engagement Tactics",
      "Scholarship Lead Magnets",
    ],
    icon: Target,
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    id: 3,
    title: "CRM for Education Institutions",
    duration: "6h 30m",
    lessons: 18,
    desc: "Implement education-specific CRM workflows. Automate student journeys from first inquiry through graduation with personalized touchpoints.",
    topics: [
      "Student Journey Mapping",
      "Automated Follow-Up Sequences",
      "Application Status Tracking",
      "Parent Communication Portals",
      "Alumni Engagement Systems",
    ],
    icon: Users,
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    id: 4,
    title: "Paid Advertising for Enrollment",
    duration: "8h 15m",
    lessons: 24,
    desc: "Dominate Meta Ads, Google Ads, and TikTok for student recruitment. Advanced targeting, retargeting, and budget optimization for education.",
    topics: [
      "Meta Ads for Student Recruitment",
      "Google Search for Course Queries",
      "TikTok Campus Content Ads",
      "Lookalike Audience Building",
      "Retargeting Dropout Prospects",
    ],
    icon: BarChart3,
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    id: 5,
    title: "Content Strategy for Education",
    duration: "5h 10m",
    lessons: 14,
    desc: "Create compelling content that resonates with students and parents. Blogs, videos, virtual tours, and success stories that drive applications.",
    topics: [
      "Student Success Story Framework",
      "Virtual Campus Tour Creation",
      "Parent-Focused Content",
      "Video Testimonial Systems",
      "SEO for Course Pages",
    ],
    icon: BookOpen,
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    id: 6,
    title: "Analytics & Enrollment Optimization",
    duration: "4h 20m",
    lessons: 12,
    desc: "Track every touchpoint from awareness to enrollment. Build dashboards that show true cost-per-enrollment and optimize for maximum yield.",
    topics: [
      "Enrollment Attribution Modeling",
      "Cost-Per-Enrollment Tracking",
      "Yield Rate Optimization",
      "Cohort Performance Analysis",
      "Predictive Enrollment Models",
    ],
    icon: TrendingUp,
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "3x Enrollment Growth",
    desc: "Implement proven frameworks to triple student inquiries and convert them into enrollments within one academic cycle.",
  },
  {
    icon: School,
    title: "Institution-Ready Systems",
    desc: "Build CRM and marketing systems specifically designed for schools, colleges, universities, and training centers.",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Recruitment",
    desc: "Leverage AI tools for personalized student outreach, automated follow-ups, and predictive enrollment forecasting.",
  },
  {
    icon: Shield,
    title: "GDPR & FERPA Compliant",
    desc: "All strategies and systems designed with education data privacy regulations in mind from day one.",
  },
  {
    icon: Rocket,
    title: "Launch in 14 Days",
    desc: "Follow our rapid deployment framework to go from strategy to live enrollment campaigns in under two weeks.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    desc: "Get unlimited access to all course materials, quarterly updates, templates, and the private education marketer community.",
  },
];

const testimonials = [
  {
    name: "Dr. Amanda Foster",
    role: "Dean of Admissions, Westbridge University",
    image: "AF",
    quote:
      "We implemented the enrollment funnel from Module 2 and saw a 340% increase in qualified inquiries within the first semester. The CRM automation alone saved our team 20 hours per week.",
    rating: 5,
    metric: "340% Inquiries",
  },
  {
    name: "Raj Patel",
    role: "Marketing Director, Global EdTech",
    image: "RP",
    quote:
      "The education-specific ad strategies are unlike anything I've seen. Our cost-per-enrollment dropped from $450 to $89. This course paid for itself in the first month.",
    rating: 5,
    metric: "$89 Cost/Enroll",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Digital, St. Mary's Academy",
    image: "LT",
    quote:
      "As a K-12 school, we struggled with parent engagement. The parent-focused content strategy and automated communication workflows transformed our open day attendance from 40 to 280 families.",
    rating: 5,
    metric: "7x Open Day",
  },
];

const faqs = [
  {
    q: "Is this course suitable for small private schools?",
    a: "Absolutely. The frameworks scale from small private schools to large universities. We include specific playbooks for different institution sizes and budgets.",
  },
  {
    q: "Do I need marketing experience to benefit?",
    a: "No. We start with education marketing fundamentals and build to advanced strategies. Beginners and experienced marketers both find transformative value.",
  },
  {
    q: "How does this differ from generic marketing courses?",
    a: "Every strategy, template, and workflow is built specifically for education. We address unique challenges like long decision cycles, multiple stakeholders (students + parents), and seasonal enrollment patterns.",
  },
  {
    q: "Will this work for online course creators?",
    a: "Yes. While focused on traditional institutions, all frameworks adapt perfectly to online education, bootcamps, and EdTech platforms.",
  },
  {
    q: "What about data privacy compliance?",
    a: "Every module includes compliance guidance. We cover GDPR, FERPA, COPPA, and regional education data laws to ensure your marketing stays fully compliant.",
  },
];

/* ─── Scroll Reveal Hook (Intersection Observer) ─── */
function useScrollReveal() {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            if (id) {
              setRevealed((prev) => new Set([...prev, id]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    const elements = document.querySelectorAll("[data-reveal-id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return revealed;
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 min-h-[130vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0f172a]">
        {/* Gradient Orbs */}
        <div className="hero-glow-1 absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] bg-[#2563eb]" />
        <div className="hero-glow-2 absolute bottom-[5%] right-[10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] bg-[#60a5fa]" />
        <div className="hero-glow-3 absolute top-[50%] left-[60%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] bg-[#93c5fd]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating Orbit Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-element-1 absolute w-3 h-3 rounded-full bg-[#60a5fa] opacity-40" />
          <div className="orbit-element-2 absolute w-2 h-2 rounded-full bg-[#93c5fd] opacity-30" />
          <div className="orbit-element-3 absolute w-4 h-4 rounded-full bg-[#2563eb] opacity-25" />
        </div>

        {/* Bottom Fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" /> */}
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <GraduationCap className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Education Industry Specialization</span>
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-100 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            The Complete{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] bg-clip-text text-transparent">
              Education Marketing
            </span>{" "}
            & Enrollment System
          </h1>

          {/* Subheadline */}
          <p className="anim-fade-up delay-200 text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl">
            Master the art and science of student recruitment. Build automated enrollment 
            engines that fill seats — from first inquiry to campus arrival — for schools, 
            colleges, universities, and online educators.
          </p>

          {/* CTA Buttons */}
          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-base hover:bg-[#f8fafc] transition-all shadow-lg hover:shadow-xl"
            >
              Enroll Now — $697
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Free Preview
            </button>
          </div>

          {/* Trust Bar */}
          <div className="anim-fade-up delay-400 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["AF", "RP", "LT", "MK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#2563eb] border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#94a3b8]">
                <span className="font-semibold text-white">15,200+</span> enrolled
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              ))}
              <span className="text-sm text-[#94a3b8] ml-1">
                <span className="font-semibold text-white">4.9/5</span> rating
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Shield className="w-4 h-4 text-[#10b981]" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  return (
    <section className="py-12 bg-white border-b border-[#f1f5f9]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="anim-fade-up flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-md transition-all duration-300 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="w-6 h-6 text-[#2563eb] mb-3" />
              <p className="text-2xl font-bold text-[#0f172a]">{stat.value}</p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Curriculum ─── */
function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section id="curriculum" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Complete Curriculum</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Fill Every Seat
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            6 comprehensive modules, 105 video lessons, and 36 hours of education-specific training designed for real enrollment results.
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {modules.map((module, i) => {
            const isOpen = openModule === module.id;
            return (
              <div
                key={module.id}
                className="anim-fade-up rounded-2xl border transition-all duration-300 overflow-hidden hover-lift"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  backgroundColor: isOpen ? "#ffffff" : "rgba(255,255,255,0.6)",
                  borderColor: isOpen ? "#dbeafe" : "#e2e8f0",
                  boxShadow: isOpen ? "0 10px 40px -12px rgba(37, 99, 235, 0.12)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : module.id)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300"
                    style={{ backgroundColor: module.bg }}
                  >
                    <module.icon className="w-6 h-6 icon-target" style={{ color: module.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: module.bg, color: module.color }}
                      >
                        Module {module.id}
                      </span>
                      <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {module.duration}
                      </span>
                      <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                        <Layers className="w-3 h-3" /> {module.lessons} lessons
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a]">{module.title}</h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? module.bg : "#f1f5f9",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" style={{ color: isOpen ? module.color : "#94a3b8" }} />
                  </div>
                </button>

                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#475569] mb-4 max-w-3xl">{module.desc}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {module.topics.map((topic, ti) => (
                        <div
                          key={ti}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9] hover:border-[#dbeafe] transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: module.color }} />
                          <span className="text-sm font-medium text-[#0f172a]">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Outcomes ─── */
function Outcomes() {
  return (
    <section id="outcomes" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <Target className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">Learning Outcomes</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            What You Will{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Achieve
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            By the end of this course, you'll have the skills, systems, and confidence to drive consistent enrollment growth for any educational institution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="anim-fade-up group p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <outcome.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{outcome.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section id="reviews" className="py-[var(--section-py)] bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb] opacity-10 blur-[120px] rounded-full" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
            <MessageCircle className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Education Leaders Speak</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Results That{" "}
            <span className="text-[#60a5fa]">Fill Classrooms</span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Join education marketers worldwide who have transformed their enrollment numbers with our proven systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="anim-fade-up p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, ri) => (
                  <Star key={ri} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#2563eb] opacity-40 mb-3" />
              <p className="text-white/90 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-sm font-bold">
                    {t.image}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#94a3b8]">{t.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#60a5fa] text-xs font-bold">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <Lock className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Simple Pricing</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Institution's Growth
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            One payment. Lifetime access. No subscriptions. No hidden fees. Just enrollments.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="anim-scale-in delay-300 relative rounded-3xl bg-white border-2 border-[#2563eb] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Education Marketing Mastery</h3>
              <p className="text-[#475569] mb-8">Complete system for education enrollment growth</p>

              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#0f172a]">$697</span>
                <span className="text-lg text-[#94a3b8] line-through mb-2">$2,997</span>
              </div>
              <p className="text-sm text-[#10b981] font-semibold mb-8">Save $2,300 — Limited Time</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "105 HD Video Lessons (36 hours)",
                  "Education-Specific Templates & Scripts",
                  "Private Education Marketer Community",
                  "Weekly Live Q&A with Industry Experts",
                  "Industry-Recognized Certificate",
                  "Lifetime Updates & New Modules",
                  "30-Day Money-Back Guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#475569]">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-full bg-[#2563eb] text-white font-bold text-lg hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)] mb-4">
                Enroll Now — Get Instant Access
              </button>
              <p className="text-xs text-[#94a3b8]">
                Secure payment. Instant access. 30-day refund guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <MessageCircle className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">FAQ</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 stagger-children">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="anim-fade-up rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                  borderColor: isOpen ? "#dbeafe" : "#e2e8f0",
                  boxShadow: isOpen ? "0 4px 20px -4px rgba(37, 99, 235, 0.1)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#0f172a] pr-4">{faq.q}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? "#eff6ff" : "#f1f5f9",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" style={{ color: isOpen ? "#2563eb" : "#94a3b8" }} />
                  </div>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <p className="px-6 pb-6 text-[#475569] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-[var(--section-py)] bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb] opacity-20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 text-center">
        <div>
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-[#60a5fa]" />
            <span className="text-sm font-semibold text-white">Ready to Fill Every Seat?</span>
          </div>

          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Start Building Enrollment Engines That{" "}
            <span className="text-[#60a5fa]">Never Stop Working</span>
          </h2>

          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Join 15,200+ education marketers who have already transformed their enrollment numbers. Your next cohort of students is waiting.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Enroll Now for $697
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function EducationTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStyles />
      <Hero />
      <StatsBar />
      <Curriculum />
      <Outcomes />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}