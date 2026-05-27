"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import {
  Bot,
  Brain,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Zap,
  MessageSquare,
  BarChart3,
  Code2,
  Globe,
  Shield,
  Calendar,
  Phone,
  Mail,
  User,
  Send,
  ChevronRight,
  PlayCircle,
  FileCheck,
  TrendingUp,
  Lightbulb,
  Target,
  Layers,
  X,
  Loader2,
} from "lucide-react";

/* ============================================
   ANIMATED COUNTER
   ============================================ */
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
        if (entry.isIntersecting) setIsVisible(true);
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
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* ============================================
   ROBOT VISUAL COMPONENT
   ============================================ */
const RobotVisual = ({ size = "large" }: { size?: "small" | "large" }) => {
  const isLarge = size === "large";
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow rings */}
      <div
        className={`absolute rounded-full blur-3xl opacity-40 animate-pulse`}
        style={{
          width: isLarge ? 320 : 160,
          height: isLarge ? 320 : 160,
          backgroundColor: "var(--color-glow)",
        }}
      />
      <div
        className={`absolute rounded-full blur-2xl opacity-30 animate-bubble-float`}
        style={{
          width: isLarge ? 240 : 120,
          height: isLarge ? 240 : 120,
          backgroundColor: "var(--color-bubble-bg)",
          animationDuration: "8s",
        }}
      />

      {/* Robot container */}
      <div
        className={`relative rounded-full border flex items-center justify-center shadow-2xl`}
        style={{
          width: isLarge ? 280 : 140,
          height: isLarge ? 280 : 140,
          backgroundColor: "var(--color-robot-bg)",
          borderColor: "var(--color-robot-border)",
          boxShadow: "0 0 60px -10px var(--color-glow-strong)",
        }}
      >
        <Bot
          className={isLarge ? "w-32 h-32" : "w-16 h-16"}
          style={{ color: "var(--color-primary)" }}
          strokeWidth={1.2}
        />

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "12s" }}>
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 0 10px var(--color-primary)",
            }}
          />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "18s", animationDirection: "reverse" }}>
          <div
            className="absolute w-2 h-2 rounded-full"
            style={{
              bottom: "15%",
              right: "15%",
              backgroundColor: "var(--color-cyan)",
              boxShadow: "0 0 8px var(--color-cyan)",
            }}
          />
        </div>
      </div>

      {/* Platform */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-6 rounded-[100%] blur-md"
        style={{
          width: isLarge ? 200 : 100,
          backgroundColor: "var(--color-glow)",
          opacity: 0.6,
        }}
      />
    </div>
  );
};

/* ============================================
   COURSE CARD
   ============================================ */
const CourseCard = ({
  icon,
  title,
  description,
  duration,
  level,
  rating,
  students,
  features,
  gradient,
  iconColor,
  popular = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  level: string;
  rating: number;
  students: string;
  features: string[];
  gradient: string;
  iconColor: string;
  popular?: boolean;
}) => (
  <div
    className="group relative rounded-2xl border overflow-hidden transition-all duration-500 hover:-translate-y-2"
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
    {popular && (
      <div
        className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white z-10"
        style={{ backgroundColor: "var(--color-tag-bestseller)" }}
      >
        Most Popular
      </div>
    )}

    {/* Header */}
    <div
      className="relative h-48 flex items-center justify-center overflow-hidden"
      style={{ background: gradient }}
    >
      <div className="relative z-10 text-center p-6">
        <div className="mb-3" style={{ color: iconColor }}>
          {icon}
        </div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-4 left-4 w-20 h-20 rounded-full border border-white/10" />
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full border border-white/10" />
    </div>

    {/* Body */}
    <div className="p-6">
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--color-text-muted)" }}
      >
        {description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: "var(--color-text-muted)" }}>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {duration}
        </span>
        <span className="flex items-center gap-1">
          <BarChart3 className="w-3.5 h-3.5" />
          {level}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-5 pb-5 border-b" style={{ borderColor: "var(--color-border-light)" }}>
        <span className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5" style={{ fill: "var(--color-star)", color: "var(--color-star)" }} />
          <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{rating}</span>
        </span>
        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>({students} students)</span>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
            <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />
            {f}
          </li>
        ))}
      </ul>

      <button
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
        Enroll Now <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
);

/* ============================================
   INQUIRY FORM MODAL
   ============================================ */
const InquiryForm = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(15,23,42,0.4)" }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-lg rounded-2xl border p-6 lg:p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: "var(--color-icon-bg-1)" }}
          >
            <Bot className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
          </div>
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {submitted ? "Thank You!" : "AI Training Inquiry"}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
            {submitted
              ? "We'll contact you shortly with course details."
              : "Fill in your details and our team will reach out."}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      
                    }}
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      
                    }}
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                     
                    }}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Interested Course
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)] appearance-none"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                    
                    }}
                  >
                    <option value="">Select a course</option>
                    <option value="ai-fundamentals">AI Fundamentals</option>
                    <option value="machine-learning">Machine Learning Mastery</option>
                    <option value="deep-learning">Deep Learning & Neural Networks</option>
                    <option value="nlp">Natural Language Processing</option>
                    <option value="ai-agents">AI Agents & Automation</option>
                    <option value="custom">Custom Corporate Training</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90" style={{ color: "var(--color-text-faint)" }} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text-primary)",
                 
                }}
                placeholder="Tell us about your learning goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              style={{
                backgroundColor: "var(--color-primary)",
                boxShadow: "var(--shadow-btn-primary)",
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit Inquiry
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--color-icon-bg-4)" }}
            >
              <CheckCircle className="w-8 h-8" style={{ color: "var(--color-emerald)" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ============================================
   MAIN AI TRAINING PAGE
   ============================================ */
export default function AITrainingPage(): JSX.Element {
  const [formOpen, setFormOpen] = useState(false);

  const stats = [
    { value: 5000, suffix: "+", label: "AI Professionals Trained", icon: <Users className="w-5 h-5" /> },
    { value: 50, suffix: "+", label: "Industry Expert Instructors", icon: <Award className="w-5 h-5" /> },
    { value: 98, suffix: "%", label: "Certification Pass Rate", icon: <FileCheck className="w-5 h-5" /> },
    { value: 92, suffix: "%", label: "Career Placement Rate", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const courses = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Fundamentals",
      description: "Master the core concepts of artificial intelligence, from neural networks to ethical AI practices. Perfect for beginners entering the AI space.",
      duration: "8 Weeks",
      level: "Beginner",
      rating: 4.9,
      students: "1,240",
      features: ["Neural Networks Basics", "Python for AI", "Ethics in AI", "Hands-on Projects"],
      gradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
      iconColor: "#60a5fa",
      popular: true,
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Machine Learning Mastery",
      description: "Deep dive into supervised and unsupervised learning, model optimization, and real-world ML deployment strategies.",
      duration: "12 Weeks",
      level: "Intermediate",
      rating: 4.8,
      students: "890",
      features: ["Regression & Classification", "Clustering Algorithms", "Model Deployment", "MLOps Basics"],
      gradient: "linear-gradient(135deg, #581c87 0%, #7c3aed 100%)",
      iconColor: "#c084fc",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Deep Learning & Neural Networks",
      description: "Build complex neural architectures including CNNs, RNNs, and Transformers. Train models on GPU clusters with real datasets.",
      duration: "14 Weeks",
      level: "Advanced",
      rating: 4.9,
      students: "650",
      features: ["CNNs & Computer Vision", "RNNs & LSTMs", "Transformer Architecture", "GPU Training"],
      gradient: "linear-gradient(135deg, #164e63 0%, #0891b2 100%)",
      iconColor: "#22d3ee",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Natural Language Processing",
      description: "Learn to build chatbots, sentiment analyzers, and language models. Covers BERT, GPT architecture, and prompt engineering.",
      duration: "10 Weeks",
      level: "Intermediate",
      rating: 4.7,
      students: "720",
      features: ["Text Processing", "BERT & GPT", "Sentiment Analysis", "Chatbot Development"],
      gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 100%)",
      iconColor: "#34d399",
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Agents & Automation",
      description: "Create autonomous AI agents that perform tasks, make decisions, and integrate with business systems using LangChain and AutoGPT.",
      duration: "10 Weeks",
      level: "Advanced",
      rating: 4.9,
      students: "540",
      features: ["LangChain Framework", "Autonomous Agents", "Tool Integration", "Business Automation"],
      gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
      iconColor: "#fb923c",
      popular: true,
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "AI for Developers",
      description: "Integrate AI APIs into applications. Learn OpenAI, Hugging Face, and build production-ready AI features into existing products.",
      duration: "6 Weeks",
      level: "Intermediate",
      rating: 4.8,
      students: "1,100",
      features: ["API Integration", "OpenAI & HuggingFace", "Vector Databases", "Production Deployment"],
      gradient: "linear-gradient(135deg, #312e81 0%, #6366f1 100%)",
      iconColor: "#a5b4fc",
    },
  ];

  const whyChoose = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Robot-Assisted Learning",
      desc: "Practice with AI tutors and coding assistants that provide real-time feedback.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Project-Based Curriculum",
      desc: "Build 12+ real-world projects including chatbots, recommendation engines, and computer vision apps.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1-on-1 Mentorship",
      desc: "Weekly sessions with industry veterans from Google, Microsoft, and top AI startups.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Globally Recognized Certificate",
      desc: "Earn credentials that are recognized by Fortune 500 companies and startups alike.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote & Flexible",
      desc: "Learn at your own pace with live sessions, recorded content, and 24/7 lab access.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Support",
      desc: "Resume reviews, mock interviews, and direct referrals to our hiring partner network.",
    },
  ];

  const curriculumSteps = [
    {
      week: "Week 1-2",
      title: "Foundations & Setup",
      topics: ["Python for AI", "Data Structures", "Development Environment", "AI Ethics"],
    },
    {
      week: "Week 3-5",
      title: "Core Algorithms",
      topics: ["Linear Regression", "Decision Trees", "Neural Networks", "Backpropagation"],
    },
    {
      week: "Week 6-8",
      title: "Deep Learning",
      topics: ["CNNs", "RNNs", "Transfer Learning", "Model Optimization"],
    },
    {
      week: "Week 9-10",
      title: "Applied AI",
      topics: ["NLP Pipelines", "Computer Vision", "AI Agents", "API Integration"],
    },
    {
      week: "Week 11-12",
      title: "Capstone Project",
      topics: ["End-to-End Build", "Deployment", "Portfolio", "Demo Day"],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)]">
      <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[92vh] pt-32 flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-section-alt)" }} />
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 150 + Math.random() * 200,
                height: 150 + Math.random() * 200,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(50px)",
                opacity: 0.4,
                animationDelay: `${i * 2}s`,
                animationDuration: `${18 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <Reveal>
              <div className="max-w-xl">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6"
                  style={{
                    backgroundColor: "var(--color-badge-bg)",
                    borderColor: "var(--color-badge-border)",
                    color: "var(--color-badge-text)",
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Training Programs
                </div>

                <h1
                  className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Master Artificial Intelligence with
                  <span className="gradient-text"> Industry Experts</span>
                </h1>

                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  From zero to AI hero. Comprehensive, hands-on training programs designed by professionals who built AI systems at top tech companies.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
                    Inquire Now
                  </button>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all text-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.7)",
                      color: "var(--color-text-secondary)",
                      borderColor: "var(--color-border)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch Demo
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
                    Live Classes
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
                    Certificate
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
                    Job Support
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right: Robot Visual */}
            <Reveal delay={200}>
              <div className="flex justify-center lg:justify-end">
                <RobotVisual size="large" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section
        className="py-12 lg:py-16 border-y"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          COURSES GRID
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Training Programs
              </span>
              <h2
                className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Choose Your AI Learning Path
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Six comprehensive programs designed to take you from fundamentals to advanced AI engineering.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <CourseCard {...course} />
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
            {/* Left: Robot + Visual */}
            <Reveal>
              <div className="relative flex justify-center">
                <div
                  className="absolute -inset-8 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: "var(--color-glow)" }}
                />
                <div className="relative">
                  <RobotVisual size="small" />
                  {/* Floating cards around robot */}
                  <div className="absolute -top-4 -left-8 animate-float-slow">
                    <div
                      className="p-3 rounded-xl border flex items-center gap-2"
                      style={{
                        backgroundColor: "var(--color-card-bg)",
                        borderColor: "var(--color-border-light)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <BookOpen className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                      <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>Live Labs</span>
                    </div>
                  </div>
                  <div className="absolute top-8 -right-10 animate-float">
                    <div
                      className="p-3 rounded-xl border flex items-center gap-2"
                      style={{
                        backgroundColor: "var(--color-card-bg)",
                        borderColor: "var(--color-border-light)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <Award className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
                      <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>Certified</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-0 animate-float-slower">
                    <div
                      className="p-3 rounded-xl border flex items-center gap-2"
                      style={{
                        backgroundColor: "var(--color-card-bg)",
                        borderColor: "var(--color-border-light)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <Users className="w-4 h-4" style={{ color: "var(--color-purple)" }} />
                      <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>Mentorship</span>
                    </div>
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
                  Why CreatiKai Training
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Not Just Courses — A Complete Career Launchpad
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  We go beyond traditional online learning. Our programs combine rigorous technical training with career coaching, portfolio building, and direct industry connections.
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
          CURRICULUM TIMELINE
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Learning Path
              </span>
              <h2
                className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Your 12-Week Journey to AI Mastery
              </h2>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            {curriculumSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`relative flex items-start gap-6 lg:gap-12 mb-10 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 flex items-center justify-center z-10"
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: "var(--color-primary)",
                      top: 0,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-primary)" }} />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${idx % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide mb-2"
                      style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                    >
                      {step.week}
                    </span>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                      {step.title}
                    </h3>
                    <ul className="space-y-1">
                      {step.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="text-sm flex items-center gap-2 lg:justify-end"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          {idx % 2 !== 0 && <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />}
                          {topic}
                          {idx % 2 === 0 && <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-primary)" }} />}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INQUIRY CTA SECTION — Content Left, Form Right
          ============================================ */}
      <section
        className="py-[var(--section-py)] relative overflow-hidden"
        style={{ backgroundColor: "var(--color-section-alt)" }}
      >
        {/* Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 200 + i * 30,
                height: 200 + i * 30,
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(60px)",
                opacity: 0.35,
                animationDelay: `${i * 3}s`,
                animationDuration: `${20 + i * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <Reveal>
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
                >
                  Get Started
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Ready to Start Your AI Journey?
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Whether you&apos;re a beginner curious about AI or a professional looking to upskill, we have the perfect program for you. Our admissions team will help you choose the right path.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Free career counseling session",
                    "Flexible batch timings (Weekday/Weekend)",
                    "Corporate training available for teams",
                    "Scholarship opportunities for top performers",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--color-icon-bg-4)" }}
                      >
                        <CheckCircle className="w-4 h-4" style={{ color: "var(--color-emerald)" }} />
                      </div>
                      <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border-light)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Call us directly</p>
                    <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Inline Form */}
            <Reveal delay={200}>
              <div
                className="p-6 lg:p-8 rounded-2xl border shadow-xl"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  borderColor: "var(--color-border-light)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                  >
                    <Bot className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                      Quick Inquiry
                    </h3>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      We&apos;ll get back within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setFormOpen(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2"
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
                        type="email"
                        required
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2"
                        style={{
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="+91 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                        Preferred Course *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 appearance-none"
                        style={{
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        <option value="">Select course</option>
                        <option>AI Fundamentals</option>
                        <option>Machine Learning</option>
                        <option>Deep Learning</option>
                        <option>NLP</option>
                        <option>AI Agents</option>
                        <option>Corporate Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                      Message
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 resize-none"
                      style={{
                        borderColor: "var(--color-border)",
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Tell us your goals..."
                    />
                  </div>

                  <button
                    type="submit"
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
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>

                  <p className="text-[10px] text-center" style={{ color: "var(--color-text-faint)" }}>
                    By submitting, you agree to our privacy policy and terms.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          CERTIFICATE SHOWCASE
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Certificate */}
            <Reveal>
              <div className="relative flex justify-center lg:justify-start">
                <div
                  className="relative w-full max-w-sm rounded-xl border p-6 lg:p-8 overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-card-bg)",
                    borderColor: "var(--color-border)",
                    boxShadow: "var(--shadow-xl)",
                  }}
                >
                  <div
                    className="absolute inset-3 border-2 rounded-lg pointer-events-none"
                    style={{ borderColor: "var(--color-border-light)" }}
                  />
                  <div className="relative text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      >
                        <span className="text-white font-bold text-xs">C</span>
                      </div>
                      <span className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>CreatiKai AI Training</span>
                    </div>
                    <p
                      className="text-[10px] font-bold tracking-widest uppercase mb-2"
                      style={{ color: "var(--color-text-faint)" }}
                    >
                      Certificate of Completion
                    </p>
                    <div className="my-4">
                      <p className="text-[10px] mb-1" style={{ color: "var(--color-text-faint)" }}>This certifies that</p>
                      <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>Your Name</p>
                      <p className="text-[10px] mt-1" style={{ color: "var(--color-text-faint)" }}>has successfully completed</p>
                    </div>
                    <p className="text-base font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                      AI & Machine Learning Bootcamp
                    </p>
                    <div className="flex items-center justify-between px-6">
                      <div className="text-center">
                        <Award className="w-10 h-10 mx-auto" style={{ color: "var(--color-primary)" }} />
                        <p className="text-[8px] mt-1" style={{ color: "var(--color-text-faint)" }}>Director</p>
                      </div>
                      <div
                        className="w-14 h-14 rounded-full border-2 flex items-center justify-center"
                        style={{
                          backgroundColor: "var(--color-gold-bg)",
                          borderColor: "var(--color-gold-border)",
                        }}
                      >
                        <Star className="w-7 h-7" style={{ fill: "var(--color-gold)", color: "var(--color-gold)" }} />
                      </div>
                    </div>
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
                  Certification
                </span>
                <h2
                  className="text-[var(--section-title-size)] font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Earn an Industry-Recognized AI Certificate
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Upon completion, receive a verified digital certificate that showcases your AI proficiency to employers. Our credentials are recognized by leading tech companies and startups.
                
                  </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Blockchain-verified digital certificate",
                    "LinkedIn-ready badge integration",
                    "Lifetime access to course materials",
                    "Alumni network and ongoing support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all text-sm"
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
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-primary)" }} />
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 300 + i * 50,
                height: 300 + i * 50,
                left: `${i * 25}%`,
                top: `${(i % 2) * 40}%`,
                backgroundColor: "#ffffff",
                filter: "blur(80px)",
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
          <Reveal>
            <Bot className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              The Future is AI. <br className="hidden sm:block" />
              Your Future Starts Here.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Join 5,000+ professionals who transformed their careers with CreatiKai AI Training.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all text-sm hover:bg-blue-50 hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Get Free Consultation
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all text-sm hover:bg-white/10"
              >
                <Calendar className="w-4 h-4" />
                View Schedule
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}