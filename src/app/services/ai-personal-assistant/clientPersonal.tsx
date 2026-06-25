"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform ,Variants } from "framer-motion";
import { Activity, ArrowRight, Bot, Brain, Calendar, Check, CheckCircle2, ChevronRight, Clock, Crown, FileText, Flame, Gauge, Gem, Globe, Image, Layers, Lock, Mail, MessageSquare, Mic, Pause, Plane, Play, Rocket, RocketIcon, Search, Send, Shield, Sparkles, Star, Sun, Target, ThumbsUp, TrendingUp, Zap } from "lucide-react";


/* ──────────────────────────────────────────
   TYPES
────────────────────────────────────────── */
interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
  actions?: { label: string; icon: React.ReactNode }[];
}

interface Task {
  id: string;
  title: string;
  time: string;
  completed: boolean;
  category: string;
  priority: "high" | "medium" | "low";
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  stat: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

/* ──────────────────────────────────────────
   DEMO DATA
────────────────────────────────────────── */
const heroMessages: Message[] = [
  {
    id: "1",
    role: "user",
    content: "Good morning! What is on my plate today?",
    timestamp: new Date(),
  },
  {
    id: "2",
    role: "ai",
    content:
      "Good morning! You have 3 meetings today, 12 pending emails, and a project deadline at 5 PM. I have prioritized your tasks and blocked focus time from 2-4 PM. Shall I draft responses to your urgent emails?",
    timestamp: new Date(),
    actions: [
      { label: "Draft emails", icon: <Mail className="w-3 h-3" /> },
      { label: "Reschedule", icon: <Calendar className="w-3 h-3" /> },
      { label: "Focus mode", icon: <Zap className="w-3 h-3" /> },
    ],
  },
  {
    id: "3",
    role: "user",
    content: "Yes, draft the client proposal email and book my flight to NYC for Thursday.",
    timestamp: new Date(),
  },
  {
    id: "4",
    role: "ai",
    content:
      "Done! I have drafted the proposal email and found 3 flight options to NYC Thursday: Delta 8:30 AM ($342), United 11:15 AM ($298), JetBlue 2:00 PM ($275). The JetBlue option gets you there with time to spare for your 4 PM meeting. Book it?",
    timestamp: new Date(),
    actions: [
      { label: "Book JetBlue", icon: <Plane className="w-3 h-3" /> },
      { label: "See options", icon: <Search className="w-3 h-3" /> },
      { label: "Add to calendar", icon: <Calendar className="w-3 h-3" /> },
    ],
  },
];

const tasks: Task[] = [
  { id: "1", title: "Review Q3 financial report", time: "9:00 AM", completed: true, category: "Work", priority: "high" },
  { id: "2", title: "Team standup meeting", time: "10:30 AM", completed: true, category: "Work", priority: "medium" },
  { id: "3", title: "Draft client proposal", time: "11:00 AM", completed: false, category: "Work", priority: "high" },
  { id: "4", title: "Lunch with Sarah", time: "12:30 PM", completed: false, category: "Personal", priority: "low" },
  { id: "5", title: "Deep focus: Product strategy", time: "2:00 PM", completed: false, category: "Work", priority: "high" },
  { id: "6", title: "Flight to NYC — JetBlue 204", time: "5:30 PM", completed: false, category: "Travel", priority: "medium" },
];

const features: Feature[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Contextual Awareness",
    description: "Remembers your preferences, habits, and priorities. The more you use it, the smarter it gets.",
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-icon-bg-1)]",
    stat: "99.2% accuracy",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Smart Scheduling",
    description: "Auto-schedules meetings, finds optimal time slots, and protects your focus blocks.",
    color: "text-[var(--color-purple)]",
    bgColor: "bg-[var(--color-icon-bg-2)]",
    stat: "4.2 hrs saved/week",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Inbox Intelligence",
    description: "Drafts, prioritizes, and auto-responds to emails in your voice. Never miss what matters.",
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-icon-bg-3)]",
    stat: "68% faster replies",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Deep Research",
    description: "Searches the web, your docs, and databases simultaneously. Summarizes findings instantly.",
    color: "text-[var(--color-emerald)]",
    bgColor: "bg-[var(--color-icon-bg-4)]",
    stat: "10x faster research",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Document Genius",
    description: "Creates, edits, and formats documents. From reports to presentations, done in seconds.",
    color: "text-[var(--color-amber)]",
    bgColor: "bg-[var(--color-gold-bg)]",
    stat: "3x productivity",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Travel & Booking",
    description: "Books flights, hotels, restaurants, and rides. Handles changes and cancellations automatically.",
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-icon-bg-1)]",
    stat: "Zero manual booking",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Alexandra Chen",
    role: "CEO",
    company: "Nexa Ventures",
    content:
      "My AI assistant handles 80% of my daily admin — scheduling, email triage, travel booking. I now have 3 extra hours every day for strategic thinking. It is like having a world-class executive assistant available 24/7.",
    avatar: "AC",
    rating: 5,
  },
  {
    name: "James Morrison",
    role: "Product Director",
    company: "TechFlow",
    content:
      "The research capability is unreal. I asked for a competitive analysis of 5 companies and had a 12-page report with charts in under 3 minutes. What used to take my team a week now takes an afternoon.",
    avatar: "JM",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    company: "GreenLeaf",
    content:
      "As a solo founder, this is my co-founder, ops manager, and EA rolled into one. It onboarded my first 10 customers, drafted investor updates, and even reminded me to take breaks. Absolutely game-changing.",
    avatar: "PS",
    rating: 5,
  },
];

const workflows = [
  {
    title: "Morning Brief",
    desc: "Auto-compiles your day: meetings, tasks, news, weather, and traffic — delivered at 8 AM.",
    icon: <Sun className="w-5 h-5" />,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Meeting Prep",
    desc: "Researches attendees, pulls relevant docs, and drafts talking points before every call.",
    icon: <Target className="w-5 h-5" />,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Email Triage",
    desc: "Sorts inbox by urgency, drafts responses, and flags items needing your personal touch.",
    icon: <Mail className="w-5 h-5" />,
    color: "from-cyan-400 to-teal-500",
  },
  {
    title: "Travel Agent",
    desc: "Books flights, hotels, ground transport, and creates itinerary with local recommendations.",
    icon: <Plane className="w-5 h-5" />,
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Research Buddy",
    desc: "Deep-dive any topic across web, papers, and your knowledge base. Summarizes with citations.",
    icon: <Search className="w-5 h-5" />,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Content Creator",
    desc: "Drafts blog posts, social content, presentations, and reports in your unique voice.",
    icon: <FileText className="w-5 h-5" />,
    color: "from-pink-400 to-rose-500",
  },
];

const integrations = [
  { name: "Gmail", icon: "G", color: "#EA4335" },
  { name: "Outlook", icon: "O", color: "#0078D4" },
  { name: "Slack", icon: "S", color: "#4A154B" },
  { name: "Notion", icon: "N", color: "#000000" },
  { name: "Calendar", icon: "C", color: "#4285F4" },
  { name: "Zoom", icon: "Z", color: "#2D8CFF" },
  { name: "Asana", icon: "A", color: "#F06A6A" },
  { name: "HubSpot", icon: "H", color: "#FF7A59" },
];

/* ──────────────────────────────────────────
   ANIMATION VARIANTS
────────────────────────────────────────── */
const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1]  },
  }),
};

const slideInLeft:Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight:Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ──────────────────────────────────────────
   PARTICLE BACKGROUND
────────────────────────────────────────── */
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.25 + 0.05,
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

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 * (1 - dist / 180)})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

/* ──────────────────────────────────────────
   TYPING INDICATOR
────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0 }} />
      <motion.div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} />
      <motion.div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }} />
    </div>
  );
}

/* ──────────────────────────────────────────
   AI ORB VISUAL
────────────────────────────────────────── */
function AIOrb() {
  return (
    <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        className="absolute inset-0 rounded-full border border-blue-200/30"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 0.95, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
        className="absolute inset-4 rounded-full border border-purple-200/20"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-cyan-200/15"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-[0_0_60px_rgba(37,99,235,0.4)] flex items-center justify-center"
      >
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <Sparkles className="w-14 h-14 text-white/90" />
        </motion.div>
      </motion.div>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.cos(i * 1.05) * 40, 0],
            y: [0, Math.sin(i * 1.05) * 40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-blue-400"
          style={{ marginLeft: -4, marginTop: -4 }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   INTERACTIVE CHAT DEMO
────────────────────────────────────────── */
function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // useEffect(() => scrollToBottom(), [messages]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      if (currentIndex < heroMessages.length) {
        const msg = heroMessages[currentIndex];
        if (msg.role === "ai") {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [...prev, msg]);
            setCurrentIndex((prev) => prev + 1);
          }, 1800);
        } else {
          setMessages((prev) => [...prev, msg]);
          setCurrentIndex((prev) => prev + 1);
        }
      } else {
        setTimeout(() => { setMessages([]); setCurrentIndex(0); }, 5000);
      }
    }, currentIndex === 0 ? 1000 : 2500);
    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg: Message = { id: Date.now().toString(), role: "user", content: inputValue, timestamp: new Date() };
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
          content: "I have added that to your schedule and sent a confirmation. Is there anything else you would like me to handle before your 2 PM focus block?",
          timestamp: new Date(),
          actions: [
            { label: "Check calendar", icon: <Calendar className="w-3 h-3" /> },
            { label: "Prep notes", icon: <FileText className="w-3 h-3" /> },
          ],
        },
      ]);
    }, 1500);
  };

  return (
    <div className="relative w-full  mx-auto">
    <img src="/executive.png"/>
    </div>
  );
}

/* ──────────────────────────────────────────
   TASK DASHBOARD DEMO
────────────────────────────────────────── */
function TaskDashboard() {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id: string) => {
    setTaskList((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const getPriorityColor = (p: string) => {
    switch (p) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-amber-100 text-amber-700 border-amber-200";
      default: return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-xl)] overflow-hidden">
      <div className="px-5 py-4 border-b border-[var(--color-border-light)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
          </div>
          <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">Today&apos;s Plan</h4>
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">{taskList.filter((t) => t.completed).length}/{taskList.length} done</span>
      </div>
      <div className="p-4 space-y-2 max-h-[320px] overflow-y-auto">
        <AnimatePresence>
          {taskList.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 cursor-pointer ${task.completed ? "bg-[var(--color-bg-hover)] border-[var(--color-border-light)] opacity-60" : "bg-white border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-sm"}`}
              onClick={() => toggleTask(task.id)}
            >
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${task.completed ? "bg-[var(--color-emerald)] border-[var(--color-emerald)]" : "border-[var(--color-border)]"}`}>
                {task.completed && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${task.completed ? "line-through text-[var(--color-text-faint)]" : "text-[var(--color-text-primary)]"}`}>{task.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {task.time}
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${getPriorityColor(task.priority)}`}>{task.priority}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="px-5 py-3 border-t border-[var(--color-border-light)] bg-[var(--color-bg-hover)]">
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          <span>AI auto-prioritized based on deadlines and your focus patterns</span>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   FEATURE CARD
────────────────────────────────────────── */
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 overflow-hidden"
    >
      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className={feature.color}>{feature.icon}</div>
      </div>
      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-[10px] font-bold mb-3">
        <TrendingUp className="w-3 h-3" /> {feature.stat}
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   WORKFLOW CARD
────────────────────────────────────────── */
function WorkflowCard({ workflow, index }: { workflow: (typeof workflows)[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${workflow.color} flex items-center justify-center mb-4 shadow-lg`}>
        <div className="text-white">{workflow.icon}</div>
      </div>
      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">{workflow.title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{workflow.desc}</p>
      <div className="mt-4 flex items-center gap-1.5 text-[var(--color-primary)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Configure <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   TESTIMONIAL CARD
────────────────────────────────────────── */
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
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">&quot;{testimonial.content}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-sm font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-text-primary)]">{testimonial.name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{testimonial.role} at {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   INTEGRATION ORB
────────────────────────────────────────── */
function IntegrationOrb({ name, icon, color, index }: { name: string; icon: string; color: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.15, y: -4 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-md)] flex items-center justify-center font-bold text-sm group-hover:shadow-[var(--shadow-xl)] group-hover:border-[var(--color-border-hover)] transition-all duration-300" style={{ color }}>
        {icon}
      </div>
      <span className="text-xs text-[var(--color-text-muted)] font-medium">{name}</span>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   ANIMATED COUNTER
────────────────────────────────────────── */
function AnimatedCounter({ value, label, icon, suffix = "" }: { value: number; label: string; icon: React.ReactNode; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(current);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <motion.div ref={ref} variants={fadeUp} className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 rounded-xl bg-[var(--color-icon-bg-1)] flex items-center justify-center mb-3 text-[var(--color-primary)]">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">{Math.floor(count)}{suffix}</div>
      <div className="text-sm text-[var(--color-text-muted)]">{label}</div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   PRICING CARD
────────────────────────────────────────── */
function PricingCard({ tier, price, period, features, highlighted, index, badge }: {
  tier: string; price: string; period: string; features: string[]; highlighted: boolean; index: number; badge?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-6 border transition-all duration-300 ${highlighted ? "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-dark)] border-transparent text-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.4)]" : "bg-white border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)]"}`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--color-amber)] text-white text-xs font-bold flex items-center gap-1">
          <Crown className="w-3 h-3" /> {badge}
        </div>
      )}
      <div className="mb-5">
        <h3 className={`text-lg font-semibold mb-1 ${highlighted ? "text-white" : "text-[var(--color-text-primary)]"}`}>{tier}</h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-bold ${highlighted ? "text-white" : "text-[var(--color-text-primary)]"}`}>{price}</span>
          <span className={`text-sm ${highlighted ? "text-blue-100" : "text-[var(--color-text-muted)]"}`}>{period}</span>
        </div>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? "text-emerald-300" : "text-[var(--color-emerald)]"}`} />
            <span className={highlighted ? "text-blue-50" : "text-[var(--color-text-secondary)]"}>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${highlighted ? "bg-white text-[var(--color-primary)] hover:bg-blue-50 shadow-lg" : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)]"}`}>
        Get Started
      </button>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   FAQ ITEM
────────────────────────────────────────── */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} custom={index} className="border-b border-[var(--color-border)] last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-[var(--color-text-primary)] font-medium text-sm pr-4 group-hover:text-[var(--color-primary)] transition-colors">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="w-6 h-6 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-icon-bg-1)] transition-colors">
          <span className="text-[var(--color-text-muted)] text-lg leading-none group-hover:text-[var(--color-primary)]">+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   TRUST BADGE
────────────────────────────────────────── */
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
export default function AIPersonalAssistantPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const faqs = [
    { question: "How does the AI learn my preferences?", answer: "The assistant observes your patterns over time — how you schedule meetings, draft emails, prioritize tasks, and communicate. It builds a personalized model of your workflow and continuously refines it based on your feedback and corrections." },
    { question: "Is my data private and secure?", answer: "Absolutely. We use end-to-end encryption, zero-knowledge architecture for sensitive data, and offer on-premise deployment for enterprise customers. Your data is never used to train general models or shared with third parties." },
    { question: "Can it integrate with my existing tools?", answer: "Yes — native integrations with 200+ tools including Gmail, Outlook, Slack, Notion, Asana, Salesforce, HubSpot, Zoom, Google Calendar, and major CRM/ERP systems. Custom API integrations are available on Enterprise plans." },
    { question: "What makes this different from ChatGPT or Claude?", answer: "Unlike general-purpose AI, CreatiKai Assistant is purpose-built for productivity. It has persistent memory of your context, deep tool integrations, proactive task management, and enterprise-grade security — designed to be your actual coworker, not just a chatbot." },
    { question: "How quickly can I get started?", answer: "Most users are fully operational within 15 minutes. Connect your calendar and email, set your preferences, and the AI begins learning immediately. Full personalization reaches peak performance after about 1 week of regular use." },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-hover)] via-white to-white">
        <ParticleBackground />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 right-10 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/8 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-[var(--hero-pt)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                AI-Powered Personal Assistant
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6"
              >
                Your{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                  24/7 Executive
                </span>{" "}
                Assistant
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                An AI that schedules your meetings, drafts your emails, books your travel,
                researches anything, and manages your tasks — so you can focus on what
                actually matters.
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
                <TrustBadge icon={<Lock className="w-4 h-4" />} text="End-to-End Encrypted" />
                <TrustBadge icon={<Clock className="w-4 h-4" />} text="15-Min Setup" />
              </motion.div>
            </motion.div>

            {/* Right - Chat Demo + Task Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative space-y-6"
            >
              <ChatDemo />
              

            
           
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
            <AnimatedCounter value={4.2} label="Hours Saved Weekly" icon={<Clock className="w-5 h-5" />} suffix="h" />
            <AnimatedCounter value={68} label="Faster Email Replies" icon={<Zap className="w-5 h-5" />} suffix="%" />
            <AnimatedCounter value={200} label="Tool Integrations" icon={<Layers className="w-5 h-5" />} suffix="+" />
            <AnimatedCounter value={99.9} label="Uptime SLA" icon={<Activity className="w-5 h-5" />} suffix="%" />
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
            Trusted by 10,000+ professionals worldwide
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
              <Brain className="w-3.5 h-3.5" />
              Core Capabilities
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Superpowers for{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                Your Productivity
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              From inbox zero to perfectly planned days — every feature is designed to give
              you back your time.
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
          WORKFLOWS
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
              Automated Workflows
            </span>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              Set It, Forget It,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-[var(--color-primary)] bg-clip-text text-transparent">
                Dominate It
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Pre-built workflows that run on autopilot. Customize them or create your own
              with natural language.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {workflows.map((workflow, i) => (
              <WorkflowCard key={workflow.title} workflow={workflow} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DASHBOARD SHOWCASE
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
                <Gauge className="w-3.5 h-3.5" />
                Performance
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Real-Time{" "}
                <span className="bg-gradient-to-r from-[var(--color-cyan)] to-[var(--color-primary)] bg-clip-text text-transparent">
                  Intelligence Dashboard
                </span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Track your productivity gains, AI accuracy, time saved, and task completion
                rates in a beautiful, real-time dashboard. See exactly how much the AI is
                helping you every single day.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Tasks Completed by AI", value: 87, color: "from-[var(--color-emerald)] to-emerald-400" },
                  { label: "Emails Drafted & Sent", value: 94, color: "from-[var(--color-primary)] to-blue-400" },
                  { label: "Meetings Auto-Scheduled", value: 72, color: "from-[var(--color-purple)] to-purple-400" },
                  { label: "Research Hours Saved", value: 91, color: "from-[var(--color-cyan)] to-cyan-400" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
                      <span>{item.label}</span>
                      <span className="font-medium text-[var(--color-text-primary)]">{item.value}%</span>
                    </div>
                    <div className="h-2.5 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl p-6 border border-[var(--color-border)] shadow-[var(--shadow-xl)]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-[var(--color-text-primary)]">Weekly Productivity Report</h4>
                  <span className="px-2 py-1 rounded-md bg-[var(--color-icon-bg-4)] text-[var(--color-emerald)] text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +34% vs last week
                  </span>
                </div>

                {/* Mock Bar Chart */}
                <div className="flex items-end justify-between gap-2 h-40 mb-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                    const heights = [60, 85, 72, 95, 78, 45, 30];
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${heights[i]}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className="w-full rounded-t-lg bg-gradient-to-t from-[var(--color-primary)] to-blue-400 min-h-[4px]"
                        />
                        <span className="text-[10px] text-[var(--color-text-muted)] font-medium">{day}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--color-border-light)]">
                  {[
                    { label: "Tasks Done", value: "142", icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                    { label: "Hours Saved", value: "28.5", icon: <Clock className="w-3.5 h-3.5" /> },
                    { label: "Streak", value: "12 days", icon: <Flame className="w-3.5 h-3.5" /> },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INTEGRATIONS
      ═══════════════════════════════════════ */}
      {/* <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              Plays Nice With{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Everything
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Connect your calendar, email, CRM, project tools, and more. One assistant,
              every workflow covered.
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
              And 200+ more via API and Zapier
            </p>
          </motion.div>
        </div>
      </section> */}

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
              Loved by Busy{" "}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-orange-500 bg-clip-text text-transparent">
                Professionals
              </span>
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              See why executives, founders, and teams trust CreatiKai to run their day.
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
              Start free. Upgrade when you are ready. No credit card required.
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
              price="₹0"
              period="/month"
              features={[
                "1,000 AI actions/mo",
                "Email + Calendar sync",
                "Basic task management",
                "Web research (10/day)",
                "Community support",
              ]}
              highlighted={false}
              index={0}
            />
            <PricingCard
              tier="Professional"
              price="₹2900"
              period="/month"
              features={[
                "Unlimited AI actions",
                "All integrations + API",
                "Advanced workflows",
                "Unlimited research",
                "Priority support",
                "Custom voice training",
                "Team collaboration",
              ]}
              highlighted={true}
              index={1}
              badge="Most Popular"
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              period=""
              features={[
                "Dedicated AI instance",
                "On-premise deployment",
                "Custom model training",
                "24/7 dedicated support",
                "SLA guarantees",
                "Advanced security",
                "White-label options",
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
                  We Have Answers
                </span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Everything you need to know about your new AI assistant. Can not find what
                you are looking for? Our team is here to help.
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

      {/* ═══════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════ */}
      <section className="py-[var(--section-py)] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-primary-dark)] relative overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <RocketIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Your Time Back?
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              Join 10,000+ professionals who have already delegated their busywork to AI.
              Start your free trial today — no credit card required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-blue-200 text-sm"
          >
            Free forever plan available. Upgrade anytime.
          </motion.p>
        </div>
      </section>
    </main>
  );
}