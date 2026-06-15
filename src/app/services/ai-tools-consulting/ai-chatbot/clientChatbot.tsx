"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform,Variants } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Sparkles,
  Zap,
  Brain,
  Shield,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
  Check,
  Star,
  Play,
  Pause,
  Send,
  Mic,
  Image as ImageIcon,
  Code,
  Globe,
  Lock,
  BarChart3,
  Layers,
  Cpu,
  ChevronRight,
  X,
  Loader2,
  Wand2,
  FileText,
  Headphones,
  Rocket,
  Target,
  Heart,
  ThumbsUp,
  Repeat,
  MessageCircle,
  Settings,
  Palette,
  Workflow,
  Gauge,
  Smartphone,
  Bell,
  Search,
  Database,
  Wifi,
  Command,
  KeyRound,
  Fingerprint,
  Eye,
  Activity,
  PieChart,
  LineChart,
  AreaChart,
  Radar,
  Compass,
  Lightbulb,
  Flame,
  Crown,
  Gem,
  Award,
  Trophy,
  Medal,
} from "lucide-react";

/* ──────────────────────────────────────────
   TYPES
────────────────────────────────────────── */
interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

/* ──────────────────────────────────────────
   DEMO DATA
────────────────────────────────────────── */
const demoMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Hey, can you analyze our Q3 sales data and suggest improvements?",
    timestamp: new Date(),
  },
  {
    id: "2",
    role: "ai",
    content:
      "I've analyzed your Q3 data. Revenue grew 23% but customer acquisition cost increased 15%. I recommend optimizing your top 3 underperforming campaigns and reallocating budget to high-ROI channels.",
    timestamp: new Date(),
  },
  {
    id: "3",
    role: "user",
    content: "Which channels should we focus on?",
    timestamp: new Date(),
  },
  {
    id: "4",
    role: "ai",
    content:
      "Based on your data, prioritize: 1) LinkedIn Sponsored Content (+42% ROI), 2) Google Search retargeting (+38% ROI), 3) Email drip campaigns (+31% ROI). I've drafted a reallocation plan — want me to share it?",
    timestamp: new Date(),
  },
];

const features: Feature[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Contextual Intelligence",
    description:
      "Understands conversation history, user intent, and business context to deliver hyper-personalized responses that feel human.",
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-icon-bg-1)]",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description:
      "Sub-200ms response times powered by optimized inference engines. Your users never wait.",
    color: "text-[var(--color-amber)]",
    bgColor: "bg-[var(--color-gold-bg)]",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multilingual Mastery",
    description:
      "Fluent in 50+ languages with native-level nuance. Expand globally without hiring translators.",
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-icon-bg-3)]",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR, HIPAA compliant. End-to-end encryption with zero data retention options.",
    color: "text-[var(--color-emerald)]",
    bgColor: "bg-[var(--color-icon-bg-4)]",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Omnichannel Presence",
    description:
      "Deploy once, engage everywhere — web, mobile, WhatsApp, Slack, email, SMS, and custom APIs.",
    color: "text-[var(--color-purple)]",
    bgColor: "bg-[var(--color-icon-bg-2)]",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-Time Analytics",
    description:
      "Live dashboards tracking resolution rates, sentiment trends, and ROI metrics. Data-driven optimization.",
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-icon-bg-1)]",
  },
];

const stats: Stat[] = [
  { value: "99.7%", label: "Uptime SLA", icon: <Activity className="w-5 h-5" /> },
  { value: "<200ms", label: "Avg Response", icon: <Zap className="w-5 h-5" /> },
  { value: "50+", label: "Languages", icon: <Globe className="w-5 h-5" /> },
  { value: "10M+", label: "Conversations/Day", icon: <MessageSquare className="w-5 h-5" /> },
];

const capabilities: Capability[] = [
  {
    icon: <Wand2 className="w-5 h-5" />,
    title: "Smart Content Generation",
    description: "Drafts emails, reports, social posts, and code snippets tailored to your brand voice.",
    tags: ["Copywriting", "Code", "Creative"],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Knowledge Base Sync",
    description: "Auto-syncs with your docs, wikis, and databases. Always up-to-date, always accurate.",
    tags: ["RAG", "Vector DB", "Live Sync"],
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Workflow Automation",
    description: "Triggers actions, creates tickets, schedules meetings, and updates CRM records automatically.",
    tags: ["Zapier", "Make", "API"],
  },
  {
    icon: <Gauge className="w-5 h-5" />,
    title: "Performance Monitoring",
    description: "Tracks accuracy, latency, and user satisfaction in real-time with actionable insights.",
    tags: ["Metrics", "Alerts", "Reports"],
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Brand Voice Customization",
    description: "Train the AI on your tone, terminology, and style guidelines for consistent communication.",
    tags: ["Tone", "Style", "Persona"],
  },
  {
    icon: <KeyRound className="w-5 h-5" />,
    title: "Access Control",
    description: "Role-based permissions, audit logs, and compliance controls for enterprise governance.",
    tags: ["RBAC", "Audit", "Compliance"],
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Customer Success",
    company: "TechFlow Inc.",
    content:
      "We reduced support ticket volume by 68% in the first month. The AI understands context better than most human agents. It's like having a senior support rep available 24/7.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    company: "DataScale",
    content:
      "Integration took 2 hours. The API is beautifully designed, and the response quality is consistently excellent. Our developers actually enjoy working with it.",
    avatar: "MJ",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Operations",
    company: "GlobalRetail",
    content:
      "We handle 50,000+ customer interactions daily across 12 languages. The AI maintains brand consistency everywhere while cutting costs by 40%.",
    avatar: "ER",
    rating: 5,
  },
];

const useCases = [
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Customer Support",
    description: "Instantly resolve 80% of inquiries with human-like empathy and precision.",
    metric: "80% deflection",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Sales Enablement",
    description: "Qualify leads, answer objections, and book meetings while your team sleeps.",
    metric: "3x faster pipeline",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Internal Knowledge",
    description: "Turn your company docs into an intelligent assistant every employee can query.",
    metric: "90% faster answers",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Product Onboarding",
    description: "Guide users through features with personalized, context-aware walkthroughs.",
    metric: "45% higher activation",
    color: "from-emerald-500 to-green-600",
  },
];

const integrations = [
  { name: "Slack", icon: "S" },
  { name: "WhatsApp", icon: "W" },
  { name: "Zendesk", icon: "Z" },
  { name: "Salesforce", icon: "SF" },
  { name: "HubSpot", icon: "H" },
  { name: "Intercom", icon: "I" },
  { name: "Discord", icon: "D" },
  { name: "Telegram", icon: "T" },
];

/* ──────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────── */
const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInLeft:Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight:Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer:Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity,
     ease: "easeInOut" as const
     },
};
const pulseGlow = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 0.8, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

/* ──────────────────────────────────────────
   COMPONENTS
────────────────────────────────────────── */

/* ─── Floating Particles Background ─── */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.05 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ─── Typing Indicator ─── */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.div
        className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}

/* ─── Interactive Chat Demo ─── */
function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentIndex < demoMessages.length) {
        const msg = demoMessages[currentIndex];
        if (msg.role === "ai") {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [...prev, msg]);
            setCurrentIndex((prev) => prev + 1);
          }, 1500);
        } else {
          setMessages((prev) => [...prev, msg]);
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        setTimeout(() => {
          setMessages([]);
          setCurrentIndex(0);
        }, 4000);
      }
    }, currentIndex === 0 ? 800 : 2000);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: "Great question! I'm analyzing that for you now. Based on your data patterns, I'd recommend focusing on high-engagement segments first.",
          timestamp: new Date(),
        },
      ]);
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl"
        animate={pulseGlow}
      />

      <div className="relative bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-[var(--color-border)] overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <motion.div
                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--color-primary)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">CreatiKai AI</h4>
              <p className="text-blue-100 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Online now
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
          </button>
        </div>

        {/* Messages */}
        <div className="h-[320px] overflow-y-auto px-4 py-4 space-y-3 bg-[var(--color-bg-hover)]">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--color-primary)] text-white rounded-br-md"
                      : "bg-white text-[var(--color-text-primary)] shadow-sm rounded-bl-md border border-[var(--color-border-light)]"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white rounded-2xl rounded-bl-md shadow-sm border border-[var(--color-border-light)]">
                <TypingIndicator />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-4 py-3 bg-white border-t border-[var(--color-border-light)]">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
              <ImageIcon className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
              <Mic className="w-4 h-4" />
            </button>
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="w-full px-4 py-2.5 bg-[var(--color-bg-hover)] rounded-full text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              className="w-9 h-9 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] flex items-center justify-center text-white shadow-[var(--shadow-btn-primary)] transition-colors"
            >
              <Send className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature Card ─── */
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      <div
        className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <div className={feature.color}>{feature.icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
      </div>
    </motion.div>
  );
}

/* ─── Use Case Card ─── */
function UseCaseCard({ useCase, index }: { useCase: (typeof useCases)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-[var(--color-border)] hover:shadow-[var(--shadow-xl)] transition-all duration-500"
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color}`} />
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 shadow-lg`}
        >
          <div className="text-white">{useCase.icon}</div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-medium mb-3">
          <TrendingUp className="w-3 h-3" />
          {useCase.metric}
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{useCase.title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{useCase.description}</p>
      </div>
      <div className="px-6 pb-5">
        <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Capability Card ─── */
function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center flex-shrink-0">
          <div className="text-[var(--color-primary)]">{capability.icon}</div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-[var(--color-text-primary)] text-sm mb-1">{capability.title}</h4>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">{capability.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {capability.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[var(--color-star)] text-[var(--color-star)]" />
        ))}
      </div>
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">"{testimonial.content}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-sm font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Integration Orb ─── */
function IntegrationOrb({ name, icon, index }: { name: string; icon: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.15, y: -4 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-md)] flex items-center justify-center text-[var(--color-primary)] font-bold text-sm group-hover:shadow-[var(--shadow-xl)] group-hover:border-[var(--color-border-hover)] transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs text-[var(--color-text-muted)] font-medium">{name}</span>
    </motion.div>
  );
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, label, icon }: Stat) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  const suffix = value.replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-12 h-12 rounded-xl bg-[var(--color-icon-bg-1)] flex items-center justify-center mb-3 text-[var(--color-primary)]">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">
        {isDecimal ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </div>
      <div className="text-sm text-[var(--color-text-muted)]">{label}</div>
    </motion.div>
  );
}

/* ─── Pricing Card ─── */
function PricingCard({
  tier,
  price,
  period,
  features,
  highlighted,
  index,
}: {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-6 border transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] border-transparent text-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.4)]"
          : "bg-white border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--color-amber)] text-white text-xs font-bold flex items-center gap-1">
          <Crown className="w-3 h-3" /> Most Popular
        </div>
      )}
      <div className="mb-5">
        <h3
          className={`text-lg font-semibold mb-1 ${highlighted ? "text-white" : "text-[var(--color-text-primary)]"}`}
        >
          {tier}
        </h3>
        <div className="flex items-baseline gap-1">
          <span
            className={`text-3xl font-bold ${highlighted ? "text-white" : "text-[var(--color-text-primary)]"}`}
          >
            {price}
          </span>
          <span className={`text-sm ${highlighted ? "text-blue-100" : "text-[var(--color-text-muted)]"}`}>
            {period}
          </span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? "text-emerald-300" : "text-[var(--color-emerald)]"}`}
            />
            <span className={highlighted ? "text-blue-50" : "text-[var(--color-text-secondary)]"}>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
          highlighted
            ? "bg-white text-[var(--color-primary)] hover:bg-blue-50 shadow-lg"
            : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)]"
        }`}
      >
        Get Started
      </button>
    </motion.div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border-b border-[var(--color-border)] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[var(--color-text-primary)] font-medium text-sm pr-4 group-hover:text-[var(--color-primary)] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-icon-bg-1)] transition-colors"
        >
          <span className="text-[var(--color-text-muted)] text-lg leading-none group-hover:text-[var(--color-primary)]">
            +
          </span>
        </motion.div>
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
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Trust Badge ─── */
function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs">
      <div className="w-4 h-4 text-[var(--color-emerald)]">{icon}</div>
      {text}
    </div>
  );
}

/* ──────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────── */
export default function AIChatbotPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    {
      question: "How long does it take to deploy the AI chatbot?",
      answer:
        "Most customers are live within 2 hours. Simply connect your data sources, customize the personality, and embed the widget. Our no-code setup requires zero engineering resources.",
    },
    {
      question: "Can it handle complex, multi-turn conversations?",
      answer:
        "Absolutely. Our context window maintains up to 128K tokens of conversation history, enabling deep, nuanced discussions that feel natural and human-like across unlimited turns.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Enterprise-grade security is our foundation. We're SOC 2 Type II certified, GDPR compliant, and offer HIPAA-compliant deployments. All data is encrypted at rest and in transit with optional zero-retention modes.",
    },
    {
      question: "What languages does it support?",
      answer:
        "Our AI is fluent in 50+ languages including English, Spanish, Mandarin, Japanese, German, French, Portuguese, Arabic, and Hindi — with native-level cultural nuance and context awareness.",
    },
    {
      question: "Can I integrate it with my existing tools?",
      answer:
        "Yes! We offer native integrations with 100+ platforms including Slack, WhatsApp, Zendesk, Salesforce, HubSpot, Intercom, Discord, Telegram, and custom API endpoints.",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-hover)] via-white to-white">
        <ParticleBackground />

        {/* Decorative Blobs */}
        <motion.div
          animate={{ ...floatAnimation }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatAnimation, y: [0, 15, 0] }}
          transition={{ duration: 5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatAnimation, y: [0, -20, 0] }}
          transition={{ duration: 6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl"
        />

        <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-[var(--hero-pt)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Next-Gen Conversational AI
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-2xl font-bold text-[var(--color-text-primary)] leading-tight mb-6"
              >
                Meet Your New{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                  AI Workforce
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Deploy intelligent AI agents that understand context, learn from interactions, and
                deliver human-like conversations at scale. Transform every touchpoint into a
                conversion opportunity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all duration-300 flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 rounded-xl bg-white border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-[var(--color-text-primary)] font-semibold hover:shadow-[var(--shadow-lg)] transition-all duration-300 flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Demo
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-wrap items-center gap-5"
              >
                <TrustBadge icon={<Shield className="w-4 h-4" />} text="SOC 2 Certified" />
                <TrustBadge icon={<Lock className="w-4 h-4" />} text="GDPR Compliant" />
                <TrustBadge icon={<Clock className="w-4 h-4" />} text="2-Hour Setup" />
              </motion.div>
            </motion.div>

            {/* Right - Chat Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <ChatDemo />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-4 bg-white rounded-xl p-3 shadow-[var(--shadow-lg)] border border-[var(--color-border)] z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-icon-bg-4)] flex items-center justify-center">
                    <ThumbsUp className="w-4 h-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-primary)]">98% CSAT</p>
                    <p className="text-[10px] text-[var(--color-text-muted)]">Customer rating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-6 bg-white rounded-xl p-3 shadow-[var(--shadow-lg)] border border-[var(--color-border)] z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-primary)]">0.18s</p>
                    <p className="text-[10px] text-[var(--color-text-muted)]">Response time</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[var(--color-text-faint)]">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section className="relative z-10 -mt-16 mb-20">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] p-2 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--color-border-light)]"
          >
            {stats.map((stat, i) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUSTED BY
      ═══════════════════════════════════════ */}
      <section className="py-12 border-y border-[var(--color-border-light)] bg-[var(--color-section-alt)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-[var(--color-text-muted)] mb-8 font-medium"
          >
            Trusted by 10,000+ teams worldwide
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50"
          >
            {["Microsoft", "Google", "Amazon", "Meta", "Salesforce", "Shopify", "Stripe", "Notion"].map(
              (name) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="text-[var(--color-text-faint)] font-bold text-lg tracking-tight hover:text-[var(--color-text-secondary)] transition-colors cursor-default"
                >
                  {name}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES GRID
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-semibold mb-4">
              <Cpu className="w-3.5 h-3.5" />
              Core Capabilities
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Intelligence That{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                Understands
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Built on cutting-edge LLM architecture with enterprise-grade reliability and
              infinite scalability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          USE CASES
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)] bg-gradient-to-b from-[var(--color-section-alt)] to-white">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-4">
              <Target className="w-3.5 h-3.5" />
              Use Cases
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              One Platform,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-[var(--color-primary)] bg-clip-text text-transparent">
                Infinite Applications
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              From customer support to sales, internal ops to onboarding — deploy AI where it
              matters most.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {useCases.map((useCase, i) => (
              <UseCaseCard key={useCase.title} useCase={useCase} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CAPABILITIES SHOWCASE
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold mb-4">
                <Wand2 className="w-3.5 h-3.5" />
                Superpowers
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Capabilities That{" "}
                <span className="bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary)] bg-clip-text text-transparent">
                  Redefine Possible
                </span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Beyond simple Q&A — our AI agents reason, plan, and execute complex workflows
                autonomously while maintaining your brand voice and compliance standards.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {capabilities.map((cap, i) => (
                  <CapabilityCard key={cap.title} capability={cap} index={i} />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              {/* Interactive Visual */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-[var(--color-border)]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-dashed border-[var(--color-border-hover)]"
                />

                <div className="relative bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-[var(--shadow-xl)]">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-[var(--color-text-primary)]">AI Performance Dashboard</h4>
                    <span className="px-2 py-1 rounded-md bg-[var(--color-icon-bg-4)] text-[var(--color-emerald)] text-xs font-medium flex items-center gap-1">
                      <Activity className="w-3 h-3" /> Live
                    </span>
                  </div>

                  {/* Mock Chart */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                        <span>Resolution Rate</span>
                        <span className="font-medium text-[var(--color-emerald)]">94.2%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "94.2%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-emerald)] to-emerald-400"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                        <span>Customer Satisfaction</span>
                        <span className="font-medium text-[var(--color-primary)]">4.8/5.0</span>
                      </div>
                      <div className="h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "96%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-400"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                        <span>Cost Reduction</span>
                        <span className="font-medium text-[var(--color-purple)]">62%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "62%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.6 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-purple)] to-purple-400"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                        <span>Response Accuracy</span>
                        <span className="font-medium text-[var(--color-cyan)]">98.7%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "98.7%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--color-cyan)] to-cyan-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mini Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[var(--color-border-light)]">
                    {[
                      { label: "Active Chats", value: "2,847", icon: <MessageCircle className="w-3.5 h-3.5" /> },
                      { label: "Avg Handle", value: "1m 23s", icon: <Clock className="w-3.5 h-3.5" /> },
                      { label: "Escalations", value: "3.2%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 text-[var(--color-text-faint)] mb-1">
                          {item.icon}
                          <span className="text-[10px]">{item.label}</span>
                        </div>
                        <span className="text-sm font-bold text-[var(--color-text-primary)]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTEGRATIONS
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              Integrations
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Connects With{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Native integrations with the tools your team already uses. One deployment, every
              channel covered.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {integrations.map((integration, i) => (
              <IntegrationOrb key={integration.name} {...integration} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-sm text-[var(--color-text-muted)]">
              And 100+ more via API and Zapier
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-gold-bg)] border border-[var(--color-gold-border)] text-[var(--color-gold)] text-xs font-semibold mb-4">
              <Star className="w-3.5 h-3.5" />
              Customer Love
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Loved by Teams{" "}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-orange-500 bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              See why 10,000+ companies trust CreatiKai AI to power their customer conversations.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PRICING
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)] bg-gradient-to-b from-[var(--color-section-alt)] to-white">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4">
              <Gem className="w-3.5 h-3.5" />
              Pricing
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-[var(--color-emerald)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <PricingCard
              tier="Starter"
              price="$0"
              period="/month"
              features={[
                "1,000 conversations/mo",
                "Web widget only",
                "Basic analytics",
                "Email support",
                "Community access",
              ]}
              highlighted={false}
              index={0}
            />
            <PricingCard
              tier="Professional"
              price="$49"
              period="/month"
              features={[
                "25,000 conversations/mo",
                "All channels + API",
                "Advanced analytics",
                "Priority support",
                "Custom training",
                "SSO authentication",
              ]}
              highlighted={true}
              index={1}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              period=""
              features={[
                "Unlimited conversations",
                "Dedicated infrastructure",
                "Custom AI model training",
                "24/7 dedicated support",
                "SLA guarantees",
                "On-premise deployment",
              ]}
              highlighted={false}
              index={2}
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-semibold mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                FAQ
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Questions?{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                  We've Got Answers
                </span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Everything you need to know about deploying AI agents. Can't find what you're
                looking for? Reach out to our team.
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all duration-300 flex items-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      </main>
  )
}