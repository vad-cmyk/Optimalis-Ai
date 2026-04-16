"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Calendar } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import FAQ from "./FAQ";

// Calendly loads client-side only to avoid SSR timeouts
const InlineWidget = dynamic(
  () => import("react-calendly").then((m) => ({ default: m.InlineWidget })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-center">
          <Calendar size={32} className="text-brand-blue mx-auto mb-3 opacity-50" />
          <p className="text-text-muted text-sm">Loading calendar...</p>
        </div>
      </div>
    ),
  }
);

// Resolve icon name string to a Lucide component
function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!Component) return null;
  return <Component {...props} />;
}

export interface IncludeItem {
  iconName: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  tagline?: string;
  includes: IncludeItem[];
  useCases: UseCase[];
  process: ProcessStep[];
  faqs: FAQItem[];
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.6, ease },
};

export default function ServicePageTemplate({
  title,
  subtitle,
  tagline,
  includes,
  useCases,
  process,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-brand-blue/8 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {tagline && (
            <motion.div {...fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-xs text-brand-cyan font-medium tracking-wide">
                {tagline}
              </span>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="font-display font-bold text-hero text-text-primary text-balance mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="text-lg text-text-muted leading-relaxed mb-10 text-balance"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <a
              href="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-base shadow-glow-blue hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Book a Free Discovery Call
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">What you get</p>
            <h2 className="font-display font-bold text-section text-text-primary">
              What{"'"}s <span className="gradient-text">included</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {includes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group p-6 rounded-2xl bg-surface-2 border border-border/60 hover:border-brand-blue/40 hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/20 flex items-center justify-center mb-4 group-hover:bg-brand-blue/25 transition-colors duration-300">
                  <Icon name={item.iconName} size={18} className="text-brand-blue" />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">Perfect for</p>
            <h2 className="font-display font-bold text-section text-text-primary">
              Who it{"'"}s <span className="gradient-text">for</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="p-6 rounded-2xl border border-border/60 bg-surface hover:border-brand-cyan/30 transition-colors duration-300"
              >
                <CheckCircle2 size={20} className="text-brand-cyan mb-4" />
                <h3 className="font-display font-semibold text-text-primary mb-2">{uc.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{uc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">The process</p>
            <h2 className="font-display font-bold text-section text-text-primary">
              How it <span className="gradient-text">works</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-surface-2 border border-border/60 hover:border-brand-blue/30 transition-colors duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center font-display font-bold text-brand-blue">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">Questions</p>
            <h2 className="font-display font-bold text-section text-text-primary">
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1, duration: 0.5, ease }}>
            <FAQ items={faqs} />
          </motion.div>
        </div>
      </section>

      {/* CTA + Calendly */}
      <section className="section-padding bg-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-brand-blue/8 blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="font-display font-bold text-section text-text-primary mb-4">
              Ready to get <span className="gradient-text">started?</span>
            </h2>
            <p className="text-text-muted text-lg">
              Book a free discovery call and we{"'"}ll figure out exactly how this works for your business.
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="rounded-3xl overflow-hidden border border-border/60 bg-background shadow-glow-blue"
          >
            <InlineWidget
              url="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
              styles={{ height: "600px", minWidth: "320px" }}
              pageSettings={{
                backgroundColor: "0A0A0F",
                primaryColor: "1E73E8",
                textColor: "F4F4F8",
              }}
            />
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2, duration: 0.4, ease }} className="text-center mt-5">
            <a
              href="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-cyan transition-colors duration-200"
            >
              Open Calendly in a new tab <ExternalLink size={13} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
