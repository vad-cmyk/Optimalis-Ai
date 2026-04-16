"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Zap } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Built for local businesses",
    description:
      "No corporate jargon, no bloated proposals. We understand the real problems facing salons, tradies, restaurants, and clinics — and we solve them.",
  },
  {
    icon: MapPin,
    title: "Norwich-based, UK support",
    description:
      "Real humans, same time zone. We're right here in Norfolk, which means quick calls, local knowledge, and support you can actually reach.",
  },
  {
    icon: Zap,
    title: "Setup in days, not months",
    description:
      "Our streamlined process means you'll see results fast. Most clients are up and running within a week, with ROI from day one.",
  },
];

export default function WhySection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
            Why choose us
          </p>
          <h2 className="font-display font-bold text-section text-text-primary text-balance">
            Why <span className="gradient-text">Optimalis AI</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl p-8 bg-surface border border-border hover:border-brand-blue/40 hover:shadow-glow-blue transition-all duration-300"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center mb-5 group-hover:bg-brand-blue/25 transition-colors duration-300">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
