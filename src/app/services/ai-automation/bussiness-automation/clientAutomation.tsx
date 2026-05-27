"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Sparkles,
  Zap,
  Workflow,
  Settings,
  Bot,
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
  Shield,
  Repeat,
  GitBranch,
  Cpu,
  Gauge,
  Activity,
  Bell,
  Database,
  Lock,
  Unlock,
  FileCheck,
  AlertTriangle,
  RefreshCw,
  Server,
  Cloud,
  Code,
  Puzzle,
  Share2,
  ChevronRight,
  Play,
  Plus,
  Minus,
  MoveRight,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  UserPlus,
  Eye,
} from "lucide-react";

/* ============================================
   BUSINESS AUTOMATION SERVICE PAGE
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
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "90%", label: "Tasks Automated" },
  { value: "10x", label: "Faster Workflows" },
  { value: "75%", label: "Cost Savings" },
  { value: "99.99%", label: "Uptime SLA" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Manual Bottlenecks",
    desc: "Your team wastes hours on repetitive data entry, approvals, and handoffs. Human speed becomes the ceiling on business growth.",
  },
  {
    icon: AlertTriangle,
    title: "Error-Prone Processes",
    desc: "Manual work breeds mistakes—duplicate records, missed follow-ups, incorrect calculations. Each error costs money and trust.",
  },
  {
    icon: Database,
    title: "Siloed Systems",
    desc: "Your CRM, ERP, and tools don't talk to each other. Data lives in islands, forcing swivel-chair integration and stale information.",
  },
  {
    icon: BarChart3,
    title: "Zero Visibility",
    desc: "You can't optimize what you can't see. Without workflow analytics, inefficiencies hide in plain sight for years.",
  },
];

const platformModules = [
  {
    icon: Bot,
    title: "Intelligent Process Bots",
    desc: "AI agents that observe, learn, and execute complex business processes—handling exceptions intelligently without human intervention.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
    metric: "24/7",
    metricLabel: "Autonomous Operation",
  },
  {
    icon: GitBranch,
    title: "Visual Workflow Builder",
    desc: "Drag-and-drop process design with conditional logic, parallel branches, and dynamic routing. No code required, full power available.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
    metric: "500+",
    metricLabel: "Pre-built Templates",
  },
  {
    icon: Shield,
    title: "Governance & Compliance",
    desc: "Built-in audit trails, approval hierarchies, role-based access, and regulatory compliance checks that run automatically.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
    metric: "SOC 2",
    metricLabel: "Type II Certified",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    desc: "Live dashboards tracking every workflow instance, bottleneck identification, and predictive alerts before failures occur.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
    metric: "<50ms",
    metricLabel: "Alert Latency",
  },
  {
    icon: Cpu,
    title: "Cognitive Document AI",
    desc: "Extract, classify, and route documents automatically. Invoices, contracts, forms—read, understood, and processed without templates.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
    metric: "98.7%",
    metricLabel: "Extraction Accuracy",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing Workflows",
    desc: "When exceptions occur, AI diagnoses the issue, applies fixes, and resumes execution—learning from each incident to prevent recurrence.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
    metric: "85%",
    metricLabel: "Auto-Resolution Rate",
  },
];

const automationUseCases = [
  {
    icon: FileCheck,
    title: "Invoice Processing",
    desc: "Extract data from any invoice format, match to POs, route for approval, and post to ERP—fully touchless from receipt to payment.",
    timeSaved: "94%",
    gradient: "var(--gradient-course-1)",
    iconColor: "var(--color-course-icon-1)",
  },
  {
    icon: UserPlus,
    title: "Employee Onboarding",
    desc: "From offer letter to first day: provision accounts, schedule training, assign hardware, and notify stakeholders automatically.",
    timeSaved: "87%",
    gradient: "var(--gradient-course-2)",
    iconColor: "var(--color-course-icon-2)",
  },
  {
    icon: Bell,
    title: "Customer Support Triage",
    desc: "Classify tickets by urgency and intent, auto-resolve common issues, and route complex cases to the right specialist with full context.",
    timeSaved: "76%",
    gradient: "var(--gradient-course-3)",
    iconColor: "var(--color-course-icon-3)",
  },
  {
    icon: BarChart3,
    title: "Sales Pipeline Automation",
    desc: "Enrich leads, score prospects, trigger follow-ups, update forecasts, and generate proposals—without a single manual touch.",
    timeSaved: "82%",
    gradient: "var(--gradient-course-4)",
    iconColor: "var(--color-course-icon-4)",
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

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "AES-256 encryption for data at rest and TLS 1.3 for data in transit. Your automation data never travels unprotected.",
  },
  {
    icon: Shield,
    title: "Zero-Trust Architecture",
    desc: "Every workflow execution is authenticated, authorized, and audited. No implicit trust—ever.",
  },
  {
    icon: FileCheck,
    title: "Compliance Automation",
    desc: "Built-in GDPR, HIPAA, SOX, and PCI-DSS compliance checks that run automatically on every process.",
  },
  {
    icon: Eye,
    title: "Immutable Audit Logs",
    desc: "Complete, tamper-proof records of every action, decision, and data touch. Court-admissible and regulator-ready.",
  },
];

const testimonials = [
  {
    quote:
      "Creatik AI automated our entire procure-to-pay process. What took 14 days now completes in 4 hours—with 99.7% accuracy and zero manual intervention.",
    author: "Victor Martinez",
    role: "CFO, Apex Manufacturing Group",
    metric: "84x",
    metricLabel: "Faster Processing",
  },
  {
    quote:
      "We deployed 47 workflows in our first month. The visual builder meant our business analysts could build what used to require a team of developers.",
    author: "Sarah Chen",
    role: "VP of Operations, TechFlow Inc.",
    metric: "47",
    metricLabel: "Workflows Deployed",
  },
  {
    quote:
      "The self-healing capability is remarkable. Our customer onboarding workflow used to fail 3-4 times a week. Now it resolves issues before we even know they existed.",
    author: "James O'Brien",
    role: "CTO, CloudScale Solutions",
    metric: "99.9%",
    metricLabel: "Workflow Uptime",
  },
];

const faqs = [
  {
    q: "How long does it take to deploy a workflow?",
    a: "Simple workflows go live in under 30 minutes using our pre-built templates. Complex enterprise processes typically deploy within 2-5 business days with our implementation team. Most clients have their first automation running within 24 hours of signup.",
  },
  {
    q: "Do we need developers to use Creatik AI Automation?",
    a: "No. Our visual workflow builder is designed for business users. Citizen developers can build 90% of automations without writing code. For complex integrations, our professional services team handles the technical work.",
  },
  {
    q: "What happens if a workflow fails or encounters an exception?",
    a: "Our self-healing AI diagnoses the issue, attempts automatic resolution using learned patterns, and escalates to humans only when necessary. You'll receive detailed failure analysis and suggested fixes. 85% of exceptions resolve without human intervention.",
  },
  {
    q: "Can Creatik AI integrate with our legacy systems?",
    a: "Yes. We support REST APIs, SOAP, webhooks, database connectors, file-based integrations (CSV, XML, EDI), and RPA for systems without APIs. Our integration team has connected to systems dating back to the 1990s.",
  },
  {
    q: "How do you ensure compliance and data security?",
    a: "We maintain SOC 2 Type II, ISO 27001, and GDPR compliance. All data is encrypted, access is role-based with MFA, and complete audit trails are maintained. We offer private cloud, on-premise, and hybrid deployment options for regulated industries.",
  },
];

export default function BusinessAutomationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [animatedNodes, setAnimatedNodes] = useState<number[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedNodes((prev) => {
        const next = [...prev];
        if (next.length < 5) next.push(next.length);
        else next.shift();
        return next;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">
   

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-glow)] opacity-20 blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-[var(--color-glow-strong)] opacity-15 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-25" />
          
          {/* Animated circuit lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 H40 M60 50 H100 M50 0 V40 M50 60 V100" stroke="currentColor" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="50" r="3" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
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
                <Zap className="h-4 w-4" />
                Enterprise Workflow Automation
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Automate the Work That{" "}
                <span className="gradient-text">
                  Slows You Down
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Replace manual processes with intelligent, self-healing workflows.
                Creatik AI observes, learns, and automates your business operations
                end-to-end—while you focus on what matters.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Build Your First Workflow
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  See Automation Live
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

            {/* Workflow Visualization Mockup */}
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
                        Creatik Automation Studio — Invoice Processing v2.4
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-5 px-2 rounded bg-emerald-500/20 flex items-center text-[10px] text-emerald-400 font-semibold">
                        LIVE
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Workflow Canvas */}
                    <div className="relative h-80">
                      {/* Nodes */}
                      {[
                        { x: 10, y: 40, icon: Mail, label: "Email Trigger", status: "active", color: "bg-[var(--color-primary)]" },
                        { x: 30, y: 40, icon: Bot, label: "AI Extract", status: "active", color: "bg-[var(--color-purple)]" },
                        { x: 50, y: 20, icon: FileCheck, label: "Validate", status: "active", color: "bg-[var(--color-cyan)]" },
                        { x: 50, y: 60, icon: AlertTriangle, label: "Exception", status: "idle", color: "bg-[var(--color-amber)]" },
                        { x: 70, y: 40, icon: GitBranch, label: "Route", status: "active", color: "bg-[var(--color-emerald)]" },
                        { x: 90, y: 30, icon: CheckCircle2, label: "Post ERP", status: "active", color: "bg-[var(--color-primary)]" },
                        { x: 90, y: 50, icon: Bell, label: "Notify", status: "active", color: "bg-[var(--color-purple)]" },
                      ].map((node, i) => (
                        <motion.div
                          key={i}
                          className="absolute"
                          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <div className={`relative flex flex-col items-center gap-1.5 ${animatedNodes.includes(i) ? "scale-110" : ""} transition-transform`}>
                            <div className={`h-10 w-10 rounded-lg ${node.color} flex items-center justify-center shadow-lg`}>
                              <node.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-[9px] text-slate-400 whitespace-nowrap">{node.label}</span>
                            {node.status === "active" && (
                              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            )}
                          </div>
                        </motion.div>
                      ))}

                      {/* Connection Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <defs>
                          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        <path d="M 55 128 Q 130 128, 175 128" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 235 128 Q 310 70, 355 70" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 235 128 Q 310 185, 355 185" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" className="opacity-30" />
                        <path d="M 395 70 Q 470 100, 505 100" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 395 185 Q 470 155, 505 155" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                        <path d="M 395 70 Q 470 70, 505 70" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                      </svg>

                      {/* Animated data packet */}
                      <motion.div
                        className="absolute h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                        animate={{
                          left: ["10%", "30%", "50%", "70%", "90%"],
                          top: ["40%", "40%", "20%", "40%", "30%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-4 grid grid-cols-4 gap-3 pt-4 border-t border-[#334155]">
                      {[
                        { label: "Running", value: "12", color: "text-emerald-400" },
                        { label: "Completed", value: "1,847", color: "text-[var(--color-primary)]" },
                        { label: "Exceptions", value: "3", color: "text-amber-400" },
                        { label: "Avg Time", value: "4.2s", color: "text-slate-300" },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                          <div className="text-[10px] text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Cards */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <RefreshCw className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">Self-Healing</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">2 issues auto-fixed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Gauge className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">99.99%</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Uptime this month</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">47 Bots Active</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Across 6 departments</div>
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
            Powering automation for enterprise leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["IBM", "Deloitte", "Accenture", "PwC", "KPMG", "McKinsey", "EY", "Capgemini"].map(
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
      <section id="solutions" className="py-[var(--section-py)]">
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
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Manual work is costing you{" "}
              <span className="text-[var(--color-text-faint)]">
                more than you think
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Every hour your team spends on repetitive tasks is an hour not spent
              on strategy, innovation, and growth. The hidden costs are staggering.
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

      {/* Platform Modules */}
      <section id="platform" className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              Automation Platform
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Six powerful modules.{" "}
              <span className="gradient-text">One intelligent platform.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Everything you need to discover, design, deploy, and optimize
              enterprise-grade automation at any scale.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {platformModules.map((module) => (
              <motion.div
                key={module.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: module.color }}
                  >
                    <module.icon
                      className="h-7 w-7"
                      style={{ color: module.iconColor }}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {module.metric}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {module.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {module.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-[var(--section-py)]">
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
              <Workflow className="h-4 w-4" />
              Popular Use Cases
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Automate what matters{" "}
              <span className="gradient-text">most</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Pre-built workflow templates for the most common—and costly—manual
              processes across every department.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {automationUseCases.map((useCase) => (
              <motion.div
                key={useCase.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white hover:shadow-[var(--shadow-xl)] transition-all duration-300"
              >
                <div
                  className="h-1.5"
                  style={{ background: useCase.gradient }}
                />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: "var(--color-icon-bg-1)" }}
                    >
                      <useCase.icon
                        className="h-7 w-7"
                        style={{ color: useCase.iconColor }}
                      />
                    </div>
                    <div className="rounded-full bg-[var(--color-emerald)]/10 px-4 py-1.5 text-sm font-bold text-[var(--color-emerald)] border border-[var(--color-emerald)]/20">
                      {useCase.timeSaved} faster
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {useCase.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
                    Deploy template <ArrowRight className="h-4 w-4" />
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
              <Puzzle className="h-4 w-4" />
              Integrations
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Connects to everything{" "}
              <span className="gradient-text">you already use</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              200+ native integrations and universal API connectivity. If it has
              data, Creatik AI can automate it.
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm text-[var(--color-text-muted)]">
              Plus 200+ more integrations via API, webhook, and custom connectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-[var(--section-py)]">
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
                Enterprise Security
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tight mb-6"
              >
                Automation you can{" "}
                <span className="gradient-text">trust completely</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[var(--color-text-secondary)] mb-10"
              >
                When AI controls business-critical processes, security isn't a
                feature—it's the foundation. Every workflow runs inside a
                fortress of protection.
              </motion.p>

              <div className="space-y-6">
                {securityFeatures.map((feature, idx) => (
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
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-xl)]">
                <div className="text-center mb-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-icon-bg-1)] mb-4">
                    <Shield className="h-10 w-10 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    Security Command Center
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Real-time protection status across all workflows
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Encryption Status", value: "AES-256 Active", status: "secure", icon: Lock },
                    { label: "Access Control", value: "RBAC + MFA", status: "secure", icon: UserCheck },
                    { label: "Compliance Mode", value: "SOC 2 / GDPR", status: "secure", icon: FileCheck },
                    { label: "Threat Detection", value: "0 anomalies", status: "secure", icon: Activity },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 rounded-xl bg-[var(--color-section-alt)] border border-[var(--color-border)]">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-text-primary)]">{item.label}</div>
                          <div className="text-xs text-[var(--color-text-muted)]">{item.value}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[var(--color-emerald)]" />
                        <span className="text-xs font-semibold text-[var(--color-emerald)]">Active</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)]">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-badge-text)]" />
                    <span className="text-sm font-semibold text-[var(--color-badge-text)]">Last Security Audit</span>
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    Passed with zero findings on May 15, 2026. Next audit scheduled for August 2026.
                  </div>
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
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Trusted by operations{" "}
              <span className="gradient-text">leaders worldwide</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how enterprises are transforming efficiency, accuracy, and
              scale with intelligent automation.
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
                <Zap className="h-4 w-4" />
                Free workflow audit included
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Stop doing work that machines should handle
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Join 1,500+ enterprises that have automated 90%+ of their
                repetitive processes. Your first workflow is free to build and
                test—no commitment required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Schedule Demo
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Free implementation support
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
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about deploying intelligent
                automation in your organization.
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

/* Helper component for security section */
function UserCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}