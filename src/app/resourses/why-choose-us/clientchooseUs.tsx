"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Shield,
  Zap,
  Users,
  Star,
  TrendingUp,
  Heart,
  Globe,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Lock,
  Rocket,
  Target,
  BarChart3,
  Headphones,
  Infinity,
  Gem,
  Crown,
  Quote,
  BadgeCheck,
  Fingerprint,
  Layers,
  Cpu,
  Cloud,
  FileCheck,
  Phone,
  RefreshCw,
  Smartphone,
  Monitor,
  Wifi,
  Database,
  PenTool,
  Search,
  Share2,
  Mail,
  MapPin,
  ThumbsUp,
  Lightbulb,
  Wand2,
  Bot,
  Gauge,
  Settings,
  Code,
  Plug,
  Bell,
  Calendar,
  FolderOpen,
  HardDrive,
  KeyRound,
  Eye,
  FileText,
  ClipboardList,
  PieChart,
  Activity,
  Signal,
  Server,
  LockKeyhole,
  ShieldCheck,
  ShieldAlert,
  ShieldPlus,
} from "lucide-react";

/* ───────────────────────────────────────────────
   WHY CHOOSE US PAGE — CREATIKAI
   CreatiKai Design System — Next.js + Tailwind v4
   Pure CSS Animations — No Framer Motion
   ─────────────────────────────────────────────── */

const PageStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(28px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.92); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-14px); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-20px) translateX(12px); }
      66% { transform: translateY(12px) translateX(-14px); }
    }
    @keyframes floatSlower {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-12px) translateX(18px); }
      50% { transform: translateY(-24px) translateX(-10px); }
      75% { transform: translateY(6px) translateX(14px); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.12; }
      50% { opacity: 0.22; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
      to { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
    }
    @keyframes orbitSmall {
      from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-24px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(24px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes rotateIn {
      from { opacity: 0; transform: rotate(-8deg) scale(0.9); }
      to { opacity: 1; transform: rotate(0deg) scale(1); }
    }
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.15; }
      50% { transform: scale(1.05); opacity: 0.25; }
    }
    @keyframes drawLine {
      from { width: 0; }
      to { width: 100%; }
    }
    .anim-fade-up {
      animation: fadeInUp 0.75s ease-out forwards;
      opacity: 0;
    }
    .anim-fade-in {
      animation: fadeIn 0.65s ease-out forwards;
      opacity: 0;
    }
    .anim-scale-in {
      animation: scaleIn 0.55s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-right {
      animation: slideRight 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-left {
      animation: slideLeft 0.7s ease-out forwards;
      opacity: 0;
    }
    .anim-rotate-in {
      animation: rotateIn 0.65s ease-out forwards;
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
    .delay-900 { animation-delay: 0.9s; }
    .delay-1000 { animation-delay: 1.0s; }
    .stagger-children > *:nth-child(1) { animation-delay: 0.06s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.12s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.18s; }
    .stagger-children > *:nth-child(4) { animation-delay: 0.24s; }
    .stagger-children > *:nth-child(5) { animation-delay: 0.30s; }
    .stagger-children > *:nth-child(6) { animation-delay: 0.36s; }
    .stagger-children > *:nth-child(7) { animation-delay: 0.42s; }
    .stagger-children > *:nth-child(8) { animation-delay: 0.48s; }
    .stagger-children > *:nth-child(9) { animation-delay: 0.54s; }
    .stagger-children > *:nth-child(10) { animation-delay: 0.60s; }
    .stagger-children > *:nth-child(11) { animation-delay: 0.66s; }
    .stagger-children > *:nth-child(12) { animation-delay: 0.72s; }
    .hover-lift {
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.35s ease;
    }
    .hover-lift:hover {
      transform: translateY(-10px);
      box-shadow: 0 28px 56px -14px rgba(37, 99, 235, 0.2);
    }
    .hover-scale {
      transition: transform 0.35s ease;
    }
    .hover-scale:hover {
      transform: scale(1.05);
    }
    .icon-bounce:hover .icon-target {
      transform: translateY(-5px) scale(1.14);
    }
    .icon-target {
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, padding 0.35s ease;
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
      animation: floatSlow 14s ease-in-out infinite;
    }
    .hero-glow-2 {
      animation: floatSlower 18s ease-in-out infinite reverse;
    }
    .hero-glow-3 {
      animation: floatSlow 12s ease-in-out infinite 3s;
    }
    .hero-glow-4 {
      animation: floatSlower 16s ease-in-out infinite 1s;
    }
    .pulse-glow {
      animation: pulseGlow 5s ease-in-out infinite;
    }
    .orbit-1 {
      animation: orbit 24s linear infinite;
    }
    .orbit-2 {
      animation: orbitReverse 30s linear infinite;
    }
    .orbit-3 {
      animation: orbitSmall 20s linear infinite reverse;
    }
    .breathe-glow {
      animation: breathe 6s ease-in-out infinite;
    }
  `}</style>
);

/* ─── Data ─── */
const stats = [
  { value: "50,000+", label: "Businesses Empowered" },
  { value: "4.9/5", label: "Customer Satisfaction" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Expert Support" },
];

const differentiators = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "Bank-level encryption, SOC 2 Type II certified, GDPR & HIPAA compliant. Your data is protected by the same standards used by Fortune 500 companies.",
    highlight: "SOC 2 Type II Certified",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    desc: "Sub-100ms response times globally. Our edge-computed infrastructure ensures your CRM never slows down, no matter how many contacts or automations you run.",
    highlight: "<100ms Response Time",
    color: "#10b981",
    bg: "#ecfdf5",
  },
  {
    icon: Cpu,
    title: "AI-Powered Intelligence",
    desc: "Built-in AI that predicts lead behavior, suggests next actions, writes follow-up emails, and scores your pipeline — turning data into decisions automatically.",
    highlight: "Predictive AI Engine",
    color: "#9333ea",
    bg: "#faf5ff",
  },
  {
    icon: Layers,
    title: "Infinite Scalability",
    desc: "From your first customer to your millionth. Our architecture auto-scales horizontally, so you never outgrow your CRM. No migration headaches, ever.",
    highlight: "Auto-Scaling Architecture",
    color: "#0891b2",
    bg: "#ecfeff",
  },
  {
    icon: Headphones,
    title: "White-Glove Onboarding",
    desc: "Every customer gets a dedicated success manager, free data migration, and personalized training. We don't just hand you software — we ensure your success.",
    highlight: "Dedicated Success Manager",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    icon: Globe,
    title: "Global by Design",
    desc: "Multi-language, multi-currency, multi-timezone support. Run campaigns in 40+ languages and accept payments in 135 currencies. Truly borderless CRM.",
    highlight: "40+ Languages Supported",
    color: "#dc2626",
    bg: "#fef2f2",
  },
];

const comparisons = [
  {
    feature: "AI-Powered Lead Scoring",
    us: true,
    competitor1: false,
    competitor2: false,
    usDetail: "Built-in predictive scoring",
  },
  {
    feature: "Unlimited Contacts & Storage",
    us: true,
    competitor1: false,
    competitor2: false,
    usDetail: "No limits, ever",
  },
  {
    feature: "White-Glove Data Migration",
    us: true,
    competitor1: false,
    competitor2: false,
    usDetail: "Free, handled by experts",
  },
  {
    feature: "Custom Workflow Automation",
    us: true,
    competitor1: true,
    competitor2: false,
    usDetail: "Visual drag-and-drop builder",
  },
  {
    feature: "Real-Time Collaboration",
    us: true,
    competitor1: true,
    competitor2: true,
    usDetail: "Live cursor + comments",
  },
  {
    feature: "Advanced Analytics Dashboard",
    us: true,
    competitor1: false,
    competitor2: true,
    usDetail: "Custom reports + forecasting",
  },
  {
    feature: "API Access & Webhooks",
    us: true,
    competitor1: true,
    competitor2: false,
    usDetail: "REST + GraphQL + 500+ integrations",
  },
  {
    feature: "24/7 Phone & Chat Support",
    us: true,
    competitor1: false,
    competitor2: false,
    usDetail: "Average response <2 minutes",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    image: "SC",
    quote:
      "We evaluated 12 CRMs before choosing CreatiKai. The AI lead scoring alone increased our conversion rate by 340%. Their onboarding team migrated 8 years of data in 48 hours with zero downtime. I've never seen support like this.",
    rating: 5,
    metric: "340% Conversion",
  },
  {
    name: "Marcus Johnson",
    role: "COO, Apex Digital Group",
    image: "MJ",
    quote:
      "We outgrew our previous CRM at 10,000 contacts and faced a $50K migration project. CreatiKai's auto-scaling meant we never had to migrate again. We're now at 2.3M contacts and the platform is faster than day one.",
    rating: 5,
    metric: "2.3M Contacts",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Medical Director, BrightCare",
    image: "PS",
    quote:
      "HIPAA compliance was non-negotiable for us. CreatiKai's healthcare-grade security, combined with their patient communication automation, transformed our practice. We went from 40% no-shows to 6% in 90 days.",
    rating: 5,
    metric: "6% No-Show Rate",
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: BadgeCheck, label: "GDPR Compliant" },
  { icon: Fingerprint, label: "HIPAA Certified" },
  { icon: LockKeyhole, label: "256-bit Encryption" },
  { icon: Cloud, label: "ISO 27001" },
  { icon: FileCheck, label: "PCI DSS" },
];

const faqs = [
  {
    q: "How does CreatiKai compare to Salesforce or HubSpot?",
    a: "CreatiKai offers comparable enterprise features at a fraction of the cost, with AI capabilities that Salesforce charges $300+/user for included in every plan. Unlike HubSpot, we don't limit contacts or storage. Plus, our average onboarding time is 3 days versus 3-6 months with traditional enterprise CRMs.",
  },
  {
    q: "Can you migrate my data from my current CRM?",
    a: "Absolutely. Our white-glove migration team handles everything — free of charge. We've migrated data from Salesforce, HubSpot, Zoho, Pipedrive, Microsoft Dynamics, and 40+ other platforms. Average migration time is 48 hours with zero downtime guaranteed.",
  },
  {
    q: "Is my data secure with CreatiKai?",
    a: "Your data is protected by bank-level 256-bit AES encryption, both in transit and at rest. We're SOC 2 Type II certified, GDPR compliant, HIPAA certified for healthcare, and ISO 27001 certified. Our infrastructure runs on AWS with multi-region redundancy and daily automated backups.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Every customer gets a dedicated Customer Success Manager, 24/7 phone and chat support with <2 minute average response time, and access to our private community of 50,000+ users. Enterprise plans include quarterly business reviews and custom training sessions.",
  },
  {
    q: "Can I try CreatiKai before committing?",
    a: "Yes. We offer a 14-day free trial with full feature access — no credit card required. We also offer a 90-day money-back guarantee on all annual plans. If you're not completely satisfied, we'll refund every penny, no questions asked.",
  },
];

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <div className="hero-glow-1 absolute top-[5%] left-[0%] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[140px] bg-[#2563eb]" />
        <div className="hero-glow-2 absolute bottom-[0%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px] bg-[#60a5fa]" />
        <div className="hero-glow-3 absolute top-[40%] left-[55%] w-[350px] h-[350px] rounded-full opacity-[0.10] blur-[90px] bg-[#93c5fd]" />
        <div className="hero-glow-4 absolute top-[15%] right-[30%] w-[250px] h-[250px] rounded-full opacity-[0.08] blur-[70px] bg-[#1e40af]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(30deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)`,
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-1 absolute w-2.5 h-2.5 rounded-full bg-[#60a5fa] opacity-50" />
          <div className="orbit-2 absolute w-2 h-2 rounded-full bg-[#93c5fd] opacity-40" />
          <div className="orbit-3 absolute w-3 h-3 rounded-full bg-[#2563eb] opacity-30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Crown className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">The #1 Rated CRM Platform</span>
          </div>

          <h1 className="anim-fade-up delay-100 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] bg-clip-text text-transparent">
              50,000+
            </span>{" "}
            Businesses Choose CreatiKai Over Everything Else
          </h1>

          <p className="anim-fade-up delay-200 text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl">
            Not just another CRM. The only platform built with AI at its core, 
            security as its foundation, and your growth as its only mission. 
            See why industry leaders refuse to settle for less.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#comparison"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-base hover:bg-[#f8fafc] transition-all shadow-lg hover:shadow-xl"
            >
              See the Comparison
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              <Sparkles className="w-5 h-5" />
              Start Free Trial
            </button>
          </div>

          <div className="anim-fade-up delay-400 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              ))}
              <span className="text-sm text-[#94a3b8] ml-1">
                <span className="font-semibold text-white">4.9/5</span> from 12,400+ reviews
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Shield className="w-4 h-4 text-[#10b981]" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Clock className="w-4 h-4 text-[#60a5fa]" />
              <span>14-Day Free Trial</span>
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
              <p className="text-3xl font-extrabold text-[#0f172a] mb-1">{stat.value}</p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiators ─── */
function Differentiators() {
  return (
    <section id="differentiators" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <Gem className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">What Sets Us Apart</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Built Different{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              By Design
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            Six pillars that make CreatiKai the undeniable choice for businesses that refuse to compromise on performance, security, or intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="anim-fade-up group p-6 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#dbeafe] hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: item.bg, color: item.color }}
                >
                  {item.highlight}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Comparison Table ─── */
function Comparison() {
  return (
    <section id="comparison" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <BarChart3 className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">Head-to-Head Comparison</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            See How We{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Stack Up
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            The features that matter most, compared honestly. No compromises, no hidden limits, no surprises.
          </p>
        </div>

        <div className="anim-scale-in delay-300 overflow-x-auto">
          <div className="min-w-[700px] rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
              <div className="p-5 font-bold text-[#0f172a] text-sm">Feature</div>
              <div className="p-5 text-center bg-[#eff6ff] border-x border-[#dbeafe]">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#2563eb] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-[#2563eb] text-sm">CreatiKai</span>
                </div>
              </div>
              <div className="p-5 text-center text-sm font-semibold text-[#64748b]">Salesforce</div>
              <div className="p-5 text-center text-sm font-semibold text-[#64748b]">HubSpot</div>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 border-b border-[#f1f5f9] hover:bg-[#f8fafc]/50 transition-colors ${
                  i === comparisons.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-[#0f172a]">{row.feature}</span>
                </div>
                <div className="p-5 text-center bg-[#eff6ff]/30 border-x border-[#dbeafe]/50 flex flex-col items-center justify-center gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                    <span className="text-sm font-bold text-[#0f172a]">Yes</span>
                  </div>
                  <span className="text-xs text-[#2563eb] font-medium">{row.usDetail}</span>
                </div>
                <div className="p-5 text-center flex items-center justify-center">
                  {row.competitor1 ? (
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] mx-auto" />
                  ) : (
                    <span className="text-sm text-[#94a3b8]">—</span>
                  )}
                </div>
                <div className="p-5 text-center flex items-center justify-center">
                  {row.competitor2 ? (
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] mx-auto" />
                  ) : (
                    <span className="text-sm text-[#94a3b8]">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="anim-fade-up delay-400 mt-8 text-center">
          <p className="text-sm text-[#94a3b8]">
            Comparison based on publicly available features as of 2026. CreatiKai features included in all plans unless noted.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Badges ─── */
function TrustBadges() {
  return (
    <section className="py-12 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2563eb] opacity-10 blur-[120px] rounded-full" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
        <div className="text-center mb-10">
          <h3 className="anim-fade-up text-lg font-bold text-white mb-2">Trusted by Industry Leaders Worldwide</h3>
          <p className="anim-fade-up delay-100 text-sm text-[#94a3b8]">Certified. Compliant. Secure. Always.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger-children">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="anim-fade-up flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <badge.icon className="w-8 h-8 text-[#60a5fa]" />
              <span className="text-xs font-semibold text-white text-center">{badge.label}</span>
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
    <section id="testimonials" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <MessageCircle className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Customer Stories</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Don't Take Our Word For It{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Hear From Them
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            Real results from real businesses that made the switch and never looked back.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="anim-fade-up p-6 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#dbeafe] hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, ri) => (
                  <Star key={ri} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#2563eb] opacity-30 mb-3" />
              <p className="text-[#475569] leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-sm font-bold">
                    {t.image}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">{t.name}</p>
                    <p className="text-xs text-[#94a3b8]">{t.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-bold border border-[#dbeafe]">
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

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <MessageCircle className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">Still Deciding?</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Questions?{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              We've Got Answers
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
            <span className="text-sm font-semibold text-white">Ready to Experience the Difference?</span>
          </div>

          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Join 50,000+ Businesses That{" "}
            <span className="text-[#60a5fa]">Refuse to Settle</span>
          </h2>

          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Start your 14-day free trial today. No credit card required. No setup fees. 
            Just the most powerful CRM your business has ever used.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Start Free 14-Day Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Talk to Sales
            </a>
          </div>

          <div className="anim-fade-up delay-400 mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Free data migration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStyles />
      <Hero />
      <StatsBar />
      <Differentiators />
      <Comparison />
      <TrustBadges />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}