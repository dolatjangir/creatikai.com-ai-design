"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import {
  Brain,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Code2,
  Database,
  GitBranch,
  Terminal,
  Monitor,
  ChevronDown,
  ChevronUp,
  Send,
  X,
  Loader2,
  PlayCircle,
  FileCheck,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  Bot,
  Sparkles,
  BarChart3,
  Network,
  Fingerprint,
  Eye,
  Gauge,
  Rocket,
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

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ============================================
   REVEAL ANIMATION
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
   NEURAL NETWORK VISUAL (Hero Background)
   ============================================ */
const NeuralNetworkBg = () => {
  const nodes = [
    { x: 15, y: 20 }, { x: 35, y: 15 }, { x: 55, y: 25 }, { x: 75, y: 18 }, { x: 90, y: 30 },
    { x: 20, y: 50 }, { x: 40, y: 45 }, { x: 60, y: 55 }, { x: 80, y: 48 }, { x: 95, y: 60 },
    { x: 10, y: 75 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 72 }, { x: 85, y: 85 },
    { x: 25, y: 90 }, { x: 45, y: 95 }, { x: 65, y: 88 }, { x: 88, y: 92 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-[0.08]" style={{ color: "var(--color-primary)" }}>
        {nodes.map((node, i) =>
          nodes.map((target, j) => {
            if (i >= j) return null;
            const dist = Math.hypot(node.x - target.x, node.y - target.y);
            if (dist > 40) return null;
            return (
              <line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="currentColor"
                strokeWidth="0.5"
                className="animate-pulse"
                style={{ animationDelay: `${(i + j) * 0.2}s` }}
              />
            );
          })
        )}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};


/* ============================================
   ACCORDION ITEM
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
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 text-left"
    >
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
      style={{
        maxHeight: isOpen ? "200px" : "0px",
        opacity: isOpen ? 1 : 0,
      }}
    >
      <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {answer}
      </p>
    </div>
  </div>
);

/* ============================================
   MAIN PAGE
   ============================================ */
export default function AIMachineLearningPage(): JSX.Element {
   const [formOpen, setFormOpen] = useState(false); 
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { value: 1240, suffix: "+", label: "Students Enrolled", icon: <Users className="w-5 h-5" /> },
    { value: 4.9, suffix: "/5", label: "Course Rating", icon: <Star className="w-5 h-5" /> },
    { value: 12, suffix: "", label: "Weeks Duration", icon: <Clock className="w-5 h-5" /> },
    { value: 15, suffix: "+", label: "Real Projects", icon: <Code2 className="w-5 h-5" /> },
  ];

  const modules = [
    {
      week: "Week 1-2",
      title: "Python & Data Foundations",
      desc: "Master Python for data science, NumPy, Pandas, and data visualization with Matplotlib & Seaborn.",
      icon: <Terminal className="w-5 h-5" />,
      topics: ["Python Basics to Advanced", "NumPy & Vectorization", "Pandas DataFrames", "Data Visualization"],
    },
    {
      week: "Week 3-4",
      title: "Statistics & Probability for ML",
      desc: "Build mathematical intuition for ML algorithms. Hypothesis testing, distributions, and Bayesian thinking.",
      icon: <BarChart3 className="w-5 h-5" />,
      topics: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "Bayesian Inference"],
    },
    {
      week: "Week 5-6",
      title: "Supervised Learning Algorithms",
      desc: "Implement regression, classification, SVM, and ensemble methods from scratch and with scikit-learn.",
      icon: <GitBranch className="w-5 h-5" />,
      topics: ["Linear & Logistic Regression", "Decision Trees & Random Forest", "SVM & Kernel Methods", "Model Evaluation"],
    },
    {
      week: "Week 7-8",
      title: "Unsupervised Learning & NLP",
      desc: "Clustering, dimensionality reduction, and natural language processing fundamentals.",
      icon: <Fingerprint className="w-5 h-5" />,
      topics: ["K-Means & Hierarchical Clustering", "PCA & t-SNE", "Text Preprocessing", "TF-IDF & Word Embeddings"],
    },
    {
      week: "Week 9-10",
      title: "Deep Learning with TensorFlow",
      desc: "Build neural networks with TensorFlow & Keras. CNNs for computer vision and RNNs for sequences.",
      icon: <Brain className="w-5 h-5" />,
      topics: ["Neural Network Architecture", "CNNs for Image Recognition", "RNNs & LSTMs", "Transfer Learning"],
    },
    {
      week: "Week 11-12",
      title: "MLOps & Capstone Project",
      desc: "Deploy models to production, build pipelines, and present your end-to-end AI solution.",
      icon: <Rocket className="w-5 h-5" />,
      topics: ["Model Deployment (Docker/Cloud)", "CI/CD for ML", "Monitoring & Drift", "Capstone Demo Day"],
    },
  ];

  const projects = [
    {
      title: "House Price Predictor",
      desc: "End-to-end regression pipeline predicting real estate prices with 94% accuracy using ensemble methods.",
      tech: ["Python", "Scikit-learn", "XGBoost"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Customer Churn AI",
      desc: "Classification model identifying at-risk customers with 89% precision, saving $2M annually for a telecom client.",
      tech: ["Pandas", "Random Forest", "SMOTE"],
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Medical Image Diagnosis",
      desc: "CNN-based system detecting pneumonia from X-rays with 96% accuracy, deployed to hospital cloud.",
      tech: ["TensorFlow", "CNN", "AWS"],
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Sentiment Analysis Engine",
      desc: "NLP pipeline processing 10K+ reviews daily for brand monitoring with real-time dashboard.",
      tech: ["BERT", "NLTK", "FastAPI"],
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Stock Price Forecaster",
      desc: "LSTM network predicting market trends with technical indicators, integrated with trading API.",
      tech: ["LSTM", "Keras", "Pandas"],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Autonomous Agent Bot",
      desc: "AI agent using reinforcement learning to optimize supply chain decisions autonomously.",
      tech: ["PyTorch", "RL", "LangChain"],
      icon: <Bot className="w-6 h-6" />,
    },
  ];

  const tools = [
    { name: "Python", icon: <Code2 className="w-5 h-5" /> },
    { name: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
    { name: "PyTorch", icon: <Zap className="w-5 h-5" /> },
    { name: "Scikit-learn", icon: <Gauge className="w-5 h-5" /> },
    { name: "Pandas", icon: <Database className="w-5 h-5" /> },
    { name: "Jupyter", icon: <Monitor className="w-5 h-5" /> },
    { name: "AWS SageMaker", icon: <Cloud className="w-5 h-5" /> },
    { name: "Docker", icon: <Layers className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      q: "Do I need prior programming experience?",
      a: "Basic familiarity with any programming language helps, but we start from Python fundamentals. Our pre-course prep module gets absolute beginners up to speed in 2 weeks.",
    },
    {
      q: "What is the class schedule?",
      a: "We offer weekday batches (Mon-Fri, 2 hours evening) and weekend batches (Sat-Sun, 4 hours). All sessions are live with recordings available for 1 year.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, upon completing all modules and the capstone project, you receive a blockchain-verified certificate recognized by our hiring partners.",
    },
    {
      q: "Is there job placement support?",
      a: "Absolutely. We provide resume reviews, mock interviews, portfolio optimization, and direct referrals to 50+ hiring partners including Fortune 500 companies.",
    },
    {
      q: "Can I pay in installments?",
      a: "Yes, we offer 0% EMI options for 3, 6, and 12 months through our banking partners. Scholarships are also available for top performers.",
    },
    {
      q: "What if I miss a live session?",
      a: "All sessions are recorded and uploaded within 4 hours. You also get lifetime access to course materials, labs, and our community forum.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "ML Engineer",
      company: "Google",
      text: "This bootcamp changed my career trajectory completely. The hands-on projects and mentorship helped me crack Google interviews on my first attempt.",
      avatar: "R",
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      company: "Flipkart",
      text: "The curriculum is incredibly practical. I built a recommendation engine during the course that I now use as my portfolio centerpiece.",
      avatar: "P",
    },
    {
      name: "Alex Chen",
      role: "AI Researcher",
      company: "Microsoft",
      text: "Best investment I've made in my career. The MLOps module alone saved me months of self-learning. Highly recommended for serious professionals.",
      avatar: "A",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-[var(--font-family)]">
 <InquiryForm isOpen={formOpen} onClose={() => setFormOpen(false)} courseName="AI Machine Learning" />
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[95vh] pt-12 flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "var(--color-section-alt)" }} />
        <NeuralNetworkBg />
        
        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble-float"
              style={{
                width: 200 + i * 40,
                height: 200 + i * 40,
                left: `${10 + i * 15}%`,
                top: `${5 + (i % 3) * 30}%`,
                backgroundColor: "var(--color-bubble-bg)",
                filter: "blur(60px)",
                opacity: 0.3,
                animationDelay: `${i * 2}s`,
                animationDuration: `${20 + i * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] w-full py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal>
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: "var(--color-badge-bg)",
                      borderColor: "var(--color-badge-border)",
                      color: "var(--color-badge-text)",
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    Flagship Program
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: "var(--color-tag-bestseller)" }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Bestseller
                  </span>
                </div>

                <h1
                  className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  AI & Machine Learning
                  <span className="gradient-text"> Bootcamp</span>
                </h1>

                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Go from Python basics to deploying production ML models. 12 weeks of intensive, hands-on training with industry mentors who built AI at top tech companies.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-10">
                  {[
                    { icon: <Clock className="w-4 h-4" />, text: "12 Weeks" },
                    { icon: <BookOpen className="w-4 h-4" />, text: "120+ Hours" },
                    { icon: <Users className="w-4 h-4" />, text: "Live Mentorship" },
                    { icon: <Award className="w-4 h-4" />, text: "Certificate" },
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
                    Enroll Now — ₹9,999
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
                    Watch Curriculum
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-8 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                  <div className="flex -space-x-2">
                    {["R", "P", "A", "S"].map((letter, i) => (
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
                      <span className="text-sm font-bold ml-1" style={{ color: "var(--color-text-primary)" }}>4.9</span>
                    </div>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      Rated by 1,240+ students
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
                        <Brain className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">AI & ML Bootcamp</h3>
                        <p className="text-white/60 text-xs">Beginner to Advanced</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-white/80 text-xs">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12 Weeks</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> Live Online</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Next Batch</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>June 15, 2026</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: "var(--color-border-light)" }}>
                      <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Seats Left</span>
                      <span className="text-sm font-semibold" style={{ color: "var(--color-amber)" }}>12 seats remaining</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs mb-1" style={{ color: "var(--color-text-muted)" }}>Early Bird Price</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold" style={{ color: "var(--color-text-primary)" }}>₹9,999</span>
                          <span className="text-sm line-through" style={{ color: "var(--color-text-faint)" }}>₹14,999</span>
                        </div>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white"
                        style={{ backgroundColor: "var(--color-emerald)" }}
                      >
                        33% OFF
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
                      14-day money-back guarantee • No questions asked
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
          CURRICULUM — Sticky Timeline
          ============================================ */}
      <section className="py-[var(--section-py)]">
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
                12-Week Learning Roadmap
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                A carefully structured progression from fundamentals to production-ready ML engineering.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 lg:-translate-x-px"
              style={{ backgroundColor: "var(--color-border)" }}
            />

            {modules.map((mod, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className={`relative flex items-start gap-6 lg:gap-12 mb-10 last:mb-0 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 flex items-center justify-center z-10 shadow-md"
                    style={{
                      backgroundColor: "var(--color-card-bg)",
                      borderColor: "var(--color-primary)",
                      top: 0,
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: "var(--color-primary)" }}>{idx + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-14 lg:ml-0 lg:w-[calc(50%-2rem)] ${idx % 2 === 0 ? "lg:pr-0 lg:text-right" : "lg:pl-0"}`}>
                    <div
                      className="p-5 lg:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        backgroundColor: "var(--color-card-bg)",
                        borderColor: "var(--color-border-light)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-hover)";
                        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-light)";
                        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                        >
                          <span style={{ color: "var(--color-primary)" }}>{mod.icon}</span>
                        </div>
                        <div className={idx % 2 === 0 ? "lg:text-right" : ""}>
                          <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--color-primary)" }}>
                            {mod.week}
                          </span>
                          <h3 className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>
                            {mod.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-text-muted)" }}>
                        {mod.desc}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "lg:justify-end" : ""}`}>
                        {mod.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[10px] font-semibold"
                            style={{
                              backgroundColor: "var(--color-badge-bg)",
                              color: "var(--color-badge-text)",
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS GRID
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
                Portfolio Projects
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Build 15+ Real-World Projects
              </h2>
              <p
                className="text-base max-w-2xl mx-auto"
                style={{ color: "var(--color-text-muted)" }}
              >
                Every project is designed to be portfolio-worthy and interview-ready.
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
                    style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                  >
                    <span style={{ color: "var(--color-primary)" }}>{proj.icon}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                    {proj.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold border"
                        style={{
                          borderColor: "var(--color-border-light)",
                          color: "var(--color-text-secondary)",
                          backgroundColor: "var(--color-bg-hover)",
                        }}
                      >
                        {t}
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
          TOOLS & TECH
          ============================================ */}
      <section className="py-12 lg:py-16 border-y" style={{ borderColor: "var(--color-border-light)" }}>
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <Reveal>
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-8"
              style={{ color: "var(--color-text-faint)" }}
            >
              Tools & Technologies You Will Master
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {tools.map((tool, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all hover:-translate-y-1"
                  style={{
                    borderColor: "var(--color-border-light)",
                    backgroundColor: "var(--color-card-bg)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <span style={{ color: "var(--color-primary)" }}>{tool.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                    {tool.name}
                  </span>
                </div>
              </Reveal>
            ))}
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
            <Brain className="w-16 h-16 mx-auto mb-6 text-white/70" />
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Your AI Career Starts with One Click.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Join 1,240+ professionals who transformed their careers. Next batch starts June 15 — only 12 seats left.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl transition-all text-sm hover:bg-blue-50 hover:shadow-xl"
              >
                <Send className="w-4 h-4" />
                Enroll Now — ₹19,999
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

// Missing icon import helper
function Cloud({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a4 4 0 0 1 0-8 2.5 2.5 0 0 1 2.5-2.5 4 4 0 0 1 7.8 1.6 3 3 0 0 1 1.2 5.9" />
      <path d="M17.5 19H9a3 3 0 0 1 0-6h.5" />
    </svg>
  );
}