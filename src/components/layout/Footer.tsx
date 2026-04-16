import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const serviceLinks = [
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Website Builders", href: "/services/website-builders" },
  { label: "Chatbots", href: "/services/chatbots" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Book a Call", href: "https://calendly.com/vad-optimalis/optimalis-ai-calendar", external: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-brand-blue/20 bg-surface shadow-[0_-1px_0_rgba(30,115,232,0.15)]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-md h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="rounded-xl bg-white/8 p-1.5 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Optimalis AI"
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mt-4">
              Your business,{" "}
              <span className="gradient-text font-medium">optimised by AI.</span>
            </p>
            <p className="text-xs text-text-muted/60 mt-3">
              Helping Norwich businesses save time and win more customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                      <ExternalLink size={11} className="opacity-50" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@optimalis-ai.com"
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-brand-cyan transition-colors duration-200"
                >
                  <Mail size={14} className="shrink-0" />
                  hello@optimalis-ai.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin size={14} className="shrink-0" />
                  Norwich, UK
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted/60">
            © 2026 Optimalis AI · Built in Norwich, UK
          </p>
          <p className="text-xs text-text-muted/40">
            AI that works while you sleep.
          </p>
        </div>
      </div>
    </footer>
  );
}
