"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// PLACEHOLDER — owner should update these numbers with real data
const stats = [
  { value: 20, suffix: "+ hrs", label: "Saved per week", description: "given back to business owners" },
  { value: 3, suffix: "×", label: "Faster customer response", description: "vs manual handling" },
  { value: 24, suffix: "/7", label: "AI availability", description: "working while you sleep" },
  { value: 100, suffix: "%", label: "UK-based delivery", description: "Norwich-built, Norwich-proud" },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 1800,
  started,
}: {
  value: number;
  suffix: string;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!started || prefersReducedMotion) {
      setCount(value);
      return;
    }
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value, duration, prefersReducedMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-blue/6 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
            The impact
          </p>
          <h2 className="font-display font-bold text-section text-text-primary">
            Real results,{" "}
            <span className="gradient-text">measurable gains</span>
          </h2>
          <p className="text-sm text-text-muted/50 mt-3">
            {/* PLACEHOLDER — replace with real testimonial data when available */}
            Based on client outcomes — your results may vary
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-6 rounded-3xl bg-surface-2 border border-border/60 hover:border-brand-blue/30 transition-colors duration-300"
            >
              <div className="font-display font-bold text-4xl sm:text-5xl gradient-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  started={inView}
                />
              </div>
              <div className="font-semibold text-text-primary text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-text-muted/60">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
