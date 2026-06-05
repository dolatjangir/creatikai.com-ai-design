"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ImagePlus,
  X,

  Calendar,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Wand2,
  Upload,
  ChevronRight,
  Eye,
  Hash,
  Link as LinkIcon,
  Bot,
  User,
  Paperclip,
  Mic,
  MoreHorizontal,
  Image,
  Zap,
  Settings,
  History,
  Plus,
  MessageSquare,
  ArrowUp,
  Trash2,
  Edit3,
  Play,
  Pause,
  CheckCheck,
  Share2,
  Download,
  Maximize2,
  Minimize2,
  RefreshCw,
  FileImage,
  Type,
  AlignLeft,
  GripVertical,
  Cross
} from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { API_ROUTES } from "@/constant/ApiRoute";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────

interface SocialPost {
  id: string;
  adminId: string;
  imageUrl: string;
  caption: string;
  platform: "INSTAGRAM" | "FACEBOOK";
  igAccountId: string | null;
  containerId: string | null;
  scheduledId: string | null;
  scheduledTime: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  success: boolean;
  agentSummary: string;
  scheduledTime: string;
  post: SocialPost;
}

interface ApiError {
  message: string;
  status?: number;
}

interface ChatMessage {
  id: string;
  role: "user" | "agent";
  content?: string;
  imageUrl?: string;
  platform?: "INSTAGRAM" | "FACEBOOK";
  scheduledTime?: string;
  status?: string;
  caption?: string;
  postId?: string;
  timestamp: Date;
}

// ─── Constants ──────────────────────────────────────────────────────

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://your-api.com";
const API_ENDPOINT = `${BASE_URL}/social-auth/auto-social-agent`;

const AGENT_AVATAR = "https://api.dicebear.com/7.x/bottts/svg?seed=SocialAgent&backgroundColor=2563eb";

// ─── Component ───────────────────────────────────────────────────────

export default function SocialMediaAgent() {
  // ─── State ────────────────────────────────────────────────────────
  const [prompt, setPrompt] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<"INSTAGRAM" | "FACEBOOK" | null>(null);
  const [scheduledTime, setScheduledTime] = useState("");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "history">("chat");
  const [isTyping, setIsTyping] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  // ─── Auto-scroll chat ─────────────────────────────────────────────
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, response]);

  // ─── Auto-resize textarea ─────────────────────────────────────────
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [prompt]);

  // ─── Handlers ─────────────────────────────────────────────────────

  const handleImageUpload = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError({ message: "Please upload a valid image file (PNG, JPG, WEBP)" });
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError({ message: "Image size must be less than 10MB" });
      return;
    }
    setUploadedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setUploadedImagePreview(reader.result as string);
    reader.readAsDataURL(file);
    setShowImageUpload(false);
    setError(null);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files?.[0]) handleImageUpload(e.dataTransfer.files[0]);
    },
    [handleImageUpload]
  );

  const removeImage = () => {
    setUploadedImage(null);
    setUploadedImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const copyCaption = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      setError({ message: "Please enter a prompt for the AI agent" });
      textareaRef.current?.focus();
      return;
    }
    if (!selectedPlatform) {
      setError({ message: "Please select a platform (Instagram or Facebook)" });
      return;
    }
    if (!scheduledTime) {
      setError({ message: "Please select a schedule time" });
      return;
    }

    // Add user message to chat
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: prompt.trim(),
      imageUrl: uploadedImagePreview || undefined,
      platform: selectedPlatform,
      scheduledTime: scheduledTime,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setIsTyping(true);
    setError(null);
    setResponse(null);

    try {
      const formData = new FormData();
      formData.append("content", prompt.trim());
      formData.append("platform", selectedPlatform);
      formData.append("scheduledTime", new Date(scheduledTime).toISOString());
      if (uploadedImage) formData.append("image", uploadedImage);

      const res = await fetch(API_ROUTES.SOCIALMEDIA.AUTOSOCIALAGENT.RUN, {
        method: "POST",
        body: formData,
        credentials: "include" 
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || `Request failed with status ${res.status}`);
      }

      const data: ApiResponse = await res.json();
      setResponse(data);

      // Add agent response to chat
      const agentMsg: ChatMessage = {
        id: `agent-${Date.now()}`,
        role: "agent",
        content: data.agentSummary,
        imageUrl: data.post.imageUrl,
        platform: data.post.platform,
        scheduledTime: data.post.scheduledTime,
        status: data.post.status,
        caption: data.post.caption,
        postId: data.post.id,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMsg]);
    } catch (err) {
      setError({
        message: err instanceof Error ? err.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
      setIsTyping(false);
      setPrompt("");
      removeImage();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const resetForm = () => {
    setPrompt("");
    setSelectedPlatform(null);
    setScheduledTime("");
    removeImage();
    setResponse(null);
    setError(null);
    setMessages([]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  // ─── Render ───────────────────────────────────────────────────────

  return (
    <div className="h-screen w-full bg-[var(--bg-secondary)] text-[var(--text-primary)] font-[var(--font-family)] flex overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          SIDEBAR
          ═══════════════════════════════════════════════════════════ */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarCollapsed ? 80 : 320 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-full bg-[var(--bg-primary)] border-r border-[var(--border-medium)] flex flex-col shrink-0 z-20"
      >
        {/* Sidebar Header — Agent Identity */}
        <div className="p-4 border-b border-[var(--border-light)]">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center shrink-0 shadow-[var(--shadow-md)]"
            >
              <Bot className="w-5 h-5 text-blue-700" />
            </motion.div>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-w-0"
              >
                <h2 className="font-bold text-[var(--text-primary)] text-sm truncate">AutoSocial Agent</h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-emerald)] animate-pulse" />
                  <span className="text-xs text-[var(--color-emerald)] font-medium">Online</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {/* New Chat Button */}
          {!sidebarCollapsed && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetForm}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] text-[var(--color-primary-700)] font-semibold text-sm hover:bg-[var(--color-primary-100)] transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Campaign
            </motion.button>
          )}

          {/* Platform Selection */}
          {!sidebarCollapsed && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider px-1">
                Platform
              </h3>
              <div className="space-y-2">
                {/* Instagram */}
                <button
                  onClick={() => setSelectedPlatform("INSTAGRAM")}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                    selectedPlatform === "INSTAGRAM"
                      ? "border-[var(--color-purple)] bg-[var(--color-purple)]/5 shadow-[0_0_0_3px_rgba(147,51,234,0.08)]"
                      : "border-transparent bg-[var(--color-neutral-50)] hover:border-[var(--color-purple)]/20"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      selectedPlatform === "INSTAGRAM"
                        ? "bg-[var(--color-purple)]"
                        : "bg-[var(--color-purple)]/10"
                    }`}
                  >
                    <FaInstagram
                      className={`w-4 h-4 ${
                        selectedPlatform === "INSTAGRAM" ? "text-white" : "text-[var(--color-purple)]"
                      }`}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`text-sm font-semibold ${
                        selectedPlatform === "INSTAGRAM" ? "text-[var(--color-purple)]" : "text-[var(--text-primary)]"
                      }`}
                    >
                      Instagram
                    </p>
                    <p className="text-xs text-[var(--text-tertiary)]">Visual storytelling</p>
                  </div>
                  <AnimatePresence>
                    {selectedPlatform === "INSTAGRAM" && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-6 h-6 rounded-full bg-[var(--color-purple)] flex items-center justify-center shrink-0"
                      >
                        <Check className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Facebook */}
                <button
                  onClick={() => setSelectedPlatform("FACEBOOK")}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                    selectedPlatform === "FACEBOOK"
                      ? "border-[#1877F2] bg-[#1877F2]/5 shadow-[0_0_0_3px_rgba(24,119,242,0.08)]"
                      : "border-transparent bg-[var(--color-neutral-50)] hover:border-[#1877F2]/20"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      selectedPlatform === "FACEBOOK" ? "bg-[#1877F2]" : "bg-[#1877F2]/10"
                    }`}
                  >
                    <FaFacebook
                      className={`w-4 h-4 ${
                        selectedPlatform === "FACEBOOK" ? "text-white" : "text-[#1877F2]"
                      }`}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`text-sm font-semibold ${
                        selectedPlatform === "FACEBOOK" ? "text-[#1877F2]" : "text-[var(--text-primary)]"
                      }`}
                    >
                      Facebook
                    </p>
                    <p className="text-xs text-[var(--text-tertiary)]">Community reach</p>
                  </div>
                  <AnimatePresence>
                    {selectedPlatform === "FACEBOOK" && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0"
                      >
                        <Check className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          )}

          {/* Schedule Time */}
          {!sidebarCollapsed && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider px-1">
                Schedule
              </h3>
              <div className="bg-[var(--color-neutral-50)] rounded-xl border border-[var(--border-medium)] p-3 space-y-2">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Clock className="w-4 h-4 text-[var(--color-amber)]" />
                  <span className="text-sm font-medium">Publish Time</span>
                </div>
                <input
                  type="datetime-local"
                  value={scheduledTime}
                  onChange={(e) => {
                    setScheduledTime(e.target.value);
                    if (error) setError(null);
                  }}
                  className="w-full px-3 py-2.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all [color-scheme:light]"
                />
                {scheduledTime && (
                  <p className="text-xs text-[var(--color-emerald)] font-medium flex items-center gap-1">
                    <CheckCheck className="w-3 h-3" />
                    {new Date(scheduledTime).toLocaleString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Reference Image Section in Sidebar */}
          {/* {!sidebarCollapsed && (
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider px-1">
                Reference Image
              </h3>
              <AnimatePresence mode="wait">
                {!uploadedImagePreview ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-[var(--border-medium)] rounded-xl p-6 text-center cursor-pointer hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-50)] transition-all duration-300 group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="hidden"
                    />
                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <ImagePlus className="w-5 h-5 text-[var(--color-primary-600)]" />
                    </div>
                    <p className="text-xs text-[var(--text-tertiary)]">Click to upload</p>
                    <p className="text-[10px] text-[var(--text-faint)] mt-1">PNG, JPG, WEBP</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative rounded-xl overflow-hidden border border-[var(--border-medium)] group"
                  >
                    <img src={uploadedImagePreview} alt="Reference" className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <RefreshCw className="w-4 h-4 text-[var(--text-primary)]" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm">
                      Reference
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )} */}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[var(--border-light)]">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)]" />
            ) : (
              <div className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                <Minimize2 className="w-4 h-4" />
                <span>Collapse</span>
              </div>
            )}
          </button>
        </div>
      </motion.aside>

      {/* ═══════════════════════════════════════════════════════════
          MAIN CHAT AREA
          ═══════════════════════════════════════════════════════════ */}
      <main className="flex-1 flex flex-col h-full relative">
        {/* Top Bar */}
        <header className="h-14 border-b border-[var(--border-light)] bg-[var(--bg-primary)]/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--gradient-primary)] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-blue-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[var(--color-primary)]">Social Media Agent</h1>
              <p className="text-[10px] text-[var(--text-tertiary)]">
                {selectedPlatform ? `${selectedPlatform} • ` : ""}
                {scheduledTime
                  ? new Date(scheduledTime).toLocaleDateString()
                  : "No schedule set"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <button
                onClick={resetForm}
                className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] text-[var(--text-tertiary)] transition-colors"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <Link href="/admin-dashboard/socialmedia-manager"><button className="p-2 rounded-lg border border-neutral-300 hover:bg-[var(--color-neutral-100)] text-[var(--text-tertiary)] transition-colors">
              <X className="w-4 h-4" />
            </button></Link>
          </div>
        </header>

        {/* Chat Messages Area */}
        <div
          ref={chatContainerRef}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`flex-1 overflow-y-auto px-4 py-6 space-y-6 ${
            dragActive ? "bg-[var(--color-primary-50)]/50" : ""
          }`}
        >
          {/* Welcome Message */}
          {messages.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center max-w-lg mx-auto py-20"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--gradient-primary)] flex items-center justify-center mb-6 ">
                <Bot className="w-12 h-12 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                What would you like to post?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Describe your content idea, and I will generate a stunning image and caption. 
                Select your platform and schedule time from the sidebar first.
              </p>

              {/* Quick Prompts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {[
                  "Create a summer sale announcement with vibrant colors",
                  "Design a motivational Monday post for entrepreneurs",
                  "Make a product launch teaser with sleek dark theme",
                  "Generate a customer testimonial graphic with quotes",
                ].map((suggestion, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPrompt(suggestion)}
                    className="p-4 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-primary)] text-left hover:border-[var(--color-primary-300)] hover:shadow-[var(--shadow-md)] transition-all duration-300 group"
                  >
                    <Sparkles className="w-4 h-4 text-[var(--color-primary-500)] mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-[var(--text-secondary)] leading-snug">{suggestion}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Messages */}
          <AnimatePresence>
            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className="shrink-0">
                  {msg.role === "agent" ? (
                    <div className="w-8 h-8 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[var(--color-neutral-200)] flex items-center justify-center">
                      <User className="w-4 h-4 text-[var(--text-secondary)]" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`max-w-[80%] space-y-2 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  {/* Content */}
                  {msg.content && (
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-[var(--color-primary-600)] text-white rounded-br-md"
                          : "bg-[var(--bg-primary)] border border-[var(--border-medium)] text-[var(--text-primary)] rounded-bl-md shadow-[var(--shadow-sm)]"
                      }`}
                    >
                      {msg.content}
                    </div>
                  )}

                  {/* User uploaded image preview */}
                  {msg.role === "user" && msg.imageUrl && (
                    <div className="rounded-xl overflow-hidden border border-[var(--border-medium)] max-w-xs">
                      <img src={msg.imageUrl} alt="Uploaded" className="w-full h-auto object-cover" />
                    </div>
                  )}

                  {/* Agent generated result card */}
                  {msg.role === "agent" && msg.imageUrl && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-medium)] shadow-[var(--shadow-lg)] overflow-hidden max-w-md"
                    >
                      {/* Generated Image */}
                      <div className="relative aspect-square bg-[var(--color-neutral-100)]">
                        <img src={msg.imageUrl} alt="Generated" className="w-full h-full object-cover" />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1 ${
                              msg.platform === "INSTAGRAM" ? "bg-[var(--color-purple)]" : "bg-[#1877F2]"
                            }`}
                          >
                            {msg.platform === "INSTAGRAM" ? (
                              <FaInstagram className="w-3 h-3" />
                            ) : (
                              <FaFacebook className="w-3 h-3" />
                            )}
                            {msg.platform}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[var(--color-amber)] text-white flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {msg.status}
                          </span>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="p-4 border-b border-[var(--border-light)]">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
                            <Type className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium">Caption</span>
                          </div>
                          <button
                            onClick={() => msg.caption && copyCaption(msg.caption)}
                            className="flex items-center gap-1 text-xs font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-colors"
                          >
                            {copiedCaption ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <p className="text-sm text-[var(--text-primary)] leading-relaxed">{msg.caption}</p>
                      </div>

                      {/* Meta */}
                      <div className="px-4 py-3 bg-[var(--color-neutral-50)] flex items-center justify-between">
                        <span className="text-[10px] text-[var(--text-faint)]">
                          {msg.scheduledTime &&
                            new Date(msg.scheduledTime).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                        </span>
                        <div className="flex gap-1">
                          <a
                            href={msg.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg hover:bg-[var(--color-neutral-200)] text-[var(--text-tertiary)] transition-colors"
                            title="View full image"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => msg.caption && copyCaption(msg.caption)}
                            className="p-1.5 rounded-lg hover:bg-[var(--color-neutral-200)] text-[var(--text-tertiary)] transition-colors"
                            title="Copy caption"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            className="p-1.5 rounded-lg hover:bg-[var(--color-neutral-200)] text-[var(--text-tertiary)] transition-colors"
                            title="Download"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Timestamp */}
                  <span className="text-[10px] text-[var(--text-faint)] px-1">{formatTime(msg.timestamp)}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--gradient-primary)] flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-[var(--bg-primary)] border border-[var(--border-medium)] rounded-2xl rounded-bl-md px-4 py-3 shadow-[var(--shadow-sm)]">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      className="w-2 h-2 rounded-full bg-[var(--color-primary-400)]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Drag Overlay */}
          <AnimatePresence>
            {dragActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[var(--color-primary-600)]/10 backdrop-blur-sm z-50 flex items-center justify-center pointer-events-none"
              >
                <div className="bg-[var(--bg-primary)] rounded-2xl border-2 border-dashed border-[var(--color-primary-400)] p-12 shadow-[var(--shadow-xl)]">
                  <Upload className="w-12 h-12 text-[var(--color-primary-500)] mx-auto mb-4" />
                  <p className="text-lg font-semibold text-[var(--color-primary-700)]">Drop image here</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Error Toast */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mx-6 mb-3 flex items-start gap-3 p-4 rounded-xl bg-[var(--color-error-50)] border border-[var(--color-error-100)] text-[var(--color-error-600)]"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium">{error.message}</p>
              </div>
              <button onClick={() => setError(null)} className="shrink-0 hover:opacity-70">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Kimi-Style Input Bar ───────────────────────────────── */}
        <div className="shrink-0 px-4 pb-4 pt-2">
          <div className="max-w-3xl mx-auto">
            {/* Attached image preview above input */}
            <AnimatePresence>
              {uploadedImagePreview && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="mb-2 flex items-center gap-2"
                >
                  <div className="relative rounded-lg overflow-hidden border border-[var(--border-medium)] w-16 h-16 group">
                    <img src={uploadedImagePreview} alt="Attached" className="w-full h-full object-cover" />
                    <button
                      onClick={removeImage}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  <span className="text-xs text-[var(--text-tertiary)]">Reference image attached</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Container */}
            <div
              ref={inputContainerRef}
              className="bg-[var(--bg-primary)] border border-[var(--border-medium)] rounded-2xl shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-shadow duration-300 overflow-hidden"
            >
              {/* Textarea */}
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  if (error) setError(null);
                }}
                onKeyDown={handleKeyDown}
                placeholder={
                  !selectedPlatform
                    ? "Select a platform from the sidebar first..."
                    : !scheduledTime
                    ? "Set a schedule time from the sidebar..."
                    : "Describe what you want to create..."
                }
                disabled={isLoading}
                rows={1}
                className="w-full px-5 pt-4 pb-2 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-faint)] resize-none focus:outline-none text-sm leading-relaxed disabled:opacity-50"
              />

              {/* Toolbar */}
              <div className="flex items-center justify-between px-3 pb-3 pt-1">
                <div className="flex items-center gap-1">
                  {/* Plus Button — Image Upload */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                    className={`p-2 rounded-lg transition-all duration-200 group relative ${
                      uploadedImagePreview
                        ? "bg-[var(--color-primary-100)] text-[var(--color-primary-600)]"
                        : "text-[var(--text-faint)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)]"
                    }`}
                    title="Attach image"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="hidden"
                    />
                    <Plus className="w-[18px] h-[18px] group-hover:rotate-90 transition-transform duration-200" />
                    {uploadedImagePreview && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--color-primary-600)] border-2 border-[var(--bg-primary)]" />
                    )}
                  </button>

                  {/* Platform Indicator */}
                  {selectedPlatform && (
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${
                        selectedPlatform === "INSTAGRAM"
                          ? "bg-[var(--color-purple)]/10 text-[var(--color-purple)]"
                          : "bg-[#1877F2]/10 text-[#1877F2]"
                      }`}
                    >
                      {selectedPlatform === "INSTAGRAM" ? (
                        <FaInstagram className="w-3 h-3" />
                      ) : (
                        <FaFacebook className="w-3 h-3" />
                      )}
                      {selectedPlatform}
                    </div>
                  )}

                  {/* Schedule Indicator */}
                  {scheduledTime && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--color-amber)]/10 text-[var(--color-amber)]">
                      <Clock className="w-3 h-3" />
                      {new Date(scheduledTime).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  )}
                </div>

                {/* Send Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  disabled={isLoading || !prompt.trim() || !selectedPlatform || !scheduledTime}
                  className={`p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    prompt.trim() && selectedPlatform && scheduledTime && !isLoading
                      ? "bg-[var(--color-primary-600)] text-white shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-700)] hover:shadow-[var(--shadow-btn-primary-hover)]"
                      : "bg-[var(--color-neutral-100)] text-[var(--text-faint)] cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <Loader2 className="w-[18px] h-[18px] animate-spin" />
                  ) : (
                    <ArrowUp className="w-[18px] h-[18px]" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Footer hint */}
            <p className="text-center text-[10px] text-[var(--text-faint)] mt-2">
              AI-generated content may require review. Press Enter to send, Shift+Enter for new line.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
