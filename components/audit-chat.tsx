"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Send, Bot, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type Message = {
  role: "user" | "bot";
  content: string;
};

const INITIAL_MESSAGE: Message = {
  role: "bot",
  content:
    "Hi! I'm Ace — Acentra's AI audit specialist. In about 4 questions, I'll build you a personalized Automation Blueprint for your real estate business. Ready? Let's start: Are you a solo agent or do you run a team or brokerage? And roughly how many leads do you get per month?",
};

export default function AuditChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const botMessage: Message = { role: "bot", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);

      if (newMessages.length >= 8) {
        setShowBooking(true);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Sorry, something went wrong. Please try again or book a call directly — I'd love to do this audit live with you.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <section className="py-24 relative" id="ai-audit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold bg-gold-muted text-accent text-xs font-medium mb-5">
            <Sparkles size={12} className="text-gold" />
            Powered by Claude AI — Live on this page
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Get your free{" "}
            <span className="text-accent">Automation Blueprint</span> in 4
            questions
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            No forms, no email required. Talk to Ace — our AI audit specialist
            — and get a personalized automation plan for your real estate
            business right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: What you get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              {
                step: "01",
                title: "Answer 4 quick questions",
                desc: "About your business, lead volume, tools, and biggest time drain.",
              },
              {
                step: "02",
                title: "Get your Automation Blueprint",
                desc: "Ace builds a custom plan naming exactly which automations you need and why.",
              },
              {
                step: "03",
                title: "Book a call to see it built",
                desc: "Bring your blueprint to a free 30-min call and we'll show you exactly how it works.",
              },
            ].map((item, idx) => (
              <div key={item.step} className="flex gap-4 relative">
                {/* Connecting line between steps */}
                {idx < 2 && (
                  <div className="absolute left-[17px] top-10 w-px h-6 bg-gradient-to-b from-accent/20 to-transparent" />
                )}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 border border-accent/15 flex items-center justify-center text-accent text-xs font-mono font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold mb-1">
                    {item.title}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-gold-muted border border-gold/20 rounded-2xl p-5 mt-4">
              <p className="text-accent text-xs font-semibold mb-2">
                No email required
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                This isn&apos;t a lead capture form in disguise. You get your
                blueprint immediately in the chat — no strings attached.
              </p>
            </div>
          </motion.div>

          {/* Right: Chat interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-gold/20 bg-white overflow-hidden flex flex-col shadow-lg shadow-gold/10">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-gradient-to-r from-accent/5 to-gold/5">
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold">
                    Ace — Real Estate Automation Specialist
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-600 text-xs">Online now</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 max-h-[420px] min-h-[280px]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "bot" && (
                      <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                        <Bot size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-navy text-white rounded-br-sm"
                          : "bg-background border border-border text-text-secondary rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mr-2">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-background border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1 items-center">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Booking CTA (appears after blueprint) */}
              {showBooking && (
                <div className="px-5 py-3 bg-gold-muted border-t border-gold/20">
                  <Link
                    href="/book-a-call"
                    className="w-full btn-primary px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    Book Your Free Call — Bring This Blueprint
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2 bg-background rounded-xl border border-border px-4 py-3 focus-within:border-gold/40 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your answer..."
                    className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white disabled:opacity-40 hover:bg-accent-hover transition-colors flex-shrink-0"
                    aria-label="Send"
                  >
                    <Send size={13} />
                  </button>
                </div>
                <p className="text-text-muted text-xs text-center mt-2">
                  Powered by Claude AI · Your answers stay private
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
