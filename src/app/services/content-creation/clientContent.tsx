"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Sparkles,
  PenTool,
  FileText,
  Hash,
  Globe,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  X,
  Menu,
  Layers,
  MessageSquare,
  Mail,
  Phone,
  TrendingUp,
  Clock,
  Target,
  Palette,
  Share2,
  Search,
  Layout,
  Megaphone,
  BookOpen,
  Newspaper,
  Smartphone,
  Monitor,
  MailOpen,
  Type,
  AlignLeft,
  Image,
  Video,
  Headphones,
  Bookmark,
  Copy,
  RotateCcw,
  ThumbsUp,
  Eye,
  Calendar,
  ChevronRight,
  Download,
  Check,
  AlertCircle,
  Lightbulb,
  Wand2,
  Settings,
  UserCheck,
  Play,
} from "lucide-react";

/* ============================================
   CONTENT CREATION SERVICE PAGE
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
  { label: "SEO", href: "#seo" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "10x", label: "Faster Writing" },
  { value: "85%", label: "SEO Score Boost" },
  { value: "40+", label: "Content Formats" },
  { value: "3M+", label: "Articles Generated" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Writer's Block & Delays",
    desc: "Staring at blank pages for hours. Deadlines loom while your team struggles to produce enough quality content to feed the funnel.",
  },
  {
    icon: Search,
    title: "Invisible Content",
    desc: "You publish constantly but never rank. Without SEO intelligence baked into creation, your content sinks into digital obscurity.",
  },
  {
    icon: Palette,
    title: "Inconsistent Brand Voice",
    desc: "Different writers, freelancers, and tools produce content that sounds like it came from ten different companies—not one brand.",
  },
  {
    icon: BarChart3,
    title: "Low Engagement & ROI",
    desc: "High production costs with low returns. Content that doesn't convert readers, generate leads, or build authority is just expensive noise.",
  },
];

const coreFeatures = [
  {
    icon: PenTool,
    title: "AI Long-Form Writer",
    desc: "Generate research-backed blog posts, whitepapers, and guides up to 5,000 words with citations, structure, and human-like flow.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Search,
    title: "Real-Time SEO Engine",
    desc: "Write with live keyword suggestions, readability scoring, competitor gap analysis, and SERP intent matching as you type.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
  {
    icon: Palette,
    title: "Brand Voice Lock",
    desc: "Train AI on your tone, style guide, and messaging framework. Every piece sounds unmistakably like your brand—at any scale.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
  },
  {
    icon: Zap,
    title: "Multi-Format Remix",
    desc: "Turn one blog post into 20 LinkedIn posts, 10 tweets, 3 email sequences, and a video script—instantly, without rewriting.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
  },
  {
    icon: Target,
    title: "Audience Intelligence",
    desc: "AI analyzes your persona data to tailor messaging, pain points, and CTAs for each segment automatically.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Track content ROI, engagement heatmaps, and conversion attribution directly inside the platform—no more spreadsheet juggling.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
];

const contentFormats = [
  {
    icon: FileText,
    title: "Blog & Articles",
    desc: "SEO-optimized long-form content with headers, meta descriptions, internal linking, and featured snippet targeting built in.",
    gradient: "var(--gradient-course-1)",
    iconColor: "var(--color-course-icon-1)",
    tags: ["2,000+ words", "SEO Ready", "Auto-Images"],
  },
  {
    icon: Megaphone,
    title: "Social Media",
    desc: "Platform-native posts for LinkedIn, Twitter/X, Instagram, and Facebook with hashtag research and optimal timing suggestions.",
    gradient: "var(--gradient-course-2)",
    iconColor: "var(--color-course-icon-2)",
    tags: ["Hashtag AI", "Viral Hooks", "Carousel Scripts"],
  },
  {
    icon: MailOpen,
    title: "Email Sequences",
    desc: "Drip campaigns, newsletters, cold outreach, and nurture sequences with A/B test variants and personalization tokens.",
    gradient: "var(--gradient-course-3)",
    iconColor: "var(--color-course-icon-3)",
    tags: ["A/B Variants", "Personalization", "Spam Score"],
  },
  {
    icon: BookOpen,
    title: "Website Copy",
    desc: "Landing pages, product descriptions, About pages, and FAQ sections that convert with persuasive, benefit-driven copy.",
    gradient: "var(--gradient-course-4)",
    iconColor: "var(--color-course-icon-4)",
    tags: ["A/B Ready", "CTA Optimized", "Brand Aligned"],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Set Your Strategy",
    desc: "Define topics, target keywords, audience personas, and content pillars. Our AI analyzes competitor gaps and opportunity scores.",
    features: ["Keyword research", "Competitor gap", "Content calendar"],
  },
  {
    number: "02",
    title: "AI Drafts Content",
    desc: "Receive a complete first draft in seconds—structured, researched, on-brand, and optimized for search intent and readability.",
    features: ["Auto-outline", "Citation finder", "Tone matching"],
  },
  {
    number: "03",
    title: "Polish & Optimize",
    desc: "Refine with AI suggestions for clarity, SEO improvements, and engagement boosts. Real-time scoring guides every edit.",
    features: ["SEO scorecard", "Readability AI", "Plagiarism check"],
  },
  {
    number: "04",
    title: "Publish & Repurpose",
    desc: "Push to CMS, social, and email platforms instantly. Auto-generate 15+ format variations from every piece of content.",
    features: ["One-click publish", "Auto-remix", "Analytics sync"],
  },
];

const seoFeatures = [
  {
    icon: Search,
    title: "Live Keyword Intelligence",
    desc: "See search volume, difficulty, and intent data as you write. AI suggests semantically related terms and long-tail opportunities.",
  },
  {
    icon: Target,
    title: "SERP Competitor Analysis",
    desc: "Analyze top-ranking pages for any keyword. Get word count, structure, heading, and content gap recommendations automatically.",
  },
  {
    icon: Eye,
    title: "Readability & Intent Match",
    desc: "AI ensures your content matches searcher intent—informational, commercial, or transactional—with optimal grade-level scoring.",
  },
  {
    icon: TrendingUp,
    title: "Featured Snippet Optimization",
    desc: "Structure definitions, lists, and tables to maximize your chances of winning Position Zero on Google.",
  },
];

const testimonials = [
  {
    quote:
      "Creatik AI cut our blog production time from 12 hours to 90 minutes per post. Our organic traffic grew 340% in six months without hiring a single new writer.",
    author: "Natalie Brooks",
    role: "Content Director, SaaScale",
    metric: "340%",
    metricLabel: "Traffic Growth",
  },
  {
    quote:
      "The brand voice feature is uncanny. We trained it on our style guide and now every piece—from tweets to whitepapers—sounds exactly like us.",
    author: "Daniel Okonkwo",
    role: "Head of Brand, Vertex Finance",
    metric: "100%",
    metricLabel: "Voice Consistency",
  },
  {
    quote:
      "We used to publish twice a week. With Creatik AI, we publish 14 times a week across blog, social, and email—and our engagement rate actually went up.",
    author: "Priya Sharma",
    role: "CMO, Elevate Health",
    metric: "7x",
    metricLabel: "Output Increase",
  },
];

const faqs = [
  {
    q: "Is the AI-generated content original and plagiarism-free?",
    a: "Yes. Every piece is generated uniquely for your prompt and passes premium plagiarism detection. We also include a built-in originality checker and automatic citation finder for research-backed content.",
  },
  {
    q: "Can I train the AI on my company's specific tone and terminology?",
    a: "Absolutely. Upload style guides, past content, brand books, and terminology lists. Our Brand Voice Lock ensures every output matches your cadence, vocabulary, and personality markers.",
  },
  {
    q: "How does the SEO optimization work in real time?",
    a: "As you write (or review AI drafts), the sidebar displays live SEO scores, keyword density, readability metrics, and competitor gap alerts. The AI suggests specific improvements to boost ranking potential before you publish.",
  },
  {
    q: "What content management systems do you integrate with?",
    a: "We offer native integrations with WordPress, Webflow, HubSpot, Contentful, Shopify, and Medium. You can also publish via API to any custom CMS or export in HTML, Markdown, or PDF.",
  },
  {
    q: "Can my team collaborate on content within the platform?",
    a: "Yes. Assign roles (writer, editor, approver), leave inline comments, track version history, and manage approval workflows. Real-time collaboration ensures no content gets stuck in email threads.",
  },
];

export default function ContentCreationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-nav-bg-scroll)] shadow-[var(--shadow-nav)] backdrop-blur-[var(--blur-nav)]"
            : "bg-[var(--color-nav-bg)]"
        }`}
      >
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="flex h-[var(--nav-height)] lg:h-[var(--nav-height-lg)] items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Creatik AI
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/contact"
                className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
              >
                Start Writing Free
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-bg-hover)]"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-nav-bg)] overflow-hidden"
            >
              <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)] py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-[var(--color-border)] flex flex-col gap-3">
                  <a
                    href="/contact"
                    className="text-base font-medium text-[var(--color-text-secondary)]"
                  >
                    Contact Sales
                  </a>
                  <a
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Start Writing Free
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
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
                <PenTool className="h-4 w-4" />
                AI Content Engine
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[var(--hero-title-size)] font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Write Content That{" "}
                <span className="gradient-text">
                  Ranks, Converts & Scales
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                From blank page to publish-ready blog posts, social campaigns,
                and email sequences in minutes. Creatik AI writes with your
                brand voice, optimizes for SEO in real time, and repurposes
                everything across every channel.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Write Your First Article
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  See It In Action
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

            {/* Content Editor Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-white overflow-hidden">
                  <div className="bg-[var(--color-section-alt)] p-3 border-b border-[var(--color-border)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-xs font-medium text-[var(--color-text-muted)]">
                      Creatik Editor — Blog Draft: "AI in Retail 2026"
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-0">
                    {/* Sidebar */}
                    <div className="col-span-4 bg-[var(--color-section-alt)] border-r border-[var(--color-border)] p-4">
                      <div className="mb-5">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-3">
                          SEO Scorecard
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-[var(--color-emerald)]" />
                          </div>
                          <div>
                            <div className="text-lg font-bold text-[var(--color-text-primary)]">92/100</div>
                            <div className="text-[10px] text-[var(--color-text-muted)]">Excellent</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[
                            { label: "Keyword Density", val: 98, color: "bg-[var(--color-emerald)]" },
                            { label: "Readability", val: 94, color: "bg-[var(--color-emerald)]" },
                            { label: "Meta Tags", val: 100, color: "bg-[var(--color-emerald)]" },
                            { label: "Internal Links", val: 78, color: "bg-[var(--color-amber)]" },
                          ].map((item) => (
                            <div key={item.label}>
                              <div className="flex justify-between text-[10px] mb-1">
                                <span className="text-[var(--color-text-secondary)]">{item.label}</span>
                                <span className="font-semibold text-[var(--color-text-primary)]">{item.val}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                                <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-3">
                          AI Suggestions
                        </div>
                        <div className="space-y-2">
                          {[
                            { icon: Lightbulb, text: "Add H2: 'Supply Chain AI'" },
                            { icon: Hash, text: "Include: 'predictive analytics'" },
                            { icon: Target, text: "Expand CTA paragraph" },
                          ].map((s, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] cursor-pointer transition-colors">
                              <s.icon className="h-3.5 w-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                              <span className="text-[11px] text-[var(--color-text-secondary)] leading-tight">{s.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-3">
                          Brand Voice
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[var(--color-border)]">
                          <div className="h-6 w-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                            <UserCheck className="h-3 w-3 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <div className="text-[11px] font-semibold text-[var(--color-text-primary)]">Professional + Witty</div>
                            <div className="text-[10px] text-[var(--color-text-muted)]">Confidence: 98%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Editor */}
                    <div className="col-span-8 p-5">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                          How AI Is Reshaping Retail Operations in 2026
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)] mb-4">
                          Meta: Discover how artificial intelligence is transforming inventory management, demand forecasting, and customer experience in modern retail...
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-full" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-[95%]" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-[90%]" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-full" />
                        <div className="h-3 bg-[var(--color-primary)]/10 rounded w-[40%]" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-full" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-[85%]" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-full" />
                        <div className="h-3 bg-[var(--color-section-alt)] rounded w-[70%]" />
                      </div>

                      <div className="mt-4 p-3 rounded-lg border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)]">
                        <div className="flex items-center gap-2 mb-1">
                          <Wand2 className="h-3.5 w-3.5 text-[var(--color-badge-text)]" />
                          <span className="text-[11px] font-semibold text-[var(--color-badge-text)]">AI Enhancement Available</span>
                        </div>
                        <div className="text-[10px] text-[var(--color-text-secondary)]">
                          Expand this section with 2026 market data and 2 expert quotes for higher E-E-A-T score.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">Plagiarism: 0%</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Original content</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">1,847 words</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Generated in 47s</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Globe className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">12 Variants</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Auto-remixed</div>
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
            Trusted by content teams at industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["HubSpot", "Shopify", "Salesforce", "Mailchimp", "WordPress", "Notion", "Slack", "Canva"].map(
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
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Content marketing is hard.{" "}
              <span className="text-[var(--color-text-faint)]">
                It shouldn't be.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              The best content teams are held back by process, not talent.
              Here's what slows modern marketers down every single day.
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
              <Layers className="h-4 w-4" />
              Complete Content Stack
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              One platform.{" "}
              <span className="gradient-text">Every content need.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Replace your scattered writing tools, SEO checkers, and
              repurposing spreadsheets with intelligent AI that does it all.
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

      {/* Content Formats */}
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
              <Layout className="h-4 w-4" />
              Content Formats
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Write once.{" "}
              <span className="gradient-text">Publish everywhere.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Generate every type of content your marketing strategy demands—
              all optimized for the channel, audience, and conversion goal.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {contentFormats.map((format) => (
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
                    <div className="flex gap-2 flex-wrap justify-end">
                      {format.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--color-section-alt)] px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {tag}
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
                    Browse templates <ArrowRight className="h-4 w-4" />
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
              <Settings className="h-4 w-4" />
              How It Works
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              From strategy to publish in{" "}
              <span className="gradient-text">four steps</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Our AI handles research, drafting, optimization, and
              repurposing—so your team can focus on strategy and creativity.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                    Content Pipeline
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      AI Active
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { stage: "Ideation", count: 12, color: "bg-[var(--color-amber)]" },
                    { stage: "Drafting", count: 8, color: "bg-[var(--color-primary)]" },
                    { stage: "Review", count: 5, color: "bg-[var(--color-purple)]" },
                    { stage: "Published", count: 24, color: "bg-[var(--color-emerald)]" },
                  ].map((pipe) => (
                    <div key={pipe.stage} className="flex items-center gap-4">
                      <div className="w-20 text-xs font-medium text-[var(--color-text-secondary)]">{pipe.stage}</div>
                      <div className="flex-1 h-8 bg-[var(--color-section-alt)] rounded-lg overflow-hidden flex items-center px-2">
                        <div className={`h-4 rounded ${pipe.color}`} style={{ width: `${Math.min(pipe.count * 8, 100)}%` }} />
                      </div>
                      <div className="w-8 text-xs font-bold text-[var(--color-text-primary)] text-right">{pipe.count}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                  <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                    This Month
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Words", value: "142K" },
                      { label: "Posts", value: "48" },
                      { label: "SEO Score", value: "91.2" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-lg bg-[var(--color-section-alt)] p-3 text-center">
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">{item.label}</div>
                        <div className="text-sm font-bold text-[var(--color-text-primary)]">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section id="seo" className="py-[var(--section-py)]">
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
              <Search className="h-4 w-4" />
              Built-In SEO Intelligence
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Content that ranks—{" "}
              <span className="gradient-text">by design</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Stop writing first and optimizing later. Creatik AI bakes SEO
              into every word from the very first sentence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {seoFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Loved by content teams{" "}
              <span className="gradient-text">everywhere</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how marketers, agencies, and publishers are transforming
              their content operations with Creatik AI.
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
      <section id="pricing" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
                Start writing smarter today
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Your first 5 articles are free
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                No credit card. No setup. Just sign up and watch Creatik AI
                generate publish-ready content in your brand voice—instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Start Writing Free
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
                  5 free articles
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Full SEO tools included
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
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-[var(--section-title-size)] font-bold tracking-tight mb-4">
                Questions?{" "}
                <span className="gradient-text">We've got answers.</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about AI-powered content creation.
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

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-section-alt)] py-12">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-[var(--color-text-primary)]">
                  Creatik AI
                </span>
              </a>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                AI-powered content creation for modern marketing teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    AI Writer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    SEO Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Brand Voice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Template Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    SEO Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} Creatik AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}