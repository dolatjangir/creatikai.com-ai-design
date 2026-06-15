"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import {
  Layers,
  Code2,
  Database,
  Globe,
  Server,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Terminal,
  GitBranch,
  Cpu,
  Monitor,
  Smartphone,
  Lock,
  Rocket,
  Send,
  X,
  Loader2,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Target,
  TrendingUp,
  FileCheck,
  MessageSquare,
  Phone,
  Mail,
  User,
  Calendar,
  Briefcase,
  Lightbulb,
  Workflow,
  Container,
  Flame,
  Gem,
} from "lucide-react";
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
   CODE RAIN BACKGROUND (Matrix-style subtle)
   ============================================ */
const CodeRainBg = () => {
  const chars = "01<>{}[];/=+-*";
  const drops = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 10,
    char: chars[Math.floor(Math.random() * chars.length)],
    opacity: 0.03 + Math.random() * 0.05,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-sm font-mono animate-code-fall"
          style={{
            left: `${drop.left}%`,
            top: "-20px",
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity,
            color: "var(--color-primary)",
          }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i}>{drop.char}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

/* ============================================
   STACK ICON COMPONENT
   ============================================ */
const StackIcon = ({
  icon,
  name,
  category,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  category: string;
  color: string;
}) => (
  <div
    className="group flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    style={{
      backgroundColor: "var(--color-card-bg)",
      borderColor: "var(--color-border-light)",
      boxShadow: "var(--shadow-sm)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.boxShadow = `0 10px 25px -5px ${color}20`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "var(--color-border-light)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${color}15`, color: color }}
    >
      {icon}
    </div>
    <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>
      {name}
    </span>
    <span className="text-[10px]" style={{ color: "var(--color-text-faint)" }}>
      {category}
    </span>
  </div>
);

/* ============================================
   INQUIRY MODAL
   ============================================ */
const InquiryModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    goal: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setDone(true);
    setTimeout(() => {
      onClose();
      setDone(false);
      setData({ name: "", email: "", phone: "", experience: "", goal: "", message: "" });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{ backgroundColor: "rgba(15,23,42,0.5)" }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-xl rounded-2xl border p-6 lg:p-8 shadow-2xl"
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
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: "var(--color-icon-bg-1)" }}
          >
            <Layers className="w-7 h-7" style={{ color: "var(--color-primary)" }} />
          </div>
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {done ? "Application Received!" : "Full Stack Bootcamp Inquiry"}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
            {done
              ? "Our team will contact you within 24 hours."
              : "Fill your details and secure your spot."}
          </p>
        </div>

        {!done ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    required
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
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
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="john@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                    required
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="+91 9649902000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Experience *
                </label>
                <select
                  required
                  value={data.experience}
                  onChange={(e) => setData({ ...data, experience: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 appearance-none"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  <option value="">Select level</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="some-coding">Some Coding Experience</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                Career Goal *
              </label>
              <select
                required
                value={data.goal}
                onChange={(e) => setData({ ...data, goal: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 appearance-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text-primary)",
                }}
              >
                <option value="">Select goal</option>
                <option value="job">Land First Tech Job</option>
                <option value="switch">Switch to Full Stack</option>
                <option value="startup">Build My Own Product</option>
                <option value="freelance">Freelance Developer</option>
                <option value="upskill">Upskill Current Role</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                Message (Optional)
              </label>
              <textarea
                rows={3}
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 resize-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text-primary)",
                }}
                placeholder="Any specific questions..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              style={{
                backgroundColor: "var(--color-primary)",
                boxShadow: "var(--shadow-btn-primary)",
              }}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit Application
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce"
              style={{ backgroundColor: "var(--color-icon-bg-4)" }}
            >
              <CheckCircle className="w-10 h-10" style={{ color: "var(--color-emerald)" }} />
            </div>
            <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
              Thank You!
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
              Redirecting you back...
            </p>
          </div>
        )}
      </div>
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
      style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
    >
      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {answer}
      </p>
    </div>
  </div>
);

/* ============================================
   MAIN FULL STACK PAGE
   ============================================ */
export default function FullStackTrainingPage(): JSX.Element {
 const [formOpen, setFormOpen] = useState(false);  
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { value: 3200, suffix: "+", label: "Developers Trained", icon: <Users className="w-5 h-5" /> },
    { value: 4.8, suffix: "/5", label: "Course Rating", icon: <Star className="w-5 h-5" /> },
    { value: 16, suffix: "", label: "Weeks Intensive", icon: <Clock className="w-5 h-5" /> },
    { value: 25, suffix: "+", label: "Real Projects", icon: <Code2 className="w-5 h-5" /> },
  ];

  const techStack = [
    { icon: <Code2 className="w-6 h-6" />, name: "React", category: "Frontend", color: "#61DAFB" },
    { icon: <Layers className="w-6 h-6" />, name: "Next.js", category: "Framework", color: "#000000" },
    { icon: <Zap className="w-6 h-6" />, name: "TypeScript", category: "Language", color: "#3178C6" },
    { icon: <Flame className="w-6 h-6" />, name: "Node.js", category: "Backend", color: "#339933" },
    { icon: <Database className="w-6 h-6" />, name: "PostgreSQL", category: "Database", color: "#336791" },
    { icon: <Cloud className="w-6 h-6" />, name: "AWS", category: "Cloud", color: "#FF9900" },
    { icon: <Container className="w-6 h-6" />, name: "Docker", category: "DevOps", color: "#2496ED" },
    { icon: <GitBranch className="w-6 h-6" />, name: "Git", category: "Version Control", color: "#F05032" },
    { icon: <Shield className="w-6 h-6" />, name: "JWT Auth", category: "Security", color: "#000000" },
    { icon: <Workflow className="w-6 h-6" />, name: "CI/CD", category: "Pipeline", color: "#2088FF" },
    { icon: <Smartphone className="w-6 h-6" />, name: "React Native", category: "Mobile", color: "#61DAFB" },
    { icon: <Gem className="w-6 h-6" />, name: "GraphQL", category: "API", color: "#E10098" },
  ];

  const phases = [
    {
      phase: "Phase 1",
      weeks: "Week 1-4",
      title: "Frontend Mastery",
      desc: "Build modern, responsive UIs with React, Next.js, TypeScript, and Tailwind CSS. Master component architecture and state management.",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["React Hooks & Context", "Next.js App Router", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      color: "var(--color-primary)",
      bgColor: "var(--color-icon-bg-1)",
    },
    {
      phase: "Phase 2",
      weeks: "Week 5-8",
      title: "Backend Engineering",
      desc: "Create robust APIs with Node.js, Express, and PostgreSQL. Implement authentication, authorization, and secure data handling.",
      icon: <Server className="w-6 h-6" />,
      skills: ["RESTful APIs", "Node.js & Express", "PostgreSQL & Prisma", "JWT Authentication", "WebSockets"],
      color: "var(--color-purple)",
      bgColor: "var(--color-icon-bg-2)",
    },
    {
      phase: "Phase 3",
      weeks: "Week 9-12",
      title: "DevOps & Cloud",
      desc: "Deploy applications to AWS, containerize with Docker, set up CI/CD pipelines, and monitor production systems.",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS EC2 & S3", "Docker & Kubernetes", "GitHub Actions", "Nginx & SSL", "Monitoring"],
      color: "var(--color-cyan)",
      bgColor: "var(--color-icon-bg-3)",
    },
    {
      phase: "Phase 4",
      weeks: "Week 13-16",
      title: "Capstone & Career",
      desc: "Build a complete SaaS product from scratch. Portfolio optimization, interview prep, and direct job referrals.",
      icon: <Rocket className="w-6 h-6" />,
      skills: ["Full SaaS Build", "Payment Integration", "Real-time Features", "System Design", "Interview Prep"],
      color: "var(--color-emerald)",
      bgColor: "var(--color-icon-bg-4)",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-featured online store with cart, payments (Stripe), admin dashboard, and inventory management.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      icon: <Globe className="w-6 h-6" />,
      color: "var(--color-primary)",
    },
    {
      title: "Real-Time Chat App",
      desc: "WhatsApp-like messaging with WebSockets, file sharing, end-to-end encryption, and group channels.",
      stack: ["React", "Socket.io", "Redis", "AWS"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "var(--color-purple)",
    },
    {
      title: "Task Management SaaS",
      desc: "Trello-style Kanban board with drag-drop, team collaboration, notifications, and subscription billing.",
      stack: ["Next.js", "Prisma", "Stripe", "Docker"],
      icon: <Target className="w-6 h-6" />,
      color: "var(--color-cyan)",
    },
    {
      title: "Social Media Dashboard",
      desc: "Analytics dashboard pulling data from multiple APIs with charts, reports, and automated scheduling.",
      stack: ["React", "GraphQL", "PostgreSQL", "Chart.js"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "var(--color-emerald)",
    },
    {
      title: "Video Streaming Service",
      desc: "YouTube-like platform with video upload, transcoding, adaptive streaming, and recommendation engine.",
      stack: ["Next.js", "FFmpeg", "AWS S3", "ML"],
      icon: <PlayCircle className="w-6 h-6" />,
      color: "var(--color-amber)",
    },
    {
      title: "AI-Powered Blog Platform",
      desc: "Medium clone with AI content generation, SEO optimization, analytics, and newsletter automation.",
      stack: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      icon: <Lightbulb className="w-6 h-6" />,
      color: "var(--color-primary)",
    },
  ];

  const outcomes = [
    { icon: <Briefcase className="w-5 h-5" />, title: "Job Ready", desc: "Portfolio of 25+ projects" },
    { icon: <Code2 className="w-5 h-5" />, title: "Full Stack", desc: "Frontend to DevOps" },
    { icon: <Award className="w-5 h-5" />, title: "Certified", desc: "Industry credential" },
    { icon: <Users className="w-5 h-5" />, title: "Mentored", desc: "1-on-1 guidance" },
    { icon: <Globe className="w-5 h-5" />, title: "Remote", desc: "Learn from anywhere" },
    { icon: <TrendingUp className="w-5 h-5" />, title: "High Salary", desc: "Avg. 12 LPA package" },
  ];

  const faqs = [
    {
      q: "Do I need prior coding experience?",
      a: "No prior experience required. We start from absolute basics and gradually build up to advanced concepts. Our pre-bootcamp prep course gets you ready in 2 weeks.",
    },
    {
      q: "What is the daily time commitment?",
      a: "Live classes run 3 hours daily (Mon-Fri 7-10 PM IST). Expect 2-3 hours of self-study and project work. Weekend batches available for working professionals.",
    },
    {
      q: "Will I get a job after completion?",
      a: "We have 200+ hiring partners. 92% of our graduates land jobs within 3 months. We provide resume reviews, mock interviews, and direct referrals.",
    },
    {
      q: "Is the certificate recognized?",
      a: "Yes, our certificate is recognized by top tech companies and startups. It's blockchain-verified and can be shared directly on LinkedIn.",
    },
    {
      q: "What if I miss a live class?",
      a: "All sessions are recorded and available within 4 hours. You get lifetime access to recordings, labs, and our alumni community.",
    },
    {
      q: "Can I pay in installments?",
      a: "Absolutely. We offer 0% EMI for 3, 6, and 12 months. We also have income-share agreements where you pay after getting a job.",
    },
  ];

  const testimonials = [
    {
      name: "Vikram Rao",
      role: "Full Stack Developer",
      company: "Amazon",
      text: "Went from zero coding to Amazon in 6 months. The project-based approach and mentorship were game-changers. Best investment of my life.",
      avatar: "V",
    },
    {
      name: "Ananya Gupta",
      role: "Software Engineer",
      company: "Swiggy",
      text: "The curriculum is incredibly relevant. I built a real-time food delivery tracker as my capstone — Swiggy hired me after seeing it.",
      avatar: "A",
    },
    {
      name: "Karan Malhotra",
      role: "Tech Lead",
      company: "Razorpay",
      text: "Switched from mechanical engineering to tech. The structured approach and career support made the transition seamless.",
      avatar: "K",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)]">
    <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} courseName="Full Stack Development" />

      {/* ============================================
          HERO SECTION — Code Rain + Bubbles
          ============================================ */}
      <section className="relative min-h-[95vh] flex pt-4 items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-section-alt)" }} />
        <CodeRainBg />
        
        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 180 + i * 30,
                height: 180 + i * 30,
                left: `${5 + i * 18}%`,
                top: `${10 + (i % 3) * 25}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(50px)",
                opacity: 0.35,
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
                    <Sparkles className="w-3 h-3" />
                    Career Transformation
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: "var(--color-tag-bestseller)" }}
                  >
                    <Flame className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>

                <h1
                  className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Become a
                  <span className="gradient-text"> Full Stack Developer</span>
                  <br />
                  in 16 Weeks
                </h1>

                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Master React, Node.js, PostgreSQL, AWS, and DevOps. Build 25+ real projects, get 1-on-1 mentorship, and land your dream tech job with our hiring partner network.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-10">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: "16 Weeks" },
                    { icon: <BookOpen className="w-4 h-4" />, text: "200+ Hours" },
                    { icon: <Users className="w-4 h-4" />, text: "Live Mentorship" },
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
                    Start Application — ₹17,999
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
                    <PlayCircle className="w-4 h-4" />
                    Watch Free Preview
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                  <div className="flex -space-x-2">
                    {["V", "A", "K", "S"].map((letter, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          borderColor: "var(--color-bg)",
                          backgroundColor: i === 0 ? "var(--color-primary)" : i === 1 ? "var(--color-purple)" : i === 2 ? "var(--color-emerald)" : "var(--color-cyan)",
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
                      <span className="text-sm font-bold ml-1" style={{ color: "var(--color-text-primary)" }}>4.8</span>
                    </div>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Rated by 3,200+ developers
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Visual Card */}
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
                      background: "var(--gradient-course-1)",
                      borderColor: "var(--color-border-light)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                      >
                        <Layers className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Full Stack Bootcamp</h3>
                        <p className="text-white/60 text-xs">Zero to Hero</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 16 Weeks</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Live Online</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Next Batch</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>July 1, 2026</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Seats Left</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-amber)" }}>8 seats remaining</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>Early Bird Price</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold" style={{ color: "var(--color-text-primary)" }}>₹16,999</span>
                          <span className="text-sm line-through" style={{ color: "var(--color-text-faint)" }}>₹19,999</span>
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white"
                        style={{ backgroundColor: "var(--color-emerald)" }}
                      >
                        35% OFF
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
                      <Send className="w-4 h-4" /> Secure Your Seat
                    </button>
                    <p className="text-[10px] text-center" style={{ color: "var(--color-text-faint)" }}>
                      14-day money-back guarantee • Job guarantee program
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section
        className="py-10 border-y"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
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
          TECH STACK GRID
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Complete Tech Stack
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Everything You Need to Build Production Apps
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Master the modern development stack used by top tech companies worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {techStack.map((tech, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <StackIcon {...tech} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LEARNING PHASES — Sticky Timeline
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
                Curriculum
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                4-Phase Learning Journey
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Structured progression from frontend basics to deploying production SaaS applications.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 lg:-translate-x-px"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            {phases.map((phase, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`relative flex items-start gap-6 lg:gap-12 mb-12 last:mb-0 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  <div
                    className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10 shadow-md"
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: phase.color,
                      top: 0,
                    }}
                  >
                    <span style={{ color: phase.color }}>{phase.icon}</span>
                  </div>

                  <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "lg:pr-0 lg:text-right" : "lg:pl-0"}`}>
                    <div
                      className="p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        backgroundColor: "var(--color-card-bg)",
                        borderColor: "var(--color-border-light)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = phase.color + "40";
                        e.currentTarget.style.boxShadow = `var(--shadow-lg)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-light)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <span
                          className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase"
                          style={{ backgroundColor: phase.bgColor, color: phase.color }}
                        >
                          {phase.phase}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "var(--color-text-faint)" }}>
                          {phase.weeks}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                        {phase.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                        {phase.desc}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                        {phase.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[10px] font-semibold"
                            style={{
                              backgroundColor: phase.bgColor,
                              color: phase.color,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS SHOWCASE
          ============================================ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <div className="text-center mb-14">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                style={{ backgroundColor: "var(--color-badge-bg)", color: "var(--color-badge-text)" }}
              >
                Portfolio Projects
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Build 25+ Production-Ready Projects
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Every project is designed to impress recruiters and demonstrate real-world skills.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div
                  className="group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2"
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${proj.color}15` }}
                  >
                    <span style={{ color: proj.color }}>{proj.icon}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                    {proj.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.stack.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold border"
                        style={{
                          borderColor: "var(--color-border-light)",
                          color: "var(--color-text-secondary)",
                          backgroundColor: "var(--color-bg-hover)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          OUTCOMES GRID
          ============================================ */}
      <section
        className="py-12 lg:py-16 border-y"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: "var(--color-text-faint)" }}
            >
              What You Will Achieve
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-card-bg)",
                    boxShadow: "var(--shadow-sm)",
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INQUIRY SECTION — Content Left, Sticky Form Right
          ============================================ */}
      <section className="py-[var(--section-py)] relative overflow-hidden">
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
                  Enroll Now
                </span>
                <h2
                  className="text-2xl font-extrabold tracking-tight mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Your Tech Career Starts Here
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Join 3,200+ developers who transformed their careers. Our next batch starts July 1 — only 8 seats remaining for personalized mentorship.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <Shield className="w-5 h-5" />, title: "Job Guarantee Program", desc: "Money back if you don't land a job in 6 months" },
                    { icon: <Users className="w-5 h-5" />, title: "1-on-1 Career Coaching", desc: "Weekly sessions with senior engineers" },
                    { icon: <FileCheck className="w-5 h-5" />, title: "Verified Certificate", desc: "Blockchain-backed, LinkedIn-integrated" },
                    { icon: <Briefcase className="w-5 h-5" />, title: "200+ Hiring Partners", desc: "Direct referrals to top companies" },
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

                <div className="flex items-center gap-4 p-5 rounded-xl border"
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
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Questions? Talk to us</p>
                    <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>+91 9649902000</p>
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
                    <Layers className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                      Quick Application
                    </h3>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      We'll call you within 2 hours
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
                      placeholder="John Doe"
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
                      placeholder="john@email.com"
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
                      Current Status *
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
                      <option value="">Select status</option>
                      <option>Student</option>
                      <option>Working Professional</option>
                      <option>Self-Employed</option>
                      <option>Unemployed</option>
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
                      placeholder="Your goals or questions..."
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
                    Apply Now — ₹17,999
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-2">
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: "var(--color-text-faint)" }}>
                      <Shield className="w-3 h-3" /> Secure Payment
                    </span>
                    <span className="flex items-center gap-1 text-[10px]" style={{ color: "var(--color-text-faint)" }}>
                      <Clock className="w-3 h-3" /> Instant Access
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
                Success Stories
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Where Our Alumni Work
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
                Common Questions
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
            <Layers className="w-16 h-16 mx-auto mb-6 text-white/70" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Build the Future. <br className="hidden sm:block" />
              Start Your Full Stack Journey.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Join 3,200+ developers who transformed their careers. Next batch starts July 1 — only 8 seats left.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all text-sm hover:bg-blue-50 hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Enroll Now — ₹17,999
              </button>
              <button
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl transition-all text-sm hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                Talk to Advisor
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}