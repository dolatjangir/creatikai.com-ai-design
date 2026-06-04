"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ShoppingBag,
  BarChart3,
  Truck,
  Users,
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Package,
  Smartphone,
  CreditCard,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  Play,
  X,
  Menu,
  Sparkles,
  Target,
  Clock,
  Layers,
  MessageSquare,
  Mail,
  Phone,
} from "lucide-react";

/* ============================================
   CONSUMER GOODS & RETAIL PAGE
   Creatik AI — Corporate Website
   ============================================ */

const fadeInUp: Variants = {
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

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Omnichannel", href: "#omnichannel" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

const heroStats = [
  { value: "3.2x", label: "Average ROI" },
  { value: "40%", label: "Cart Recovery" },
  { value: "98.9%", label: "Uptime SLA" },
  { value: "50M+", label: "Orders Processed" },
];

const painPoints = [
  {
    icon: Package,
    title: "Inventory Chaos",
    desc: "Overselling, stockouts, and mismatched counts across warehouses and marketplaces destroy customer trust.",
  },
  {
    icon: Users,
    title: "Fragmented Customer Data",
    desc: "Shopper behavior is scattered across POS, online, mobile, and social. No single source of truth.",
  },
  {
    icon: Truck,
    title: "Supply Chain Blindspots",
    desc: "Delayed shipments, supplier delays, and poor demand forecasting lead to lost revenue and unhappy customers.",
  },
  {
    icon: RotateCcw,
    title: "High Return Rates",
    desc: "Returns eat margins. Without insights into why products come back, you can't fix the root cause.",
  },
];

const coreFeatures = [
  {
    icon: ShoppingBag,
    title: "Unified Commerce Engine",
    desc: "Connect every sales channel—DTC, retail, wholesale, marketplace—into one real-time inventory and order system.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: BarChart3,
    title: "Demand Forecasting",
    desc: "AI-powered predictions based on seasonality, trends, and regional behavior to optimize stock levels.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
  {
    icon: Globe,
    title: "Omnichannel Profiles",
    desc: "Build persistent shopper profiles that follow customers across web, app, in-store, and social commerce.",
    color: "var(--color-icon-bg-3)",
    iconColor: "var(--color-cyan)",
  },
  {
    icon: Zap,
    title: "Automated Replenishment",
    desc: "Trigger purchase orders, vendor alerts, and warehouse transfers before you ever hit a stockout.",
    color: "var(--color-icon-bg-4)",
    iconColor: "var(--color-emerald)",
  },
  {
    icon: Target,
    title: "Smart Segmentation",
    desc: "Auto-segment customers by LTV, churn risk, category affinity, and engagement for precision marketing.",
    color: "var(--color-icon-bg-1)",
    iconColor: "var(--color-primary)",
  },
  {
    icon: Shield,
    title: "Fraud & Return Shield",
    desc: "ML models detect suspicious patterns and return abuse before they impact your bottom line.",
    color: "var(--color-icon-bg-2)",
    iconColor: "var(--color-purple)",
  },
];

const omnichannelSteps = [
  {
    step: "01",
    title: "Ingest Every Touchpoint",
    desc: "POS, e-commerce, mobile app, marketplaces, and social commerce—all synced in real time.",
  },
  {
    step: "02",
    title: "Enrich & Predict",
    desc: "AI layers on behavioral signals, demand signals, and inventory health to surface next-best actions.",
  },
  {
    step: "03",
    title: "Activate Everywhere",
    desc: "Push personalized offers, dynamic pricing, and stock alerts to the right channel at the right moment.",
  },
];

const testimonials = [
  {
    quote:
      "Creatik AI unified our 12 retail locations and 3 online stores into one system. We cut overselling by 94% and increased repeat purchases by 28%.",
    author: "Sarah Chen",
    role: "VP of Digital, Luxe Apparel Group",
    metric: "94%",
    metricLabel: "Overselling Reduced",
  },
  {
    quote:
      "The demand forecasting alone paid for the platform in 6 weeks. We went from constant stockouts to 99.2% fulfillment accuracy.",
    author: "Marcus Johnson",
    role: "COO, FreshMarket Brands",
    metric: "99.2%",
    metricLabel: "Fulfillment Accuracy",
  },
  {
    quote:
      "Our cart recovery campaigns powered by Creatik AI now drive 18% of total monthly revenue. It's become our silent sales engine.",
    author: "Elena Rossi",
    role: "Head of Growth, Nova Home & Living",
    metric: "18%",
    metricLabel: "Revenue from Recovery",
  },
];

const integrations = [
  { name: "Shopify", category: "E-commerce" },
  { name: "Magento", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Salesforce", category: "CRM" },
  { name: "NetSuite", category: "ERP" },
  { name: "SAP", category: "ERP" },
  { name: "Square", category: "POS" },
  { name: "Stripe", category: "Payments" },
  { name: "Amazon SP-API", category: "Marketplace" },
  { name: "FedEx", category: "Logistics" },
  { name: "Zendesk", category: "Support" },
  { name: "Klaviyo", category: "Marketing" },
];

const faqs = [
  {
    q: "How long does implementation take for a mid-size retailer?",
    a: "Most retail customers are fully live within 4–6 weeks. Our pre-built connectors for Shopify, Magento, Square, and major ERPs eliminate custom integration work.",
  },
  {
    q: "Can Creatik AI handle seasonal demand spikes?",
    a: "Absolutely. Our infrastructure auto-scales to handle 10x traffic surges during Black Friday, holiday seasons, and flash sales without performance degradation.",
  },
  {
    q: "Is real-time inventory sync truly real-time?",
    a: "Yes. Inventory updates propagate across all connected channels in under 500ms, preventing overselling and enabling accurate available-to-promise calculations.",
  },
  {
    q: "Do you support B2B wholesale alongside DTC?",
    a: "Yes. Creatik AI supports complex B2B workflows including tiered pricing, bulk orders, net terms, and EDI integrations alongside your direct-to-consumer operations.",
  },
];

export default function ConsumerGoodsRetailPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

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
                Get Demo
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
                    Get Demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[var(--hero-pt)] pb-[var(--hero-pb)]">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--color-glow)] opacity-40 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--color-glow-strong)] opacity-30 blur-3xl" />
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
                <Star className="h-4 w-4 fill-[var(--color-star)] text-[var(--color-star)]" />
                Trusted by 2,000+ retail & CPG brands
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[var(--hero-title-size)] font-extrabold tracking-tight leading-[1.1] mb-6"
              >
                The AI Commerce Platform Built for{" "}
                <span className="gradient-text">
                  Consumer Goods & Retail
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Unify your inventory, orders, and customer data across every
                channel. Creatik AI helps retail and CPG brands predict demand,
                prevent stockouts, and convert one-time buyers into loyal
                customers.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </a>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-border-hover)] transition-all">
                  <Play className="h-5 w-5 text-[var(--color-primary)]" />
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

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-[var(--color-robot-border)] bg-[var(--color-robot-bg)] p-2 shadow-[var(--shadow-xl)]">
                <div className="rounded-xl bg-white overflow-hidden">
                  {/* Mock Dashboard UI */}
                  <div className="bg-[var(--color-section-alt)] p-4 border-b border-[var(--color-border)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-xs font-medium text-[var(--color-text-muted)]">
                      Creatik AI — Retail Command Center
                    </div>
                  </div>
                  <div className="p-6 grid gap-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">
                          Revenue (MTD)
                        </div>
                        <div className="text-xl font-bold text-[var(--color-text-primary)]">
                          $1.24M
                        </div>
                        <div className="text-xs text-[var(--color-emerald)] font-medium mt-1">
                          +12.4%
                        </div>
                      </div>
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">
                          Orders Today
                        </div>
                        <div className="text-xl font-bold text-[var(--color-text-primary)]">
                          3,842
                        </div>
                        <div className="text-xs text-[var(--color-emerald)] font-medium mt-1">
                          +8.2%
                        </div>
                      </div>
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs text-[var(--color-text-muted)] mb-1">
                          Avg. Order Value
                        </div>
                        <div className="text-xl font-bold text-[var(--color-text-primary)]">
                          $87.50
                        </div>
                        <div className="text-xs text-[var(--color-emerald)] font-medium mt-1">
                          +3.1%
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                          Channel Performance
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)]">
                          Last 7 days
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: "Online Store", val: 45, color: "bg-[var(--color-primary)]" },
                          { label: "Retail POS", val: 30, color: "bg-[var(--color-purple)]" },
                          { label: "Marketplaces", val: 18, color: "bg-[var(--color-cyan)]" },
                          { label: "Social Commerce", val: 7, color: "bg-[var(--color-emerald)]" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-3">
                            <div className="w-24 text-xs text-[var(--color-text-secondary)]">
                              {item.label}
                            </div>
                            <div className="flex-1 h-2 rounded-full bg-[var(--color-border-light)] overflow-hidden">
                              <div
                                className={`h-full rounded-full ${item.color}`}
                                style={{ width: `${item.val}%` }}
                              />
                            </div>
                            <div className="w-8 text-xs font-medium text-[var(--color-text-primary)] text-right">
                              {item.val}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs text-[var(--color-text-muted)] mb-2">
                          Low Stock Alerts
                        </div>
                        <div className="space-y-2">
                          {[
                            { name: "Wireless Headphones", stock: 12 },
                            { name: "Ceramic Vase Set", stock: 5 },
                            { name: "Leather Tote", stock: 8 },
                          ].map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center justify-between text-xs"
                            >
                              <span className="text-[var(--color-text-secondary)]">
                                {item.name}
                              </span>
                              <span className="font-semibold text-[var(--color-amber)]">
                                {item.stock} left
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                        <div className="text-xs text-[var(--color-text-muted)] mb-2">
                          AI Recommendations
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Zap className="h-3.5 w-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                            <span className="text-xs text-[var(--color-text-secondary)]">
                              Restock SKU-4421 by Thursday
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="h-3.5 w-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                            <span className="text-xs text-[var(--color-text-secondary)]">
                              Run flash sale for Winter Coats
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Zap className="h-3.5 w-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                            <span className="text-xs text-[var(--color-text-secondary)]">
                              Bundle slow movers with bestsellers
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-emerald)]/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-[var(--color-emerald)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">
                      +24% LTV
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">
                      This quarter
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-[var(--color-border)] shadow-[var(--shadow-lg)] p-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Package className="h-4 w-4 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-text-primary)]">
                      99.8% In Stock
                    </div>
                    <div className="text-[10px] text-[var(--color-text-muted)]">
                      Top 100 SKUs
                    </div>
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
            Powering retail operations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["Nike", "Target", "Unilever", "P&G", "Nestlé", "Coca-Cola", "Walmart", "Sephora"].map(
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
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Retail moves fast.{" "}
              <span className="text-[var(--color-text-faint)]">
                Your systems should keep up.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Consumer goods and retail brands face unique operational
              challenges that generic CRMs simply weren't built to solve.
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
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-icon-bg-1)]">
                  <point.icon className="h-6 w-6 text-[var(--color-primary)]" />
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

      {/* Core Features */}
      <section
        id="features"
        className="py-[var(--section-py)] bg-[var(--color-section-alt)]"
      >
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
              Built for Modern Commerce
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Everything you need to run a{" "}
              <span className="gradient-text">smarter retail operation</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              From inventory intelligence to customer retention, Creatik AI
              replaces fragmented tools with one unified platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 hover:shadow-[var(--shadow-xl)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon
                    className="h-7 w-7"
                    style={{ color: feature.iconColor }}
                  />
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

      {/* Omnichannel Section */}
      <section id="omnichannel" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-badge-border)] bg-[var(--color-badge-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-badge-text)] mb-4"
              >
                <Globe className="h-4 w-4" />
                True Omnichannel
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold tracking-tight mb-6"
              >
                One customer.{" "}
                <span className="gradient-text">One profile. Every channel.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[var(--color-text-secondary)] mb-10"
              >
                Stop treating online and in-store as separate businesses. Creatik
                AI builds persistent customer profiles that follow shoppers
                across every touchpoint—enabling personalization that actually
                feels personal.
              </motion.p>

              <div className="space-y-8">
                {omnichannelSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    variants={fadeInUp}
                    className="flex gap-5"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                        {step.step}
                      </div>
                      {idx !== omnichannelSteps.length - 1 && (
                        <div className="mt-2 h-full w-px bg-[var(--color-border)]" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">
                        {step.desc}
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
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-xl)]">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="font-semibold text-[var(--color-text-primary)]">
                    Unified Customer Profile
                  </h4>
                  <span className="rounded-full bg-[var(--color-emerald)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-emerald)]">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
                  <div className="h-16 w-16 rounded-full bg-[var(--color-avatar-bg)] flex items-center justify-center text-xl font-bold text-[var(--color-text-faint)]">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-text-primary)]">
                      Jane Doe
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      Customer since 2021 • LTV: $4,280
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className="rounded-md bg-[var(--color-badge-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-badge-text)] border border-[var(--color-badge-border)]">
                        VIP
                      </span>
                      <span className="rounded-md bg-[var(--color-gold-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-gold)] border border-[var(--color-gold-border)]">
                        Loyalty Gold
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-[var(--color-section-alt)] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                        Purchase History
                      </span>
                      <span className="text-xs text-[var(--color-primary)] font-medium">
                        24 orders
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { item: "Running Shoes - Black", price: "$129", date: "2 days ago", channel: "Online" },
                        { item: "Sports Socks (3-pack)", price: "$24", date: "2 days ago", channel: "Online" },
                        { item: "Water Bottle 1L", price: "$35", date: "3 weeks ago", channel: "Retail POS" },
                      ].map((order, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm py-2 border-b border-[var(--color-border-light)] last:border-0"
                        >
                          <div>
                            <div className="font-medium text-[var(--color-text-primary)]">
                              {order.item}
                            </div>
                            <div className="text-xs text-[var(--color-text-muted)]">
                              {order.date} • {order.channel}
                            </div>
                          </div>
                          <div className="font-semibold text-[var(--color-text-primary)]">
                            {order.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg bg-[var(--color-section-alt)] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                        AI Insights
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Target className="h-4 w-4 text-[var(--color-purple)] mt-0.5 shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">
                          High propensity to buy Athletic Wear next 14 days
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Mail className="h-4 w-4 text-[var(--color-cyan)] mt-0.5 shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">
                          Best engagement window: Tue-Thu, 6-9 PM
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Phone className="h-4 w-4 text-[var(--color-emerald)] mt-0.5 shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">
                          Preferred channel: SMS for promotions, Email for content
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[var(--section-py)] bg-[var(--color-section-alt-2)]">
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
              Trusted by retail leaders{" "}
              <span className="gradient-text">worldwide</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              See how consumer goods and retail brands are transforming
              operations with Creatik AI.
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

      {/* Integrations */}
      <section id="integrations" className="py-[var(--section-py)]">
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
              Integrations
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-bold tracking-tight mb-4"
            >
              Plays nice with your{" "}
              <span className="gradient-text">existing stack</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--color-text-secondary)]"
            >
              Connect your e-commerce, POS, ERP, and logistics tools in
              minutes—not months.
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
                <div className="h-10 w-10 rounded-lg bg-[var(--color-section-alt)] flex items-center justify-center text-xs font-bold text-[var(--color-text-muted)] group-hover:bg-[var(--color-icon-bg-1)] group-hover:text-[var(--color-primary)] transition-colors">
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
                Everything you need to know about deploying Creatik AI in your
                retail environment.
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

      {/* CTA Section */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-8 py-16 lg:px-16 lg:py-20 text-center"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Ready to modernize your retail operation?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Join 2,000+ consumer goods and retail brands using Creatik AI
                to unify commerce, predict demand, and delight customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[var(--color-primary)] shadow-lg hover:bg-blue-50 transition-all"
                >
                  Get Started Free
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
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  Setup in under 30 minutes
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-section-alt)] py-12">
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
                The intelligent commerce platform for modern retail and consumer
                goods brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Inventory AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Demand Forecasting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Customer 360
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Pricing Intelligence
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    DTC Brands
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Retail Chains
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    CPG Manufacturers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                    Marketplaces
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
                    About Us
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
                    Privacy Policy
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