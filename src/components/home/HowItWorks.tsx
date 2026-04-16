"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, FileText, Hammer, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call",
    description: "A free 30-minute chat to understand your business, your pain points, and where AI can make the biggest difference.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Strategy & Quote",
    description: "We map out exactly what we'll build, what it costs, and what results to expect — no fluff, just clarity.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Build & Train",
    description: "Our team builds, tests, and trains your solution with your real business data. You're kept in the loop throughout.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "Go live with confidence. We handle the launch and provide ongoing support so things keep running smoothly.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="section-padding bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
            The process
          </p>
          <h2 className="font-display font-bold text-section text-text-primary">
            How it <span className="gradient-text">works</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line track */}
          <div className="absolute top-12 left-0 right-0 h-px bg-border/60 mx-[8%]" />
          {/* Animated fill */}
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-12 left-[8%] h-px bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(30,115,232,0.6)]"
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pt-6 text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full border-2 border-brand-blue bg-surface shadow-glow-blue flex items-center justify-center mx-auto mb-6">
                    <Icon size={18} className="text-brand-blue" />
                  </div>

                  <div className="text-xs font-semibold text-brand-blue/60 tracking-widest mb-2">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border/60" />
          <motion.div
            style={{ height: lineWidth }}
            className="absolute left-3 top-0 w-px bg-gradient-to-b from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(30,115,232,0.6)]"
          />

          <div className="space-y-10">
            {steps.map((step, i) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full border-2 border-brand-blue bg-surface shadow-glow-blue" />
                  <div className="text-xs font-semibold text-brand-blue/60 tracking-widest mb-1">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
