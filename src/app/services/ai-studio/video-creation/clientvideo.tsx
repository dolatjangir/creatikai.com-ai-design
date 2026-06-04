"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Sparkles,
  Play,
  Pause,
  Film,
  Scissors,
  Wand2,
  Layers,
  Type,
  Music,
  Image,
  Share2,
  MonitorPlay,
  Clock,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  X,
  Menu,
  Clapperboard,
  Video,
  Palette,
  Globe,
  MessageSquare,
  Mail,
  Phone,
  TrendingUp,
  Users,
  Download,
  Subtitles,
  Sparkle,
  Aperture,
  Gauge,
  ChevronRight,
  Maximize2,
  Volume2,
  Mic,
  FileVideo,
  Repeat,
  Smartphone,
  Laptop,
  Tv,
} from "lucide-react";

/* ============================================
   VIDEO CREATION SERVICE PAGE
   Creatik AI — Corporate Website
   ============================================ */

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Formats", href: "#formats" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const heroStats = [
  { value: "10x", label: "Faster Production" },
  { value: "85%", label: "Cost Reduction" },
  { value: "4K", label: "Export Quality" },
  { value: "50+", label: "Video Formats" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Slow Production Cycles",
    desc: "Traditional video production takes weeks. By the time your content is ready, the moment has passed and engagement drops.",
  },
  {
    icon: BarChart3,
    title: "Prohibitive Costs",
    desc: "Hiring editors, studios, and voiceover artists burns budgets. Most teams settle for less video content than their strategy demands.",
  },
  {
    icon: Palette,
    title: "Inconsistent Branding",
    desc: "Different creators, tools, and freelancers produce videos that look and feel disconnected from your brand identity.",
  },
  {
    icon: Users,
    title: "Creative Bottlenecks",
    desc: "Your best ideas get stuck in review loops, revision requests, and asset hunting. Creativity dies in operational friction.",
  },
];

const coreFeatures = [
  {
    icon: Wand2,
    title: "AI Script to Video",
    desc: "Paste a script, blog post, or prompt. Our AI generates complete videos with scenes, visuals, captions, and voiceover in minutes.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Scissors,
    title: "Smart Auto-Editing",
    desc: "AI detects pauses, filler words, and dead air—automatically cutting your raw footage into tight, engaging sequences.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
  {
    icon: Palette,
    title: "Dynamic Brand Kits",
    desc: "Lock in your fonts, colors, logos, and motion graphics. Every video automatically adheres to your brand guidelines.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
  },
  {
    icon: Type,
    title: "Auto Captions & Subtitles",
    desc: "Generate accurate captions in 40+ languages with AI-perfect timing, styling, and keyword highlighting for accessibility.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
  },
  {
    icon: Music,
    title: "Licensed Music & SFX",
    desc: "Access a library of 10,000+ royalty-free tracks and sound effects that auto-match to your video's mood and pacing.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Share2,
    title: "One-Click Multi-Format",
    desc: "Instantly resize and reformat for TikTok, Instagram, YouTube, LinkedIn, and ads—without rebuilding your timeline.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
];

const videoFormats = [
  {
    icon: Smartphone,
    title: "Social Shorts",
    desc: "Vertical 9:16 videos optimized for TikTok, Reels, and Shorts with trending templates and auto-beat sync.",
    gradient: "var(--gradient-course-1)",
    iconColor: "var(--color-course-icon-1)",
    examples: ["TikTok Ads", "Instagram Reels", "YouTube Shorts"],
  },
  {
    icon: Laptop,
    title: "Explainer Videos",
    desc: "Turn complex products into crystal-clear stories with animated scenes, screen recordings, and AI voiceovers.",
    gradient: "var(--gradient-course-2)",
    iconColor: "var(--color-course-icon-2)",
    examples: ["Product Demos", "Tutorials", "Onboarding"],
  },
  {
    icon: Tv,
    title: "Brand Commercials",
    desc: "Cinematic-quality ads with AI-generated B-roll, motion graphics, and professional color grading presets.",
    gradient: "var(--gradient-course-3)",
    iconColor: "var(--color-course-icon-3)",
    examples: ["TV Spots", "Web Ads", "Event Promos"],
  },
  {
    icon: Users,
    title: "Training & Internal",
    desc: "Create consistent training content, SOP walkthroughs, and company announcements at scale across teams.",
    gradient: "var(--gradient-course-4)",
    iconColor: "var(--color-course-icon-4)",
    examples: ["Employee Training", "SOP Videos", "Town Halls"],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Input Your Idea",
    desc: "Upload raw footage, paste a script, drop a blog URL, or describe your vision. Our AI analyzes context, tone, and intent.",
    features: ["Script import", "Blog-to-video", "Voice recording", "Stock library"],
  },
  {
    number: "02",
    title: "AI Generates Draft",
    desc: "In under 3 minutes, receive a complete first cut with scene selection, transitions, captions, music, and voiceover.",
    features: ["Scene detection", "Auto-transitions", "AI voiceover", "Beat matching"],
  },
  {
    number: "03",
    title: "Polish with Precision",
    desc: "Fine-tune with our intelligent editor. AI suggests cuts, color corrections, and pacing improvements as you work.",
    features: ["Smart trimming", "Color presets", "Pacing AI", "Brand enforce"],
  },
  {
    number: "04",
    title: "Publish Everywhere",
    desc: "Export in 50+ formats optimized per platform. Schedule directly to social, embed on web, or download in 4K.",
    features: ["Multi-format export", "Direct publish", "4K rendering", "Analytics"],
  },
];

const testimonials = [
  {
    quote:
      "We went from producing 2 videos per week to 12. Creatik AI handles the heavy lifting so our creative team can focus on strategy, not rendering queues.",
    author: "Rachel Kim",
    role: "Head of Content, Pulse Media Agency",
    metric: "6x",
    metricLabel: "Output Increase",
  },
  {
    quote:
      "The brand kit feature is a game-changer. Every video looks like it came from our in-house studio, even when freelancers and AI are doing the work.",
    author: "Marcus Webb",
    role: "Brand Director, Lumen Fashion",
    metric: "100%",
    metricLabel: "Brand Consistency",
  },
  {
    quote:
      "Our cost per video dropped from $2,800 to $340. We reallocated that budget into media spend and saw a 4x improvement in ROAS.",
    author: "Sofia Andersson",
    role: "Performance Lead, Nordic Growth Co.",
    metric: "88%",
    metricLabel: "Cost Reduction",
  },
];

const faqs = [
  {
    q: "How long does it take to generate a video from a script?",
    a: "Most videos are generated in 2–5 minutes depending on length and complexity. A 60-second social ad typically renders in under 90 seconds. 4K exports take slightly longer but are still completed in under 10 minutes.",
  },
  {
    q: "Can I use my own footage and brand assets?",
    a: "Absolutely. Upload your own video clips, logos, fonts, color palettes, and music. Creatik AI integrates them seamlessly into AI-generated scenes while maintaining your brand governance rules.",
  },
  {
    q: "What video resolutions and formats are supported?",
    a: "We support all standard formats including 9:16 (vertical), 1:1 (square), 16:9 (horizontal), and 4:5. Export resolutions range from 720p to 4K UHD. Custom aspect ratios are available on Enterprise plans.",
  },
  {
    q: "Is the AI voiceover natural-sounding?",
    a: "Yes. Our neural voice engine produces human-like speech with natural inflection, pacing, and emotion in 60+ languages and 200+ voice styles. You can also clone your own voice for brand consistency.",
  },
  {
    q: "How does the team collaboration work?",
    a: "Share projects via link, assign roles (editor, reviewer, admin), leave timestamped comments, and manage approvals in-app. Real-time sync ensures everyone sees the latest version instantly.",
  },
];

export default function VideoCreationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">


      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[var(--color-glow)] opacity-25 blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[var(--color-glow-strong)] opacity-20 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-30" />
        </div>

        <div className="relative mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-6"
              >
                <Film className="h-4 w-4" />
                AI-Powered Video Production
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[var(--hero-title-size)] font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Create Stunning Videos{" "}
                <span className="gradient-text">
                  10x Faster with AI
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                From script to screen in minutes—not weeks. Creatik AI generates,
                edits, and optimizes professional videos with intelligent automation
                that scales your content strategy without scaling your team.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Create Your First Video
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-[var(--color-primary)]" />
                  ) : (
                    <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  )}
                  Watch Demo
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)] mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Video Editor Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-[#0f172a] overflow-hidden">
                  {/* Mock Video Editor UI */}
                  <div className="bg-[#1e293b] p-3 border-b border-[#334155] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-xs text-slate-400 ml-2">
                        Creatik Studio — Project: Summer Campaign
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded bg-slate-700 flex items-center justify-center">
                        <Share2 className="h-3 w-3 text-slate-300" />
                      </div>
                      <div className="h-6 px-2 rounded bg-[var(--color-primary)] flex items-center justify-center text-[10px] text-white font-semibold">
                        Export
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-0">
                    {/* Sidebar */}
                    <div className="col-span-3 bg-[#1e293b] border-r border-[#334155] p-3">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-3">
                        Media Library
                      </div>
                      <div className="space-y-2">
                        {["Scene 1: Intro", "Scene 2: Product", "Scene 3: CTA"].map((scene, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 rounded bg-[#334155]/50">
                            <div className="h-8 w-10 rounded bg-slate-600 flex items-center justify-center">
                              <Film className="h-3 w-3 text-slate-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[10px] text-slate-300 truncate">{scene}</div>
                              <div className="text-[9px] text-slate-500">0:0{i + 1} — AI Generated</div>
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center gap-2 p-2 rounded border border-dashed border-slate-600">
                          <div className="h-8 w-10 rounded bg-slate-700/50 flex items-center justify-center">
                            <PlusIcon className="h-3 w-3 text-slate-500" />
                          </div>
                          <div className="text-[10px] text-slate-500">Add Media</div>
                        </div>
                      </div>
                    </div>

                    {/* Main Preview */}
                    <div className="col-span-9 bg-[#0f172a] p-4">
                      <div className="aspect-video rounded-lg bg-[#1e293b] border border-[#334155] relative overflow-hidden mb-3">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-3">
                              <Play className="h-6 w-6 text-white fill-white" />
                            </div>
                            <div className="text-xs text-slate-400">Preview Window</div>
                            <div className="text-[10px] text-slate-600 mt-1">1920 × 1080 • 30fps</div>
                          </div>
                        </div>
                        {/* Overlay elements */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="bg-black/60 backdrop-blur-sm rounded px-3 py-2">
                            <div className="text-[10px] text-white font-medium mb-1">AI Voiceover Active</div>
                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full w-2/3 bg-[var(--color-primary)] rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="bg-[#1e293b] rounded-lg border border-[#334155] p-3">
                        <div className="flex items-center gap-3 mb-2">
                          <button className="h-6 w-6 rounded bg-[var(--color-primary)] flex items-center justify-center">
                            <Play className="h-3 w-3 text-white fill-white" />
                          </button>
                          <div className="text-[10px] text-slate-400 font-mono">00:00:12 / 00:00:45</div>
                          <div className="flex-1" />
                          <div className="flex items-center gap-1">
                            <Volume2 className="h-3 w-3 text-slate-500" />
                            <div className="w-12 h-1 bg-slate-700 rounded-full">
                              <div className="w-8 h-full bg-slate-400 rounded-full" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          {[
                            { label: "Video Track", color: "bg-purple-500", width: "85%" },
                            { label: "Audio / Voice", color: "bg-[var(--color-primary)]", width: "85%" },
                            { label: "Captions", color: "bg-emerald-500", width: "60%" },
                            { label: "Music", color: "bg-amber-500", width: "85%" },
                          ].map((track) => (
                            <div key={track.label} className="flex items-center gap-2">
                              <div className="w-16 text-[9px] text-slate-500 truncate">{track.label}</div>
                              <div className="flex-1 h-5 bg-slate-800 rounded-sm relative overflow-hidden">
                                <div
                                  className={`absolute left-0 top-0 bottom-0 ${track.color} opacity-80 rounded-sm`}
                                  style={{ width: track.width }}
                                />
                                <div className="absolute left-[28%] top-0 bottom-0 w-px bg-white/50 z-10" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Video Cards */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <Gauge className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">Rendering...</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">4K • 98% complete</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Sparkle className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">AI Enhanced</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">12 scenes auto-cut</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Subtitles className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">40+ Languages</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Auto-captioned</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-section-alt)] py-8">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <p className="text-center text-sm font-medium text-[var(--color-text-muted)] mb-6">
            Trusted by content teams at leading brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Netflix", "Spotify", "Adobe", "HubSpot", "Shopify", "Canva", "TikTok", "YouTube"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-bold text-[var(--color-text-faint)] tracking-wide"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="features" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Video production is broken.{" "}
              <span className="text-[var(--color-text-faint)]">
                We fixed it.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Traditional video workflows weren't built for the content velocity
              modern marketing demands. Here's what teams struggle with every day.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-icon-bg-1)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <point.icon className="h-6 w-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-4"
            >
              <Clapperboard className="h-4 w-4" />
              Complete Creative Suite
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Everything you need to{" "}
              <span className="gradient-text">produce at scale</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              A full-stack video creation platform powered by generative AI.
              No plugins, no rendering farms, no steep learning curves.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon
                    className="h-7 w-7"
                    style={{ color: feature.iconColor }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore feature <ChevronRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Formats Showcase */}
      <section id="formats" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-4"
            >
              <MonitorPlay className="h-4 w-4" />
              For Every Platform
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              One creation.{" "}
              <span className="gradient-text">Infinite formats.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Create once and instantly adapt for every channel, audience,
              and campaign objective without starting from scratch.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {videoFormats.map((format) => (
              <motion.div
                key={format.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white hover:shadow-[var(--shadow-xl)] transition-all duration-300"
              >
                <div
                  className="h-2"
                  style={{ background: format.gradient }}
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <format.icon
                        className="h-7 w-7"
                        style={{ color: format.iconColor }}
                      />
                    </div>
                    <div className="flex gap-2">
                      {format.examples.map((ex) => (
                        <span
                          key={ex}
                          className="rounded-full bg-[var(--color-section-alt)] px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                    {format.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {format.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
                    See templates <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-4"
            >
              <Layers className="h-4 w-4" />
              The Workflow
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              From idea to publish in{" "}
              <span className="gradient-text">four simple steps</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Our AI handles the technical complexity so you can focus on
              storytelling and strategy.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Interactive Steps */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    activeWorkflow === idx
                      ? "border-[var(--color-primary)] bg-white shadow-[var(--shadow-lg)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border-hover)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        activeWorkflow === idx
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-section-alt)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 ${
                          activeWorkflow === idx
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeWorkflow === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                              {step.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {step.features.map((f) => (
                                <span
                                  key={f}
                                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3 py-1 text-xs font-medium text-[var(--color-badge-text)]"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                  {f}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Live Preview Mock */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block sticky top-32"
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-xl)]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-[var(--color-text-primary)]">
                    Live Preview
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      AI Processing
                    </span>
                  </div>
                </div>

                <div className="aspect-video rounded-xl bg-[var(--color-section-alt)] border border-[var(--color-border)] relative overflow-hidden mb-6 flex items-center justify-center">
                  {activeWorkflow === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center p-6"
                    >
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] mb-4">
                        <Type className="h-8 w-8 text-[var(--color-primary)]" />
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                        Script Input
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        Paste text, URL, or upload audio
                      </div>
                    </motion.div>
                  )}
                  {activeWorkflow === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center p-6"
                    >
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-2)] mb-4">
                        <Wand2 className="h-8 w-8 text-[var(--color-purple)]" />
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                        AI Generating...
                      </div>
                      <div className="w-48 h-2 bg-[var(--color-border)] rounded-full overflow-hidden mx-auto mt-2">
                        <motion.div
                          className="h-full bg-[var(--color-purple)] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  )}
                  {activeWorkflow === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center p-6"
                    >
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-3)] mb-4">
                        <Scissors className="h-8 w-8 text-[var(--color-cyan)]" />
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                        Smart Editor
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        AI suggestions active
                      </div>
                    </motion.div>
                  )}
                  {activeWorkflow === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center p-6"
                    >
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-4)] mb-4">
                        <Download className="h-8 w-8 text-[var(--color-emerald)]" />
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                        Ready to Publish
                      </div>
                      <div className="text-xs text-[var(--color-text-muted)]">
                        4K • All formats rendered
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Duration", value: "0:45" },
                    { label: "Scenes", value: "12" },
                    { label: "Captions", value: "Yes" },
                    { label: "Quality", value: "4K" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-[var(--color-section-alt)] p-3 text-center">
                      <div className="text-xs text-[var(--color-text-muted)] mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-[var(--color-text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Loved by video teams{" "}
              <span className="gradient-text">worldwide</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how creators, marketers, and agencies are transforming their
              video output with Creatik AI.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.author}
                variants={fadeInUp}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]"
                    />
                  ))}
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border-light)]">
                  <div>
                    <div className="font-semibold text-[var(--color-text-primary)]">
                      {t.author}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {t.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {t.metric}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {t.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-8 py-16 lg:px-16 lg:py-20 text-center"
          >
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">
                <Sparkles className="h-4 w-4" />
                Start creating for free today
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Your first AI video is on us
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                No credit card required. Generate your first professional video
                in under 3 minutes and see why teams are switching to Creatik AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Create Free Video
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Talk to Sales
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  3 free videos
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  No watermark
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Questions?{" "}
                <span className="gradient-text">We've got answers.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about AI-powered video creation.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="rounded-xl border border-[var(--color-border)] bg-white overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === idx ? null : idx)
                    }
                    className="flex w-full items-center justify-between p-6 text-left hover:bg-[var(--color-bg-hover)] transition-colors"
                  >
                    <span className="font-semibold text-[var(--color-text-primary)] pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${
                        activeFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
}

/* Helper icon for the mock editor */
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}