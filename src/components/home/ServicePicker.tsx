"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";
import { Workflow, Globe, BotMessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    id: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    pitch: "Stop doing repetitive admin. We build automations that handle bookings, follow-ups, and lead capture — so you focus on customers.",
    href: "/services/ai-automation",
    tag: "Save 20+ hrs/week",
  },
  {
    id: "website-builders",
    icon: Globe,
    title: "Website Builders",
    pitch: "Fast, mobile-first, SEO-ready websites built with modern tools and tuned for the businesses you actually want walking through your door.",
    href: "/services/website-builders",
    tag: "Launch in days",
  },
  {
    id: "chatbots",
    icon: BotMessageSquare,
    title: "Chatbots",
    pitch: "Smart, branded chatbots that handle bookings, FAQs, and lead qualification on your website, WhatsApp, or Instagram — even at 2am.",
    href: "/services/chatbots",
    tag: "24/7 availability",
  },
];

export default function ServicePicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < 0.33) setActiveIndex(0);
      else if (v < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const active = services[activeIndex];

  return (
    <section id="services" ref={containerRef} className="relative h-[300vh]">
      {/* Sticky frame */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/optimalisai.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/75" />
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(30,115,232,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10">
            {/* Section label */}
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">What we do</p>
              <h2 className="font-display font-bold text-section text-text-primary">
                Built to <span className="gradient-text">grow your business</span>
              </h2>
            </div>

            {/* Service tab bar */}
            <div className="flex items-center gap-2 p-1.5 bg-surface/80 backdrop-blur-md rounded-2xl border border-border/60">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      if (containerRef.current) {
                        const containerTop = containerRef.current.offsetTop;
                        const target = containerTop + (i / 3) * containerRef.current.offsetHeight + 50;
                        window.scrollTo({ top: target, behavior: "smooth" });
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeIndex === i
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

            {/* Card */}
            <div className="w-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="glow-card rounded-3xl p-8 sm:p-10 bg-surface/80 backdrop-blur-xl"
                  whileHover={prefersReducedMotion ? undefined : {
                    y: -4,
                    boxShadow: "0 0 60px rgba(34, 211, 238, 0.22)",
                  }}
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
                    activeIndex === i
                      ? "w-6 h-2 bg-brand-blue shadow-glow-blue"
                      : "w-2 h-2 bg-border hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>

            <p className="text-xs text-text-muted/40 tracking-widest uppercase">
              Scroll to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
