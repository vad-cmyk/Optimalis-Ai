"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronDown, Workflow, Globe, BotMessageSquare } from "lucide-react";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

const services = [
  {
    id: "ai-automation",
    icon: Workflow,
    title: "AI Automation",
    pitch:
      "Stop doing repetitive admin. We build automations that handle bookings, follow-ups, and lead capture — so you focus on customers.",
    href: "/services/ai-automation",
    tag: "Save 20+ hrs/week",
    number: "01",
  },
  {
    id: "website-builders",
    icon: Globe,
    title: "Website Builders",
    pitch:
      "Fast, mobile-first, SEO-ready websites built with modern tools and tuned for the businesses you actually want walking through your door.",
    href: "/services/website-builders",
    tag: "Launch in days",
    number: "02",
  },
  {
    id: "chatbots",
    icon: BotMessageSquare,
    title: "Chatbots",
    pitch:
      "Smart, branded chatbots that handle bookings, FAQs, and lead qualification on your website, WhatsApp, or Instagram — even at 2am.",
    href: "/services/chatbots",
    tag: "24/7 availability",
    number: "03",
  },
];

export default function HeroAndServices() {
  const prefersReducedMotion = useReducedMotion();

  const handleBookCall = () => {
    window.open("https://calendly.com/vad-optimalis/optimalis-ai-calendar", "_blank");
  };

  const handleExploreServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
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

        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />

        {!prefersReducedMotion && (
          <div className="absolute inset-0 pointer-events-none">
            <ParticleBackground />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="section-padding bg-background relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,115,232,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
              What we do
            </p>
            <h2 className="font-display font-bold text-section text-text-primary">
              Built to <span className="gradient-text">grow your business</span>
            </h2>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -6, boxShadow: "0 0 60px rgba(34,211,238,0.18)" }
                  }
                  className="relative flex flex-col rounded-3xl overflow-hidden cursor-default"
                  style={{
                    background: "rgba(18,18,26,0.9)",
                    border: "1px solid rgba(30,115,232,0.22)",
                    boxShadow: "0 0 40px rgba(30,115,232,0.06)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-[3px] w-full shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #1E73E8, #22D3EE)",
                    }}
                  />

                  <div className="flex flex-col flex-1 p-7 sm:p-8">
                    {/* Number + Icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          background: "linear-gradient(135deg, #1E73E8 0%, #22D3EE 100%)",
                          boxShadow: "0 0 24px rgba(30,115,232,0.4)",
                        }}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <span
                        className="text-4xl font-bold tabular-nums leading-none"
                        style={{ color: "rgba(30,115,232,0.18)" }}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Tag + title */}
                    <div className="mb-4">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3"
                        style={{
                          background: "rgba(30,115,232,0.12)",
                          border: "1px solid rgba(30,115,232,0.3)",
                          color: "#22D3EE",
                        }}
                      >
                        {service.tag}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Pitch */}
                    <p
                      className="text-sm sm:text-base leading-relaxed flex-1 mb-7"
                      style={{ color: "rgba(180,180,205,0.85)" }}
                    >
                      {service.pitch}
                    </p>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold group w-fit"
                      style={{ color: "#22D3EE" }}
                    >
                      Find out more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
