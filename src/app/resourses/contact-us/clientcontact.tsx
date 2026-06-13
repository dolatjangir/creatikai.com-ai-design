"use client";

import React, { useState } from "react";
import { motion, AnimatePresence , Variants } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Check,
  Loader2,
  Headphones,
  Sparkles,
  Globe,
  Shield,
  Zap,
  ChevronRight,
  X,
  User,
  Building2,
  HelpCircle,
  Star,
  Heart,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";

/* ─── Animation Variants ─── */
const fadeUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer:Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideInLeft:Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight:Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Types ─── */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  department: string;
}

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
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 * (1 - dist / 150)})`;
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

/* ─── Contact Info Card ─── */
function ContactCard({ icon, title, value, subtext, color, index }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-xl)] transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{title}</h3>
      <p className="text-base font-medium text-[var(--color-primary)] mb-1">{value}</p>
      <p className="text-xs text-[var(--color-text-muted)]">{subtext}</p>
    </motion.div>
  );
}

/* ─── FAQ Item ─── */
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} custom={index} className="border-b border-[var(--color-border)] last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-[var(--color-text-primary)] font-medium text-sm pr-4 group-hover:text-[var(--color-primary)] transition-colors">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="w-6 h-6 rounded-full bg-[var(--color-bg-hover)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-icon-bg-1)] transition-colors">
          <span className="text-[var(--color-text-muted)] text-lg leading-none group-hover:text-[var(--color-primary)]">+</span>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Page ─── */
export default function ContactUsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        department: formData.department,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setIsSubmitted(true);
      // formData is already cleared by your existing reset logic
    } else {
      alert(data.message || "Failed to send message");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5 text-[var(--color-primary)]" />,
      title: "Email Us",
      value: "sharan@creatik.com",
      subtext: "We reply within 2 hours",
      color: "bg-[var(--color-icon-bg-1)]",
    },
    {
      icon: <Phone className="w-5 h-5 text-[var(--color-purple)]" />,
      title: "Call Us",
      value: "9649902000",
      subtext: "Mon–Fri, 9am–6pm EST",
      color: "bg-[var(--color-icon-bg-2)]",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[var(--color-cyan)]" />,
      title: "Visit Us",
      value: "30A,sultan nagar,gurjar ki thadi,jaipur-302019",
      subtext: "168 Innovation Drive",
      color: "bg-[var(--color-icon-bg-3)]",
    },
    {
      icon: <Clock className="w-5 h-5 text-[var(--color-emerald)]" />,
      title: "Response Time",
      value: "< 2 Hours",
      subtext: "Average first response",
      color: "bg-[var(--color-icon-bg-4)]",
    },
  ];

  const faqs = [
    { question: "How quickly will you respond?", answer: "Our average first response time is under 2 hours during business hours (9am–6pm EST). For Enterprise customers, we offer 24/7 dedicated support with sub-30-minute response guarantees." },
    { question: "Do you offer live chat support?", answer: "Yes! Pro and Enterprise plans include live chat support directly in the app. Our AI assistant can also handle common questions instantly, escalating to a human when needed." },
    { question: "Can I schedule a demo call?", answer: "Absolutely. Fill out the form above and select 'Sales Inquiry' as the subject. Our team will reach out within 24 hours to schedule a personalized demo tailored to your use case." },
    { question: "What if I need help migrating data?", answer: "We offer free migration assistance for all paid plans. Our migration specialists will handle the entire transfer process, ensuring zero data loss and minimal downtime." },
  ];

  const departments = [
    { value: "general", label: "General Inquiry", icon: <MessageSquare className="w-4 h-4" /> },
    { value: "sales", label: "Sales & Demo", icon: <Zap className="w-4 h-4" /> },
    { value: "support", label: "Technical Support", icon: <Headphones className="w-4 h-4" /> },
    { value: "partners", label: "Partnerships", icon: <Globe className="w-4 h-4" /> },
    { value: "security", label: "Security & Compliance", icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════
          HERO + FORM SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[var(--color-bg-hover)] via-white to-white">
        <ParticleBackground />
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/6 rounded-full blur-3xl" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/6 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] py-[var(--hero-pt)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="max-w-lg"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-badge-border)] text-[var(--color-badge-text)] text-sm font-medium mb-6"
              >
                <Sparkles className="w-4 h-4" />
                We are here to help
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="sm:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-5"
              >
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-cyan)] bg-clip-text text-transparent">
                  Start a Conversation
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8"
              >
                Whether you have a question, need a demo, or want to partner with us —
                our team is ready to help. We typically respond within 2 hours.
              </motion.p>

              {/* Contact Cards — stacked vertically on mobile, 2x2 on desktop */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {contactCards.map((card, i) => (
                  <ContactCard key={card.title} {...card} index={i} />
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              {/* Glow */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] border border-[var(--color-border)] overflow-hidden">
                {/* Form Header */}
                <div className="px-6 py-5 border-b border-[var(--color-border-light)]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-purple)] flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text-primary)]">Send us a message</h3>
                      <p className="text-xs text-[var(--color-text-muted)]">We will get back to you shortly</p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-16 h-16 rounded-full bg-[var(--color-icon-bg-4)] flex items-center justify-center mx-auto mb-4"
                        >
                          <Check className="w-8 h-8 text-[var(--color-emerald)]" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Message Sent!</h4>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-4">Thanks for reaching out. We will be in touch within 2 hours.</p>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: "", email: "", subject: "", message: "", department: "general" });
                          }}
                          className="px-5 py-2 rounded-lg bg-[var(--color-bg-hover)] hover:bg-[var(--color-border-light)] text-[var(--color-text-primary)] text-sm font-medium transition-colors"
                        >
                          Send another message
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        {/* Department Selector */}
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-2 uppercase tracking-wide">Department</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {departments.map((dept) => (
                              <motion.button
                                key={dept.value}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData((prev) => ({ ...prev, department: dept.value }))}
                                className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                                  formData.department === dept.value
                                    ? "bg-[var(--color-badge-bg)] border-[var(--color-badge-border)] text-[var(--color-badge-text)] shadow-sm"
                                    : "bg-white border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-hover)]"
                                }`}
                              >
                                {dept.icon}
                                {dept.label}
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        {/* Name & Email Row */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Name</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-faint)]" />
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="John Doe"
                                required
                                className={`w-full pl-10 pr-4 py-2.5 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border transition-all duration-200 outline-none ${
                                  focusedField === "name" ? "border-[var(--color-primary)] bg-white ring-2 ring-[var(--color-primary)]/10" : "border-transparent hover:border-[var(--color-border)]"
                                }`}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Email</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-faint)]" />
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="john@company.com"
                                required
                                className={`w-full pl-10 pr-4 py-2.5 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border transition-all duration-200 outline-none ${
                                  focusedField === "email" ? "border-[var(--color-primary)] bg-white ring-2 ring-[var(--color-primary)]/10" : "border-transparent hover:border-[var(--color-border)]"
                                }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Subject</label>
                          <div className="relative">
                            <HelpCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-faint)]" />
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("subject")}
                              onBlur={() => setFocusedField(null)}
                              placeholder="How can we help?"
                              required
                              className={`w-full pl-10 pr-4 py-2.5 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border transition-all duration-200 outline-none ${
                                focusedField === "subject" ? "border-[var(--color-primary)] bg-white ring-2 ring-[var(--color-primary)]/10" : "border-transparent hover:border-[var(--color-border)]"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1.5 uppercase tracking-wide">Message</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Tell us more about what you need..."
                            rows={4}
                            required
                            className={`w-full px-4 py-3 bg-[var(--color-bg-hover)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-faint)] border transition-all duration-200 outline-none resize-none ${
                              focusedField === "message" ? "border-[var(--color-primary)] bg-white ring-2 ring-[var(--color-primary)]/10" : "border-transparent hover:border-[var(--color-border)]"
                            }`}
                          />
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-semibold shadow-[var(--shadow-btn-primary)] hover:shadow-[var(--shadow-btn-primary-hover)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Send Message
                            </>
                          )}
                        </motion.button>

                        <p className="text-center text-[10px] text-[var(--color-text-faint)] flex items-center justify-center gap-1">
                          <Shield className="w-3 h-3" />
                          Your information is encrypted and never shared with third parties.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ SECTION (Compact)
      ═══════════════════════════════════════ */}
      <section className="py-16 bg-[var(--color-section-alt)]">
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
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
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
            className="bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-md)] overflow-hidden"
          >
            <div className="px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
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

        <div className="relative z-10 max-w-xl mx-auto px-[var(--container-padding)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Prefer to Talk Directly?
            </h2>
            <p className="text-blue-100 mb-6">
              Our team loves hearing from you. Book a call and we will walk you through everything.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl bg-white text-[var(--color-primary)] font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Phone className="w-4 h-4" />
              Book a Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}