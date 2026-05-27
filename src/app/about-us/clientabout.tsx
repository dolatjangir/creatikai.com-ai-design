"use client";

import React, { useState, useEffect, useRef, JSX } from "react";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Bot,
  Cpu,
  MessageSquare,
  TrendingUp,
  Search,
  Megaphone,
  Users,
  Award,
  Target,
  Zap,
  Sparkles,
  BarChart3,
  Code2,
  BrainCircuit,
  Rocket,
  ChevronDown,
  Play,
  Quote,
  Star,
  Clock,
  Shield,
  HeartHandshake,
} from "lucide-react";
import BubbleBackground from "@/components/bubble-bg";

// ============================================
// ANIMATED COUNTER COMPONENT
// ============================================
const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ============================================
// BUBBLE BACKGROUND COMPONENT
// ============================================
// const BubbleBackground = () => {
//   const bubbles = [
//     { size: 300, x: 10, y: 20, delay: 0, duration: 20 },
//     { size: 200, x: 75, y: 60, delay: 2, duration: 25 },
//     { size: 150, x: 85, y: 15, delay: 4, duration: 18 },
//     { size: 250, x: 40, y: 80, delay: 1, duration: 22 },
//     { size: 180, x: 60, y: 30, delay: 3, duration: 28 },
//     { size: 120, x: 20, y: 70, delay: 5, duration: 15 },
//     { size: 220, x: 90, y: 75, delay: 2, duration: 24 },
//     { size: 160, x: 5, y: 45, delay: 6, duration: 19 },
//     { size: 280, x: 55, y: 10, delay: 1, duration: 26 },
//     { size: 140, x: 30, y: 55, delay: 4, duration: 21 },
//   ];

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {bubbles.map((bubble, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full animate-bubble-float"
//           style={{
//             width: bubble.size,
//             height: bubble.size,
//             left: `${bubble.x}%`,
//             top: `${bubble.y}%`,
//             background: "var(--color-bubble-bg)",
//             animationDelay: `${bubble.delay}s`,
//             animationDuration: `${bubble.duration}s`,
//             filter: "blur(60px)",
//             opacity: 0.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// ============================================
// SECTION WRAPPER WITH REVEAL ANIMATION
// ============================================
const RevealSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// SERVICE CARD COMPONENT
// ============================================
const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}) => (
  <div
    className="group relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
    style={{
      backgroundColor: "var(--color-card-bg)",
      borderColor: "var(--color-border-light)",
      boxShadow: "var(--shadow-sm)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
      e.currentTarget.style.borderColor = "var(--color-border-hover)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      e.currentTarget.style.borderColor = "var(--color-border-light)";
    }}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: gradient }}
    />
    <div className="relative z-10">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
        style={{ backgroundColor: "var(--color-icon-bg-1)" }}
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold mb-3"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ============================================
// TESTIMONIAL CARD
// ============================================
const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}) => (
  <div
    className="p-6 lg:p-8 rounded-2xl border transition-all duration-300"
    style={{
      backgroundColor: "var(--color-card-bg)",
      borderColor: "var(--color-border-light)",
      boxShadow: "var(--shadow-sm)",
    }}
  >
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{
            fill: i < rating ? "var(--color-star)" : "transparent",
            color: i < rating ? "var(--color-star)" : "var(--color-border)",
          }}
        />
      ))}
    </div>
    <Quote className="w-8 h-8 mb-3 opacity-20" style={{ color: "var(--color-primary)" }} />
    <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--color-text-secondary)" }}>
      &ldquo;{quote}&rdquo;
    </p>
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        {author[0]}
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
          {author}
        </p>
        <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          {role}, {company}
        </p>
      </div>
    </div>
  </div>
);

// ============================================
// MAIN ABOUT PAGE
// ============================================
export default function AboutPage(): JSX.Element {
  const stats = [
    { icon: <Globe className="w-6 h-6" />, value: 500, suffix: "+", label: "Websites Delivered" },
    { icon: <Bot className="w-6 h-6" />, value: 150, suffix: "+", label: "AI Agents Deployed" },
    { icon: <Users className="w-6 h-6" />, value: 200, suffix: "+", label: "Happy Clients" },
    { icon: <TrendingUp className="w-6 h-6" />, value: 98, suffix: "%", label: "Success Rate" },
  ];

  const services = [
    {
      icon: <Globe className="w-7 h-7" style={{ color: "var(--color-primary)" }} />,
      title: "Website Development",
      description: "Custom, high-performance websites built with cutting-edge technologies. From corporate portals to e-commerce platforms, we craft digital experiences that convert.",
      features: ["Responsive Design", "Next.js & React", "CMS Integration", "Performance Optimized"],
      gradient: "linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(29,78,216,0.05) 100%)",
    },
    {
      icon: <BrainCircuit className="w-7 h-7" style={{ color: "var(--color-purple)" }} />,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows, reduce manual tasks, and boost operational efficiency using advanced machine learning models.",
      features: ["Workflow Automation", "Predictive Analytics", "Process Optimization", "Smart Integrations"],
      gradient: "linear-gradient(135deg, rgba(147,51,234,0.03) 0%, rgba(88,28,135,0.05) 100%)",
    },
    {
      icon: <Bot className="w-7 h-7" style={{ color: "var(--color-cyan)" }} />,
      title: "AI Agents & Chatbots",
      description: "Conversational AI agents that handle customer support, lead qualification, and sales automation 24/7 with human-like interactions.",
      features: ["NLP-Powered", "Multi-Platform", "Lead Qualification", "24/7 Availability"],
      gradient: "linear-gradient(135deg, rgba(8,145,178,0.03) 0%, rgba(22,78,99,0.05) 100%)",
    },
    {
      icon: <Search className="w-7 h-7" style={{ color: "var(--color-emerald)" }} />,
      title: "SEO & Digital Marketing",
      description: "Data-driven SEO strategies and digital marketing campaigns that increase organic visibility, drive qualified traffic, and maximize ROI.",
      features: ["Technical SEO", "Content Strategy", "PPC Campaigns", "Analytics & Reporting"],
      gradient: "linear-gradient(135deg, rgba(16,185,129,0.03) 0%, rgba(6,78,59,0.05) 100%)",
    },
  ];

  const testimonials = [
    {
      quote: "CreatiKai transformed our digital presence completely. Their AI automation reduced our operational costs by 40% while improving customer satisfaction scores.",
      author: "Sarah Mitchell",
      role: "CTO",
      company: "TechVenture Inc.",
      rating: 5,
    },
    {
      quote: "The chatbot they built handles 80% of our customer queries autonomously. Our support team can now focus on complex issues that truly need human attention.",
      author: "James Rodriguez",
      role: "Head of Operations",
      company: "GlobalRetail Co.",
      rating: 5,
    },
    {
      quote: "Their SEO expertise took us from page 3 to top 3 rankings in 6 months. Organic traffic increased by 300% and lead quality improved dramatically.",
      author: "Priya Sharma",
      role: "Marketing Director",
      company: "FinanceHub",
      rating: 5,
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      desc: "We measure success by your ROI, not just deliverables.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation First",
      desc: "Latest tech stack with AI-first approach to every solution.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Partnership Mindset",
      desc: "We grow with you as an extension of your team.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      desc: "Bank-grade security standards across all solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)]">
      {/* ============================================
          HERO SECTION — Bubble Background
          ============================================ */}
     <section
  className="relative min-h-[90vh] pt-12 flex items-center justify-center overflow-hidden"
  style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}
>
        <BubbleBackground />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center py-20">
          <RevealSection>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-8"
              style={{
                backgroundColor: "var(--color-badge-bg)",
                borderColor: "var(--color-badge-border)",
                color: "var(--color-badge-text)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              About CreatiKai
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <h1
              className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto"
              style={{ color: "var( --color-badge-bg)" }}
            >
              We Build Digital Futures with
              <span className="gradient-text"> AI & Innovation</span>
            </h1>
          </RevealSection>

          <RevealSection delay={200}>
            <p
              className="text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              A team of passionate technologists, marketers, and AI specialists dedicated to transforming businesses through intelligent digital solutions.
            </p>
          </RevealSection>

          <RevealSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all text-sm"
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
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all text-sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  color: "var(--color-text-secondary)",
                  borderColor: "var(--color-border)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.6)";
                }}
              >
                <Play className="w-4 h-4" />
                Watch Our Story
              </button>
            </div>
          </RevealSection>

          {/* Scroll indicator */}
          <RevealSection delay={500}>
            <div className="mt-20 animate-bounce">
              <ChevronDown
                className="w-6 h-6 mx-auto"
                style={{ color: "var(--color-text-faint)" }}
              />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section
        className="py-12 lg:py-16 border-y"
        style={{
          backgroundColor: "var(--color-section-alt)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: "var(--color-icon-bg-1)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <p
                    className="text-3xl lg:text-4xl font-extrabold mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 1: WHO WE ARE — Image Left, Content Right
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <RevealSection>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--gradient-course-1)" }}
                  >
                    <div className="text-center p-8">
                      <Code2 className="w-20 h-20 mx-auto mb-4" style={{ color: "var(--color-course-icon-1)" }} />
                      <p className="text-white/60 text-sm font-medium">Our Development Team</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -right-6 lg:right-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <Award className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>5+</p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right: Content */}
            <RevealSection delay={200}>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Who We Are
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Pioneering AI-Powered Digital Transformation
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    CreatiKai is a forward-thinking technology company specializing in AI automation, intelligent web solutions, and data-driven digital marketing. We bridge the gap between cutting-edge technology and real-world business outcomes.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    Our team of 50+ engineers, data scientists, and marketing strategists work collaboratively to deliver solutions that don&apos;t just meet expectations—they redefine what&apos;s possible.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "AI-First Architecture",
                    "Agile Development",
                    "Data-Driven Decisions",
                    "24/7 Support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-primary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                >
                  Meet Our Team <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2: OUR MISSION — Content Left, Image Right
          ============================================ */}
      <section
        className="py-[var(--section-py)]"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <RevealSection className="order-2 lg:order-1">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Our Mission
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Democratizing AI for Businesses of All Sizes
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    We believe every business deserves access to enterprise-grade AI and automation. Our mission is to make sophisticated technology accessible, affordable, and actionable for startups, SMEs, and enterprises alike.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    From intelligent chatbots that never sleep to SEO strategies that dominate search rankings, we empower businesses to compete in the digital age without needing an in-house army of engineers.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-icon-bg-2)" }}
                    >
                      <Rocket className="w-6 h-6" style={{ color: "var(--color-purple)" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
                        Rapid Deployment
                      </h4>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        Go live in weeks, not months
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-icon-bg-4)" }}
                    >
                      <BarChart3 className="w-6 h-6" style={{ color: "var(--color-emerald)" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
                        Measurable Impact
                      </h4>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        KPIs that prove ROI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right: Image */}
            <RevealSection delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--gradient-course-2)" }}
                  >
                    <div className="text-center p-8">
                      <BrainCircuit className="w-20 h-20 mx-auto mb-4" style={{ color: "var(--color-course-icon-2)" }} />
                      <p className="text-white/60 text-sm font-medium">AI Innovation Lab</p>
                    </div>
                  </div>
                </div>
                {/* Floating stat */}
                <div
                  className="absolute -bottom-6 -left-6 lg:left-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-icon-bg-3)" }}
                    >
                      <Clock className="w-5 h-5" style={{ color: "var(--color-cyan)" }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>3x</p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Faster Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHAT WE DO — Image Left, Content Right
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image */}
            <RevealSection>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--gradient-course-3)" }}
                  >
                    <div className="text-center p-8">
                      <MessageSquare className="w-20 h-20 mx-auto mb-4" style={{ color: "var(--color-course-icon-3)" }} />
                      <p className="text-white/60 text-sm font-medium">AI Chatbot Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right: Content */}
            <RevealSection delay={200}>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  What We Do
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  End-to-End Digital Solutions Under One Roof
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We don&apos;t just build websites or run ads—we architect complete digital ecosystems. Our integrated approach ensures every touchpoint works together to drive growth, efficiency, and customer satisfaction.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Globe className="w-5 h-5" />,
                      title: "Web Development",
                      desc: "Custom websites, web apps, and SaaS platforms built with Next.js, React, and modern architectures.",
                    },
                    {
                      icon: <Cpu className="w-5 h-5" />,
                      title: "AI Automation",
                      desc: "Intelligent workflow automation, RPA, and machine learning models tailored to your processes.",
                    },
                    {
                      icon: <Bot className="w-5 h-5" />,
                      title: "Conversational AI",
                      desc: "Smart chatbots and virtual assistants that handle support, sales, and engagement 24/7.",
                    },
                    {
                      icon: <Megaphone className="w-5 h-5" />,
                      title: "Digital Marketing",
                      desc: "SEO, PPC, content marketing, and social media strategies that deliver measurable results.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-x-1"
                      style={{
                        borderColor: "var(--color-border-light)",
                        backgroundColor: "var(--color-card-bg)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-hover)";
                        e.currentTarget.style.boxShadow = "var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-light)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                      >
                        <span style={{ color: "var(--color-primary)" }}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
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
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section
        className="py-[var(--section-py)]"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <RevealSection>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Our Services
              </span>
              <h2
                className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Solutions That Drive Real Results
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                From concept to deployment, we handle every aspect of your digital transformation journey.
              </p>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <ServiceCard {...service} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: WHY CHOOSE US — Content Left, Image Right
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <RevealSection className="order-2 lg:order-1">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Why Choose Us
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  The CreatiKai Advantage
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We combine technical excellence with business acumen. Our solutions are not just technically sound—they&apos;re strategically designed to achieve your specific business objectives.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((value, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border transition-all duration-300"
                      style={{
                        borderColor: "var(--color-border-light)",
                        backgroundColor: "var(--color-card-bg)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-hover)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "var(--shadow-md)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-light)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                        style={{ backgroundColor: "var(--color-icon-bg-1)", color: "var(--color-primary)" }}
                      >
                        {value.icon}
                      </div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>
                        {value.title}
                      </h4>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        {value.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Right: Image */}
            <RevealSection delay={200} className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "var(--gradient-course-4)" }}
                  >
                    <div className="text-center p-8">
                      <TrendingUp className="w-20 h-20 mx-auto mb-4" style={{ color: "var(--color-course-icon-4)" }} />
                      <p className="text-white/60 text-sm font-medium">Growth Analytics</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -right-6 lg:right-8 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-icon-bg-4)" }}
                    >
                      <Star className="w-5 h-5" style={{ color: "var(--color-emerald)" }} />
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>4.9/5</p>
                      <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Client Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
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
          <RevealSection>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Testimonials
              </span>
              <h2
                className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Trusted by Industry Leaders
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Don&apos;t just take our word for it—hear what our clients have to say about working with CreatiKai.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <RevealSection key={idx} delay={idx * 150}>
                <TestimonialCard {...t} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
          ============================================ */}
      <section className="py-[var(--section-py)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundColor: "var(--color-badge-bg)" }}
        />
        <BubbleBackground />
        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
          <RevealSection>
            <h2
              className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6 max-w-3xl mx-auto"
              style={{ color: "var(--color-text-primary)" }}
            >
              Ready to Transform Your Business with AI?
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: "var(--color-text-muted)" }}
            >
              Let&apos;s discuss how our AI automation, web development, and digital marketing solutions can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all text-sm"
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
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all text-sm"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-text-secondary)",
                  borderColor: "var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-card-bg)";
                }}
              >
                View Our Portfolio
              </button>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}