"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronDown, Workflow, Globe, BotMessageSquare } from "lucide-react";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

// ─── Service data ───────────────────────────────────────────────
const services = [
  {
    id: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    pitch:
      "Stop doing repetitive admin. We build automations that handle bookings, follow-ups, and lead capture — so you focus on customers.",
    href: "/services/ai-automation",
    tag: "Save 20+ hrs/week",
  },
  {
    id: "website-builders",
    icon: Globe,
    title: "Website Builders",
    pitch:
      "Fast, mobile-first, SEO-ready websites built with modern tools and tuned for the businesses you actually want walking through your door.",
    href: "/services/website-builders",
    tag: "Launch in days",
  },
  {
    id: "chatbots",
    icon: BotMessageSquare,
    title: "Chatbots",
    pitch:
      "Smart, branded chatbots that handle bookings, FAQs, and lead qualification on your website, WhatsApp, or Instagram — even at 2am.",
    href: "/services/chatbots",
    tag: "24/7 availability",
  },
];

// ─── Component ──────────────────────────────────────────────────
// Total height: 400vh  (100vh hero + 300vh service picker × 3 cards)
// Sticky inner frame is h-screen throughout.
// Scroll phases (scrollYProgress 0→1 maps to 0→400vh):
//   0.00 – 0.18  hero fully visible
//   0.18 – 0.25  hero fading out, service picker fading in
//   0.25 – 0.50  service card 0 (AI Automation)
//   0.50 – 0.75  service card 1 (Website Builders)
//   0.75 – 1.00  service card 2 (Chatbots)

export default function HeroAndServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [activeService, setActiveService] = useState(0);
  const [showServices, setShowServices] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero opacity: 1 from 0→0.18, fades to 0 by 0.25
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.25], [1, 1, 0]);
  // Service opacity: 0 until 0.15, fades in to 1 by 0.22 (completes before AI Automation phase at 0.25)
  const serviceOpacity = useTransform(scrollYProgress, [0.15, 0.22], [0, 1]);
  // Overlay: lighter in hero, darker in service picker
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [0.6, 0.78]);

  // Track active service card and whether to show service picker
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setShowServices(v > 0.15);
      if (v < 0.50) setActiveService(0);
      else if (v < 0.75) setActiveService(1);
      else setActiveService(2);
    });
    return unsub;
  }, [scrollYProgress]);

  const handleBookCall = () => {
    window.open("https://calendly.com/vad-optimalis/optimalis-ai-calendar", "_blank");
  };

  const handleExploreServices = () => {
    if (containerRef.current) {
      // Scroll to the service picker phase (25% into 400vh container)
      const top = containerRef.current.offsetTop + window.innerHeight * 1.1;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const active = services[activeService];

  return (
    <section id="hero-services" ref={containerRef} className="relative h-[400vh]">
      {/* ── Sticky frame ── */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Single shared video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/optimalisai.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/og-image.png"
          aria-hidden="true"
        />

        {/* Dynamic dark overlay (transitions hero→service) */}
        <motion.div
          className="absolute inset-0 bg-background"
          style={{ opacity: overlayOpacity }}
        />

        {/* Hero gradient overlay (top-to-bottom, fades with hero) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/90"
          style={{ opacity: heroOpacity }}
        />

        {/* Particles (hero phase only) */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: heroOpacity }}
          >
            <ParticleBackground />
          </motion.div>
        )}

        {/* Radial glow (service phase) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: serviceOpacity }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(30,115,232,0.10) 0%, transparent 70%)",
            }}
          />
        </motion.div>

        {/* ── HERO CONTENT ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: heroOpacity, pointerEvents: showServices ? "none" : "auto" }}
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-sm text-brand-cyan font-medium mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                Norwich-based AI agency for local businesses
              </div>
            </motion.div>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-hero text-text-primary text-balance mb-6"
            >
              Your business,{" "}
              <span className="gradient-text">optimised by AI.</span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10 text-balance"
            >
              We build AI automations, smart websites, and chatbots that help Norwich
              businesses win back hours and convert more customers.
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={handleBookCall}
                className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-base shadow-glow-blue hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Book a Free Discovery Call
                <ArrowRight size={16} />
              </button>
              <button
                onClick={handleExploreServices}
                className="flex items-center gap-2 px-7 py-4 rounded-2xl border border-border hover:border-brand-blue/50 text-text-muted hover:text-text-primary font-semibold text-base transition-all duration-200 hover:bg-surface/50 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          {!prefersReducedMotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-xs text-text-muted/50 tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown size={18} className="text-text-muted/40" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* ── SERVICE PICKER CONTENT ── */}
        <motion.div
          id="services"
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: serviceOpacity, pointerEvents: showServices ? "auto" : "none" }}
        >
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-10">
              {/* Label */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
                  What we do
                </p>
                <h2 className="font-display font-bold text-section text-text-primary">
                  Built to <span className="gradient-text">grow your business</span>
                </h2>
              </div>

              {/* Tab bar */}
              <div className="flex items-center gap-2 p-1.5 bg-surface/80 backdrop-blur-md rounded-2xl border border-border/60">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        if (containerRef.current) {
                          // Scroll to the corresponding service phase
                          const containerTop = containerRef.current.offsetTop;
                          const sectionHeight = containerRef.current.offsetHeight; // 400vh
                          // Service phases start at 25% (100vh into the 400vh)
                          const serviceStart = sectionHeight * 0.25;
                          const cardHeight = sectionHeight * 0.25; // each card = 25%
                          const target = containerTop + serviceStart + i * cardHeight + 50;
                          window.scrollTo({ top: target, behavior: "smooth" });
                        }
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeService === i
                          ? "bg-brand-blue text-white shadow-glow-blue"
                          : "text-text-muted hover:text-text-primary hover:bg-surface-2"
                      }`}
                    >
                      <Icon size={14} />
                      <span className="hidden sm:inline">{s.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active card */}
              <div className="w-full max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="glow-card rounded-3xl p-8 sm:p-10 bg-surface/80 backdrop-blur-xl"
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -4, boxShadow: "0 0 60px rgba(34,211,238,0.22)" }
                    }
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-glow-blue">
                        {(() => {
                          const Icon = active.icon;
                          return <Icon size={24} className="text-white" />;
                        })()}
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-medium mb-2">
                          {active.tag}
                        </div>
                        <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
                          {active.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-text-muted leading-relaxed text-base sm:text-lg mb-8">
                      {active.pitch}
                    </p>

                    <Link
                      href={active.href}
                      className="inline-flex items-center gap-2 text-brand-cyan font-semibold hover:gap-3 transition-all duration-200 group"
                    >
                      Find out more
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-3">
                {services.map((s, i) => (
                  <div
                    key={s.id}
                    className={`rounded-full transition-all duration-300 ${
                      activeService === i
                        ? "w-6 h-2 bg-brand-blue shadow-glow-blue"
                        : "w-2 h-2 bg-border"
                    }`}
                  />
                ))}
              </div>

              <p className="text-xs text-text-muted/40 tracking-widest uppercase">
                Keep scrolling
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
