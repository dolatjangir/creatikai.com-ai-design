"use client";

import React, { useState } from "react";
import {
  Building2,
  Home,
  MapPin,
  Key,
  TrendingUp,
  Users,
  Star,
  Clock,
  Award,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Play,
  Target,
  BookOpen,
  BarChart3,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Lock,
  Shield,
  Infinity,
  Rocket,
  Lightbulb,
  Zap,
  Eye,
  MousePointerClick,
  DollarSign,
  Quote,
  Layers,
  Camera,
  PenTool,
  Fingerprint,
  Handshake,
  BadgeCheck,
  FileText,
  Landmark,
  TreePine,
  Sun,
  Moon,
  Sparkles,
  Gem,
  Crown,
} from "lucide-react";

/* ───────────────────────────────────────────────
   REAL ESTATE CRM / TRAINING — INDUSTRY PAGE
   CreatiKai Design System — Next.js + Tailwind v4
   Pure CSS Animations — No Framer Motion
   ─────────────────────────────────────────────── */

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
      33% { transform: translateY(-18px) translateX(10px); }
      66% { transform: translateY(10px) translateX(-12px); }
    }
    @keyframes floatSlower {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-10px) translateX(15px); }
      50% { transform: translateY(-20px) translateX(-8px); }
      75% { transform: translateY(5px) translateX(12px); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.15; }
      50% { opacity: 0.25; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
      to { transform: rotate(-360deg) translateX(140px) rotate(360deg); }
    }
    @keyframes orbitSmall {
      from { transform: rotate(0deg) translateX(60px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .anim-fade-up {
      animation: fadeInUp 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
      opacity: 0;
    }
    .anim-scale-in {
      animation: scaleIn 0.5s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-right {
      animation: slideRight 0.6s ease-out forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-600 { animation-delay: 0.6s; }
    .delay-700 { animation-delay: 0.7s; }
    .delay-800 { animation-delay: 0.8s; }
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
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.3s ease;
    }
    .hover-lift:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 48px -12px rgba(37, 99, 235, 0.18);
    }
    .hover-scale {
      transition: transform 0.3s ease;
    }
    .hover-scale:hover {
      transform: scale(1.04);
    }
    .icon-bounce:hover .icon-target {
      transform: translateY(-4px) scale(1.12);
    }
    .icon-target {
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, padding 0.3s ease;
      opacity: 0;
    }
    .accordion-content.open {
      max-height: 900px;
      opacity: 1;
    }
    .gradient-shimmer {
      background: linear-gradient(90deg, #2563eb 0%, #60a5fa 50%, #2563eb 100%);
      background-size: 200% 100%;
      animation: shimmer 3s ease-in-out infinite;
    }
    .hero-glow-1 {
      animation: floatSlow 12s ease-in-out infinite;
    }
    .hero-glow-2 {
      animation: floatSlower 16s ease-in-out infinite reverse;
    }
    .hero-glow-3 {
      animation: floatSlow 10s ease-in-out infinite 3s;
    }
    .hero-glow-4 {
      animation: floatSlower 14s ease-in-out infinite 1s;
    }
    .pulse-glow {
      animation: pulseGlow 4s ease-in-out infinite;
    }
    .orbit-1 {
      animation: orbit 22s linear infinite;
    }
    .orbit-2 {
      animation: orbitReverse 28s linear infinite;
    }
    .orbit-3 {
      animation: orbitSmall 18s linear infinite reverse;
    }
    .count-anim {
      animation: countUp 0.8s ease-out forwards;
      opacity: 0;
    }
  `}</style>
);

/* ─── Data ─── */
const stats = [
  { icon: Users, value: "18,500+", label: "Agents Trained" },
  { icon: Star, value: "4.9/5", label: "Agent Rating" },
  { icon: Clock, value: "42 Hours", label: "Course Content" },
  { icon: Award, value: "Certified", label: "NAR-Recognized" },
];

const modules = [
  {
    id: 1,
    title: "Real Estate CRM Foundations",
    duration: "6h 30m",
    lessons: 18,
    desc: "Build the perfect tech stack for real estate success. Master lead capture, contact management, pipeline tracking, and automation workflows designed specifically for property professionals.",
    topics: [
      "Lead Capture & Routing Systems",
      "Contact Database Architecture",
      "Property Pipeline Stages",
      "Buyer & Seller Segmentation",
      "Automated Follow-Up Workflows",
    ],
    icon: Building2,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
  },
  {
    id: 2,
    title: "Lead Generation Mastery",
    duration: "8h 15m",
    lessons: 22,
    desc: "Generate a consistent pipeline of qualified buyers and sellers. Master Facebook Ads, Google Ads, Zillow integration, and organic strategies that fill your calendar with appointments.",
    topics: [
      "Facebook Ads for Listings",
      "Google Local Service Ads",
      "Zillow Premier Agent Setup",
      "Open House Lead Capture",
      "Referral System Automation",
    ],
    icon: Target,
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    id: 3,
    title: "Property Marketing & Listings",
    duration: "7h 45m",
    lessons: 20,
    desc: "Create listings that sell themselves. Professional photography guides, virtual tour creation, listing descriptions that convert, and multi-platform syndication strategies.",
    topics: [
      "Listing Photography Best Practices",
      "Virtual Tour & 3D Walkthroughs",
      "Compelling Listing Descriptions",
      "MLS & Portal Syndication",
      "Social Media Listing Blasts",
    ],
    icon: Camera,
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    id: 4,
    title: "Buyer & Seller Nurturing",
    duration: "8h 30m",
    lessons: 24,
    desc: "Never lose a lead to follow-up failure. Build automated nurture sequences, market update campaigns, and personalized touchpoints that keep you top-of-mind until closing.",
    topics: [
      "Drip Campaign Architecture",
      "Market Update Newsletters",
      "New Listing Alert Systems",
      "Price Drop Notifications",
      "Closing Timeline Automations",
    ],
    icon: Handshake,
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    id: 5,
    title: "Transaction Management",
    duration: "5h 20m",
    lessons: 14,
    desc: "Streamline every deal from contract to close. Document management, deadline tracking, commission calculations, and client communication portals that reduce admin time by 70%.",
    topics: [
      "Deal Pipeline Management",
      "Document Checklist Automation",
      "Deadline & Milestone Tracking",
      "Commission Split Calculations",
      "Client Portal Setup",
    ],
    icon: FileText,
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    id: 6,
    title: "Analytics & Business Growth",
    duration: "5h 40m",
    lessons: 16,
    desc: "Track what matters and scale what works. Custom dashboards, ROI tracking, team performance metrics, and data-driven strategies to grow from solo agent to brokerage owner.",
    topics: [
      "Lead Source ROI Tracking",
      "Agent Performance Dashboards",
      "Market Share Analysis",
      "Team Scaling Frameworks",
      "Brokerage Growth Strategy",
    ],
    icon: BarChart3,
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "3x Listing Volume",
    desc: "Implement proven frameworks to triple your active listings within 90 days through systematic lead generation and nurture.",
  },
  {
    icon: Home,
    title: "Buyer-Ready Pipeline",
    desc: "Build a pre-qualified buyer database that closes faster and refers more. Never start a month at zero again.",
  },
  {
    icon: Zap,
    title: "80% Admin Reduction",
    desc: "Automate repetitive tasks, document management, and follow-ups. Spend your time showing homes, not managing spreadsheets.",
  },
  {
    icon: Shield,
    title: "Compliance Built-In",
    desc: "Every workflow, template, and automation designed with NAR ethics, state regulations, and fair housing compliance in mind.",
  },
  {
    icon: Rocket,
    title: "Team to Brokerage",
    desc: "Scale from solo agent to team lead to brokerage owner with systems that grow as you grow. No rebuild required.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    desc: "Get unlimited access to all materials, quarterly market updates, new platform integrations, and the private agent community.",
  },
];

const testimonials = [
  {
    name: "Michael Torres",
    role: "Top Producer, Keller Williams",
    image: "MT",
    quote:
      "I went from 12 transactions a year to 47 in my first full year after this course. The CRM automation alone freed up 15 hours a week. I now have a team of 4 agents using these exact systems.",
    rating: 5,
    metric: "47 Deals/Year",
  },
  {
    name: "Sarah Chen",
    role: "Broker Owner, Chen Realty Group",
    image: "SC",
    quote:
      "We implemented the transaction management system across our 12-agent team. Closing errors dropped to zero, and our average days-on-market decreased by 40%. This course paid for itself in week one.",
    rating: 5,
    metric: "40% Faster Closes",
  },
  {
    name: "David Park",
    role: "Solo Agent, Compass",
    image: "DP",
    quote:
      "The lead nurturing sequences are incredible. My conversion rate from inquiry to appointment went from 8% to 31%. The Facebook Ads module alone generated $2.4M in listings my first quarter.",
    rating: 5,
    metric: "31% Conversion",
  },
];

const faqs = [
  {
    q: "Is this suitable for brand new agents?",
    a: "Absolutely. We start with real estate CRM fundamentals and build to advanced strategies. Whether you're getting your license next week or closing 50 deals a year, you'll find transformative systems.",
  },
  {
    q: "Which CRM platforms do you cover?",
    a: "We cover all major real estate CRMs including Follow Up Boss, LionDesk, kvCORE, Chime, Propertybase, and Salesforce. The frameworks work across any platform.",
  },
  {
    q: "Will this work for commercial real estate?",
    a: "Yes. While focused on residential, all lead generation, nurturing, and transaction management frameworks adapt perfectly to commercial, land, and property management verticals.",
  },
  {
    q: "How is this different from my brokerage training?",
    a: "Brokerage training teaches you their specific tools. This course teaches you universal systems that work anywhere — so you're never dependent on one company's technology.",
  },
  {
    q: "Do you cover team and brokerage scaling?",
    a: "Extensively. Modules 5 and 6 are dedicated to scaling from solo agent to team lead to brokerage owner, including hiring, commission structures, and team performance management.",
  },
];

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 min-h-[92vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0f172a]">
        {/* Large Gradient Orbs */}
        <div className="hero-glow-1 absolute top-[5%] left-[0%] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[140px] bg-[#2563eb]" />
        <div className="hero-glow-2 absolute bottom-[0%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px] bg-[#60a5fa]" />
        <div className="hero-glow-3 absolute top-[40%] left-[55%] w-[350px] h-[350px] rounded-full opacity-[0.10] blur-[90px] bg-[#93c5fd]" />
        <div className="hero-glow-4 absolute top-[15%] right-[30%] w-[250px] h-[250px] rounded-full opacity-[0.08] blur-[70px] bg-[#1e40af]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Diagonal Accent Lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(30deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)`,
          }}
        />

        {/* Orbiting Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-1 absolute w-2.5 h-2.5 rounded-full bg-[#60a5fa] opacity-50" />
          <div className="orbit-2 absolute w-2 h-2 rounded-full bg-[#93c5fd] opacity-40" />
          <div className="orbit-3 absolute w-3 h-3 rounded-full bg-[#2563eb] opacity-30" />
        </div>

        {/* Floating House Icons */}
        <div className="absolute top-[20%] left-[15%] anim-float opacity-[0.06]">
          <Home className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-[25%] right-[20%] anim-float-slow opacity-[0.05]" style={{ animationDelay: "2s" }}>
          <Building2 className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-[60%] left-[70%] anim-float opacity-[0.04]" style={{ animationDelay: "4s" }}>
          <Key className="w-16 h-16 text-white" />
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Real Estate Industry Specialization</span>
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-100 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            The Complete{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] bg-clip-text text-transparent">
              Real Estate CRM
            </span>{" "}
            & Lead Generation System
          </h1>

          {/* Subheadline */}
          <p className="anim-fade-up delay-200 text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl">
            Master the technology, marketing, and systems that top-producing agents use to 
            close more deals, nurture every lead, and scale from solo agent to brokerage owner.
          </p>

          {/* CTA Buttons */}
          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-base hover:bg-[#f8fafc] transition-all shadow-lg hover:shadow-xl"
            >
              Enroll Now — $797
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
                {["MT", "SC", "DP", "JK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#2563eb] border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#94a3b8]">
                <span className="font-semibold text-white">18,500+</span> agents enrolled
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
              Dominate Your Market
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            6 comprehensive modules, 114 video lessons, and 42 hours of real estate-specific training designed for agents who want to close more deals.
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
                  backgroundColor: isOpen ? "#ffffff" : "rgba(255,255,255,0.6)",
                  borderColor: isOpen ? "#dbeafe" : "#e2e8f0",
                  boxShadow: isOpen ? "0 12px 40px -12px rgba(37, 99, 235, 0.12)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : module.id)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 icon-bounce"
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
            By the end of this course, you'll have the systems, automations, and strategies to become a top-producing agent in any market.
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
            <Crown className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Top Producer Testimonials</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Results That{" "}
            <span className="text-[#60a5fa]">Close Deals</span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Join thousands of agents who have transformed their business with real estate systems that actually work.
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
              Real Estate Career
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            One payment. Lifetime access. No subscriptions. No hidden fees. Just closed deals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="anim-scale-in delay-300 relative rounded-3xl bg-white border-2 border-[#2563eb] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Real Estate CRM Mastery</h3>
              <p className="text-[#475569] mb-8">Complete system for agent productivity & deal growth</p>

              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#0f172a]">$797</span>
                <span className="text-lg text-[#94a3b8] line-through mb-2">$3,497</span>
              </div>
              <p className="text-sm text-[#10b981] font-semibold mb-8">Save $2,700 — Limited Time Offer</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "114 HD Video Lessons (42 hours)",
                  "Real Estate Templates & Scripts",
                  "Private Agent Community (18,500+)",
                  "Weekly Live Q&A with Top Producers",
                  "NAR-Recognized Certificate",
                  "Lifetime Updates & New Integrations",
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
            <span className="text-sm font-semibold text-white">Ready to Close More Deals?</span>
          </div>

          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Start Building the Real Estate Business{" "}
            <span className="text-[#60a5fa]">You Always Wanted</span>
          </h2>

          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Join 18,500+ agents who have already transformed their business. Your next closing starts with the right system.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Enroll Now for $797
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
export default function RealEstateTrainingPage() {
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