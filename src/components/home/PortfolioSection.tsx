"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Big Fry Wymondham",
    category: "Restaurant Website",
    description:
      "A premium website for a beloved Norwich-area fish & chip shop. Full menu, opening times, and a mobile-first design built to drive footfall.",
    url: "https://big-fry-n8x3.vercel.app/",
    image: "/portfolio-big-fry.png",
  },
  {
    name: "Paper Cuts VIP",
    category: "Private Grooming Brand",
    description:
      "A high-end private barber brand for London & Essex. Membership-driven, bold aesthetic — designed to attract and convert premium clients.",
    url: "https://paper-cuts-vip.vercel.app/",
    image: "/portfolio-paper-cuts.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
            Our work
          </p>
          <h2 className="font-display font-bold text-section text-text-primary">
            Built for <span className="gradient-text">real businesses</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto leading-relaxed">
            Every site we build is fast, mobile-first, and designed to convert.
            Here&apos;s a look at two recent projects.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group glow-card rounded-3xl overflow-hidden bg-surface-2 border border-border/60 hover:border-brand-blue/40 transition-colors duration-300 cursor-pointer"
            >
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-background/60 border-b border-border/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-surface text-xs text-text-muted/50 truncate">
                  {project.url.replace("https://", "")}
                </div>
                <ExternalLink
                  size={13}
                  className="text-text-muted/40 group-hover:text-brand-cyan transition-colors duration-200 shrink-0"
                />
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="px-6 py-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-cyan text-xs font-medium mb-3">
                  {project.category}
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
