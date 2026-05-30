'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, Mail, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface NewsletterPopupProps {
  delay?: number; // in milliseconds, default 5000
}

export default function NewsletterPopup({ delay = 5000 }: NewsletterPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Show popup after delay
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('newsletter-seen');
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
      // small delay for animation trigger
      requestAnimationFrame(() => setIsAnimating(true));
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('newsletter-seen', 'true');
    }, 300);
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to subscribe');

      setIsSuccess(true);
      sessionStorage.setItem('newsletter-seen', 'true');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[var(--color-text-primary)]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full max-w-lg bg-[var(--color-card-bg)] rounded-3xl shadow-2xl border border-[var(--color-border)] overflow-hidden transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Decorative top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-primary-dark)]" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-section-alt)] transition-all duration-200 z-10"
          aria-label="Close newsletter popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10">
          {!isSuccess ? (
            <div className="text-center">
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-badge-bg)] to-[var(--color-glow)] border border-[var(--color-border-hover)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-glow)]/50">
                <Mail className="w-8 h-8 text-[var(--color-primary)]" />
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-3 tracking-tight">
                Stay Ahead with <span className="gradient-text">AI Insights</span>
              </h2>

              {/* Subtext */}
              <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                Get weekly updates on AI-powered real estate strategies, market trends, and exclusive tips delivered straight to your inbox.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                {[
                  { icon: Zap, text: 'Weekly AI Tips' },
                  { icon: Sparkles, text: 'Market Insights' },
                  { icon: CheckCircle, text: 'No Spam, Ever' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-badge-bg)] border border-[var(--color-border-hover)] text-xs font-medium text-[var(--color-primary-dark)]"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-faint)] pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3.5 bg-[var(--color-section-alt)] border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-faint)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium animate-pulse">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl shadow-lg shadow-[var(--color-primary)]/25 transition-all duration-200 hover:shadow-xl hover:shadow-[var(--color-primary)]/30 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Privacy note */}
              <p className="mt-4 text-xs text-[var(--color-text-muted)]">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                You&apos;re In!
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto">
                Thank you for subscribing. Check your inbox for a confirmation email and get ready for powerful AI real estate insights.
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[var(--color-primary)]/25 transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
              >
                Got It
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}