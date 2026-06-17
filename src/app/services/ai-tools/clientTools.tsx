"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  Play,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  X,
  Menu,
  Zap,
  BrainCircuit,
  Target,
  TrendingUp,
  BarChart3,
  Globe,
  Shield,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Calendar,
  FileCheck,
  AlertTriangle,
  Check,
  XCircle,
  Minus,
  Plus,
  MoveRight,
  CircleDot,
  PenTool,
  Code,
  Database,
  MessageSquare,
  Mail,
  Phone,
  Layers,
  Share2,
  Download,
  Monitor,
  Smartphone,
  Tablet,
 
  Signal,
  Flame,
  Droplets,
  Snowflake,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudMoon,
  Tornado,
  Mountain,
  TreePine,

  Anchor,
  Ship,
  Sailboat,
  LifeBuoy,
  Compass,
  Map,
  Hexagon,
  Octagon,
  Triangle,
  Square,
  Circle,
  Bookmark,
  ThumbsUp,
  Heart,
  Send,
  Inbox,
  Bell,
  Search,
  Filter,
  SortAsc,
  Grid3X3,
  List,
  Kanban,
  Table,
  BarChart,
  LineChart,
  PieChart,
  AreaChart,
  Radar,
  Activity,
  Gauge,
  Thermometer,
  Wind,
  Waves,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudHail,

} from "lucide-react";

/* ============================================
   AI TOOLS COURSE PAGE
   Creatik AI — Corporate Website
   ============================================ */

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Instructors", href: "#instructors" },
  { label: "Certification", href: "#certification" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "50K+", label: "Students Enrolled" },
  { value: "4.9", label: "Average Rating" },
  { value: "120+", label: "AI Tools Covered" },
  { value: "95%", label: "Completion Rate" },
];

const featuredCourses = [
  {
    icon: BrainCircuit,
    title: "AI Fundamentals Masterclass",
    desc: "Master the core concepts of artificial intelligence, machine learning, and neural networks. Build your foundation for advanced AI applications.",
    level: "Beginner",
    duration: "12 weeks",
    students: "18,420",
    rating: 4.9,
    reviews: 2847,
    gradient: "var(--gradient-course-1)",
    iconColor: "var(--color-course-icon-1)",
    modules: 24,
    projects: 8,
    certificate: true,
    price: "₹18,999",
    originalPrice: "₹24,999",
    tag: "Bestseller",
    tagColor: "var(--color-tag-bestseller)",
  },
  {
    icon: Code,
    title: "Prompt Engineering Pro",
    desc: "Learn to craft powerful prompts that unlock the full potential of GPT-4, Claude, Gemini, and other LLMs. Become a prompt engineering expert.",
    level: "Intermediate",
    duration: "8 weeks",
    students: "12,156",
    rating: 4.8,
    reviews: 1923,
    gradient: "var(--gradient-course-2)",
    iconColor: "var(--color-course-icon-2)",
    modules: 16,
    projects: 12,
    certificate: true,
    price: "₹18,999",
    originalPrice: "₹24,999",
    tag: "Popular",
    tagColor: "var(--color-tag-popular)",
  },
  {
    icon: PenTool,
    title: "AI Content Creation Lab",
    desc: "Create stunning content with AI tools. Master text generation, image synthesis, video creation, and audio production using cutting-edge AI.",
    level: "All Levels",
    duration: "10 weeks",
    students: "9,834",
    rating: 4.9,
    reviews: 1567,
    gradient: "var(--gradient-course-3)",
    iconColor: "var(--color-course-icon-3)",
    modules: 20,
    projects: 15,
    certificate: true,
    price: "₹18,999",
    originalPrice: "₹24,999",
    tag: "New",
    tagColor: "var(--color-tag-new)",
  },
  {
    icon: Database,
    title: "Data Science with AI",
    desc: "Leverage AI for data analysis, visualization, and predictive modeling. Learn to build intelligent data pipelines and automated insights.",
    level: "Advanced",
    duration: "16 weeks",
    students: "7,245",
    rating: 4.7,
    reviews: 1234,
    gradient: "var(--gradient-course-4)",
    iconColor: "var(--color-course-icon-4)",
    modules: 32,
    projects: 10,
    certificate: true,
    price: "₹19,999",
    originalPrice: "₹28,999",
    tag: "Bestseller",
    tagColor: "var(--color-tag-bestseller)",
  },
];

const curriculumHighlights = [
  {
    icon: Zap,
    title: "Hands-On Projects",
    desc: "Every module includes practical projects using real AI tools. Build a portfolio that demonstrates your skills to employers.",
    metric: "45+",
    metricLabel: "Real Projects",
  },
  {
    icon: BrainCircuit,
    title: "Live AI Labs",
    desc: "Access cloud-based AI environments pre-configured with the latest tools. No setup required—just log in and start building.",
    metric: "24/7",
    metricLabel: "Lab Access",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    desc: "Learn from AI researchers, industry practitioners, and tool creators who bring real-world experience to every lesson.",
    metric: "50+",
    metricLabel: "Experts",
  },
  {
    icon: Award,
    title: "Industry Certification",
    desc: "Earn recognized credentials that validate your AI expertise. Shareable certificates for LinkedIn and professional profiles.",
    metric: "100%",
    metricLabel: "Recognized",
  },
];

const learningPath = [
  {
    step: "01",
    title: "Foundation",
    desc: "Understand AI concepts, tool categories, and ethical considerations. Set up your AI toolkit and learn safe practices.",
    duration: "Weeks 1-3",
    skills: ["AI Basics", "Tool Selection", "Ethics & Safety"],
  },
  {
    step: "02",
    title: "Core Skills",
    desc: "Master prompt engineering, output refinement, and multi-tool workflows. Build proficiency with the most impactful AI applications.",
    duration: "Weeks 4-7",
    skills: ["Prompt Engineering", "Content Generation", "Data Analysis"],
  },
  {
    step: "03",
    title: "Specialization",
    desc: "Choose your focus area: content creation, coding assistance, business automation, or data science. Deep-dive with expert guidance.",
    duration: "Weeks 8-10",
    skills: ["Specialized Tools", "Industry Workflows", "Advanced Techniques"],
  },
  {
    step: "04",
    title: "Mastery",
    desc: "Complete capstone projects, earn certification, and join our alumni network. Launch your AI-powered career with confidence.",
    duration: "Weeks 11-12",
    skills: ["Capstone Project", "Certification", "Career Launch"],
  },
];

const instructors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    bio: "Former Google Brain researcher with 15+ years in NLP and computer vision. Published 40+ papers on transformer architectures.",
    students: "24K",
    courses: 6,
    rating: 4.9,
    gradient: "var(--gradient-course-1)",
  },
  {
    name: "Marcus Webb",
    role: "Prompt Engineering Expert",
    bio: "Built prompt systems for Fortune 500 companies. Creator of the PEARL prompt framework used by 50,000+ practitioners.",
    students: "18K",
    courses: 4,
    rating: 4.8,
    gradient: "var(--gradient-course-2)",
  },
  {
    name: "Priya Sharma",
    role: "AI Content Strategist",
    bio: "Led AI content transformation at HubSpot and Shopify. Pioneered multi-modal content pipelines generating 10M+ impressions monthly.",
    students: "15K",
    courses: 5,
    rating: 4.9,
    gradient: "var(--gradient-course-3)",
  },
  {
    name: "Dr. James Osei",
    role: "Data Science Director",
    bio: "Ex-Microsoft AI architect specializing in predictive modeling and automated insights. Built systems processing 1B+ data points daily.",
    students: "12K",
    courses: 3,
    rating: 4.7,
    gradient: "var(--gradient-course-4)",
  },
];

const certificationBenefits = [
  {
    icon: Award,
    title: "Verified Credential",
    desc: "Blockchain-verified certificates that prove your skills. Employers can instantly validate your achievement.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    desc: "Our certifications are recognized by 500+ companies worldwide. Stand out in the AI talent marketplace.",
  },
  {
    icon: Target,
    title: "Skill Validation",
    desc: "Rigorous assessment including practical projects, peer review, and proctored examinations. Only the capable certify.",
  },
  {
    icon: TrendingUp,
    title: "Career Acceleration",
    desc: "Certified graduates report 3x faster promotion rates and 40% higher starting salaries in AI roles.",
  },
];

const testimonials = [
  {
    quote:
      "The Prompt Engineering course completely changed how I work. I automated 60% of my content workflow and got promoted to AI Lead within 6 months of certifying.",
    author: "Elena Rossi",
    role: "Marketing Director, Luxe Brands",
    metric: "60%",
    metricLabel: "Workflow Automated",
  },
  {
    quote:
      "I came in knowing nothing about AI. Twelve weeks later, I'm building custom GPTs for my team and consulting other departments. The hands-on labs made all the difference.",
    author: "David Park",
    role: "Product Manager, TechFlow",
    metric: "12",
    metricLabel: "Weeks to Mastery",
  },
  {
    quote:
      "The certification got me hired. My new employer specifically mentioned Creatik AI credential as a deciding factor. The portfolio projects were interview gold.",
    author: "Amara Okafor",
    role: "AI Strategist, Apex Consulting",
    metric: "3x",
    metricLabel: "Interview Success",
  },
];

const faqs = [
  {
    q: "Do I need prior programming or AI experience?",
    a: "No. Our beginner courses require zero prior knowledge. We start with fundamentals and progressively build complexity. For advanced tracks, we offer preparatory modules to ensure you're ready. Our AI handles personalized pacing based on your progress.",
  },
  {
    q: "What AI tools will I actually use in the courses?",
    a: "You'll work with industry-standard tools including OpenAI GPT-4, Claude, Midjourney, Stable Diffusion, Runway ML, ElevenLabs, and 50+ others. Our lab environment provides licensed access—no separate subscriptions needed. We update tool coverage quarterly as the landscape evolves.",
  },
  {
    q: "How is the course delivered? Self-paced or live?",
    a: "Both. Core content is self-paced video with interactive exercises. Weekly live workshops with instructors provide Q&A, project review, and networking. Labs are available 24/7. You can complete in 8-16 weeks depending on your schedule and chosen intensity.",
  },
  {
    q: "Is the certification really recognized by employers?",
    a: "Yes. Our certification is recognized by 500+ hiring companies including Google, Microsoft, Amazon, Meta, and leading consultancies. Certificates are blockchain-verified and integrate with LinkedIn. Our 2025 graduate survey shows 89% of certified students landed AI-related roles within 6 months.",
  },
  {
    q: "What's included in the course fee?",
    a: "Everything: video lessons, hands-on labs, tool access, live workshops, project feedback, community access, study materials, practice exams, and certification. No hidden costs. Enterprise teams receive additional onboarding support and custom learning paths.",
  },
];

export default function AIToolsCoursePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activePath, setActivePath] = useState(0);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">
 

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-glow)] opacity-20 blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-[var(--color-glow-strong)] opacity-15 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-30" />
          
          {/* Floating book icons */}
          <div className="absolute top-20 left-[10%] opacity-[0.03]">
            <BookOpen className="h-32 w-32 text-[var(--color-primary)]" />
          </div>
          <div className="absolute bottom-32 right-[15%] opacity-[0.03]">
            <GraduationCap className="h-40 w-40 text-[var(--color-primary)]" />
          </div>
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
                <GraduationCap className="h-4 w-4" />
                AI Education Platform
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Master AI Tools That{" "}
                <span className="gradient-text">
                  Transform Careers
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Hands-on courses taught by industry experts. From prompt engineering
                to AI automation—learn the skills that employers desperately want
                and build a portfolio that proves your expertise.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  Watch Preview
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

            {/* Course Preview Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-white overflow-hidden">
                  <div className="h-48 relative" style={{ background: "var(--gradient-course-1)" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BrainCircuit className="h-20 w-20 text-white/20" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-bold text-white shadow-lg">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-white border border-white/30">
                          Beginner
                        </span>
                        <span className="rounded-full bg-white/20 backdrop-blur-sm px-2 py-0.5 text-[10px] font-medium text-white border border-white/30">
                          12 Weeks
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        AI Fundamentals Masterclass
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]" />
                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">4.9</span>
                        <span className="text-xs text-[var(--color-text-muted)]">(2,847)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-[var(--color-text-muted)]" />
                        <span className="text-xs text-[var(--color-text-muted)]">18,420 students</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                        <div className="text-sm font-bold text-[var(--color-text-primary)]">24</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">Modules</div>
                      </div>
                      <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                        <div className="text-sm font-bold text-[var(--color-text-primary)]">8</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">Projects</div>
                      </div>
                      <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                        <div className="text-sm font-bold text-[var(--color-text-primary)]">✓</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">Certificate</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-[var(--color-text-primary)]">₹18,999</span>
                        <span className="text-sm text-[var(--color-text-muted)] line-through ml-2">₹24,999</span>
                      </div>
                      <button className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-gold-bg)] flex items-center justify-center">
                    <Award className="h-4 w-4 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">Certified</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Industry recognized</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">95%</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Completion rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">120+ Tools</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Covered in depth</div>
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
            Trusted by learners at leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify", "Airbnb", "Stripe"].map(
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

      {/* Featured Courses */}
      <section id="courses" className="py-[var(--section-py)]">
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
              <BookOpen className="h-4 w-4" />
              Course Catalog
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Courses designed for{" "}
              <span className="gradient-text">real-world impact</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              From beginner fundamentals to advanced specialization—every course
              builds skills that employers value and markets reward.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {featuredCourses.map((course, idx) => (
              <motion.div
                key={course.title}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredCourse(idx)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white hover:shadow-[var(--shadow-xl)] transition-all duration-300"
              >
                <div
                  className="h-2"
                  style={{ background: course.gradient }}
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <course.icon
                        className="h-7 w-7"
                        style={{ color: course.iconColor }}
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold text-white"
                        style={{ backgroundColor: course.tagColor }}
                      >
                        {course.tag}
                      </span>
                      <span className="rounded-full bg-[var(--color-section-alt)] px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]" />
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">{course.rating}</span>
                      <span className="text-xs text-[var(--color-text-muted)]">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-[var(--color-text-muted)]" />
                      <span className="text-xs text-[var(--color-text-muted)]">{course.students} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-[var(--color-text-muted)]" />
                      <span className="text-xs text-[var(--color-text-muted)]">{course.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                      <div className="text-sm font-bold text-[var(--color-text-primary)]">{course.modules}</div>
                      <div className="text-[10px] text-[var(--color-text-muted)]">Modules</div>
                    </div>
                    <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                      <div className="text-sm font-bold text-[var(--color-text-primary)]">{course.projects}</div>
                      <div className="text-[10px] text-[var(--color-text-muted)]">Projects</div>
                    </div>
                    <div className="rounded-lg bg-[var(--color-section-alt)] p-2 text-center">
                      <div className="text-sm font-bold text-[var(--color-text-primary)]">{course.certificate ? "✓" : "—"}</div>
                      <div className="text-[10px] text-[var(--color-text-muted)]">Certificate</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <div>
                      <span className="text-2xl font-bold text-[var(--color-text-primary)]">{course.price}</span>
                      <span className="text-sm text-[var(--color-text-muted)] line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)] transition-colors">
                      Enroll Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section id="curriculum" className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              Learning Experience
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Not just theory.{" "}
              <span className="gradient-text">Pure practice.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Every course is designed around hands-on learning. You don't just
              watch—you build, create, and ship real projects.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {curriculumHighlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <highlight.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-1">
                  {highlight.metric}
                </div>
                <div className="text-sm font-semibold text-[var(--color-text-muted)] mb-3">
                  {highlight.metricLabel}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {highlight.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Path */}
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
              Your path to{" "}
              <span className="gradient-text">AI mastery</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              A structured 12-week journey from curious beginner to confident
              practitioner. Every step builds on the last.
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
              {learningPath.map((step, idx) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  onClick={() => setActivePath(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    activePath === idx
                      ? "border-[var(--color-primary)] bg-white shadow-[var(--shadow-lg)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border-hover)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        activePath === idx
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-section-alt)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-lg font-bold ${
                            activePath === idx
                              ? "text-[var(--color-primary)]"
                              : "text-[var(--color-text-primary)]"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-section-alt)] px-2 py-1 rounded">
                          {step.duration}
                        </span>
                      </div>
                      <AnimatePresence mode="wait">
                        {activePath === idx && (
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
                              {step.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3 py-1 text-xs font-medium text-[var(--color-badge-text)]"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                  {skill}
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
                    Progress Tracker
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {learningPath.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold ${
                        i < activePath ? "bg-[var(--color-emerald)] text-white" :
                        i === activePath ? "bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-primary)]/20" :
                        "bg-[var(--color-section-alt)] text-[var(--color-text-muted)]"
                      }`}>
                        {i < activePath ? <Check className="h-4 w-4" /> : step.step}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-semibold ${
                          i <= activePath ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-muted)]"
                        }`}>
                          {step.title}
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)]">{step.duration}</div>
                      </div>
                      {i < learningPath.length - 1 && (
                        <div className={`h-8 w-px absolute left-[2.25rem] mt-8 ${
                          i < activePath ? "bg-[var(--color-emerald)]" : "bg-[var(--color-border)]"
                        }`} style={{ top: `${i * 4.5}rem` }} />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--color-text-muted)]">Overall Progress</span>
                    <span className="text-sm font-bold text-[var(--color-primary)]">{((activePath + 1) * 25)}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-border)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-500"
                      style={{ width: `${((activePath + 1) * 25)}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
              <Users className="h-4 w-4" />
              Expert Instructors
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Learn from the{" "}
              <span className="gradient-text">best in the field</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Industry leaders, researchers, and practitioners who have built
              the AI tools you're learning to master.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {instructors.map((instructor) => (
              <motion.div
                key={instructor.name}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-24 relative" style={{ background: instructor.gradient }}>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="h-16 w-16 rounded-full bg-[var(--color-avatar-bg)] border-4 border-white flex items-center justify-center text-xl font-bold text-[var(--color-text-faint)]">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="pt-10 pb-6 px-6 text-center">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium mb-3">
                    {instructor.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {instructor.bio}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {instructor.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {instructor.courses} courses
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-[var(--color-star)] text-[var(--color-star)]" />
                      {instructor.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certification */}
      <section id="certification" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-4"
              >
                <Award className="h-4 w-4" />
                Industry Certification
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight mb-6"
              >
                Earn credentials that{" "}
                <span className="gradient-text">open doors</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[var(--color-text-secondary)] mb-10"
              >
                Our certification program validates real skills through practical
                assessment. Not just a certificate—a portfolio that proves
                what you can do.
              </motion.p>

              <div className="space-y-6">
                {certificationBenefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-icon-bg-1)]">
                      <benefit.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-xl)] overflow-hidden">
                {/* Certificate Mockup */}
                <div className="relative bg-[var(--color-section-alt)] rounded-xl p-8 border-2 border-[var(--color-gold-border)]">
                  <div className="absolute top-4 right-4">
                    <Award className="h-12 w-12 text-[var(--color-gold)] opacity-20" />
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <Sparkles className="h-6 w-6 text-[var(--color-primary)]" />
                      <span className="text-lg font-bold text-[var(--color-text-primary)]">Creatik AI</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                      Certificate of Mastery
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] mb-6">
                      This certifies that
                    </p>
                    <p className="text-xl font-bold text-[var(--color-primary)] mb-2">
                      [Your Name]
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                      has successfully completed the<br />
                      <span className="font-semibold">AI Fundamentals Masterclass</span>
                    </p>
                    <div className="flex items-center justify-center gap-6 text-xs text-[var(--color-text-muted)]">
                      <div>
                        <div className="font-semibold text-[var(--color-text-primary)]">Blockchain Verified</div>
                        <div>0x7f3a...9e2d</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-text-primary)]">Issued</div>
                        <div>May 2026</div>
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-text-primary)]">Credential ID</div>
                        <div>CAI-2026-001</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[var(--color-emerald)]" />
                        <span className="text-xs font-semibold text-[var(--color-emerald)]">Verified by Creatik AI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats below certificate */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Recognized By", value: "500+" },
                    { label: "Graduate Success", value: "89%" },
                    { label: "Salary Increase", value: "40%" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-[var(--color-section-alt)] p-3 text-center">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">{item.value}</div>
                      <div className="text-[10px] text-[var(--color-text-muted)]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Student success{" "}
              <span className="gradient-text">stories</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Real results from real learners who transformed their careers
              with Creatik AI education.
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
      <section id="pricing" className="py-[var(--section-py)]">
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
                <GraduationCap className="h-4 w-4" />
                Your AI career starts here
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Start learning for free today
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Begin with our free AI fundamentals module. No credit card required.
                Upgrade when you're ready to certify and specialize.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Start Free Module
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  View Full Catalog
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Free starter module
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  No credit card required
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
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
                Everything you need to know about learning AI with Creatik.
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