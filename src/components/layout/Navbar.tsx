"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";

const services = [
  { label: "AI Automation", href: "/services/ai-automation", desc: "Handle bookings, follow-ups & admin" },
  { label: "Website Builders", href: "/services/website-builders", desc: "Fast, SEO-ready, mobile-first sites" },
  { label: "Chatbots", href: "/services/chatbots", desc: "24/7 customer conversations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-border/50 shadow-[0_1px_0_rgba(30,115,232,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="rounded-xl bg-white/8 p-1.5 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Optimalis AI"
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-surface border border-border rounded-2xl shadow-glow-blue overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-3 py-2.5 rounded-xl hover:bg-surface-2 transition-colors duration-150 group"
                          >
                            <div className="text-sm font-medium text-text-primary group-hover:text-brand-cyan transition-colors duration-150">
                              {s.label}
                            </div>
                            <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#contact"
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                Book a Call
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-semibold transition-all duration-200 shadow-glow-blue hover:shadow-glow-cyan hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Discovery Call
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-2 transition-colors duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-8 px-6"
            >
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-semibold text-text-primary hover:text-brand-cyan transition-colors duration-200"
              >
                Home
              </Link>
              <div className="flex flex-col items-center gap-4 w-full">
                <p className="text-xs uppercase tracking-widest text-text-muted">Services</p>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-display font-medium text-text-primary hover:text-brand-cyan transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <a
                href="https://calendly.com/vad-optimalis/optimalis-ai-calendar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-4 w-full max-w-xs flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-brand-blue text-white text-lg font-semibold shadow-glow-blue"
              >
                Book Discovery Call
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
