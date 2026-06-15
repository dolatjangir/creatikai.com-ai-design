"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence,Variants } from "framer-motion";
import {
  Sparkles,
  Zap,
  Target,
  Users,
  Mail,
  Phone,
  MessageSquare,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  X,
  Menu,
  Layers,
  Globe,
  TrendingUp,
  Clock,
  Shield,
  Bell,
  Funnel,
  Filter,
  Search,
  UserPlus,
  Send,
  Inbox,
  Repeat,
  Award,
  Flame,
  Heart,
  ThumbsUp,
  ChevronRight,
  Play,
  Magnet,
  Radio,
  Activity,
  PieChart,
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
  Hexagon,
  Octagon,
  Triangle,
  Square,
  Circle,
} from "lucide-react";

/* ============================================
   LEAD AUTOMATION SERVICE PAGE
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

const navLinks = [
  { label: "Capture", href: "#capture" },
  { label: "Nurture", href: "#nurture" },
  { label: "Convert", href: "#convert" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "5.2x", label: "Lead Conversion" },
  { value: "73%", label: "Response Rate" },
  { value: "24/7", label: "Auto-Engagement" },
  { value: "10M+", label: "Leads Processed" },
];

const painPoints = [
  {
    icon: Inbox,
    title: "Leads Go Cold",
    desc: "The average lead response time is 42 hours. By then, 60% of buyers have already chosen a competitor. Speed wins deals.",
  },
  {
    icon: Filter,
    title: "Poor Lead Qualification",
    desc: "Sales teams waste 50% of their time on unqualified prospects. Without scoring, every lead looks the same.",
  },
  {
    icon: Repeat,
    title: "Broken Follow-Up",
    desc: "Manual follow-up sequences fail after 2-3 touches. Leads slip through cracks because humans forget, systems don't.",
  },
  {
    icon: BarChart3,
    title: "Zero Attribution",
    desc: "You can't optimize what you can't track. Most teams have no idea which touchpoint actually converted the lead.",
  },
];

const captureChannels = [
  {
    icon: Globe,
    title: "Web Forms & Landing Pages",
    desc: "Smart forms that adapt fields based on visitor behavior, auto-enrich with firmographic data, and trigger instant workflows.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
    metric: "+340%",
    metricLabel: "Form Conversions",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Conversational AI",
    desc: "Qualify leads 24/7 with intelligent chatbots that book meetings, answer questions, and hand off to sales at the perfect moment.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
    metric: "24/7",
    metricLabel: "Always On",
  },
  {
    icon: Mail,
    title: "Email Capture & Enrichment",
    desc: "Capture from any source, append 50+ data points per lead, and verify deliverability before a single message sends.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
    metric: "98.5%",
    metricLabel: "Data Accuracy",
  },
  {
    icon: Phone,
    title: "Inbound Call Tracking",
    desc: "Route, record, transcribe, and score every inbound call. AI extracts intent, urgency, and next-best-action automatically.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
    metric: "100%",
    metricLabel: "Call Coverage",
  },
];

const nurtureSequences = [
  {
    step: "01",
    title: "Instant Response",
    desc: "Sub-second acknowledgment via email, SMS, or chat. The first to respond wins the relationship.",
    channels: ["Email", "SMS", "Push"],
    timing: "< 1 second",
  },
  {
    step: "02",
    title: "AI Qualification",
    desc: "Score leads on 40+ behavioral and firmographic signals. Route hot leads to sales, nurture cold ones automatically.",
    channels: ["Behavioral", "Firmographic", "Intent"],
    timing: "Real-time",
  },
  {
    step: "03",
    title: "Personalized Journey",
    desc: "Dynamic content paths based on industry, role, engagement history, and buying stage. No two leads see the same sequence.",
    channels: ["Email", "Content", "Ads"],
    timing: "Adaptive",
  },
  {
    step: "04",
    title: "Sales Handoff",
    desc: "Perfectly timed transfer to sales with full context, conversation history, and recommended talking points.",
    channels: ["CRM", "Slack", "Calendar"],
    timing: "At Peak Interest",
  },
];

const conversionFeatures = [
  {
    icon: Target,
    title: "Predictive Lead Scoring",
    desc: "ML models analyze 200+ signals to predict conversion probability. Focus sales effort where it actually closes deals.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Flame,
    title: "Hot Lead Alerts",
    desc: "Instant notifications when leads hit engagement thresholds—open emails, visit pricing, or request demos.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "AI books meetings at optimal times based on lead timezone, sales rep availability, and historical close rates.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
  },
  {
    icon: Heart,
    title: "Re-engagement Engine",
    desc: "Automatically revive dormant leads with personalized win-back campaigns based on their original interest signals.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
  },
];

const analyticsCards = [
  {
    icon: Funnel,
    title: "Funnel Analytics",
    desc: "See exactly where leads drop off—from first touch to closed-won. Identify bottlenecks and optimize conversion at every stage.",
    metric: "12 stages",
    metricLabel: "Tracked",
  },
  {
    icon: PieChart,
    title: "Channel Attribution",
    desc: "Multi-touch attribution that credits every touchpoint fairly. Know which channels, campaigns, and content actually drive revenue.",
    metric: "MTA + LTA",
    metricLabel: "Models",
  },
  {
    icon: Activity,
    title: "Engagement Heatmaps",
    desc: "Visualize exactly how leads interact with your content, emails, and site. Spot patterns that predict conversion before it happens.",
    metric: "Real-time",
    metricLabel: "Updates",
  },
  {
    icon: TrendingUp,
    title: "Revenue Forecasting",
    desc: "AI predicts pipeline value, close probability, and revenue timing based on lead behavior and historical patterns.",
    metric: "±8%",
    metricLabel: "Accuracy",
  },
];

const testimonials = [
  {
    quote:
      "Creatik AI cut our lead response time from 6 hours to 11 seconds. Our conversion rate tripled in the first quarter. The speed alone transformed our business.",
    author: "Alex Rivera",
    role: "VP of Sales, CloudFirst Solutions",
    metric: "3x",
    metricLabel: "Conversion Rate",
  },
  {
    quote:
      "We used to lose 40% of leads to poor follow-up. Now every lead gets a personalized 12-touch sequence. Our pipeline grew 280% with the same team size.",
    author: "Mei Tanaka",
    role: "Head of Growth, NexGen Health",
    metric: "280%",
    metricLabel: "Pipeline Growth",
  },
  {
    quote:
      "The predictive scoring is scary accurate. We stopped chasing bad leads and focused on the 20% that actually close. Sales productivity jumped 4x.",
    author: "David Osei",
    role: "Sales Director, Apex Logistics",
    metric: "4x",
    metricLabel: "Sales Productivity",
  },
];

const faqs = [
  {
    q: "How fast can Creatik AI respond to a new lead?",
    a: "Sub-second. Our automation triggers instant acknowledgment via email, SMS, or chat the moment a lead submits a form, clicks a link, or calls your number. Average first response time is under 1 second—compared to the industry average of 42 hours.",
  },
  {
    q: "Can it integrate with our existing CRM and sales tools?",
    a: "Yes. We offer native integrations with Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, and 50+ other tools. Our open API and webhook system connect to virtually any platform your team already uses.",
  },
  {
    q: "How does the AI qualify leads vs. just capturing them?",
    desc: "Our AI scores leads on 40+ dimensions including firmographic data (company size, industry, revenue), behavioral signals (page views, content downloads, email engagement), and intent indicators (pricing page visits, demo requests, competitor comparisons). Only qualified leads reach your sales team.",
  },
  {
    q: "What happens if a lead doesn't respond to the first few touches?",
    a: "Our re-engagement engine automatically adjusts frequency, channel, and messaging based on lead behavior. Dormant leads enter long-term nurture sequences with valuable content, case studies, and seasonal offers. We revive an average of 23% of cold leads back to active status.",
  },
  {
    q: "Is my lead data secure and compliant with regulations?",
    a: "Absolutely. We maintain SOC 2 Type II, GDPR, and CCPA compliance. All lead data is encrypted at rest and in transit. We offer data residency options, custom retention policies, and full audit trails for every data touch.",
  },
];

export default function LeadAutomationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeNurture, setActiveNurture] = useState(0);
  const [animatedLeads, setAnimatedLeads] = useState<number[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLeads((prev) => {
        const next = [...prev];
        if (next.length < 6) next.push(next.length);
        else next.shift();
        return next;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-[var(--font-family)] antialiased">
  

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-glow)] opacity-25 blur-3xl translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-[var(--color-glow-strong)] opacity-15 blur-3xl -translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-bubble-bg)_0%,transparent_70%)] opacity-30" />
          
          {/* Funnel particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] opacity-40"
                initial={{ 
                  x: `${20 + Math.random() * 60}%`, 
                  y: "10%",
                  scale: 0 
                }}
                animate={{ 
                  y: "80%",
                  scale: [0, 1, 0.5],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeIn"
                }}
              />
            ))}
          </div>
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
                <Magnet className="h-4 w-4" />
                Intelligent Lead Automation
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                Capture, Nurture & Convert{" "}
                <span className="gradient-text">
                  Leads on Autopilot
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Every lead is a conversation waiting to happen. Creatik AI ensures
                no opportunity slips through the cracks—with instant response,
                intelligent qualification, and personalized nurture that converts
                strangers into customers while you sleep.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Start Capturing Leads
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)] fill-[var(--color-primary)]" />
                  See It In Action
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

            {/* Lead Funnel Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-white overflow-hidden">
                  <div className="bg-[var(--color-section-alt)] p-3 border-b border-[var(--color-border)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="text-xs text-[var(--color-text-muted)] ml-2">
                        Creatik Lead Engine — Live Pipeline
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-5 px-2 rounded bg-[var(--color-emerald)]/20 flex items-center text-[10px] text-[var(--color-emerald)] font-semibold">
                        LIVE
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Funnel Visualization */}
                    <div className="relative">
                      {/* Funnel Stages */}
                      <div className="space-y-3">
                        {[
                          { stage: "Visitors", count: "12,847", width: "100%", color: "bg-[var(--color-primary)]", icon: Globe },
                          { stage: "Captured", count: "3,421", width: "75%", color: "bg-[var(--color-purple)]", icon: Target },
                          { stage: "Qualified", count: "892", width: "50%", color: "bg-[var(--color-cyan)]", icon: Filter },
                          { stage: "Engaged", count: "456", width: "35%", color: "bg-[var(--color-amber)]", icon: MessageSquare },
                          { stage: "Opportunities", count: "128", width: "22%", color: "bg-[var(--color-emerald)]", icon: Award },
                          { stage: "Customers", count: "34", width: "12%", color: "bg-[var(--color-primary-dark)]", icon: CheckCircle2 },
                        ].map((stage, i) => (
                          <motion.div
                            key={stage.stage}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-4"
                          >
                            <div className="w-28 text-xs font-semibold text-[var(--color-text-secondary)] text-right">
                              {stage.stage}
                            </div>
                            <div className="flex-1 relative">
                              <div className="h-8 bg-[var(--color-section-alt)] rounded-lg overflow-hidden">
                                <motion.div
                                  className={`h-full ${stage.color} rounded-lg flex items-center justify-end pr-3`}
                                  initial={{ width: 0 }}
                                  animate={{ width: stage.width }}
                                  transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                                >
                                  <span className="text-xs font-bold text-white">{stage.count}</span>
                                </motion.div>
                              </div>
                              {/* Animated lead dots */}
                              {animatedLeads.includes(i) && (
                                <motion.div
                                  className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white shadow-lg"
                                  initial={{ left: "0%" }}
                                  animate={{ left: "95%" }}
                                  transition={{ duration: 2, ease: "easeInOut" }}
                                />
                              )}
                            </div>
                            <div className="w-8 flex justify-center">
                              <stage.icon className="h-4 w-4 text-[var(--color-text-muted)]" />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Conversion Rate Labels */}
                      <div className="mt-4 pt-4 border-t border-[var(--color-border)] grid grid-cols-3 gap-3">
                        {[
                          { label: "Capture Rate", value: "26.6%", trend: "+4.2%" },
                          { label: "Qualification", value: "26.1%", trend: "+2.8%" },
                          { label: "Close Rate", value: "26.6%", trend: "+5.1%" },
                        ].map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-xs text-[var(--color-text-muted)] mb-1">{metric.label}</div>
                            <div className="flex items-center justify-center gap-1">
                              <span className="text-sm font-bold text-[var(--color-text-primary)]">{metric.value}</span>
                              <span className="text-[10px] text-[var(--color-emerald)] font-semibold">{metric.trend}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Active Automations */}
                    <div className="mt-4 p-3 rounded-lg bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[var(--color-badge-text)]">Active Automations</span>
                        <span className="text-[10px] text-[var(--color-text-muted)]">Last 24h</span>
                      </div>
                      <div className="flex gap-4">
                        {[
                          { label: "Emails Sent", value: "3,847" },
                          { label: "SMS Delivered", value: "1,204" },
                          { label: "Meetings Booked", value: "67" },
                          { label: "Leads Revived", value: "234" },
                        ].map((item) => (
                          <div key={item.label} className="flex-1">
                            <div className="text-sm font-bold text-[var(--color-text-primary)]">{item.value}</div>
                            <div className="text-[9px] text-[var(--color-text-muted)]">{item.label}</div>
                          </div>
                        ))}
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
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">11s Response</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Avg. first touch</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Target className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">92 Score</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Lead quality avg</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slower hidden xl:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-purple)]/10 flex items-center justify-center">
                    <Radio className="h-4 w-4 text-[var(--color-purple)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">12 Touches</div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">Per lead avg</div>
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
            Trusted by growth teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Salesforce", "HubSpot", "Zoom", "Slack", "Stripe", "Notion", "Airtable", "Intercom"].map(
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
      <section id="capture" className="py-[var(--section-py)]">
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
              Leads are expensive.{" "}
              <span className="text-[var(--color-text-faint)]">
                Losing them is catastrophic.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              The average company loses 79% of marketing leads to poor follow-up.
              Here's why most lead generation fails to convert into revenue.
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

      {/* Capture Channels */}
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
              <Target className="h-4 w-4" />
              Omnichannel Capture
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Capture leads from{" "}
              <span className="gradient-text">every touchpoint</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Your prospects are everywhere. Creatik AI meets them wherever
              they are—with intelligent capture that never misses an opportunity.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {captureChannels.map((channel) => (
              <motion.div
                key={channel.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: channel.color }}
                  >
                    <channel.icon
                      className="h-7 w-7"
                      style={{ color: channel.iconColor }}
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {channel.metric}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {channel.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {channel.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {channel.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nurture Sequence */}
      <section id="nurture" className="py-[var(--section-py)]">
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
              <MessageSquare className="h-4 w-4" />
              Smart Nurturing
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Nurture every lead like{" "}
              <span className="gradient-text">your best SDR would</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Personalized, persistent, perfectly timed. AI-powered nurture
              sequences that build trust and drive action—automatically.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {nurtureSequences.map((step, idx) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  onClick={() => setActiveNurture(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    activeNurture === idx
                      ? "border-[var(--color-primary)] bg-white shadow-[var(--shadow-lg)]"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-border-hover)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        activeNurture === idx
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-section-alt)] text-[var(--color-text-muted)]"
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 ${
                          activeNurture === idx
                            ? "text-[var(--color-primary)]"
                            : "text-[var(--color-text-primary)]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeNurture === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                              {step.desc}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {step.channels.map((ch) => (
                                  <span
                                    key={ch}
                                    className="inline-flex items-center gap-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] px-3 py-1 text-xs font-medium text-[var(--color-badge-text)]"
                                  >
                                    <CheckCircle2 className="h-3 w-3" />
                                    {ch}
                                  </span>
                                ))}
                              </div>
                              <span className="text-xs font-semibold text-[var(--color-emerald)] bg-[var(--color-emerald)]/10 px-2 py-1 rounded">
                                {step.timing}
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block sticky top-32"
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-xl)]">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-[var(--color-text-primary)]">
                    Live Nurture Preview
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Running
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Lead Profile */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-section-alt)] border border-[var(--color-border)]">
                    <div className="h-10 w-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">
                      JM
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[var(--color-text-primary)]">James Miller</div>
                      <div className="text-xs text-[var(--color-text-muted)]">VP Engineering • TechCorp Inc.</div>
                    </div>
                    <div className="rounded-full bg-[var(--color-amber)]/10 px-2 py-0.5 text-[10px] font-bold text-[var(--color-amber)] border border-[var(--color-amber)]/20">
                      Warm
                    </div>
                  </div>

                  {/* Sequence Timeline */}
                  <div className="space-y-3">
                    {[
                      { time: "T+0s", action: "Welcome email sent", status: "done", icon: Mail },
                      { time: "T+5m", action: "LinkedIn connection request", status: "done", icon: Globe },
                      { time: "T+2h", action: "Case study shared", status: "done", icon: FileCheck },
                      { time: "T+1d", action: "SMS: Meeting invitation", status: "active", icon: MessageSquare },
                      { time: "T+3d", action: "Retargeting ad activated", status: "pending", icon: Target },
                      { time: "T+7d", action: "Personal video follow-up", status: "pending", icon: VideoIcon },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-12 text-[10px] text-[var(--color-text-muted)] pt-1 text-right shrink-0">
                          {item.time}
                        </div>
                        <div className="relative flex flex-col items-center">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                            item.status === "done" ? "bg-[var(--color-emerald)]/10" :
                            item.status === "active" ? "bg-[var(--color-primary)]/10 ring-2 ring-[var(--color-primary)]" :
                            "bg-[var(--color-section-alt)]"
                          }`}>
                            <item.icon className={`h-3 w-3 ${
                              item.status === "done" ? "text-[var(--color-emerald)]" :
                              item.status === "active" ? "text-[var(--color-primary)]" :
                              "text-[var(--color-text-faint)]"
                            }`} />
                          </div>
                          {i < 5 && <div className="w-px h-6 bg-[var(--color-border)]" />}
                        </div>
                        <div className={`text-xs py-1 ${
                          item.status === "done" ? "text-[var(--color-text-secondary)] line-through" :
                          item.status === "active" ? "text-[var(--color-primary)] font-semibold" :
                          "text-[var(--color-text-faint)]"
                        }`}>
                          {item.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Engagement", value: "87%" },
                      { label: "Reply Likely", value: "72%" },
                      { label: "Est. Close", value: "34%" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className="text-lg font-bold text-[var(--color-text-primary)]">{item.value}</div>
                        <div className="text-[10px] text-[var(--color-text-muted)]">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conversion Features */}
      <section id="convert" className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
              <Award className="h-4 w-4" />
              Conversion Intelligence
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Turn interest into{" "}
              <span className="gradient-text">revenue</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              AI doesn't just nurture leads—it knows exactly when they're ready
              to buy and orchestrates the perfect conversion moment.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {conversionFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 text-center hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon
                    className="h-7 w-7"
                    style={{ color: feature.iconColor }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-[var(--section-py)]">
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
              See everything.{" "}
              <span className="gradient-text">Optimize anything.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Complete visibility into your lead engine—from first touch to
              closed-won. Data-driven decisions, not guesswork.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {analyticsCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-lg)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-icon-bg-1)] group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <card.icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {card.metric}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider">
                      {card.metricLabel}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Results that speak{" "}
              <span className="gradient-text">for themselves</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how sales and marketing teams are transforming lead
              performance with intelligent automation.
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
                <Magnet className="h-4 w-4" />
                Your next lead is already waiting
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Don't let another lead go cold
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Start capturing, nurturing, and converting leads on autopilot.
                Your first 500 leads are free—no credit card required.
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
                  Talk to Sales
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  500 leads free
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Full feature access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  14-day trial
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
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Everything you need to know about intelligent lead automation.
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

/* Helper icon component */
function VideoIcon({ className }: { className?: string }) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}