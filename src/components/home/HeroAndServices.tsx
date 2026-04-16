"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
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
      "Fast, mobile-first, SEO-ready websites built in days and tuned for the customers you want.",
    href: "/services/website-builders",
    tag: "Launch in days",
    number: "02",
  },
  {
    id: "chatbots",
    icon: BotMessageSquare,
    title: "Chatbots",
    pitch:
      "Smart chatbots on your website, WhatsApp, or Instagram — handling bookings and leads even at 2am.",
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
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/optimalisai.mp4"
          autoPlay loop muted playsInline
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

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section id="services" className="section-padding bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(30,115,232,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
              What we do
            </p>
            <h2 className="font-display font-bold text-section text-text-primary">
              Built to <span className="gradient-text">grow your business</span>
            </h2>
          </motion.div>

          {/* ── Mobile: 3 stacked cards ── */}
          <div className="flex flex-col gap-5 md:hidden">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(18,18,26,0.9)",
                    border: "1px solid rgba(30,115,232,0.22)",
                  }}
                >
                  <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#1E73E8,#22D3EE)" }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                          style={{ background: "linear-gradient(135deg,#1E73E8,#22D3EE)", boxShadow: "0 0 20px rgba(30,115,232,0.35)" }}
                        >
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#22D3EE" }}>{service.tag}</span>
                          <h3 className="font-display font-bold text-xl text-white leading-tight">{service.title}</h3>
                        </div>
                      </div>
                      <span className="text-3xl font-bold tabular-nums shrink-0 ml-2" style={{ color: "rgba(30,115,232,0.18)" }}>{service.number}</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(180,180,200,0.85)" }}>{service.pitch}</p>
                    <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: "#22D3EE" }}>
                      Find out more
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Desktop: bento grid ── */}
          {/* Layout:
               [  AI Automation (large, left)  ] [ Website Builders (top-right)  ]
               [  AI Automation (large, left)  ] [ Chatbots (bottom-right)       ]
          */}
          <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-5 h-[680px]">

            {/* AI Automation — spans 2 cols × 2 rows */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReducedMotion ? undefined : { y: -4, boxShadow: "0 0 80px rgba(34,211,238,0.18)" }}
              className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(145deg, rgba(18,18,30,0.97) 0%, rgba(14,14,22,0.97) 100%)",
                border: "1px solid rgba(30,115,232,0.3)",
                boxShadow: "0 0 60px rgba(30,115,232,0.1)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(30,115,232,0.1) 0%, transparent 70%)",
                }}
              />
              {/* Top accent */}
              <div className="h-[3px] shrink-0" style={{ background: "linear-gradient(90deg,#1E73E8,#22D3EE)" }} />

              <div className="relative z-10 flex flex-col flex-1 p-10 xl:p-12">
                {/* Number */}
                <span
                  className="text-8xl font-bold tabular-nums leading-none mb-auto self-end opacity-[0.07]"
                  style={{ color: "#22D3EE" }}
                >
                  01
                </span>

                <div className="mt-auto">
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8"
                    style={{
                      background: "linear-gradient(135deg,#1E73E8,#22D3EE)",
                      boxShadow: "0 0 40px rgba(30,115,232,0.5)",
                    }}
                  >
                    <Workflow size={36} className="text-white" />
                  </div>

                  {/* Tag */}
                  <span
                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: "rgba(30,115,232,0.15)",
                      border: "1px solid rgba(30,115,232,0.35)",
                      color: "#22D3EE",
                    }}
                  >
                    Save 20+ hrs/week
                  </span>

                  <h3 className="font-display font-bold text-4xl xl:text-5xl text-white leading-tight mb-5">
                    AI Automation
                  </h3>
                  <p className="text-base xl:text-lg leading-relaxed mb-8 max-w-md" style={{ color: "rgba(180,180,210,0.85)" }}>
                    Stop doing repetitive admin. We build automations that handle bookings,
                    follow-ups, and lead capture — so you focus on customers.
                  </p>

                  <Link
                    href="/services/ai-automation"
                    className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-white text-sm group"
                    style={{
                      background: "linear-gradient(135deg,#1E73E8,#22D3EE)",
                      boxShadow: "0 0 24px rgba(30,115,232,0.4)",
                    }}
                  >
                    Find out more
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Website Builders — col 3, row 1 */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReducedMotion ? undefined : { y: -4, boxShadow: "0 0 60px rgba(34,211,238,0.16)" }}
              className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(18,18,26,0.95)",
                border: "1px solid rgba(30,115,232,0.22)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
              }}
            >
              <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#1E73E8,#22D3EE)" }} />
              <div className="relative flex flex-col flex-1 p-7 xl:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#1E73E8,#22D3EE)", boxShadow: "0 0 24px rgba(30,115,232,0.4)" }}
                  >
                    <Globe size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-bold opacity-[0.12]" style={{ color: "#22D3EE" }}>02</span>
                </div>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit"
                  style={{ background: "rgba(30,115,232,0.12)", border: "1px solid rgba(30,115,232,0.3)", color: "#22D3EE" }}
                >
                  Launch in days
                </span>
                <h3 className="font-display font-bold text-xl xl:text-2xl text-white mb-3 leading-tight">
                  Website Builders
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(180,180,205,0.8)" }}>
                  Fast, mobile-first, SEO-ready websites built in days and tuned for the customers you want.
                </p>
                <Link href="/services/website-builders" className="inline-flex items-center gap-2 text-sm font-semibold group w-fit" style={{ color: "#22D3EE" }}>
                  Find out more
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Chatbots — col 3, row 2 */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReducedMotion ? undefined : { y: -4, boxShadow: "0 0 60px rgba(34,211,238,0.16)" }}
              className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(18,18,26,0.95)",
                border: "1px solid rgba(30,115,232,0.22)",
                transition: "box-shadow 0.4s ease, transform 0.4s ease",
              }}
            >
              <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#1E73E8,#22D3EE)" }} />
              <div className="relative flex flex-col flex-1 p-7 xl:p-8">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg,#1E73E8,#22D3EE)", boxShadow: "0 0 24px rgba(30,115,232,0.4)" }}
                  >
                    <BotMessageSquare size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-bold opacity-[0.12]" style={{ color: "#22D3EE" }}>03</span>
                </div>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit"
                  style={{ background: "rgba(30,115,232,0.12)", border: "1px solid rgba(30,115,232,0.3)", color: "#22D3EE" }}
                >
                  24/7 availability
                </span>
                <h3 className="font-display font-bold text-xl xl:text-2xl text-white mb-3 leading-tight">
                  Chatbots
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "rgba(180,180,205,0.8)" }}>
                  Smart chatbots on your website, WhatsApp, or Instagram — handling bookings and leads even at 2am.
                </p>
                <Link href="/services/chatbots" className="inline-flex items-center gap-2 text-sm font-semibold group w-fit" style={{ color: "#22D3EE" }}>
                  Find out more
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
