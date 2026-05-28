"use client";

import React, { useState } from "react";
import {
  Plane,
  Hotel,
  MapPin,
  Globe,
  Star,
  Clock,
  Award,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Play,
  Target,
  BookOpen,
  BarChart3,
  Shield,
  Infinity,
  Rocket,
  Lightbulb,
  Zap,
  MessageCircle,
  Lock,
  Quote,
  Layers,
  Calendar,
  Phone,
  Mail,
  FileText,
  ClipboardCheck,
  Activity,
  TrendingUp,
  Sparkles,
  Crown,
  BadgeCheck,
  Fingerprint,
  Cloud,
  FileCheck,
  Users,
  Heart,
  Compass,
  Luggage,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Umbrella,
  Waves,
  Mountain,
  TreePine,
  Palmtree,
  Sailboat,
  Anchor,
  Binoculars,
  Camera,
  Video,
  Image,
  Map,
  Navigation,
  Locate,
  MapPinned,
  Route,
  Waypoints,
  Flag,
  Ticket,
  BadgePercent,
  Percent,
  Tag,
  Receipt,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Landmark,
  Building2,
  Home,
  BedDouble,
  Bath,
  Car,
  Bus,
  TrainFront,
  Train,
  PlaneTakeoff,
  PlaneLanding,
  PlaneIcon,
  LuggageIcon,
  Backpack,
  GlassWater,
  Wine,
  Utensils,
  Coffee,
  ConciergeBell,
  Bell,
  BellRing,
  BellPlus,
  BellMinus,
  Volume2,
  VolumeX,
  Headphones,
  Headset,
  Mic,
  Mic2,
  Radio,
  RadioTower,
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothOff,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryWarning,
  Plug,
  PlugZap,
  Power,
  PowerOff,
  ToggleLeft,
  ToggleRight,
  SlidersHorizontal,
  SlidersVertical,
  Gauge,
  GaugeCircle,
  ActivitySquare,
  Timer,
  TimerOff,
  TimerReset,
  AlarmClock,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmClockMinus,
  AlarmClockCheck,
  Watch,
  WatchIcon,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Tv,
  Tv2,
  RadioIcon,
  Speaker,
  SpeakerIcon,
  Volume1,
  Volume,
  VolumeXIcon,
  Volume2Icon,
  VolumeOff,
  Megaphone,
  MegaphoneOff,
 
} from "lucide-react";

/* ───────────────────────────────────────────────
   TRAVEL & TOURISM — INDUSTRY PAGE
   CreatiKai Design System — Next.js + Tailwind v4
   Pure CSS Animations — No Framer Motion
   ─────────────────────────────────────────────── */

const PageStyles = () => (
  <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(28px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.92); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-14px); }
    }
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      33% { transform: translateY(-20px) translateX(12px); }
      66% { transform: translateY(12px) translateX(-14px); }
    }
    @keyframes floatSlower {
      0%, 100% { transform: translateY(0px) translateX(0px); }
      25% { transform: translateY(-12px) translateX(18px); }
      50% { transform: translateY(-24px) translateX(-10px); }
      75% { transform: translateY(6px) translateX(14px); }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.12; }
      50% { opacity: 0.22; }
    }
    @keyframes orbit {
      from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
    }
    @keyframes orbitReverse {
      from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
      to { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
    }
    @keyframes orbitSmall {
      from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
      to { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-24px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.15; }
      50% { transform: scale(1.05); opacity: 0.25; }
    }
    .anim-fade-up {
      animation: fadeInUp 0.75s ease-out forwards;
      opacity: 0;
    }
    .anim-fade-in {
      animation: fadeIn 0.65s ease-out forwards;
      opacity: 0;
    }
    .anim-scale-in {
      animation: scaleIn 0.55s ease-out forwards;
      opacity: 0;
    }
    .anim-slide-right {
      animation: slideRight 0.7s ease-out forwards;
      opacity: 0;
    }
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-600 { animation-delay: 0.6s; }
    .delay-700 { animation-delay: 0.7s; }
    .delay-800 { animation-delay: 0.8s; }
    .stagger-children > *:nth-child(1) { animation-delay: 0.06s; }
    .stagger-children > *:nth-child(2) { animation-delay: 0.12s; }
    .stagger-children > *:nth-child(3) { animation-delay: 0.18s; }
    .stagger-children > *:nth-child(4) { animation-delay: 0.24s; }
    .stagger-children > *:nth-child(5) { animation-delay: 0.30s; }
    .stagger-children > *:nth-child(6) { animation-delay: 0.36s; }
    .stagger-children > *:nth-child(7) { animation-delay: 0.42s; }
    .stagger-children > *:nth-child(8) { animation-delay: 0.48s; }
    .stagger-children > *:nth-child(9) { animation-delay: 0.54s; }
    .stagger-children > *:nth-child(10) { animation-delay: 0.60s; }
    .stagger-children > *:nth-child(11) { animation-delay: 0.66s; }
    .stagger-children > *:nth-child(12) { animation-delay: 0.72s; }
    .hover-lift {
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.35s ease;
    }
    .hover-lift:hover {
      transform: translateY(-10px);
      box-shadow: 0 28px 56px -14px rgba(37, 99, 235, 0.2);
    }
    .icon-bounce:hover .icon-target {
      transform: translateY(-5px) scale(1.14);
    }
    .icon-target {
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, padding 0.35s ease;
      opacity: 0;
    }
    .accordion-content.open {
      max-height: 900px;
      opacity: 1;
    }
    .hero-glow-1 {
      animation: floatSlow 14s ease-in-out infinite;
    }
    .hero-glow-2 {
      animation: floatSlower 18s ease-in-out infinite reverse;
    }
    .hero-glow-3 {
      animation: floatSlow 12s ease-in-out infinite 3s;
    }
    .hero-glow-4 {
      animation: floatSlower 16s ease-in-out infinite 1s;
    }
    .orbit-1 {
      animation: orbit 24s linear infinite;
    }
    .orbit-2 {
      animation: orbitReverse 30s linear infinite;
    }
    .orbit-3 {
      animation: orbitSmall 20s linear infinite reverse;
    }
  `}</style>
);

/* ─── Data ─── */
const stats = [
  { icon: Users, value: "16,400+", label: "Travel Pros Trained" },
  { icon: Star, value: "4.9/5", label: "Travel Pro Rating" },
  { icon: Clock, value: "40 Hours", label: "Course Content" },
  { icon: Shield, value: "IATA", label: "Industry Recognized" },
];

const modules = [
  {
    id: 1,
    title: "Travel CRM & Booking Management",
    duration: "6h 45m",
    lessons: 19,
    desc: "Build a traveler-centric CRM that transforms how your agency or hotel operates. Master reservation workflows, itinerary management, guest profiles, and multi-channel booking synchronization across OTAs, direct bookings, and walk-ins.",
    topics: [
      "Multi-Channel Booking Sync",
      "Guest Profile & Preference Management",
      "Itinerary Builder & Management",
      "OTA Integration (Booking.com, Expedia)",
      "Real-Time Availability Engine",
    ],
    icon: Luggage,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#dbeafe",
  },
  {
    id: 2,
    title: "Traveler Acquisition & Marketing",
    duration: "8h 10m",
    lessons: 22,
    desc: "Fill your rooms and seats with qualified travelers. Master travel-specific digital marketing, destination SEO, meta-search advertising, influencer partnerships, and email campaigns that turn dreamers into bookers.",
    topics: [
      "Destination SEO & Content Strategy",
      "Meta-Search Marketing (Google Hotels, Trivago)",
      "Social Media Travel Content",
      "Influencer & Affiliate Partnerships",
      "Retargeting Abandoned Bookings",
    ],
    icon: Target,
    color: "#9333ea",
    bg: "#faf5ff",
    border: "#e9d5ff",
  },
  {
    id: 3,
    title: "Guest Communication & Experience",
    duration: "7h 20m",
    lessons: 20,
    desc: "Create unforgettable guest journeys from first search to post-trip review. Automate pre-arrival instructions, in-stay concierge services, real-time updates, and personalized recommendations that drive 5-star reviews.",
    topics: [
      "Pre-Arrival Welcome Sequences",
      "In-Stay Concierge Automation",
      "Real-Time Flight/Transfer Updates",
      "Personalized Activity Recommendations",
      "Post-Trip Review Generation",
    ],
    icon: ConciergeBell,
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    id: 4,
    title: "Revenue Management & Pricing",
    duration: "6h 30m",
    lessons: 17,
    desc: "Maximize revenue per available room and seat with dynamic pricing strategies. Learn demand forecasting, competitor rate monitoring, length-of-stay optimization, and package bundling that increases average booking value by 35%.",
    topics: [
      "Dynamic Pricing Algorithms",
      "Competitor Rate Intelligence",
      "Demand Forecasting Models",
      "Package & Experience Bundling",
      "Length-of-Stay Optimization",
    ],
    icon: BadgePercent,
    color: "#10b981",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    id: 5,
    title: "Tour Operations & Itinerary Design",
    duration: "5h 45m",
    lessons: 15,
    desc: "Design and operate tours that travelers rave about. Build automated itinerary creation, supplier management systems, group coordination tools, and contingency planning workflows for seamless multi-day experiences.",
    topics: [
      "Automated Itinerary Creation",
      "Supplier & Vendor Management",
      "Group Coordination Tools",
      "Contingency & Change Management",
      "Tour Guide Assignment Systems",
    ],
    icon: Route,
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    id: 6,
    title: "Analytics & Travel Business Growth",
    duration: "5h 30m",
    lessons: 16,
    desc: "Make data-driven decisions that grow your travel business. Build dashboards tracking occupancy rates, RevPAR, customer acquisition cost, Net Promoter Score, and seasonal trends to optimize every aspect of your operation.",
    topics: [
      "Occupancy & RevPAR Tracking",
      "Customer Acquisition Cost Analysis",
      "Net Promoter Score Monitoring",
      "Seasonal Trend Forecasting",
      "Multi-Property Portfolio Management",
    ],
    icon: BarChart3,
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
];

const outcomes = [
  {
    icon: TrendingUp,
    title: "45% More Direct Bookings",
    desc: "Reduce OTA commission dependency with direct booking strategies, loyalty programs, and email marketing that converts lookers into bookers on your own platform.",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Ready Systems",
    desc: "Build PMS-integrated CRM workflows specifically designed for hotels, resorts, vacation rentals, and boutique properties of any size.",
  },
  {
    icon: Zap,
    title: "80% Guest Comm Automation",
    desc: "Automate check-in instructions, room upgrades, activity suggestions, and feedback requests. Your staff focuses on hospitality, not repetitive messaging.",
  },
  {
    icon: Shield,
    title: "GDPR & Travel Data Compliant",
    desc: "All guest data handling meets GDPR, CCPA, and travel industry-specific privacy requirements. Passport and payment data secured with PCI DSS standards.",
  },
  {
    icon: Rocket,
    title: "Single to Multi-Property",
    desc: "Scale from a single boutique hotel to a 50-property portfolio with centralized guest management, unified reporting, and brand-consistent communication.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access + Updates",
    desc: "Travel tech changes fast. Get lifetime access to all materials, quarterly OTA integration updates, new destination marketing strategies, and the private travel pro community.",
  },
];

const testimonials = [
  {
    name: "Elena Vasquez",
    role: "Revenue Manager, Azure Resorts",
    image: "EV",
    quote:
      "The dynamic pricing module transformed our revenue strategy. We implemented automated rate adjustments across 12 properties and saw RevPAR increase by 28% in the first quarter. The competitor monitoring tool alone pays for the course monthly.",
    rating: 5,
    metric: "28% RevPAR Growth",
  },
  {
    name: "James Nakamura",
    role: "Owner, Horizon Travel Agency",
    image: "JN",
    quote:
      "We went from 80% OTA dependency to 55% direct bookings in 6 months using the acquisition strategies from Module 2. Our email automation now generates $180K in direct revenue annually with zero manual effort.",
    rating: 5,
    metric: "$180K Direct Revenue",
  },
  {
    name: "Amara Okafor",
    role: "Operations Director, Safari Expeditions",
    image: "AO",
    quote:
      "The tour operations module streamlined our 14-day safari itineraries across 3 countries. Guest satisfaction scores jumped from 4.2 to 4.9 stars. Guide coordination that used to take 20 hours weekly now runs on autopilot.",
    rating: 5,
    metric: "4.9 Star Rating",
  },
];

const faqs = [
  {
    q: "Is this course suitable for small boutique hotels?",
    a: "Absolutely. The frameworks scale from a 5-room boutique property to a 500-room resort chain. We include specific playbooks for independent hotels, vacation rentals, hostels, tour operators, and travel agencies of all sizes.",
  },
  {
    q: "Which booking engines and OTAs do you cover?",
    a: "We cover all major platforms: Booking.com, Expedia, Airbnb, Vrbo, Agoda, TripAdvisor, Google Hotels, and direct booking engines like Cloudbeds, SiteMinder, and Bookassist. Integration patterns work with any channel manager.",
  },
  {
    q: "Will this work for airlines or cruise lines?",
    a: "Yes. While focused on accommodations and tours, all traveler acquisition, communication automation, and revenue management frameworks adapt perfectly to airlines, cruise operators, car rental companies, and destination management companies.",
  },
  {
    q: "How does the revenue management module compare to dedicated RMS tools?",
    a: "Our module teaches the strategic principles behind tools like Duetto, IDeaS, and Atomize — so you understand WHY rates change, not just how to click buttons. Many students report outperforming automated RMS recommendations after applying our frameworks.",
  },
  {
    q: "Do you cover sustainable and eco-tourism marketing?",
    a: "Extensively. We dedicate an entire lesson to green tourism certification marketing, carbon offset integration, eco-friendly property positioning, and the growing sustainable travel segment that commands 20-30% rate premiums.",
  },
];

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 min-h-[92vh] flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <div className="hero-glow-1 absolute top-[5%] left-[0%] w-[600px] h-[600px] rounded-full opacity-[0.18] blur-[140px] bg-[#2563eb]" />
        <div className="hero-glow-2 absolute bottom-[0%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[120px] bg-[#60a5fa]" />
        <div className="hero-glow-3 absolute top-[40%] left-[55%] w-[350px] h-[350px] rounded-full opacity-[0.10] blur-[90px] bg-[#93c5fd]" />
        <div className="hero-glow-4 absolute top-[15%] right-[30%] w-[250px] h-[250px] rounded-full opacity-[0.08] blur-[70px] bg-[#1e40af]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(30deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)`,
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-1 absolute w-2.5 h-2.5 rounded-full bg-[#60a5fa] opacity-50" />
          <div className="orbit-2 absolute w-2 h-2 rounded-full bg-[#93c5fd] opacity-40" />
          <div className="orbit-3 absolute w-3 h-3 rounded-full bg-[#2563eb] opacity-30" />
        </div>

        <div className="absolute top-[20%] left-[12%] anim-float opacity-[0.05]">
          <Plane className="w-24 h-24 text-white" />
        </div>
        <div className="absolute bottom-[25%] right-[18%] anim-float-slow opacity-[0.04]" style={{ animationDelay: "2s" }}>
          <Hotel className="w-20 h-20 text-white" />
        </div>
        <div className="absolute top-[55%] left-[65%] anim-float opacity-[0.04]" style={{ animationDelay: "4s" }}>
          <Compass className="w-16 h-16 text-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Travel & Tourism Industry Specialization</span>
          </div>

          <h1 className="anim-fade-up delay-100 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-white mb-6">
            The Complete{" "}
            <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#dbeafe] bg-clip-text text-transparent">
              Travel CRM
            </span>{" "}
            & Guest Growth System
          </h1>

          <p className="anim-fade-up delay-200 text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl">
            Master the technology, marketing, and systems that top hotels, resorts, and travel agencies 
            use to fill rooms, delight guests, and maximize revenue per traveler — from boutique 
            properties to global hospitality brands.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-base hover:bg-[#f8fafc] transition-all shadow-lg hover:shadow-xl"
            >
              Enroll Now — $847
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Watch Free Preview
            </button>
          </div>

          <div className="anim-fade-up delay-400 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["EV", "JN", "AO", "MK"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-[#2563eb] border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#94a3b8]">
                <span className="font-semibold text-white">16,400+</span> travel pros enrolled
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              ))}
              <span className="text-sm text-[#94a3b8] ml-1">
                <span className="font-semibold text-white">4.9/5</span> rating
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <Shield className="w-4 h-4 text-[#10b981]" />
              <span>IATA-Recognized & 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  return (
    <section className="py-12 bg-white border-b border-[#f1f5f9]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="anim-fade-up flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-md transition-all duration-300 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="w-6 h-6 text-[#2563eb] mb-3" />
              <p className="text-2xl font-bold text-[#0f172a]">{stat.value}</p>
              <p className="text-sm text-[#64748b]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Curriculum ─── */
function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(1);

  return (
    <section id="curriculum" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Complete Curriculum</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Fill Every Room & Seat
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            6 comprehensive modules, 109 video lessons, and 40 hours of travel-specific training designed for hospitality professionals who want results.
          </p>
        </div>

        <div className="space-y-4 stagger-children">
          {modules.map((module, i) => {
            const isOpen = openModule === module.id;
            return (
              <div
                key={module.id}
                className="anim-fade-up rounded-2xl border transition-all duration-300 overflow-hidden hover-lift"
                style={{
                  backgroundColor: isOpen ? "#ffffff" : "rgba(255,255,255,0.6)",
                  borderColor: isOpen ? "#dbeafe" : "#e2e8f0",
                  boxShadow: isOpen ? "0 12px 40px -12px rgba(37, 99, 235, 0.12)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : module.id)}
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 icon-bounce"
                    style={{ backgroundColor: module.bg }}
                  >
                    <module.icon className="w-6 h-6 icon-target" style={{ color: module.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: module.bg, color: module.color }}
                      >
                        Module {module.id}
                      </span>
                      <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {module.duration}
                      </span>
                      <span className="text-xs text-[#94a3b8] flex items-center gap-1">
                        <Layers className="w-3 h-3" /> {module.lessons} lessons
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a]">{module.title}</h3>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? module.bg : "#f1f5f9",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" style={{ color: isOpen ? module.color : "#94a3b8" }} />
                  </div>
                </button>

                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#475569] mb-4 max-w-3xl">{module.desc}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {module.topics.map((topic, ti) => (
                        <div
                          key={ti}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9] hover:border-[#dbeafe] transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: module.color }} />
                          <span className="text-sm font-medium text-[#0f172a]">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Outcomes ─── */
function Outcomes() {
  return (
    <section id="outcomes" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <Target className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">Learning Outcomes</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            What Your Travel Business Will{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Achieve
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            By the end of this course, your property or agency will operate with the efficiency of a global hospitality brand while delivering personalized guest experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="anim-fade-up group p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#dbeafe] hover:bg-white hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <outcome.icon className="w-6 h-6 text-[#2563eb]" />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{outcome.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{outcome.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section id="reviews" className="py-[var(--section-py)] bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb] opacity-10 blur-[120px] rounded-full" />

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
            <Crown className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-sm font-semibold text-white">Hospitality Leaders Speak</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Results That{" "}
            <span className="text-[#60a5fa]">Fill Rooms & Delight Guests</span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto">
            Join travel professionals worldwide who have transformed their occupancy, revenue, and guest satisfaction with our proven systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="anim-fade-up p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, ri) => (
                  <Star key={ri} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#2563eb] opacity-40 mb-3" />
              <p className="text-white/90 leading-relaxed mb-6 text-sm">{t.quote}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white text-sm font-bold">
                    {t.image}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#94a3b8]">{t.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#60a5fa] text-xs font-bold">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-[var(--section-py)] bg-[#f8fafc]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e2e8f0] shadow-sm mb-4">
            <Lock className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#475569]">Simple Pricing</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Invest in Your{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Hospitality Future
            </span>
          </h2>
          <p className="anim-fade-up delay-200 text-lg text-[#475569] max-w-2xl mx-auto">
            One payment. Lifetime access. No subscriptions. No hidden fees. Just fully booked properties and delighted guests.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="anim-scale-in delay-300 relative rounded-3xl bg-white border-2 border-[#2563eb] shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#2563eb] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              BEST VALUE
            </div>

            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Travel & Hospitality Mastery</h3>
              <p className="text-[#475569] mb-8">Complete system for guest acquisition, retention & revenue growth</p>

              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#0f172a]">$847</span>
                <span className="text-lg text-[#94a3b8] line-through mb-2">$3,697</span>
              </div>
              <p className="text-sm text-[#10b981] font-semibold mb-8">Save $2,850 — Limited Time Offer</p>

              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "109 HD Video Lessons (40 hours)",
                  "Travel-Specific Templates & Scripts",
                  "Private Hospitality Pro Community",
                  "Weekly Live Q&A with Industry Experts",
                  "IATA-Recognized Certificate",
                  "Lifetime Updates & OTA Changes",
                  "30-Day Money-Back Guarantee",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#475569]">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-full bg-[#2563eb] text-white font-bold text-lg hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)] mb-4">
                Enroll Now — Get Instant Access
              </button>
              <p className="text-xs text-[#94a3b8]">
                Secure payment. Instant access. 30-day refund guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-[var(--section-py)] bg-white">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
        <div className="text-center mb-16">
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] border border-[#dbeafe] mb-4">
            <MessageCircle className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm font-semibold text-[#1d4ed8]">FAQ</span>
          </div>
          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[#0f172a] mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 stagger-children">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="anim-fade-up rounded-2xl border transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#f8fafc" : "#ffffff",
                  borderColor: isOpen ? "#dbeafe" : "#e2e8f0",
                  boxShadow: isOpen ? "0 4px 20px -4px rgba(37, 99, 235, 0.1)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#0f172a] pr-4">{faq.q}</span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? "#eff6ff" : "#f1f5f9",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" style={{ color: isOpen ? "#2563eb" : "#94a3b8" }} />
                  </div>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <p className="px-6 pb-6 text-[#475569] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-[var(--section-py)] bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563eb] opacity-20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] relative z-10 text-center">
        <div>
          <div className="anim-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-[#60a5fa]" />
            <span className="text-sm font-semibold text-white">Ready to Transform Your Property?</span>
          </div>

          <h2 className="anim-fade-up delay-100 text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-white mb-4">
            Start Building the Travel Business{" "}
            <span className="text-[#60a5fa]">Travelers Dream About</span>
          </h2>

          <p className="anim-fade-up delay-200 text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8">
            Join 16,400+ hospitality professionals who have already transformed their guest experience and revenue. Your next fully booked season starts today.
          </p>

          <div className="anim-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)]"
            >
              Enroll Now for $847
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function TravelTourismTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageStyles />
      <Hero />
      <StatsBar />
      <Curriculum />
      <Outcomes />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}