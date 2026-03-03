"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const trustLogos = [
  { name: "Zillow", color: "#6BA3FF" },
  { name: "Follow Up Boss", color: "#F08D5C" },
  { name: "Realtor.com", color: "#E84D5F" },
  { name: "LionDesk", color: "#A77BFF" },
  { name: "DocuSign", color: "#D4BC8B" },
  { name: "MLS", color: "#5CD4A0" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Dark navy gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(201,169,110,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Floating decorative blobs */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C9A96E, transparent)",
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[8%] w-48 h-48 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #6BA3FF, transparent)",
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            The Automation Platform Built Exclusively for Real Estate Agents
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-white"
        >
          Close More Deals.{" "}
          <span className="text-gold">Stop Chasing Leads.</span>
          <br />
          Work Like You Have a Full Team.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          We build AI-powered automations exclusively for real estate agents —
          from instant lead response to listing launches and past client
          referrals.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-white/40 text-sm mb-10 font-medium"
        >
          Your competition is still doing it manually.
        </motion.p>

        {/* Stat bar */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10"
        >
          {[
            {
              stat: "78%",
              label: "of deals go to the first agent who responds",
            },
            { stat: "<60s", label: "our Speed-to-Lead Bot response time" },
            {
              stat: "82%",
              label: "of buyers come from referrals — automate yours",
            },
          ].map((item, i) => (
            <motion.div
              key={item.stat}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
            >
              <div className="text-3xl font-extrabold text-gold">
                {item.stat}
              </div>
              <div className="text-white/40 text-xs max-w-[150px] mt-1 leading-snug">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/book-a-call"
            className="btn-gold px-7 py-4 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
          >
            Get Your Free Automation Audit
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#ai-audit"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-[color,border-color,background-color] duration-200 px-5 py-4 border border-white/20 rounded-xl hover:border-gold/40 bg-white/5 backdrop-blur-sm hover:bg-white/10"
          >
            Try the AI Audit Live
            <ChevronRight size={14} className="text-gold" />
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div variants={fadeUp}>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-5 font-medium">
            Integrates with the tools agents already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {trustLogos.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-semibold hover:border-gold/40 hover:bg-white/10 transition-[border-color,background-color] duration-300 cursor-default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
              >
                <span style={{ color: tool.color }}>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom curved transition to cream */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L1440 80L1440 30C1440 30 1200 0 720 0C240 0 0 30 0 30L0 80Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>
    </section>
  );
}
