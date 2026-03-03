"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "bot";
  content: string;
};

const initialMessage: Message = {
  role: "bot",
  content:
    "Hi! I'm Ace. Quick question — what's your biggest pain right now as an agent: slow lead response, manual listing launches, or not staying in touch with past clients?",
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
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
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Something went wrong — sorry! Book a free audit call and we'll sort it out live.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-20 right-4 sm:right-6 w-[340px] max-w-[calc(100vw-2rem)] z-50 rounded-2xl border border-border bg-white shadow-2xl shadow-accent/15 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-accent/5 to-gold/5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Bot size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-text-primary text-sm font-semibold">Ace</p>
                  <p className="text-text-muted text-xs">Real Estate Automation Specialist</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[360px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-navy text-white rounded-br-sm"
                        : "bg-background text-text-secondary border border-border rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border rounded-xl rounded-bl-sm px-3 py-2">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border">
              <div className="flex items-center gap-2 bg-background rounded-xl border border-border px-3 py-2 focus-within:border-gold/40 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white disabled:opacity-40 hover:bg-accent-hover transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button with pulsing ring */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/20 hover:bg-accent-hover transition-[transform,background-color] duration-200 hover:scale-105 group"
        aria-label="Open chat"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping pointer-events-none" />
        )}
        <span className="relative">
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </span>
      </button>
    </>
  );
}
