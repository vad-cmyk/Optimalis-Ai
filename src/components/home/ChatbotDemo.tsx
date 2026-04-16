"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "bot",
    content:
      "Hi! I'm Optimalis — ask me what AI could do for your business. 👋",
  },
];

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Hmm, something went wrong. Try sending again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs uppercase tracking-widest text-text-muted/60 mb-3">
              Live demo
            </p>
            <h2 className="font-display font-bold text-section text-text-primary text-balance mb-5">
              Try it <span className="gradient-text">right now</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              This is a simplified preview of the kind of chatbot we can build for your business.
              Ask it about automation, websites, or chatbots — and imagine it trained on your
              own services, FAQs, and brand voice.
            </p>
            <ul className="space-y-3">
              {[
                "Trained on your business info",
                "Works on your website, WhatsApp & Instagram",
                "Handles bookings, FAQs & lead capture",
                "Hands off to a human when needed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text-muted">
                  <span className="w-5 h-5 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: chat widget */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glow-card rounded-3xl bg-surface overflow-hidden"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/60 bg-surface-2">
              <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-glow-blue">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Optimalis Bot</div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Online — ready to help
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={messagesRef} className="h-72 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center ${
                        msg.role === "bot"
                          ? "bg-brand-blue/20 border border-brand-blue/30"
                          : "bg-surface-2 border border-border"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        <Bot size={12} className="text-brand-cyan" />
                      ) : (
                        <User size={12} className="text-text-muted" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "bot"
                          ? "bg-surface-2 text-text-primary rounded-bl-sm"
                          : "bg-brand-blue text-white rounded-br-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-end gap-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center">
                    <Bot size={12} className="text-brand-cyan" />
                  </div>
                  <div className="bg-surface-2 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-text-muted/50"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 pb-4">
              <div className="flex items-center gap-2 p-2 rounded-2xl bg-surface-2 border border-border/60 focus-within:border-brand-blue/50 transition-colors duration-200">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about AI for your business..."
                  className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted/40 outline-none px-2 py-1"
                  aria-label="Chat message"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-xl bg-brand-blue hover:bg-brand-blue/90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  aria-label="Send message"
                >
                  <Send size={13} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
