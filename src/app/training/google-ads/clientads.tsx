"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import { Infinity, LucideIcon } from "lucide-react";
import {
  Play,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  Clock,
  BarChart3,
  Target,
  Megaphone,
  Search,
  MousePointerClick,
  Zap,
  Star,
  ArrowRight,
  BookOpen,
  Shield,
  Sparkles,
  Rocket,
  Flame,
  Globe,
  Smartphone,
  Video,
  Hash,
  BarChart2,
  PieChart,
  LineChart,
  Calendar,
  Layers,

  PaintBucket,
  SprayCan,
  Highlighter,
  Pen,
  PenBox,
  PenLine,
  PenToolIcon,
  PencilIcon,
  PencilLine,
  PencilRuler,
  PencilOff,
  Signature,
  Type,
  TypeOutline,
  Text,
  TextCursor,
  TextCursorInput,
  TextSelect,
  TextSearch,
  QuoteIcon,

  Code,
  Code2,
  CodeIcon,
  CodeXml,
 
  Terminal,
  TerminalSquare,
  TerminalIcon,

  Bug,
  BugOff,
  BugPlay,
 
  Antenna,
  Satellite,
  SatelliteDish,
  Radar,
  WifiIcon,
  WifiOff,
 
  Cable,
  CableCar,
  TrainFront,
  Train,
  TrainTrack,
  TramFront,
  Bus,
  BusFront,
  Car,
  CarFront,
  CarTaxiFront,
  Truck,
  Bike,
  Plane,
  PlaneTakeoff,
  PlaneLanding,
  PlaneIcon,
  Sailboat,
  Ship,
  ShipWheel,
  Anchor,
  AnchorIcon,
  Fuel,
  FuelIcon,
  GaugeIcon,
  GaugeCircle,
  GaugeCircleIcon,
 
  MessageCircle,
  ScanSearch,
  Bot,
  Trophy,
  Quote,
  Lock,
  Check,
} from "lucide-react";
import InquiryForm from "@/components/inquirycomponent";

/* ───────────────────────────────────────────────
   GOOGLE ADS CAMPAIGN TRAINING PAGE
   CreatiKai Design System — Next.js + Tailwind v4
   No Navbar / No Footer (handled externally)
   ─────────────────────────────────────────────── */

type Outcome = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ─── Data ─── */
const stats = [
  { icon: Users, value: "9,800+", label: "Students Enrolled" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Clock, value: "32 Hours", label: "Course Content" },
  { icon: Award, value: "Certificate", label: "Google-Recognized" },
];

const modules = [
  {
    id: 1,
    title: "Google Ads Fundamentals",
    duration: "5h 15m",
    lessons: 14,
    desc: "Master the Google Ads ecosystem from the ground up. Understand auction mechanics, quality score, ad rank, and campaign structure that wins.",
    topics: [
      "Google Ads Account Architecture",
      "Auction Dynamics & Ad Rank",
      "Quality Score Deep Dive",
      "Campaign Types & Objectives",
      "Billing & Budget Management",
    ],
    icon: Search,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
  },
  {
    id: 2,
    title: "Search Campaign Mastery",
    duration: "7h 30m",
    lessons: 20,
    desc: "Build high-intent search campaigns that capture buyers at the exact moment of decision. Keyword research, match types, and negative keyword strategy.",
    topics: [
      "Advanced Keyword Research",
      "Match Type Strategy (2026)",
      "Negative Keyword Sculpting",
      "Ad Copywriting for CTR",
      "Responsive Search Ads (RSA)",
    ],
    icon: ScanSearch,
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    id: 3,
    title: "Performance Max & Automation",
    duration: "6h 45m",
    lessons: 16,
    desc: "Leverage Google's AI-powered campaigns. Asset groups, audience signals, and feed optimization for maximum reach with minimal manual work.",
    topics: [
      "Performance Max Setup",
      "Audience Signal Optimization",
      "Asset Group Strategy",
      "Feed Quality & Optimization",
      "AI Bidding Strategies",
    ],
    icon: Bot,
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    id: 4,
    title: "YouTube & Display Advertising",
    duration: "5h 20m",
    lessons: 13,
    desc: "Dominate visual advertising with YouTube in-stream, discovery ads, and the Google Display Network. Creative strategy meets precise targeting.",
    topics: [
      "YouTube Ad Formats",
      "In-Market & Custom Audiences",
      "Display Network Targeting",
      "Video Creative Best Practices",
      "Remarketing Lists (RLSA)",
    ],
    icon: Video,
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    id: 5,
    title: "Conversion Tracking & Analytics",
    duration: "4h 30m",
    lessons: 11,
    desc: "Set up bulletproof tracking. Enhanced conversions, GA4 integration, offline conversion import, and attribution modeling for accurate ROAS.",
    topics: [
      "Google Tag & GTM Setup",
      "Enhanced Conversions",
      "GA4 + Ads Integration",
      "Attribution Modeling",
      "Offline Conversion Import",
    ],
    icon: BarChart2,
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    id: 6,
    title: "Scaling & Advanced Optimization",
    duration: "3h 20m",
    lessons: 9,
    desc: "Take campaigns from profitable to dominant. Portfolio bid strategies, experiment frameworks, and scaling tactics used by top agencies.",
    topics: [
      "Portfolio Bid Strategies",
      "Campaign Experiments",
      "Budget Pacing & Scaling",
      "Competitor Conquesting",
      "Agency Management Workflows",
    ],
    icon: Rocket,
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
];

const outcomes: Outcome[] = [
  {
    icon: TrendingUp,
    title: "5x ROAS Blueprint",
    desc: "Implement our proven frameworks to consistently achieve 5x+ return on ad spend within 60 days of launch.",
  },
  {
    icon: Search,
    title: "Search Dominance",
    desc: "Capture high-intent traffic across Google Search, Shopping, and Discovery with precision-targeted campaigns.",
  },
  {
    icon: Bot,
    title: "AI-First Automation",
    desc: "Leverage Performance Max, Smart Bidding, and AI-driven creative to reduce manual work by 70% while improving results.",
  },
  {
    icon: Shield,
    title: "Bulletproof Tracking",
    desc: "Set up conversion tracking that accounts for every dollar spent with 99%+ accuracy using enhanced conversions.",
  },
  {
    icon: Rocket,
    title: "Scale Without Breaking",
    desc: "Follow our systematic scaling framework to grow budgets 10x while maintaining or improving efficiency metrics.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access + Updates",
    desc: "Google changes constantly. Get lifetime access to all materials plus quarterly updates reflecting the latest platform changes.",
  },
];

const testimonials = [
  {
    name: "David Park",
    role: "PPC Director, Apex Digital",
    image: "DP",
    quote:
      "We restructured all client accounts using this course's framework. Average client ROAS improved from 2.1x to 6.3x in 45 days. The Performance Max module alone is worth 10x the price.",
    rating: 5,
    metric: "6.3x ROAS",
  },
  {
    name: "Elena Rodriguez",
    role: "E-commerce Owner, LuxeHome",
    image: "ER",
    quote:
      "I went from wasting ₹3K/month on Google Ads to generating ₹18K/month in profitable revenue. The tracking setup module fixed everything I was doing wrong.",
    rating: 5,
    metric: "₹18K/mo Revenue",
  },
  {
    name: "James Thompson",
    role: "Freelance PPC Consultant",
    image: "JT",
    quote:
      "This course gave me the confidence to quit my agency job and go freelance. I now charge ₹5K/month per client and deliver results they never saw before.",
    rating: 5,
    metric: "₹5K/mo Clients",
  },
];

const faqs = [
  {
    q: "Do I need prior Google Ads experience?",
    a: "No. We start from absolute basics and build to advanced strategies. Whether you're a complete beginner or a seasoned marketer, you'll find frameworks that transform your results.",
  },
  {
    q: "How is this different from Google's free certification?",
    a: "Google's certification teaches you how to use the platform. This course teaches you how to PROFIT from the platform. We focus on real-world strategies, not theory.",
  },
  {
    q: "What if Google updates the platform?",
    a: "We update the course quarterly to reflect all major platform changes. As a student, you get lifetime access to every update at no extra cost.",
  },
  {
    q: "Will this work for my specific industry?",
    a: "Yes. We cover strategies for e-commerce, B2B lead gen, SaaS, local services, and more. The frameworks are adaptable to any vertical.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "Absolutely. 30-day no-questions-asked money-back guarantee. If you don't see the value, we'll refund every penny.",
  },
];

/* ─── Animated Background Particles ─── */
function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}



/* ─── Stats Bar ─── */
function StatsBar() {
  return (
    <section className="py-12 bg-white border-b border-[#f1f5f9]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-md transition-all"
            >
              <stat.icon className="w-6 h-6 text-[#2563eb] mb-3" />
              <p className="text-2xl font-bold text-[#0f172a]">{stat.value}</p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Complete Curriculum</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4"
          >
            Complete Google Ads{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Training Program
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#475569] max-w-2xl mx-auto">
6 modules, 83 lessons, and 32+ hours of hands-on Google Ads training to help you create,
 optimize, and scale profitable campaigns.        
   </motion.p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, i) => {
            const isOpen = openModule === module.id;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-white shadow-lg border-[#dbeafe]" : "bg-white/60 border-[#e2e8f0] hover:border-[#dbeafe]"
                }`}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : module.id)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: module.bg }}
                  >
                    <module.icon className="w-6 h-6" style={{ color: module.color }} />
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
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                    style={{ backgroundColor: isOpen ? module.bg : "#f1f5f9" }}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" style={{ color: module.color }} />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#94a3b8]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-[#475569] mb-4 max-w-3xl">{module.desc}</p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {module.topics.map((topic, ti) => (
                            <div
                              key={ti}
                              className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9]"
                            >
                              <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: module.color }} />
                              <span className="text-sm font-medium text-[#0f172a]">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <Target className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">Learning Outcomes</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4"
          >
           What You'll Achieve with{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
               This Google Ads Course
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#475569] max-w-2xl mx-auto">
Gain the skills to create, manage, and optimize Google Ads campaigns that drive leads, sales, and measurable ROI. Master campaign strategy, 
audience targeting, conversion tracking, and performance optimization.  
        </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => {
const OutcomeIcon = outcome.icon;
return(
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <OutcomeIcon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{outcome.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{outcome.desc}</p>
            </motion.div>
          )})}
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
            <Trophy className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Student Success Stories</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4"
          >
            Results That{" "}
            <span className="text-[#60a5fa]">Speak for Themselves</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their Google Ads performance with our proven frameworks.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
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
            </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <Lock className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Simple Pricing</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4"
          >
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Future Success
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#475569] max-w-2xl mx-auto">
            One payment. Lifetime access. No subscriptions. No hidden fees. Just profitable campaigns.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white border-2 border-[#2563eb] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Complete Google Ads Mastery</h3>
              <p className="text-[#475569] mb-8">Everything you need to become a Google Ads expert</p>

              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#0f172a]">₹16,999</span>
                <span className="text-lg text-[#94a3b8] line-through mb-2">₹24,999</span>
              </div>
              <p className="text-sm text-[#10b981] font-semibold mb-8">Save ₹8,000 — Limited Time Offer</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "83 HD Video Lessons (32 hours)",
                  "Downloadable Templates & Scripts",
                  "Private Community Access",
                  "Weekly Live Q&A Calls",
                  "Google-Recognized Certificate",
                  "Lifetime Updates",
                  "30-Day Money-Back Guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#475569]">
                    <Check className="w-5 h-5 text-[#10b981] shrink-0" />
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
        </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <MessageCircle className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">FAQ</span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "bg-[#f8fafc] border-[#dbeafe] shadow-md" : "bg-white border-[#e2e8f0]"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#0f172a] pr-4">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-[#eff6ff] rotate-180" : "bg-[#f1f5f9]"
                    }`}
                  >
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-[#2563eb]" : "text-[#94a3b8]"}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#475569] leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-[#60a5fa]" />
            <span className="text-sm font-semibold text-white">Ready to Launch?</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4"
          >
            Master Google Ads & {" "}
            <span className="text-[#60a5fa]">Performance Marketing</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
Learn Search Ads, Performance Max, keyword research, bidding strategies,
 and conversion tracking to maximize ROI and campaign performance.        
   </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Enroll Now for ₹16,999
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore Curriculum
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function GoogleAdsTrainingPage() {
  const [formOpen, setFormOpen] = useState(false); 
  return (
    <main className="min-h-screen bg-white">
       <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} courseName="Google ADS Training" />
          <section className="relative overflow-hidden min-h-[120vh] pt-32 flex items-center">
      {/* Multi-layer Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
         style={{
    backgroundImage: "url('/google-ads-hero.png')",
  }}
        />
<div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/70 to-[#0f172a]/90" />
        {/* Animated Gradient Orbs */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #60a5fa 0%, #2563eb 50%, transparent 70%)",
            animation: "float-slow 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)",
            animation: "float-slower 15s ease-in-out infinite",
          }}
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)`,
          }}
        />

        {/* Floating Particles */}
        <ParticleField />

        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">2026 Google Ads Curriculum — Fully Updated</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-white mb-6"
          >
           Google Ads Course{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] bg-clip-text text-transparent">
               Create High-Performing 
            </span>{" "}
            PPC Campaigns
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl"
          >
           Learn Google Ads, Search Ads, Display Ads, Shopping Ads,
            and Performance Max campaigns. Master keyword research, bidding strategies, 
           conversion tracking, and campaign optimization to generate more leads, sales, and ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
            onClick={() => setFormOpen(true)}
             
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-base hover:bg-[#f8fafc] transition-all shadow-[0_4px_6px_-1px_rgba(255,255,255,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.3)]"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Free Preview
            </button>
          </motion.div>

          {/* Trust Bar */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["DP", "ER", "JT", "MK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#2563eb] border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#94a3b8]">
                <span className="font-semibold text-white">9,800+</span> enrolled
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
          </motion.div>
        </motion.div>
      </div>
    </section>


    {/* components */}
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


