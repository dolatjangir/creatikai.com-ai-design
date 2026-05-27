"use client";

import React, { useState, useRef, useEffect } from "react";
import { Home, ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

// Define strict types for our navigation items
interface NavItem {
  label: string;
  icon?: React.ReactNode;
  href: string;
  submenu?: SubmenuCategory[];
}

interface SubmenuCategory {
  title: string;
  items: { label: string; href: string }[];
}

const submenuProducts: SubmenuCategory[] = [
  {
    title: "AI Agents",
    items: [
      { label: "Calling Agent", href: "/products/calling-agent" },
      { label: "Content Creation agent", href: "/products/content-creation-agent" },
      { label: "Seo Content Agent", href: "/products/seo-content-agent" },
      { label: "Follow Up Agent", href: "/products/follow-up-agent" },
      { label: "Data Mining Agent", href: "/products/data-mining-agent" },
      

    ],
  },
  {
    title: "AI Agents",
    items: [
      { label: "Campaign Automation", href: "/products/campaign-automation" },
      { label: "Lead Capture Agent", href: "/products/lead-capture-agent" },
      { label: "Lead Qualification Agent", href: "/products/lead-qualification-agent" },
       { label: "Property Maching Agent", href: "/products/property-maching-agent" },
      { label: "Social Media Agent", href: "/products/social-media-agent" },
    ],
  },
 
];

const submenuData: SubmenuCategory[] = [
  {
    title: "AI Studio",
    items: [
      { label: "Business Enhance", href: "#" },
      { label: "Video Creation", href: "#" },
      { label: "Content Creation", href: "#" },
    ],
  },
  {
    title: "Training",
    items: [
      { label: "AI Training", href: "#" },
      { label: "Education with AI", href: "#" },
      { label: "Digital Marketing", href: "#" },
    ],
  },
  {
    title: "AI Automation",
    items: [
      { label: "Workflow Automation", href: "#" },
      { label: "Process Optimization", href: "#" },
      { label: "Smart Integrations", href: "#" },
    ],
  },
  {
    title: "AI Tools Consulting",
    items: [
      { label: "Strategy Planning", href: "#" },
      { label: "Implementation Support", href: "#" },
      { label: "Performance Analysis", href: "#" },
    ],
  },
];
const submenuTraining: SubmenuCategory[] = [
  {
    title: "AI courses",
    items: [
      { label: "Ai training", href: "/training/ai-courses/ai-training" },
      { label: "Machine Learning Training", href: "/training/ai-courses/ai-machine-learning" },
      { label: "fullstack training", href: "/training/ai-courses/fullstack-web-development" },
    ],
  },
  {
    title: "Digital Marketing ",
    items: [
      { label: "Digital Marketing training", href: "/training/digital-marketing/digital-marketing-training-in-jaipur" },
      { label: "Social Media Campaign", href: "/training/digital-marketing/social-media-campaign" },
      { label: "google Ads", href: "/training/digital-marketing/google-ads" },
    ],
  },

];
const submenuIndustry: SubmenuCategory[] = [
  {
    title: "",
    items: [
      { label: "Education", href: "/industry/education" },
      { label: "real estate", href: "/industry/real-estate" },
      { label: "HealthCare", href: "/industry/healthcare" },
    ],
  },
  

];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpandedSubmenu, setMobileExpandedSubmenu] = useState<string | null>(null);

  // ── Scroll-aware visibility ──────────────────────────────────────────────
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  const scrollThreshold = 10; // px — ignore tiny jitter

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) < scrollThreshold) return; // ignore micro-scroll

      if (diff > 0) {
        // Scrolling DOWN → hide navbar
        setIsNavVisible(false);
        // Close mobile menu too, so it doesn't float orphaned
        setIsMobileMenuOpen(false);
      } else {
        // Scrolling UP → show navbar
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ────────────────────────────────────────────────────────────────────────

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: "Products", href: "#",submenu:submenuProducts },
    { label: "Training", href: "#" ,submenu:submenuTraining},
    { label: "Industry", href: "#" , submenu: submenuIndustry, },
    {
      label: "Services",
      href: "#",
      submenu: submenuData,
    },
    { label: "Resources", href: "#",submenu: submenuData, },
  ];

  const handleMouseEnter = (label: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 px-4 py-6 md:px-8 flex justify-center"
      style={{
        // Slide up (hide) when scrolling down, slide back into view on scroll up.
        // translate3d keeps it GPU-accelerated; transition gives the smooth ease.
        transform: isNavVisible ? "translate3d(0, 0, 0)" : "translate3d(0, -120%, 0)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        // Keep pointer events off while hidden so nothing is accidentally clickable
        pointerEvents: isNavVisible ? "auto" : "none",
      }}
    >
      {/* Main Navbar Container */}
      <nav className="w-full max-w-6xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 relative">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer select-none">
          <div className="relative flex items-center justify-center">
            <img width={40} src="/creatikai-logo.png" alt="Creatik AI Logo" />
            {/* Top right tiny sparkle on Logo */}
            <Sparkles className="w-3 h-3 text-indigo-400 absolute -top-1 -right-1 opacity-80" />
          </div>
          
          <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 dark:text-white">
            Creatik <span className="text-indigo-600 dark:text-indigo-400 font-extrabold">AI</span>
          </span>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-50/50 dark:bg-slate-900/90 p-1 rounded-full">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.label;
            const hasSubmenu = !!item.submenu;
            const isSubmenuOpen = hoveredNav === item.label;

            return (
              <div
                key={item.label}
                className="flex items-center relative"
                onMouseEnter={() => hasSubmenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveTab(item.label)}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2 cursor-pointer outline-none
                    ${isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }
                  `}
                >
                  {item.icon && <span className="opacity-90">{item.icon}</span>}
                  <span>{item.label}</span>
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""}`}
                    />
                  )}

                  {/* Active bottom accent bar */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>

                {/* Desktop Submenu Dropdown */}
                {hasSubmenu && isSubmenuOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-5 min-w-[520px]">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {item.submenu!.map((category) => (
                          <div key={category.title} className="flex flex-col gap-2">
                            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-purple)] dark:text-slate-500 mb-1">
                              {category.title}
                            </h4>
                            <div className="flex flex-col gap-0.5">
                              {category.items.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="px-3 py-2 text-sm text-[var(--color-primary)] font-semibold dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 rounded-lg transition-all duration-200"
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Subtle Vertical Divider between tabs (except after the last item) */}
                {index < navItems.length - 1 && (
                  <div className="h-4 w-[1px] bg-slate-200/80 dark:bg-slate-700 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: CTA Button + Desktop Sparkles */}
        <div className="hidden md:flex items-center relative pr-4">
          <button className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-98 transition-all duration-200 cursor-pointer">
            <span>Do</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Floating sparkles on top-right edge */}
          <div className="absolute -top-3 -right-2 pointer-events-none flex gap-1 select-none">
            <Sparkles className="w-4 h-4 text-purple-300/70 animate-pulse" />
            <Sparkles className="w-3 h-3 text-indigo-300/50 transform translate-y-3 -translate-x-1" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl p-5 md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200 z-40">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              const hasSubmenu = !!item.submenu;
              const isMobileSubmenuExpanded = mobileExpandedSubmenu === item.label;

              return (
                <div key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (hasSubmenu) {
                        setMobileExpandedSubmenu(isMobileSubmenuExpanded ? null : item.label);
                      } else {
                        setActiveTab(item.label);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`w-full px-4 py-3 text-left font-medium text-sm rounded-xl flex items-center justify-between gap-3 transition-colors
                      ${isActive
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isMobileSubmenuExpanded ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Mobile Submenu Accordion */}
                  {hasSubmenu && isMobileSubmenuExpanded && (
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-3 border-l border-slate-200 dark:border-slate-700 pl-4">
                      {item.submenu!.map((category) => (
                        <div key={category.title} className="flex flex-col gap-1">
                          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2">
                            {category.title}
                          </h4>
                          {category.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="px-2 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-1" />

          {/* Mobile CTA Button */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10">
            <span>Do</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}