"use client"

import { useState, useEffect, useRef } from "react"
import {
  MessageSquare, Zap, Globe, Rocket, Clock, Code, Shield, TrendingUp,
  Users, BarChart3, Layers, ArrowRight, Send, CheckCircle, ExternalLink,
  Monitor, Database, Package, Palette, Bot, Terminal, Star, Target,
  DollarSign, ChevronDown, ChevronRight, Smartphone, Play, Sparkles,
  Lock, Cpu, Heart, Eye, GitBranch, ArrowUpRight, Menu, X, Check,
  CreditCard, Building2, User,
} from "lucide-react"

/* ================================ */
/*  UTILITY: Scroll reveal hook     */
/* ================================ */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ================================ */
/*  GLASS CARD                      */
/* ================================ */
function Glass({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) {
  return (
    <div className={`bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl ${hover ? "hover:border-blue-500/25 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]" : ""} transition-all duration-400 ${className}`}>
      {children}
    </div>
  )
}

/* ================================ */
/*  NAVIGATION                      */
/* ================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  const links = [
    { href: "#how", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#templates", label: "Templates" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "/pitch-deck", label: "Pitch Deck" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#030712]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>ShipBot</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.04]">{l.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://t.me/AdarshShipBot" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:bg-white/[0.06] transition-colors min-h-[44px] min-w-[44px]">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/[0.06] px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors">{l.label}</a>
          ))}
          <a href="https://t.me/AdarshShipBot" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold text-center">Get Started</a>
        </div>
      )}
    </nav>
  )
}

/* ================================ */
/*  HERO                            */
/* ================================ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-30%] left-[-15%] w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)", animation: "aurora 20s ease-in-out infinite" }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", animation: "aurora 25s ease-in-out infinite reverse" }} />
        <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", animation: "aurora 18s ease-in-out infinite 5s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div style={{ opacity: 0, animation: "fadeUp 0.8s ease-out 200ms forwards" }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <div className="relative w-2 h-2"><div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" /><div className="w-2 h-2 rounded-full bg-emerald-400" /></div>
            <span className="text-xs font-semibold text-blue-400">Live on Telegram</span>
            <span className="text-xs text-white/20">|</span>
            <span className="text-xs text-white/40">Building apps 24/7</span>
          </div>
        </div>

        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight" style={{ fontFamily: "var(--font-display)", opacity: 0, animation: "fadeUp 0.8s ease-out 350ms forwards" }}>
          <span className="text-white">Build Apps</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Through Chat</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed" style={{ opacity: 0, animation: "fadeUp 0.8s ease-out 500ms forwards" }}>
          Send a Telegram message describing your app. Get a live, production-grade website with GitHub repo and Vercel deployment. Under 5 minutes. Zero code required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10" style={{ opacity: 0, animation: "fadeUp 0.8s ease-out 650ms forwards" }}>
          <a href="https://t.me/AdarshShipBot" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-xl shadow-blue-500/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-1">
            Start Building Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white/70 font-semibold text-base hover:bg-white/[0.08] hover:text-white transition-all duration-300">
            <Play className="w-5 h-5" /> See How It Works
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs font-medium text-white/25" style={{ opacity: 0, animation: "fadeUp 0.8s ease-out 800ms forwards" }}>
          {["No credit card required", "Full code ownership", "Deploy in 5 minutes"].map((t) => (
            <span key={t} className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500/60" />{t}</span>
          ))}
        </div>

        {/* Chat Demo Preview */}
        <div className="mt-16 max-w-lg mx-auto" style={{ opacity: 0, animation: "fadeUp 0.8s ease-out 950ms forwards" }}>
          <Glass className="p-5 text-left" hover={false}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center"><Bot className="w-3.5 h-3.5 text-white" /></div>
              <span className="text-sm font-semibold text-white/70">ShipBot</span>
              <span className="flex items-center gap-1 ml-auto text-[10px] text-emerald-400/70"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Online</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-end"><div className="bg-blue-600/25 border border-blue-500/15 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]"><p className="text-white/75">Build me a SaaS analytics dashboard with dark mode</p></div></div>
              <div className="flex justify-start"><div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]"><p className="text-white/55">Building your app now. Here is your live link:<br /><span className="text-blue-400 font-mono text-xs mt-1 block">saas-analytics.vercel.app</span></p></div></div>
              <div className="flex justify-start"><div className="bg-white/[0.05] border border-white/[0.06] rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]"><p className="text-white/55">Your app is ready and live now.<br /><span className="text-emerald-400 text-xs mt-1 block flex items-center gap-1"><CheckCircle className="w-3 h-3" />Deployed to production</span></p></div></div>
            </div>
          </Glass>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15 animate-bounce" style={{ animationDuration: "2s" }}>
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}

/* ================================ */
/*  LOGOS / TRUST                    */
/* ================================ */
function TrustBar() {
  return (
    <section className="py-16 border-y border-white/[0.04]">
      <Reveal>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/20 mb-8">Powered by industry-leading infrastructure</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-white/15">
            {[
              { name: "Next.js", icon: Code },
              { name: "Vercel", icon: Globe },
              { name: "GitHub", icon: GitBranch },
              { name: "Tailwind CSS", icon: Palette },
              { name: "TypeScript", icon: Terminal },
              { name: "Neon Postgres", icon: Database },
            ].map((b) => (
              <div key={b.name} className="flex items-center gap-2 text-sm font-semibold hover:text-white/30 transition-colors">
                <b.icon className="w-5 h-5" />{b.name}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ================================ */
/*  HOW IT WORKS                    */
/* ================================ */
function HowItWorks() {
  const steps = [
    { num: "01", title: "Describe Your App", desc: "Send a Telegram message in plain English. No technical jargon needed. Just say what you want.", icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
    { num: "02", title: "AI Builds It", desc: "ShipBot selects the best template, customizes the design, adds your features, and writes production code.", icon: Sparkles, color: "from-violet-500 to-purple-500" },
    { num: "03", title: "Auto-Deployed Live", desc: "Code pushed to GitHub, deployed on Vercel. You get a live URL and full source code ownership instantly.", icon: Rocket, color: "from-cyan-500 to-emerald-500" },
    { num: "04", title: "Iterate Instantly", desc: "Want changes? Send another message. ShipBot updates the live app. No waiting, no back and forth.", icon: ArrowRight, color: "from-amber-500 to-orange-500" },
  ]

  return (
    <section id="how" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
              <Zap className="w-3 h-3" />How It Works
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              From Message to Live App<br /><span className="text-white/35">In Four Simple Steps</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
              <Glass className="p-6 h-full relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} opacity-[0.04] rounded-bl-[40px] group-hover:opacity-[0.08] transition-opacity duration-500`} />
                <span className="text-5xl font-extrabold text-white/[0.03] absolute top-2 right-3" style={{ fontFamily: "var(--font-display)" }}>{step.num}</span>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white/90 mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </Glass>
            </Reveal>
          ))}
        </div>

        {/* Connection line */}
        <div className="hidden lg:flex items-center justify-center mt-[-80px] mb-[-30px] relative z-10 pointer-events-none">
          <div className="w-[70%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ================================ */
/*  FEATURES BENTO GRID             */
/* ================================ */
function Features() {
  const features = [
    { title: "20+ Production Templates", desc: "SaaS, e-commerce, dashboards, portfolios, AI chatbots, social apps, and more. Not wireframes. Real, functional applications.", icon: Package, span: "md:col-span-2" },
    { title: "Auto GitHub Push", desc: "Every app gets a public GitHub repo. Clean, readable code you can fork, extend, and own forever.", icon: GitBranch, span: "" },
    { title: "Vercel Production Deploy", desc: "Automatic deployment to Vercel's edge network. HTTPS, CDN, and instant global availability.", icon: Globe, span: "" },
    { title: "Database on Demand", desc: "Need persistent data? ShipBot provisions a Neon Postgres database automatically.", icon: Database, span: "" },
    { title: "Dark Mode Built-In", desc: "Every app ships with a polished dark mode. Toggle included, preferences saved.", icon: Monitor, span: "" },
    { title: "Responsive Design", desc: "Mobile-first. Every app looks stunning on phones, tablets, and desktops. No extra work needed.", icon: Smartphone, span: "md:col-span-2" },
    { title: "Premium Animations", desc: "Spring physics, stagger reveals, scroll triggers, micro-interactions. Your apps feel alive.", icon: Sparkles, span: "" },
    { title: "Zero Vendor Lock-in", desc: "Own everything. GitHub repo, Vercel project, database credentials. Walk away whenever you want.", icon: Lock, span: "" },
  ]

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
              <Layers className="w-3 h-3" />Features
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Everything You Need<br /><span className="text-white/35">Nothing You Do Not</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className={f.span}>
              <Glass className="p-6 h-full">
                <f.icon className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-base font-bold text-white/90 mb-2">{f.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================ */
/*  TEMPLATES SHOWCASE              */
/* ================================ */
function Templates() {
  const templates = [
    { name: "SaaS Platform", desc: "Auth, billing, dashboard, blog", icon: Layers, color: "from-blue-500 to-cyan-500" },
    { name: "E-Commerce", desc: "Products, cart, checkout flow", icon: Package, color: "from-emerald-500 to-teal-500" },
    { name: "Admin Dashboard", desc: "Tables, charts, CRUD, analytics", icon: BarChart3, color: "from-violet-500 to-purple-500" },
    { name: "AI Chatbot", desc: "LLM interface, chat UI, streaming", icon: Bot, color: "from-pink-500 to-rose-500" },
    { name: "Landing Page", desc: "Hero, features, CTA, testimonials", icon: Monitor, color: "from-amber-500 to-orange-500" },
    { name: "Portfolio", desc: "Projects, about, blog, contact", icon: Palette, color: "from-cyan-500 to-blue-500" },
    { name: "Social Media", desc: "Feed, profiles, DMs, following", icon: Users, color: "from-rose-500 to-pink-500" },
    { name: "Chat App", desc: "Real-time rooms, media sharing", icon: MessageSquare, color: "from-indigo-500 to-violet-500" },
    { name: "Blog Platform", desc: "Articles, tags, search, MDX", icon: Terminal, color: "from-teal-500 to-emerald-500" },
    { name: "Analytics", desc: "Charts, metrics, real-time data", icon: TrendingUp, color: "from-orange-500 to-red-500" },
    { name: "Healthcare", desc: "Appointments, patient portal", icon: Heart, color: "from-red-500 to-rose-500" },
    { name: "Banking", desc: "Transactions, wallet, transfers", icon: CreditCard, color: "from-slate-500 to-zinc-500" },
  ]

  return (
    <section id="templates" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Package className="w-3 h-3" />Templates
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              20+ Ready-to-Ship Templates
            </h2>
            <p className="mt-3 text-base text-white/35 max-w-xl mx-auto">Production-grade Next.js applications. Not mockups. Each one is responsive, accessible, and dark-mode ready.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {templates.map((t, i) => (
            <Reveal key={t.name} delay={i * 50}>
              <Glass className="p-4 sm:p-5 group cursor-default">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-3 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <t.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white/80 mb-1">{t.name}</h3>
                <p className="text-xs text-white/30">{t.desc}</p>
              </Glass>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-xs text-white/15 mt-6 font-mono">+ event-platform, video-call, multi-tenant, enterprise-starter, and more</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================ */
/*  STATS                           */
/* ================================ */
function Stats() {
  const stats = [
    { value: "<5 min", label: "Average Build Time", icon: Clock },
    { value: "20+", label: "Production Templates", icon: Package },
    { value: "100%", label: "Code Ownership", icon: Shield },
    { value: "0", label: "Vendor Lock-in", icon: Lock },
  ]

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center py-8">
                <s.icon className="w-6 h-6 text-blue-400/50 mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>{s.value}</div>
                <p className="text-sm text-white/35 font-medium mt-2">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================ */
/*  COMPARISON                      */
/* ================================ */
function Comparison() {
  const rows = [
    { feature: "Time to live app", shipbot: "Under 5 min", others: "2 to 8 weeks" },
    { feature: "Cost to start", shipbot: "Free", others: "$2K to $15K+" },
    { feature: "Code ownership", shipbot: "100% yours on GitHub", others: "Platform locked" },
    { feature: "Iteration speed", shipbot: "One message", others: "Days of meetings" },
    { feature: "Technical skill needed", shipbot: "None", others: "Moderate to expert" },
    { feature: "Deployment included", shipbot: "Automatic (Vercel)", others: "Manual setup" },
    { feature: "Database provisioning", shipbot: "On demand", others: "DIY configuration" },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              <Target className="w-3 h-3" />Comparison
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              ShipBot vs Everything Else
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Glass className="overflow-hidden" hover={false}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-4 px-5 text-xs font-bold uppercase tracking-widest text-white/25">Feature</th>
                  <th className="text-center py-4 px-5 text-xs font-bold uppercase tracking-widest text-blue-400">ShipBot</th>
                  <th className="text-center py-4 px-5 text-xs font-bold uppercase tracking-widest text-white/25">Traditional</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/[0.03]">
                    <td className="py-3.5 px-5 text-white/45 font-medium">{row.feature}</td>
                    <td className="py-3.5 px-5 text-center"><span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold"><CheckCircle className="w-3.5 h-3.5" />{row.shipbot}</span></td>
                    <td className="py-3.5 px-5 text-center text-white/20">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Glass>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================ */
/*  PRICING                         */
/* ================================ */
function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "Perfect for trying ShipBot and building your first app",
      features: ["1 app build per month", "All 20+ templates", "GitHub repo included", "Vercel deployment", "Dark mode & responsive", "Community support"],
      cta: "Start Free",
      href: "https://t.me/AdarshShipBot",
      highlighted: false,
      icon: User,
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      desc: "For founders and creators who ship fast and iterate often",
      features: ["Unlimited app builds", "Unlimited iterations", "Database provisioning", "Priority build queue", "Custom domain support", "Email support", "All future templates"],
      cta: "Go Pro",
      href: "https://t.me/AdarshShipBot?start=pro",
      highlighted: true,
      icon: Rocket,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      desc: "For agencies and teams building at scale",
      features: ["Everything in Pro", "White-label builds", "Client management portal", "API access", "Dedicated support", "SLA guarantee", "Custom templates", "Team collaboration"],
      cta: "Contact Us",
      href: "https://t.me/adwait_02",
      highlighted: false,
      icon: Building2,
    },
  ]

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              <DollarSign className="w-3 h-3" />Pricing
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Start Free. Scale When Ready.
            </h2>
            <p className="mt-3 text-base text-white/35 max-w-lg mx-auto">No credit card required. Build your first app in minutes.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div className={`rounded-3xl p-7 h-full flex flex-col transition-all duration-500 ${
                tier.highlighted
                  ? "bg-gradient-to-b from-blue-500/[0.08] to-violet-500/[0.05] border-2 border-blue-500/25 shadow-[0_0_60px_rgba(59,130,246,0.1)] scale-[1.02]"
                  : "bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12]"
              }`}>
                {tier.highlighted && (
                  <span className="self-start text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4">Most Popular</span>
                )}
                <div className={`w-10 h-10 rounded-xl ${tier.highlighted ? "bg-gradient-to-br from-blue-500 to-violet-500" : "bg-white/[0.06]"} flex items-center justify-center mb-4`}>
                  <tier.icon className={`w-5 h-5 ${tier.highlighted ? "text-white" : "text-white/40"}`} />
                </div>
                <h3 className="text-xl font-bold text-white/90">{tier.name}</h3>
                <div className="mt-2 mb-2">
                  <span className="text-4xl font-extrabold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent" style={{ fontFamily: "var(--font-display)" }}>{tier.price}</span>
                  <span className="text-sm text-white/25 ml-1">/{tier.period}</span>
                </div>
                <p className="text-sm text-white/30 mb-6">{tier.desc}</p>
                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-white/50">
                      <Check className="w-4 h-4 text-emerald-400/70 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <a href={tier.href} target="_blank" rel="noopener noreferrer" className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 min-h-[48px] flex items-center justify-center text-center ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                    : "bg-white/[0.06] text-white/60 hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
                }`}>
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================ */
/*  FAQ                             */
/* ================================ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqs = [
    { q: "How does ShipBot actually work?", a: "You send a message to our Telegram bot describing the app you want. ShipBot's AI selects the best template from 20+ options, customizes the design, features, and content to match your description, pushes the code to a GitHub repository, and deploys it live on Vercel. The entire process takes under 5 minutes." },
    { q: "Do I own the code?", a: "Yes, 100%. Every app gets its own public GitHub repository. You own the code completely. Fork it, modify it, hire developers to extend it, or move it to any hosting provider. There is zero vendor lock-in." },
    { q: "What tech stack do the apps use?", a: "All apps are built with Next.js (React), Tailwind CSS, and TypeScript. They are deployed on Vercel and optionally use Neon Postgres for databases. This is the same modern stack used by companies like Vercel, Linear, and Stripe." },
    { q: "Can I request changes after the app is built?", a: "Absolutely. Just send another message describing what you want changed. ShipBot will update the live app. On the Free plan you get 1 round of changes. Pro users get unlimited iterations." },
    { q: "What kind of apps can ShipBot build?", a: "SaaS platforms, e-commerce stores, dashboards, portfolios, landing pages, blogs, AI chatbots, social media apps, healthcare portals, banking interfaces, admin panels, and more. If it is a web application, ShipBot can likely build it." },
    { q: "Is there a free plan?", a: "Yes. The Free plan lets you build 1 app per month with full deployment and GitHub repo. No credit card required. Upgrade to Pro when you need unlimited builds and iterations." },
    { q: "How is this different from no-code tools like Webflow?", a: "No-code tools require you to learn their interface and design from scratch. ShipBot requires zero learning, you just describe what you want. You also get real code (not platform-locked output), proper deployments, and full ownership. Speed is incomparable: 5 minutes vs hours or days." },
  ]

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/[0.06] text-white/40 border border-white/[0.08] mb-4">
              <MessageSquare className="w-3 h-3" />FAQ
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Common Questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 40}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left">
                <Glass className={`p-5 ${open === i ? "border-blue-500/20 bg-white/[0.04]" : ""}`} hover={false}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-semibold text-white/80">{faq.q}</h3>
                    <ChevronDown className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-400 ${open === i ? "max-h-[300px] mt-3" : "max-h-0"}`}>
                    <p className="text-sm text-white/35 leading-relaxed">{faq.a}</p>
                  </div>
                </Glass>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================================ */
/*  FINAL CTA                       */
/* ================================ */
function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[150px] opacity-15" style={{ background: "radial-gradient(ellipse, #3B82F6, #8B5CF6, transparent)" }} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Ship?
          </h2>
          <p className="mt-4 text-lg text-white/35 max-w-xl mx-auto">
            Your next app is one message away. Start building for free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="https://t.me/AdarshShipBot" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-xl shadow-blue-500/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-1">
              Start Building Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/pitch-deck" className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white/70 font-semibold text-base hover:bg-white/[0.08] hover:text-white transition-all duration-300">
              View Pitch Deck <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/15 font-mono">DESCRIBE IT. SHIP IT. OWN IT.</p>
        </Reveal>
      </div>
    </section>
  )
}

/* ================================ */
/*  FOOTER                          */
/* ================================ */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-white/60 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>ShipBot</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/20">
            <a href="#how" className="hover:text-white/40 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-white/40 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white/40 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white/40 transition-colors">FAQ</a>
          </div>
          <p className="text-xs text-white/10">2026 ShipBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/* ================================ */
/*  MAIN PAGE                       */
/* ================================ */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Templates />
      <Stats />
      <Comparison />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
