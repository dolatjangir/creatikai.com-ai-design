"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import {
  Megaphone,
  TrendingUp,
  Search,
  Globe,
  BarChart3,
  Target,
  Users,
  Mail,
  Smartphone,
  Video,
  PenTool,
  Share2,
  Award,
  Star,
  CheckCircle,
  Clock,
  BookOpen,
  Send,
  X,
  Loader2,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Phone,
  Calendar,
  Briefcase,
  Zap,
  Flame,
  Gem,
  Crown,
  Heart,
  MessageSquare,
  ArrowRight,
  Shield,
  FileCheck,
  Monitor,
  ShoppingCart,

} from "lucide-react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import InquiryForm from "@/components/inquirycomponent";

/* ============================================
   ANIMATED COUNTER
   ============================================ */
const Counter = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
const Reveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ============================================
   SOCIAL WAVE BACKGROUND
   ============================================ */
const SocialWaveBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bubble-float"
          style={{
            width: 300 + i * 50,
            height: 300 + i * 50,
            left: `${i * 22}%`,
            top: `${10 + (i % 3) * 25}%`,
            background: i % 2 === 0 
              ? "linear-gradient(135deg, #ec4899, #f97316)" 
              : "linear-gradient(135deg, #8b5cf6, #3b82f6)",
            filter: "blur(80px)",
            opacity: 0.08,
            animationDelay: `${i * 2}s`,
            animationDuration: `${20 + i * 4}s`,
          }}
        />
      ))}
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};


/* ============================================
   ACCORDION
   ============================================ */
const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <div
    className="border rounded-xl overflow-hidden transition-all duration-300"
    style={{
      borderColor: isOpen ? "var(--color-border-hover)" : "var(--color-border-light)",
      backgroundColor: "var(--color-card-bg)",
      boxShadow: isOpen ? "var(--shadow-md)" : "none",
    }}
  >
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left">
      <span className="text-sm font-semibold pr-4" style={{ color: "var(--color-text-primary)" }}>
        {question}
      </span>
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all"
        style={{
          backgroundColor: isOpen ? "var(--color-icon-bg-1)" : "var(--color-bg-hover)",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <ChevronDown className="w-4 h-4" style={{ color: isOpen ? "var(--color-primary)" : "var(--color-text-muted)" }} />
      </div>
    </button>
    <div
      className="overflow-hidden transition-all duration-300"
      style={{ maxHeight: isOpen ? "250px" : "0px", opacity: isOpen ? 1 : 0 }}
    >
      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {answer}
      </p>
    </div>
  </div>
);

/* ============================================
   COURSE MODULE CARD
   ============================================ */
const ModuleCard = ({
  icon,
  title,
  description,
  topics,
  color,
  bgColor,
  duration,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: string[];
  color: string;
  bgColor: string;
  duration: string;
}) => (
  <div
    className="group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
    style={{
      backgroundColor: "var(--color-card-bg)",
      borderColor: "var(--color-border-light)",
      boxShadow: "var(--shadow-sm)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = color + "40";
      e.currentTarget.style.boxShadow = `0 20px 25px -5px ${color}15`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--color-border-light)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }}
  >
    <div className="flex items-start justify-between mb-4">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {icon}
      </div>
      <span
        className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {duration}
      </span>
    </div>
    <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
      {title}
    </h3>
    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
      {description}
    </p>
    <ul className="space-y-2">
      {topics.map((topic, i) => (
        <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
          <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: color }} />
          {topic}
        </li>
      ))}
    </ul>
  </div>
);

/* ============================================
   MAIN DIGITAL MARKETING JAIPUR PAGE
   ============================================ */
export default function DigitalMarketingJaipurPage(): JSX.Element {
 const [formOpen, setFormOpen] = useState(false);  
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { value: 2800, suffix: "+", label: "Students Trained", icon: <Users className="w-5 h-5" /> },
    { value: 4.9, suffix: "/5", label: "Course Rating", icon: <Star className="w-5 h-5" /> },
    { value: 10, suffix: "", label: "Weeks Intensive", icon: <Clock className="w-5 h-5" /> },
    { value: 92, suffix: "%", label: "Placement Rate", icon: <Briefcase className="w-5 h-5" /> },
  ];

  const modules = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Mastery",
      description: "Rank #1 on Google. Master keyword research, on-page SEO, technical SEO, link building, and local SEO for Jaipur businesses.",
      topics: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
      color: "#2563eb",
      bgColor: "#eff6ff",
      duration: "2 Weeks",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Google Ads & PPC",
      description: "Create high-converting ad campaigns. Learn Google Ads, Facebook Ads, Instagram Ads, and retargeting strategies.",
      topics: ["Google Ads Setup", "Facebook/Instagram Ads", "YouTube Ads", "Retargeting", "Budget Optimization"],
      color: "#9333ea",
      bgColor: "#faf5ff",
      duration: "2 Weeks",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media Marketing",
      description: "Build brands on Instagram, Facebook, LinkedIn, Twitter & YouTube. Create viral content and grow organic reach.",
      topics: ["Content Strategy", "Instagram Growth", "LinkedIn B2B", "YouTube Marketing", "Influencer Outreach"],
      color: "#0891b2",
      bgColor: "#ecfeff",
      duration: "2 Weeks",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email & Content Marketing",
      description: "Write copy that converts. Build email funnels, automate campaigns, and create content that drives traffic.",
      topics: ["Copywriting", "Email Funnels", "Marketing Automation", "Blog Strategy", "Lead Magnets"],
      color: "#10b981",
      bgColor: "#ecfdf5",
      duration: "2 Weeks",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Data",
      description: "Make data-driven decisions. Master Google Analytics 4, Google Tag Manager, conversion tracking, and reporting.",
      topics: ["Google Analytics 4", "Tag Manager", "Conversion Tracking", "Data Studio", "A/B Testing"],
      color: "#f59e0b",
      bgColor: "#fffbeb",
      duration: "1 Week",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Marketing & Tools",
      description: "Leverage AI for marketing. Use ChatGPT, Jasper, Midjourney, and automation tools to 10x your productivity.",
      topics: ["ChatGPT for Marketing", "AI Content Creation", "Midjourney Design", "Automation Tools", "Prompt Engineering"],
      color: "#ea580c",
      bgColor: "#fff7ed",
      duration: "1 Week",
    },
  ];

  const whyChoose = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Jaipur's #1 Institute",
      desc: "Top-rated digital marketing training center in Jaipur with 5+ years of excellence.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Small Batch Sizes",
      desc: "Maximum 15 students per batch for personalized attention and doubt resolution.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "100% Placement Support",
      desc: "Direct tie-ups with 150+ Jaipur & Delhi NCR companies for job placements.",
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Live Projects",
      desc: "Work on real Jaipur business campaigns — not just theory and dummy projects.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Google Certifications",
      desc: "Get 6+ Google certifications included: Ads, Analytics, Tag Manager & more.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Lifetime Support",
      desc: "Access to course updates, community, and mentorship even after completion.",
    },
  ];

  const placements = [
    { company: "Infosys", role: "Digital Marketing Executive", package: "4.5 LPA", name: "Priya Sharma" },
    { company: "Wipro", role: "SEO Specialist", package: "5.2 LPA", name: "Rahul Verma" },
    { company: "TCS", role: "Social Media Manager", package: "6.0 LPA", name: "Neha Gupta" },
    { company: "Byju's", role: "Performance Marketer", package: "7.5 LPA", name: "Amit Patel" },
    { company: "Zomato", role: "Growth Hacker", package: "8.0 LPA", name: "Sneha Jain" },
    { company: "Amazon", role: "PPC Specialist", package: "9.2 LPA", name: "Vikram Singh" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Digital Marketing Manager",
      company: "Infosys Jaipur",
      text: "Joined as a fresher, got placed at Infosys within 2 months of completion. The practical approach and live projects made all the difference.",
      avatar: "P",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "SEO Specialist",
      company: "Freelancer",
      text: "Started my own agency after the course. Now handling 12+ Jaipur clients. The AI marketing module was a game-changer for my business.",
      avatar: "R",
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Social Media Lead",
      company: "Pink City Startups",
      text: "Best investment for my career switch from teaching to marketing. The weekend batch was perfect for working professionals like me.",
      avatar: "N",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Do I need any prior experience for this course?",
      a: "No prior experience needed. We start from absolute basics and take you to advanced level. Whether you're a student, working professional, or business owner — this course is designed for everyone.",
    },
    {
      q: "What are the batch timings in Jaipur?",
      a: "We offer flexible timings: Morning batch (9 AM - 12 PM), Evening batch (6 PM - 9 PM), and Weekend batch (Sat-Sun 10 AM - 4 PM). All batches include live practical sessions.",
    },
    {
      q: "Will I get a job after completing the course?",
      a: "Yes, we provide 100% placement assistance. Our dedicated placement cell connects you with 150+ hiring partners in Jaipur and Delhi NCR. Average salary package ranges from 3.5 to 8 LPA.",
    },
    {
      q: "What certifications will I receive?",
      a: "You'll receive CreatiKai's industry-recognized certificate plus Google Ads, Google Analytics, Google Tag Manager, HubSpot, and Facebook Blueprint certifications — all included in the course fee.",
    },
    {
      q: "Can I pay in installments?",
      a: "Absolutely! We offer 0% EMI for 3, 6, and 12 months. You can also opt for our 'Study Now, Pay Later' program where you start paying only after getting a job.",
    },
    {
      q: "Is there any demo class available?",
      a: "Yes! We offer a FREE 2-hour demo class every Saturday. You can also attend the first 3 days of the course risk-free with our money-back guarantee.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)]">
       <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} courseName="Full Stack Development" />

      {/* ============================================
          HERO SECTION — Jaipur Flavor
          ============================================ */}
      <section className="relative pt-4 min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-section-alt)" }} />
        <SocialWaveBg />
        
        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 200 + i * 40,
                height: 200 + i * 40,
                left: `${5 + i * 16}%`,
                top: `${10 + (i % 3) * 25}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(60px)",
                opacity: 0.3,
                animationDelay: `${i * 2}s`,
                animationDuration: `${18 + i * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] w-full py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal>
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: "var(--color-badge-bg)",
                      borderColor: "var(--color-badge-border)",
                      color: "var(--color-badge-text)",
                    }}
                  >
                    <MapPin className="w-3 h-3" />
                    Jaipur's #1 Digital Marketing Institute
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: "var(--color-tag-bestseller)" }}
                  >
                    <Flame className="w-3 h-3" />
                    Trending
                  </span>
                </div>

                <h1
                  className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Master Digital Marketing in
                  <span className="gradient-text"> Pink City</span>
                </h1>

                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Join Jaipur's most practical digital marketing course. Learn SEO, Google Ads, Social Media, and AI Marketing with live projects on real Jaipur businesses. 100% placement support.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-10">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: "10 Weeks" },
                    { icon: <BookOpen className="w-4 h-4" />, text: "150+ Hours" },
                    { icon: <Award className="w-4 h-4" />, text: "6 Certifications" },
                    { icon: <Briefcase className="w-4 h-4" />, text: "Job Guarantee" },
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                      <span style={{ color: "var(--color-primary)" }}>{item.icon}</span>
                      {item.text}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setFormOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all text-sm"
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
                    <Send className="w-4 h-4" />
                    Book Free Demo Class
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.6)",
                      color: "var(--color-text-secondary)",
                      borderColor: "var(--color-border)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Phone className="w-4 h-4" />
                    Call: +91 9649902000
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                  <div className="flex -space-x-2">
                    {["P", "R", "N", "A"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          borderColor: "var(--color-bg)",
                          backgroundColor: i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-purple)" : i === 2 ? "var(--color-emerald)" : "var(--color-amber)",
                        }}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5" style={{ fill: "var(--color-star)", color: "var(--color-star)" }} />
                      ))}
                      <span className="text-sm font-bold ml-1" style={{ color: "var(--color-text-primary)" }}>4.9</span>
                    </div>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Rated by 2,800+ Jaipur students
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Pricing Card */}
            <Reveal delay={200}>
              <div className="relative flex justify-center lg:justify-end">
                <div
                  className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative w-full max-w-md rounded-2xl border overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  {/* Card Header */}
                  <div
                    className="p-6 border-b"
                    style={{
                      background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
                      borderColor: "var(--color-border-light)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <Megaphone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Digital Marketing Pro</h3>
                        <p className="text-white/60 text-xs">Jaipur Classroom + Online</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 10 Weeks</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Jaipur Center</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Next Batch</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>July 5, 2026</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Seats Left</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-amber)" }}>5 seats remaining</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>Summer Special Price</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold" style={{ color: "var(--color-text-primary)" }}>₹16,999</span>
                          <span className="text-sm line-through" style={{ color: "var(--color-text-faint)" }}>₹24,999</span>
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white"
                        style={{ backgroundColor: "var(--color-emerald)" }}
                      >
                        40% OFF
                      </span>
                    </div>
                    <button
                      onClick={() => setFormOpen(true)}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
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
                      <Send className="w-4 h-4" /> Book Free Demo
                    </button>
                    <p className="text-[10px] text-center" style={{ color: "var(--color-text-faint)" }}>
                      3-day money-back guarantee • No credit card required for demo
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          JAIPUR LOCATION BAR
          ============================================ */}
      <section
        className="py-6 border-y"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <span className="flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <MapPin className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              <span className="font-semibold">Malviya Nagar, Jaipur</span>
            </span>
            <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "var(--color-border)" }} />
            <span className="flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <Phone className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              <span className="font-semibold">+91 9649902000</span>
            </span>
            <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "var(--color-border)" }} />
            <span className="flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <Mail className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              <span className="font-semibold">jaipur@creatikai.com</span>
            </span>
            <span className="hidden sm:block w-px h-4" style={{ backgroundColor: "var(--color-border)" }} />
            <span className="flex items-center gap-2" style={{ color: "var(--color-text-secondary)" }}>
              <Calendar className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
              <span className="font-semibold">Mon-Sat, 9 AM - 9 PM</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{
                      backgroundColor: "var(--color-icon-bg-1)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <p className="text-2xl lg:text-3xl font-extrabold" style={{ color: "var(--color-text-primary)" }}>
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COURSE MODULES
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Course Curriculum
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                6 Modules. 10 Weeks. Zero to Pro.
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Industry-relevant curriculum designed by marketers who've managed crores in ad spend.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <ModuleCard {...mod} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US — Image Left, Content Right
          ============================================ */}
      <section
        className="py-[var(--section-py)]"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Visual */}
            <Reveal>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-3xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative aspect-square max-w-md mx-auto rounded-2xl border overflow-hidden p-8 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { icon: <FaInstagram className="w-8 h-8" />, label: "Instagram", color: "#E4405F" },
                      { icon: <FaYoutube className="w-8 h-8" />, label: "YouTube", color: "#FF0000" },
                      { icon: <FaLinkedin className="w-8 h-8" />, label: "LinkedIn", color: "#0A66C2" },
                      { icon: <FaTwitter className="w-8 h-8" />, label: "Twitter", color: "#1DA1F2" },
                    ].map((social, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-6 rounded-xl border transition-all hover:-translate-y-1"
                        style={{
                          borderColor: "var(--color-border-light)",
                          backgroundColor: "var(--color-bg)",
                        }}
                      >
                        <span style={{ color: social.color }}>{social.icon}</span>
                        <span className="text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                          {social.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Content */}
            <Reveal delay={200}>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Why CreatiKai Jaipur
                </span>
                <h2
                  className="text-2xl font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Why We're Jaipur's #1 Digital Marketing Institute
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  5 years, 2,800+ students, and 150+ hiring partners. We don't just teach marketing — we create marketers who deliver results.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChoose.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        borderColor: "var(--color-border-light)",
                        backgroundColor: "var(--color-card-bg)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-hover)";
                        e.currentTarget.style.boxShadow = "var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-light)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--color-icon-bg-1)", color: "var(--color-primary)" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-0.5" style={{ color: "var(--color-text-primary)" }}>
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          PLACEMENTS / HIRING PARTNERS
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Placement Record
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Our Students Work At
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                92% placement rate with average starting package of 4.5 LPA.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placements.map((placement, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div
                  className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    e.currentTarget.style.borderColor = "var(--color-border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    e.currentTarget.style.borderColor = "var(--color-border-light)";
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                      {placement.company}
                    </span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold text-white"
                      style={{ backgroundColor: "var(--color-emerald)" }}
                    >
                      {placement.package}
                    </span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>
                    {placement.role}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {placement.name[0]}
                    </div>
                    <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      Placed: {placement.name}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INQUIRY SECTION — Content Left, Sticky Form Right
          ============================================ */}
      <section
        className="py-[var(--section-py)] relative overflow-hidden"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 250 + i * 30,
                height: 250 + i * 30,
                left: `${i * 20}%`,
                top: `${(i % 2) * 40}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(70px)",
                opacity: 0.25,
                animationDelay: `${i * 3}s`,
                animationDuration: `${22 + i * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Content */}
            <Reveal>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Free Demo Class
                </span>
                <h2
                  className="text-2xl font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Start Your Digital Marketing Journey Today
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Book a FREE demo class at our Jaipur center. Experience our teaching methodology, meet the trainers, and get your career roadmap — all before paying a single rupee.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Shield className="w-5 h-5" />, title: "3-Day Money Back", desc: "Full refund if not satisfied" },
                    { icon: <FileCheck className="w-5 h-5" />, title: "6 Google Certifications", desc: "All included in course fee" },
                    { icon: <Users className="w-5 h-5" />, title: "1-on-1 Mentorship", desc: "Personal career coach assigned" },
                    { icon: <Briefcase className="w-5 h-5" />, title: "100% Placement Support", desc: "Till you get your first job" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl border"
                      style={{
                        borderColor: "var(--color-border-light)",
                        backgroundColor: "var(--color-card-bg)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--color-icon-bg-1)", color: "var(--color-primary)" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>{item.title}</h4>
                        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: "var(--color-border-light)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <Phone className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Call Us</p>
                      <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>+91 9649902000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: "var(--color-border-light)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-icon-bg-3)" }}
                    >
                      <MapPin className="w-5 h-5" style={{ color: "var(--color-cyan)" }} />
                    </div>
                    <div>
                      <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>Visit Us</p>
                      <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>Malviya Nagar</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Sticky Form */}
            <Reveal delay={200}>
              <div
                className="lg:sticky lg:top-24 p-6 lg:p-8 rounded-2xl border shadow-xl"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  borderColor: "var(--color-border-light)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                  >
                    <Megaphone className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                      Book Free Demo
                    </h3>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Limited seats — Reserve yours now
                    </p>
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setFormOpen(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="+91 9649902000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Preferred Batch *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 appearance-none"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      <option value="">Select batch timing</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="evening">Evening (6 PM - 9 PM)</option>
                      <option value="weekend">Weekend (Sat-Sun)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Career Goal *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 appearance-none"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      <option value="">Select your goal</option>
                      <option value="job">Get a Marketing Job</option>
                      <option value="freelance">Start Freelancing</option>
                      <option value="business">Grow My Business</option>
                      <option value="agency">Start an Agency</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Any questions about the course..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
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
                    <Send className="w-4 h-4" />
                    Book My Free Demo
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: "var(--color-text-faint)" }}>
                      <Shield className="w-3 h-3" /> No Spam
                    </span>
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: "var(--color-text-faint)" }}>
                      <Clock className="w-3 h-3" /> 2-Hour Callback
                    </span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section
        className="py-[var(--section-py)]"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Student Reviews
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                What Jaipur Students Say
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div
                  className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                    e.currentTarget.style.borderColor = "var(--color-border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                    e.currentTarget.style.borderColor = "var(--color-border-light)";
                  }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4" style={{ fill: "var(--color-star)", color: "var(--color-star)" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--color-text-secondary)" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        {t.role} at {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                FAQ
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <AccordionItem
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-primary)" }} />
        <div className="absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 300 + i * 60,
                height: 300 + i * 60,
                left: `${i * 25}%`,
                top: `${(i % 2) * 30}%`,
                backgroundColor: "#ffffff",
                filter: "blur(80px)",
                animationDelay: `${i * 2}s`,
                animationDuration: `${18 + i * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
          <Reveal>
            <MapPin className="w-16 h-16 mx-auto mb-6 text-white/70" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Your Marketing Career <br className="hidden sm:block" />
              Starts in Pink City.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Join 2,800+ Jaipur students who transformed their careers. Next batch starts July 5 — only 5 seats left.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all text-sm hover:bg-blue-50 hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Book Free Demo Class
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all text-sm hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                Call: +91 9649902000
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}