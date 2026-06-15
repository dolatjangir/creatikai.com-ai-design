"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence ,Variants} from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Zap,
  BarChart3,
  Target,
  Layers,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  X,
  Menu,
  Lightbulb,
  Cpu,
  Workflow,
  ShieldCheck,
  Clock,
  Users,
  Globe,
  Rocket,
  BrainCircuit,
  LineChart,
  Settings,
  Award,
  MessageSquare,
  Mail,
  Phone,
  Play,
  ChevronRight,
  Activity,
  PieChart,
  Database,
  Lock,
} from "lucide-react";

/* ============================================
   BUSINESS ENHANCE SERVICE PAGE
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
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "4.5x", label: "Avg Efficiency Gain" },
  { value: "68%", label: "Cost Reduction" },
  { value: "3.2x", label: "Revenue Growth" },
  { value: "99.9%", label: "Process Uptime" },
];

const challenges = [
  {
    icon: Settings,
    title: "Operational Inefficiency",
    desc: "Manual processes, siloed departments, and legacy systems drain resources and slow decision-making across your organization.",
  },
  {
    icon: Database,
    title: "Data Fragmentation",
    desc: "Critical business intelligence trapped in disconnected spreadsheets, databases, and apps—impossible to unify or act upon.",
  },
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    desc: "Competitors launch faster while your teams waste weeks on approvals, handoffs, and redundant workflows.",
  },
  {
    icon: Users,
    title: "Talent Bottlenecks",
    desc: "Your best people spend 60% of their time on repetitive tasks instead of high-value strategic work that drives growth.",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Process Automation",
    desc: "Intelligent bots handle repetitive workflows—data entry, approvals, reporting—while your team focuses on strategy.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Forecast demand, churn, and market shifts with machine learning models trained on your historical and real-time data.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
  {
    icon: Target,
    title: "Smart Resource Allocation",
    desc: "AI optimizes workforce deployment, budget distribution, and inventory positioning based on dynamic business signals.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
  },
  {
    icon: ShieldCheck,
    title: "Risk Intelligence",
    desc: "Proactive identification of operational, financial, and compliance risks before they impact your bottom line.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    desc: "Design, automate, and optimize complex cross-departmental workflows with visual drag-and-drop process builders.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Globe,
    title: "Global Scalability",
    desc: "Expand into new markets with localized automation, multi-currency operations, and compliance-aware AI agents.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    desc: "We map your current processes, identify bottlenecks, and quantify inefficiency costs across departments.",
    features: ["Process mapping", "Bottleneck analysis", "ROI modeling"],
  },
  {
    number: "02",
    title: "AI Strategy Design",
    desc: "Our architects design a tailored enhancement roadmap prioritizing quick wins and long-term transformation.",
    features: ["Custom AI models", "Integration planning", "Change management"],
  },
  {
    number: "03",
    title: "Intelligent Implementation",
    desc: "Deploy AI agents, automation workflows, and analytics dashboards with minimal disruption to operations.",
    features: ["Phased rollout", "Staff training", "System integration"],
  },
  {
    number: "04",
    title: "Continuous Optimization",
    desc: "Our AI monitors performance 24/7, auto-tuning processes and surfacing new optimization opportunities monthly.",
    features: ["Performance monitoring", "Auto-tuning", "Monthly insights"],
  },
];

const testimonials = [
  {
    quote:
      "Creatik AI's Business Enhance transformed our operations. We automated 73% of back-office tasks and redeployed talent to customer-facing innovation.",
    author: "David Park",
    role: "COO, Meridian Logistics",
    metric: "73%",
    metricLabel: "Tasks Automated",
  },
  {
    quote:
      "The predictive analytics capability alone saved us ₹18.32 LAC in the first quarter by preventing supply chain disruptions before they happened.",
    author: "Amara Okafor",
    role: "VP Operations, Apex Manufacturing",
    metric: "₹84L",
    metricLabel: "Q1 Savings",
  },
  {
    quote:
      "Our time-to-market dropped from 14 weeks to 6 weeks. Business Enhance didn't just optimize us—it fundamentally reinvented how we operate.",
    author: "James Chen",
    role: "CEO, NovaTech Solutions",
    metric: "57%",
    metricLabel: "Faster Launch",
  },
];

const resultsMetrics = [
  {
    icon: TrendingUp,
    value: "4.5x",
    label: "Average Efficiency Gain",
    desc: "Across all business processes within 90 days",
  },
  {
    icon: BarChart3,
    value: "68%",
    label: "Operational Cost Reduction",
    desc: "Through intelligent automation and resource optimization",
  },
  {
    icon: Rocket,
    value: "3.2x",
    label: "Revenue Acceleration",
    desc: "Faster go-to-market and improved customer conversion",
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "Process Reliability",
    desc: "AI-monitored uptime with automatic failover and recovery",
  },
];

const faqs = [
  {
    q: "How long does a typical Business Enhance engagement take?",
    a: "Most clients see measurable results within 4–6 weeks. Full transformation programs typically span 3–6 months depending on organizational complexity and scope.",
  },
  {
    q: "Will this replace our existing workforce?",
    a: "No. Business Enhance augments your team by eliminating repetitive tasks, freeing people for higher-value creative and strategic work. Most clients actually expand hiring in growth roles.",
  },
  {
    q: "How do you handle integration with our legacy systems?",
    a: "We support 200+ enterprise integrations including SAP, Oracle, Salesforce, Microsoft Dynamics, and custom APIs. Our integration layer acts as a bridge without requiring system replacement.",
  },
  {
    q: "Is our business data secure during AI processing?",
    a: "Absolutely. We maintain SOC 2 Type II, ISO 27001, and GDPR compliance. Your data is encrypted at rest and in transit, and we offer private cloud and on-premise deployment options.",
  },
  {
    q: "What industries do you specialize in for Business Enhance?",
    a: "We have deep expertise in manufacturing, retail, logistics, financial services, healthcare, and professional services. Each implementation is tailored to industry-specific workflows and compliance requirements.",
  },
];

export default function BusinessEnhancePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">
  

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-glow)] opacity-30 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-glow-strong)] opacity-20 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-40" />
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
                <Award className="h-4 w-4" />
                Enterprise Business Transformation
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Supercharge Your Operations with{" "}
                <span className="gradient-text">
                  AI-Powered Business Enhancement
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Eliminate inefficiencies, automate complex workflows, and unlock
                hidden growth opportunities. Creatik AI transforms how your
                business operates—end to end.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Start Enhancing
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)]" />
                  Watch How It Works
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-white overflow-hidden">
                  {/* Mock Business Intelligence Dashboard */}
                  <div className="bg-[var(--color-section-alt)] p-4 border-b border-[var(--color-border)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-xs font-medium text-[var(--color-text-muted)]">
                      Creatik AI — Business Command Center
                    </div>
                  </div>
                  <div className="p-6 grid gap-5">
                    {/* Top Metrics */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { label: "Efficiency", val: "+147%", color: "text-[var(--color-emerald)]" },
                        { label: "Cost Saved", val: "₹18.32L", color: "text-[var(--color-primary)]" },
                        { label: "Tasks Auto", val: "24.5K", color: "text-[var(--color-purple)]" },
                        { label: "Uptime", val: "99.98%", color: "text-[var(--color-cyan)]" },
                      ].map((m) => (
                        <div key={m.label} className="rounded-lg border border-[var(--color-border)] bg-white p-3 text-center">
                          <div className={`text-lg font-bold ${m.color}`}>{m.val}</div>
                          <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Main Chart Area */}
                    <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                          Process Efficiency Trend
                        </div>
                        <div className="flex gap-2">
                          <span className="text-[10px] px-2 py-1 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-medium">AI Optimized</span>
                          <span className="text-[10px] px-2 py-1 rounded bg-[var(--color-section-alt)] text-[var(--color-text-muted)]">Baseline</span>
                        </div>
                      </div>
                      <div className="h-32 flex items-end gap-2 px-2">
                        {[35, 42, 38, 45, 52, 48, 58, 65, 72, 78, 85, 92].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full relative">
                              <div
                                className="w-full rounded-t-sm bg-[var(--color-primary)] opacity-20"
                                style={{ height: `${h * 0.6}px` }}
                              />
                              <div
                                className="absolute bottom-0 w-full rounded-t-sm bg-[var(--color-primary)]"
                                style={{ height: `${h * 0.4}px` }}
                              />
                            </div>
                            <span className="text-[9px] text-[var(--color-text-faint)]">{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Widgets */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                          Active AI Agents
                        </div>
                        <div className="space-y-3">
                          {[
                            { name: "Invoice Processor", status: "Running", load: 94 },
                            { name: "Demand Forecaster", status: "Running", load: 87 },
                            { name: "Risk Monitor", status: "Idle", load: 34 },
                          ].map((agent) => (
                            <div key={agent.name} className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-medium text-[var(--color-text-primary)]">{agent.name}</div>
                                <div className="text-[10px] text-[var(--color-text-muted)]">{agent.status}</div>
                              </div>
                              <div className="w-16 h-1.5 rounded-full bg-[var(--color-border-light)] overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${agent.status === "Running" ? "bg-[var(--color-emerald)]" : "bg-[var(--color-amber)]"}`}
                                  style={{ width: `${agent.load}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                          Optimization Queue
                        </div>
                        <div className="space-y-2">
                          {[
                            { task: "Workflow: HR Onboarding", type: "Auto-fix", priority: "High" },
                            { task: "Report: Q3 Analytics", type: "Generate", priority: "Med" },
                            { task: "Alert: Inventory Low", type: "Notify", priority: "High" },
                          ].map((task, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                              <div className={`h-2 w-2 rounded-full ${task.priority === "High" ? "bg-red-400" : "bg-[var(--color-amber)]"}`} />
                              <span className="text-[var(--color-text-secondary)] flex-1 truncate">{task.task}</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--color-section-alt)] text-[var(--color-text-muted)]">{task.type}</span>
                            </div>
                          ))}
                        </div>
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
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">+147%</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Efficiency</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <BrainCircuit className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">12 AI Agents</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Active Now</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">SOC 2</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Compliant</div>
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
            Trusted by forward-thinking enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Microsoft", "Salesforce", "SAP", "Oracle", "Deloitte", "McKinsey", "KPMG", "Accenture"].map(
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

      {/* Challenges Section */}
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
              className="text-2xl font-bold tracking-tight mb-4"
            >
              The hidden cost of{" "}
              <span className="text-[var(--color-text-faint)]">
                business as usual
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Most organizations lose 30–40% of productive capacity to
              inefficiencies they can't even see. We help you find and fix them.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {challenges.map((challenge) => (
              <motion.div
                key={challenge.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-icon-bg-1)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <challenge.icon className="h-6 w-6 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                  {challenge.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {challenge.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              <Cpu className="h-4 w-4" />
              Core Capabilities
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Intelligent tools for{" "}
              <span className="gradient-text">modern enterprises</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              From process automation to predictive intelligence, every
              capability is designed to compound your competitive advantage.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: cap.color }}
                >
                  <cap.icon
                    className="h-7 w-7"
                    style={{ color: cap.iconColor }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {cap.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {cap.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-[var(--section-py)]">
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
              Our Methodology
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              From diagnosis to{" "}
              <span className="gradient-text">continuous optimization</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              A proven four-phase approach that delivers measurable results within
              weeks, not years.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Interactive Step Selector */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  onClick={() => setActiveProcess(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    activeProcess === idx
                      ? "border-[var(--color-primary)] bg-white shadow-[var(--shadow-lg)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border-hover)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        activeProcess === idx
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-section-alt)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 ${
                          activeProcess === idx
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeProcess === idx && (
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
                              {step.features.map((f) => (
                                <span
                                  key={f}
                                  className="inline-flex items-center gap-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3 py-1 text-xs font-medium text-[var(--color-badge-text)]"
                                >
                                  <CheckCircle2 className="h-3 w-3" />
                                  {f}
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

            {/* Right: Visual Process Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block sticky top-32"
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-xl)]">
                <div className="text-center mb-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] mb-4">
                    {activeProcess === 0 && <Lightbulb className="h-8 w-8 text-[var(--color-primary)]" />}
                    {activeProcess === 1 && <BrainCircuit className="h-8 w-8 text-[var(--color-purple)]" />}
                    {activeProcess === 2 && <Rocket className="h-8 w-8 text-[var(--color-cyan)]" />}
                    {activeProcess === 3 && <Activity className="h-8 w-8 text-[var(--color-emerald)]" />}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {processSteps[activeProcess].title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    {processSteps[activeProcess].desc}
                  </p>
                </div>

                <div className="relative h-48 bg-[var(--color-section-alt)] rounded-xl overflow-hidden p-4">
                  {/* Animated process visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-2 w-full px-4">
                      {processSteps.map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                          <div
                            className={`h-3 w-3 rounded-full transition-all duration-500 ${
                              i <= activeProcess
                                ? "bg-[var(--color-primary)] scale-125"
                                : "bg-[var(--color-border)]"
                            }`}
                          />
                          <div
                            className={`h-16 w-full rounded-lg transition-all duration-500 ${
                              i === activeProcess
                                ? "bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]"
                                : i < activeProcess
                                ? "bg-[var(--color-emerald)]/10 border border-[var(--color-emerald)]"
                                : "bg-white border border-[var(--color-border)]"
                            }`}
                          />
                          <span
                            className={`text-[10px] font-medium ${
                              i <= activeProcess
                                ? "text-[var(--color-primary)]"
                                : "text-[var(--color-text-faint)]"
                            }`}
                          >
                            {i < activeProcess ? "Complete" : i === activeProcess ? "Active" : "Pending"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Timeline", value: activeProcess === 0 ? "Week 1-2" : activeProcess === 1 ? "Week 3-4" : activeProcess === 2 ? "Week 5-10" : "Ongoing" },
                    { label: "Team Size", value: "4-6 Experts" },
                    { label: "Deliverable", value: activeProcess === 0 ? "Audit Report" : activeProcess === 1 ? "Strategy Doc" : activeProcess === 2 ? "Live System" : "Monthly Insights" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-[var(--color-section-alt)] p-3 text-center">
                      <div className="text-xs text-[var(--color-text-muted)] mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-[var(--color-text-primary)]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
              Results that{" "}
              <span className="gradient-text">speak for themselves</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Average performance improvements reported by Business Enhance
              clients within the first 90 days.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {resultsMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] mb-5 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <metric.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-extrabold text-[var(--color-text-primary)] mb-2">
                  {metric.value}
                </div>
                <div className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
                  {metric.label}
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              Trusted by transformation{" "}
              <span className="gradient-text">leaders</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how organizations across industries are redefining
              operational excellence with Creatik AI.
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
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt)]">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to transform your business?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Schedule a free operational audit and discover exactly where
                AI can unlock hidden value in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Book Free Audit
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Talk to an Expert
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  48-hour audit delivery
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  NDA protection guaranteed
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[var(--section-py)]">
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
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about Business Enhance
                engagements.
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