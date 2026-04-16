"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), {
  ssr: false,
});

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const handleBookCall = () => {
    window.open("https://calendly.com/vad-optimalis/optimalis-ai-calendar", "_blank");
  };

  const handleExploreServices = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />

      {/* Particle background (lazy, disabled on reduced-motion) */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <ParticleBackground />
        </div>
      )}

      {/* Content */}
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
    </section>
  );
}
