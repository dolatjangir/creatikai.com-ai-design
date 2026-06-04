"use client";

import React, { useState } from "react";
import { motion, AnimatePresence , Variants} from "framer-motion";
import {
  Users,
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Flame,
  Award,
  Crown,
  Star,
  Zap,
  Code,
  BarChart3,
  Bot,
  Workflow,
  Search,
  Plus,
  Filter,
  ChevronDown,
  ChevronUp,
  ThumbsUp,
  MessageCircle,
  Eye,
  Clock,
  Hash,
  Sparkles,
  ArrowRight,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Gem,
  Trophy,
  Medal,
  Pin,
  Bell,
  Mail,
  Check,
  X,
  MoreHorizontal,
  Send,
  Loader2,
  Image,
  Link2,
  AtSign,
  Smile,
  Paperclip,
  Mic,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Building2,
  UserCheck,
  Shield,
  Verified,
  BadgeCheck,
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ─── Types ─── */
interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    badge?: string;
  };
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  likes: number;
  comments: number;
  views: number;
  timeAgo: string;
  isPinned?: boolean;
  isHot?: boolean;
  tags: string[];
}

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  role: string;
  points: number;
  badge: string;
  contributions: number;
}

interface Topic {
  name: string;
  count: number;
  trending: boolean;
}

/* ─── DEMO DATA ─── */
const posts: Post[] = [
  {
    id: "1",
    author: { name: "Sarah Chen", avatar: "SC", role: "Web Developer", badge: "Top Contributor" },
    category: "Web Development",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "How I Built a 100K RPM Website with Next.js 15 and CreatiKai",
    excerpt: "Sharing my architecture, performance optimizations, and how CreatiKai's web dev team helped me scale from 1K to 100K requests per minute in 3 months.",
    likes: 342,
    comments: 56,
    views: 12890,
    timeAgo: "2 hours ago",
    isPinned: true,
    isHot: true,
    tags: ["Next.js", "Performance", "Scaling"],
  },
  {
    id: "2",
    author: { name: "Marcus Johnson", avatar: "MJ", role: "SEO Manager", badge: "Expert" },
    category: "SEO",
    categoryColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "My SEO Playbook: 300% Traffic Growth in 6 Months Using CreatiKai",
    excerpt: "A complete breakdown of the keyword strategy, technical fixes, and content framework that tripled our organic traffic. Includes downloadable templates.",
    likes: 289,
    comments: 43,
    views: 9876,
    timeAgo: "5 hours ago",
    isHot: true,
    tags: ["SEO Strategy", "Case Study", "Templates"],
  },
  {
    id: "3",
    author: { name: "Priya Sharma", avatar: "PS", role: "AI Automation Lead" },
    category: "AI Automation",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "Automating 80% of Customer Support with n8n + CreatiKai AI",
    excerpt: "Step-by-step guide to building a fully automated support pipeline. From ticket triage to AI response generation to escalation handling.",
    likes: 267,
    comments: 38,
    views: 8456,
    timeAgo: "8 hours ago",
    isHot: true,
    tags: ["n8n", "AI Automation", "Customer Support"],
  },
  {
    id: "4",
    author: { name: "Alex Rivera", avatar: "AR", role: "n8n Specialist", badge: "Community Champion" },
    category: "n8n",
    categoryColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    title: "10 Advanced n8n Workflows Every Business Should Have",
    excerpt: "Ready-to-use workflow templates for lead scoring, data sync, reporting, notifications, and more. Copy-paste and customize for your stack.",
    likes: 198,
    comments: 29,
    views: 7234,
    timeAgo: "12 hours ago",
    tags: ["n8n", "Workflows", "Templates"],
  },
  {
    id: "5",
    author: { name: "Emily Watson", avatar: "EW", role: "AI Chatbot Developer" },
    category: "AI Chatbot",
    categoryColor: "bg-purple-50 text-purple-700 border-purple-200",
    title: "Training Your Chatbot on Company Data: Best Practices & Pitfalls",
    excerpt: "What works, what does not, and how to avoid the common mistakes that kill chatbot accuracy. Based on 50+ deployments with CreatiKai.",
    likes: 156,
    comments: 22,
    views: 5678,
    timeAgo: "1 day ago",
    tags: ["AI Chatbot", "Training", "Best Practices"],
  },
  {
    id: "6",
    author: { name: "David Kim", avatar: "DK", role: "Full-Stack Developer" },
    category: "Web Development",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
    title: "CreatiKai vs Agency: Why I Switched and Never Looked Back",
    excerpt: "A honest comparison of costs, quality, turnaround time, and communication. Spoiler: CreatiKai won on every metric for my startup.",
    likes: 445,
    comments: 89,
    views: 15678,
    timeAgo: "1 day ago",
    isHot: true,
    tags: ["Comparison", "Startup", "Experience"],
  },
  {
    id: "7",
    author: { name: "Lisa Park", avatar: "LP", role: "Marketing Director" },
    category: "AI Automation",
    categoryColor: "bg-amber-50 text-amber-700 border-amber-200",
    title: "From 40 Hours to 4: How AI Automation Changed My Marketing Team",
    excerpt: "Real numbers, real workflows, real results. How we automated reporting, content distribution, and lead nurturing with CreatiKai's AI tools.",
    likes: 312,
    comments: 47,
    views: 11234,
    timeAgo: "2 days ago",
    isHot: true,
    tags: ["Marketing", "ROI", "Team Productivity"],
  },
];

const leaderboard: LeaderboardUser[] = [
  { rank: 1, name: "David Kim", avatar: "DK", role: "Full-Stack Dev", points: 12540, badge: "Legend", contributions: 156 },
  { rank: 2, name: "Sarah Chen", avatar: "SC", role: "Web Developer", points: 11230, badge: "Expert", contributions: 134 },
  { rank: 3, name: "Marcus Johnson", avatar: "MJ", role: "SEO Manager", points: 9870, badge: "Expert", contributions: 112 },
  { rank: 4, name: "Priya Sharma", avatar: "PS", role: "AI Automation", points: 8450, badge: "Pro", contributions: 98 },
  { rank: 5, name: "Alex Rivera", avatar: "AR", role: "n8n Specialist", points: 7230, badge: "Pro", contributions: 87 },
];

const trendingTopics: Topic[] = [
  { name: "Next.js 15", count: 234, trending: true },
  { name: "AI Chatbot Training", count: 189, trending: true },
  { name: "n8n Workflows", count: 167, trending: true },
  { name: "SEO Strategy", count: 145, trending: false },
  { name: "Performance", count: 132, trending: false },
  { name: "Automation", count: 128, trending: true },
  { name: "Scaling", count: 98, trending: false },
  { name: "Templates", count: 87, trending: false },
];

const categories = [
  { name: "All Topics", icon: <Globe className="w-4 h-4" />, count: 1240, active: true },
  { name: "Web Development", icon: <Code className="w-4 h-4" />, count: 342, active: false },
  { name: "SEO Manager", icon: <BarChart3 className="w-4 h-4" />, count: 198, active: false },
  { name: "AI Automation", icon: <Zap className="w-4 h-4" />, count: 267, active: false },
  { name: "n8n", icon: <Workflow className="w-4 h-4" />, count: 156, active: false },
  { name: "AI Chatbot", icon: <Bot className="w-4 h-4" />, count: 278, active: false },
];

const communityStats = [
  { label: "Members", value: "12,450", icon: <Users className="w-5 h-5" /> },
  { label: "Discussions", value: "8,920", icon: <MessageSquare className="w-5 h-5" /> },
  { label: "Solutions", value: "4,567", icon: <Check className="w-5 h-5" /> },
  { label: "Daily Active", value: "2,100", icon: <Flame className="w-5 h-5" /> },
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

    for (let i = 0; i < 40; i++) {
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

/* ─── Post Card ─── */
function PostCard({ post, index }: { post: Post; index: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -3 }}
      className="group bg-white rounded-2xl p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-sm font-semibold">
            {post.author.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">{post.author.name}</span>
              {post.author.badge && (
                <span className="px-1.5 py-0.5 rounded-md bg-[var(--color-gold-bg)] border border-[var(--color-gold-border)] text-[var(--color-gold)] text-[10px] font-bold flex items-center gap-0.5">
                  <Award className="w-3 h-3" /> {post.author.badge}
                </span>
              )}
            </div>
            <span className="text-xs text-[var(--color-text-muted)]">{post.author.role}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post.isPinned && (
            <span className="px-2 py-0.5 rounded-md bg-[var(--color-icon-bg-1)] text-[var(--color-primary)] text-[10px] font-bold flex items-center gap-1">
              <Pin className="w-3 h-3" /> Pinned
            </span>
          )}
          {post.isHot && (
            <span className="px-2 py-0.5 rounded-md bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold flex items-center gap-1">
              <Flame className="w-3 h-3" /> Hot
            </span>
          )}
        </div>
      </div>

      {/* Category */}
      <span className={`inline-flex px-2 py-0.5 rounded-md border text-[10px] font-semibold mb-2 ${post.categoryColor}`}>
        {post.category}
      </span>

      {/* Title & Excerpt */}
      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 line-clamp-2">
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

      {/* Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border-light)]">
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${liked ? "text-red-500" : "text-[var(--color-text-muted)] hover:text-red-500"}`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`} />
            {likeCount}
          </motion.button>
          <button className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
            <MessageCircle className="w-4 h-4" />
            {post.comments}
          </button>
          <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <Eye className="w-4 h-4" />
            {post.views.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[var(--color-text-faint)]">{post.timeAgo}</span>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setSaved(!saved)}
            className={`transition-colors ${saved ? "text-[var(--color-primary)]" : "text-[var(--color-text-faint)] hover:text-[var(--color-primary)]"}`}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-[var(--color-primary)]" : ""}`} />
          </motion.button>
          <button className="text-[var(--color-text-faint)] hover:text-[var(--color-primary)] transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Leaderboard Row ─── */
function LeaderboardRow({ user, index }: { user: LeaderboardUser; index: number }) {
  const rankColors = [
    "from-amber-400 to-orange-500",
    "from-slate-300 to-slate-400",
    "from-amber-600 to-amber-700",
  ];

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-bg-hover)] transition-colors"
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
        index < 3
          ? `bg-gradient-to-br ${rankColors[index]} text-white`
          : "bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]"
      }`}>
        {user.rank}
      </div>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center text-white text-xs font-semibold">
        {user.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{user.name}</span>
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
            user.badge === "Legend" ? "bg-purple-50 text-purple-700" :
            user.badge === "Expert" ? "bg-blue-50 text-blue-700" :
            "bg-emerald-50 text-emerald-700"
          }`}>
            {user.badge}
          </span>
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">{user.role}</span>
      </div>
      <div className="text-right">
        <span className="text-sm font-bold text-[var(--color-text-primary)]">{user.points.toLocaleString()}</span>
        <span className="text-[10px] text-[var(--color-text-muted)] block">pts</span>
      </div>
    </motion.div>
  );
}

/* ─── Topic Pill ─── */
function TopicPill({ topic, index }: { topic: Topic; index: number }) {
  return (
    <motion.button
      variants={fadeUp}
      custom={index}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
        topic.trending
          ? "bg-[var(--color-badge-bg)] border-[var(--color-badge-border)] text-[var(--color-badge-text)] hover:shadow-md"
          : "bg-white border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:shadow-sm"
      }`}
    >
      <Hash className="w-3.5 h-3.5" />
      {topic.name}
      <span className="text-[10px] text-[var(--color-text-faint)]">{topic.count}</span>
      {topic.trending && <TrendingUp className="w-3 h-3 text-[var(--color-amber)]" />}
    </motion.button>
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--shadow-btn-primary)]"
          : "bg-white text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
      }`}
    >
      {category.icon}
      {category.name}
      <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
        isActive ? "bg-white/20 text-white" : "bg-[var(--color-bg-hover)] text-[var(--color-text-muted)]"
      }`}>
        {category.count}
      </span>
    </motion.button>
  );
}

/* ─── Main Page ─── */
export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All Topics" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNewPost = async () => {
    if (!newPostContent.trim()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setShowNewPost(false);
    setNewPostContent("");
  };

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
              <Users className="w-4 h-4" />
              CreatiKai Community
            </div>
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] leading-tight mb-4">
              Learn, Share, and{" "}
              <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                Grow Together
              </span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Join 12,000+ developers, marketers, and AI enthusiasts. Ask questions, share
              wins, and level up your skills.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10"
          >
            {communityStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-xl p-4 border border-[var(--color-border)] shadow-[var(--shadow-sm)] text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-icon-bg-1)] flex items-center justify-center mx-auto mb-2 text-[var(--color-primary)]">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-[var(--color-text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search + New Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-faint)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search discussions, topics, or members..."
                className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 focus:outline-none shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 text-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowNewPost(true)}
              className="px-6 py-3.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              New Discussion
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CATEGORY TABS
      ═══════════════════════════════════════ */}
      <section className="py-6 border-b border-[var(--color-border-light)] bg-white sticky top-0 z-30">
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
          MAIN CONTENT GRID
      ═══════════════════════════════════════ */}
      <section className="py-10">
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — Posts Feed */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {activeCategory === "All Topics" ? "Latest Discussions" : activeCategory}
                </h2>
                <span className="text-sm text-[var(--color-text-muted)]">{filteredPosts.length} posts</span>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="space-y-4"
              >
                <AnimatePresence mode="wait">
                  {filteredPosts.map((post, i) => (
                    <PostCard key={post.id} post={post} index={i} />
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
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">No posts found</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Try adjusting your search or category filter.</p>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-3 rounded-xl bg-[var(--color-bg-hover)] hover:bg-[var(--color-border-light)] text-[var(--color-text-primary)] text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                Load More Discussions
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right — Sidebar */}
            <div className="space-y-6">
              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-[var(--color-border-light)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[var(--color-amber)]" />
                    <h3 className="font-semibold text-[var(--color-text-primary)] text-sm">Top Contributors</h3>
                  </div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">This Month</span>
                </div>
                <div className="p-3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {leaderboard.map((user, i) => (
                      <LeaderboardRow key={user.name} user={user} index={i} />
                    ))}
                  </motion.div>
                </div>
                <div className="px-5 py-3 border-t border-[var(--color-border-light)] bg-[var(--color-bg-hover)]">
                  <button className="text-xs text-[var(--color-primary)] font-medium hover:underline flex items-center gap-1">
                    View Full Leaderboard <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>

              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-sm)] overflow-hidden p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-[var(--color-amber)]" />
                  <h3 className="font-semibold text-[var(--color-text-primary)] text-sm">Trending Topics</h3>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {trendingTopics.map((topic, i) => (
                    <TopicPill key={topic.name} topic={topic} index={i} />
                  ))}
                </motion.div>
              </motion.div>

              {/* Community Guidelines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-5 text-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-semibold text-sm">Community Guidelines</h3>
                </div>
                <ul className="space-y-2 text-xs text-blue-100">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    Be respectful and constructive in all discussions
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    Share knowledge and help fellow members
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    No spam, self-promotion, or off-topic posts
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    Give credit when sharing others work
                  </li>
                </ul>
              </motion.div>

              {/* Join CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[var(--color-section-alt)] rounded-2xl p-5 border border-[var(--color-border)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-icon-bg-1)] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)] text-sm">New to the Community?</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">Introduce yourself and earn your first badge</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-2.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold shadow-[var(--shadow-btn-primary)] transition-colors"
                >
                  Introduce Yourself
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEW POST MODAL
      ═══════════════════════════════════════ */}
      <AnimatePresence>
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowNewPost(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border)] w-full max-w-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border-light)] flex items-center justify-between">
                <h3 className="font-semibold text-[var(--color-text-primary)]">Start a New Discussion</h3>
                <button
                  onClick={() => setShowNewPost(false)}
                  className="w-8 h-8 rounded-full hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Title</label>
                  <input
                    type="text"
                    placeholder="What is your question or topic?"
                    className="w-full px-4 py-2.5 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Category</label>
                  <div className="grid grid-cols-3 gap-2">
                    {categories.slice(1).map((cat) => (
                      <button
                        key={cat.name}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-bg-hover)] hover:bg-[var(--color-icon-bg-1)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        {cat.icon}
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Content</label>
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Share your thoughts, ask a question, or start a discussion..."
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border border-transparent focus:border-[var(--color-primary)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all resize-none"
                  />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button className="w-8 h-8 rounded-lg hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
                    <Image className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
                    <Link2 className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
                    <AtSign className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-lg hover:bg-[var(--color-bg-hover)] flex items-center justify-center text-[var(--color-text-muted)] transition-colors">
                    <Hash className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-[var(--color-border-light)] flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowNewPost(false)}
                  className="px-5 py-2 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNewPost}
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold shadow-[var(--shadow-btn-primary)] transition-colors flex items-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Posting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Post Discussion
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}