"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import {
  ChevronLeft, ChevronRight, MessageSquare, Zap, Globe, Rocket, Clock,
  Code, Shield, TrendingUp, Users, BarChart3, Layers, ArrowRight,
  Send, CheckCircle, GitBranch, ExternalLink, Smartphone, Monitor,
  Database, Package, Palette, Bot, Terminal, Star, Target, DollarSign,
  Maximize2, Minimize2,
} from "lucide-react"

const TOTAL_SLIDES = 13

function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-[60] pointer-events-none opacity-[0.03]"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", animation: "grain 8s steps(10) infinite" }} />
  )
}

function BGEffects() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#060408]" />
      {/* Radial gradient glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }} />
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)" }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Fabric texture lines */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 30px)", backgroundSize: "42px 42px" }} />
    </div>
  )
}

function SlideWrapper({ children, isActive, index }: { children: React.ReactNode; isActive: boolean; index: number }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
      isActive ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-[60px] scale-[0.97] pointer-events-none"
    }`}>
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {children}
      </div>
    </div>
  )
}

function GlassCard({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl ${
      hover ? "hover:border-blue-500/30 hover:bg-white/[0.06] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]" : ""
    } transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}

function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>
      {value}{suffix}
    </span>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
      {children}
    </span>
  )
}

// ===== SLIDES =====

function SlideHero() {
  return (
    <div className="text-center">
      <div style={{ opacity: 0, animation: "rise 0.8s ease-out 100ms forwards" }}>
        <Badge><Bot className="w-3 h-3" /> AI-Powered App Builder</Badge>
      </div>
      <h1 className="mt-6 text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)", opacity: 0, animation: "rise 0.8s ease-out 200ms forwards" }}>
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Build Apps</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Through Chat</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-sans)", opacity: 0, animation: "rise 0.8s ease-out 350ms forwards" }}>
        Send a Telegram message describing your app. Get a live, production-grade website deployed in under 5 minutes. Full code ownership. Zero friction.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8" style={{ opacity: 0, animation: "rise 0.8s ease-out 500ms forwards" }}>
        {["Full-Stack Apps", "20+ Templates", "Auto-Deploy", "GitHub + Vercel", "Database Ready"].map((tag) => (
          <span key={tag} className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.04] border border-white/[0.08] text-white/60">{tag}</span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-10" style={{ opacity: 0, animation: "rise 0.8s ease-out 650ms forwards" }}>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="relative w-2 h-2"><div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" /><div className="w-2 h-2 rounded-full bg-emerald-400" /></div>
          <span className="text-xs font-semibold text-emerald-400">Live on Telegram</span>
        </div>
        <span className="text-xs text-white/30 font-mono">5 MIN AVG BUILD TIME</span>
      </div>
    </div>
  )
}

function SlideProblem() {
  const problems = [
    { icon: Clock, title: "Weeks to Launch", desc: "Hiring developers, managing sprints, waiting for deploys. An MVP takes 4-8 weeks minimum." },
    { icon: DollarSign, title: "Expensive", desc: "Freelancers charge $2K-10K+ for a basic web app. Agencies start at $15K. Most ideas die here." },
    { icon: Layers, title: "Complex Tooling", desc: "No-code tools still have learning curves. Figma to code pipelines break. Nothing just works." },
    { icon: Code, title: "No Ownership", desc: "Locked into platforms. Export limitations. Monthly fees forever. You never truly own the code." },
  ]
  return (
    <div>
      <Badge><Target className="w-3 h-3" /> The Problem</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Shipping an App<br /><span className="text-white/40">Still Takes Too Long</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {problems.map((p, i) => (
          <GlassCard key={p.title} className="p-5">
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
              <p.icon className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-base font-bold text-white/90 mb-1">{p.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{p.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideSolution() {
  return (
    <div className="text-center">
      <Badge><Zap className="w-3 h-3" /> The Solution</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        One Message.<br /><span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">One Live App.</span>
      </h2>
      <p className="mt-4 text-lg text-white/40 max-w-xl mx-auto">ShipBot is a Telegram bot that builds and deploys full-stack web apps from natural language descriptions.</p>
      <div className="mt-10 max-w-lg mx-auto">
        <GlassCard className="p-6 text-left" hover={false}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center"><Bot className="w-4 h-4 text-blue-400" /></div>
            <span className="text-sm font-bold text-white/70">ShipBot</span>
            <span className="text-[10px] text-white/30 ml-auto font-mono">Telegram</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-end"><div className="bg-blue-600/30 border border-blue-500/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]"><p className="text-sm text-white/80">Build me a SaaS dashboard with analytics, user management, and dark mode</p></div></div>
            <div className="flex justify-start"><div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]"><p className="text-sm text-white/60">Building your app. Here is your live link, it will update automatically once ready.<br /><br /><span className="text-blue-400 font-mono text-xs">https://saas-dashboard.vercel.app</span><br /><span className="text-blue-400 font-mono text-xs">https://github.com/Adarsh-code-3/saas-dashboard</span></p></div></div>
            <div className="flex justify-end"><div className="bg-blue-600/30 border border-blue-500/20 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]"><p className="text-sm text-white/80">Make the accent color purple and add a pricing page</p></div></div>
            <div className="flex justify-start"><div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]"><p className="text-sm text-white/60">Done. Changes are live. Same link.</p></div></div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

function SlideHowItWorks() {
  const steps = [
    { num: "01", title: "Describe", desc: "Tell ShipBot what you want in plain language via Telegram", icon: MessageSquare, color: "blue" },
    { num: "02", title: "Build", desc: "AI selects the best template, customizes design, features, and content", icon: Code, color: "violet" },
    { num: "03", title: "Deploy", desc: "Pushes to GitHub, deploys to Vercel. You get a live link in under 5 minutes", icon: Rocket, color: "cyan" },
    { num: "04", title: "Iterate", desc: "Want changes? Send another message. ShipBot updates the live app instantly", icon: ArrowRight, color: "emerald" },
  ]
  return (
    <div>
      <Badge><Rocket className="w-3 h-3" /> How It Works</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3.5rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Four Steps to Live
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {steps.map((step, i) => (
          <GlassCard key={step.num} className="p-5 relative overflow-hidden">
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 120}ms forwards` }}>
              <span className={`text-5xl font-extrabold text-${step.color}-500/10 absolute top-2 right-3`} style={{ fontFamily: "var(--font-display)" }}>{step.num}</span>
              <step.icon className={`w-6 h-6 text-${step.color}-400 mb-3`} />
              <h3 className="text-lg font-bold text-white/90 mb-1">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideTemplates() {
  const templates = [
    { name: "SaaS Platform", tags: ["Auth", "Billing", "Dashboard"], icon: Layers },
    { name: "E-Commerce", tags: ["Cart", "Products", "Checkout"], icon: Package },
    { name: "Landing Page", tags: ["Hero", "CTA", "Features"], icon: Monitor },
    { name: "Portfolio", tags: ["Projects", "3D", "Blog"], icon: Palette },
    { name: "AI Chatbot", tags: ["LLM", "Chat UI", "API"], icon: Bot },
    { name: "Admin Dashboard", tags: ["Tables", "Charts", "CRUD"], icon: BarChart3 },
    { name: "Social Platform", tags: ["Feed", "Profiles", "DMs"], icon: Users },
    { name: "Chat App", tags: ["Real-time", "Rooms", "Media"], icon: MessageSquare },
  ]
  return (
    <div>
      <Badge><Package className="w-3 h-3" /> Templates</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        20+ Production Templates
      </h2>
      <p className="mt-2 text-base text-white/40 max-w-xl">Not wireframes. Fully functional, responsive, dark-mode-ready Next.js applications with premium animations.</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {templates.map((t, i) => (
          <GlassCard key={t.name} className="p-4">
            <div style={{ opacity: 0, animation: `rise 0.5s ease-out ${i * 60}ms forwards` }}>
              <t.icon className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="text-sm font-bold text-white/80 mb-2">{t.name}</h3>
              <div className="flex flex-wrap gap-1">
                {t.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-white/[0.04] text-white/40">{tag}</span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/20 text-center font-mono">+ healthcare, banking, video-call, event-platform, multi-tenant, analytics, blog, and more</p>
    </div>
  )
}

function SlidePortfolio() {
  const projects = [
    { name: "GeoPulse Intelligence", desc: "7-page geopolitical intelligence platform with risk analytics, scenario modeling, and expert collaboration", tech: "Next.js / Tailwind / TypeScript", status: "Live" },
    { name: "Neo Todo", desc: "Neo-brutalist task management app with spring animations and local persistence", tech: "Next.js / Tailwind / TypeScript", status: "Live" },
    { name: "Daily Geopolitics", desc: "Real-time geopolitical briefing platform with ripple effects and source credibility tracking", tech: "Next.js / Tailwind / TypeScript", status: "Live" },
  ]
  return (
    <div>
      <Badge><Star className="w-3 h-3" /> Portfolio</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Apps Built by ShipBot
      </h2>
      <p className="mt-2 text-base text-white/40">Real apps, built from chat messages, deployed and live.</p>
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {projects.map((p, i) => (
          <GlassCard key={p.name} className="p-5">
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">{p.status}</span>
              </div>
              <h3 className="text-base font-bold text-white/90 mb-2">{p.name}</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-3">{p.desc}</p>
              <span className="text-[10px] font-mono text-white/20">{p.tech}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideTraction() {
  return (
    <div>
      <Badge><TrendingUp className="w-3 h-3" /> Traction</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Built, Shipped, Live
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { value: "20+", label: "Production Templates", sub: "Ready to customize" },
          { value: "<5", label: "Minutes to Deploy", sub: "From message to live" },
          { value: "100%", label: "Code Ownership", sub: "GitHub repo included" },
          { value: "0", label: "Vendor Lock-in", sub: "Own everything" },
        ].map((stat, i) => (
          <GlassCard key={stat.label} className="p-5 text-center" hover={false}>
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
              <AnimatedNumber value={stat.value} />
              <p className="text-sm font-semibold text-white/60 mt-2">{stat.label}</p>
              <p className="text-xs text-white/25 mt-1">{stat.sub}</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-3 mt-6">
        {[
          { label: "Auto GitHub Push", icon: GitBranch },
          { label: "Vercel Production Deploy", icon: Globe },
          { label: "Neon Postgres on Demand", icon: Database },
        ].map((item, i) => (
          <GlassCard key={item.label} className="p-4 flex items-center gap-3">
            <div style={{ opacity: 0, animation: `rise 0.5s ease-out ${(i + 4) * 80}ms forwards` }} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-white/60">{item.label}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideDifferentiator() {
  const comparisons = [
    { feature: "Time to live app", shipbot: "Under 5 min", others: "2-8 weeks" },
    { feature: "Cost", shipbot: "Free / Low", others: "$2K-15K+" },
    { feature: "Code ownership", shipbot: "100% yours", others: "Platform locked" },
    { feature: "Iteration speed", shipbot: "One message", others: "Days of back and forth" },
    { feature: "Technical skill needed", shipbot: "None", others: "Moderate to high" },
    { feature: "Deploy included", shipbot: "Yes, automatic", others: "Manual setup" },
  ]
  return (
    <div>
      <Badge><Shield className="w-3 h-3" /> Why ShipBot</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Nothing Else<br /><span className="text-white/40">Comes Close</span>
      </h2>
      <GlassCard className="mt-8 overflow-hidden" hover={false}>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="text-left py-3 px-5 text-xs font-bold uppercase tracking-widest text-white/30">Feature</th>
              <th className="text-center py-3 px-5 text-xs font-bold uppercase tracking-widest text-blue-400">ShipBot</th>
              <th className="text-center py-3 px-5 text-xs font-bold uppercase tracking-widest text-white/30">Others</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={row.feature} className="border-b border-white/[0.04]" style={{ opacity: 0, animation: `rise 0.4s ease-out ${i * 60}ms forwards` }}>
                <td className="py-3 px-5 text-white/50 font-medium">{row.feature}</td>
                <td className="py-3 px-5 text-center text-emerald-400 font-semibold">{row.shipbot}</td>
                <td className="py-3 px-5 text-center text-white/25">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </div>
  )
}

function SlideMarket() {
  return (
    <div>
      <Badge><BarChart3 className="w-3 h-3" /> Market Opportunity</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Massive, Growing Market
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {[
          { value: "$187B", label: "No-Code / Low-Code Market by 2030", growth: "28% CAGR" },
          { value: "$89B", label: "Web Development Services Annually", growth: "Ripe for disruption" },
          { value: "$40B+", label: "SMB Website Creation Market", growth: "Underserved segment" },
          { value: "#1", label: "Fastest Growing: AI Dev Tools", growth: "Explosive demand" },
        ].map((stat, i) => (
          <GlassCard key={stat.label} className="p-6">
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
              <AnimatedNumber value={stat.value} />
              <p className="text-sm font-semibold text-white/60 mt-2">{stat.label}</p>
              <p className="text-xs text-blue-400/60 mt-1 font-mono">{stat.growth}</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <div className="mt-6">
        <GlassCard className="p-5" hover={false}>
          <h3 className="text-sm font-bold text-white/60 mb-3">Target Users</h3>
          <div className="flex flex-wrap gap-2">
            {["Solo Founders", "Small Businesses", "Agencies", "Freelancers", "Creators", "Non-Technical Entrepreneurs", "Startups Validating Ideas", "Consultants"].map((user) => (
              <span key={user} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/[0.06] text-white/50">{user}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

function SlidePricing() {
  const tiers = [
    { name: "Starter", price: "$10", period: "per build", features: ["Single app build", "GitHub repo", "Vercel deploy", "1 round of changes"], highlighted: false },
    { name: "Pro", price: "$99", period: "per month", features: ["Unlimited builds", "Unlimited iterations", "Database provisioning", "Priority queue", "Custom domains"], highlighted: true },
    { name: "Agency", price: "Custom", period: "per month", features: ["White-label builds", "Client management", "API access", "Dedicated support", "SLA guarantee"], highlighted: false },
  ]
  return (
    <div>
      <Badge><DollarSign className="w-3 h-3" /> Business Model</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Simple Pricing
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {tiers.map((tier, i) => (
          <div key={tier.name} className={`rounded-2xl p-6 transition-all duration-300 ${
            tier.highlighted
              ? "bg-gradient-to-b from-blue-500/10 to-violet-500/10 border-2 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.1)]"
              : "bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15]"
          }`} style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
            {tier.highlighted && <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">Most Popular</span>}
            <h3 className="text-lg font-bold text-white/90">{tier.name}</h3>
            <div className="mt-2 mb-4">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>{tier.price}</span>
              <span className="text-sm text-white/30 ml-1">/{tier.period}</span>
            </div>
            <div className="space-y-2">
              {tier.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideTechStack() {
  const stack = [
    { name: "Claude Code", desc: "AI engine powering code generation and customization", icon: Bot },
    { name: "Next.js 16", desc: "React framework with App Router, SSR, and static generation", icon: Code },
    { name: "Tailwind CSS 4", desc: "Utility-first styling with custom design system per app", icon: Palette },
    { name: "Vercel", desc: "Automatic production deployments with edge network", icon: Globe },
    { name: "GitHub", desc: "Full source code ownership in public repositories", icon: GitBranch },
    { name: "Neon Postgres", desc: "Serverless database provisioned on demand", icon: Database },
    { name: "Telegram Bot API", desc: "Zero-friction interface, no app installs needed", icon: Send },
    { name: "TypeScript", desc: "Type-safe code across all generated applications", icon: Terminal },
  ]
  return (
    <div>
      <Badge><Terminal className="w-3 h-3" /> Architecture</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Built on Best-in-Class
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        {stack.map((s, i) => (
          <GlassCard key={s.name} className="p-4">
            <div style={{ opacity: 0, animation: `rise 0.5s ease-out ${i * 60}ms forwards` }}>
              <s.icon className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="text-sm font-bold text-white/80 mb-1">{s.name}</h3>
              <p className="text-[10px] text-white/30 leading-relaxed">{s.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideUSP() {
  const usps = [
    { title: "5-Minute Delivery", desc: "From description to live URL. No other tool matches this speed.", icon: Clock },
    { title: "100% Code Ownership", desc: "GitHub repo with clean, readable code. Fork it, extend it, own it forever.", icon: Shield },
    { title: "Zero Friction", desc: "No signups, no onboarding, no learning curve. Just a Telegram message.", icon: Zap },
    { title: "Production-Grade", desc: "Not prototypes. Responsive, dark mode, animated, SEO-ready applications.", icon: Star },
    { title: "Iterate via Chat", desc: "Send a message to update the live app. Changes deploy automatically.", icon: ArrowRight },
    { title: "Full Infrastructure", desc: "GitHub + Vercel + Postgres. Everything wired up and production-ready.", icon: Globe },
  ]
  return (
    <div>
      <Badge><Star className="w-3 h-3" /> Value Proposition</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Why ShipBot Wins
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {usps.map((usp, i) => (
          <GlassCard key={usp.title} className="p-5">
            <div style={{ opacity: 0, animation: `rise 0.5s ease-out ${i * 80}ms forwards` }}>
              <usp.icon className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-base font-bold text-white/90 mb-1">{usp.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{usp.desc}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

function SlideVision() {
  return (
    <div className="text-center">
      <Badge><Rocket className="w-3 h-3" /> Vision</Badge>
      <h2 className="mt-4 text-[clamp(1.75rem,5vw,4rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        The Fastest Way<br />
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">From Idea to Internet</span>
      </h2>
      <p className="mt-6 text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
        Every entrepreneur, creator, and business owner worldwide should be able to ship a professional web app
        by sending a single message. No code. No meetings. No invoices. Just describe it, and it exists.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/20">
          <Smartphone className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-semibold text-white/70">Open Telegram</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
          <MessageSquare className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold text-white/70">Describe Your App</span>
          <ArrowRight className="w-4 h-4 text-white/30" />
          <Globe className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold text-white/70">Live on the Internet</span>
        </div>
        <p className="text-xs text-white/20 font-mono mt-2">THE FUTURE OF APP DEVELOPMENT IS CONVERSATIONAL</p>
      </div>
    </div>
  )
}

function SlideContact() {
  return (
    <div className="text-center">
      <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">Let's Build</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Something</span>
      </h2>
      <div className="grid sm:grid-cols-3 gap-4 mt-10 max-w-xl mx-auto">
        {[
          { label: "Telegram", value: "@ShipBot", icon: Send },
          { label: "GitHub", value: "Adarsh-code-3", icon: GitBranch },
          { label: "Live Demo", value: "Try it now", icon: ExternalLink },
        ].map((item, i) => (
          <GlassCard key={item.label} className="p-5 text-center">
            <div style={{ opacity: 0, animation: `rise 0.6s ease-out ${i * 100}ms forwards` }}>
              <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-xs text-white/30 uppercase tracking-widest font-semibold mb-1">{item.label}</p>
              <p className="text-sm font-bold text-white/70">{item.value}</p>
            </div>
          </GlassCard>
        ))}
      </div>
      <p className="mt-10 text-xs text-white/15 font-mono">SHIPBOT / 2026</p>
    </div>
  )
}

// ===== MAIN COMPONENT =====

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const touchStartX = useRef(0)

  const goTo = useCallback((n: number) => {
    if (n >= 0 && n < TOTAL_SLIDES) setCurrentSlide(n)
  }, [])

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo])
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next() }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
      if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [next, prev])

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev() }
  }

  const slides = [
    <SlideHero key={0} />,
    <SlideProblem key={1} />,
    <SlideSolution key={2} />,
    <SlideHowItWorks key={3} />,
    <SlideTemplates key={4} />,
    <SlidePortfolio key={5} />,
    <SlideTraction key={6} />,
    <SlideDifferentiator key={7} />,
    <SlideMarket key={8} />,
    <SlidePricing key={9} />,
    <SlideTechStack key={10} />,
    <SlideUSP key={11} />,
    <SlideVision key={12} />,
  ]

  return (
    <div className="fixed inset-0 overflow-hidden select-none" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <BGEffects />
      <GrainOverlay />

      {/* Slides */}
      <div className="relative z-10 w-full h-full">
        {slides.map((slide, i) => (
          <SlideWrapper key={i} isActive={currentSlide === i} index={i}>
            {slide}
          </SlideWrapper>
        ))}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <button onClick={prev} disabled={currentSlide === 0}
          className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px] min-w-[44px]">
          <ChevronLeft className="w-5 h-5 text-white/60" />
        </button>
        <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-6 bg-blue-500" : "bg-white/20 hover:bg-white/40"
              }`} />
          ))}
        </div>
        <button onClick={next} disabled={currentSlide === TOTAL_SLIDES - 1}
          className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px] min-w-[44px]">
          <ChevronRight className="w-5 h-5 text-white/60" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="fixed top-5 right-6 z-50 flex items-center gap-3">
        <span className="text-xs font-mono text-white/20">{String(currentSlide + 1).padStart(2, "0")} / {TOTAL_SLIDES}</span>
        <button onClick={() => {
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen()
        }} className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-colors">
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 text-white/40" /> : <Maximize2 className="w-3.5 h-3.5 text-white/40" />}
        </button>
      </div>

      {/* Logo */}
      <div className="fixed top-5 left-6 z-50 flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-bold text-white/60 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>ShipBot</span>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-white/[0.04] z-50">
        <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / TOTAL_SLIDES) * 100}%` }} />
      </div>

      {/* Keyboard hint */}
      {currentSlide === 0 && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 text-[10px] text-white/15 font-mono" style={{ opacity: 0, animation: "rise 0.8s ease-out 1.5s forwards" }}>
          Use arrow keys, spacebar, or swipe to navigate / Press F for fullscreen
        </div>
      )}
    </div>
  )
}
