"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Mail,
  Search,
  Plus,
  Trash2,
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  TrendingUp,
  TrendingDown,
  Inbox,
  RefreshCw,
  MoreHorizontal,
  Check,
  Copy,
  ArrowUpDown,
  Eye,
  BarChart3,
  Clock,
  Sparkles,
  ShieldCheck,
  UserPlus,
  FileSpreadsheet
} from "lucide-react";
import MasterProtectedRoute from "@/utils/masterProtectedRoute";

// ─── Types ──────────────────────────────────────────────────────────

interface Subscriber {
  id: string | number;
  email: string;
  createdAt: string;
  updatedAt?: string;
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

const API_BASE = "/api/subscribe";
const ITEMS_PER_PAGE = 10;

// ─── Component ───────────────────────────────────────────────────────

export default function SubscriberAdminPanel() {
  // ─── State ────────────────────────────────────────────────────────
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<"email" | "createdAt">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [addingSubscriber, setAddingSubscriber] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | number | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [dateFilter, setDateFilter] = useState<"all" | "today" | "week" | "month">("all");
  const [refreshing, setRefreshing] = useState(false);

  // ─── Fetch Subscribers ────────────────────────────────────────────
  const fetchSubscribers = useCallback(async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const data: ApiResponse<Subscriber[]> = await res.json();
      if (data.success && data.data) {
        setSubscribers(data.data);
      } else {
        addToast("error", data.message || "Failed to load subscribers");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchSubscribers();
  }, [fetchSubscribers]);

  // ─── Toast System ─────────────────────────────────────────────────
  const addToast = (type: Toast["type"], message: string) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // ─── Filtered & Sorted Data ───────────────────────────────────────
  const filteredSubscribers = useMemo(() => {
    let result = [...subscribers];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => s.email.toLowerCase().includes(q));
    }

    // Date filter
    const now = new Date();
    if (dateFilter === "today") {
      result = result.filter((s) => {
        const d = new Date(s.createdAt);
        return d.toDateString() === now.toDateString();
      });
    } else if (dateFilter === "week") {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      result = result.filter((s) => new Date(s.createdAt) >= weekAgo);
    } else if (dateFilter === "month") {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      result = result.filter((s) => new Date(s.createdAt) >= monthAgo);
    }

    // Sort
    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === "email") {
        comparison = a.email.localeCompare(b.email);
      } else {
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });

    return result;
  }, [subscribers, searchQuery, dateFilter, sortField, sortOrder]);

  // ─── Pagination ───────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredSubscribers.length / ITEMS_PER_PAGE);
  const paginatedData = filteredSubscribers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, dateFilter]);

  // ─── Add Subscriber ───────────────────────────────────────────────
  const handleAddSubscriber = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newEmail.includes("@")) {
      addToast("error", "Please enter a valid email address");
      return;
    }

    setAddingSubscriber(true);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail.trim() }),
      });
      const data: ApiResponse<unknown> = await res.json();

      if (data.success) {
        addToast("success", data.message || "Subscriber added successfully");
        setNewEmail("");
        setShowAddModal(false);
        fetchSubscribers(true);
      } else {
        addToast("error", data.message || "Failed to add subscriber");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setAddingSubscriber(false);
    }
  };

  // ─── Delete Subscriber ────────────────────────────────────────────
  const handleDelete = async (id: string | number) => {
    setDeleting(true);
    try {
      // Note: Your API doesn't have DELETE, but this is for future-proofing
      // For now, we'll simulate with a fetch that would hit DELETE /api/subscribers/:id
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (res.ok) {
        addToast("success", "Subscriber removed successfully");
        setSubscribers((prev) => prev.filter((s) => s.id !== id));
        setSelectedRows((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      } else {
        addToast("error", "Failed to remove subscriber");
      }
    } catch (err) {
      addToast("error", "Network error. Please try again.");
    } finally {
      setDeleting(false);
      setDeleteConfirm(null);
    }
  };

  // ─── Bulk Delete ──────────────────────────────────────────────────
  const handleBulkDelete = async () => {
    if (selectedRows.size === 0) return;
    // In a real app, you'd batch delete. For now, sequential.
    const ids = Array.from(selectedRows);
    for (const id of ids) {
      await handleDelete(id);
    }
    setSelectedRows(new Set());
  };

  // ─── Export CSV ───────────────────────────────────────────────────
  const exportCSV = () => {
    const headers = ["ID", "Email", "Subscribed Date"];
    const rows = filteredSubscribers.map((s) => [
      s.id,
      s.email,
      new Date(s.createdAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    addToast("success", "CSV exported successfully");
  };

  // ─── Copy Email ───────────────────────────────────────────────────
  const copyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    addToast("success", "Email copied to clipboard");
  };

  // ─── Toggle Selection ─────────────────────────────────────────────
  const toggleSelect = (id: string | number) => {
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
      setSelectedRows(new Set(paginatedData.map((s) => s.id)));
    }
  };

  // ─── Stats ──────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total = subscribers.length;
    const today = subscribers.filter((s) => {
      const d = new Date(s.createdAt);
      return d.toDateString() === new Date().toDateString();
    }).length;
    const thisWeek = subscribers.filter((s) => {
      const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return new Date(s.createdAt) >= weekAgo;
    }).length;
    const thisMonth = subscribers.filter((s) => {
      const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      return new Date(s.createdAt) >= monthAgo;
    }).length;
    return { total, today, thisWeek, thisMonth };
  }, [subscribers]);

  // ─── Render ───────────────────────────────────────────────────────

  return (
    <MasterProtectedRoute>
    <div className="min-h-screen bg-[var(--bg-secondary)] text-[var(--text-primary)] font-[var(--font-family)]">
      {/* Background decorative */}
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
          <div className="flex flex-col sm:flex-row  sm:items-center sm:justify-around gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-md)]">
                  <Users className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[var(--text-primary)]">Subscribers</h1>
                  <p className="text-sm text-[var(--text-tertiary)]">Manage your newsletter subscribers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer bg-[var(--color-primary-600)] text-white text-sm font-semibold shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] hover:bg-[var(--color-primary-700)] transition-all duration-300"
              >
                <UserPlus className="w-4 h-4" />
                Add Subscriber
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={exportCSV}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer border border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm font-semibold hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] transition-all duration-300"
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              label: "Total Subscribers",
              value: stats.total,
              icon: Users,
              color: "primary",
              bg: "var(--color-primary-50)",
              iconColor: "var(--color-primary-600)",
            },
            {
              label: "Today",
              value: stats.today,
              icon: Clock,
              color: "emerald",
              bg: "var(--color-success-50)",
              iconColor: "var(--color-success-600)",
            },
            {
              label: "This Week",
              value: stats.thisWeek,
              icon: TrendingUp,
              color: "amber",
              bg: "var(--color-warning-50)",
              iconColor: "var(--color-warning-600)",
            },
            {
              label: "This Month",
              value: stats.thisMonth,
              icon: BarChart3,
              color: "purple",
              bg: "var(--color-secondary-50)",
              iconColor: "var(--color-secondary-600)",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-medium)] p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: stat.bg }}
                >
                  <stat.icon className="w-4.5 h-4.5" style={{ color: stat.iconColor }} />
                </div>
                {stat.value > 0 && stat.label !== "Total Subscribers" && (
                  <span className="text-xs font-semibold text-[var(--color-success-600)] bg-[var(--color-success-50)] px-2 py-0.5 rounded-full">
                    +{stat.value}
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
                placeholder="Search by email..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--color-neutral-50)] border border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-[var(--text-faint)] hover:text-[var(--text-secondary)]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg cursor-pointer border text-sm font-medium transition-all ${
                  showFilters || dateFilter !== "all"
                    ? "border-[var(--color-primary-400)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)]"
                    : "border-[var(--border-medium)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)]"
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {dateFilter !== "all" && (
                  <span className="w-2 h-2 rounded-full bg-[var(--color-primary-600)]" />
                )}
              </button>
              <button
                onClick={() => fetchSubscribers(true)}
                className={`p-2.5 rounded-lg border border-[var(--border-medium)] cursor-pointer text-[var(--text-tertiary)] hover:text-[var(--color-primary-600)] hover:border-[var(--color-primary-300)] transition-all ${
                  refreshing ? "animate-spin" : ""
                }`}
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
                <div className="p-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-[var(--text-faint)] uppercase tracking-wider mr-2">
                    Date:
                  </span>
                  {(["all", "today", "week", "month"] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setDateFilter(filter)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${
                        dateFilter === filter
                          ? "bg-[var(--color-primary-600)] text-white shadow-[var(--shadow-sm)]"
                          : "bg-[var(--color-neutral-50)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:border-[var(--color-primary-300)]"
                      }`}
                    >
                      {filter === "all" ? "All Time" : filter === "today" ? "Today" : filter === "week" ? "Last 7 Days" : "Last 30 Days"}
                    </button>
                  ))}
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
                className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer rounded-lg bg-[var(--color-error-50)] text-[var(--color-error-600)] text-xs font-semibold hover:bg-[var(--color-error-100)] transition-colors"
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
                      checked={paginatedData.length > 0 && paginatedData.every((s) => selectedRows.has(s.id))}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--color-primary-600)] focus:ring-[var(--color-primary-400)] cursor-pointer"
                    />
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => {
                        if (sortField === "email") setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                        else { setSortField("email"); setSortOrder("asc"); }
                      }}
                      className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Email
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "email" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left">
                    <button
                      onClick={() => {
                        if (sortField === "createdAt") setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                        else { setSortField("createdAt"); setSortOrder("desc"); }
                      }}
                      className="flex items-center gap-1.5 text-xs cursor-pointer font-semibold text-[var(--text-tertiary)] uppercase tracking-wider hover:text-[var(--text-primary)] transition-colors"
                    >
                      Subscribed Date
                      <ArrowUpDown className={`w-3.5 h-3.5 ${sortField === "createdAt" ? "text-[var(--color-primary-600)]" : ""}`} />
                    </button>
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3.5 text-right text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  // Skeleton Loading
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-[var(--border-light)]">
                      <td className="px-4 py-4">
                        <div className="w-4 h-4 rounded bg-[var(--color-neutral-200)] animate-pulse" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-4 w-48 rounded bg-[var(--color-neutral-200)] animate-pulse" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-4 w-32 rounded bg-[var(--color-neutral-200)] animate-pulse" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-5 w-16 rounded-full bg-[var(--color-neutral-200)] animate-pulse" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="h-8 w-8 rounded-lg bg-[var(--color-neutral-200)] animate-pulse ml-auto" />
                      </td>
                    </tr>
                  ))
                ) : paginatedData.length === 0 ? (
                  // Empty State
                  <tr>
                    <td colSpan={5} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-neutral-100)] flex items-center justify-center mb-4">
                          <Inbox className="w-8 h-8 text-[var(--text-faint)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                          {searchQuery ? "No matches found" : "No subscribers yet"}
                        </h3>
                        <p className="text-sm text-[var(--text-tertiary)] max-w-xs mx-auto">
                          {searchQuery
                            ? "Try adjusting your search or filters"
                            : "Start building your audience by adding your first subscriber"}
                        </p>
                        {!searchQuery && (
                          <button
                            onClick={() => setShowAddModal(true)}
                            className="mt-4 flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary-700)] text-sm font-semibold hover:bg-[var(--color-primary-100)] transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                            Add First Subscriber
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedData.map((subscriber, index) => (
                    <motion.tr
                      key={subscriber.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={`border-b border-[var(--border-light)] hover:bg-[var(--color-neutral-50)] transition-colors ${
                        selectedRows.has(subscriber.id) ? "bg-[var(--color-primary-50)]" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={selectedRows.has(subscriber.id)}
                          onChange={() => toggleSelect(subscriber.id)}
                          className="w-4 h-4 rounded border-[var(--border-medium)] text-[var(--color-primary-600)] focus:ring-[var(--color-primary-400)] cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-100)] flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-[var(--color-primary-600)]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-[var(--text-primary)]">{subscriber.email}</p>
                            <p className="text-xs text-[var(--text-faint)]">ID: {String(subscriber.id).slice(0, 8)}...</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                          <Calendar className="w-3.5 h-3.5 text-[var(--text-faint)]" />
                          {new Date(subscriber.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <p className="text-xs text-[var(--text-faint)] mt-0.5">
                          {new Date(subscriber.createdAt).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-success-50)] text-[var(--color-success-700)] border border-[var(--color-success-100)]">
                          <ShieldCheck className="w-3 h-3" />
                          Active
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => copyEmail(subscriber.email)}
                            className="p-2 rounded-lg text-[var(--text-faint)] cursor-pointer hover:text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] transition-all"
                            title="Copy email"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(subscriber.id)}
                            className="p-2 rounded-lg text-[var(--text-faint)] cursor-pointer hover:text-[var(--color-error-600)] hover:bg-[var(--color-error-50)] transition-all"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* ─── Pagination ─────────────────────────────────────────── */}
          {!loading && filteredSubscribers.length > 0 && (
            <div className="px-4 py-4 border-t border-[var(--border-light)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm text-[var(--text-tertiary)]">
                Showing <span className="font-medium text-[var(--text-primary)]">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredSubscribers.length)}
                </span>{" "}
                of <span className="font-medium text-[var(--text-primary)]">{filteredSubscribers.length}</span> subscribers
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg cursor-pointer border border-[var(--border-medium)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 px-2.5 rounded-full cursor-pointer text-sm font-medium transition-all ${
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
          ADD SUBSCRIBER MODAL
          ═══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--bg-primary)] rounded-[var(--radius-2xl)] border border-[var(--border-medium)] shadow-[var(--shadow-xl)] w-full max-w-md overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-[var(--border-light)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-50)] flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-[var(--color-primary-600)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">Add Subscriber</h3>
                    <p className="text-xs text-[var(--text-tertiary)]">Manually add a new email subscriber</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] text-[var(--text-faint)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleAddSubscriber} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Email Address <span className="text-[var(--color-error-500)]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-faint)]" />
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="subscriber@example.com"
                      autoFocus
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--color-neutral-50)] border-2 border-[var(--border-medium)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus:outline-none focus:border-[var(--color-primary-400)] focus:ring-4 focus:ring-[var(--color-primary-100)] transition-all"
                    />
                  </div>
                  <p className="text-xs text-[var(--text-faint)] mt-1.5">
                    We will verify this email is not already subscribed.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-3 px-4 rounded-xl border-2 border-[var(--border-medium)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--color-primary-300)] hover:text-[var(--color-primary-600)] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={addingSubscriber || !newEmail.trim()}
                    className="flex-1 py-3 px-4 rounded-xl bg-[var(--color-primary-600)] text-white font-semibold text-sm shadow-[var(--shadow-btn-primary)] hover:bg-[var(--color-primary-700)] hover:shadow-[var(--shadow-btn-primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {addingSubscriber ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Add Subscriber
                      </>
                    )}
                  </button>
                </div>
              </form>
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
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Remove Subscriber?</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  This action cannot be undone. The subscriber will be permanently removed from your list.
                </p>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-[var(--border-medium)] cursor-pointer text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--color-primary-300)] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(deleteConfirm)}
                    disabled={deleting}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--color-error-600)] border border-red-600 cursor-pointer text-red-600 font-semibold text-sm hover:bg-[var(--color-error-700)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {deleting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )}
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MasterProtectedRoute>
  );
}