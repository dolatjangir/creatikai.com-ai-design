"use client";

import React, { useState, useRef, useEffect } from "react";
import { Home, ArrowRight, Sparkles, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

// ── Types ───────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  icon?: React.ReactNode;
  href: string;
  submenu?: SubmenuCategory[];
}

interface SubmenuCategory {
  title: string;
  items: { label: string; href: string; icon?:string }[];
}


const submenuProducts: SubmenuCategory[] = [
  {
    title: "AI Agents",
    items: [
      { label: "Calling Agent", href: "/products/calling-agent",icon:"/img-1.png" },
      { label: "Content Creation Agent", href: "/products/content-creation-agent",icon:"/img-2.png" },
      { label: "SEO Content Agent", href: "/products/seo-content-agent",icon:"/img-3.png" },
      { label: "Follow Up Agent", href: "/products/follow-up-agent",icon:"/img-4.png" },
      { label: "Data Mining Agent", href: "/products/data-mining-agent",icon:"/img-555.png" },
    ],
  },
  {
    title: "Automation",
    items: [
      { label: "Campaign Automation", href: "/products/campaign-automation",icon:"/img-6.png" },
      { label: "Lead Capture Agent", href: "/products/lead-capture-agent",icon:"/img-7.png" },
      { label: "Lead Qualification Agent", href: "/products/lead-qualification-agent",icon:"/img-8.png" },
      { label: "Property Matching Agent", href: "/products/property-matching-agent",icon:"/img-9.png" },
      { label: "Social Media Agent", href: "/products/social-media-agent",icon:"/img-10.png" },
    ],
  },
];

const submenuService: SubmenuCategory[] = [
  {
    title: "AI Studio",
    items: [
      { label: "Business Enhance", href: "/services/ai-studio/bussiness-enhance" },
      { label: "Video Creation", href: "/services/ai-studio/video-creation" },
      { label: "Content Creation", href: "/services/ai-studio/content-creation" },
    ],
  },
  {
    title: "AI Automation",
    items: [
      { label: "Business Automation", href: "/services/ai-automation/business-automation" },
      { label: "Lead Automation", href: "/services/ai-automation/lead-automation" },
      { label: "Workflow Automation", href: "/services/ai-automation/workflow-automation" },
    ],
  },
    {
    title: "Ai Tools Consulting",
    items: [
      { label: "AI Chatbot", href: "/services/ai-tools-consulting/ai-chatbot" },
      { label: "Ai Personal Assistent", href: "/services/ai-tools-consulting/ai-personal-assistent" },
      { label: "Ai Tools Course", href: "/services/ai-tools-consulting/ai-tools-course" },
    ],
  },
];

const submenuTraining: SubmenuCategory[] = [
  {
    title: "AI Courses",
    items: [
      { label: "AI Training", href: "/training/ai-courses/ai-training" },
      { label: "Machine Learning Training", href: "/training/ai-courses/ai-machine-learning" },
      { label: "Fullstack Training", href: "/training/ai-courses/fullstack-web-development" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "Digital Marketing Training", href: "/training/digital-marketing/digital-marketing-training-in-jaipur" },
      { label: "Social Media Campaign", href: "/training/digital-marketing/social-media-campaign" },
      { label: "Google Ads", href: "/training/digital-marketing/google-ads" },
    ],
  },
];

const submenuIndustry: SubmenuCategory[] = [
  {
    title: "Industries",
    items: [
      { label: "Education", href: "/industry/education" },
      { label: "Real Estate", href: "/industry/real-estate" },
      { label: "Healthcare", href: "/industry/healthcare" },
    ],
  },
  {
    title: "More Industries",
    items: [
      { label: "Technology", href: "/industry/technology" },
      { label: "Travel & Tourism", href: "/industry/travel-tourism" },
      { label: "Consumer Goods Retail", href: "/industry/consumer-goods-retail" },
    ],
  },
];

const submenuResources: SubmenuCategory[] = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/resourses/about-us" },
      { label: "Contact Us", href: "/resourses/contact-us" },
      { label: "Why Choose Us", href: "/resourses/why-choose-us" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "/resourses/help-center" },
      { label: "Community", href: "/resourses/community" },
      { label: "Blog", href: "/resourses/blog" },
    ],
  },
];

// ── Helper: Calculate dynamic submenu grid based on content ─────────────
function getSubmenuLayout(categories: SubmenuCategory[]) {
  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const categoryCount = categories.length;
  const maxItemsInCategory = Math.max(...categories.map((c) => c.items.length));

  const cols = categoryCount;

  // Determine width based on content density
  let widthClass ="w-max"

  // Determine gap based on density
  const gapClass = maxItemsInCategory > 5 ? "gap-x-8 gap-y-5" : "gap-x-6 gap-y-4";

  return { cols, widthClass, gapClass, gridCols: `grid-cols-${cols}` };
}

// ── Submenu Component ───────────────────────────────────────────────────
function MegaMenu({
  categories,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  categories: SubmenuCategory[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!isOpen) return null;

  const { cols, widthClass, gapClass } = getSubmenuLayout(categories);

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Animated container */}
      <div
        className={`
          bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl 
          rounded-2xl border border-slate-100 dark:border-slate-700/50 
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]
          p-6 ${widthClass}
          animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200
        `}
      >
        <div
          className={`grid ${gapClass}`}
          style={{
        gridTemplateColumns: `repeat(${cols}, max-content)`,
          }}
        >
          {categories.map((category, catIndex) => (
            <div key={`${category.title}-${catIndex}`} className="flex flex-col gap-2.5">
              {/* Category Title with accent */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />
                <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-col gap-0.5">
                {category.items.map((subItem) => (
                  <Link
                    key={subItem.href + subItem.label}
                    href={subItem.href}
                    className="group/item relative px-3 py-2.5 text-[13px] font-medium text-slate-600 dark:text-slate-300 
                      hover:text-blue-600 dark:hover:text-blue-400 
                      hover:bg-blue-50/60 dark:hover:bg-blue-950/30 
                      rounded-xl transition-all duration-200 flex items-center gap-2.5"
                  >
                    {/* Hover indicator line */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 rounded-full bg-blue-500 group-hover/item:h-5 transition-all duration-300" />
                     {subItem.icon && (
      <img
        src={subItem.icon}
        alt={subItem.label}
        className="w-14 h-14 rounded-lg object-contain flex-shrink-0 border border-slate-100 dark:border-slate-700 shadow-sm"
      />
    )}
                    <span className="relative z-10">{subItem.label}</span>
                    
                    {/* Arrow on hover */}
                    <ArrowRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-blue-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar Component ───────────────────────────────────────────────
export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpandedSubmenu, setMobileExpandedSubmenu] = useState<string | null>(null);

  // Scroll-aware visibility
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (Math.abs(diff) < scrollThreshold) return;

      if (diff > 0) {
        setIsNavVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: "Products", href: "#", submenu: submenuProducts },
    { label: "Training", href: "#", submenu: submenuTraining },
    { label: "Industry", href: "#", submenu: submenuIndustry },
    { label: "Services", href: "#", submenu: submenuService },
    { label: "Resources", href: "#", submenu: submenuResources },
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
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 px-4 py-6 md:px-8 flex justify-center"
      style={{
        transform: isNavVisible ? "translate3d(0, 0, 0)" : "translate3d(0, -120%, 0)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: isNavVisible ? "auto" : "none",
      }}
    >
      {/* Main Navbar Container */}
      <nav className="w-full max-w-6xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300 relative">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer select-none">
          <div className="relative flex items-center justify-center">
           <Link href="/"> <img width={40} src="/creatikai-logo.png" alt="Creatik AI Logo" /></Link>
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
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>

                {/* Dynamic Mega Menu */}
                {hasSubmenu && (
                  <MegaMenu
                    categories={item.submenu!}
                    isOpen={isSubmenuOpen}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  />
                )}

                {/* Divider */}
                {index < navItems.length - 1 && (
                  <div className="h-4 w-[1px] bg-slate-200/80 dark:bg-slate-700 mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:flex items-center relative pr-4">
          <button className="relative group overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 cursor-pointer">
            <span>Register</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <div className="absolute -top-3 -right-2 pointer-events-none flex gap-1 select-none">
            <Sparkles className="w-4 h-4 text-purple-300/70 animate-pulse" />
            <Sparkles className="w-3 h-3 text-indigo-300/50 transform translate-y-3 -translate-x-1" />
          </div>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
       <div className="absolute top-24 left-4 right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl md:hidden flex flex-col z-40 overflow-hidden"
  style={{ maxHeight: "80vh", animation: "mobileMenuDown 0.35s cubic-bezier(0.4,0,0.2,1) forwards" }}>
         <div className="flex flex-col gap-1 overflow-y-auto px-5 pt-5 pb-2">
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
                    <div className="ml-4 mt-1 mb-2 flex flex-col gap-4 border-l-2 border-blue-100 dark:border-blue-900/50 pl-4">
                      {item.submenu!.map((category, catIdx) => (
                        <div key={`mobile-${category.title}-${catIdx}`} className="flex flex-col gap-1.5">
                          {category.title && (
                            <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 px-2">
                              {category.title}
                            </h4>
                          )}
                          {category.items.map((subItem) => (
                            <Link
                              key={subItem.href + subItem.label}
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="px-2 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 rounded-lg transition-colors flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

           {/* Sticky Register Button */}
        <div className="sticky bottom-0 left-0 right-0 bg-white dark:bg-slate-900 pt-3 pb-5 px-5 border-t border-slate-100 dark:border-slate-800">
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10 active:scale-95 transition-transform">
            <span>Register</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      )}
    </header>
  );
}