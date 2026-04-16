"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
            openIndex === i
              ? "border-brand-blue/50 bg-surface shadow-glow-blue"
              : "border-border/60 bg-surface hover:border-border"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="font-display font-medium text-text-primary group-hover:text-brand-cyan transition-colors duration-200 pr-4">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`text-text-muted shrink-0 transition-transform duration-300 ${
                openIndex === i ? "rotate-180 text-brand-cyan" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="px-6 pb-5 text-text-muted leading-relaxed text-sm">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
