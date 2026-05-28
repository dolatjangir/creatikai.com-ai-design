import React from 'react';
import { 
  Disc, 
  ArrowRight, 
  Send, 
  Rocket, 
  ShieldCheck, 
  Sparkles, 
  Headphones, 
  Globe, 
  Sun 
} from 'lucide-react';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="relative w-[95%] mx-auto bg-[var(--color-section-alt-2)] rounded-t-lg text-[var(--color-text-secondary)] font-sans overflow-hidden py-16 px-6 md:px-12 lg:px-24">

      {/* Dynamic Background Abstract Lines & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top left sparkle cluster */}
        <div className="absolute top-8 left-8 text-[var(--color-purple)]/20 text-xs tracking-widest select-none">✦ ✦ ✦</div>

        {/* Soft bottom wave lines representation using overlapping gradients */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-40 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-purple)]/20 via-[var(--color-primary)]/10 to-transparent"></div>
        <svg className="absolute bottom-0 left-0 w-full h-32 text-[var(--color-purple)]/10" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64C120,85.3,240,107,360,101.3C480,96,600,64,720,53.3C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,0,120Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">

          {/* Brand Column (4/12 width) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-purple)] shadow-md shadow-[var(--color-primary)]/30">
                <span className="text-white font-black text-xl italic">C</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center text-[8px] text-[var(--color-purple)]">✦</div>
              </div>
              <span className="text-xl font-bold text-[var(--color-text-primary)] tracking-tight">Creatik <span className="text-[var(--color-primary)]">AI</span></span>
            </div>

            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-sm">
              Creatik AI empowers you to create, design, and automate with the power of artificial intelligence.
            </p>
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              Build smarter. Create faster. Grow bigger.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: <FaTwitter className="w-4 h-4" />, href: "#" },
                { icon: <FaLinkedin className="w-4 h-4" />, href: "#" },
                { icon: <Disc className="w-4 h-4" />, href: "#" },
                { icon: <FaInstagram className="w-4 h-4" />, href: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-200">
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-purple)] to-[var(--color-primary-dark)] text-white font-medium text-sm shadow-lg shadow-[var(--color-purple)]/20 hover:opacity-95 transition-all cursor-pointer">
                <span>✦ ✦ Try Creatik AI Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links Columns (5/12 width total) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">

            {/* Product */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-[var(--color-purple)] tracking-wider uppercase border-b-2 border-[var(--color-purple)] w-max pb-1">Product</span>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Tasks</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Scan</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Payments</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-[var(--color-primary-dark)] tracking-wider uppercase border-b-2 border-[var(--color-primary-dark)] w-max pb-1">Resources</span>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-[var(--color-primary-dark)] tracking-wider uppercase border-b-2 border-[var(--color-primary-dark)] w-max pb-1">Company</span>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Affiliates</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Partners</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold text-[var(--color-purple)] tracking-wider uppercase border-b-2 border-[var(--color-purple)] w-max pb-1">Legal</span>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box Glassmorphism (3/12 width) */}
          <div className="lg:col-span-3 relative rounded-3xl border border-[var(--color-bg)] bg-gradient-to-b from-[var(--color-icon-bg-1)]/80 to-[var(--color-icon-bg-2)]/80 p-6 shadow-xl shadow-[var(--color-primary)]/5 overflow-hidden backdrop-blur-sm">
            {/* Inner abstract floating shapes */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[var(--color-purple)]/30 opacity-60 blur-xl"></div>

            <div className="flex flex-col space-y-4 h-full justify-between relative z-10">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white mb-4 shadow-md shadow-[var(--color-primary)]/30">
                  <Send className="w-4 h-4 transform -rotate-12" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] tracking-tight">Stay ahead, always</h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  Get the latest updates, tips, and exclusive offers — straight to your inbox.
                </p>
              </div>

              {/* Form Input Group */}
              <div className="relative flex items-center bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full p-1.5 shadow-sm mt-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-transparent pl-3 pr-10 py-1.5 text-xs text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none border-none"
                />
                <button className="absolute right-1.5 p-2 rounded-full bg-[var(--color-purple)] text-white hover:bg-[var(--color-purple)]/90 transition-all cursor-pointer">
                  <Send className="w-3 h-3 transform -rotate-12" />
                </button>
              </div>

              {/* Embedded Glass Envelope Graphic */}
              <div className="pt-2 flex justify-center opacity-90">
                <div className="relative w-28 h-16 bg-gradient-to-tr from-[var(--color-purple)]/30 to-[var(--color-primary)]/20 rounded-xl border border-[var(--color-bg)]/40 shadow-inner flex items-center justify-center">
                  <span className="text-[10px] text-[var(--color-primary)]/60">✦</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- VALUE PROPOSITION STRIP --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-8 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-bg)]/70 backdrop-blur-md shadow-sm">

          {/* Blazing Fast */}
          <div className="flex items-center space-x-4 border-r-0 sm:border-r border-[var(--color-border)] last:border-none pr-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-icon-bg-1)] flex items-center justify-center text-[var(--color-primary)]">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Blazing Fast</h4>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Experience speed like never before.</p>
            </div>
          </div>

          {/* Enterprise Secure */}
          <div className="flex items-center space-x-4 border-r-0 lg:border-r border-[var(--color-border)] last:border-none pr-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-icon-bg-2)] flex items-center justify-center text-[var(--color-purple)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">Enterprise Secure</h4>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Your data is protected with enterprise-grade security.</p>
            </div>
          </div>

          {/* AI-Powered */}
          <div className="flex items-center space-x-4 border-r-0 sm:border-r border-[var(--color-border)] last:border-none pr-2">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-icon-bg-2)] flex items-center justify-center text-[var(--color-purple)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">AI-Powered</h4>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">Smarter tools to boost your productivity.</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center space-x-4 last:border-none">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-icon-bg-1)] flex items-center justify-center text-[var(--color-primary-dark)]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">24/7 Support</h4>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">We're here for you, anytime, anywhere.</p>
            </div>
          </div>

        </div>

        {/* --- BOTTOM ACTIONS & CREDITS BAR --- */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border-light)] flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Copyright */}
          <div className="flex flex-col space-y-1 text-xs text-[var(--color-text-muted)] text-center md:text-left">
            <span>© 2025 Creatik AI. All rights reserved.</span>
            <span>Made with <span className="text-[var(--color-purple)]">❤️</span> by Creatik AI Team</span>
          </div>

          {/* Right Selectors */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-xs font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] transition-colors cursor-pointer">
              <Globe className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" />
              <span>English</span>
              <span className="text-[10px] text-[var(--color-text-muted)]">▼</span>
            </button>

            {/* Dark/Light Toggle */}
            <button className="flex items-center justify-center w-9 h-9 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer">
              <Sun className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}