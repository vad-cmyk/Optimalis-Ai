"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

// Dynamically load Calendly to avoid SSR issues
const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => ({ default: m.InlineWidget })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[700px] flex items-center justify-center">
        <div className="text-center">
          <Calendar size={32} className="text-brand-blue mx-auto mb-3 opacity-50" />
          <p className="text-text-muted text-sm">Loading calendar...</p>
        </div>
      </div>
    ),
  }
);

export default function FinalCTA() {
  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-brand-blue/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
            Get started today
          </p>
          <h2 className="font-display font-bold text-section text-text-primary text-balance mb-4">
            Ready to optimise{" "}
            <span className="gradient-text">your business?</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call. No pitch, just clarity.
            We{"'"}ll tell you exactly what AI can and can{"'"}t do for your business.
          </p>
        </motion.div>

        {/* Calendly embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden border border-border/60 bg-surface shadow-glow-blue"
        >
          <InlineWidget
            url="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
            styles={{ height: "700px", minWidth: "320px" }}
            pageSettings={{
              backgroundColor: "12121A",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "1E73E8",
              textColor: "F4F4F8",
            }}
          />
        </motion.div>

        {/* Fallback link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-6"
        >
          <a
            href="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-cyan transition-colors duration-200"
          >
            Open Calendly in a new tab
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
