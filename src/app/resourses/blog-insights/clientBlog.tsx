"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Clock,
  ArrowRight,
  Sparkles,
  Calendar,
  User,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ChevronRight,
  Tag,
  Search,
  Filter,
  Flame,
  Zap,
  Code,
  BarChart3,
  Bot,
  Workflow,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Gem,
  Star,
  Award,
  Crown,
  ThumbsUp,
  MessageCircle,
  X,
  Plus,
  Minus,
  Check,
  Loader2,
  Send,
  Image,
  Link2,
  Hash,
  MoreHorizontal,
  Pin,
  Bell,
  Mail,
  Phone,
  MapPin,
  Building2,
  Briefcase,
  GraduationCap,
  Newspaper,
  Radio,
  Tv,
  Monitor,
  Smartphone,
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
  Activity,
  TrendingDown,
  BarChart,
  PieChart,
  LineChart,
  AreaChart,
  Radar,
  Compass,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp: Variants = {
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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Types ─── */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  author: string;
  authorRole: string;
  avatar: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  featured?: boolean;
  trending?: boolean;
  imageGradient: string;
  tags: string[];
}

interface InsightStat {
  value: string;
  label: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}

/* ─── DEMO DATA ─── */
const featuredPost: BlogPost = {
  id: "featured",
  title: "The Future of AI-Powered Business: How CreatiKai is Reshaping Work in 2026",
  excerpt: "From autonomous web development to self-optimizing SEO agents, discover how AI is no longer just a tool — it is your most valuable team member. We break down the technologies, trends, and real results driving the next wave of digital transformation.",
  category: "AI Insights",
  categoryColor: "text-purple-700",
  categoryBg: "bg-purple-50 border-purple-200",
  author: "David Chen",
  authorRole: "Chief Technology Officer",
  avatar: "DC",
  date: "May 27, 2026",
  readTime: "12 min read",
  views: 45230,
  likes: 2341,
  comments: 187,
  featured: true,
  trending: true,
  imageGradient: "from-purple-600 via-blue-600 to-cyan-500",
  tags: ["AI Trends", "Digital Transformation", "Future of Work"],
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Production-Grade Websites with Next.js 15: A Complete Guide",
    excerpt: "Server Components, App Router, and the new caching strategies that cut our build times by 60%. Everything you need to ship faster.",
    category: "Web Development",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50 border-blue-200",
    author: "Sarah Kim",
    authorRole: "Lead Developer",
    avatar: "SK",
    date: "May 25, 2026",
    readTime: "8 min",
    views: 12890,
    likes: 892,
    comments: 56,
    trending: true,
    imageGradient: "from-blue-500 to-indigo-600",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    id: "2",
    title: "SEO in the AI Era: How Search Engines Now Think",
    excerpt: "Google's AI Overviews, semantic search, and E-E-A-T signals are rewriting the rules. Here is how to stay ahead of the curve.",
    category: "SEO",
    categoryColor: "text-emerald-700",
    categoryBg: "bg-emerald-50 border-emerald-200",
    author: "Marcus Johnson",
    authorRole: "SEO Director",
    avatar: "MJ",
    date: "May 22, 2026",
    readTime: "10 min",
    views: 9876,
    likes: 756,
    comments: 43,
    trending: true,
    imageGradient: "from-emerald-500 to-teal-600",
    tags: ["SEO Strategy", "AI Search", "Content"],
  },
  {
    id: "3",
    title: "n8n vs Make vs Zapier: The 2026 Automation Showdown",
    excerpt: "We tested all three platforms across 50 real-world workflows. Speed, cost, reliability, and ease of use — here is the definitive winner.",
    category: "Automation",
    categoryColor: "text-cyan-700",
    categoryBg: "bg-cyan-50 border-cyan-200",
    author: "Alex Rivera",
    authorRole: "Automation Engineer",
    avatar: "AR",
    date: "May 20, 2026",
    readTime: "7 min",
    views: 8456,
    likes: 623,
    comments: 38,
    imageGradient: "from-cyan-500 to-blue-600",
    tags: ["n8n", "Workflows", "Comparison"],
  },
  {
    id: "4",
    title: "Training AI Chatbots: From Zero to Human-Like in 30 Days",
    excerpt: "The exact framework we use at CreatiKai to train chatbots that achieve 94% customer satisfaction scores.",
    category: "AI Chatbot",
    categoryColor: "text-purple-700",
    categoryBg: "bg-purple-50 border-purple-200",
    author: "Priya Sharma",
    authorRole: "AI Product Lead",
    avatar: "PS",
    date: "May 18, 2026",
    readTime: "9 min",
    views: 11234,
    likes: 945,
    comments: 72,
    trending: true,
    imageGradient: "from-purple-500 to-violet-600",
    tags: ["AI Training", "Chatbot", "CX"],
  },
  {
    id: "5",
    title: "How We Cut Client Onboarding from 2 Weeks to 2 Days",
    excerpt: "The automation stack, the AI agents, and the process redesign that transformed our client onboarding experience.",
    category: "AI Automation",
    categoryColor: "text-amber-700",
    categoryBg: "bg-amber-50 border-amber-200",
    author: "Lisa Park",
    authorRole: "Operations Lead",
    avatar: "LP",
    date: "May 15, 2026",
    readTime: "6 min",
    views: 7234,
    likes: 534,
    comments: 29,
    imageGradient: "from-amber-500 to-orange-600",
    tags: ["Onboarding", "Automation", "Operations"],
  },
  {
    id: "6",
    title: "The State of Web Performance: Core Web Vitals in 2026",
    excerpt: "LCP, INP, CLS — what the new metrics mean, how to measure them, and the optimizations that actually move the needle.",
    category: "Web Development",
    categoryColor: "text-blue-700",
    categoryBg: "bg-blue-50 border-blue-200",
    author: "James Wilson",
    authorRole: "Performance Engineer",
    avatar: "JW",
    date: "May 12, 2026",
    readTime: "11 min",
    views: 6789,
    likes: 445,
    comments: 34,
    imageGradient: "from-blue-600 to-indigo-700",
    tags: ["Performance", "Core Web Vitals", "Speed"],
  },
];

const insights: InsightStat[] = [
  { value: "2.4M+", label: "AI Actions Processed", change: "+128%", positive: true, icon: <Zap className="w-5 h-5" /> },
  { value: "94.2%", label: "Client Satisfaction", change: "+12%", positive: true, icon: <Heart className="w-5 h-5" /> },
  { value: "0.18s", label: "Avg Response Time", change: "-45%", positive: true, icon: <Clock className="w-5 h-5" /> },
  { value: "50+", label: "Countries Served", change: "+8", positive: true, icon: <Globe className="w-5 h-5" /> },
];

const categories = [
  { name: "All", count: 156, icon: <BookOpen className="w-4 h-4" /> },
  { name: "Web Development", count: 42, icon: <Code className="w-4 h-4" /> },
  { name: "SEO", count: 28, icon: <BarChart3 className="w-4 h-4" /> },
  { name: "AI Automation", count: 35, icon: <Zap className="w-4 h-4" /> },
  { name: "n8n", count: 19, icon: <Workflow className="w-4 h-4" /> },
  { name: "AI Chatbot", count: 32, icon: <Bot className="w-4 h-4" /> },
];

const tags = [
  "Next.js", "React", "SEO", "AI", "n8n", "Chatbot", "Performance",
  "Automation", "Scaling", "TypeScript", "Tailwind", "Strategy",
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

/* ─── Featured Post Card ─── */
function FeaturedPost({ post }: { post: BlogPost }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-500"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${post.imageGradient} p-8 flex flex-col justify-end`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full ${post.categoryBg} ${post.categoryColor} text-xs font-bold border`}>
                {post.category}
              </span>
              {post.trending && (
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 text-xs font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3" /> Trending
                </span>
              )}
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
              {post.title}
            </h2>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-white/5" />
        </div>

        {/* Content Side */}
        <div className="p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 text-sm lg:text-base">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-sm font-semibold">
                {post.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{post.author}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{post.authorRole}</p>
              </div>
            </div>

            {/* Meta & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-light)]">
              <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {post.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <motion.button whileTap={{ scale: 0.9 }} onClick={handleLike} className={`p-2 rounded-lg transition-colors ${liked ? "text-red-500 bg-red-50" : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)]"}`}>
                  <Heart className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`} />
                </motion.button>
                <button className="p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
                  <Bookmark className={`w-4 h-4 ${saved ? "fill-[var(--color-primary)] text-[var(--color-primary)]" : ""}`} />
                </button>
                <button className="p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Blog Post Card ─── */
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 flex flex-col"
    >
      {/* Card Image */}
      <div className={`h-48 bg-gradient-to-br ${post.imageGradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-lg ${post.categoryBg} ${post.categoryColor} text-[10px] font-bold border`}>
            {post.category}
          </span>
          {post.trending && (
            <span className="px-2 py-1 rounded-lg bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold flex items-center gap-0.5">
              <Flame className="w-3 h-3" /> Hot
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <ArrowRight className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-md bg-[var(--color-bg-hover)] text-[var(--color-text-muted)] text-[10px] font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border-light)]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-[10px] font-semibold">
              {post.avatar}
            </div>
            <div>
              <p className="text-[11px] font-medium text-[var(--color-text-primary)]">{post.author}</p>
              <p className="text-[10px] text-[var(--color-text-muted)]">{post.readTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <motion.button whileTap={{ scale: 0.9 }} onClick={handleLike} className={`flex items-center gap-1 text-[11px] transition-colors ${liked ? "text-red-500" : "text-[var(--color-text-muted)]"}`}>
              <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500" : ""}`} />
              {likeCount}
            </motion.button>
            <span className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]">
              <MessageCircle className="w-3.5 h-3.5" />
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Insight Stat Card ─── */
function InsightCard({ stat, index }: { stat: InsightStat; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-lg)] transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-[var(--color-icon-bg-1)] flex items-center justify-center text-[var(--color-primary)]">
          {stat.icon}
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.positive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
          {stat.change}
        </span>
      </div>
      <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">{stat.value}</div>
      <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
    </motion.div>
  );
}

/* ─── Category Tab ─── */
function CategoryTab({ category, index, isActive, onClick }: {
  category: typeof categories[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      variants={fadeUp}
      custom={index}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--shadow-btn-primary)]"
          : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
      }`}
    >
      {category.icon}
      {category.name}
      <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]"}`}>
        {category.count}
      </span>
    </motion.button>
  );
}

/* ─── Newsletter Section ─── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-primary-dark)] p-8 lg:p-12"
    >
      {/* Decorative elements */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
          <Sparkles className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
          Stay Ahead of the Curve
        </h2>
        <p className="text-blue-100 mb-8">
          Get weekly insights on AI, web development, SEO, and automation —
          straight from the CreatiKai team.
        </p>

        <AnimatePresence mode="wait">
          {subscribed ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center justify-center gap-2 text-white"
            >
              <Check className="w-5 h-5 text-emerald-300" />
              <span className="font-medium">You are subscribed! Check your inbox.</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="mt-4 text-blue-200 text-xs">
          No spam. Unsubscribe anytime. Join 8,500+ subscribers.
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function BlogInsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-hover)] via-white to-white pt-[var(--hero-pt)] pb-12">
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
              <BookOpen className="w-4 h-4" />
              CreatiKai Blog & Insights
            </div>
            <h1 className="text-[var(--hero-title-size)] font-bold text-[var(--color-text-primary)] leading-tight mb-4">
              Insights That{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Deep dives, case studies, and expert takes on AI, web development,
              SEO, and the future of digital work.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-faint)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or tags..."
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 focus:outline-none shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 text-sm"
              />
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-2 mb-4"
          >
            {tags.map((tag, i) => (
              <motion.button
                key={tag}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 rounded-lg bg-[var(--color-bg-hover)] hover:bg-[var(--color-icon-bg-1)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all"
              >
                #{tag}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED POST
      ═══════════════════════════════════════ */}
      <section className="pb-12">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORY TABS
      ═══════════════════════════════════════ */}
      <section className="py-6 border-y border-[var(--color-border-light)] bg-white sticky top-0 z-30">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
          >
            {categories.map((cat, i) => (
              <CategoryTab
                key={cat.name}
                category={cat}
                index={i}
                isActive={activeCategory === cat.name}
                onClick={() => setActiveCategory(cat.name)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BLOG GRID
      ═══════════════════════════════════════ */}
      <section className="py-12">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <span className="text-sm text-[var(--color-text-muted)]">{filteredPosts.length} articles</span>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-12 h-12 text-[var(--color-text-faint)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">No articles found</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Try adjusting your search or category filter.</p>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 py-3 rounded-xl bg-[var(--color-bg-hover)] hover:bg-[var(--color-border-light)] text-[var(--color-text-primary)] text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            Load More Articles
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSIGHTS STATS
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--color-section-alt)]">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-xs font-semibold mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              By The Numbers
            </span>
            <h2 className="text-[var(--section-title-size)] font-bold text-[var(--color-text-primary)]">
              Impact{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-purple)] bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {insights.map((stat, i) => (
              <InsightCard key={stat.label} stat={stat} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWSLETTER
      ═══════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <NewsletterSection />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FOOTER
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
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 mb-8">
              Let us build something extraordinary together. From AI automation to
              world-class websites — we have got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Read More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}