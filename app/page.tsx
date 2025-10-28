"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Lenis from "lenis"
import { Smartphone, QrCode, Zap, Palette, Globe, BarChart3, Search } from "lucide-react"
import { GlassCard } from '@developer-hub/liquid-glass'
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react"
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>

// ──────────────────────────────────────────────────────────────
// SINGLE GLOBAL BACKGROUND IMAGE (change this to your preferred image)
const GLOBAL_BG = "/images/bg1.jpg"
// ──────────────────────────────────────────────────────────────

// GLASSY SEARCH BAR
function GlassySearchBar() {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchValue)
  }

  return (
    <div className="w-full mx-auto">
      <GlassCard
        displacementScale={250}
        blurAmount={0.02}
        shadowMode={true}
        cornerRadius={48}
        padding="1px"
        className="justify-center w-full"
      >
        <form onSubmit={handleSearch} className="flex items-center gap-6">
          <div className="pl-6">
            <Search className="w-6 h-6 text-white" />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search restaurants, menus, dishes..."
            className="flex-1 bg-transparent text-white text-lg placeholder-white/60 outline-none py-2 pr-4 font-medium"
            aria-label="Search restaurants, menus, and dishes"
          />
          <button
            type="submit"
            className="px-10 py-4 bg-white/30 text-white rounded-full font-medium hover:bg-white/40 transition-all duration-300 disabled:opacity-50 backdrop-blur-md"
          >
            Search
          </button>
        </form>
      </GlassCard>
    </div>
  )
}

// EMAIL SUBSCRIPTION
function EmailSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto px-4">
        <GlassCard
          shadowMode={true}
          cornerRadius={24}
          blurAmount={0.02}
          displacementScale={220}
          padding="40px"
          className="text-center border-0"
        >
          <div className="text-6xl mb-4">Checkmark</div>
          <h3 className="text-3xl font-bold text-white mb-3">You&apos;re on the list!</h3>
          <p className="text-white/80 text-lg">We&apos;ll notify you when MenuAura launches.</p>
        </GlassCard>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-full mx-auto px-4">
      <GlassCard
        shadowMode={true}
        cornerRadius={999}
        blurAmount={0.02}
        displacementScale={220}
        padding="2px"
        className="border-0 w-full"
      >
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/60 outline-none text-base font-medium"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-4 bg-white/30 text-white rounded-full font-medium hover:bg-white/40 transition-all duration-300 disabled:opacity-50 backdrop-blur-md"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Joining...
              </span>
            ) : (
              "Get Early Access"
            )}
          </button>
        </div>
      </GlassCard>
    </form>
  )
}

// GLOBAL BACKGROUND COMPONENT
function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: `url('${GLOBAL_BG}')` }}
    />
  )
}

// MAIN PAGE CONTENT
function PageContent() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const calculateTimeLeft = () => {
      const difference = +launchDate - +new Date()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const features = [
    { icon: QrCode, title: "QR Code Menus", desc: "Contactless ordering with instant menu updates" },
    { icon: Smartphone, title: "Mobile Optimized", desc: "Perfect experience on every device" },
    { icon: Zap, title: "Lightning Fast", desc: "Menus load in under 1 second" },
    { icon: Palette, title: "Custom Branding", desc: "Match your restaurant's unique style" },
    { icon: Globe, title: "Multi-Language", desc: "Serve international customers effortlessly" },
    { icon: BarChart3, title: "Analytics Dashboard", desc: "Track popular items and trends" },
  ]

  return (
    <div className="relative min-h-screen bg-black/35 text-white overflow-x-hidden">
      {/* GLOBAL BACKGROUND */}
      <GlobalBackground />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl relative z-10 text-center space-y-16 w-full">
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img
                src="/images/MenuAuralogo.png"
                alt="MenuAura Logo"
                className="h-32 sm:h-40 lg:h-48 w-auto drop-shadow-2xl"
              />
            </div>
            <p className="text-2xl sm:text-3xl text-white/90 drop-shadow-lg max-w-4xl mx-auto font-light leading-relaxed px-4">
              Transform your restaurant experience with smart, beautiful digital menus
            </p>
          </div>

          <div className="w-full flex justify-center">
            <GlassySearchBar />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">Launching Soon</h2>
            <div className="flex gap-6 justify-center flex-wrap px-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label}>
                  <GlassCard
                    shadowMode={true}
                    cornerRadius={20}
                    blurAmount={0.02}
                    displacementScale={220}
                    padding="10px 14px"
                    className="min-w-[130px] border-0"
                  >
                    <div className="text-5xl font-bold text-white mb-2">
                      {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-widest">
                      {unit.label}
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl relative z-10 w-full">
          <div className="text-center mb-20 px-4">
            <h2 className="text-6xl sm:text-7xl font-black mb-6 text-white drop-shadow-2xl">Why MenuAura?</h2>
            <p className="text-xl sm:text-2xl text-white/80 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              Everything you need to revolutionize your restaurant's dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {features.map((feature) => (
              <div key={feature.title}>
                <GlassCard
                  shadowMode={true}
                  cornerRadius={20}
                  blurAmount={0.02}
                  displacementScale={300}
                  padding="20px"
                  className="h-full border-0"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center  backdrop-blur-sm">
                    <feature.icon className="text-white w-7 h-7"  />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-6xl relative z-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
            {[
              { number: "10K+", label: "Restaurants" },
              { number: "1M+", label: "Scans Monthly" },
              { number: "99%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <GlassCard
                  shadowMode={true}
                  cornerRadius={20}
                  blurAmount={0.02}
                  displacementScale={200}
                  padding="32px"
                  className="h-full border-0"
                >
                  <div className="text-6xl font-black text-white mb-3 drop-shadow-lg">{stat.number}</div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{stat.label}</div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 sm:px-8 lg:px-12">
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-10 w-full px-4">
          <h2 className="text-5xl sm:text-6xl font-black text-white drop-shadow-lg leading-tight">
            Ready to Transform Your Menu?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 drop-shadow">Join thousands of restaurants going digital</p>
          <EmailSubscription />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 sm:px-8 lg:px-12 bg-black/30 backdrop-blur-xl text-white border-t border-white/10">
  <div className="container mx-auto max-w-7xl w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
      
      {/* Brand & Tagline */}
      <div className="space-y-3">
        <h3 className="text-4xl font-black">MenuAura</h3>
        <p className="text-lg text-white/70">Digital Menu Revolution</p>
        <p className="text-sm text-white/50">© 2025 MenuAura. All rights reserved.</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3">
        <h4 className="text-xl font-bold text-white">Contact Us</h4>
        <div className="space-y-2 text-sm text-white/70">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@menuaura.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (555) 123-4567
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path  strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            San Francisco, CA
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-center  justify-center space-y-4">
        <h4 className="text-xl font-bold text-white">Follow Us</h4>
        <div className="flex gap-4">
          {[
            { Icon: Twitter, label: "Twitter", href: "https://twitter.com/menuaura" },
            { Icon: Instagram, label: "Instagram", href: "https://instagram.com/menuaura" },
            { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/menuaura" },
            { Icon: Facebook, label: "Facebook", href: "https://facebook.com/menuaura" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default function Home() {
  return (
    <ParallaxProvider>
      <PageContent />
    </ParallaxProvider>
  )
}