"use client";

import React, { useState } from "react";
import { motion, AnimatePresence , Variants} from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  Code,
  Globe,
  Bot,
  Zap,
  BarChart3,
  Workflow,
  ArrowRight,
  Sparkles,
  BookOpen,
  Video,
  FileText,
  Mail,
  Phone,
  Clock,
  Check,
  X,
  ExternalLink,
  Play,
  Star,
  Shield,
  Cpu,
  Layers,
  Settings,
  Wrench,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Bookmark,
  Share2,
  Printer,
  Download,
  Upload,
  Folder,
  Tag,
  Hash,
  Eye,
  EyeOff,
  Lock,
  KeyRound,
  User,
  Users,
  Building2,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Flame,
  Rocket,
  Compass,
  Target,
  MapPin,
  Calendar,
  Bell,
  Inbox,
  Archive,
  Trash2,
  Edit3,
  PenTool,
  Paintbrush,
  Palette,
  Image,
  Camera,
  Mic,
  Headphones,
  Volume2,
  VolumeX,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Glasses,
  Coffee,
  Utensils,
  Car,
  Bus,
  Train,
  Bike,
  Home,
  Plane,
  Ship,
  Truck,
  Package,
  Store,
  ShoppingCart,
  CreditCard,
  Wallet,
  DollarSign,
  PiggyBank,
  Receipt,
  Calculator,
  Percent,
  TrendingUp,
  TrendingDown,
  Activity,
  Heart,
  HeartOff,
  ThumbsUp as ThumbsUpIcon,
  ThumbsDown as ThumbsDownIcon,
  Star as StarIcon,
  Flag,
  FlagOff,
  Pin,
  PinOff,
  Bookmark as BookmarkIcon,
  BookmarkOff,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ─── Types ─── */
interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  articleCount: number;
  color: string;
  bgColor: string;
  articles: Article[];
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  helpful: number;
  tags: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

/* ─── DEMO DATA ─── */
const categories: Category[] = [
  {
    id: "web-dev",
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Custom websites, landing pages, e-commerce, and web apps built with modern tech.",
    articleCount: 24,
    color: "text-[var(--color-primary)]",
    bgColor: "bg-[var(--color-icon-bg-1)]",
    articles: [
      { id: "wd1", title: "Getting Started with Your Website Project", excerpt: "Everything you need to know before starting a web development project with CreatiKai.", readTime: "5 min", helpful: 342, tags: ["Getting Started", "Project Setup"] },
      { id: "wd2", title: "Tech Stack & Frameworks We Use", excerpt: "Next.js, React, Tailwind CSS, TypeScript, and more. Learn why we choose these technologies.", readTime: "4 min", helpful: 289, tags: ["Tech Stack", "Frameworks"] },
      { id: "wd3", title: "How to Request Design Revisions", excerpt: "A step-by-step guide to submitting feedback and getting revisions turned around fast.", readTime: "3 min", helpful: 198, tags: ["Design", "Revisions"] },
      { id: "wd4", title: "Website Launch Checklist", excerpt: "Pre-launch essentials: SEO, performance, security, and go-live procedures.", readTime: "6 min", helpful: 456, tags: ["Launch", "Checklist"] },
    ],
  },
  {
    id: "seo",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "SEO Manager",
    description: "Rank higher on Google with our data-driven SEO strategies and ongoing optimization.",
    articleCount: 18,
    color: "text-[var(--color-emerald)]",
    bgColor: "bg-[var(--color-icon-bg-4)]",
    articles: [
      { id: "se1", title: "Understanding Your SEO Dashboard", excerpt: "Navigate rankings, traffic, backlinks, and keyword performance in one place.", readTime: "4 min", helpful: 267, tags: ["Dashboard", "Analytics"] },
      { id: "se2", title: "Keyword Research Process Explained", excerpt: "How we find high-intent keywords that drive qualified traffic to your site.", readTime: "5 min", helpful: 312, tags: ["Keywords", "Research"] },
      { id: "se3", title: "Monthly SEO Reports: What to Expect", excerpt: "Breaking down traffic growth, ranking improvements, and next-month action plans.", readTime: "3 min", helpful: 189, tags: ["Reports", "Monthly"] },
      { id: "se4", title: "Technical SEO Fixes We Handle", excerpt: "Site speed, mobile optimization, schema markup, crawl errors, and more.", readTime: "7 min", helpful: 401, tags: ["Technical", "Fixes"] },
    ],
  },
  {
    id: "ai-auto",
    icon: <Zap className="w-6 h-6" />,
    title: "AI Automation",
    description: "Automate repetitive tasks with intelligent AI agents that learn and improve over time.",
    articleCount: 15,
    color: "text-[var(--color-amber)]",
    bgColor: "bg-[var(--color-gold-bg)]",
    articles: [
      { id: "aa1", title: "What Can AI Automation Do for You?", excerpt: "From lead nurturing to data entry — discover what tasks AI can handle.", readTime: "4 min", helpful: 378, tags: ["Overview", "Use Cases"] },
      { id: "aa2", title: "Setting Up Your First AI Workflow", excerpt: "A beginner-friendly guide to creating your first automated AI-powered workflow.", readTime: "6 min", helpful: 245, tags: ["Setup", "Workflows"] },
      { id: "aa3", title: "Connecting AI to Your Existing Tools", excerpt: "Integrate with CRMs, email, Slack, databases, and 200+ other platforms.", readTime: "5 min", helpful: 198, tags: ["Integrations", "Tools"] },
      { id: "aa4", title: "Monitoring & Optimizing AI Performance", excerpt: "Track accuracy, speed, and ROI. Fine-tune your agents for better results.", readTime: "4 min", helpful: 156, tags: ["Monitoring", "Optimization"] },
    ],
  },
  {
    id: "n8n",
    icon: <Workflow className="w-6 h-6" />,
    title: "n8n Workflows",
    description: "Visual workflow automation with n8n. Connect apps, trigger actions, and scale operations.",
    articleCount: 12,
    color: "text-[var(--color-cyan)]",
    bgColor: "bg-[var(--color-icon-bg-3)]",
    articles: [
      { id: "n1", title: "n8n vs Zapier: Why We Choose n8n", excerpt: "Open-source, self-hosted, unlimited workflows, and full data control.", readTime: "4 min", helpful: 234, tags: ["Comparison", "n8n"] },
      { id: "n2", title: "Building Your First n8n Workflow", excerpt: "From trigger to action — create a working automation in under 10 minutes.", readTime: "8 min", helpful: 312, tags: ["Tutorial", "Beginner"] },
      { id: "n3", title: "Common n8n Nodes & Use Cases", excerpt: "HTTP requests, database queries, email triggers, Slack notifications, and more.", readTime: "5 min", helpful: 178, tags: ["Nodes", "Reference"] },
      { id: "n4", title: "Self-Hosted vs Cloud: Which Is Right?", excerpt: "Data privacy, cost, scalability, and maintenance considerations explained.", readTime: "4 min", helpful: 145, tags: ["Hosting", "Deployment"] },
    ],
  },
  {
    id: "chatbot",
    icon: <Bot className="w-6 h-6" />,
    title: "AI Chatbot",
    description: "Intelligent conversational AI for customer support, sales, and internal operations.",
    articleCount: 20,
    color: "text-[var(--color-purple)]",
    bgColor: "bg-[var(--color-icon-bg-2)]",
    articles: [
      { id: "cb1", title: "Deploying Your AI Chatbot in 15 Minutes", excerpt: "Step-by-step setup: training data, personality, channels, and go-live.", readTime: "6 min", helpful: 567, tags: ["Setup", "Quick Start"] },
      { id: "cb2", title: "Training Your Chatbot on Your Data", excerpt: "Upload docs, FAQs, and past conversations to create a knowledgeable AI agent.", readTime: "5 min", helpful: 423, tags: ["Training", "Data"] },
      { id: "cb3", title: "Multi-Channel Deployment Guide", excerpt: "Web widget, WhatsApp, Slack, Messenger, and custom API integrations.", readTime: "7 min", helpful: 289, tags: ["Channels", "Deployment"] },
      { id: "cb4", title: "Chatbot Analytics & Performance", excerpt: "Resolution rates, CSAT scores, conversation trends, and optimization tips.", readTime: "4 min", helpful: 198, tags: ["Analytics", "Performance"] },
    ],
  },
  {
    id: "general",
    icon: <Settings className="w-6 h-6" />,
    title: "General & Billing",
    description: "Account management, billing, subscriptions, and everything else you need to know.",
    articleCount: 10,
    color: "text-[var(--color-text-muted)]",
    bgColor: "bg-[var(--color-bg-hover)]",
    articles: [
      { id: "g1", title: "Account Setup & Team Management", excerpt: "Invite teammates, set permissions, and manage your CreatiKai workspace.", readTime: "3 min", helpful: 156, tags: ["Account", "Team"] },
      { id: "g2", title: "Understanding Your Invoice", excerpt: "Line items, billing cycles, payment methods, and how to update your info.", readTime: "3 min", helpful: 134, tags: ["Billing", "Invoice"] },
      { id: "g3", title: "Upgrading or Downgrading Plans", excerpt: "How to change your plan, what happens to your data, and prorated billing.", readTime: "2 min", helpful: 189, tags: ["Plans", "Subscription"] },
      { id: "g4", title: "Canceling Your Subscription", excerpt: "How to cancel, data export options, and what happens after cancellation.", readTime: "2 min", helpful: 98, tags: ["Cancel", "Export"] },
    ],
  },
];

const quickLinks = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Documentation", desc: "Detailed guides & API refs" },
  { icon: <Video className="w-4 h-4" />, label: "Video Tutorials", desc: "Step-by-step walkthroughs" },
  { icon: <MessageSquare className="w-4 h-4" />, label: "Community", desc: "Ask questions & share tips" },
  { icon: <Mail className="w-4 h-4" />, label: "Contact Support", desc: "Get help from our team" },
];

const popularArticles = [
  { title: "Deploying Your AI Chatbot in 15 Minutes", category: "AI Chatbot", readTime: "6 min", helpful: 567 },
  { title: "Website Launch Checklist", category: "Web Development", readTime: "6 min", helpful: 456 },
  { title: "Technical SEO Fixes We Handle", category: "SEO Manager", readTime: "7 min", helpful: 401 },
  { title: "What Can AI Automation Do for You?", category: "AI Automation", readTime: "4 min", helpful: 378 },
  { title: "Understanding Your SEO Dashboard", category: "SEO Manager", readTime: "4 min", helpful: 267 },
];

const faqs: FAQ[] = [
  { question: "How do I get started with CreatiKai services?", answer: "Getting started is simple. Choose the service you need — Web Development, SEO, AI Automation, n8n Workflows, or AI Chatbot — and book a free consultation. Our team will assess your needs, propose a tailored solution, and kick off your project within 48 hours." },
  { question: "What is the typical turnaround time for a website?", answer: "Most websites are delivered within 2–4 weeks depending on complexity. A simple landing page takes 5–7 days, while a full e-commerce site may take 6–8 weeks. We provide a detailed timeline during project kickoff." },
  { question: "Can I integrate AI Chatbot with my existing CRM?", answer: "Absolutely. Our AI Chatbot integrates natively with Salesforce, HubSpot, Zoho, Pipedrive, and 50+ other CRMs via API or Zapier/n8n. We also support custom API integrations for enterprise setups." },
  { question: "Do you offer ongoing SEO maintenance?", answer: "Yes — our SEO Manager service includes monthly optimization, content updates, technical audits, backlink building, and detailed performance reports. We treat SEO as a continuous process, not a one-time task." },
  { question: "What is n8n and why do you recommend it?", answer: "n8n is an open-source workflow automation tool. Unlike Zapier, it is self-hostable, has no workflow limits, and gives you full control over your data. It is perfect for businesses that need scalable, secure, and cost-effective automation." },
  { question: "How does billing work for ongoing services?", answer: "We offer flexible billing: monthly retainers for ongoing services (SEO, AI Automation), milestone-based payments for projects (Web Dev), and usage-based pricing for AI Chatbot conversations. All invoices are transparent with detailed line items." },
];

/* ─── Particle Background ─── */
function ParticleBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
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

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
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
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 * (1 - dist / 160)})`;
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

/* ─── Category Card ─── */
function CategoryCard({ category, index, onClick }: { category: Category; index: number; onClick: () => void }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <div className={category.color}>{category.icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">{category.title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{category.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)] font-medium">{category.articleCount} articles</span>
        <div className="w-8 h-8 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center group-hover:bg-[var(--color-icon-bg-1)] transition-colors">
          <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Article Card ─── */
function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ x: 4 }}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-bg-hover)] transition-colors cursor-pointer"
    >
      <div className="w-9 h-9 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center flex-shrink-0 mt-0.5">
        <FileText className="w-4 h-4 text-[var(--color-primary)]" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors truncate">{article.title}</h4>
        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[var(--color-text-faint)] flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
          <span className="text-[10px] text-[var(--color-text-faint)] flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" /> {article.helpful} found helpful
          </span>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-[var(--color-text-faint)] flex-shrink-0 mt-1 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
    </motion.div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} custom={index} className="border-b border-[var(--color-border)] last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-[var(--color-text-primary)] font-medium text-sm pr-4 group-hover:text-[var(--color-primary)] transition-colors">{faq.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="w-6 h-6 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-icon-bg-1)] transition-colors">
          <ChevronDown className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-4">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.articles.some((a) => a.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  const activeCategory = selectedCategory ? categories.find((c) => c.id === selectedCategory) : null;

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO + SEARCH
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-hover)] via-white to-white pt-[var(--hero-pt)] pb-16">
        <ParticleBackground />
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-10 right-0 w-[500px] h-[500px] bg-blue-400/6 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/6 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              CreatiKai Help Center
            </div>
            <h1 className="text-[var(--hero-title-size)] font-bold text-[var(--color-text-primary)] leading-tight mb-4">
              How Can We{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Find answers, guides, and support for all CreatiKai services.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-10"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-faint)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, FAQs..."
                className="w-full pl-12 pr-14 py-4 bg-white rounded-2xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 focus:outline-none shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSearching}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shadow-[var(--shadow-btn-primary)] transition-colors disabled:opacity-70"
              >
                {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              </motion.button>
            </div>
          </motion.form>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 mb-4"
          >
            {quickLinks.map((link, i) => (
              <motion.button
                key={link.label}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <span className="text-[var(--color-primary)]">{link.icon}</span>
                <div className="text-left">
                  <span className="text-sm font-medium text-[var(--color-text-primary)] block leading-tight">{link.label}</span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">{link.desc}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORIES
      ═══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <AnimatePresence mode="wait">
            {activeCategory ? (
              <motion.div
                key="articles"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium mb-6 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" /> Back to Categories
                </button>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl ${activeCategory.bgColor} flex items-center justify-center`}>
                    <div className={activeCategory.color}>{activeCategory.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{activeCategory.title}</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">{activeCategory.description}</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] overflow-hidden divide-y divide-[var(--color-border-light)]">
                  {activeCategory.articles.map((article, i) => (
                    <ArticleCard key={article.id} article={article} index={i} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-[var(--section-title-size)] font-bold text-[var(--color-text-primary)]">
                      Browse by{" "}
                      <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                        Category
                      </span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] mt-1">Select a topic to explore articles and guides</p>
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredCategories.map((cat, i) => (
                    <CategoryCard key={cat.id} category={cat} index={i} onClick={() => setSelectedCategory(cat.id)} />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POPULAR ARTICLES
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--color-section-alt)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-gold-bg)] border border-[var(--color-gold-border)] text-[var(--color-gold)] text-xs font-semibold mb-3">
              <Star className="w-3.5 h-3.5" />
              Most Popular
            </span>
            <h2 className="text-[var(--section-title-size)] font-bold text-[var(--color-text-primary)]">
              Trending{" "}
              <span className="bg-gradient-to-r from-[var(--color-amber)] to-orange-500 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {popularArticles.map((article, i) => (
              <motion.div
                key={article.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-[10px] font-semibold">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-faint)] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {article.title}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--color-text-muted)] flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3" /> {article.helpful} helpful
                  </span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-text-faint)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Quick Answers
            </span>
            <h2 className="text-[var(--section-title-size)] font-bold text-[var(--color-text-primary)]">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] overflow-hidden"
          >
            <div className="px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-primary-dark)] relative overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still Need Help?
            </h2>
            <p className="text-blue-100 mb-8">
              Our support team is available 24/7. Reach out and we will get back to you within 2 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}