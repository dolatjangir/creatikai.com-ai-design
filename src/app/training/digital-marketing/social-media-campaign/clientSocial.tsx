"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
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
  Share2,
  MessageCircle,
  Zap,
  Star,
  ArrowRight,
  BookOpen,
  Shield,
  Sparkles,
  Rocket,
  Heart,
  Eye,
  MousePointerClick,
  Flame,
  Globe,
  Smartphone,
  Video,
  Palette,
  Hash,
  BarChart2,
  PieChart,
  LineChart,
  Calendar,
  Layers,
  BrainCircuit,
  Lightbulb,
  X,
  Menu,
 
  Check,
  Quote,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Lock,
  Infinity,
  Download,
  FileText,
  Headphones,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import InquiryForm from "@/components/inquirycomponent";

/* ───────────────────────────────────────────────
   SOCIAL MEDIA CAMPAIGN TRAINING PAGE
   CreatiKai Design System — Next.js + Tailwind v4
   ─────────────────────────────────────────────── */

/* ─── Reusable Animation Variants ─── */
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ─── Data ─── */
const stats = [
  { icon: Users, value: "12,400+", label: "Students Enrolled" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Clock, value: "28 Hours", label: "Course Content" },
  { icon: Award, value: "Certificate", label: "Upon Completion" },
];

const modules = [
  {
    id: 1,
    title: "Foundation & Strategy",
    duration: "4h 30m",
    lessons: 12,
    desc: "Build rock-solid campaign foundations with audience research, competitor analysis, and strategic goal-setting frameworks.",
    topics: [
      "Audience Persona Development",
      "Competitor Benchmarking",
      "SMART Campaign Objectives",
      "Platform Selection Matrix",
      "Budget Allocation Strategies",
    ],
    icon: Target,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
  },
  {
    id: 2,
    title: "Content Creation Mastery",
    duration: "6h 15m",
    lessons: 18,
    desc: "Master the art of scroll-stopping content. From viral hooks to high-converting copy that drives engagement.",
    topics: [
      "Viral Hook Formulas",
      "Copywriting for Social",
      "Visual Content Design",
      "Video Storytelling",
      "UGC & Influencer Content",
    ],
    icon: Palette,
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    id: 3,
    title: "Paid Advertising Deep Dive",
    duration: "7h 45m",
    lessons: 22,
    desc: "Dominate Meta Ads, TikTok Ads, LinkedIn Ads, and X Ads with advanced targeting, bidding, and optimization tactics.",
    topics: [
      "Meta Ads Manager Mastery",
      "TikTok Spark Ads",
      "LinkedIn B2B Campaigns",
      "Lookalike & Retargeting",
      "A/B Testing Frameworks",
    ],
    icon: Megaphone,
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    id: 4,
    title: "Analytics & Optimization",
    duration: "5h 20m",
    lessons: 15,
    desc: "Turn data into decisions. Learn to read metrics, optimize ROAS, and build automated reporting dashboards.",
    topics: [
      "KPI Framework Design",
      "Attribution Modeling",
      "ROAS Optimization",
      "Custom Dashboard Building",
      "Predictive Analytics",
    ],
    icon: BarChart3,
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    id: 5,
    title: "Automation & Scaling",
    duration: "4h 30m",
    lessons: 11,
    desc: "Build automated campaign engines that scale profitably. Zapier, Make.com, and native platform automations.",
    topics: [
      "Campaign Automation Workflows",
      "Lead Nurturing Sequences",
      "Dynamic Creative Optimization",
      "Budget Pacing Algorithms",
      "Cross-Platform Scaling",
    ],
    icon: Zap,
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "3x ROAS Guarantee",
    desc: "Apply our proven frameworks to consistently achieve 3x+ return on ad spend within 90 days.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Mastery",
    desc: "Run campaigns across Instagram, TikTok, LinkedIn, X, and YouTube with platform-native strategies.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Workflows",
    desc: "Leverage AI tools for content generation, audience targeting, and predictive campaign optimization.",
  },
  {
    icon: Shield,
    title: "Future-Proof Skills",
    desc: "Stay ahead of algorithm changes with adaptive strategies that work regardless of platform updates.",
  },
  {
    icon: Rocket,
    title: "Launch in 7 Days",
    desc: "Follow our rapid deployment framework to go from zero to live campaigns in under a week.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    desc: "Get unlimited access to all course materials, updates, and the private community forever.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, Bloom Cosmetics",
    image: "SC",
    quote:
      "This course completely transformed how we approach social media. Our ROAS went from 1.2x to 4.8x in just 60 days. The automation module alone paid for the course 10x over.",
    rating: 5,
    metric: "4.8x ROAS",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, ScaleUp Agency",
    image: "MJ",
    quote:
      "I've taken dozens of marketing courses. This is the only one that actually delivers actionable, step-by-step systems. My agency now manages $2M+ in monthly ad spend confidently.",
    rating: 5,
    metric: "$2M+ Monthly",
  },
  {
    name: "Priya Sharma",
    role: "Social Media Lead, TechFlow",
    image: "PS",
    quote:
      "The AI integration section is pure gold. We're now creating 10x more content with half the team. Our engagement rates have never been higher.",
    rating: 5,
    metric: "10x Content Output",
  },
];

const platforms = [
  { name: "Instagram", icon: FaInstagram, color: "#E4405F" },
  { name: "TikTok", icon: Smartphone, color: "#000000" },
  { name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2" },
  { name: "X / Twitter", icon: FaTwitter, color: "#000000" },
  { name: "YouTube", icon: FaYoutube, color: "#FF0000" },
  { name: "Facebook", icon: FaFacebookF, color: "#1877F2" },
];

const faqs = [
  {
    q: "Is this course suitable for complete beginners?",
    a: "Absolutely. We start from the fundamentals and progressively build to advanced strategies. Whether you're a beginner or an experienced marketer looking to systemize your approach, you'll find immense value.",
  },
  {
    q: "How long do I have access to the course?",
    a: "You get lifetime access including all future updates. Social media changes fast, and we update the course content quarterly to reflect the latest platform changes and strategies.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. We offer a 30-day, no-questions-asked money-back guarantee. If you don't see value in the first month, we'll refund every penny.",
  },
  {
    q: "Will I get a certificate upon completion?",
    a: "Yes. You'll receive a verified digital certificate that you can add to your LinkedIn profile, resume, or portfolio. Our certificates are recognized by leading marketing agencies.",
  },
  {
    q: "What if I get stuck or have questions?",
    a: "You'll have access to our private community of 12,000+ marketers, weekly live Q&A calls, and priority email support. Our average response time is under 4 hours.",
  },
];

/* ─── Components ─── */



function PlatformStrip() {
  return (
    <section className="py-12 bg-white border-y border-[#f1f5f9]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <p className="text-center text-sm font-medium text-[#94a3b8] uppercase tracking-wider mb-8">
          Master Every Major Platform
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {platforms.map((platform, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-[#94a3b8] hover:text-[#0f172a] transition-colors cursor-default"
            >
              <platform.icon className="w-6 h-6" style={{ color: platform.color }} />
              <span className="font-semibold text-sm">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Dominate Social Media
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#475569] max-w-2xl mx-auto">
            5 comprehensive modules, 78 video lessons, and 28 hours of actionable training designed to take you from beginner to expert.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          {modules.map((module, i) => {
            const isOpen = openModule === module.id;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`lg:col-span-5 rounded-2xl border transition-all duration-300 overflow-hidden ${
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
                    <div className="flex items-center gap-3 mb-1">
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
            What You Will{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Achieve
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#475569] max-w-2xl mx-auto">
            By the end of this course, you'll have the skills, systems, and confidence to run campaigns that deliver measurable business results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <outcome.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{outcome.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{outcome.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-[var(--section-py)] bg-[#0f172a] relative overflow-hidden">
      {/* Background Glow */}
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
            <MessageCircle className="w-4 h-4 text-[#fbbf24]" />
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
            Join thousands of marketers who have transformed their careers and businesses with our proven frameworks.
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
            One payment. Lifetime access. No subscriptions. No hidden fees. Just results.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white border-2 border-[#2563eb] shadow-xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Complete Course Bundle</h3>
              <p className="text-[#475569] mb-8">Everything you need to master social media campaigns</p>

              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#0f172a]">$497</span>
                <span className="text-lg text-[#94a3b8] line-through mb-2">$1,997</span>
              </div>
              <p className="text-sm text-[#10b981] font-semibold mb-8">Save $1,500 — Limited Time</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "78 HD Video Lessons (28 hours)",
                  "Downloadable Templates & Checklists",
                  "Private Community Access",
                  "Weekly Live Q&A Calls",
                  "Certificate of Completion",
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
            Start Building Campaigns That{" "}
            <span className="text-[#60a5fa]">Actually Convert</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Join 12,400+ marketers who have already transformed their approach to social media. Your next high-performing campaign starts today.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Enroll Now for $497
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
export default function SocialMediaTrainingPage() {
    const [formOpen, setFormOpen] = useState(false); 
  return (
    <main className="min-h-screen bg-white">
       <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} courseName="Social Media Campaign" />
      {/* <Navbar /> */}
       <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "var(--hero-pt)",
        paddingBottom: "var(--hero-pb)",
        background: "linear-gradient(180deg, #ffffff 0%, #eff6ff 50%, #dbeafe 100%)",
      }}
    >
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)",
            animation: "float-slow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 left-[20%] w-64 h-64 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #eff6ff 0%, transparent 70%)",
            animation: "float-slower 12s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#dbeafe] shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#f59e0b]" />
              <span className="text-sm font-semibold text-[#1d4ed8]">
                2026 Updated Curriculum
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-[#0f172a] mb-6"
            >
              Master{" "}
              <span
                className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#1e40af] bg-clip-text text-transparent"
              >
                Social Media
              </span>{" "}
              Campaigns That Convert
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-[#475569] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The complete blueprint for building, launching, and scaling profitable
              social media campaigns across every major platform. From zero to
              campaign mastery.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                  onClick={() => setFormOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-semibold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-semibold text-base border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-[#f8fafc] transition-all">
                <Play className="w-5 h-5 text-[#2563eb]" />
                Watch Preview
              </button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {["SC", "MJ", "PS", "AK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#e2e8f0] border-2 border-white flex items-center justify-center text-xs font-bold text-[#475569]"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#475569]">
                <span className="font-semibold text-[#0f172a]">12,400+</span> students enrolled
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-[#e2e8f0]">
              {/* Dashboard Mockup */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#f1f5f9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                      <BarChart2 className="w-5 h-5 text-[#2563eb]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a]">Campaign Performance</p>
                      <p className="text-xs text-[#94a3b8]">Last 30 days</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ecfdf5] text-[#10b981] text-xs font-semibold">
                    +24.5%
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Impressions", value: "2.4M", icon: Eye, color: "#2563eb", bg: "#eff6ff" },
                    { label: "Engagement", value: "8.7%", icon: Heart, color: "#ec4899", bg: "#fdf2f8" },
                    { label: "Conversions", value: "3.2K", icon: MousePointerClick, color: "#10b981", bg: "#ecfdf5" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9]">
                      <stat.icon className="w-4 h-4 mb-2" style={{ color: stat.color }} />
                      <p className="text-lg font-bold text-[#0f172a]">{stat.value}</p>
                      <p className="text-xs text-[#94a3b8]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Chart Bar */}
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#f1f5f9]">
                  <div className="flex items-end justify-between h-24 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 10 ? "#2563eb" : "#dbeafe",
                          opacity: i === 10 ? 1 : 0.6,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-[#94a3b8]">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Platform Tags */}
                <div className="flex flex-wrap gap-2">
                  {["Instagram", "TikTok", "LinkedIn", "X", "YouTube"].map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#e2e8f0] text-xs font-medium text-[#475569]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg border border-[#e2e8f0]"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#ecfdf5] flex items-center justify-center">
                    <Flame className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">Trending</p>
                    <p className="text-[10px] text-[#94a3b8]">Top 1% course</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white transition-all"
            >
              <stat.icon className="w-6 h-6 text-[#2563eb] mb-3" />
              <p className="text-2xl font-bold text-[#0f172a]">{stat.value}</p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* components */}
      <PlatformStrip />
      <Curriculum />
      <Outcomes />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      {/* <Footer /> */}
    </main>
  );
}