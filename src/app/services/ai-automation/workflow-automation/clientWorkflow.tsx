"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Sparkles,
  Zap,
  Workflow,
  GitBranch,
  GitMerge,
  Settings,
  Bot,
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
  Shield,
  Repeat,
  Activity,
  Gauge,
  Database,
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
  Play,
  Pause,
  RotateCcw,
  Share2,
  Copy,
  Trash2,
  Edit3,
  Save,
  Download,
  Upload,
  Link2,
  Unlink,
  Maximize2,
  Minimize2,
  Grid3X3,
  List,
  Kanban,
  Table,
  BarChart,
  LineChart,
  PieChart,
  AreaChart,
  Radar,
  Compass,
  Map,
  Globe,
  Server,
  Cloud,
  HardDrive,
  Cpu,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,

  Signal,
  Waves,
  Wind,
  Flame,
  Droplets,
 
  Mountain,
  TreePine,
  TreeDeciduous,

  MountainSnow,
  Waves as WavesIcon,
  Anchor,
  Ship,
  Sailboat,
  LifeBuoy,
  Fish,
  Shell,
  OctagonAlert,
  Code,
  BarChart3,
  UserPlus,
  Users,
} from "lucide-react";

/* ============================================
   WORKFLOW AUTOMATION SERVICE PAGE
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

const scaleIn:Variants = {
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
  { label: "Builder", href: "#builder" },
  { label: "Templates", href: "#templates" },
  { label: "Integrations", href: "#integrations" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "10x", label: "Faster Deployment" },
  { value: "95%", label: "Less Code" },
  { value: "500+", label: "Pre-built Templates" },
  { value: "99.99%", label: "Reliability" },
];

const painPoints = [
  {
    icon: Code,
    title: "Developer Dependency",
    desc: "Every workflow change requires engineering tickets, sprint planning, and deployment cycles. Business moves slower than market demands.",
  },
  {
    icon: AlertTriangle,
    title: "Brittle Integrations",
    desc: "Custom scripts break when APIs change. Your critical workflows fail silently, and you only find out when revenue is already lost.",
  },
  {
    icon: Clock,
    title: "Manual Handoffs",
    desc: "Data moves between teams via spreadsheets, emails, and Slack messages. Version confusion and delays are the norm, not the exception.",
  },
  {
    icon: BarChart3,
    title: "No Visibility",
    desc: "You can't see what's running, what's failing, or what's costing you money. Black-box automation is worse than no automation.",
  },
];

const builderFeatures = [
  {
    icon: GitBranch,
    title: "Visual Flow Designer",
    desc: "Drag, drop, and connect nodes to build complex workflows. Conditional logic, loops, parallel paths, and error handling—all visually.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
    metric: "0",
    metricLabel: "Code Required",
  },
  {
    icon: Bot,
    title: "AI Workflow Assistant",
    desc: "Describe what you want in plain English. Our AI generates the complete workflow, suggests optimizations, and explains how it works.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
    metric: "3x",
    metricLabel: "Faster Building",
  },
  {
    icon: GitMerge,
    title: "Conditional Logic Engine",
    desc: "If-this-then-that on steroids. Nested conditions, pattern matching, data transforms, and dynamic routing based on any data field.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
    metric: "∞",
    metricLabel: "Branch Depth",
  },
  {
    icon: Shield,
    title: "Built-in Error Handling",
    desc: "Automatic retries, fallback paths, dead-letter queues, and alerting. Your workflows recover from failures without waking anyone up.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
    metric: "99.9%",
    metricLabel: "Auto-Recovery",
  },
  {
    icon: Database,
    title: "Data Transformation",
    desc: "Map, filter, aggregate, and transform data between any format. JSON, XML, CSV, EDI—handled natively without custom parsers.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
    metric: "50+",
    metricLabel: "Data Formats",
  },
  {
    icon: Activity,
    title: "Real-Time Execution",
    desc: "Sub-second trigger response, parallel processing, and auto-scaling. Handle 10 events or 10 million with the same configuration.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
    metric: "<100ms",
    metricLabel: "Trigger Latency",
  },
];

const workflowTemplates = [
  {
    icon: FileCheck,
    title: "Document Approval",
    desc: "Route documents through multi-stage approval with automatic reminders, escalation, and audit trails. Cut approval time from weeks to hours.",
    category: "Operations",
    gradient: "var(--gradient-course-1)",
    iconColor: "var(--color-course-icon-1)",
    users: "2.4k",
  },
  {
    icon: Mail,
    title: "Email Campaign Orchestration",
    desc: "Trigger personalized email sequences based on behavior, time zones, and engagement scores. A/B test subject lines and content automatically.",
    category: "Marketing",
    gradient: "var(--gradient-course-2)",
    iconColor: "var(--color-course-icon-2)",
    users: "4.1k",
  },
  {
    icon: UserPlus,
    title: "Employee Onboarding",
    desc: "From offer acceptance to first day: provision accounts, schedule training, assign equipment, and notify stakeholders—zero manual work.",
    category: "HR",
    gradient: "var(--gradient-course-3)",
    iconColor: "var(--color-course-icon-3)",
    users: "1.8k",
  },
  {
    icon: BarChart3,
    title: "Sales Pipeline Sync",
    desc: "Bi-directional sync between CRM, marketing automation, and finance. Keep every team aligned on deal status, forecasts, and commissions.",
    category: "Sales",
    gradient: "var(--gradient-course-4)",
    iconColor: "var(--color-course-icon-4)",
    users: "3.2k",
  },
];

const enterpriseFeatures = [
  {
    icon: Lock,
    title: "SOC 2 & ISO 27001",
    desc: "Enterprise-grade security with continuous compliance monitoring, penetration testing, and third-party audits.",
  },
  {
    icon: Server,
    title: "Private Cloud & On-Prem",
    desc: "Deploy in your VPC, data center, or air-gapped environment. Full control over data residency and network isolation.",
  },
  {
    icon: Users,
    title: "SSO & RBAC",
    desc: "SAML, OIDC, and LDAP integration. Granular role-based access control with custom permissions and approval workflows.",
  },
  {
    icon: Gauge,
    title: "99.99% SLA",
    desc: "Guaranteed uptime with automatic failover, multi-region redundancy, and 24/7 enterprise support with 15-minute response.",
  },
];

const integrations = [
  { name: "Salesforce", category: "CRM", color: "#00A1E0" },
  { name: "HubSpot", category: "CRM", color: "#FF7A59" },
  { name: "SAP", category: "ERP", color: "#008FD3" },
  { name: "Oracle", category: "ERP", color: "#F80000" },
  { name: "Workday", category: "HCM", color: "#F38B00" },
  { name: "Slack", category: "Comms", color: "#4A154B" },
  { name: "Microsoft 365", category: "Productivity", color: "#D83B01" },
  { name: "Google Workspace", category: "Productivity", color: "#4285F4" },
  { name: "Zendesk", category: "Support", color: "#03363D" },
  { name: "Stripe", category: "Payments", color: "#635BFF" },
  { name: "QuickBooks", category: "Finance", color: "#2CA01C" },
  { name: "NetSuite", category: "ERP", color: "#E4A11B" },
];

const testimonials = [
  {
    quote:
      "We replaced 340 custom scripts with 47 Creatik AI workflows. Deployment time dropped from 3 weeks to 4 hours, and our failure rate went from 12% to 0.03%.",
    author: "Rachel Kim",
    role: "VP Engineering, DataStream Corp",
    metric: "0.03%",
    metricLabel: "Failure Rate",
  },
  {
    quote:
      "Our business analysts now build workflows that used to require a team of developers. The visual builder plus AI assistant is genuinely transformative.",
    author: "Marcus Webb",
    role: "Director of Ops, Meridian Logistics",
    metric: "10x",
    metricLabel: "Faster Deployment",
  },
  {
    quote:
      "The error handling is remarkable. A critical payment workflow failed at 2 AM, auto-recovered in 8 seconds, and logged everything for review. I slept through it.",
    author: "Sofia Andersson",
    role: "CTO, Nordic Payments",
    metric: "8s",
    metricLabel: "Auto-Recovery",
  },
];

const faqs = [
  {
    q: "How does the visual builder handle complex logic?",
    a: "Our builder supports nested conditionals, loops, parallel execution branches, sub-workflows, and dynamic routing. You can build anything from simple if-then rules to multi-layered decision trees with hundreds of branches—all visually. For power users, we offer a code view for precise control.",
  },
  {
    q: "Can I migrate my existing scripts and integrations?",
    a: "Yes. Our migration toolkit analyzes your existing scripts, APIs, and cron jobs, then generates equivalent Creatik AI workflows. We support Python, JavaScript, Bash, SQL, and most major integration patterns. Most migrations complete within 2-5 business days.",
  },
  {
    q: "What happens when a third-party API changes?",
    a: "Our integration health monitor detects API changes automatically. When a breaking change occurs, we alert you with specific migration steps and often provide an auto-fix. Version-aware connectors maintain backward compatibility where possible.",
  },
  {
    q: "How do you handle high-volume event processing?",
    a: "Our event-driven architecture auto-scales horizontally. Process millions of events per minute with automatic load balancing, partitioning, and backpressure handling. No configuration required—scale is built into every workflow by default.",
  },
  {
    q: "Is there a limit to workflow complexity or execution time?",
    a: "No practical limits. Workflows can run for milliseconds or months (for long-running processes). We've seen customers build workflows with 500+ nodes that execute reliably. For extremely long processes, we offer durable execution that survives restarts and outages.",
  },
];

export default function WorkflowAutomationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

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
                Build a Workflow
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
                    Build a Workflow
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
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-glow)] opacity-20 blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-[var(--color-glow-strong)] opacity-15 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-25" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
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
                <Workflow className="h-4 w-4" />
                Visual Workflow Platform
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[var(--hero-title-size)] font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Build Powerful Workflows{" "}
                <span className="gradient-text">
                  Without Writing Code
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Connect your apps, automate your processes, and orchestrate
                complex business logic—with a visual builder that turns ideas
                into production workflows in minutes, not months.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Start Building Free
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
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

            {/* Workflow Builder Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-[#0f172a] overflow-hidden">
                  <div className="bg-[#1e293b] p-3 border-b border-[#334155] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-xs text-slate-400 ml-2">
                        Creatik Flow — Customer Onboarding v3.2
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setIsRunning(!isRunning)}
                        className="h-6 w-6 rounded bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors"
                      >
                        {isRunning ? (
                          <Pause className="h-3 w-3 text-slate-300" />
                        ) : (
                          <Play className="h-3 w-3 text-emerald-400 fill-emerald-400" />
                        )}
                      </button>
                      <div className="h-5 px-2 rounded bg-emerald-500/20 flex items-center text-[10px] text-emerald-400 font-semibold">
                        {isRunning ? "RUNNING" : "PAUSED"}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    {/* Workflow Canvas */}
                    <div className="relative h-80">
                      {/* Nodes */}
                      {[
                        { id: 1, x: 8, y: 45, icon: Mail, label: "New Signup", type: "trigger", color: "bg-[var(--color-primary)]" },
                        { id: 2, x: 28, y: 45, icon: Database, label: "Create Record", type: "action", color: "bg-[var(--color-purple)]" },
                        { id: 3, x: 48, y: 25, icon: Shield, label: "Verify Email", type: "action", color: "bg-[var(--color-cyan)]" },
                        { id: 4, x: 48, y: 65, icon: AlertTriangle, label: "Flag Risk", type: "condition", color: "bg-[var(--color-amber)]" },
                        { id: 5, x: 68, y: 25, icon: Zap, label: "Send Welcome", type: "action", color: "bg-[var(--color-emerald)]" },
                        { id: 6, x: 68, y: 65, icon: UserPlus, label: "Manual Review", type: "action", color: "bg-red-500" },
                        { id: 7, x: 88, y: 45, icon: CheckCircle2, label: "Activate", type: "end", color: "bg-[var(--color-primary)]" },
                      ].map((node) => (
                        <motion.div
                          key={node.id}
                          className="absolute"
                          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.3 + node.id * 0.1 }}
                        >
                          <div className={`relative flex flex-col items-center gap-1.5 group cursor-pointer`}>
                            <div className={`h-11 w-11 rounded-xl ${node.color} flex items-center justify-center shadow-lg ring-2 ring-transparent group-hover:ring-white/20 transition-all`}>
                              <node.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-[9px] text-slate-400 whitespace-nowrap">{node.label}</span>
                            {node.type === "trigger" && (
                              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                          </div>
                        </motion.div>
                      ))}

                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.5" />
                          </linearGradient>
                        </defs>
                        <path d="M 55 144 Q 110 144, 155 144" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 235 144 Q 290 80, 335 80" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 235 144 Q 290 208, 335 208" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-40" />
                        <path d="M 395 80 Q 450 144, 505 144" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 395 208 Q 450 144, 505 144" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 555 144 Q 610 144, 655 144" stroke="url(#flowGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                      </svg>

                      {/* Animated flow particles */}
                      {isRunning && (
                        <>
                          <motion.div
                            className="absolute h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                            animate={{
                              left: ["8%", "28%", "48%", "68%", "88%"],
                              top: ["45%", "45%", "25%", "25%", "45%"],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.div
                            className="absolute h-2 w-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                            animate={{
                              left: ["8%", "28%", "48%", "68%", "88%"],
                              top: ["45%", "45%", "65%", "65%", "45%"],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                          />
                        </>
                      )}
                    </div>

                    {/* Bottom Toolbar */}
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-[#334155]">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded bg-slate-700 flex items-center justify-center">
                          <Plus className="h-3.5 w-3.5 text-slate-300" />
                        </div>
                        <div className="h-7 w-7 rounded bg-slate-700 flex items-center justify-center">
                          <GitBranch className="h-3.5 w-3.5 text-slate-300" />
                        </div>
                        <div className="h-7 w-7 rounded bg-slate-700 flex items-center justify-center">
                          <Database className="h-3.5 w-3.5 text-slate-300" />
                        </div>
                        <div className="h-7 w-7 rounded bg-slate-700 flex items-center justify-center">
                          <Shield className="h-3.5 w-3.5 text-slate-300" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span>7 nodes</span>
                        <span>•</span>
                        <span>3 paths</span>
                        <span>•</span>
                        <span>Last run: 2s ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">2.3M runs</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">This month</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">47s avg</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Execution time</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">AI Suggested</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">3 optimizations</div>
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
            Powering workflows at innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Stripe", "Airbnb", "Uber", "Netflix", "Spotify", "Slack", "Notion", "Figma"].map(
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
      <section id="builder" className="py-[var(--section-py)]">
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
              Automation shouldn't require{" "}
              <span className="text-[var(--color-text-faint)]">
                an engineering degree
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Traditional workflow automation is broken. Here's why teams
              struggle to connect their tools and processes effectively.
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

      {/* Builder Features */}
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
              Visual Builder
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Build anything visually.{" "}
              <span className="gradient-text">Deploy instantly.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              A workflow builder designed for how modern teams actually work—
              fast, collaborative, and powered by AI.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {builderFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon
                      className="h-7 w-7"
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {feature.metric}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {feature.metricLabel}
                    </div>
                  </div>
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

      {/* Templates */}
      <section id="templates" className="py-[var(--section-py)]">
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
              <Copy className="h-4 w-4" />
              Template Library
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Start with battle-tested{" "}
              <span className="gradient-text">workflow templates</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              500+ pre-built workflows designed by industry experts. Deploy in
              one click, customize in minutes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {workflowTemplates.map((template, idx) => (
              <motion.div
                key={template.title}
                variants={fadeInUp}
                onClick={() => setActiveTemplate(idx)}
                className={`group relative overflow-hidden rounded-2xl border bg-white hover:shadow-[var(--shadow-xl)] transition-all duration-300 cursor-pointer ${
                  activeTemplate === idx ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : "border-[var(--color-border)]"
                }`}
              >
                <div
                  className="h-1.5"
                  style={{ background: template.gradient }}
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <template.icon
                        className="h-7 w-7"
                        style={{ color: template.iconColor }}
                      />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="rounded-full bg-[var(--color-section-alt)] px-3 py-1 text-[10px] font-semibold text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        {template.category}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {template.users} users
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                    {template.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {template.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
                    Use template <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
              <Share2 className="h-4 w-4" />
              Integrations
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Connects to{" "}
              <span className="gradient-text">everything you use</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              200+ native integrations. If it has an API, Creatik AI connects to it.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                variants={scaleIn}
                className="group flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-white p-4 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] transition-all duration-300 cursor-default"
              >
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ backgroundColor: integration.color }}
                >
                  {integration.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text-primary)] text-sm">
                    {integration.name}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {integration.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="py-[var(--section-py)]">
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
                <Shield className="h-4 w-4" />
                Enterprise Ready
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-[var(--section-title-size)] font-bold tracking-tight mb-6"
              >
                Built for the{" "}
                <span className="gradient-text">enterprise</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[var(--color-text-secondary)] mb-10"
              >
                Security, compliance, and scale that meets the demands of
                Fortune 500 companies and regulated industries.
              </motion.p>

              <div className="space-y-6">
                {enterpriseFeatures.map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-icon-bg-1)]">
                      <feature.icon className="h-6 w-6 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {feature.desc}
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
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-xl)]">
                <div className="text-center mb-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-icon-bg-1)] mb-4">
                    <Shield className="h-10 w-10 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    Enterprise Dashboard
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Organization-wide workflow governance
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Active Workflows", value: "1,247", trend: "+12%", icon: Workflow },
                    { label: "Success Rate", value: "99.97%", trend: "+0.02%", icon: CheckCircle2 },
                    { label: "Cost Saved", value: "$2.4M", trend: "+18%", icon: TrendingUp },
                    { label: "Compliance Score", value: "100%", trend: "Perfect", icon: Shield },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-section-alt)] border border-[var(--color-border)]">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</div>
                          <div className="text-xs text-[var(--color-text-muted)]">{item.trend} this quarter</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">{item.value}</div>
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
              className="text-[var(--section-title-size)] font-bold tracking-tight mb-4"
            >
              Trusted by teams that ship{" "}
              <span className="gradient-text">fast</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how engineering and operations teams are replacing months of
              development with minutes of visual building.
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
                <Workflow className="h-4 w-4" />
                Build your first workflow in 5 minutes
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Stop coding. Start building.
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Join thousands of teams who replaced months of development with
                minutes of visual workflow creation. Free forever for small teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Start Building Free
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
                  Free forever plan
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  500+ templates included
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
              <h2 className="text-[var(--section-title-size)] font-bold tracking-tight mb-4">
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about visual workflow automation.
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
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-12">
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
                Visual workflow automation for modern teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Visual Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    AI Assistant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Integrations
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
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    API Reference
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