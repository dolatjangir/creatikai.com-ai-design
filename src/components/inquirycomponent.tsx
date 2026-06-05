"use client"

import { BookOpen, Bot, CheckCircle, ChevronRight, Loader2, Mail, Phone, Send, User, X } from "lucide-react";
import { useState } from "react";

const InquiryForm = ({ isOpen, onClose ,courseName }: { isOpen: boolean; onClose: () => void;courseName:string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(e.currentTarget);
    
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        preferredCourse: formData.get("preferredCourse"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();

    if (data.success) {
      // Show success state
      alert(data.message);
      e.currentTarget.reset();
    } else {
      alert(data.message || "Failed to submit inquiry");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "rgba(15,23,42,0.4)" }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-lg rounded-2xl border p-6 lg:p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
        style={{
          backgroundColor: "var(--color-card-bg)",
          borderColor: "var(--color-border-light)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-bg-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: "var(--color-icon-bg-1)" }}
          >
            <Bot className="w-6 h-6" style={{ color: "var(--color-primary)" }} />
          </div>
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {submitted ? "Thank You!" : `${courseName}`}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
            {submitted
              ? "We'll contact you shortly with course details."
              : "Fill in your details and our team will reach out."}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                  name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      
                    }}
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                  name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                      
                    }}
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <input
                  name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                     
                    }}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                  Interested Course
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-faint)" }} />
                  <select
                  name="preferredCourse"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)] appearance-none"
                    style={{
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-bg)",
                      color: "var(--color-text-primary)",
                    
                    }}
                  >
                    <option value="">Select a course</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="machine-learning">Machine Learning Mastery</option>
                    <option value="fullstack-development">FullStack Development</option>
                    <option value="digital-marketing-training">Digital Marketing Training</option>
                    <option value="google-ads">Google ADS</option>
                    <option value="social-media-campaign-training">Social Media Campaign Training</option>
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90" style={{ color: "var(--color-text-faint)" }} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-text-secondary)" }}>
                Message (Optional)
              </label>
              <textarea
              name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text-primary)",
                 
                }}
                placeholder="Tell us about your learning goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              style={{
                backgroundColor: "var(--color-primary)",
                boxShadow: "var(--shadow-btn-primary)",
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Submit Inquiry
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--color-icon-bg-4)" }}
            >
              <CheckCircle className="w-8 h-8" style={{ color: "var(--color-emerald)" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default InquiryForm