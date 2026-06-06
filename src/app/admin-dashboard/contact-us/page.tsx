"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Search,
  Filter,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  TrendingUp,
  User,
  Mail,
  HelpCircle,
  Tag,
  Trash2,
  Eye,
  X,
  Download,
  ArrowUpDown,
  Check,
  Clock,
  FileSpreadsheet,
  Sparkles,
  Send,
  ChevronDown,
  BarChart3,
  Inbox,
  MailOpen,
  Reply,
  Building2,
  Hash,
  AlignLeft,
  Shield,
  MoreHorizontal
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  department: string;
  message: string;
  status: "unread" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

// ─── Constants ──────────────────────────────────────────────────────

const API_BASE = "/api/contact-us";
const ITEMS_PER_PAGE = 10;

const STATUS_CONFIG = {
  unread: {
    label: "Unread",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
    icon: Mail,
  },
  read: {
    label: "Read",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fcd34d",
    icon: MailOpen,
  },
  replied: {
    label: "Replied",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#dcfce7",
    icon: Reply,
  },
};

const DEPARTMENTS = [
  { value: "general", label: "General", icon: MessageSquare },
  { value: "sales", label: "Sales", icon: TrendingUp },
  { value: "support", label: "Support", icon: Shield },
  { value: "partnerships", label: "Partnerships", icon: Building2 },
];

// ─── Component ───────────────────────────────────────────────────────

export default function ContactDashboard() {
  // ─── State ────────────────────────────────────────────────────────
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<"name" | "email" | "subject" | "department" | "status" | "createdAt">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [deptFilter, setDeptFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<"all" | "today" | "week" | "month">("all");
  const [refreshing, setRefreshing] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [detailContact, setDetailContact] = useState<Contact | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  // ─── Fetch ────────────────────────────────────────────────────────
  const fetchContacts = useCallback(async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const data: ApiResponse<Contact[]> = await res.json();
      if (data.success && data.data) {
        setContacts(data.data);
      } else {
        addToast("error", data.message || "Failed to load contacts");
      }
    } catch {
      addToast("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = () => setStatusDropdownOpen(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // ─── Toast ────────────────────────────────────────────────────────
  const addToast = (type: Toast["type"], message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // ─── Filtered & Sorted ────────────────────────────────────────────
  const filteredContacts = useMemo(() => {
    let result = [...contacts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.subject.toLowerCase().includes(q) ||
          c.message.toLowerCase().includes(q)
      );
    }

    if (statusFilter !== "all") {
      result = result.filter((c) => c.status === statusFilter);
    }

    if (deptFilter !== "all") {
      result = result.filter((c) => c.department === deptFilter);
    }

    const now = new Date();
    if (dateFilter === "today") {
      result = result.filter((c) => new Date(c.createdAt).toDateString() === now.toDateString());
    } else if (dateFilter === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      result = result.filter((c) => new Date(c.createdAt) >= weekAgo);
    } else if (dateFilter === "month") {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      result = result.filter((c) => new Date(c.createdAt) >= monthAgo);
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "name") comparison = a.name.localeCompare(b.name);
      else if (sortField === "email") comparison = a.email.localeCompare(b.email);
      else if (sortField === "subject") comparison = a.subject.localeCompare(b.subject);
      else if (sortField === "department") comparison = a.department.localeCompare(b.department);
      else if (sortField === "status") comparison = a.status.localeCompare(b.status);
      else comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [contacts, searchQuery, statusFilter, deptFilter, dateFilter, sortField, sortOrder]);

  // ─── Pagination ───────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const paginatedData = filteredContacts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, deptFilter, dateFilter]);

  // ─── Update Status ────────────────────────────────────────────────
  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingStatus(id);
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data: ApiResponse<Contact> = await res.json();
      if (data.success) {
        setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: newStatus as Contact["status"] } : c)));
        addToast("success", `Status updated to ${newStatus}`);
      } else {
        addToast("error", data.message || "Failed to update status");
      }
    } catch {
      addToast("error", "Network error");
    } finally {
      setUpdatingStatus(null);
      setStatusDropdownOpen(null);
    }
  };

  // ─── Mark as Read on View ─────────────────────────────────────────
  const markAsRead = async (contact: Contact) => {
    if (contact.status === "unread") {
      await updateStatus(contact.id, "read");
    }
  };

  // ─── Reply ────────────────────────────────────────────────────────
  const handleReply = async () => {
    if (!replyText.trim() || !detailContact) return;
    setSendingReply(true);
    try {
      // Simulate reply - in real app, send to backend or email service
      await new Promise((r) => setTimeout(r, 1000));
      await updateStatus(detailContact.id, "replied");
      setReplyText("");
      addToast("success", "Reply sent successfully");
    } catch {
      addToast("error", "Failed to send reply");
    } finally {
      setSendingReply(false);
    }
  };

  // ─── Delete ───────────────────────────────────────────────────────
  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (res.ok) {
        addToast("success", "Contact deleted successfully");
        setContacts((prev) => prev.filter((c) => c.id !== id));
        setSelectedRows((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      } else {
        addToast("error", "Failed to delete contact");
      }
    } catch {
      addToast("error", "Network error");
    } finally {
      setDeleting(false);
      setDeleteConfirm(null);
    }
  };

  // ─── Bulk Delete ──────────────────────────────────────────────────
  const handleBulkDelete = async () => {
    const ids = Array.from(selectedRows);
    for (const id of ids) {
      await handleDelete(id);
    }
    setSelectedRows(new Set());
  };

  // ─── Export CSV ───────────────────────────────────────────────────
  const exportCSV = () => {
    const headers = ["ID", "Name", "Email", "Subject", "Department", "Status", "Message", "Date"];
    const rows = filteredContacts.map((c) => [
      c.id,
      c.name,
      c.email,
      c.subject,
      c.department,
      c.status,
      c.message,
      new Date(c.createdAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    addToast("success", "CSV exported successfully");
  };

  // ─── Toggle Selection ─────────────────────────────────────────────
  const toggleSelect = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((c) => c.id)));
    }
  };

  // ─── Stats ──────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = contacts.length;
    const unread = contacts.filter((c) => c.status === "unread").length;
    const read = contacts.filter((c) => c.status === "read").length;
    const replied = contacts.filter((c) => c.status === "replied").length;
    const today = contacts.filter((c) => new Date(c.createdAt).toDateString() === new Date().toDateString()).length;
    return { total, unread, read, replied, today };
  }, [contacts]);

  const formatTime = (date: string) => {
    return new Date(date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getDeptConfig = (dept: string) => {
    return DEPARTMENTS.find((d) => d.value === dept) || DEPARTMENTS[0];
  };

  // ─── Render ───────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text-primary)] font-[var(--font-family)]">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-primary-100)] opacity-30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--color-secondary-100)] opacity-20 blur-[120px]" />
      </div>

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-[var(--shadow-lg)] border text-sm font-medium min-w-[280px] ${
                toast.type === "success"
                  ? "bg-[var(--color-success-50)] border-[var(--color-success-100)] text-[var(--color-success-700)]"
                  : toast.type === "error"
                  ? "bg-[var(--color-error-50)] border-[var(--color-error-100)] text-[var(--color-error-700)]"
                  : "bg-[var(--bg-primary)] border-[var(--border-medium)] text-[var(--text-primary)]"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : toast.type === "error" ? (
                <AlertCircle className="w-4 h-4 shrink-0" />
              ) : (
                <Sparkles className="w-4 h-4 shrink-0" />
              )}
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-8 lg:py-12">
        {/* ─── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-md)]">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">Contact Messages</h1>
                <p className="text-sm text-[var(--text-tertiary)]">Manage and respond to contact form submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={exportCSV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm font-semibold hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] transition-all duration-300"
              >
                <FileSpreadsheet className="w-4 h-4" />
                Export CSV
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ─── Stats Cards ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8"
        >
          {[
            { label: "Total Messages", value: stats.total, icon: Inbox, bg: "var(--color-primary-50)", iconColor: "var(--color-primary-600)" },
            { label: "Unread", value: stats.unread, icon: Mail, bg: "var(--color-primary-50)", iconColor: "var(--color-primary-600)" },
            { label: "Read", value: stats.read, icon: MailOpen, bg: "var(--color-warning-50)", iconColor: "var(--color-warning-600)" },
            { label: "Replied", value: stats.replied, icon: Reply, bg: "var(--color-success-50)", iconColor: "var(--color-success-600)" },
            { label: "Today", value: stats.today, icon: Clock, bg: "var(--color-secondary-50)", iconColor: "var(--color-secondary-600)" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-medium)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.bg }}>
                  <stat.icon className="w-4.5 h-4.5" style={{ color: stat.iconColor }} />
                </div>
                {stat.value > 0 && stat.label === "Unread" && (
                  <span className="text-xs font-semibold text-[var(--color-error-600)] bg-[var(--color-error-50)] px-2 py-0.5 rounded-full">
                    {stat.value} new
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold text-[var(--text-primary)]">{stat.value.toLocaleString()}</p>
              <p className="text-xs text-[var(--text-tertiary)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Toolbar ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-medium)] shadow-[var(--shadow-sm)] mb-6"
        >
          <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-faint)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, subject, or message..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-secondary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  showFilters || statusFilter !== "all" || deptFilter !== "all" || dateFilter !== "all"
                    ? "border-[var(--color-primary-400)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)]"
                    : "border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)]"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {(statusFilter !== "all" || deptFilter !== "all" || dateFilter !== "all") && (
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary-600)]" />
                )}
              </button>
              <button
                onClick={() => fetchContacts(true)}
                className={`p-2.5 rounded-lg border border-[var(--border-medium)] text-[var(--text-tertiary)] hover:text-[var(--color-primary-600)] hover:border-[var(--color-primary-300)] transition-all ${refreshing ? "animate-spin" : ""}`}
                title="Refresh"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-[var(--border-light)]"
              >
                <div className="p-4 space-y-4">
                  {/* Status Filter */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider mr-2">Status:</span>
                    <button
                      onClick={() => setStatusFilter("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        statusFilter === "all"
                          ? "bg-[var(--color-neutral-800)] text-white"
                          : "bg-[var(--color-neutral-50)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                      }`}
                    >
                      All
                    </button>
                    {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                      <button
                        key={key}
                        onClick={() => setStatusFilter(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                          statusFilter === key
                            ? "text-white"
                            : "border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                        }`}
                        style={
                          statusFilter === key
                            ? { backgroundColor: config.color }
                            : { backgroundColor: config.bg, color: config.color }
                        }
                      >
                        <config.icon className="w-3 h-3" />
                        {config.label}
                      </button>
                    ))}
                  </div>

                  {/* Department Filter */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider mr-2">Department:</span>
                    <button
                      onClick={() => setDeptFilter("all")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        deptFilter === "all"
                          ? "bg-[var(--color-primary-600)] text-white"
                          : "bg-[var(--color-neutral-50)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                      }`}
                    >
                      All Departments
                    </button>
                    {DEPARTMENTS.map((dept) => (
                      <button
                        key={dept.value}
                        onClick={() => setDeptFilter(dept.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                          deptFilter === dept.value
                            ? "bg-[var(--color-primary-600)] text-white"
                            : "bg-[var(--color-neutral-50)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                        }`}
                      >
                        <dept.icon className="w-3 h-3" />
                        {dept.label}
                      </button>
                    ))}
                  </div>

                  {/* Date Filter */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider mr-2">Date:</span>
                    {(["all", "today", "week", "month"] as const).map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setDateFilter(filter)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          dateFilter === filter
                            ? "bg-[var(--color-primary-600)] text-white shadow-[var(--shadow-sm)]"
                            : "bg-[var(--color-neutral-50)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                        }`}
                      >
                        {filter === "all" ? "All Time" : filter === "today" ? "Today" : filter === "week" ? "Last 7 Days" : "Last 30 Days"}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ─── Table ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-medium)] shadow-[var(--shadow-sm)] overflow-hidden"
        >
          {/* Bulk Actions Bar */}
          {selectedRows.size > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 py-3 bg-[var(--color-primary-50)] border-b border-[var(--color-primary-100)] flex items-center justify-between"
            >
              <span className="text-sm font-medium text-[var(--color-primary-700)]">
                {selectedRows.size} selected
              </span>
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-error-50)] text-[var(--color-error-600)] text-xs font-semibold hover:bg-[var(--color-error-100)] transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Selected
              </button>
            </motion.div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-light)] bg-[var(--color-neutral-50)]">
                  <th className="px-4 py-3.5 w-12">
                    <input
                      type="checkbox"
                      checked={paginatedData.length > 0 && paginatedData.every((c) => selectedRows.has(c.id))}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--color-primary-600)] focus:ring-[var(--color-primary-400)] cursor-pointer"
                    />
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => { setSortField("name"); setSortOrder(sortOrder === "asc" ? "desc" : "asc"); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Sender
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "name" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => { setSortField("subject"); setSortOrder(sortOrder === "asc" ? "desc" : "asc"); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Subject
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "subject" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => { setSortField("department"); setSortOrder(sortOrder === "asc" ? "desc" : "asc"); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Department
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "department" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => { setSortField("status"); setSortOrder(sortOrder === "asc" ? "desc" : "asc"); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Status
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "status" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => { setSortField("createdAt"); setSortOrder(sortOrder === "asc" ? "desc" : "asc"); }}
                      className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Date
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "createdAt" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-right text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-[var(--border-light)]">
                      <td className="px-4 py-4"><div className="w-4 h-4 rounded bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-4 w-32 rounded bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-4 w-40 rounded bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-4 w-24 rounded bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-5 w-16 rounded-full bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-4 w-24 rounded bg-[var(--color-neutral-200)] animate-pulse" /></td>
                      <td className="px-4 py-4"><div className="h-8 w-8 rounded-lg bg-[var(--color-neutral-200)] animate-pulse ml-auto" /></td>
                    </tr>
                  ))
                ) : paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-neutral-100)] flex items-center justify-center mb-4">
                          <Inbox className="w-8 h-8 text-[var(--text-faint)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                          {searchQuery || statusFilter !== "all" || deptFilter !== "all" ? "No matches found" : "No messages yet"}
                        </h3>
                        <p className="text-sm text-[var(--text-tertiary)] max-w-xs mx-auto">
                          {searchQuery || statusFilter !== "all" || deptFilter !== "all"
                            ? "Try adjusting your search or filters"
                            : "Contact form submissions will appear here"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((contact, index) => {
                    const statusConfig = STATUS_CONFIG[contact.status];
                    const deptConfig = getDeptConfig(contact.department);
                    const isUnread = contact.status === "unread";
                    return (
                      <motion.tr
                        key={contact.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className={`border-b border-[var(--border-light)] hover:bg-[var(--color-neutral-50)] transition-colors ${
                          selectedRows.has(contact.id) ? "bg-[var(--color-primary-50)]" : ""
                        } ${isUnread ? "bg-[var(--color-primary-50)]/30" : ""}`}
                      >
                        <td className="px-4 py-4">
                          <input
                            type="checkbox"
                            checked={selectedRows.has(contact.id)}
                            onChange={() => toggleSelect(contact.id)}
                            className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--color-primary-600)] focus:ring-[var(--color-primary-400)] cursor-pointer"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isUnread ? "bg-[var(--color-primary-100)]" : "bg-[var(--color-neutral-100)]"}`}>
                              <User className={`w-4 h-4 ${isUnread ? "text-[var(--color-primary-600)]" : "text-[var(--text-faint)]"}`} />
                            </div>
                            <div>
                              <p className={`text-sm font-medium ${isUnread ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                                {contact.name}
                                {isUnread && <span className="ml-2 w-2 h-2 rounded-full bg-[var(--color-primary-500)] inline-block" />}
                              </p>
                              <p className="text-xs text-[var(--text-faint)]">{contact.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                            <span className={`text-sm ${isUnread ? "font-medium text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                              {contact.subject}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5">
                            <deptConfig.icon className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                            <span className="text-sm text-[var(--text-secondary)]">{deptConfig.label}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setStatusDropdownOpen(statusDropdownOpen === contact.id ? null : contact.id);
                              }}
                              disabled={updatingStatus === contact.id}
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer"
                              style={{
                                backgroundColor: statusConfig.bg,
                                color: statusConfig.color,
                                borderColor: statusConfig.border,
                              }}
                            >
                              {updatingStatus === contact.id ? (
                                <Loader2 className="w-3 h-3 animate-spin" />
                              ) : (
                                <statusConfig.icon className="w-3 h-3" />
                              )}
                              {statusConfig.label}
                              <ChevronDown className="w-3 h-3" />
                            </button>

                            <AnimatePresence>
                              {statusDropdownOpen === contact.id && (
                                <motion.div
                                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                  className="absolute top-full left-0 mt-1 bg-[var(--bg-primary)] rounded-xl border border-[var(--border-medium)] shadow-[var(--shadow-xl)] z-30 overflow-hidden min-w-[140px]"
                                >
                                  {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                                    <button
                                      key={key}
                                      onClick={() => updateStatus(contact.id, key)}
                                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-[var(--color-neutral-50)] ${
                                        contact.status === key ? "bg-[var(--color-neutral-50)]" : ""
                                      }`}
                                      style={{ color: config.color }}
                                    >
                                      <config.icon className="w-3 h-3" />
                                      {config.label}
                                      {contact.status === key && <Check className="w-3 h-3 ml-auto" />}
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                            <Calendar className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                            {formatDate(contact.createdAt)}
                          </div>
                          <p className="text-xs text-[var(--text-faint)] mt-0.5">{formatTime(contact.createdAt)}</p>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              onClick={() => {
                                setDetailContact(contact);
                                markAsRead(contact);
                              }}
                              className="p-2 rounded-lg text-[var(--text-faint)] hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] transition-all"
                              title="View details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(contact.id)}
                              className="p-2 rounded-lg text-[var(--text-faint)] hover:text-[var(--color-error-600)] hover:bg-[var(--color-error-50)] transition-all"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* ─── Pagination ─────────────────────────────────────────── */}
          {!loading && filteredContacts.length > 0 && (
            <div className="px-4 py-4 border-t border-[var(--border-light)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-[var(--text-tertiary)]">
                Showing <span className="font-medium text-[var(--text-primary)]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredContacts.length)}
                </span>{" "}
                of <span className="font-medium text-[var(--text-primary)]">{filteredContacts.length}</span> messages
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`min-w-[36px] h-9 px-2.5 rounded-lg text-sm font-medium transition-all ${
                        currentPage === pageNum
                          ? "bg-[var(--color-primary-600)] text-white shadow-[var(--shadow-sm)]"
                          : "border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DETAIL MODAL with Reply
          ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {detailContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setDetailContact(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-primary)] rounded-[var(--radius-2xl)] border border-[var(--border-medium)] shadow-[var(--shadow-xl)] w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-[var(--border-light)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Message Details</h3>
                    <p className="text-xs text-[var(--text-tertiary)]">From {detailContact.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setDetailContact(null)}
                  className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] text-[var(--text-faint)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--text-secondary)]">Status</span>
                  <span
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: STATUS_CONFIG[detailContact.status].bg,
                      color: STATUS_CONFIG[detailContact.status].color,
                      borderColor: STATUS_CONFIG[detailContact.status].border,
                    }}
                  >
                    {React.createElement(STATUS_CONFIG[detailContact.status].icon, { className: "w-3 h-3" })}
                    {STATUS_CONFIG[detailContact.status].label}
                  </span>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--border-light)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] mb-1">
                      <User className="w-3 h-3" />
                      Name
                    </div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{detailContact.name}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--border-light)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] mb-1">
                      <Mail className="w-3 h-3" />
                      Email
                    </div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{detailContact.email}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--border-light)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] mb-1">
                      <Tag className="w-3 h-3" />
                      Subject
                    </div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{detailContact.subject}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--border-light)]">
                    <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] mb-1">
                      <Building2 className="w-3 h-3" />
                      Department
                    </div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{getDeptConfig(detailContact.department).label}</p>
                  </div>
                </div>

                {/* Original Message */}
                <div className="p-4 rounded-xl bg-[var(--color-neutral-50)] border border-[var(--border-light)]">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-faint)] mb-2">
                    <AlignLeft className="w-3 h-3" />
                    Original Message
                  </div>
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed whitespace-pre-wrap">{detailContact.message}</p>
                </div>

                {/* Reply Section */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <Reply className="w-4 h-4 text-[var(--color-primary-600)]" />
                    Your Reply
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`Write your response to ${detailContact.name}...`}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-neutral-50)] border-2 border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-4 focus:ring-[var(--color-primary-100)] transition-all resize-none"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => setDetailContact(null)}
                      className="flex-1 py-2.5 px-4 rounded-xl border-2 border-[var(--border-medium)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] transition-all"
                    >
                      Close
                    </button>
                    <a
                      href={`mailto:${detailContact.email}?subject=Re: ${detailContact.subject}&body=${encodeURIComponent(replyText)}`}
                      onClick={handleReply}
                      className={`flex-1 py-2.5 px-4 rounded-xl text-white font-semibold text-sm text-center transition-all shadow-[var(--shadow-btn-primary)] flex items-center justify-center gap-2 ${
                        replyText.trim()
                          ? "bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] hover:shadow-[var(--shadow-btn-primary-hover)]"
                          : "bg-[var(--color-neutral-400)] cursor-not-allowed"
                      }`}
                    >
                      {sendingReply ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      Send Reply
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════
          DELETE CONFIRMATION MODAL
          ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-primary)] rounded-[var(--radius-2xl)] border border-[var(--border-medium)] shadow-[var(--shadow-xl)] w-full max-w-sm p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-error-50)] flex items-center justify-center mb-4">
                  <AlertCircle className="w-7 h-7 text-[var(--color-error-500)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Delete Message?</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  This action cannot be undone. The message will be permanently removed.
                </p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-[var(--border-medium)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--color-primary-300)] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteConfirm)}
                    disabled={deleting}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--color-error-600)] text-white font-semibold text-sm hover:bg-[var(--color-error-700)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}